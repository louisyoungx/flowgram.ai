/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package nodes

import (
	runtimeType "flowgram-runtime-go/interface/runtime"
)

// WorkflowRuntimeNodeExecutors contains all available node executor factories
// This is the Go equivalent of the TypeScript WorkflowRuntimeNodeExecutors array
var WorkflowRuntimeNodeExecutors = []runtimeType.INodeExecutorFactory{
	&StartExecutorFactory{},
	&EndExecutorFactory{},
	&LLMExecutorFactory{},
}