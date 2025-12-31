/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { Emitter, injectable, type WorkflowJSON } from '@flowgram.ai/free-layout-editor';

import { WorkflowAgentUtils } from '../utils';
import type { MessageHistory, ChatMessage, UIMessage, ToolMessage } from '../types';
import SystemPrompt from '../prompts/system-prompt.md?raw';
import { TOOL_RESULT_TOKEN_THRESHOLD, TOOL_RESULT_KEEP_WINDOW } from '../constant';

/**
 * 消息管理服务
 * 负责消息的 CRUD、事件通知、历史管理
 */
@injectable()
export class MessageManager {
  private histories: MessageHistory[] = [];

  private uiMessagesEmitter = new Emitter<UIMessage[]>();

  /** 对话历史的智能总结（不影响 UI 显示，只用于 API 调用） */
  private conversationSummary: string | null = null;

  /** 上次执行智能总结时的消息索引 */
  private lastSummaryHistoryIndex: number = 0;

  public onUIMessagesChange = this.uiMessagesEmitter.event;

  /**
   * 获取所有消息（UI 层）
   */
  getUIMessages(): UIMessage[] {
    const messages: UIMessage[] = [];
    for (const history of this.histories) {
      messages.push(history.uiMessages.user);
      messages.push(history.uiMessages.assistant);
    }
    return messages;
  }

  /**
   * 获取所有消息（包含 schema，内部使用）
   */
  getAllHistories(): MessageHistory[] {
    return this.histories;
  }

  getCurrentHistory(): MessageHistory | undefined {
    return this.histories[this.histories.length - 1];
  }

  /**
   * 根据 ID 查找消息
   */
  findUIMessage(messageId: string): UIMessage | undefined {
    for (const history of this.histories) {
      if (history.uiMessages.user.id === messageId) {
        return history.uiMessages.user;
      }
      if (history.uiMessages.assistant.id === messageId) {
        return history.uiMessages.assistant;
      }
    }
    return undefined;
  }

  findHistoryByMessageId(messageId: string): MessageHistory | undefined {
    return this.histories.find(
      (h) => h.uiMessages.user.id === messageId || h.uiMessages.assistant.id === messageId
    );
  }

  findHistoryIndexByMessageId(messageId: string): number {
    return this.histories.findIndex(
      (h) => h.uiMessages.user.id === messageId || h.uiMessages.assistant.id === messageId
    );
  }

  /**
   * 检查指定消息是否有 schema
   */
  hasSchema(messageId: string): boolean {
    const history = this.findHistoryByMessageId(messageId);
    return !!history?.schema;
  }

  /**
   * 获取指定消息之前的用户消息 ID
   */
  getPreviousUserMessageId(messageId: string): string | null {
    const historyIndex = this.findHistoryIndexByMessageId(messageId);
    if (historyIndex <= 0) {
      return null;
    }
    return this.histories[historyIndex - 1].uiMessages.user.id;
  }

  createHistory(
    userMsg: UIMessage,
    assistantMsg: UIMessage,
    schema?: WorkflowJSON
  ): MessageHistory {
    const history: MessageHistory = {
      schema,
      uiMessages: {
        user: userMsg,
        assistant: assistantMsg,
      },
      chatMessages: [],
    };
    this.histories.push(history);
    this.notifyListeners();
    return history;
  }

  appendChatMessage(msg: ChatMessage): void {
    const currentHistory = this.getCurrentHistory();
    if (currentHistory) {
      currentHistory.chatMessages.push(msg);
    }
  }

  updateUIMessage(messageId: string, updates: Partial<UIMessage>): void {
    for (const history of this.histories) {
      if (history.uiMessages.user.id === messageId) {
        history.uiMessages.user = { ...history.uiMessages.user, ...updates };
        this.notifyListeners();
        return;
      }
      if (history.uiMessages.assistant.id === messageId) {
        history.uiMessages.assistant = { ...history.uiMessages.assistant, ...updates };
        this.notifyListeners();
        return;
      }
    }
  }

  /**
   * 截断消息到指定索引
   */
  truncateHistories(toIndex: number): void {
    this.histories = this.histories.slice(0, toIndex);
    if (this.lastSummaryHistoryIndex > toIndex) {
      this.lastSummaryHistoryIndex = toIndex;
    }
    this.notifyListeners();
  }

  /**
   * 重置所有消息
   */
  resetHistories(): void {
    this.histories = [];
    this.conversationSummary = null;
    this.lastSummaryHistoryIndex = 0;
    this.notifyListeners();
  }

  notifyListeners(): void {
    this.uiMessagesEmitter.fire(this.getUIMessages());
  }

  getConversationSummary(): string | null {
    return this.conversationSummary;
  }

  setConversationSummary(summary: string): void {
    this.conversationSummary = summary;
    this.lastSummaryHistoryIndex = this.histories.length;
  }

  getLastSummaryHistoryIndex(): number {
    return this.lastSummaryHistoryIndex;
  }

  buildApiMessages(): ChatMessage[] {
    const messages: ChatMessage[] = [
      {
        role: 'system',
        content: SystemPrompt,
      },
    ];

    if (this.conversationSummary) {
      messages.push({
        role: 'assistant',
        content: `[Previous conversation summary]\n\n${this.conversationSummary}`,
      });
    }

    const allChatMessages = this.histories.flatMap((h) => h.chatMessages);
    const compactedMessages = this.applyMicroCompact(allChatMessages);
    messages.push(...compactedMessages);

    return messages;
  }

  private applyMicroCompact(chatMessages: ChatMessage[]): ChatMessage[] {
    const toolMessages: Array<{ index: number; tokens: number }> = [];
    let totalToolTokens = 0;

    for (let i = 0; i < chatMessages.length; i++) {
      const msg = chatMessages[i];
      if (msg.role === 'tool') {
        const tokens = WorkflowAgentUtils.estimateTokens(msg.content);
        toolMessages.push({ index: i, tokens });
        totalToolTokens += tokens;
      }
    }

    if (totalToolTokens <= TOOL_RESULT_TOKEN_THRESHOLD) {
      return chatMessages;
    }

    let keptTokens = 0;
    let compactBoundaryIndex = 0;

    for (let i = toolMessages.length - 1; i >= 0; i--) {
      keptTokens += toolMessages[i].tokens;
      if (keptTokens > TOOL_RESULT_KEEP_WINDOW) {
        compactBoundaryIndex = toolMessages[i].index + 1;
        break;
      }
    }

    const toolIndicesToClear = new Set(
      toolMessages.filter((tm) => tm.index < compactBoundaryIndex).map((tm) => tm.index)
    );

    return chatMessages.map((msg, index) => {
      if (toolIndicesToClear.has(index) && msg.role === 'tool') {
        return {
          ...msg,
          content: '[Old tool result content cleared]',
        } as ToolMessage;
      }
      return msg;
    });
  }
}
