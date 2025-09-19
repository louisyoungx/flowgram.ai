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

type WorkflowRuntimeVariableStore struct {
	id     string
	parent *WorkflowRuntimeVariableStore
	store  map[string]map[string]runtimeType.IVariable
}

func NewWorkflowRuntimeVariableStore() *WorkflowRuntimeVariableStore {
	return &WorkflowRuntimeVariableStore{
		id: utils.UUID(),
	}
}

func (w *WorkflowRuntimeVariableStore) GetID() string {
	return w.id
}

func (w *WorkflowRuntimeVariableStore) GetStore() map[string]map[string]runtimeType.IVariable {
	return w.store
}

func (w *WorkflowRuntimeVariableStore) Init() {
	w.store = make(map[string]map[string]runtimeType.IVariable)
}

func (w *WorkflowRuntimeVariableStore) Dispose() {
	// Clear the store
	w.store = make(map[string]map[string]runtimeType.IVariable)
}

func (w *WorkflowRuntimeVariableStore) SetParent(parent runtimeType.IVariableStore) {
	w.parent = parent.(*WorkflowRuntimeVariableStore)
}

func (w *WorkflowRuntimeVariableStore) GlobalGet(nodeID string) map[string]runtimeType.IVariable {
	store, exists := w.store[nodeID]
	if !exists && w.parent != nil {
		return w.parent.GlobalGet(nodeID)
	}
	return store
}

func (w *WorkflowRuntimeVariableStore) SetVariable(params runtimeType.SetVariableParams) {
	nodeID := params.NodeID
	key := params.Key

	if _, exists := w.store[nodeID]; !exists {
		// Create node store
		w.store[nodeID] = make(map[string]runtimeType.IVariable)
	}

	nodeStore := w.store[nodeID]

	// Create variable store
	variable := CreateVariable(CreateVariableParams{
		NodeID:    params.NodeID,
		Key:       params.Key,
		Value:     params.Value,
		Type:      params.Type,
		ItemsType: params.ItemsType,
	})

	nodeStore[key] = variable
}

func (w *WorkflowRuntimeVariableStore) SetValue(params runtimeType.SetValueParams) {
	nodeID := params.NodeID
	variableKey := params.VariableKey
	variablePath := params.VariablePath
	value := params.Value

	if _, exists := w.store[nodeID]; !exists {
		// Create node store
		w.store[nodeID] = make(map[string]runtimeType.IVariable)
	}

	nodeStore := w.store[nodeID]

	if _, exists := nodeStore[variableKey]; !exists {
		// Create variable store
		variable := CreateVariable(CreateVariableParams{
			NodeID: nodeID,
			Key:    variableKey,
			Value:  map[string]any{},
			Type:   schema.WorkflowVariableTypeObject,
		})
		nodeStore[variableKey] = variable
	}

	// Get the variable from the store
	variable := nodeStore[variableKey]

	if len(variablePath) == 0 {
		variable.Value = value
		// Update the variable back to the store
		nodeStore[variableKey] = variable
		return
	}

	// Using custom deep set function instead of lo.Set
	setDeepValue(variable.Value, variablePath, value)
	// Update the variable back to the store
	nodeStore[variableKey] = variable
}

func (w *WorkflowRuntimeVariableStore) GetValue(params runtimeType.GetValueParams) *runtimeType.IVariableParseResult {
	nodeID := params.NodeID
	variableKey := params.VariableKey
	variablePath := params.VariablePath

	nodeStore := w.GlobalGet(nodeID)
	if nodeStore == nil {
		return nil
	}

	variable, exists := nodeStore[variableKey]
	if !exists {
		return nil
	}

	if len(variablePath) == 0 {
		return &runtimeType.IVariableParseResult{
			Value:     variable.Value,
			Type:      variable.Type,
			ItemsType: variable.ItemsType,
		}
	}

	// Using custom deep get function instead of lo.Get
	value := getDeepValue(variable.Value, variablePath)
	varType := utils.GetWorkflowType(value)

	if varType == nil {
		return nil
	}

	if *varType == schema.WorkflowVariableTypeArray {
		// Check if value is array
		valueArr, ok := value.([]any)
		if !ok || len(valueArr) == 0 {
			return &runtimeType.IVariableParseResult{
				Value: value,
				Type:  *varType,
			}
		}

		itemsType := utils.GetWorkflowType(valueArr[0])
		if itemsType == nil {
			return nil
		}

		return &runtimeType.IVariableParseResult{
			Value:     value,
			Type:      *varType,
			ItemsType: itemsType,
		}
	}

	return &runtimeType.IVariableParseResult{
		Value: value,
		Type:  *varType,
	}
}

// Helper function to set deep value in nested map/slice structures
func setDeepValue(obj any, path []string, value any) {
	if len(path) == 0 {
		return
	}

	if len(path) == 1 {
		if m, ok := obj.(map[string]any); ok {
			m[path[0]] = value
		}
		return
	}

	key := path[0]
	remainingPath := path[1:]

	if m, ok := obj.(map[string]any); ok {
		if _, exists := m[key]; !exists {
			m[key] = make(map[string]any)
		}
		setDeepValue(m[key], remainingPath, value)
	}
}

// Helper function to get deep value from nested map/slice structures
func getDeepValue(obj any, path []string) any {
	if len(path) == 0 {
		return obj
	}

	key := path[0]
	remainingPath := path[1:]

	if m, ok := obj.(map[string]any); ok {
		if val, exists := m[key]; exists {
			if len(remainingPath) == 0 {
				return val
			}
			return getDeepValue(val, remainingPath)
		}
	}

	return nil
}
