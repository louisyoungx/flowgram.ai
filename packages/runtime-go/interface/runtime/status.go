/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package runtimeType

type WorkflowStatus string

const (
	WorkflowStatusPending    WorkflowStatus = "pending"
	WorkflowStatusProcessing WorkflowStatus = "processing"
	WorkflowStatusSucceeded  WorkflowStatus = "succeeded"
	WorkflowStatusFailed     WorkflowStatus = "failed"
	WorkflowStatusCanceled   WorkflowStatus = "canceled"
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
	GetStatus() WorkflowStatus
	IsTerminated() bool
	GetStartTime() int64
	GetEndTime() *int64
	GetTimeCost() int64
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
