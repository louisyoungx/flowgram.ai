/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package schema

// WorkflowNodeMetaSchema defines metadata for workflow nodes
type WorkflowNodeMetaSchema struct {
	Position       PositionSchema  `json:"position"`
	CanvasPosition *PositionSchema `json:"canvasPosition,omitempty"`
}