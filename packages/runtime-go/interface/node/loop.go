/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package nodeType

import (
	"flowgram-runtime-go/interface/constant"
	"flowgram-runtime-go/interface/schema"
)

// LoopNodeData defines the data structure for loop nodes
type LoopNodeData struct {
	Title       string                          `json:"title"`
	LoopFor     schema.IFlowRefValue            `json:"loopFor"`
	LoopOutputs map[string]schema.IFlowRefValue `json:"loopOutputs"`
}

// LoopNodeSchema represents the schema for loop nodes
type LoopNodeSchema struct {
	schema.WorkflowNodeSchema
	Type constant.FlowGramNode `json:"type"`
	Data LoopNodeData          `json:"data"`
}
