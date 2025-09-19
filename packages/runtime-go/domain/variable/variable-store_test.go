/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package variable

import (
	"testing"

	"github.com/stretchr/testify/assert"
	runtimeType "flowgram-runtime-go/interface/runtime"
	"flowgram-runtime-go/interface/schema"
)

func TestWorkflowRuntimeVariableStore(t *testing.T) {
	var variableStore runtimeType.IVariableStore

	// Setup before each test
	setup := func() {
		variableStore = NewWorkflowRuntimeVariableStore()
		variableStore.Init()
	}

	t.Run("should create a store with unique id", func(t *testing.T) {
		store1 := NewWorkflowRuntimeVariableStore()
		store2 := NewWorkflowRuntimeVariableStore()
		
		assert.NotEmpty(t, store1.GetID())
		assert.NotEmpty(t, store2.GetID())
		assert.NotEqual(t, store1.GetID(), store2.GetID())
	})

	t.Run("SetVariable", func(t *testing.T) {
		t.Run("should set variable", func(t *testing.T) {
			setup()
			value := map[string]any{"foo": "bar"}
			
			variableStore.SetVariable(runtimeType.SetVariableParams{
				NodeID: "node1",
				Key:    "var1",
				Value:  value,
				Type:   schema.WorkflowVariableTypeObject,
			})

			store := variableStore.GetStore()
			nodeStore, exists := store["node1"]
			assert.True(t, exists)
			
			variable, exists := nodeStore["var1"]
			assert.True(t, exists)
			assert.Equal(t, value, variable.Value)
		})

		t.Run("should update existing variable", func(t *testing.T) {
			setup()
			
			variableStore.SetVariable(runtimeType.SetVariableParams{
				NodeID: "node1",
				Key:    "var1",
				Value:  map[string]any{"foo": "bar"},
				Type:   schema.WorkflowVariableTypeObject,
			})

			variableStore.SetVariable(runtimeType.SetVariableParams{
				NodeID: "node1",
				Key:    "var1",
				Value:  map[string]any{"baz": "qux"},
				Type:   schema.WorkflowVariableTypeObject,
			})

			store := variableStore.GetStore()
			nodeStore := store["node1"]
			variable := nodeStore["var1"]
			assert.Equal(t, map[string]any{"baz": "qux"}, variable.Value)
		})
	})

	t.Run("SetValue", func(t *testing.T) {
		t.Run("should set value without path", func(t *testing.T) {
			setup()
			value := map[string]any{"foo": "bar"}
			
			variableStore.SetValue(runtimeType.SetValueParams{
				NodeID:      "node1",
				VariableKey: "var1",
				Value:       value,
			})

			// Use GetValue to verify the value was set correctly
			result := variableStore.GetValue(runtimeType.GetValueParams{
				NodeID:      "node1",
				VariableKey: "var1",
			})
			assert.NotNil(t, result)
			assert.Equal(t, value, result.Value)
		})

		t.Run("should set value with path", func(t *testing.T) {
			setup()
			
			variableStore.SetValue(runtimeType.SetValueParams{
				NodeID:       "node1",
				VariableKey:  "var1",
				VariablePath: []string{"foo", "bar"},
				Value:        "baz",
			})

			store := variableStore.GetStore()
			nodeStore := store["node1"]
			variable := nodeStore["var1"]
			expected := map[string]any{
				"foo": map[string]any{"bar": "baz"},
			}
			assert.Equal(t, expected, variable.Value)
		})

		t.Run("should update existing value", func(t *testing.T) {
			setup()
			
			variableStore.SetValue(runtimeType.SetValueParams{
				NodeID:      "node1",
				VariableKey: "var1",
				Value:       map[string]any{"foo": "bar"},
			})

			variableStore.SetValue(runtimeType.SetValueParams{
				NodeID:      "node1",
				VariableKey: "var1",
				Value:       map[string]any{"baz": "qux"},
			})

			// Use GetValue to verify the value was updated correctly
			result := variableStore.GetValue(runtimeType.GetValueParams{
				NodeID:      "node1",
				VariableKey: "var1",
			})
			assert.NotNil(t, result)
			assert.Equal(t, map[string]any{"baz": "qux"}, result.Value)
		})
	})

	t.Run("GetValue", func(t *testing.T) {
		setup := func() {
			variableStore = NewWorkflowRuntimeVariableStore()
			variableStore.Init()
			
			variableStore.SetValue(runtimeType.SetValueParams{
				NodeID:      "node1",
				VariableKey: "var1",
				Value:       map[string]any{"foo": map[string]any{"bar": "baz"}},
			})
		}

		t.Run("should get value without path", func(t *testing.T) {
			setup()
			
			result := variableStore.GetValue(runtimeType.GetValueParams{
				NodeID:      "node1",
				VariableKey: "var1",
			})

			assert.NotNil(t, result)
			assert.Equal(t, map[string]any{"foo": map[string]any{"bar": "baz"}}, result.Value)
		})

		t.Run("should get value with path", func(t *testing.T) {
			setup()
			
			result := variableStore.GetValue(runtimeType.GetValueParams{
				NodeID:       "node1",
				VariableKey:  "var1",
				VariablePath: []string{"foo", "bar"},
			})

			assert.NotNil(t, result)
			assert.Equal(t, "baz", result.Value)
		})

		t.Run("should get value with empty path", func(t *testing.T) {
			setup()
			
			result := variableStore.GetValue(runtimeType.GetValueParams{
				NodeID:       "node1",
				VariableKey:  "var1",
				VariablePath: []string{},
			})

			assert.NotNil(t, result)
			assert.Equal(t, map[string]any{"foo": map[string]any{"bar": "baz"}}, result.Value)
		})

		t.Run("should get value with nil path", func(t *testing.T) {
			setup()
			
			result := variableStore.GetValue(runtimeType.GetValueParams{
				NodeID:      "node1",
				VariableKey: "var1",
			})

			assert.NotNil(t, result)
			assert.Equal(t, map[string]any{"foo": map[string]any{"bar": "baz"}}, result.Value)
		})

		t.Run("should return nil for non-existent node", func(t *testing.T) {
			setup()
			
			result := variableStore.GetValue(runtimeType.GetValueParams{
				NodeID:      "non-existent",
				VariableKey: "var1",
			})

			assert.Nil(t, result)
		})

		t.Run("should return nil for non-existent variable", func(t *testing.T) {
			setup()
			
			result := variableStore.GetValue(runtimeType.GetValueParams{
				NodeID:      "node1",
				VariableKey: "non-existent",
			})

			assert.Nil(t, result)
		})

		t.Run("should return nil for non-existent path", func(t *testing.T) {
			setup()
			
			result := variableStore.GetValue(runtimeType.GetValueParams{
				NodeID:       "node1",
				VariableKey:  "var1",
				VariablePath: []string{"non", "existent"},
			})

			// The function returns a result with null type for non-existent paths
			assert.NotNil(t, result)
			assert.Nil(t, result.Value)
			assert.Equal(t, schema.WorkflowVariableTypeNull, result.Type)
		})

		t.Run("should get number value", func(t *testing.T) {
			setup()
			
			variableStore.SetVariable(runtimeType.SetVariableParams{
				NodeID: "start_0",
				Key:    "llm_settings",
				Value:  map[string]any{"temperature": 0.5},
				Type:   schema.WorkflowVariableTypeObject,
			})

			result := variableStore.GetValue(runtimeType.GetValueParams{
				NodeID:       "start_0",
				VariableKey:  "llm_settings",
				VariablePath: []string{"temperature"},
			})

			assert.NotNil(t, result)
			assert.Equal(t, 0.5, result.Value)
		})

		t.Run("should return 0", func(t *testing.T) {
			setup()
			
			variableStore.SetValue(runtimeType.SetValueParams{
				NodeID:      "node1",
				VariableKey: "var1",
				Value:       0,
			})
			
			result := variableStore.GetValue(runtimeType.GetValueParams{
				NodeID:      "node1",
				VariableKey: "var1",
			})
			
			assert.NotNil(t, result)
			assert.Equal(t, 0, result.Value)
		})
	})
}