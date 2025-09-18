/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package runtimeType

type EngineServices struct {
	Validation IValidation
	Executor   IExecutor
}

type IEngine interface {
	Invoke(params InvokeParams) ITask
	ExecuteNode(context IContext, node INode[any]) error
}

const EngineKey = "Engine"
