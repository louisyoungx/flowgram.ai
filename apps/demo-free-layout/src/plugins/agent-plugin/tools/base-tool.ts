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

import type { Tool } from '../types';
import type { ToolCallResult, IAgentTool } from './type';

/**
 * 工具基类
 * 提供默认实现
 */
@injectable()
export abstract class BaseTool<TArgs = any, TData = any> implements IAgentTool<TArgs, TData> {
  abstract readonly tool: Tool;

  abstract execute(args: TArgs): Promise<ToolCallResult<TData>>;
}

@injectable()
export abstract class BaseNodeTool<TArgs = any, TData = any> implements IAgentTool<TArgs, TData> {
  @inject(WorkflowDocument)
  protected document: WorkflowDocument;

  @inject(WorkflowAutoLayoutTool)
  protected autoLayout: WorkflowAutoLayoutTool;

  @inject(Playground)
  protected playground: Playground;

  @inject(WorkflowSelectService)
  protected selectService: WorkflowSelectService;

  abstract readonly tool: Tool;

  abstract execute(args: TArgs): Promise<ToolCallResult<TData>>;

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
