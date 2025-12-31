/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { Tool } from '../types';

export interface ToolSuccessResult<T = any> {
  success: true;
  data?: T;
  message: string;
}

export interface ToolErrorResult {
  success: false;
  error: string;
  data?: any;
}

export type ToolCallResult<T = any> = ToolSuccessResult<T> | ToolErrorResult;

/**
 * 工具基类接口
 * 所有工具都需要实现此接口
 */
export interface IAgentTool<TArgs = any, TData = any> {
  /**
   * 工具定义（OpenAI Function Calling 格式）
   */
  readonly tool: Tool;

  /**
   * 是否默认激活（核心工具设为 true）
   */
  readonly activated?: boolean;

  /**
   * 执行工具
   * @param args 工具参数
   * @returns 执行结果（ToolResult 结构体）
   */
  execute(args: TArgs): Promise<ToolCallResult<TData>>;
}

/**
 * IAgentTool Token（用于 IoC 绑定）
 */
export const IAgentTool = Symbol.for('IAgentTool');
