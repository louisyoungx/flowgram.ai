/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { z } from 'zod';
import { injectable } from '@flowgram.ai/free-layout-editor';

import type { AgentToolDefinition, ToolCallResult } from './type';
import { BaseNodeTool } from './base-tool';

const RemoveNodeParamsSchema = z.object({
  nodeID: z.string().describe('要删除的节点 ID'),
});

type RemoveNodeParams = z.infer<typeof RemoveNodeParamsSchema>;

interface RemoveNodeResult {
  nodeID: string;
}

@injectable()
export class RemoveNodeTool extends BaseNodeTool<RemoveNodeParams, RemoveNodeResult> {
  public readonly definition: AgentToolDefinition<RemoveNodeParams, RemoveNodeResult> = {
    name: 'RemoveNode',
    description: '从工作流中删除节点',
    parameters: RemoveNodeParamsSchema,
  };

  public async execute(params: RemoveNodeParams): Promise<ToolCallResult<RemoveNodeResult>> {
    if (!params.nodeID) {
      return {
        success: false,
        error: '参数 nodeID 在执行 RemoveNode 操作时为必填项。',
      };
    }

    const node = this.document.getNode(params.nodeID);
    if (!node) {
      return {
        success: false,
        error: `未找到 ID 为 ${params.nodeID} 的节点。`,
      };
    }

    if (!this.document.canRemove(node)) {
      return {
        success: false,
        error: `节点 ${params.nodeID} 不允许删除。`,
      };
    }

    node.dispose();

    this.handleAutoLayout();
    this.fitView();

    return {
      success: true,
      data: { nodeID: params.nodeID },
      message: `成功删除节点 ${params.nodeID}`,
    };
  }
}
