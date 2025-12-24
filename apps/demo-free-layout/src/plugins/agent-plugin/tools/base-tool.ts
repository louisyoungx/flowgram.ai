/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import {
  delay,
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

/**
 * 工具基类接口
 * 所有工具都需要实现此接口
 */
export interface IAgentTool<TArgs = any, TResult = string> {
  /**
   * 工具定义（OpenAI Function Calling 格式）
   */
  readonly tool: Tool;

  /**
   * 执行工具
   * @param args 工具参数
   * @returns 执行结果（JSON 字符串）
   */
  execute(args: TArgs): Promise<TResult>;
}

/**
 * 工具基类
 * 提供默认实现
 */
@injectable()
export abstract class BaseTool<TArgs = any, TResult = string>
  implements IAgentTool<TArgs, TResult>
{
  abstract readonly tool: Tool;

  abstract execute(args: TArgs): Promise<TResult>;
}

@injectable()
export abstract class BaseNodeTool<TArgs = any, TResult = string>
  implements IAgentTool<TArgs, TResult>
{
  @inject(WorkflowDocument)
  protected document: WorkflowDocument;

  @inject(WorkflowAutoLayoutTool)
  protected autoLayout: WorkflowAutoLayoutTool;

  @inject(Playground)
  protected playground: Playground;

  @inject(WorkflowSelectService)
  protected selectService: WorkflowSelectService;

  abstract readonly tool: Tool;

  abstract execute(args: TArgs): Promise<TResult>;

  protected async handleAutoLayout() {
    await delay(20);
    await this.autoLayout.handle({
      enableAnimation: false,
    });
  }

  protected focusNode(node: WorkflowNodeEntity) {
    this.selectService.selectNode(node);

    const bounds = node.transform.bounds;
    this.playground.scrollToView({
      bounds,
      scrollDelta: {
        x: 224,
        y: 0,
      },
      zoom: 1,
      scrollToCenter: true,
    });
  }

  protected selectLine(line: WorkflowLineEntity) {
    this.selectService.selection = [line];
  }
}

/**
 * IAgentTool Token（用于 IoC 绑定）
 */
export const IAgentTool = Symbol.for('IAgentTool');
