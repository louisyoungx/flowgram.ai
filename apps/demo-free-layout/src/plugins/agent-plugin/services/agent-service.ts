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
import type { AgentConfig, IWorkflowAgentService, UIMessage } from '../types';
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

    const userContent = history.uiMessages.user.content;
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
          const msg = this.messageManager.findUIMessage(assistantMessageId);
          if (msg) {
            this.messageManager.updateUIMessage(assistantMessageId, {
              content: msg.content + chunk,
            });
          }
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
    step: { type: string; toolCalls?: any[]; results?: any[]; content?: string }
  ): void {
    const msg = this.messageManager.findUIMessage(assistantMessageId);
    if (!msg) return;

    if (step.type === 'tool_call' && step.toolCalls) {
      const toolCallsXML = WorkflowAgentUtils.formatToolCallsToXML(step.toolCalls);
      this.messageManager.updateUIMessage(assistantMessageId, {
        content: msg.content + toolCallsXML,
      });
    } else if (step.type === 'tool_call_update' && step.toolCalls) {
      const updatedContent = WorkflowAgentUtils.updateToolCallArguments(
        msg.content,
        step.toolCalls
      );
      this.messageManager.updateUIMessage(assistantMessageId, {
        content: updatedContent,
      });
    } else if (step.type === 'tool_result' && step.results) {
      const updatedContent = WorkflowAgentUtils.updateToolCallResults(msg.content, step.results);
      this.messageManager.updateUIMessage(assistantMessageId, {
        content: updatedContent,
      });
    }
  }

  private handleError(assistantMessageId: string, error: unknown): void {
    if (
      error instanceof Error &&
      (error.name === 'AbortError' || error.message.includes('aborted'))
    ) {
      const msg = this.messageManager.findUIMessage(assistantMessageId);
      if (msg) {
        const updatedContent = WorkflowAgentUtils.markIncompleteToolCallsAsCancelled(msg.content);
        this.messageManager.updateUIMessage(assistantMessageId, {
          content: updatedContent,
          status: 'sent',
        });
      } else {
        this.messageManager.updateUIMessage(assistantMessageId, {
          status: 'sent',
        });
      }
    } else {
      const errorContent = WorkflowAgentUtils.formatErrorMessage(error);
      this.messageManager.updateUIMessage(assistantMessageId, {
        content: errorContent,
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
