/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package report

import (
	"flowgram-runtime-go/infrastructure/utils"
	runtimeType "flowgram-runtime-go/interface/runtime"
)

type CreateReportParams struct {
	Inputs         runtimeType.WorkflowInputs   `json:"inputs"`
	Outputs        runtimeType.WorkflowOutputs  `json:"outputs"`
	WorkflowStatus runtimeType.StatusData       `json:"workflowStatus"`
	Reports        runtimeType.WorkflowReports  `json:"reports"`
	Messages       runtimeType.WorkflowMessages `json:"messages"`
}

func CreateReport(params CreateReportParams) runtimeType.IReport {
	report := runtimeType.IReport{
		ID:             utils.UUID(),
		Inputs:         params.Inputs,
		Outputs:        params.Outputs,
		WorkflowStatus: params.WorkflowStatus,
		Reports:        params.Reports,
		Messages:       params.Messages,
	}

	return report
}
