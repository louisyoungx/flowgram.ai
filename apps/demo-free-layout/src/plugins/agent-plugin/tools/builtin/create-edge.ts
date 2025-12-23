/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { injectable, inject, WorkflowLinesManager } from '@flowgram.ai/free-layout-editor';
import { IJsonSchema } from '@flowgram.ai/form-materials';

import { BaseNodeTool } from '../base-tool';
import type { Tool } from '../../types';

interface CreateEdgeParams {
  from: string;
  fromPort?: string;
  to: string;
  toPort?: string;
}

@injectable()
export class CreateEdgeTool extends BaseNodeTool<CreateEdgeParams, string> {
  @inject(WorkflowLinesManager)
  private linesManager: WorkflowLinesManager;

  public readonly tool: Tool = {
    type: 'function',
    function: {
      name: 'CreateEdge',
      description: '在工作流中创建节点之间的连接线（边）。',
      parameters: {
        type: 'object',
        properties: {
          from: {
            type: 'string',
            description: '起始节点 ID。',
          },
          fromPort: {
            type: 'string',
            description: '起始节点的输出端口 ID，可选。',
          },
          to: {
            type: 'string',
            description: '目标节点 ID。',
          },
          toPort: {
            type: 'string',
            description: '目标节点的输入端口 ID，可选。',
          },
        },
        required: ['from', 'to'],
      } as IJsonSchema,
    },
  };

  public async execute(params: CreateEdgeParams): Promise<string> {
    // 验证必填参数
    if (!params.from || !params.to) {
      return JSON.stringify({
        success: false,
        error: '参数 from 和 to 在执行 CreateEdge 操作时为必填项。',
      });
    }

    // 验证节点是否存在
    const fromNode = this.document.getNode(params.from);
    if (!fromNode) {
      return JSON.stringify({
        success: false,
        error: `未找到 ID 为 ${params.from} 的起始节点。`,
      });
    }

    const toNode = this.document.getNode(params.to);
    if (!toNode) {
      return JSON.stringify({
        success: false,
        error: `未找到 ID 为 ${params.to} 的目标节点。`,
      });
    }

    const edge = this.createEdge(params);
    if (!edge) {
      return JSON.stringify({
        success: false,
        error: '创建连接线失败，可能是端口不存在或连接不合法。',
      });
    }

    return JSON.stringify({
      success: true,
      data: edge.toJSON(),
      message: `成功创建连接 ${edge.id}`,
    });
  }

  private createEdge(params: CreateEdgeParams) {
    const line = this.linesManager.createLine({
      from: params.from,
      fromPort: params.fromPort,
      to: params.to,
      toPort: params.toPort,
    });
    if (line) {
      this.handleAutoLayout();
    }
    return line;
  }
}
