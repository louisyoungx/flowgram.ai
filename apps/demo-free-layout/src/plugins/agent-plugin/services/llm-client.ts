/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import type { Tool as AITool } from 'ai';
import { streamText } from 'ai';
import { injectable } from '@flowgram.ai/free-layout-editor';
import { createOpenAI } from '@ai-sdk/openai';

import type { AgentConfig, ChatMessage, ToolCall } from '../types';

export interface LLMStreamParams {
  messages: ChatMessage[];
  tools: Record<string, AITool>;
  onChunk: (chunk: string) => void;
  onToolCallDetected: (toolCalls: ToolCall[]) => void;
  signal?: AbortSignal;
}

export interface LLMStreamResponse {
  content: string;
  toolCalls?: ToolCall[];
}

/**
 * LLM 客户端服务
 * 使用 Vercel AI SDK 进行统一的 LLM 调用
 * 支持多种模型提供商、自动缓存、流式响应等特性
 */
@injectable()
export class LLMClient {
  private config: AgentConfig | null = null;

  /**
   * 初始化配置
   */
  init(config: AgentConfig): void {
    this.config = config;
  }

  /**
   * 获取当前配置
   */
  getConfig(): AgentConfig | null {
    return this.config;
  }

  private createModel(config: AgentConfig) {
    const modelName = config.model || 'gpt-4';

    const provider = createOpenAI({
      apiKey: config.apiKey,
      baseURL: config.baseURL,
    });
    return provider.chat(modelName);
  }

  /**
   * 流式调用 LLM
   */
  async callStream(params: LLMStreamParams): Promise<LLMStreamResponse> {
    const { messages, tools, onChunk, onToolCallDetected, signal } = params;

    console.log('[LLMClient] Starting stream call with:', {
      messageCount: messages.length,
      toolCount: Object.keys(tools).length,
      config: this.config,
    });

    if (!this.config?.apiKey) {
      throw new Error('API Key is not configured. Please set the API key in settings.');
    }

    try {
      const model = this.createModel(this.config);
      const modelName = this.config.model || 'gpt-4';

      console.log('[LLMClient] Provider info:', {
        modelName,
        baseURL: this.config.baseURL,
      });

      const result = streamText({
        model,
        messages,
        tools,
        temperature: this.config.temperature,
        maxOutputTokens: this.config.maxTokens,
        abortSignal: signal,
      });

      console.log('[LLMClient] streamText initiated, starting to read stream');

      let fullContent = '';
      const toolCalls: ToolCall[] = [];

      console.log('[LLMClient] Starting to process stream...');

      try {
        for await (const part of result.fullStream) {
          console.log('[LLMClient] Received stream part:', part.type, part);

          if (part.type === 'text-delta') {
            fullContent += part.text;
            onChunk(part.text);
          } else if (part.type === 'tool-input-start') {
            const partialToolCall: ToolCall = {
              type: 'tool-call',
              toolCallId: part.id,
              toolName: part.toolName,
              args: {},
            };
            toolCalls.push(partialToolCall);
            onToolCallDetected([...toolCalls]);
          } else if (part.type === 'tool-input-delta') {
          } else if (part.type === 'tool-call') {
            const convertedToolCall: ToolCall = {
              type: 'tool-call',
              toolCallId: part.toolCallId,
              toolName: part.toolName,
              args: part.input,
            };
            const existingIndex = toolCalls.findIndex((tc) => tc.toolCallId === part.toolCallId);
            if (existingIndex >= 0) {
              toolCalls[existingIndex] = convertedToolCall;
            } else {
              toolCalls.push(convertedToolCall);
            }
          } else if (part.type === 'error') {
            console.error('[LLMClient] Stream error:', part.error);
            throw part.error;
          }
        }
      } catch (streamError) {
        console.error('[LLMClient] Stream processing error:', streamError);
        throw streamError;
      }

      console.log('[LLMClient] Stream completed, full content length:', fullContent.length);

      const resolvedToolCalls = await result.toolCalls;
      console.log('[LLMClient] Resolved tool calls:', resolvedToolCalls);

      if (resolvedToolCalls && resolvedToolCalls.length > 0) {
        toolCalls.length = 0;
        for (const tc of resolvedToolCalls) {
          toolCalls.push({
            type: 'tool-call',
            toolCallId: tc.toolCallId,
            toolName: tc.toolName,
            args: tc.input,
          });
        }
      }

      return {
        content: fullContent,
        toolCalls: toolCalls.length > 0 ? toolCalls : undefined,
      };
    } catch (error) {
      console.error('[LLMClient] Error calling LLM:', error);
      console.error('[LLMClient] Error details:', {
        name: error instanceof Error ? error.name : 'Unknown',
        message: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined,
      });
      if (error instanceof Error) {
        throw new Error(`Failed to call LLM: ${error.message}`);
      }
      throw new Error('Failed to call LLM: Unknown error');
    }
  }

  /**
   * 非流式调用 LLM（用于摘要等场景）
   */
  async callSync(
    messages: ChatMessage[],
    options?: {
      temperature?: number;
      maxTokens?: number;
    }
  ): Promise<string> {
    if (!this.config?.apiKey) {
      throw new Error('API Key is not configured');
    }

    try {
      const model = this.createModel(this.config);

      const DEFAULT_TEMPERATURE = 0.3;
      const DEFAULT_MAX_TOKENS = 2000;

      const result = streamText({
        model,
        messages,
        temperature: options?.temperature ?? DEFAULT_TEMPERATURE,
        maxOutputTokens: options?.maxTokens ?? DEFAULT_MAX_TOKENS,
      });

      let content = '';
      for await (const delta of result.textStream) {
        content += delta;
      }

      return content;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to call LLM: ${error.message}`);
      }
      throw new Error('Failed to call LLM: Unknown error');
    }
  }
}
