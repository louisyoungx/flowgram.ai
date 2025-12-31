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

  shouldCompact(histories: MessageHistory[], lastSummaryIndex: number): boolean {
    const allChatMessages = histories.flatMap((h) => h.chatMessages);

    const totalTokens = allChatMessages.reduce(
      (sum, msg) => sum + WorkflowAgentUtils.estimateTokens(msg.content),
      0
    );

    if (totalTokens < CONTEXT_COMPACT_THRESHOLD) return false;

    const historiesSinceLastSummary = histories.length - lastSummaryIndex;
    if (historiesSinceLastSummary < MIN_MESSAGES_BETWEEN_SUMMARIES / 2) return false;

    return true;
  }

  async generateSummary(histories: MessageHistory[]): Promise<string | null> {
    const historiesToSummarize = histories.slice(0, -CONTEXT_COMPACT_KEEP_RECENT);

    if (historiesToSummarize.length < 2) {
      return null;
    }

    const messagesToSummarize: ChatMessage[] = historiesToSummarize.flatMap((h) =>
      h.chatMessages.filter((m) => m.role === 'user' || m.role === 'assistant')
    );

    if (messagesToSummarize.length < 4) {
      return null;
    }

    const summaryMessages: ChatMessage[] = [
      {
        role: 'system',
        content: 'You are a helpful assistant that summarizes conversations concisely.',
      },
      ...messagesToSummarize.map((msg) => ({
        role: msg.role as 'user' | 'assistant',
        content: msg.content,
      })),
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
