/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import type {
  AgentConfig,
  IWorkflowAgentService,
  ChatMessage,
  UIChatMessage,
  Tool,
  ToolCall,
  ToolResult,
  ReActConfig,
} from './types';
import { defaultToolRegistry } from './tools';
import { SYSTEM_PROMPT } from './prompt';
import { DEFAULT_AGENT_CONFIG } from './constant';

export class WorkflowAgentService implements IWorkflowAgentService {
  private config: AgentConfig;

  public init(config?: Partial<AgentConfig>): void {
    this.config = { ...DEFAULT_AGENT_CONFIG, ...config };
  }

  public buildConversationHistory(uiMessages: UIChatMessage[], userMessage: string): ChatMessage[] {
    const history: ChatMessage[] = [
      {
        role: 'system',
        content: this.systemPrompt,
      },
      ...uiMessages.map((msg) => ({
        role: msg.role,
        content: msg.content,
      })),
      {
        role: 'user',
        content: userMessage,
      },
    ];

    return history;
  }

  private get systemPrompt(): string {
    return SYSTEM_PROMPT;
  }

  /**
   * 执行 ReAct Loop（流式版本）
   * 实现思考-行动-观察循环，支持工具调用和流式输出
   */
  public async executeReActLoopStream(
    messages: ChatMessage[],
    tools: Tool[],
    config?: ReActConfig & { onChunk?: (chunk: string) => void }
  ): Promise<string> {
    const maxIterations = config?.maxIterations ?? 10;
    const onStep = config?.onStep;
    const onChunk = config?.onChunk;

    let currentMessages = [...messages];
    let iteration = 0;

    while (iteration < maxIterations) {
      iteration++;

      // 调用 LLM 获取响应（流式）
      let fullContent = '';
      let toolCallsDetected = false;
      const response = await this.callLLMStream(
        currentMessages,
        tools,
        (chunk) => {
          fullContent += chunk;
          // 实时输出思考过程
          if (onChunk) {
            onChunk(chunk);
          }
        },
        (toolCalls) => {
          // 一旦检测到工具调用，立即触发回调
          if (!toolCallsDetected && onStep) {
            toolCallsDetected = true;
            onStep({
              type: 'tool_call',
              toolCalls,
            });
          }
        }
      );

      // 如果有内容（思考过程），发出 thought 步骤
      if (fullContent && onStep) {
        onStep({
          type: 'thought',
          content: fullContent,
        });
      }

      // 检查是否有工具调用
      if (response.toolCalls && response.toolCalls.length > 0) {
        // 工具调用步骤已经在流式解析时触发了（通过 onToolCallDetected）
        // 这里只需要确保有延迟让 UI 更新
        if (!toolCallsDetected) {
          // 如果因为某种原因没有在流式过程中检测到，这里补充触发
          if (onStep) {
            onStep({
              type: 'tool_call',
              toolCalls: response.toolCalls,
            });
          }
        }

        // 添加短暂延迟，确保 UI 有时间更新显示工具调用卡片
        await new Promise((resolve) => setTimeout(resolve, 100));

        // 将助手的工具调用添加到消息历史
        currentMessages.push({
          role: 'assistant',
          content: fullContent,
          tool_calls: response.toolCalls,
        } as any);

        // 执行工具调用
        const toolResults: ToolResult[] = await this.executeTools(response.toolCalls);

        // 发出工具结果步骤
        if (onStep) {
          onStep({
            type: 'tool_result',
            results: toolResults,
          });
        }

        // 将工具结果添加到消息历史
        for (const result of toolResults) {
          currentMessages.push({
            role: 'tool',
            content: result.result,
            tool_call_id: result.toolCallId,
          } as any);
        }

        // 继续下一次循环
        continue;
      }

      // 没有工具调用，返回最终响应
      if (onStep) {
        onStep({
          type: 'response',
          content: fullContent,
        });
      }

      return fullContent;
    }

    throw new Error(`ReAct Loop 达到最大迭代次数 ${maxIterations}`);
  }

  /**
   * 调用 LLM（流式版本）
   */
  private async callLLMStream(
    messages: ChatMessage[],
    tools: Tool[],
    onChunk: (chunk: string) => void,
    onToolCallDetected?: (toolCalls: ToolCall[]) => void
  ): Promise<{
    content: string;
    toolCalls?: ToolCall[];
  }> {
    if (!this.config.apiKey) {
      throw new Error('API Key is not configured. Please set the API key in settings.');
    }

    const request: any = {
      model: this.config.model!,
      messages,
      temperature: this.config.temperature,
      max_tokens: this.config.maxTokens,
      stream: true,
    };

    // 如果提供了工具，添加到请求中
    if (tools.length > 0) {
      request.tools = tools;
      request.tool_choice = 'auto';
    }

    try {
      const response = await fetch(`${this.config.baseURL}/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.config.apiKey}`,
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.error?.message || `API request failed with status ${response.status}`
        );
      }

      const reader = response.body?.getReader();
      if (!reader) {
        throw new Error('Response body is not readable');
      }

      const decoder = new TextDecoder();
      let buffer = '';
      let fullContent = '';
      let toolCalls: ToolCall[] | undefined;
      let toolCallsNotified = false;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          const trimmedLine = line.trim();
          if (!trimmedLine || trimmedLine === 'data: [DONE]') continue;

          if (trimmedLine.startsWith('data: ')) {
            try {
              const jsonStr = trimmedLine.slice(6);
              const data = JSON.parse(jsonStr);
              const delta = data.choices?.[0]?.delta;

              if (delta?.content) {
                fullContent += delta.content;
                onChunk(delta.content);
              }

              // 收集工具调用信息
              if (delta?.tool_calls) {
                if (!toolCalls) {
                  toolCalls = [];
                }
                for (const tc of delta.tool_calls) {
                  const index = tc.index ?? 0;
                  if (!toolCalls[index]) {
                    toolCalls[index] = {
                      id: tc.id || '',
                      type: 'function',
                      function: {
                        name: tc.function?.name || '',
                        arguments: tc.function?.arguments || '',
                      },
                    };
                  } else {
                    // 追加参数
                    if (tc.function?.arguments) {
                      toolCalls[index].function.arguments += tc.function.arguments;
                    }
                    if (tc.function?.name) {
                      toolCalls[index].function.name = tc.function.name;
                    }
                    if (tc.id) {
                      toolCalls[index].id = tc.id;
                    }
                  }
                }

                // 检查是否有完整的工具调用（有 name 和 id）
                // 立即通知 UI
                if (!toolCallsNotified && toolCalls.length > 0 && onToolCallDetected) {
                  const completeToolCalls = toolCalls.filter((tc) => tc.id && tc.function.name);
                  if (completeToolCalls.length > 0) {
                    toolCallsNotified = true;
                    // 立即触发回调，让 UI 显示工具调用卡片
                    onToolCallDetected([...completeToolCalls]);
                  }
                }
              }
            } catch (e) {
              console.warn('Failed to parse SSE data:', e);
            }
          }
        }
      }

      return {
        content: fullContent,
        toolCalls,
      };
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to call LLM: ${error.message}`);
      }
      throw new Error('Failed to call LLM: Unknown error');
    }
  }

  /**
   * 执行工具调用
   */
  private async executeTools(toolCalls: ToolCall[]): Promise<ToolResult[]> {
    const results: ToolResult[] = [];

    for (const toolCall of toolCalls) {
      try {
        const args = JSON.parse(toolCall.function.arguments);
        const result = await defaultToolRegistry.execute(toolCall.function.name, args);

        results.push({
          toolCallId: toolCall.id,
          result,
        });
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';

        results.push({
          toolCallId: toolCall.id,
          result: JSON.stringify({
            success: false,
            error: errorMessage,
          }),
          error: errorMessage,
        });
      }
    }

    return results;
  }
}
