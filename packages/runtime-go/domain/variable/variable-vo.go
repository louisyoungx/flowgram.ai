/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package variable

import (
	"flowgram-runtime-go/infrastructure/utils"
	runtimeType "flowgram-runtime-go/interface/runtime"
	"flowgram-runtime-go/interface/schema"
)

type CreateVariableParams struct {
	NodeID    string                       `json:"nodeID"`
	Key       string                       `json:"key"`
	Value     any                          `json:"value"`
	Type      schema.WorkflowVariableType  `json:"type"`
	ItemsType *schema.WorkflowVariableType `json:"itemsType,omitempty"`
}

// Create generates a new IVariable with a UUID and the provided parameters
func CreateVariable(params CreateVariableParams) runtimeType.IVariable {
	// Create a new variable with a UUID and merge with provided params
	variable := runtimeType.IVariable{
		ID:        utils.UUID(),
		NodeID:    params.NodeID,
		Key:       params.Key,
		Value:     params.Value,
		Type:      params.Type,
		ItemsType: params.ItemsType,
	}

	return variable
}
