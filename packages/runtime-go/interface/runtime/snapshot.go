/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package runtimeType

type ISnapshotCenter interface {
	GetID() string
	Create(snapshot SnapshotData) ISnapshot
	ExportAll() []Snapshot
	Export() map[string][]Snapshot
	Init()
	Dispose()
}

type SnapshotData struct {
	NodeID  string          `json:"nodeID"`
	Inputs  WorkflowInputs  `json:"inputs"`
	Outputs WorkflowOutputs `json:"outputs"`
	Data    interface{}     `json:"data"`
	Branch  string          `json:"branch,omitempty"`
	Error   string          `json:"error,omitempty"`
}

type Snapshot struct {
	SnapshotData
	ID string `json:"id"`
}

type ISnapshot interface {
	GetID() string
	GetData() SnapshotData
	Update(data SnapshotData)
	Validate() bool
	Export() Snapshot
}
