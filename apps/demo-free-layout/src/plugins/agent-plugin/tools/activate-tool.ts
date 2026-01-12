/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { z } from 'zod';
import { injectable, lazyInject } from '@flowgram.ai/free-layout-editor';

import { WorkflowAgentToolRegistry } from '../services/tool-registry';
import type { AgentToolDefinition, ToolCallResult } from './type';
import { BaseTool } from './base-tool';

const ActivateToolParamsSchema = z.object({
  toolNames: z.array(z.string()).describe('要激活的工具名称列表'),
});

type ActivateToolParams = z.infer<typeof ActivateToolParamsSchema>;

interface ActivateToolResult {
  activated: string[];
  failed: { toolName: string; reason: string }[];
}

@injectable()
export class ActivateToolTool extends BaseTool<ActivateToolParams, ActivateToolResult> {
  readonly activated = true;

  @lazyInject(WorkflowAgentToolRegistry)
  private toolRegistry: WorkflowAgentToolRegistry;

  readonly definition: AgentToolDefinition<ActivateToolParams, ActivateToolResult> = {
    name: 'ActivateTool',
    description: '批量激活多个当前未激活的工具，激活后这些工具将可以被调用',
    parameters: ActivateToolParamsSchema,
  };

  async execute(params: ActivateToolParams): Promise<ToolCallResult<ActivateToolResult>> {
    const { toolNames } = params;

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
