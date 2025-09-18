/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package nodeType

import (
	"flowgram-runtime-go/interface/constant"
	"flowgram-runtime-go/interface/schema"
)

// LLMInputValues defines the input values for LLM nodes
type LLMInputValues struct {
	APIKey       schema.IFlowValue `json:"apiKey"`
	ModelType    schema.IFlowValue `json:"modelType"`
	BaseURL      schema.IFlowValue `json:"baseURL"`
	Temperature  schema.IFlowValue `json:"temperature"`
	SystemPrompt schema.IFlowValue `json:"systemPrompt"`
	Prompt       schema.IFlowValue `json:"prompt"`
}

// LLMNodeData defines the data structure for LLM nodes
type LLMNodeData struct {
	Title       string             `json:"title"`
	Inputs      schema.IJsonSchema `json:"inputs"`
	Outputs     schema.IJsonSchema `json:"outputs"`
	InputValues LLMInputValues     `json:"inputValues"`
}

// LLMNodeSchema represents the schema for LLM nodes
type LLMNodeSchema struct {
	schema.WorkflowNodeSchema
	Type constant.FlowGramNode `json:"type"`
	Data LLMNodeData           `json:"data"`
}
