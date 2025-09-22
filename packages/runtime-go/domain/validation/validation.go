/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package validation

import (
	runtimeType "flowgram-runtime-go/interface/runtime"
)

type WorkflowRuntimeValidation struct{}

// NewWorkflowRuntimeValidation creates a new WorkflowRuntimeValidation instance
func NewWorkflowRuntimeValidation() *WorkflowRuntimeValidation {
	return &WorkflowRuntimeValidation{}
}

func (v *WorkflowRuntimeValidation) Invoke(params runtimeType.InvokeParams) runtimeType.ValidationResult {
	// TODO

	return runtimeType.ValidationResult{
		Valid: true,
	}
}
