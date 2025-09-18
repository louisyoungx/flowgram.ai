/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package schema

// WorkflowEdgeSchema defines the schema for workflow edges
type WorkflowEdgeSchema struct {
	SourceNodeID string `json:"sourceNodeID"`
	TargetNodeID string `json:"targetNodeID"`
	SourcePortID *string `json:"sourcePortID,omitempty"`
	TargetPortID *string `json:"targetPortID,omitempty"`
}