/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package document

import (
	"flowgram-runtime-go/interface/constant"
	"flowgram-runtime-go/interface/schema"
)

// Helper function to create string pointer
func stringPtr(s string) *string {
	return &s
}

// Helper function to create IFlowConstantValue
func createConstantValue(content interface{}) schema.IFlowValue {
	return schema.IFlowConstantValue{
		Type:    "constant",
		Content: content,
	}
}

// Helper function to create IFlowRefValue
func createRefValue(content []string) schema.IFlowValue {
	return schema.IFlowRefValue{
		Type:    "ref",
		Content: content,
	}
}

// TestSchemas contains test data for unit tests
type TestSchemas struct{}

// BasicSchema returns a basic workflow schema for testing
func (ts *TestSchemas) BasicSchema() schema.WorkflowSchema {
	return schema.WorkflowSchema{
		Nodes: []schema.WorkflowNodeSchema{
			{
				ID:   "start_0",
				Type: constant.FlowGramNodeStart,
				Meta: schema.WorkflowNodeMetaSchema{
					Position: schema.PositionSchema{X: 100, Y: 100},
				},
				Data: map[string]any{
					"title": "Start",
					"outputs": schema.IJsonSchema{
						Type: "object",
						Properties: map[string]schema.IJsonSchema{
							"message": {
								Type:        "string",
								Description: stringPtr("Input message"),
							},
						},
						Required: []string{"message"},
					},
				},
			},
			{
				ID:   "end_0",
				Type: constant.FlowGramNodeEnd,
				Meta: schema.WorkflowNodeMetaSchema{
					Position: schema.PositionSchema{X: 300, Y: 100},
				},
				Data: map[string]any{
					"title": "End",
					"inputs": schema.IJsonSchema{
						Type: "object",
						Properties: map[string]schema.IJsonSchema{
							"result": {
								Type:        "string",
								Description: stringPtr("Final result"),
							},
						},
						Required: []string{"result"},
					},
					"inputsValues": map[string]schema.IFlowValue{
						"result": createRefValue([]string{"start_0", "message"}),
					},
				},
			},
		},
		Edges: []schema.WorkflowEdgeSchema{
			{
				SourceNodeID: "start_0",
				TargetNodeID: "end_0",
			},
		},
	}
}

// TwoLLMSchema returns a more complex workflow schema with two LLM nodes
func (ts *TestSchemas) TwoLLMSchema() schema.WorkflowSchema {
	return schema.WorkflowSchema{
		Nodes: []schema.WorkflowNodeSchema{
			{
				ID:   "start_0",
				Type: constant.FlowGramNodeStart,
				Meta: schema.WorkflowNodeMetaSchema{
					Position: schema.PositionSchema{X: 100, Y: 100},
				},
				Data: map[string]any{
					"title": "Start",
					"outputs": schema.IJsonSchema{
						Type: "object",
						Properties: map[string]schema.IJsonSchema{
							"input": {
								Type: "string",
							},
						},
						Required: []string{"input"},
					},
				},
			},
			{
				ID:   "llm_1",
				Type: constant.FlowGramNodeLLM,
				Meta: schema.WorkflowNodeMetaSchema{
					Position: schema.PositionSchema{X: 300, Y: 100},
				},
				Data: map[string]any{
					"title": "LLM 1",
					"inputs": schema.IJsonSchema{
						Type: "object",
						Properties: map[string]schema.IJsonSchema{
							"prompt": {Type: "string"},
						},
					},
					"outputs": schema.IJsonSchema{
						Type: "object",
						Properties: map[string]schema.IJsonSchema{
							"result": {Type: "string"},
						},
					},
					"inputsValues": map[string]schema.IFlowValue{
						"prompt": createRefValue([]string{"start_0", "input"}),
					},
				},
			},
			{
				ID:   "llm_2",
				Type: constant.FlowGramNodeLLM,
				Meta: schema.WorkflowNodeMetaSchema{
					Position: schema.PositionSchema{X: 500, Y: 100},
				},
				Data: map[string]any{
					"title": "LLM 2",
					"inputs": schema.IJsonSchema{
						Type: "object",
						Properties: map[string]schema.IJsonSchema{
							"prompt": {Type: "string"},
						},
					},
					"outputs": schema.IJsonSchema{
						Type: "object",
						Properties: map[string]schema.IJsonSchema{
							"result": {Type: "string"},
						},
					},
					"inputsValues": map[string]schema.IFlowValue{
						"prompt": createRefValue([]string{"llm_1", "result"}),
					},
				},
			},
			{
				ID:   "end_0",
				Type: constant.FlowGramNodeEnd,
				Meta: schema.WorkflowNodeMetaSchema{
					Position: schema.PositionSchema{X: 700, Y: 100},
				},
				Data: map[string]any{
					"title": "End",
					"inputs": schema.IJsonSchema{
						Type: "object",
						Properties: map[string]schema.IJsonSchema{
							"final_result": {Type: "string"},
						},
					},
					"inputsValues": map[string]schema.IFlowValue{
						"final_result": createRefValue([]string{"llm_2", "result"}),
					},
				},
			},
		},
		Edges: []schema.WorkflowEdgeSchema{
			{SourceNodeID: "start_0", TargetNodeID: "llm_1"},
			{SourceNodeID: "llm_1", TargetNodeID: "llm_2"},
			{SourceNodeID: "llm_2", TargetNodeID: "end_0"},
		},
	}
}

// EmptySchema returns an empty workflow schema for testing
func (ts *TestSchemas) EmptySchema() schema.WorkflowSchema {
	return schema.WorkflowSchema{
		Nodes: []schema.WorkflowNodeSchema{},
		Edges: []schema.WorkflowEdgeSchema{},
	}
}

// GetTestSchemas returns a new instance of TestSchemas
func GetTestSchemas() *TestSchemas {
	return &TestSchemas{}
}