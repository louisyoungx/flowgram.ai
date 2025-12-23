/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { injectable, inject, WorkflowDocument } from '@flowgram.ai/free-layout-editor';

import type { Tool } from '../types';
import { BaseTool } from './base-tool';

/**
 * GetWorkflowInfo 工具参数
 */
interface GetWorkflowInfoArgs {
  operation: 'count_nodes' | 'get_workflow_schema' | 'get_node';
  nodeId?: string;
}

/**
 * GetWorkflowInfo 工具
 * 用于获取工作流信息
 * 演示如何注入容器中的服务（WorkflowDocument）
 */
@injectable()
export class GetWorkflowInfoTool extends BaseTool<GetWorkflowInfoArgs, string> {
  constructor(
    @inject(WorkflowDocument)
    private document: WorkflowDocument
  ) {
    super();
  }

  readonly tool: Tool = {
    type: 'function',
    function: {
      name: 'GetWorkflowInfo',
      description: `获取当前工作流的信息。

可用操作：
- count_nodes: 统计节点数量
- get_workflow_schema: 列出所有节点与边的信息
- get_node: 获取特定节点的详细信息（需要提供 nodeId）`,
      parameters: {
        type: 'object',
        properties: {
          operation: {
            type: 'string',
            description: '要执行的操作类型',
            enum: ['count_nodes', 'get_workflow_schema', 'get_node'],
          },
          nodeId: {
            type: 'string',
            description: '节点 ID（仅在 operation 为 get_node 时需要）',
          },
        },
        required: ['operation'],
      },
    },
  };

  /**
   * 执行工具
   */
  async execute(args: GetWorkflowInfoArgs): Promise<string> {
    try {
      switch (args.operation) {
        case 'count_nodes': {
          const nodes = this.document.getAllNodes();
          return JSON.stringify({
            success: true,
            data: {
              count: nodes.length,
            },
            message: `当前工作流有 ${nodes.length} 个节点`,
          });
        }

        case 'get_workflow_schema': {
          const nodes = this.document.getAllNodes();
          const json = this.document.toJSON();
          return JSON.stringify({
            success: true,
            data: json,
            message: `成功获取 ${nodes.length} 个节点信息`,
          });
        }

        case 'get_node': {
          if (!args.nodeId) {
            return JSON.stringify({
              success: false,
              error: 'get_node 操作需要提供 nodeId 参数',
            });
          }

          const node = this.document.getNode(args.nodeId);
          if (!node) {
            return JSON.stringify({
              success: false,
              error: `节点 ${args.nodeId} 不存在`,
            });
          }

          return JSON.stringify({
            success: true,
            data: {
              ...node.toJSON(),
            },
            message: `成功获取节点 ${args.nodeId} 的信息`,
          });
        }

        default:
          return JSON.stringify({
            success: false,
            error: '未知的操作类型',
          });
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      return JSON.stringify({
        success: false,
        error: errorMessage,
      });
    }
  }
}
