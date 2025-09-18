/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package schema

// WorkflowPortType defines the type of workflow port
type WorkflowPortType string

// WorkflowPortType enum values
const (
	WorkflowPortTypeInput  WorkflowPortType = "input"
	WorkflowPortTypeOutput WorkflowPortType = "output"
)

// WorkflowVariableType defines the type of workflow variable
type WorkflowVariableType string

// WorkflowVariableType enum values
const (
	WorkflowVariableTypeString   WorkflowVariableType = "string"
	WorkflowVariableTypeInteger  WorkflowVariableType = "integer"
	WorkflowVariableTypeNumber   WorkflowVariableType = "number"
	WorkflowVariableTypeBoolean  WorkflowVariableType = "boolean"
	WorkflowVariableTypeObject   WorkflowVariableType = "object"
	WorkflowVariableTypeArray    WorkflowVariableType = "array"
	WorkflowVariableTypeMap      WorkflowVariableType = "map"
	WorkflowVariableTypeDateTime WorkflowVariableType = "date-time"
	WorkflowVariableTypeNull     WorkflowVariableType = "null"
)