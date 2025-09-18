/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package runtimeType

// IOData defines the structure for input and output data
type IOData struct {
	Inputs  WorkflowInputs
	Outputs WorkflowOutputs
}

// IIOCenter defines the interface for input and output center
type IIOCenter interface {
	GetInputs() WorkflowInputs
	GetOutputs() WorkflowOutputs
	SetInputs(inputs WorkflowInputs)
	SetOutputs(outputs WorkflowOutputs)
	Init(inputs WorkflowInputs)
	Dispose()
	Export() IOData
}
