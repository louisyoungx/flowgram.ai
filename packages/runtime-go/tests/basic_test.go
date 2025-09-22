/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package tests

import (
	"encoding/json"
	"io/ioutil"
	"path/filepath"
	"testing"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"

	"flowgram-runtime-go/domain/container"
	runtimeType "flowgram-runtime-go/interface/runtime"
	"flowgram-runtime-go/interface/schema"
)

// loadBasicSchema loads the basic.json schema file
func loadBasicSchema() (schema.WorkflowSchema, error) {
	schemaPath := filepath.Join("schemas", "basic.json")
	data, err := ioutil.ReadFile(schemaPath)
	if err != nil {
		return schema.WorkflowSchema{}, err
	}

	var workflowSchema schema.WorkflowSchema
	err = json.Unmarshal(data, &workflowSchema)
	if err != nil {
		return schema.WorkflowSchema{}, err
	}

	return workflowSchema, nil
}

func TestWorkflowRuntimeBasicSchema(t *testing.T) {
	t.Run("should execute a workflow with input", func(t *testing.T) {
		// Load schema from JSON file
		basicSchema, err := loadBasicSchema()
		require.NoError(t, err, "Failed to load basic schema")

		// Get container instance
		containerInstance := container.GetInstance()

		// Get engine service
		engine := containerInstance.Get(runtimeType.EngineKey).(runtimeType.IEngine)

		// Prepare inputs
		inputs := map[string]interface{}{
			"model_name": "ai-model",
			"llm_settings": map[string]interface{}{
				"temperature": 0.5,
			},
			"work": map[string]interface{}{
				"role": "Chat",
				"task": "Tell me a story about love",
			},
		}

		// Invoke workflow
		task := engine.Invoke(runtimeType.InvokeParams{
			Schema: basicSchema,
			Inputs: inputs,
		})

		// Get context and processing channel from task
		context := task.GetContext()
		processingChan := task.GetProcessing()

		// Check initial status
		assert.Equal(t, runtimeType.WorkflowStatusProcessing, context.GetStatusCenter().GetWorkflow().GetStatus())

		// Wait for processing to complete
		result := <-processingChan

		// Check final status
		assert.Equal(t, runtimeType.WorkflowStatusSucceeded, context.GetStatusCenter().GetWorkflow().GetStatus())

		// Verify result
		expectedResult := map[string]interface{}{
			"llm_res":  `Hi, I am an AI model, my name is ai-model, temperature is 0.5, system prompt is "You are a helpful AI assistant.", prompt is "<Role>Chat</Role>\n\n<Task>\nTell me a story about love\n</Task>"`,
			"llm_task": "Tell me a story about love",
		}
		assert.Equal(t, expectedResult, result)

		// Verify snapshots
		snapshots := context.GetSnapshotCenter().ExportAll()
		require.Len(t, snapshots, 3, "Expected 3 snapshots")

		// Check start node snapshot
		startSnapshot := snapshots[0]
		assert.Equal(t, "start_0", startSnapshot.NodeID)
		assert.Empty(t, startSnapshot.Inputs)
		expectedStartOutputs := map[string]interface{}{
			"model_name": "ai-model",
			"llm_settings": map[string]interface{}{
				"temperature": 0.5,
			},
			"work": map[string]interface{}{
				"role": "Chat",
				"task": "Tell me a story about love",
			},
		}
		assert.Equal(t, expectedStartOutputs, startSnapshot.Outputs)
		assert.Empty(t, startSnapshot.Data)

		// Check LLM node snapshot
		llmSnapshot := snapshots[1]
		assert.Equal(t, "llm_0", llmSnapshot.NodeID)
		expectedLLMInputs := map[string]interface{}{
			"modelName":    "ai-model",
			"apiKey":       "sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
			"apiHost":      "https://mock-ai-url/api/v3",
			"temperature":  0.5,
			"prompt":       "<Role>Chat</Role>\n\n<Task>\nTell me a story about love\n</Task>",
			"systemPrompt": "You are a helpful AI assistant.",
		}
		assert.Equal(t, expectedLLMInputs, llmSnapshot.Inputs)
		expectedLLMOutputs := map[string]interface{}{
			"result": `Hi, I am an AI model, my name is ai-model, temperature is 0.5, system prompt is "You are a helpful AI assistant.", prompt is "<Role>Chat</Role>\n\n<Task>\nTell me a story about love\n</Task>"`,
		}
		assert.Equal(t, expectedLLMOutputs, llmSnapshot.Outputs)
		assert.Empty(t, llmSnapshot.Data)

		// Check end node snapshot
		endSnapshot := snapshots[2]
		assert.Equal(t, "end_0", endSnapshot.NodeID)
		expectedEndInputs := map[string]interface{}{
			"llm_res":  `Hi, I am an AI model, my name is ai-model, temperature is 0.5, system prompt is "You are a helpful AI assistant.", prompt is "<Role>Chat</Role>\n\n<Task>\nTell me a story about love\n</Task>"`,
			"llm_task": "Tell me a story about love",
		}
		assert.Equal(t, expectedEndInputs, endSnapshot.Inputs)
		assert.Equal(t, expectedEndInputs, endSnapshot.Outputs) // End node outputs same as inputs
		assert.Empty(t, endSnapshot.Data)

		// Verify report
		report := context.GetReporter().Export()
		assert.Equal(t, runtimeType.WorkflowStatusSucceeded, report.WorkflowStatus.Status)
		assert.Equal(t, runtimeType.WorkflowStatusSucceeded, report.Reports["start_0"].Status)
		assert.Equal(t, runtimeType.WorkflowStatusSucceeded, report.Reports["llm_0"].Status)
		assert.Equal(t, runtimeType.WorkflowStatusSucceeded, report.Reports["end_0"].Status)
	})
}
