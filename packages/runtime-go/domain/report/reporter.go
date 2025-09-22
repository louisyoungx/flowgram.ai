/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package report

import (
	runtimeType "flowgram-runtime-go/interface/runtime"
)

type WorkflowRuntimeReporter struct {
	IoCenter       runtimeType.IIOCenter
	SnapshotCenter runtimeType.ISnapshotCenter
	StatusCenter   runtimeType.IStatusCenter
	MessageCenter  runtimeType.IMessageCenter
}

func NewWorkflowRuntimeReporter(
	ioCenter runtimeType.IIOCenter,
	snapshotCenter runtimeType.ISnapshotCenter,
	statusCenter runtimeType.IStatusCenter,
	messageCenter runtimeType.IMessageCenter,
) *WorkflowRuntimeReporter {
	return &WorkflowRuntimeReporter{
		IoCenter:       ioCenter,
		SnapshotCenter: snapshotCenter,
		StatusCenter:   statusCenter,
		MessageCenter:  messageCenter,
	}
}

func (r *WorkflowRuntimeReporter) Init() {}

func (r *WorkflowRuntimeReporter) Dispose() {}

// GetMessageCenter returns the message center
func (r *WorkflowRuntimeReporter) GetMessageCenter() runtimeType.IMessageCenter {
	return r.MessageCenter
}

// GetSnapshotCenter returns the snapshot center
func (r *WorkflowRuntimeReporter) GetSnapshotCenter() runtimeType.ISnapshotCenter {
	return r.SnapshotCenter
}

// GetStatusCenter returns the status center
func (r *WorkflowRuntimeReporter) GetStatusCenter() runtimeType.IStatusCenter {
	return r.StatusCenter
}

func (r *WorkflowRuntimeReporter) Export() runtimeType.IReport {
	reportData := CreateReportParams{
		Inputs:         r.IoCenter.GetInputs(),
		Outputs:        r.IoCenter.GetOutputs(),
		WorkflowStatus: r.StatusCenter.GetWorkflow().Export(),
		Reports:        r.nodeReports(),
		Messages:       r.MessageCenter.Export(),
	}

	report := CreateReport(reportData)
	return report
}

func (r *WorkflowRuntimeReporter) nodeReports() runtimeType.WorkflowReports {
	reports := runtimeType.WorkflowReports{}
	statuses := r.StatusCenter.ExportNodeStatus()
	snapshots := r.SnapshotCenter.Export()

	for nodeID, status := range statuses {
		nodeSnapshots, exists := snapshots[nodeID]
		if !exists {
			nodeSnapshots = []runtimeType.Snapshot{}
		}

		nodeReport := runtimeType.NodeReport{
			ID:         nodeID,
			Snapshots:  nodeSnapshots,
			Status:     status.Status,
			Terminated: status.Terminated,
			StartTime:  status.StartTime,
			EndTime:    status.EndTime,
			TimeCost:   status.TimeCost,
		}

		reports[nodeID] = nodeReport
	}

	return reports
}
