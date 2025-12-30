/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { injectable, lazyInject } from '@flowgram.ai/free-layout-editor';

import type { ToolCallResult } from './type';
import { BaseTool } from './base-tool';
import type { Tool } from '../types';
import { WorkflowAgentToolRegistry } from '../services/tool-registry';

interface ActivateToolArgs {
  toolNames: string[];
}

interface ActivateToolResult {
  activated: string[];
  failed: { toolName: string; reason: string }[];
}

@injectable()
export class ActivateToolTool extends BaseTool<ActivateToolArgs, ActivateToolResult> {
  readonly activated = true;

  @lazyInject(WorkflowAgentToolRegistry)
  private toolRegistry: WorkflowAgentToolRegistry;

  readonly tool: Tool = {
    type: 'function',
    function: {
      name: 'ActivateTool',
      intro: '批量激活指定的工具以便使用',
      description: '批量激活多个当前未激活的工具，激活后这些工具将可以被调用',
      parameters: {
        type: 'object',
        properties: {
          toolNames: {
            type: 'array',
            items: {
              type: 'string',
            },
            description: '要激活的工具名称列表',
          },
        },
        required: ['toolNames'],
      },
    },
  };

  async execute(args: ActivateToolArgs): Promise<ToolCallResult<ActivateToolResult>> {
    const { toolNames } = args;

    if (!toolNames || toolNames.length === 0) {
      return {
        success: false,
        error: '参数 toolNames 不能为空',
      };
    }

    const activated: string[] = [];
    const failed: { toolName: string; reason: string }[] = [];

    for (const toolName of toolNames) {
      const success = this.toolRegistry.activateTool(toolName);
      if (success) {
        activated.push(toolName);
      } else {
        failed.push({
          toolName,
          reason: '工具不存在或已经处于激活状态',
        });
      }
    }

    if (activated.length === 0) {
      return {
        success: false,
        error: '所有工具激活失败',
        data: { activated, failed },
      };
    }

    return {
      success: true,
      data: { activated, failed },
      message: `成功激活 ${activated.length} 个工具${
        failed.length > 0 ? `，${failed.length} 个失败` : ''
      }`,
    };
  }
}
