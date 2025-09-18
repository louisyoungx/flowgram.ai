/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package runtimeType

import (
	"flowgram-runtime-go/interface/constant"
)

// IExecutor defines the interface for workflow executors
type IExecutor interface {
	Execute(context ExecutionContext) (*ExecutionResult, error)
	Register(executor INodeExecutor)
}

// ExecutorKey is the symbol key for executor
const ExecutorKey = "Executor"

// ExecutionContext defines the context for node execution
type ExecutionContext struct {
	Node      INode[any]
	Inputs    WorkflowInputs
	Container IContainer
	Runtime   IContext
	Snapshot  ISnapshot
}

// ExecutionResult defines the result of node execution
type ExecutionResult struct {
	Outputs WorkflowOutputs
	Branch  *string
}

// INodeExecutor defines the interface for node executors
type INodeExecutor interface {
	GetType() constant.FlowGramNode
	Execute(context ExecutionContext) (*ExecutionResult, error)
}

// INodeExecutorFactory defines the interface for node executor factory
type INodeExecutorFactory interface {
	New() INodeExecutor
}
