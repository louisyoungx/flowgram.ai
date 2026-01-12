/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import {
  injectable,
  inject,
  WorkflowDocument,
  WorkflowOperationBaseService,
  Playground,
  fitView,
} from '@flowgram.ai/free-layout-editor';

import { WorkflowAgentUtils } from '../utils';
import type { AgentConfig, IWorkflowAgentService, UIMessage, ToolCall, ToolResult } from '../types';
import { DEFAULT_AGENT_CONFIG } from '../constant';
import { LLMClient, MessageManager, ReActLoopExecutor, ContextCompactor } from '.';

@injectable()
export class WorkflowAgentService implements IWorkflowAgentService {
  @inject(LLMClient)
  private llmClient: LLMClient;

  @inject(MessageManager)
  private messageManager: MessageManager;

  @inject(ReActLoopExecutor)
  private reActLoopExecutor: ReActLoopExecutor;

  @inject(ContextCompactor)
  private contextCompactor: ContextCompactor;

  @inject(WorkflowDocument)
  document: WorkflowDocument;

  @inject(WorkflowOperationBaseService)
  operationService: WorkflowOperationBaseService;

  @inject(Playground)
  playground: Playground;

  private config: AgentConfig = DEFAULT_AGENT_CONFIG;

  private abortController: AbortController | null = null;

  public init(config?: Partial<AgentConfig>): void {
    this.config = { ...DEFAULT_AGENT_CONFIG, ...config };
    this.llmClient.init(this.config);
  }

  public get onUIMessagesChange() {
    return this.messageManager.onUIMessagesChange;
  }

  public getUIMessages(): UIMessage[] {
    return this.messageManager.getUIMessages();
  }

  public hasSchema(messageId: string): boolean {
    return this.messageManager.hasSchema(messageId);
  }

  public getPreviousUserMessageId(messageId: string): string | null {
    return this.messageManager.getPreviousUserMessageId(messageId);
  }

  public clearMessages(): void {
    this.messageManager.resetHistories();
  }

  public cancelCurrentRequest(): void {
    if (this.abortController) {
      this.abortController.abort();
      this.abortController = null;
    }
  }

  public restoreSchema(messageId: string): void {
    const history = this.messageManager.findHistoryByMessageId(messageId);
    if (!history?.schema) {
      return;
    }

    this.operationService.fromJSON(history.schema);
    fitView(this.document, this.playground.config);
  }

  public async retryMessage(messageId: string): Promise<void> {
    const historyIndex = this.messageManager.findHistoryIndexByMessageId(messageId);
    if (historyIndex === -1) {
      return;
    }

    const history = this.messageManager.findHistoryByMessageId(messageId);
    if (!history) {
      return;
    }

    const uiMessage = this.messageManager.findUIMessage(messageId);
    if (!uiMessage || uiMessage.role !== 'assistant') {
      return;
    }

    const userTextPart = history.uiMessages.user.parts.find((p) => p.type === 'text');
    const userContent = userTextPart && userTextPart.type === 'text' ? userTextPart.text : '';
    this.messageManager.truncateHistories(historyIndex);

    await this.sendMessage(userContent);
  }

  public async editAndResendMessage(messageId: string, newContent: string): Promise<void> {
    const historyIndex = this.messageManager.findHistoryIndexByMessageId(messageId);
    if (historyIndex === -1) {
      return;
    }

    const uiMessage = this.messageManager.findUIMessage(messageId);
    if (!uiMessage || uiMessage.role !== 'user') {
      return;
    }

    this.messageManager.truncateHistories(historyIndex);

    await this.sendMessage(newContent);
  }

  public async sendMessage(content: string): Promise<void> {
    if (!content.trim()) return;

    this.abortController = new AbortController();

    const userUIMessage = WorkflowAgentUtils.createUserMessage(content);
    const assistantUIMessage = WorkflowAgentUtils.createAssistantMessage();
    const assistantMessageId = assistantUIMessage.id;

    const schema = this.document.toJSON();
    this.messageManager.createHistory(userUIMessage, assistantUIMessage, schema);

    this.messageManager.appendChatMessage({ role: 'user', content });

    try {
      const messages = this.messageManager.buildApiMessages();

      await this.reActLoopExecutor.execute({
        messages,
        maxIterations: 100,
        signal: this.abortController.signal,
        onChunk: (chunk) => {
          this.messageManager.appendTextToMessage(assistantMessageId, chunk);
        },
        onStep: (step) => {
          this.handleReActStep(assistantMessageId, step);
        },
        onChatMessage: (msg) => {
          this.messageManager.appendChatMessage(msg);
        },
      });

      this.messageManager.updateUIMessage(assistantMessageId, {
        status: 'sent',
      });

      await this.compactContextIfNeeded();
    } catch (error) {
      this.handleError(assistantMessageId, error);
    } finally {
      this.abortController = null;
    }
  }

  private handleReActStep(
    assistantMessageId: string,
    step: { type: string; toolCalls?: ToolCall[]; results?: ToolResult[]; content?: string }
  ): void {
    if (step.type === 'tool_call' && step.toolCalls) {
      for (const tc of step.toolCalls) {
        this.messageManager.appendToolCallPart(
          assistantMessageId,
          tc.toolCallId,
          tc.toolName,
          tc.args
        );
      }
    } else if (step.type === 'tool_call_update' && step.toolCalls) {
      for (const tc of step.toolCalls) {
        this.messageManager.updateToolCallArgs(assistantMessageId, tc.toolCallId, tc.args);
      }
    } else if (step.type === 'tool_result' && step.results) {
      for (const result of step.results) {
        let parsedResult: unknown;
        try {
          parsedResult = JSON.parse(result.result);
        } catch {
          parsedResult = result.result;
        }
        const state = this.determineToolCallState(parsedResult);
        this.messageManager.updateToolCallResult(
          assistantMessageId,
          result.toolCallId,
          parsedResult,
          state
        );
      }
    }
  }

  private determineToolCallState(result: unknown): 'completed' | 'error' {
    if (typeof result === 'object' && result !== null && 'success' in result) {
      return (result as { success: boolean }).success ? 'completed' : 'error';
    }
    return 'completed';
  }

  private handleError(assistantMessageId: string, error: unknown): void {
    if (
      error instanceof Error &&
      (error.name === 'AbortError' || error.message.includes('aborted'))
    ) {
      this.messageManager.markIncompleteToolCallsAsCancelled(assistantMessageId);
      this.messageManager.updateUIMessage(assistantMessageId, {
        status: 'sent',
      });
    } else {
      const errorContent = WorkflowAgentUtils.formatErrorMessage(error);
      this.messageManager.appendTextToMessage(assistantMessageId, errorContent);
      this.messageManager.updateUIMessage(assistantMessageId, {
        status: 'error',
      });
    }
  }

  private async compactContextIfNeeded(): Promise<void> {
    const histories = this.messageManager.getAllHistories();
    const lastSummaryIndex = this.messageManager.getLastSummaryHistoryIndex();

    if (!this.contextCompactor.shouldCompact(histories, lastSummaryIndex)) {
      return;
    }

    try {
      console.log('[Context Compact] Starting intelligent summarization...');

      const summary = await this.contextCompactor.generateSummary(histories);

      if (summary) {
        this.messageManager.setConversationSummary(summary);
        console.log('[Context Compact] Summary generated successfully');
      }
    } catch (error) {
      console.warn('[Context Compact] Failed to generate summary:', error);
    }
  }
}
