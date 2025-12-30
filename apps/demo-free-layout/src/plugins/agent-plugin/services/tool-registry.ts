/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { injectable, multiInject } from '@flowgram.ai/free-layout-editor';

import type { Tool, ToolCall } from '../types';
import { ToolCallResult } from '../tools/type';
import { IAgentTool } from '../tools/base-tool';

interface ToolInfo {
  name: string;
  intro: string;
}

interface ToolState {
  tool: IAgentTool;
  activated: boolean;
}

@injectable()
export class WorkflowAgentToolRegistry {
  private tools = new Map<string, ToolState>();

  constructor(
    @multiInject(IAgentTool)
    toolInstances: IAgentTool[] = []
  ) {
    for (const tool of toolInstances) {
      this.register(tool);
    }
  }

  register(tool: IAgentTool): void {
    const name = tool.tool.function.name;
    this.tools.set(name, {
      tool,
      activated: tool.activated ?? false,
    });
  }

  getAllTools(): Tool[] {
    return Array.from(this.tools.values())
      .filter((state) => state.activated)
      .map((state) => state.tool.tool);
  }

  getActivatedTools(): ToolInfo[] {
    return Array.from(this.tools.values())
      .filter((state) => state.activated)
      .map((state) => ({
        name: state.tool.tool.function.name,
        intro: state.tool.tool.function.intro || state.tool.tool.function.description,
      }));
  }

  getInactiveTools(): ToolInfo[] {
    return Array.from(this.tools.values())
      .filter((state) => !state.activated)
      .map((state) => ({
        name: state.tool.tool.function.name,
        intro: state.tool.tool.function.intro || state.tool.tool.function.description,
      }));
  }

  activateTool(name: string): boolean {
    const state = this.tools.get(name);
    if (!state || state.activated) {
      return false;
    }
    state.activated = true;
    return true;
  }

  deactivateTool(name: string): boolean {
    const state = this.tools.get(name);
    if (!state || !state.activated || state.tool.activated) {
      return false;
    }
    state.activated = false;
    return true;
  }

  getTool(name: string): IAgentTool | undefined {
    return this.tools.get(name)?.tool;
  }

  async execute(toolCall: ToolCall): Promise<string> {
    const tool = this.getTool(toolCall.function.name);
    if (!tool) {
      throw new Error(`Tool ${toolCall.function.name} not found`);
    }
    try {
      const args = JSON.parse(toolCall.function.arguments);
      const toolResult = await tool.execute(args);
      return JSON.stringify(toolResult);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      const toolResult: ToolCallResult<null> = {
        success: false,
        error: errorMessage,
      };
      return JSON.stringify(toolResult);
    }
  }

  has(name: string): boolean {
    return this.tools.has(name);
  }

  getToolNames(): string[] {
    return Array.from(this.tools.keys());
  }
}
