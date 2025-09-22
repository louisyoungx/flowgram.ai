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
	ID         string
	Terminated bool
	Status     runtimeType.WorkflowStatus
	StartTime  int64
	EndTime    *int64
}

// NewWorkflowRuntimeStatus creates a new WorkflowRuntimeStatus instance
func NewWorkflowRuntimeStatus() *WorkflowRuntimeStatus {
	return &WorkflowRuntimeStatus{
		ID:     utils.UUID(),
		Status: runtimeType.WorkflowStatusPending,
	}
}

// Create creates a new WorkflowRuntimeStatus instance (factory method)
func Create() runtimeType.IStatus {
	return NewWorkflowRuntimeStatus()
}

// GetID returns the unique identifier of the status
func (w *WorkflowRuntimeStatus) GetID() string {
	return w.ID
}

// GetStatus returns the current workflow status
func (w *WorkflowRuntimeStatus) GetStatus() runtimeType.WorkflowStatus {
	return w.Status
}

// IsTerminated checks if the workflow is in a terminal state
func (w *WorkflowRuntimeStatus) IsTerminated() bool {
	return w.Status == runtimeType.WorkflowStatusSucceeded ||
		w.Status == runtimeType.WorkflowStatusFailed ||
		w.Status == runtimeType.WorkflowStatusCanceled
}

// GetStartTime returns the start time in milliseconds
func (w *WorkflowRuntimeStatus) GetStartTime() int64 {
	return w.StartTime
}

// GetEndTime returns the end time in milliseconds (nil if not ended)
func (w *WorkflowRuntimeStatus) GetEndTime() *int64 {
	return w.EndTime
}

// GetTimeCost calculates the time cost in milliseconds
func (w *WorkflowRuntimeStatus) GetTimeCost() int64 {
	if w.StartTime == 0 {
		return 0
	}
	if w.EndTime != nil {
		return *w.EndTime - w.StartTime
	}
	return time.Now().UnixMilli() - w.StartTime
}

// Process sets the status to processing and records start time
func (w *WorkflowRuntimeStatus) Process() {
	w.Status = runtimeType.WorkflowStatusProcessing
	w.StartTime = time.Now().UnixMilli()
	w.EndTime = nil
}

// Success sets the status to succeeded and records end time
func (w *WorkflowRuntimeStatus) Success() {
	if w.IsTerminated() {
		return
	}
	w.Status = runtimeType.WorkflowStatusSucceeded
	endTime := time.Now().UnixMilli()
	w.EndTime = &endTime
}

// Fail sets the status to failed and records end time
func (w *WorkflowRuntimeStatus) Fail() {
	if w.IsTerminated() {
		return
	}
	w.Status = runtimeType.WorkflowStatusFailed
	endTime := time.Now().UnixMilli()
	w.EndTime = &endTime
}

// Cancel sets the status to canceled and records end time
func (w *WorkflowRuntimeStatus) Cancel() {
	if w.IsTerminated() {
		return
	}
	w.Status = runtimeType.WorkflowStatusCanceled
	endTime := time.Now().UnixMilli()
	w.EndTime = &endTime
}

// Export returns the status data for serialization
func (w *WorkflowRuntimeStatus) Export() runtimeType.StatusData {
	return runtimeType.StatusData{
		Status:     w.Status,
		Terminated: w.IsTerminated(),
		StartTime:  w.StartTime,
		EndTime:    w.EndTime,
		TimeCost:   w.GetTimeCost(),
	}
}
