/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { z } from 'zod';
import { injectable, inject, WorkflowLinesManager } from '@flowgram.ai/free-layout-editor';

import type { AgentToolDefinition, ToolCallResult } from './type';
import { BaseNodeTool } from './base-tool';

const RemoveEdgeParamsSchema = z.object({
  sourceNodeID: z.string().describe('起始节点 ID'),
  targetNodeID: z.string().describe('目标节点 ID'),
  sourcePortID: z
    .string()
    .optional()
    .describe('起始节点的输出端口 ID（可选）。对于 Condition 节点，使用条件的 key 值或 "else"。'),
  targetPortID: z.string().optional().describe('目标节点的输入端口 ID（可选）'),
});

type RemoveEdgeParams = z.infer<typeof RemoveEdgeParamsSchema>;

interface RemoveEdgeResult {
  sourceNodeID: string;
  targetNodeID: string;
}

@injectable()
export class RemoveEdgeTool extends BaseNodeTool<RemoveEdgeParams, RemoveEdgeResult> {
  @inject(WorkflowLinesManager)
  private linesManager: WorkflowLinesManager;

  public readonly definition: AgentToolDefinition<RemoveEdgeParams, RemoveEdgeResult> = {
    name: 'RemoveEdge',
    description: '从工作流中删除连接线（边）',
    parameters: RemoveEdgeParamsSchema,
  };

  public async execute(params: RemoveEdgeParams): Promise<ToolCallResult<RemoveEdgeResult>> {
    if (!params.sourceNodeID || !params.targetNodeID) {
      return {
        success: false,
        error: '参数 sourceNodeID 和 targetNodeID 在执行 RemoveEdge 操作时为必填项。',
      };
    }

    const sourceNode = this.document.getNode(params.sourceNodeID);
    if (!sourceNode) {
      return {
        success: false,
        error: `未找到 ID 为 ${params.sourceNodeID} 的起始节点。`,
      };
    }

    const targetNode = this.document.getNode(params.targetNodeID);
    if (!targetNode) {
      return {
        success: false,
        error: `未找到 ID 为 ${params.targetNodeID} 的目标节点。`,
      };
    }

    const line = this.linesManager.getAllLines().find((l) => {
      const matchSource = l.info.from === params.sourceNodeID;
      const matchTarget = l.info.to === params.targetNodeID;
      const matchSourcePort = params.sourcePortID ? l.info.fromPort === params.sourcePortID : true;
      const matchTargetPort = params.targetPortID ? l.info.toPort === params.targetPortID : true;

      return matchSource && matchTarget && matchSourcePort && matchTargetPort;
    });

    if (!line) {
      return {
        success: false,
        error: `未找到从节点 ${params.sourceNodeID} 到节点 ${params.targetNodeID} 的连接线。`,
      };
    }

    if (!this.linesManager.canRemove(line)) {
      return {
        success: false,
        error: `连接线不允许删除。`,
      };
    }

    line.dispose();

    this.handleAutoLayout();
    this.fitView();

    return {
      success: true,
      data: { sourceNodeID: params.sourceNodeID, targetNodeID: params.targetNodeID },
      message: `成功删除从节点 ${params.sourceNodeID} 到节点 ${params.targetNodeID} 的连接线`,
    };
  }
}
