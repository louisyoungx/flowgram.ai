/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { definePluginCreator } from '@flowgram.ai/free-layout-editor';

import { IWorkflowAgentService, type AgentConfig } from './types';
import { WorkflowAgentToolRegistry, ITool, TodoWriteTool, WorkflowInfoTool } from './tools';
import { WorkflowAgentService } from './agent-service';

export const createAgentPlugin = definePluginCreator<{ config?: Partial<AgentConfig> }>({
  onBind({ bind }, opts) {
    // 绑定工具注册表
    bind(WorkflowAgentToolRegistry).toSelf().inSingletonScope();

    // 绑定所有工具（使用 multiInject）
    bind(ITool).to(TodoWriteTool).inSingletonScope();
    bind(ITool).to(WorkflowInfoTool).inSingletonScope();
    // 未来添加新工具时，在这里继续绑定：
    // bind(ITool).to(AnotherTool).inSingletonScope();

    // 绑定 Agent 服务
    bind(WorkflowAgentService).toSelf().inSingletonScope();
    bind(IWorkflowAgentService).to(WorkflowAgentService).inSingletonScope();
  },
  onInit(ctx, opts) {
    const agentService = ctx.get<IWorkflowAgentService>(IWorkflowAgentService);
    agentService.init(opts?.config);
  },
});
