/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package status

import (
	"time"

	"flowgram-runtime-go/infrastructure/utils"
	runtimeType "flowgram-runtime-go/interface/runtime"
)

// WorkflowRuntimeStatus implements IStatus interface
type WorkflowRuntimeStatus struct {
	id        string
	status    runtimeType.WorkflowStatus
	startTime int64
	endTime   *int64
}

// NewWorkflowRuntimeStatus creates a new WorkflowRuntimeStatus instance
func NewWorkflowRuntimeStatus() *WorkflowRuntimeStatus {
	return &WorkflowRuntimeStatus{
		id:     utils.UUID(),
		status: runtimeType.StatusPending,
	}
}

// Create creates a new WorkflowRuntimeStatus instance (factory method)
func Create() runtimeType.IStatus {
	return NewWorkflowRuntimeStatus()
}

// GetID returns the unique identifier of the status
func (w *WorkflowRuntimeStatus) GetID() string {
	return w.id
}

// GetStatus returns the current workflow status
func (w *WorkflowRuntimeStatus) GetStatus() runtimeType.WorkflowStatus {
	return w.status
}

// IsTerminated checks if the workflow is in a terminal state
func (w *WorkflowRuntimeStatus) IsTerminated() bool {
	return w.status == runtimeType.StatusSucceeded ||
		w.status == runtimeType.StatusFailed ||
		w.status == runtimeType.StatusCanceled
}

// GetStartTime returns the start time in milliseconds
func (w *WorkflowRuntimeStatus) GetStartTime() int64 {
	return w.startTime
}

// GetEndTime returns the end time in milliseconds (nil if not ended)
func (w *WorkflowRuntimeStatus) GetEndTime() *int64 {
	return w.endTime
}

// GetTimeCost calculates the time cost in milliseconds
func (w *WorkflowRuntimeStatus) GetTimeCost() int64 {
	if w.startTime == 0 {
		return 0
	}
	if w.endTime != nil {
		return *w.endTime - w.startTime
	}
	return time.Now().UnixMilli() - w.startTime
}

// Process sets the status to processing and records start time
func (w *WorkflowRuntimeStatus) Process() {
	w.status = runtimeType.StatusProcessing
	w.startTime = time.Now().UnixMilli()
	w.endTime = nil
}

// Success sets the status to succeeded and records end time
func (w *WorkflowRuntimeStatus) Success() {
	if w.IsTerminated() {
		return
	}
	w.status = runtimeType.StatusSucceeded
	endTime := time.Now().UnixMilli()
	w.endTime = &endTime
}

// Fail sets the status to failed and records end time
func (w *WorkflowRuntimeStatus) Fail() {
	if w.IsTerminated() {
		return
	}
	w.status = runtimeType.StatusFailed
	endTime := time.Now().UnixMilli()
	w.endTime = &endTime
}

// Cancel sets the status to canceled and records end time
func (w *WorkflowRuntimeStatus) Cancel() {
	if w.IsTerminated() {
		return
	}
	w.status = runtimeType.StatusCanceled
	endTime := time.Now().UnixMilli()
	w.endTime = &endTime
}

// Export returns the status data for serialization
func (w *WorkflowRuntimeStatus) Export() runtimeType.StatusData {
	return runtimeType.StatusData{
		Status:     w.status,
		Terminated: w.IsTerminated(),
		StartTime:  w.startTime,
		EndTime:    w.endTime,
		TimeCost:   w.GetTimeCost(),
	}
}
