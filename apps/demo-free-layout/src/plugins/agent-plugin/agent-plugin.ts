/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { definePluginCreator } from '@flowgram.ai/free-layout-editor';

import type { AgentConfig } from './types';
import { AgentServiceImpl } from './agent-service';

export const AgentServiceToken = Symbol('AgentService');

export const createAgentPlugin = definePluginCreator<{ config?: Partial<AgentConfig> }>({
  onBind({ bind }, opts) {
    bind(AgentServiceToken).toDynamicValue(() => new AgentServiceImpl(opts.config));
  },
  onInit() {
    // Plugin initialization logic can be added here if needed
  },
});
