/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { useClientContext } from '@flowgram.ai/free-layout-editor';

import { IWorkflowAgentService } from './types';
import { WorkflowAgentToolRegistry } from './tools';

export const useAgentService = (): IWorkflowAgentService => {
  const ctx = useClientContext();
  const agentService = ctx.get(IWorkflowAgentService);
  if (!agentService) {
    throw new Error('AgentService not found. Make sure AgentPlugin is registered.');
  }
  return agentService as IWorkflowAgentService;
};

export const useToolRegistry = (): WorkflowAgentToolRegistry => {
  const ctx = useClientContext();
  const toolRegistry = ctx.get(WorkflowAgentToolRegistry);
  if (!toolRegistry) {
    throw new Error('ToolRegistry not found. Make sure AgentPlugin is registered.');
  }
  return toolRegistry;
};
