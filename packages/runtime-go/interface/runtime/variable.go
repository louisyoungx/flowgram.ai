/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package runtimeType

import "flowgram-runtime-go/interface/schema"

type IVariable struct {
	ID        string                       `json:"id"`
	NodeID    string                       `json:"nodeID"`
	Key       string                       `json:"key"`
	Value     any                          `json:"value"`
	Type      schema.WorkflowVariableType  `json:"type"`
	ItemsType *schema.WorkflowVariableType `json:"itemsType,omitempty"`
}

type IVariableParseResult struct {
	Value     any                          `json:"value"`
	Type      schema.WorkflowVariableType  `json:"type"`
	ItemsType *schema.WorkflowVariableType `json:"itemsType,omitempty"`
}

type SetVariableParams struct {
	NodeID    string
	Key       string
	Value     any
	Type      schema.WorkflowVariableType  `json:"type"`
	ItemsType *schema.WorkflowVariableType `json:"itemsType,omitempty"`
}

type SetValueParams struct {
	NodeID       string
	VariableKey  string
	VariablePath []string
	Value        any
}

type GetValueParams struct {
	NodeID       string
	VariableKey  string
	VariablePath []string
}

type IVariableStore interface {
	GetID() string
	GetStore() map[string]map[string]IVariable
	SetParent(parent IVariableStore)
	SetVariable(params SetVariableParams)
	SetValue(params SetValueParams)
	GetValue(params GetValueParams) *IVariableParseResult
	Init()
	Dispose()
}
