/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

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
 * Tool 执行器
 */
export type ToolExecutor = (args: any) => Promise<string> | string;

/**
 * ReAct 步骤类型
 */
export type ReActStep =
  | { type: 'thought'; content: string }
  | { type: 'tool_call'; toolCalls: ToolCall[] }
  | { type: 'tool_result'; results: ToolResult[] }
  | { type: 'response'; content: string };

/**
 * ReAct Loop 配置
 */
export interface ReActConfig {
  maxIterations?: number; // 最大迭代次数，默认 10
  onStep?: (step: ReActStep) => void; // 步骤回调
}

export interface IWorkflowAgentService {
  buildConversationHistory: (uiMessages: UIChatMessage[], userMessage: string) => ChatMessage[];
  /**
   * 执行 ReAct Loop（流式版本）
   * @param messages 对话历史
   * @param tools 可用工具列表
   * @param config ReAct 配置（包含 onChunk 回调）
   * @returns 最终响应内容
   */
  executeReActLoopStream: (
    messages: ChatMessage[],
    tools: Tool[],
    config?: ReActConfig & { onChunk?: (chunk: string) => void }
  ) => Promise<string>;
}

export const IWorkflowAgentService = Symbol('WorkflowAgentService');
