/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package nodeType

import (
	"flowgram-runtime-go/interface/constant"
	"flowgram-runtime-go/interface/schema"
)

// ConditionValue defines the structure for condition comparison
type ConditionValue struct {
	Left     schema.IFlowRefValue `json:"left"`
	Operator ConditionOperator    `json:"operator"`
	Right    schema.IFlowValue    `json:"right"`
}

// ConditionItem defines a single condition item
type ConditionItem struct {
	Key   string         `json:"key"`
	Value ConditionValue `json:"value"`
}

// ConditionNodeData defines the data structure for condition nodes
type ConditionNodeData struct {
	Title      string          `json:"title"`
	Conditions []ConditionItem `json:"conditions"`
}

// ConditionNodeSchema represents the schema for condition nodes
type ConditionNodeSchema struct {
	schema.WorkflowNodeSchema
	Type constant.FlowGramNode `json:"type"`
	Data ConditionNodeData     `json:"data"`
}

// ConditionOperator defines the type of condition operators
type ConditionOperator string

const (
	// EQ Equal
	EQ ConditionOperator = "eq"
	// NEQ Not Equal
	NEQ ConditionOperator = "neq"
	// GT Greater Than
	GT ConditionOperator = "gt"
	// GTE Greater Than or Equal
	GTE ConditionOperator = "gte"
	// LT Less Than
	LT ConditionOperator = "lt"
	// LTE Less Than or Equal
	LTE ConditionOperator = "lte"
	// IN In
	IN ConditionOperator = "in"
	// NIN Not In
	NIN ConditionOperator = "nin"
	// CONTAINS Contains
	CONTAINS ConditionOperator = "contains"
	// NOT_CONTAINS Not Contains
	NOT_CONTAINS ConditionOperator = "not_contains"
	// IS_EMPTY Is Empty
	IS_EMPTY ConditionOperator = "is_empty"
	// IS_NOT_EMPTY Is Not Empty
	IS_NOT_EMPTY ConditionOperator = "is_not_empty"
	// IS_TRUE Is True
	IS_TRUE ConditionOperator = "is_true"
	// IS_FALSE Is False
	IS_FALSE ConditionOperator = "is_false"
)
