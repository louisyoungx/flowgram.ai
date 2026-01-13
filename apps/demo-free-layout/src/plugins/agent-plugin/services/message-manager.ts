/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { Emitter, injectable, type WorkflowJSON } from '@flowgram.ai/free-layout-editor';

import { WorkflowAgentUtils } from '../utils';
import type {
  MessageHistory,
  ChatMessage,
  UIMessage,
  UIMessagePart,
  ToolCallState,
} from '../types';
import SystemPrompt from '../prompts/system-prompt.md?raw';
import { TOOL_RESULT_TOKEN_THRESHOLD, TOOL_RESULT_KEEP_WINDOW } from '../constant';

@injectable()
export class MessageManager {
  private histories: MessageHistory[] = [];

  private uiMessagesEmitter = new Emitter<UIMessage[]>();

  private conversationSummary: string | null = null;

  private lastSummaryHistoryIndex: number = 0;

  public onUIMessagesChange = this.uiMessagesEmitter.event;

  getUIMessages(): UIMessage[] {
    const messages: UIMessage[] = [];
    for (const history of this.histories) {
      messages.push(history.uiMessages.user);
      messages.push(history.uiMessages.assistant);
    }
    return messages;
  }

  getAllHistories(): MessageHistory[] {
    return this.histories;
  }

  getCurrentHistory(): MessageHistory | undefined {
    return this.histories[this.histories.length - 1];
  }

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

  hasSchema(messageId: string): boolean {
    const history = this.findHistoryByMessageId(messageId);
    return !!history?.schema;
  }

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

  appendTextToMessage(messageId: string, text: string): void {
    const msg = this.findUIMessage(messageId);
    if (!msg) return;

    const lastPart = msg.parts[msg.parts.length - 1];
    if (lastPart && lastPart.type === 'text') {
      lastPart.text += text;
    } else {
      msg.parts.push({ type: 'text', text });
    }
    this.notifyListeners();
  }

  appendToolCallPart(messageId: string, toolCallId: string, toolName: string, args: unknown): void {
    const msg = this.findUIMessage(messageId);
    if (!msg) return;

    msg.parts.push({
      type: 'tool-call',
      toolCallId,
      toolName,
      args,
      state: 'pending',
    });
    this.notifyListeners();
  }

  updateToolCallArgs(messageId: string, toolCallId: string, args: unknown): void {
    const msg = this.findUIMessage(messageId);
    if (!msg) return;

    const part = msg.parts.find(
      (p): p is Extract<UIMessagePart, { type: 'tool-call' }> =>
        p.type === 'tool-call' && p.toolCallId === toolCallId
    );
    if (part) {
      part.args = args;
      part.state = 'streaming';
      this.notifyListeners();
    }
  }

  updateToolCallResult(
    messageId: string,
    toolCallId: string,
    result: unknown,
    state: ToolCallState = 'completed'
  ): void {
    const msg = this.findUIMessage(messageId);
    if (!msg) return;

    const part = msg.parts.find(
      (p): p is Extract<UIMessagePart, { type: 'tool-call' }> =>
        p.type === 'tool-call' && p.toolCallId === toolCallId
    );
    if (part) {
      part.result = result;
      part.state = state;
      this.notifyListeners();
    }
  }

  markIncompleteToolCallsAsCancelled(messageId: string): void {
    const msg = this.findUIMessage(messageId);
    if (!msg) return;

    let changed = false;
    for (const part of msg.parts) {
      if (part.type === 'tool-call' && part.state !== 'completed' && part.state !== 'error') {
        part.state = 'cancelled';
        part.result = '请求已取消';
        changed = true;
      }
    }
    if (changed) {
      this.notifyListeners();
    }
  }

  truncateHistories(toIndex: number): void {
    this.histories = this.histories.slice(0, toIndex);
    if (this.lastSummaryHistoryIndex > toIndex) {
      this.lastSummaryHistoryIndex = toIndex;
    }
    this.notifyListeners();
  }

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

  private extractToolContent(content: ChatMessage['content']): string {
    if (typeof content === 'string') {
      return content;
    }
    if (Array.isArray(content)) {
      return content
        .map((part) => {
          if ('result' in part) {
            return typeof part.result === 'string' ? part.result : JSON.stringify(part.result);
          }
          return '';
        })
        .join('');
    }
    return '';
  }

  private applyMicroCompact(chatMessages: ChatMessage[]): ChatMessage[] {
    const toolMessages: Array<{ index: number; tokens: number }> = [];
    let totalToolTokens = 0;

    for (let i = 0; i < chatMessages.length; i++) {
      const msg = chatMessages[i];
      if (msg.role === 'tool') {
        const contentStr = this.extractToolContent(msg.content);
        const tokens = WorkflowAgentUtils.estimateTokens(contentStr);
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
          content: [
            {
              type: 'tool-result' as const,
              toolCallId: '',
              toolName: '',
              output: { type: 'text' as const, value: '[Old tool result content cleared]' },
            },
          ],
        };
      }
      return msg;
    });
  }
}
