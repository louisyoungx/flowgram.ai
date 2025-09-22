/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package snapshot

import (
	"flowgram-runtime-go/infrastructure/utils"
	runtimeType "flowgram-runtime-go/interface/runtime"
)

type WorkflowRuntimeSnapshot struct {
	ID   string
	Data runtimeType.SnapshotData
}

func (s *WorkflowRuntimeSnapshot) GetID() string {
	return s.ID
}

func (s *WorkflowRuntimeSnapshot) GetData() runtimeType.SnapshotData {
	return s.Data
}

func (s *WorkflowRuntimeSnapshot) Update(data runtimeType.SnapshotData) {
	// In Go, we need to update fields individually
	if data.NodeID != "" {
		s.Data.NodeID = data.NodeID
	}
	if data.Inputs != nil {
		s.Data.Inputs = data.Inputs
	}
	if data.Outputs != nil {
		s.Data.Outputs = data.Outputs
	}
	if data.Data != nil {
		s.Data.Data = data.Data
	}
	// Update other fields as needed
}

func (s *WorkflowRuntimeSnapshot) Validate() bool {
	// Check if required fields are present
	return s.Data.NodeID != "" &&
		s.Data.Inputs != nil &&
		s.Data.Outputs != nil &&
		s.Data.Data != nil
}

func (s *WorkflowRuntimeSnapshot) Export() runtimeType.Snapshot {
	snapshot := runtimeType.Snapshot{
		ID:      s.ID,
		NodeID:  s.Data.NodeID,
		Inputs:  s.Data.Inputs,
		Outputs: s.Data.Outputs,
		Data:    s.Data.Data,
		// Copy other fields from s.Data as needed
	}
	return snapshot
}

func (WorkflowRuntimeSnapshot) Create(params runtimeType.SnapshotData) runtimeType.ISnapshot {
	return &WorkflowRuntimeSnapshot{
		ID:   utils.UUID(),
		Data: params,
	}
}
