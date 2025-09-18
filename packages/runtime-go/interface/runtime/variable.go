/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package runtimeType

import "flowgram-runtime-go/interface/schema"

type VariableTypeInfo struct {
	Type      schema.WorkflowVariableType  `json:"type"`
	ItemsType *schema.WorkflowVariableType `json:"itemsType,omitempty"`
}

type IVariable struct {
	VariableTypeInfo
	ID     string      `json:"id"`
	NodeID string      `json:"nodeID"`
	Key    string      `json:"key"`
	Value  interface{} `json:"value"`
}

type IVariableParseResult struct {
	VariableTypeInfo
	Value interface{} `json:"value"`
}

type SetVariableParams struct {
	VariableTypeInfo
	NodeID string
	Key    string
	Value  interface{}
}

type SetValueParams struct {
	NodeID       string
	VariableKey  string
	VariablePath []string
	Value        interface{}
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
