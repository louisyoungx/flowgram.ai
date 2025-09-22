/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package snapshot

import (
	"flowgram-runtime-go/infrastructure/utils"
	runtimeType "flowgram-runtime-go/interface/runtime"
)

type WorkflowRuntimeSnapshotCenter struct {
	Id        string
	snapshots []runtimeType.ISnapshot
}

func NewWorkflowRuntimeSnapshotCenter() *WorkflowRuntimeSnapshotCenter {
	return &WorkflowRuntimeSnapshotCenter{
		Id: utils.UUID(),
	}
}

// GetID returns the unique identifier of the snapshot center
func (c *WorkflowRuntimeSnapshotCenter) GetID() string {
	return c.Id
}

func (c *WorkflowRuntimeSnapshotCenter) Create(snapshotData runtimeType.SnapshotData) runtimeType.ISnapshot {
	snapshot := WorkflowRuntimeSnapshot{}.Create(snapshotData)
	c.snapshots = append(c.snapshots, snapshot)
	return snapshot
}

func (c *WorkflowRuntimeSnapshotCenter) Init() {
	c.snapshots = []runtimeType.ISnapshot{}
}

func (c *WorkflowRuntimeSnapshotCenter) Dispose() {
	// Because the data is not persisted, do not clear the execution result
}

func (c *WorkflowRuntimeSnapshotCenter) ExportAll() []runtimeType.Snapshot {
	result := make([]runtimeType.Snapshot, len(c.snapshots))
	for i, snapshot := range c.snapshots {
		result[i] = snapshot.Export()
	}
	return result
}

func (c *WorkflowRuntimeSnapshotCenter) Export() map[string][]runtimeType.Snapshot {
	result := make(map[string][]runtimeType.Snapshot)

	for _, snapshot := range c.ExportAll() {
		nodeID := snapshot.NodeID
		result[nodeID] = append(result[nodeID], snapshot)
	}

	return result
}
