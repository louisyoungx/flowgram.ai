/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package nodes

import (
	"flowgram-runtime-go/interface/constant"
	runtimeType "flowgram-runtime-go/interface/runtime"
)

// EndExecutor implements INodeExecutor for end nodes
type EndExecutor struct {
	Type constant.FlowGramNode
}

// NewEndExecutor creates a new EndExecutor instance
func NewEndExecutor() *EndExecutor {
	return &EndExecutor{
		Type: constant.FlowGramNodeEnd,
	}
}

// GetType returns the node type
func (e *EndExecutor) GetType() constant.FlowGramNode {
	return e.Type
}

// Execute executes the end node
func (e *EndExecutor) Execute(context runtimeType.ExecutionContext) (*runtimeType.ExecutionResult, error) {
	// End node sets the workflow outputs and returns the inputs as outputs
	context.Runtime.GetIOCenter().SetOutputs(runtimeType.WorkflowOutputs(context.Inputs))
	
	return &runtimeType.ExecutionResult{
		Outputs: runtimeType.WorkflowOutputs(context.Inputs),
		Branch:  nil,
	}, nil
}

// EndExecutorFactory implements INodeExecutorFactory for EndExecutor
type EndExecutorFactory struct{}

// New creates a new EndExecutor instance
func (f *EndExecutorFactory) New() runtimeType.INodeExecutor {
	return NewEndExecutor()
}