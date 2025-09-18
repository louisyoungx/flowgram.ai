/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package runtimeType

type NodeReport struct {
	StatusData
	ID        string     `json:"id"`
	Snapshots []Snapshot `json:"snapshots"`
}

type WorkflowReports map[string]NodeReport

type IReport struct {
	ID             string           `json:"id"`
	Inputs         WorkflowInputs   `json:"inputs"`
	Outputs        WorkflowOutputs  `json:"outputs"`
	WorkflowStatus StatusData       `json:"workflowStatus"`
	Reports        WorkflowReports  `json:"reports"`
	Messages       WorkflowMessages `json:"messages"`
}

type IReporter interface {
	GetSnapshotCenter() ISnapshotCenter
	GetStatusCenter() IStatusCenter
	GetMessageCenter() IMessageCenter
	Init()
	Dispose()
	Export() IReport
}
