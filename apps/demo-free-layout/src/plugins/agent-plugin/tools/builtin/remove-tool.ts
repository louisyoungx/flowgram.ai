/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { injectable, inject, WorkflowLinesManager } from '@flowgram.ai/free-layout-editor';
import { IJsonSchema } from '@flowgram.ai/form-materials';

import { BaseNodeTool } from '../base-tool';
import type { Tool } from '../../types';

interface RemoveToolParams {
  operation: 'removeNode' | 'removeEdge';
  id: string;
}

@injectable()
export class RemoveTool extends BaseNodeTool<RemoveToolParams, string> {
  @inject(WorkflowLinesManager)
  private linesManager: WorkflowLinesManager;

  public readonly tool: Tool = {
    type: 'function',
    function: {
      name: 'RemoveTool',
      description: '从工作流中删除节点或连接线。',
      parameters: {
        type: 'object',
        properties: {
          operation: {
            type: 'string',
            enum: ['removeNode', 'removeEdge'],
            description: '删除操作类型：removeNode（删除节点）或 removeEdge（删除连接线）。',
          },
          id: {
            type: 'string',
            description: '要删除的节点 ID 或连接线 ID。',
          },
        },
        required: ['operation', 'id'],
      } as IJsonSchema,
    },
  };

  public async execute(params: RemoveToolParams): Promise<string> {
    if (!params.operation || !params.id) {
      return JSON.stringify({
        success: false,
        error: '参数 operation 和 id 在执行 RemoveTool 操作时为必填项。',
      });
    }

    if (params.operation === 'removeNode') {
      return this.removeNode(params.id);
    } else if (params.operation === 'removeEdge') {
      return this.removeEdge(params.id);
    } else {
      return JSON.stringify({
        success: false,
        error: `不支持的操作类型：${params.operation}。仅支持 removeNode 或 removeEdge。`,
      });
    }
  }

  private removeNode(nodeId: string): string {
    const node = this.document.getNode(nodeId);
    if (!node) {
      return JSON.stringify({
        success: false,
        error: `未找到 ID 为 ${nodeId} 的节点。`,
      });
    }

    if (!this.document.canRemove(node)) {
      return JSON.stringify({
        success: false,
        error: `节点 ${nodeId} 不允许删除。`,
      });
    }

    node.dispose();

    return JSON.stringify({
      success: true,
      message: `成功删除节点 ${nodeId}`,
    });
  }

  private removeEdge(edgeId: string): string {
    const line = this.linesManager.getAllLines().find((l) => l.id === edgeId);
    if (!line) {
      return JSON.stringify({
        success: false,
        error: `未找到 ID 为 ${edgeId} 的连接线。`,
      });
    }

    if (!this.linesManager.canRemove(line)) {
      return JSON.stringify({
        success: false,
        error: `连接线 ${edgeId} 不允许删除。`,
      });
    }

    line.dispose();

    return JSON.stringify({
      success: true,
      message: `成功删除连接线 ${edgeId}`,
    });
  }
}
