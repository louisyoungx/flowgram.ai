/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { injectable, multiInject } from '@flowgram.ai/free-layout-editor';

import type { Tool, ToolCall, ToolResult } from '../types';
import { IAgentTool } from '../tools/type';

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

  public register(tool: IAgentTool): void {
    const name = tool.definition.name || this.getToolName(tool);
    this.tools.set(name, {
      tool,
      activated: tool.activated ?? false,
    });
  }

  public getAllTools(): Record<string, Tool> {
    const result: Record<string, Tool> = {};
    for (const [name, state] of this.tools.entries()) {
      if (state.activated) {
        const toolDef = state.tool.definition;
        result[name] = {
          description: toolDef.description,
          parameters: toolDef.parameters,
        };
      }
    }
    return result;
  }

  public getActivatedTools(): ToolInfo[] {
    return Array.from(this.tools.values())
      .filter((state) => state.activated)
      .map((state) => {
        const name = state.tool.definition.name || this.getToolName(state.tool);
        return {
          name,
          intro: state.tool.definition.description,
        };
      });
  }

  public getInactiveTools(): ToolInfo[] {
    return Array.from(this.tools.values())
      .filter((state) => !state.activated)
      .map((state) => {
        const name = state.tool.definition.name || this.getToolName(state.tool);
        return {
          name,
          intro: state.tool.definition.description,
        };
      });
  }

  public activateTool(name: string): boolean {
    const state = this.tools.get(name);
    if (!state || state.activated) {
      return false;
    }
    state.activated = true;
    return true;
  }

  public deactivateTool(name: string): boolean {
    const state = this.tools.get(name);
    if (!state || !state.activated || state.tool.activated) {
      return false;
    }
    state.activated = false;
    return true;
  }

  public getTool(name: string): IAgentTool | undefined {
    return this.tools.get(name)?.tool;
  }

  public async executeTools(toolCalls: ToolCall[]): Promise<ToolResult[]> {
    const promises = toolCalls.map(async (toolCall) => {
      try {
        const result = await this.execute(toolCall);

        return {
          toolCallId: toolCall.toolCallId,
          result,
        };
      } catch (error) {
        console.error(`Error executing tool ${toolCall.toolName}:`, error);
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';

        return {
          toolCallId: toolCall.toolCallId,
          result: JSON.stringify({
            success: false,
            error: errorMessage,
          }),
        };
      }
    });

    return Promise.all(promises);
  }

  public buildToolsReminder(): string | null {
    const activatedTools = this.getActivatedTools();
    const inactiveTools = this.getInactiveTools();

    if (activatedTools.length === 0 && inactiveTools.length === 0) {
      return null;
    }

    const lines: string[] = ['<system-reminder>'];

    if (activatedTools.length > 0) {
      lines.push('<activated-tools>');
      for (const tool of activatedTools) {
        lines.push(`  ${tool.name}: ${tool.intro}`);
      }
      lines.push('</activated-tools>');
    }

    if (inactiveTools.length > 0) {
      lines.push('<inactive-tools>');
      for (const tool of inactiveTools) {
        lines.push(`  ${tool.name}: ${tool.intro}`);
      }
      lines.push('</inactive-tools>');
    }

    lines.push('</system-reminder>');

    return lines.join('\n');
  }

  private getToolName(tool: IAgentTool): string {
    return tool.constructor.name.replace(/Tool$/, '');
  }

  private async execute(toolCall: ToolCall): Promise<string> {
    const toolName = toolCall.toolName;
    const state = this.tools.get(toolName);

    if (!state) {
      throw new Error(`Tool ${toolName} not found`);
    }

    if (!state.activated) {
      throw new Error(
        `Tool ${toolName} is not activated. Please use activate_tool to activate it first.`
      );
    }

    const toolResult = await state.tool.execute(toolCall.args);
    return JSON.stringify(toolResult);
  }
}
