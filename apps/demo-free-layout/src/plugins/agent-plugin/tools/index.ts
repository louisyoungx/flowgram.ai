/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import type { Tool, ToolExecutor } from '../types';
import { todoWriteTool, executeTodoWrite } from './todo-write';

/**
 * 工具注册表
 */
export class ToolRegistry {
  private tools = new Map<string, Tool>();

  private executors = new Map<string, ToolExecutor>();

  /**
   * 注册工具
   */
  register(tool: Tool, executor: ToolExecutor): void {
    this.tools.set(tool.function.name, tool);
    this.executors.set(tool.function.name, executor);
  }

  /**
   * 获取所有工具
   */
  getAllTools(): Tool[] {
    return Array.from(this.tools.values());
  }

  /**
   * 获取工具
   */
  getTool(name: string): Tool | undefined {
    return this.tools.get(name);
  }

  /**
   * 执行工具
   */
  async execute(name: string, args: any): Promise<string> {
    const executor = this.executors.get(name);
    if (!executor) {
      throw new Error(`Tool ${name} not found`);
    }
    return await executor(args);
  }

  /**
   * 检查工具是否存在
   */
  has(name: string): boolean {
    return this.tools.has(name);
  }
}

/**
 * 默认工具注册表
 */
export const defaultToolRegistry = new ToolRegistry();

// 注册内置工具
defaultToolRegistry.register(todoWriteTool, executeTodoWrite);
