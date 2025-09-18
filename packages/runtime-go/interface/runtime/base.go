/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package runtimeType

import "flowgram-runtime-go/interface/schema"

// InvokeParams defines the parameters for workflow invocation
type InvokeParams struct {
	Schema schema.WorkflowSchema `json:"schema"`
	Inputs WorkflowInputs        `json:"inputs"`
}

// WorkflowRuntimeInvoke defines a function type for workflow invocation
type WorkflowRuntimeInvoke func(params InvokeParams) (WorkflowInputs, error)

// WorkflowInputs represents a map of string to any value
type WorkflowInputs map[string]interface{}

// WorkflowOutputs represents a map of string to any value
type WorkflowOutputs map[string]interface{}

// VOData represents a type without the 'id' field
type VOData[T any] struct {
	// Omit id field from T
}
