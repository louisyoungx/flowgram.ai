/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package iocenter

import (
	runtimeType "flowgram-runtime-go/interface/runtime"
)

type WorkflowRuntimeIOCenter struct {
	_inputs  runtimeType.WorkflowInputs
	_outputs runtimeType.WorkflowOutputs
}

func (c *WorkflowRuntimeIOCenter) Init(inputs runtimeType.WorkflowInputs) {
	c.SetInputs(inputs)
}

func (c *WorkflowRuntimeIOCenter) Dispose() {}

// GetInputs returns the current inputs
func (c *WorkflowRuntimeIOCenter) GetInputs() runtimeType.WorkflowInputs {
	return c.Inputs()
}

// GetOutputs returns the current outputs
func (c *WorkflowRuntimeIOCenter) GetOutputs() runtimeType.WorkflowOutputs {
	return c.Outputs()
}

func (c *WorkflowRuntimeIOCenter) Inputs() runtimeType.WorkflowInputs {
	if c._inputs == nil {
		return runtimeType.WorkflowInputs{}
	}
	return c._inputs
}

func (c *WorkflowRuntimeIOCenter) Outputs() runtimeType.WorkflowOutputs {
	if c._outputs == nil {
		return runtimeType.WorkflowOutputs{}
	}
	return c._outputs
}

func (c *WorkflowRuntimeIOCenter) SetInputs(inputs runtimeType.WorkflowInputs) {
	c._inputs = inputs
}

func (c *WorkflowRuntimeIOCenter) SetOutputs(outputs runtimeType.WorkflowOutputs) {
	c._outputs = outputs
}

func (c *WorkflowRuntimeIOCenter) Export() runtimeType.IOData {
	return runtimeType.IOData{
		Inputs:  c._inputs,
		Outputs: c._outputs,
	}
}

// NewWorkflowRuntimeIOCenter creates a new WorkflowRuntimeIOCenter instance
func NewWorkflowRuntimeIOCenter() *WorkflowRuntimeIOCenter {
	return &WorkflowRuntimeIOCenter{}
}
