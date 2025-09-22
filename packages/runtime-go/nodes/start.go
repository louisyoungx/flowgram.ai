/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package nodes

import (
	"flowgram-runtime-go/interface/constant"
	runtimeType "flowgram-runtime-go/interface/runtime"
)

// StartExecutor implements INodeExecutor for start nodes
type StartExecutor struct {
	Type constant.FlowGramNode
}

// NewStartExecutor creates a new StartExecutor instance
func NewStartExecutor() *StartExecutor {
	return &StartExecutor{
		Type: constant.FlowGramNodeStart,
	}
}

// GetType returns the node type
func (e *StartExecutor) GetType() constant.FlowGramNode {
	return e.Type
}

// Execute executes the start node
func (e *StartExecutor) Execute(context runtimeType.ExecutionContext) (*runtimeType.ExecutionResult, error) {
	// Start node simply passes through the workflow inputs as outputs
	inputs := context.Runtime.GetIOCenter().GetInputs()

	return &runtimeType.ExecutionResult{
		Outputs: runtimeType.WorkflowOutputs(inputs),
		Branch:  nil,
	}, nil
}

// StartExecutorFactory implements INodeExecutorFactory for StartExecutor
type StartExecutorFactory struct{}

// New creates a new StartExecutor instance
func (f *StartExecutorFactory) New() runtimeType.INodeExecutor {
	return NewStartExecutor()
}