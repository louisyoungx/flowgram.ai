/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface AgentConfig {
  apiKey?: string;
  baseURL?: string;
  model?: string;
  temperature?: number;
  maxTokens?: number;
}

export interface ChatCompletionRequest {
  model: string;
  messages: ChatMessage[];
  temperature?: number;
  max_tokens?: number;
  stream?: boolean;
}

export interface ChatCompletionResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Array<{
    index: number;
    message: ChatMessage;
    finish_reason: string;
  }>;
  usage?: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

export interface AgentService {
  sendMessage: (messages: ChatMessage[]) => Promise<string>;
  streamMessage: (messages: ChatMessage[], onChunk: (chunk: string) => void) => Promise<void>;
  updateConfig: (config: Partial<AgentConfig>) => void;
}
