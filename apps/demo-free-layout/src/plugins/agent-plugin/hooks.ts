/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { useClientContext } from '@flowgram.ai/free-layout-editor';

import { IWorkflowAgentService } from './types';

export const useAgentService = (): IWorkflowAgentService => {
  const ctx = useClientContext();
  const agentService = ctx.get(IWorkflowAgentService);
  if (!agentService) {
    throw new Error('AgentService not found. Make sure AgentPlugin is registered.');
  }
  return agentService as IWorkflowAgentService;
};
