/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package status

import (
	runtimeType "flowgram-runtime-go/interface/runtime"
)

// WorkflowRuntimeStatusCenter implements IStatusCenter interface
type WorkflowRuntimeStatusCenter struct {
	workflowStatus runtimeType.IStatus
	nodeStatus     map[string]runtimeType.IStatus
	startTime      int64
	endTime        *int64
}

// NewWorkflowRuntimeStatusCenter creates a new WorkflowRuntimeStatusCenter instance
func NewWorkflowRuntimeStatusCenter() *WorkflowRuntimeStatusCenter {
	return &WorkflowRuntimeStatusCenter{
		nodeStatus: make(map[string]runtimeType.IStatus),
	}
}

// Init initializes the status center
func (w *WorkflowRuntimeStatusCenter) Init() {
	w.workflowStatus = Create()
	w.nodeStatus = make(map[string]runtimeType.IStatus)
}

// Dispose cleans up resources (no-op as data is not persisted)
func (w *WorkflowRuntimeStatusCenter) Dispose() {
	// because the data is not persisted, do not clear the execution result
}

// GetWorkflow returns the workflow status
func (w *WorkflowRuntimeStatusCenter) GetWorkflow() runtimeType.IStatus {
	return w.workflowStatus
}

// GetWorkflowStatus returns the workflow status (alias for GetWorkflow)
func (w *WorkflowRuntimeStatusCenter) GetWorkflowStatus() runtimeType.IStatus {
	return w.workflowStatus
}

// GetNodeStatus returns the status for a specific node, creating it if it doesn't exist
func (w *WorkflowRuntimeStatusCenter) GetNodeStatus(nodeID string) runtimeType.IStatus {
	if _, exists := w.nodeStatus[nodeID]; !exists {
		w.nodeStatus[nodeID] = Create()
	}
	return w.nodeStatus[nodeID]
}

// GetStatusNodeIDs returns all node IDs that have the specified status
func (w *WorkflowRuntimeStatusCenter) GetStatusNodeIDs(status runtimeType.WorkflowStatus) []string {
	var nodeIDs []string
	for nodeID, nodeStatus := range w.nodeStatus {
		if statusImpl, ok := nodeStatus.(*WorkflowRuntimeStatus); ok {
			if statusImpl.GetStatus() == status {
				nodeIDs = append(nodeIDs, nodeID)
			}
		}
	}
	return nodeIDs
}

// ExportNodeStatus exports all node statuses as a map
func (w *WorkflowRuntimeStatusCenter) ExportNodeStatus() map[string]runtimeType.StatusData {
	result := make(map[string]runtimeType.StatusData)
	for nodeID, nodeStatus := range w.nodeStatus {
		result[nodeID] = nodeStatus.Export()
	}
	return result
}

// GetStartTime returns the start time of the workflow
func (w *WorkflowRuntimeStatusCenter) GetStartTime() int64 {
	return w.startTime
}

// SetStartTime sets the start time of the workflow
func (w *WorkflowRuntimeStatusCenter) SetStartTime(startTime int64) {
	w.startTime = startTime
}

// GetEndTime returns the end time of the workflow
func (w *WorkflowRuntimeStatusCenter) GetEndTime() *int64 {
	return w.endTime
}

// SetEndTime sets the end time of the workflow
func (w *WorkflowRuntimeStatusCenter) SetEndTime(endTime *int64) {
	w.endTime = endTime
}