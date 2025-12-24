/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { WorkflowValidateTool } from './workflow-validate';
import { WorkflowTestrunTool } from './workflow-testrun';
import { TodoWriteTool } from './todo-write';
import { StartNodeTool } from './start-node';
import { RemoveTool } from './remove-tool';
import { NodeValidateTool } from './node-validate';
import { LLMNodeTool } from './llm-node';
import { GetWorkflowStructureTool } from './get-workflow-structure';
import { GetWorkflowSchemaTool } from './get-workflow-schema';
import { GetWorkflowInputDefinitionTool } from './get-workflow-input-definition';
import { GetNodeSchemaTool } from './get-node-schema';
import { EndNodeTool } from './end-node';
import { CreateEdgeTool } from './create-edge';
import { ConditionNodeTool } from './condition-node';

export const AGENT_BUILTIN_TOOLS = [
  TodoWriteTool,
  GetWorkflowStructureTool,
  GetWorkflowSchemaTool,
  GetWorkflowInputDefinitionTool,
  WorkflowValidateTool,
  WorkflowTestrunTool,
  GetNodeSchemaTool,
  NodeValidateTool,
  CreateEdgeTool,
  RemoveTool,
  StartNodeTool,
  EndNodeTool,
  LLMNodeTool,
  ConditionNodeTool,
];
