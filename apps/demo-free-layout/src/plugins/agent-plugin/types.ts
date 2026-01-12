/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import type React from 'react';

import z from 'zod';
import type { CoreMessage, ToolCallPart } from 'ai';
import type { Event, WorkflowJSON } from '@flowgram.ai/free-layout-editor';

export type ChatMessage = CoreMessage;

export type ToolCallState = 'streaming' | 'pending' | 'completed' | 'error' | 'cancelled';

export type UIMessagePart =
  | { type: 'text'; text: string }
  | {
      type: 'tool-call';
      toolCallId: string;
      toolName: string;
      args: unknown;
      result?: unknown;
      state: ToolCallState;
    };

export interface UIMessage {
  id: string;
  role: 'user' | 'assistant';
  parts: UIMessagePart[];
  timestamp: number;
  status?: 'sending' | 'sent' | 'error';
}

export interface MessageHistory {
  schema?: WorkflowJSON;
  uiMessages: {
    user: UIMessage;
    assistant: UIMessage;
  };
  chatMessages: ChatMessage[];
}

export interface AgentConfig {
  apiKey?: string;
  baseURL?: string;
  model?: string;
  temperature?: number;
  maxTokens?: number;
}

/**
 * Tool 定义 - 直接使用 AI SDK 的 Tool 格式并扩展渲染功能
 */
export interface Tool<ARGS = any, RESULT = any> {
  name?: string;
  description: string;
  parameters: z.ZodType<ARGS> | any;
  execute?: (args: ARGS) => Promise<RESULT>;
  render?: React.FC<{ args: ARGS; result?: RESULT }>;
}

/**
 * Tool 调用（使用 AI SDK 的 ToolCallPart）
 */
export type ToolCall = ToolCallPart;

/**
 * Tool 执行结果
 */
export interface ToolResult {
  toolCallId: string;
  result: string;
}
/**
 * ReAct 步骤类型
 */
export type ReActStep =
  | { type: 'thought'; content: string }
  | { type: 'tool_call'; toolCalls: ToolCall[] }
  | { type: 'tool_call_update'; toolCalls: ToolCall[] }
  | { type: 'tool_result'; results: ToolResult[] }
  | { type: 'response'; content: string };

export interface IWorkflowAgentService {
  init(config?: Partial<AgentConfig>): void;
  getUIMessages(): UIMessage[];
  hasSchema(messageId: string): boolean;
  getPreviousUserMessageId(messageId: string): string | null;
  onUIMessagesChange: Event<UIMessage[]>;
  sendMessage(content: string): Promise<void>;
  clearMessages(): void;
  cancelCurrentRequest(): void;
  retryMessage(messageId: string): Promise<void>;
  editAndResendMessage(messageId: string, newContent: string): Promise<void>;
  restoreSchema(messageId: string): void;
}

export const IWorkflowAgentService = Symbol('WorkflowAgentService');
