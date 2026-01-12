/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import type React from 'react';

import z from 'zod';
import type { CoreMessage, ToolCallPart } from 'ai';
import type { Event, WorkflowJSON } from '@flowgram.ai/free-layout-editor';

export type ChatMessage = CoreMessage;

export interface UIMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
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
  // 自定义渲染组件
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
  /**
   * 获取当前消息列表
   */
  getUIMessages(): UIMessage[];

  /**
   * 检查指定消息是否有 schema
   */
  hasSchema(messageId: string): boolean;

  /**
   * 获取指定消息之前的用户消息 ID
   */
  getPreviousUserMessageId(messageId: string): string | null;

  /**
   * 监听消息变化
   */
  onUIMessagesChange: Event<UIMessage[]>;

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

  /**
   * 重试指定的消息
   */
  retryMessage(messageId: string): Promise<void>;

  /**
   * 编辑并重新发送指定的用户消息
   */
  editAndResendMessage(messageId: string, newContent: string): Promise<void>;

  /**
   * 恢复指定消息的 schema
   */
  restoreSchema(messageId: string): void;
}

export const IWorkflowAgentService = Symbol('WorkflowAgentService');
