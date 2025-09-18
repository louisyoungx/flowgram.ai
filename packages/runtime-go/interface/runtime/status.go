/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package runtimeType

type WorkflowStatus string

const (
	StatusPending    WorkflowStatus = "pending"
	StatusProcessing WorkflowStatus = "processing"
	StatusSucceeded  WorkflowStatus = "succeeded"
	StatusFailed     WorkflowStatus = "failed"
	StatusCanceled   WorkflowStatus = "canceled"
)

type StatusData struct {
	Status     WorkflowStatus `json:"status"`
	Terminated bool           `json:"terminated"`
	StartTime  int64          `json:"startTime"`
	EndTime    *int64         `json:"endTime,omitempty"`
	TimeCost   int64          `json:"timeCost"`
}

type IStatus interface {
	GetID() string
	Process()
	Success()
	Fail()
	Cancel()
	Export() StatusData
}

type IStatusCenter interface {
	GetWorkflow() IStatus
	GetNodeStatus(nodeID string) IStatus
	Init()
	Dispose()
	GetStatusNodeIDs(status WorkflowStatus) []string
	ExportNodeStatus() map[string]StatusData
}
