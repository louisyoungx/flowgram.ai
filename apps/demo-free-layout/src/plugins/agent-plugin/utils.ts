/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import type { UIMessage } from './types';

export namespace WorkflowAgentUtils {
  export const createUserMessage = (content: string): UIMessage => ({
    id: Date.now().toString(),
    role: 'user',
    parts: [{ type: 'text', text: content }],
    timestamp: Date.now(),
    status: 'sent',
  });

  export const createAssistantMessage = (id?: string): UIMessage => ({
    id: id || (Date.now() + 1).toString(),
    role: 'assistant',
    parts: [],
    timestamp: Date.now(),
    status: 'sending',
  });

  export const formatErrorMessage = (error: unknown): string => {
    if (error instanceof Error) {
      return `抱歉，发生了错误：${error.message}\n\n请检查 API 配置是否正确，或稍后重试。`;
    }
    return '抱歉，发生了未知错误，请稍后重试。';
  };

  export const estimateTokens = (text: string): number => {
    if (!text) {
      return 0;
    }
    return Math.ceil(text.length / 4);
  };
}
