/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import {
  Emitter,
  injectable,
  inject,
  WorkflowDocument,
  WorkflowOperationBaseService,
  Playground,
  fitView,
} from '@flowgram.ai/free-layout-editor';

import type {
  AgentConfig,
  IWorkflowAgentService,
  ChatMessage,
  UIChatMessage,
  Tool,
  ToolCall,
  ToolResult,
  ReActStep,
  AgentServiceChatMessage,
} from './types';
import { WorkflowAgentToolRegistry } from './tools';
import SYSTEM_PROMPT from './system-prompt.md?raw';
import { DEFAULT_AGENT_CONFIG } from './constant';
import { WorkflowAgentUtils } from './agent-utils';

@injectable()
export class WorkflowAgentService implements IWorkflowAgentService {
  @inject(WorkflowAgentToolRegistry)
  private toolRegistry: WorkflowAgentToolRegistry;

  @inject(WorkflowDocument) document: WorkflowDocument;

  @inject(WorkflowOperationBaseService) operationService: WorkflowOperationBaseService;

  @inject(Playground) playground: Playground;

  private config: AgentConfig;

  private messages: AgentServiceChatMessage[] = [];

  private messagesEmitter = new Emitter<UIChatMessage[]>();

  private abortController: AbortController | null = null;

  public onMessagesChange = this.messagesEmitter.event;

  public init(config?: Partial<AgentConfig>): void {
    this.config = { ...DEFAULT_AGENT_CONFIG, ...config };

    // 设置初始欢迎消息
    if (this.messages.length === 0) {
      this.resetMessages();
    }
  }

  public getMessages(): UIChatMessage[] {
    return this.messages.map(({ schema, ...msg }) => msg);
  }

  public hasSchema(messageId: string): boolean {
    const message = this.messages.find((m) => m.id === messageId);
    return !!message?.schema;
  }

  public getPreviousUserMessageId(messageId: string): string | null {
    const messageIndex = this.messages.findIndex((m) => m.id === messageId);
    if (messageIndex === -1) {
      return null;
    }

    for (let i = messageIndex - 1; i >= 0; i--) {
      if (this.messages[i].role === 'user') {
        return this.messages[i].id;
      }
    }

    return null;
  }

  public clearMessages(): void {
    this.resetMessages();
    this.notifyListeners();
  }

  public cancelCurrentRequest(): void {
    if (this.abortController) {
      this.abortController.abort();
      this.abortController = null;
    }
  }

  public restoreSchema(messageId: string): void {
    const message = this.messages.find((m) => m.id === messageId);
    if (!message?.schema) {
      return;
    }

    this.operationService.fromJSON(message.schema);

    fitView(this.document, this.playground.config);
  }

  public async retryMessage(messageId: string): Promise<void> {
    const messageIndex = this.messages.findIndex((m) => m.id === messageId);
    if (messageIndex === -1) {
      return;
    }

    const message = this.messages[messageIndex];
    if (message.role !== 'assistant') {
      return;
    }

    let userMessageIndex = -1;
    for (let i = messageIndex - 1; i >= 0; i--) {
      if (this.messages[i].role === 'user') {
        userMessageIndex = i;
        break;
      }
    }

    if (userMessageIndex === -1) {
      return;
    }

    const userMessage = this.messages[userMessageIndex];
    this.messages = this.messages.slice(0, userMessageIndex);
    this.notifyListeners();

    await this.sendMessage(userMessage.content);
  }

  public async editAndResendMessage(messageId: string, newContent: string): Promise<void> {
    const messageIndex = this.messages.findIndex((m) => m.id === messageId);
    if (messageIndex === -1) {
      return;
    }

    const message = this.messages[messageIndex];
    if (message.role !== 'user') {
      return;
    }

    this.messages = this.messages.slice(0, messageIndex);
    this.notifyListeners();

    await this.sendMessage(newContent);
  }

  /**
   * 发送消息并处理 AI 响应
   */
  public async sendMessage(content: string): Promise<void> {
    if (!content.trim()) return;

    // 创建新的 AbortController
    this.abortController = new AbortController();

    // 添加用户消息
    const userMessage = WorkflowAgentUtils.createUserMessage(content);

    // 在发送消息前保存当前 workflow schema 快照
    const schema = this.document.toJSON();
    const userMessageWithSchema = { ...userMessage, schema };

    this.addMessage(userMessageWithSchema);

    // 创建 assistant 消息
    const assistantMessage = WorkflowAgentUtils.createAssistantMessage();
    const assistantMessageId = assistantMessage.id;
    this.addMessage(assistantMessage);

    try {
      // 构建对话历史
      const messages = this.createMessages();
      const tools = this.toolRegistry.getAllTools();

      // 执行 ReAct Loop
      await this.executeReActLoopStream({
        messages,
        tools,
        maxIterations: 100,
        onChunk: (chunk) => {
          const msg = this.messages.find((m) => m.id === assistantMessageId);
          if (msg) {
            this.updateMessage(assistantMessageId, {
              content: msg.content + chunk,
            });
          }
        },
        onStep: (step) => {
          if (step.type === 'tool_call') {
            const toolCallsXML = WorkflowAgentUtils.formatToolCallsToXML(step.toolCalls);
            const msg = this.messages.find((m) => m.id === assistantMessageId);
            if (msg) {
              this.updateMessage(assistantMessageId, {
                content: msg.content + toolCallsXML,
              });
            }
          } else if (step.type === 'tool_call_update') {
            const msg = this.messages.find((m) => m.id === assistantMessageId);
            if (msg) {
              const updatedContent = WorkflowAgentUtils.updateToolCallArguments(
                msg.content,
                step.toolCalls
              );
              this.updateMessage(assistantMessageId, {
                content: updatedContent,
              });
            }
          } else if (step.type === 'tool_result') {
            const msg = this.messages.find((m) => m.id === assistantMessageId);
            if (msg) {
              const updatedContent = WorkflowAgentUtils.updateToolCallResults(
                msg.content,
                step.results
              );
              this.updateMessage(assistantMessageId, {
                content: updatedContent,
              });
            }
          }
        },
      });

      // 标记消息发送成功
      this.updateMessage(assistantMessageId, {
        status: 'sent',
      });
    } catch (error) {
      // 检查是否为取消错误
      if (
        error instanceof Error &&
        (error.name === 'AbortError' || error.message.includes('aborted'))
      ) {
        // 取消请求时，处理未完成的工具调用
        const msg = this.messages.find((m) => m.id === assistantMessageId);
        if (msg) {
          const updatedContent = WorkflowAgentUtils.markIncompleteToolCallsAsCancelled(msg.content);
          this.updateMessage(assistantMessageId, {
            content: updatedContent,
            status: 'sent',
          });
        } else {
          this.updateMessage(assistantMessageId, {
            status: 'sent',
          });
        }
      } else {
        // 处理其他错误
        const errorContent = WorkflowAgentUtils.formatErrorMessage(error);
        this.updateMessage(assistantMessageId, {
          content: errorContent,
          status: 'error',
        });
      }
    } finally {
      this.abortController = null;
    }
  }

  private resetMessages(): void {
    this.messages = [];
  }

  private notifyListeners(): void {
    this.messagesEmitter.fire(this.getMessages());
  }

  private addMessage(message: UIChatMessage): void {
    this.messages.push(message);
    this.notifyListeners();
  }

  private updateMessage(messageId: string, updates: Partial<UIChatMessage>): void {
    const index = this.messages.findIndex((msg) => msg.id === messageId);
    if (index !== -1) {
      this.messages[index] = { ...this.messages[index], ...updates };
      this.notifyListeners();
    }
  }

  private createMessages(): ChatMessage[] {
    const history: ChatMessage[] = [
      {
        role: 'system',
        content: this.systemPrompt,
      },
      ...this.messages
        .filter((msg) => msg.role === 'user' || msg.role === 'assistant')
        .map((msg) => ({
          role: msg.role,
          content: WorkflowAgentUtils.removeToolCallsXML(msg.content),
        })),
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
  private async executeReActLoopStream(params: {
    messages: ChatMessage[];
    tools: Tool[];
    maxIterations: number;
    onStep: (step: ReActStep) => void; // 步骤回调
    onChunk: (chunk: string) => void; // 流式响应回调
  }): Promise<string> {
    const { messages, tools, maxIterations, onChunk, onStep } = params;

    let currentMessages = [...messages];
    let iteration = 0;
    let lastContent = '';

    while (iteration < maxIterations) {
      iteration++;

      // 调用 LLM 获取响应（流式）
      let fullContent = '';
      let toolCallsDetected = false;
      const response = await this.callLLMStream({
        messages: currentMessages,
        tools,
        onChunk: (chunk) => {
          fullContent += chunk;
          // 实时输出思考过程
          onChunk(chunk);
        },
        onToolCallDetected: (toolCalls) => {
          if (!toolCallsDetected) {
            toolCallsDetected = true;
            onStep({
              type: 'tool_call',
              toolCalls,
            });
          }
        },
      });

      // 保存最后的内容
      lastContent = fullContent;

      // 如果有内容（思考过程），发出 thought 步骤
      if (fullContent) {
        onStep({
          type: 'thought',
          content: fullContent,
        });
      }

      // 检查是否有工具调用
      if (response.toolCalls && response.toolCalls.length > 0) {
        // 如果在流式传输中已经触发了工具调用回调（显示了 loading）
        // 这里需要更新完整的参数
        if (toolCallsDetected) {
          // 触发参数更新步骤
          onStep({
            type: 'tool_call_update',
            toolCalls: response.toolCalls,
          });
        } else {
          // 如果没有提前触发（不太可能发生），这里触发
          onStep({
            type: 'tool_call',
            toolCalls: response.toolCalls,
          });
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
        onStep({
          type: 'tool_result',
          results: toolResults,
        });

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
      onStep({
        type: 'response',
        content: fullContent,
      });

      return fullContent;
    }

    // 达到最大迭代次数，输出警告信息但保留之前的内容
    const warningMessage = `\n\n 已达到最大迭代次数（${maxIterations}次），任务可能未完全完成，输入 “继续” 进行任务。`;
    onChunk(warningMessage);

    onStep({
      type: 'response',
      content: lastContent + warningMessage,
    });

    return lastContent + warningMessage;
  }

  /**
   * 调用 LLM（流式版本）
   */
  private async callLLMStream(params: {
    messages: ChatMessage[];
    tools: Tool[];
    onChunk: (chunk: string) => void;
    onToolCallDetected: (toolCalls: ToolCall[]) => void;
  }): Promise<{
    content: string;
    toolCalls?: ToolCall[];
  }> {
    const { messages, tools, onChunk, onToolCallDetected } = params;
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
        signal: this.abortController?.signal,
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

                // 检测到工具调用时立即通知（用于显示 loading）
                if (!toolCallsNotified && toolCalls.length > 0) {
                  const completeToolCalls = toolCalls.filter((tc) => tc.id && tc.function.name);
                  if (completeToolCalls.length > 0) {
                    toolCallsNotified = true;
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
   * 执行工具调用（并发执行）
   */
  private async executeTools(toolCalls: ToolCall[]): Promise<ToolResult[]> {
    const promises = toolCalls.map(async (toolCall) => {
      const args = JSON.parse(toolCall.function.arguments);
      const result = await this.toolRegistry.execute(toolCall.function.name, args);
      return {
        toolCallId: toolCall.id,
        result,
      };
    });

    return Promise.all(promises);
  }
}
