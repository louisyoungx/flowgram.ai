/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import type { Event } from '@flowgram.ai/free-layout-editor';

/**
 * Agent 层消息接口（用于 API 调用）
 */
export interface ChatMessage {
  role: 'user' | 'assistant' | 'system' | 'tool';
  content: string;
  tool_calls?: ToolCall[];
  tool_call_id?: string;
}

/**
 * UI 层消息接口（包含额外的 UI 状态）
 */
export interface UIChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
  status?: 'sending' | 'sent' | 'error';
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

/**
 * Tool 函数定义
 */
export interface ToolFunction {
  name: string;
  description: string;
  parameters: {
    type: 'object';
    properties: Record<string, any>;
    required?: string[];
  };
}

/**
 * Tool 定义
 */
export interface Tool {
  type: 'function';
  function: ToolFunction;
}

/**
 * Tool 调用参数
 */
export interface ToolCall {
  id: string;
  type: 'function';
  function: {
    name: string;
    arguments: string; // JSON string
  };
}

/**
 * Tool 执行结果
 */
export interface ToolResult {
  toolCallId: string;
  result: string;
  error?: string;
}

/**
 * ReAct 步骤类型
 */
export type ReActStep =
  | { type: 'thought'; content: string }
  | { type: 'tool_call'; toolCalls: ToolCall[] }
  | { type: 'tool_result'; results: ToolResult[] }
  | { type: 'response'; content: string };

export interface IWorkflowAgentService {
  init(config?: Partial<AgentConfig>): void;

  /**
   * 获取当前消息列表
   */
  getMessages(): UIChatMessage[];

  /**
   * 监听消息变化
   */
  onMessagesChange: Event<UIChatMessage[]>;

  /**
   * 发送消息（内部处理 ReAct Loop）
   */
  sendMessage(content: string): Promise<void>;

  /**
   * 清空消息历史
   */
  clearMessages(): void;

  /**
   * 取消当前正在进行的请求
   */
  cancelCurrentRequest(): void;
}

export const IWorkflowAgentService = Symbol('WorkflowAgentService');
