/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { definePluginCreator } from '@flowgram.ai/free-layout-editor';

import { IWorkflowAgentService, type AgentConfig } from './types';
import { WorkflowAgentService } from './agent-service';

export const createAgentPlugin = definePluginCreator<{ config?: Partial<AgentConfig> }>({
  onBind({ bind }, opts) {
    bind(IWorkflowAgentService).toDynamicValue(() => new WorkflowAgentService(opts.config));
  },
  onInit() {
    // Plugin initialization logic can be added here if needed
  },
});
