/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package nodeType

import (
	"flowgram-runtime-go/interface/constant"
	"flowgram-runtime-go/interface/schema"
)

// EndNodeData defines the data structure for end nodes
type EndNodeData struct {
	Title        string                       `json:"title"`
	Inputs       schema.IJsonSchema           `json:"inputs"`
	InputsValues map[string]schema.IFlowValue `json:"inputsValues"`
}

// EndNodeSchema represents the schema for end nodes
type EndNodeSchema struct {
	schema.WorkflowNodeSchema
	Type constant.FlowGramNode `json:"type"`
	Data EndNodeData           `json:"data"`
}
