/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package schema

import "flowgram-runtime-go/interface/constant"

// WorkflowNodeSchema defines the schema for workflow nodes
type WorkflowNodeSchema struct {
	ID     string                 `json:"id"`
	Type   constant.FlowGramNode  `json:"type"`
	Meta   WorkflowNodeMetaSchema `json:"meta"`
	Data   map[string]any         `json:"data"`
	Blocks []WorkflowNodeSchema   `json:"blocks,omitempty"`
	Edges  []WorkflowEdgeSchema   `json:"edges,omitempty"`
}

// GetNodeData returns the data field with proper type assertion
func (n *WorkflowNodeSchema) GetNodeData() map[string]any {
	return n.Data
}

// GetTitle returns the title from node data
func (n *WorkflowNodeSchema) GetTitle() string {
	if title, ok := n.Data["title"].(string); ok {
		return title
	}
	return ""
}

// GetInputsValues returns the inputsValues from node data
func (n *WorkflowNodeSchema) GetInputsValues() map[string]IFlowValue {
	if inputsValues, ok := n.Data["inputsValues"].(map[string]any); ok {
		result := make(map[string]IFlowValue)
		for k, v := range inputsValues {
			result[k] = v
		}
		return result
	}
	return nil
}

// GetInputs returns the inputs schema from node data
func (n *WorkflowNodeSchema) GetInputs() *IJsonSchema {
	if inputs, ok := n.Data["inputs"].(IJsonSchema); ok {
		return &inputs
	}
	return nil
}

// GetOutputs returns the outputs schema from node data
func (n *WorkflowNodeSchema) GetOutputs() *IJsonSchema {
	if outputs, ok := n.Data["outputs"].(IJsonSchema); ok {
		return &outputs
	}
	return nil
}
