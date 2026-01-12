/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import type React from 'react';

import type { z } from 'zod';

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

export interface AgentToolDefinition<TParams = any, TResult = any> {
  name: string;
  description: string;
  parameters: z.ZodType<TParams>;
  render?: React.FC<{ args: TParams; result?: ToolCallResult<TResult> }>;
}

export interface IAgentTool<TParams = any, TResult = any> {
  readonly definition: AgentToolDefinition<TParams, TResult>;
  readonly activated?: boolean;
  execute(params: TParams): Promise<ToolCallResult<TResult>>;
}

export const IAgentTool = Symbol.for('IAgentTool');
