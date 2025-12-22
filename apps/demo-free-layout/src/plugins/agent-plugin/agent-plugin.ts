/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { definePluginCreator } from '@flowgram.ai/free-layout-editor';

import { IWorkflowAgentService, type AgentConfig } from './types';
import { WorkflowAgentService } from './agent-service';

export const createAgentPlugin = definePluginCreator<{ config?: Partial<AgentConfig> }>({
  onBind({ bind }, opts) {
    bind(WorkflowAgentService).toSelf().inSingletonScope();
    bind(IWorkflowAgentService).to(WorkflowAgentService).inSingletonScope();
  },
  onInit(ctx, opts) {
    const agentService = ctx.get<IWorkflowAgentService>(IWorkflowAgentService);
    agentService.init(opts?.config);
  },
});
