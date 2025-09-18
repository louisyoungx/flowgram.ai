/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package nodeType

import (
	"flowgram-runtime-go/interface/constant"
	"flowgram-runtime-go/interface/schema"
)

// ScriptData defines the script data structure
type ScriptData struct {
	Language string `json:"language"`
	Content  string `json:"content"`
}

// CodeNodeData defines the data structure for code nodes
type CodeNodeData struct {
	Title        string                       `json:"title"`
	InputsValues map[string]schema.IFlowValue `json:"inputsValues"`
	Inputs       schema.IJsonSchema           `json:"inputs"`
	Outputs      schema.IJsonSchema           `json:"outputs"`
	Script       ScriptData                   `json:"script"`
}

// CodeNodeSchema represents the schema for code nodes
type CodeNodeSchema struct {
	schema.WorkflowNodeSchema
	Type constant.FlowGramNode `json:"type"`
	Data CodeNodeData          `json:"data"`
}
