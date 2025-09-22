/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package executor

import (
	"flowgram-runtime-go/interface/constant"
	runtimeType "flowgram-runtime-go/interface/runtime"
	"fmt"
)

// IExecutor defines the interface for workflow execution
type IExecutor interface {
	Register(executor runtimeType.INodeExecutor)
	Execute(context *runtimeType.ExecutionContext) (*runtimeType.ExecutionResult, error)
}

// WorkflowRuntimeExecutor implements IExecutor interface
type WorkflowRuntimeExecutor struct {
	// nodeExecutors maps node types to their executors
	nodeExecutors map[constant.FlowGramNode]runtimeType.INodeExecutor
}

// NewWorkflowRuntimeExecutor creates a new WorkflowRuntimeExecutor instance
func NewWorkflowRuntimeExecutor(nodeExecutors []runtimeType.INodeExecutorFactory) *WorkflowRuntimeExecutor {
	executor := &WorkflowRuntimeExecutor{
		nodeExecutors: make(map[constant.FlowGramNode]runtimeType.INodeExecutor),
	}

	// register node executors
	for _, factory := range nodeExecutors {
		executor.Register(factory.New())
	}

	return executor
}

// Register adds a new node executor
func (e *WorkflowRuntimeExecutor) Register(executor runtimeType.INodeExecutor) {
	e.nodeExecutors[executor.GetType()] = executor
}

// Execute runs the execution for a given context
func (e *WorkflowRuntimeExecutor) Execute(context runtimeType.ExecutionContext) (*runtimeType.ExecutionResult, error) {
	nodeType := context.Node.GetType()
	nodeExecutor, exists := e.nodeExecutors[nodeType]
	if !exists {
		return nil, fmt.Errorf("no executor found for node type %v", nodeType)
	}

	output, err := nodeExecutor.Execute(context)
	if err != nil {
		return nil, err
	}

	return output, nil
}
