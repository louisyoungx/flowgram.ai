/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package runtimeType

type ITask interface {
	GetID() string
	GetProcessing() <-chan WorkflowOutputs
	GetContext() IContext
	Cancel()
}

type TaskParams struct {
	Processing chan WorkflowOutputs
	Context    IContext
}
