/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import {
  delay,
  fitView,
  inject,
  injectable,
  Playground,
  WorkflowAutoLayoutTool,
  WorkflowDocument,
  WorkflowLineEntity,
  WorkflowNodeEntity,
  WorkflowSelectService,
} from '@flowgram.ai/free-layout-editor';

import type { AgentToolDefinition, ToolCallResult, IAgentTool } from './type';

@injectable()
export abstract class BaseTool<TParams = any, TResult = any>
  implements IAgentTool<TParams, TResult>
{
  abstract readonly definition: AgentToolDefinition<TParams, TResult>;

  abstract execute(params: TParams): Promise<ToolCallResult<TResult>>;
}

@injectable()
export abstract class BaseNodeTool<TParams = any, TResult = any>
  implements IAgentTool<TParams, TResult>
{
  @inject(WorkflowDocument)
  protected document: WorkflowDocument;

  @inject(WorkflowAutoLayoutTool)
  protected autoLayout: WorkflowAutoLayoutTool;

  @inject(Playground)
  protected playground: Playground;

  @inject(WorkflowSelectService)
  protected selectService: WorkflowSelectService;

  abstract readonly definition: AgentToolDefinition<TParams, TResult>;

  abstract execute(params: TParams): Promise<ToolCallResult<TResult>>;

  protected async handleAutoLayout() {
    await delay(20);
    await this.autoLayout.handle({
      enableAnimation: false,
      disableFitView: true,
    });
  }

  protected async fitView() {
    await fitView(this.document, this.playground.config);
  }

  protected focusNode(node: WorkflowNodeEntity) {
    this.selectService.selectNodeAndScrollToView(node);
  }

  protected selectLine(line: WorkflowLineEntity) {
    this.selectService.selection = [line];
  }
}
