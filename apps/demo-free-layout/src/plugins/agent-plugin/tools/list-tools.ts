/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { injectable, lazyInject } from '@flowgram.ai/free-layout-editor';

import type { ToolCallResult } from './type';
import { BaseTool } from './base-tool';
import type { Tool } from '../types';
import { WorkflowAgentToolRegistry } from '../services/tool-registry';

interface ToolInfo {
  name: string;
  intro: string;
}

interface ListToolsResult {
  activated: ToolInfo[];
  inactive: ToolInfo[];
}

@injectable()
export class ListToolsTool extends BaseTool<Record<string, never>, ListToolsResult> {
  readonly activated = true;

  @lazyInject(WorkflowAgentToolRegistry)
  private toolRegistry: WorkflowAgentToolRegistry;

  readonly tool: Tool = {
    type: 'function',
    function: {
      name: 'ListTools',
      intro: '查看已激活和未激活的工具列表',
      description: '获取当前已激活和未激活的工具列表，包括工具名称和简介',
      parameters: {
        type: 'object',
        properties: {},
      },
    },
  };

  async execute(): Promise<ToolCallResult<ListToolsResult>> {
    const activated = this.toolRegistry.getActivatedTools();
    const inactive = this.toolRegistry.getInactiveTools();

    return {
      success: true,
      data: {
        activated,
        inactive,
      },
      message: `当前已激活 ${activated.length} 个工具，未激活 ${inactive.length} 个工具`,
    };
  }
}
