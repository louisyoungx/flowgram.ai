/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { z } from 'zod';
import {
  injectable,
  inject,
  WorkflowDocument,
  WorkflowJSON,
} from '@flowgram.ai/free-layout-editor';

import type { AgentToolDefinition, ToolCallResult } from './type';
import { BaseTool } from './base-tool';

@injectable()
export class GetWorkflowSchemaTool extends BaseTool<Record<string, never>, WorkflowJSON> {
  @inject(WorkflowDocument)
  private document: WorkflowDocument;

  public readonly definition: AgentToolDefinition<Record<string, never>, WorkflowJSON> = {
    name: 'GetWorkflowSchema',
    description: '获取工作流完整 Schema，详细列出所有节点与边的信息',
    parameters: z.object({}),
  };

  public async execute(): Promise<ToolCallResult<WorkflowJSON>> {
    const json = this.document.toJSON();
    return {
      success: true,
      data: json,
      message: `成功获取工作流完整 Schema`,
    };
  }
}
