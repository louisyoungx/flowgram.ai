/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package utils

import (
	"flowgram-runtime-go/interface/schema"
	"regexp"
	"time"
)

// GetWorkflowType determines the WorkflowVariableType of a given value
func GetWorkflowType(value interface{}) *schema.WorkflowVariableType {
	// Handle null and undefined cases
	if value == nil {
		nullType := schema.WorkflowVariableTypeNull
		return &nullType
	}

	// Handle basic types
	switch v := value.(type) {
	case string:
		// Check if string is a valid ISO 8601 datetime format
		iso8601Regex := regexp.MustCompile(`^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z?$`)
		if iso8601Regex.MatchString(v) {
			date, err := time.Parse(time.RFC3339, v)
			// Validate that the date is actually valid
			if err == nil && !date.IsZero() {
				dateTimeType := schema.WorkflowVariableTypeDateTime
				return &dateTimeType
			}
		}
		stringType := schema.WorkflowVariableTypeString
		return &stringType

	case bool:
		boolType := schema.WorkflowVariableTypeBoolean
		return &boolType

	case int, int8, int16, int32, int64:
		intType := schema.WorkflowVariableTypeInteger
		return &intType

	case float32, float64:
		// Check if the float is actually an integer
		switch vf := v.(type) {
		case float32:
			if float32(int32(vf)) == vf {
				intType := schema.WorkflowVariableTypeInteger
				return &intType
			}
		case float64:
			if float64(int64(vf)) == vf {
				intType := schema.WorkflowVariableTypeInteger
				return &intType
			}
		}
		numType := schema.WorkflowVariableTypeNumber
		return &numType

	case []interface{}:
		arrayType := schema.WorkflowVariableTypeArray
		return &arrayType

	default:
		// Handle objects
		if _, ok := value.(map[string]interface{}); ok {
			objType := schema.WorkflowVariableTypeObject
			return &objType
		}
		return nil
	}
}

// IsMatchWorkflowType checks if a value matches the specified WorkflowVariableType
func IsMatchWorkflowType(value interface{}, typeToMatch schema.WorkflowVariableType) bool {
	workflowType := GetWorkflowType(value)
	if workflowType == nil {
		return false
	}
	return *workflowType == typeToMatch
}

// IsTypeEqual checks if two WorkflowVariableTypes are equivalent
func IsTypeEqual(typeA, typeB schema.WorkflowVariableType) bool {
	// Handle Number and Integer equivalence
	if (typeA == schema.WorkflowVariableTypeNumber && typeB == schema.WorkflowVariableTypeInteger) ||
		(typeA == schema.WorkflowVariableTypeInteger && typeB == schema.WorkflowVariableTypeNumber) {
		return true
	}
	return typeA == typeB
}

// GetArrayItemsType ensures all items in an array have the same type and returns that type
func GetArrayItemsType(types []schema.WorkflowVariableType) schema.WorkflowVariableType {
	expectedType := types[0]
	for _, t := range types {
		if t != expectedType {
			panic("Array items type must be same, expect " + expectedType + ", but got " + t)
		}
	}
	return expectedType
}
