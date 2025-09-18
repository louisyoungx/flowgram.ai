/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package schema

// WorkflowGroupSchema defines the schema for workflow groups
type WorkflowGroupSchema struct {
	WorkflowNodeSchema
	Data struct {
		Title    *string  `json:"title,omitempty"`
		Color    *string  `json:"color,omitempty"`
		ParentID string   `json:"parentID"`
		BlockIDs []string `json:"blockIDs"`
	} `json:"data"`
}