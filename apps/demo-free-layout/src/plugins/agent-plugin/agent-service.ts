/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import type {
  AgentConfig,
  IWorkflowAgentService,
  ChatMessage,
  UIChatMessage,
  ChatCompletionRequest,
  ChatCompletionResponse,
} from './types';
import { SYSTEM_PROMPT } from './prompt';

export class WorkflowAgentService implements IWorkflowAgentService {
  private config: AgentConfig;

  constructor(config?: Partial<AgentConfig>) {
    this.config = { ...config };
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

  public async sendMessage(messages: ChatMessage[]): Promise<string> {
    if (!this.config.apiKey) {
      throw new Error('API Key is not configured. Please set the API key in settings.');
    }

    const request: ChatCompletionRequest = {
      model: this.config.model!,
      messages,
      temperature: this.config.temperature,
      max_tokens: this.config.maxTokens,
      stream: false,
    };

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

      const data: ChatCompletionResponse = await response.json();

      if (!data.choices || data.choices.length === 0) {
        throw new Error('No response from API');
      }

      return data.choices[0].message.content;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to send message: ${error.message}`);
      }
      throw new Error('Failed to send message: Unknown error');
    }
  }

  public async streamMessage(
    messages: ChatMessage[],
    onChunk: (chunk: string) => void
  ): Promise<void> {
    if (!this.config.apiKey) {
      throw new Error('API Key is not configured. Please set the API key in settings.');
    }

    const request: ChatCompletionRequest = {
      model: this.config.model!,
      messages,
      temperature: this.config.temperature,
      max_tokens: this.config.maxTokens,
      stream: true,
    };

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

              if (data.choices?.[0]?.delta?.content) {
                onChunk(data.choices[0].delta.content);
              }
            } catch (e) {
              // Skip invalid JSON
              console.warn('Failed to parse SSE data:', e);
            }
          }
        }
      }
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to stream message: ${error.message}`);
      }
      throw new Error('Failed to stream message: Unknown error');
    }
  }

  private get systemPrompt(): string {
    return SYSTEM_PROMPT;
  }
}
