/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package task

import (
	"flowgram-runtime-go/infrastructure/utils"
	runtimeType "flowgram-runtime-go/interface/runtime"
)

// WorkflowRuntimeTask implements ITask interface
type WorkflowRuntimeTask struct {
	id         string
	processing chan runtimeType.WorkflowOutputs
	context    runtimeType.IContext
}

// NewWorkflowRuntimeTask creates a new WorkflowRuntimeTask instance
func NewWorkflowRuntimeTask(params runtimeType.TaskParams) *WorkflowRuntimeTask {
	return &WorkflowRuntimeTask{
		id:         utils.UUID(),
		context:    params.Context,
		processing: params.Processing,
	}
}

// GetID returns the task ID
func (t *WorkflowRuntimeTask) GetID() string {
	return t.id
}

// GetProcessing returns the processing channel
func (t *WorkflowRuntimeTask) GetProcessing() <-chan runtimeType.WorkflowOutputs {
	return t.processing
}

// GetContext returns the task context
func (t *WorkflowRuntimeTask) GetContext() runtimeType.IContext {
	return t.context
}

// Cancel cancels the task and all processing nodes
func (t *WorkflowRuntimeTask) Cancel() {
	// Cancel the workflow
	t.context.GetStatusCenter().GetWorkflow().Cancel()
	
	// Get all processing node IDs and cancel them
	cancelNodeIDs := t.context.GetStatusCenter().GetStatusNodeIDs(runtimeType.StatusProcessing)
	for _, nodeID := range cancelNodeIDs {
		t.context.GetStatusCenter().GetNodeStatus(nodeID).Cancel()
	}
}

// Create is a static factory method to create a new WorkflowRuntimeTask
func Create(params runtimeType.TaskParams) *WorkflowRuntimeTask {
	return NewWorkflowRuntimeTask(params)
}