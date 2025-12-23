/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { WorkflowValidateTool } from './workflow-validate';
import { WorkflowTestrunTool } from './workflow-testrun';
import { UpdateStartNodeTool } from './update-start-node';
import { TodoWriteTool } from './todo-write';
import { NodeValidateTool } from './node-validate';
import { GetWorkflowStructureTool } from './get-workflow-structure';
import { GetWorkflowSchemaTool } from './get-workflow-schema';
import { GetWorkflowInputDefinitionTool } from './get-workflow-input-definition';
import { GetNodeSchemaTool } from './get-node-schema';
import { CreateLLMNodeTool } from './create-llm-node';
import { CreateEdgeTool } from './create-edge';

export const AGENT_BUILTIN_TOOLS = [
  TodoWriteTool,
  GetWorkflowStructureTool,
  GetWorkflowSchemaTool,
  GetWorkflowInputDefinitionTool,
  WorkflowValidateTool,
  WorkflowTestrunTool,
  GetNodeSchemaTool,
  NodeValidateTool,
  CreateLLMNodeTool,
  CreateEdgeTool,
  UpdateStartNodeTool,
];
