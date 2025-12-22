/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { injectable, multiInject } from '@flowgram.ai/free-layout-editor';

import type { Tool } from '../types';
import { ITool } from './base-tool';

/**
 * 工具注册表服务
 * 负责管理所有可用的工具，支持依赖注入
 */
@injectable()
export class ToolRegistry {
  private tools = new Map<string, ITool>();

  constructor(
    @multiInject(ITool)
    toolInstances: ITool[] = []
  ) {
    // 自动注册所有通过 IoC 注入的工具
    for (const tool of toolInstances) {
      this.register(tool);
    }
  }

  /**
   * 注册工具
   */
  register(tool: ITool): void {
    const name = tool.tool.function.name;
    this.tools.set(name, tool);
  }

  /**
   * 获取所有工具定义
   */
  getAllTools(): Tool[] {
    return Array.from(this.tools.values()).map((tool) => tool.tool);
  }

  /**
   * 获取工具实例
   */
  getTool(name: string): ITool | undefined {
    return this.tools.get(name);
  }

  /**
   * 执行工具
   */
  async execute(name: string, args: any): Promise<string> {
    const tool = this.tools.get(name);
    if (!tool) {
      throw new Error(`Tool ${name} not found`);
    }
    return await tool.execute(args);
  }

  /**
   * 检查工具是否存在
   */
  has(name: string): boolean {
    return this.tools.has(name);
  }

  /**
   * 获取所有工具名称
   */
  getToolNames(): string[] {
    return Array.from(this.tools.keys());
  }
}

// 导出工具类和基类
export { ITool, BaseTool } from './base-tool';
export { TodoWriteTool } from './todo-write';
export { GetWorkflowInfoTool } from './get-workflow-info';
