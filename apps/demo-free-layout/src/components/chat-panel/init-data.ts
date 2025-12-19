/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
  status?: 'sending' | 'sent' | 'error';
}

// 初始欢迎消息
export const initialMessages: ChatMessage[] = [
  {
    id: '1',
    role: 'assistant',
    content: '你好！我是 FlowGram AI 助手。我可以帮你创建和编辑流程图，有什么我可以帮助你的吗？',
    timestamp: Date.now(),
    status: 'sent',
  },
];

// 建议的快捷问题
export const suggestionQuestions = [
  '帮我创建一个流程图',
  '优化当前流程图',
  '添加错误处理节点',
  '解释这个流程图的逻辑',
];
