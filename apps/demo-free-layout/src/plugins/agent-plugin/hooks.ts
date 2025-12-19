/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { useClientContext } from '@flowgram.ai/free-layout-editor';

import type { AgentService } from './types';
import { AgentServiceToken } from './agent-plugin';

export const useAgentService = (): AgentService => {
  const ctx = useClientContext();
  const agentService = ctx.get(AgentServiceToken);
  if (!agentService) {
    throw new Error('AgentService not found. Make sure AgentPlugin is registered.');
  }
  return agentService as AgentService;
};
