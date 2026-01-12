/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { injectable, inject } from '@flowgram.ai/free-layout-editor';

import { WorkflowAgentUtils } from '../utils';
import type { MessageHistory, ChatMessage } from '../types';
import SummaryPrompt from '../prompts/summary-prompt.md?raw';
import {
  CONTEXT_COMPACT_THRESHOLD,
  CONTEXT_COMPACT_KEEP_RECENT,
  MIN_MESSAGES_BETWEEN_SUMMARIES,
} from '../constant';
import { LLMClient } from './llm-client';

@injectable()
export class ContextCompactor {
  @inject(LLMClient)
  private llmClient: LLMClient;

  /**
   * 提取消息内容为字符串（兼容 AI SDK 的 CoreMessage 格式）
   */
  private extractMessageContent(content: ChatMessage['content']): string {
    if (typeof content === 'string') {
      return content;
    }
    if (Array.isArray(content)) {
      return content
        .map((part) => {
          if ('text' in part) {
            return part.text;
          }
          return '';
        })
        .join('');
    }
    return '';
  }

  shouldCompact(histories: MessageHistory[], lastSummaryIndex: number): boolean {
    const allChatMessages = histories.flatMap((h) => h.chatMessages);

    const totalTokens = allChatMessages.reduce(
      (sum, msg) =>
        sum + WorkflowAgentUtils.estimateTokens(this.extractMessageContent(msg.content)),
      0
    );

    if (totalTokens < CONTEXT_COMPACT_THRESHOLD) {
      return false;
    }

    const MESSAGES_THRESHOLD_DIVISOR = 2;
    const historiesSinceLastSummary = histories.length - lastSummaryIndex;
    if (historiesSinceLastSummary < MIN_MESSAGES_BETWEEN_SUMMARIES / MESSAGES_THRESHOLD_DIVISOR) {
      return false;
    }

    return true;
  }

  async generateSummary(histories: MessageHistory[]): Promise<string | null> {
    const historiesToSummarize = histories.slice(0, -CONTEXT_COMPACT_KEEP_RECENT);

    const MIN_HISTORIES_TO_SUMMARIZE = 2;
    if (historiesToSummarize.length < MIN_HISTORIES_TO_SUMMARIZE) {
      return null;
    }

    const messagesToSummarize: ChatMessage[] = historiesToSummarize.flatMap((h) =>
      h.chatMessages.filter((m) => m.role === 'user' || m.role === 'assistant')
    );

    const MIN_MESSAGES_TO_SUMMARIZE = 4;
    if (messagesToSummarize.length < MIN_MESSAGES_TO_SUMMARIZE) {
      return null;
    }

    const summaryMessages: ChatMessage[] = [
      {
        role: 'system',
        content: 'You are a helpful assistant that summarizes conversations concisely.',
      },
      ...messagesToSummarize
        .map((msg) => {
          const { role } = msg;
          if (role === 'user' || role === 'assistant') {
            const result: ChatMessage = {
              role,
              content: this.extractMessageContent(msg.content),
            };
            return result;
          }
          // 过滤掉非 user/assistant 消息
          return null;
        })
        .filter((msg): msg is ChatMessage => msg !== null),
      {
        role: 'user',
        content: SummaryPrompt,
      },
    ];

    const response = await this.llmClient.callSync(summaryMessages, {
      temperature: 0.3,
      maxTokens: 2000,
    });

    const summaryMatch = response.match(/<summary>([\s\S]*?)<\/summary>/);
    return summaryMatch ? summaryMatch[1].trim() : response;
  }
}
