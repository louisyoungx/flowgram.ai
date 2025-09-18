/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package schema

// IFlowConstantValue defines a constant value in the workflow
type IFlowConstantValue struct {
	Type    string      `json:"type"`
	Content interface{} `json:"content,omitempty"`
}

// IFlowRefValue defines a reference value in the workflow
type IFlowRefValue struct {
	Type    string    `json:"type"`
	Content []string  `json:"content,omitempty"`
}

// IFlowExpressionValue defines an expression value in the workflow
type IFlowExpressionValue struct {
	Type    string  `json:"type"`
	Content *string `json:"content,omitempty"`
}

// IFlowTemplateValue defines a template value in the workflow
type IFlowTemplateValue struct {
	Type    string  `json:"type"`
	Content *string `json:"content,omitempty"`
}

// IFlowValue is a union type of all flow value types
type IFlowValue interface{}

// IFlowConstantRefValue is a union type of constant and reference value types
type IFlowConstantRefValue interface{}