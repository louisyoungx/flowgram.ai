/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { z } from 'zod';
import {
  injectable,
  inject,
  WorkflowNodeJSON,
  WorkflowDocument,
} from '@flowgram.ai/free-layout-editor';

import type { AgentToolDefinition, ToolCallResult } from './type';
import { BaseTool } from './base-tool';

const GetNodeSchemaParamsSchema = z.object({
  nodeID: z.string().describe('要获取 Schema 的节点 ID'),
});

type GetNodeSchemaParams = z.infer<typeof GetNodeSchemaParamsSchema>;

@injectable()
export class GetNodeSchemaTool extends BaseTool<GetNodeSchemaParams, WorkflowNodeJSON> {
  @inject(WorkflowDocument)
  private document: WorkflowDocument;

  public readonly definition: AgentToolDefinition<GetNodeSchemaParams, WorkflowNodeJSON> = {
    name: 'GetNodeSchema',
    description: '获取工作流节点的 Schema',
    parameters: GetNodeSchemaParamsSchema,
  };

  public async execute(params: GetNodeSchemaParams): Promise<ToolCallResult<WorkflowNodeJSON>> {
    if (!params.nodeID) {
      return {
        success: false,
        error: '参数 nodeID 在执行 GetWorkflowNodeSchema 操作时为必填项。',
      };
    }

    const node = this.document.getNode(params.nodeID);
    if (!node) {
      return {
        success: false,
        error: `未找到 ID 为 ${params.nodeID} 的节点。`,
      };
    }

    const nodeSchema = this.document.toNodeJSON(node);
    return {
      success: true,
      data: nodeSchema,
      message: `成功获取节点 ${params.nodeID} 的 Schema。`,
    };
  }
}
