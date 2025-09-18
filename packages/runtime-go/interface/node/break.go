/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package nodeType

import (
	"flowgram-runtime-go/interface/constant"
	"flowgram-runtime-go/interface/schema"
)

// BreakNodeData defines the data structure for break nodes
type BreakNodeData struct{}

// BreakNodeSchema represents the schema for break nodes
type BreakNodeSchema struct {
	schema.WorkflowNodeSchema
	Type constant.FlowGramNode `json:"type"`
	Data BreakNodeData         `json:"data"`
}
