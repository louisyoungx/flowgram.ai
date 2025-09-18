/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package nodeType

import (
	"flowgram-runtime-go/interface/constant"
	"flowgram-runtime-go/interface/schema"
)

// StartNodeData defines the data structure for start nodes
type StartNodeData struct {
	Title   string             `json:"title"`
	Outputs schema.IJsonSchema `json:"outputs"`
}

// StartNodeSchema represents the schema for start nodes
type StartNodeSchema struct {
	schema.WorkflowNodeSchema
	Type constant.FlowGramNode `json:"type"`
	Data StartNodeData         `json:"data"`
}
