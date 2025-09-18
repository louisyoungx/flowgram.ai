/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package schema

// WorkflowSchema defines the schema for workflows
type WorkflowSchema struct {
	Nodes         []WorkflowNodeSchema  `json:"nodes"`
	Edges         []WorkflowEdgeSchema  `json:"edges"`
	Groups        []WorkflowGroupSchema `json:"groups,omitempty"`
	GlobalVariable *IJsonSchema         `json:"globalVariable,omitempty"`
}