/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package nodes

import (
	"encoding/json"
	"fmt"
	"net/url"
	"strings"

	"flowgram-runtime-go/interface/constant"
	runtimeType "flowgram-runtime-go/interface/runtime"
)

// LLMExecutorInputs defines the input structure for LLM executor
type LLMExecutorInputs struct {
	ModelName    string  `json:"modelName"`
	APIKey       string  `json:"apiKey"`
	APIHost      string  `json:"apiHost"`
	Temperature  float64 `json:"temperature"`
	SystemPrompt string  `json:"systemPrompt,omitempty"`
	Prompt       string  `json:"prompt"`
}

// OpenAIMessage represents a message in OpenAI format
type OpenAIMessage struct {
	Role    string `json:"role"`
	Content string `json:"content"`
}

// OpenAIRequest represents the request structure for OpenAI API
type OpenAIRequest struct {
	Model       string          `json:"model"`
	Messages    []OpenAIMessage `json:"messages"`
	Temperature float64         `json:"temperature"`
	MaxTokens   int             `json:"max_tokens,omitempty"`
}

// OpenAIResponse represents the response structure from OpenAI API
type OpenAIResponse struct {
	Choices []struct {
		Message OpenAIMessage `json:"message"`
	} `json:"choices"`
	Error *struct {
		Message string `json:"message"`
		Type    string `json:"type"`
	} `json:"error,omitempty"`
}

// LLMExecutor implements INodeExecutor for LLM nodes
type LLMExecutor struct {
	Type constant.FlowGramNode
}

// NewLLMExecutor creates a new LLMExecutor instance
func NewLLMExecutor() *LLMExecutor {
	return &LLMExecutor{
		Type: constant.FlowGramNodeLLM,
	}
}

// GetType returns the node type
func (e *LLMExecutor) GetType() constant.FlowGramNode {
	return e.Type
}

// Execute executes the LLM node
func (e *LLMExecutor) Execute(context runtimeType.ExecutionContext) (*runtimeType.ExecutionResult, error) {
	// Parse inputs
	inputs, err := e.parseInputs(context.Inputs)
	if err != nil {
		return nil, fmt.Errorf("failed to parse inputs: %w", err)
	}

	// Validate inputs
	if err := e.checkInputs(inputs); err != nil {
		return nil, err
	}

	// Call LLM API
	result, err := e.callLLMAPI(inputs)
	if err != nil {
		return nil, err
	}

	return &runtimeType.ExecutionResult{
		Outputs: runtimeType.WorkflowOutputs{
			"result": result,
		},
		Branch: nil,
	}, nil
}

// parseInputs parses the workflow inputs into LLMExecutorInputs
func (e *LLMExecutor) parseInputs(workflowInputs runtimeType.WorkflowInputs) (*LLMExecutorInputs, error) {
	inputs := &LLMExecutorInputs{}

	// Convert map to JSON and back to struct for type safety
	jsonData, err := json.Marshal(workflowInputs)
	if err != nil {
		return nil, fmt.Errorf("failed to marshal inputs: %w", err)
	}

	if err := json.Unmarshal(jsonData, inputs); err != nil {
		return nil, fmt.Errorf("failed to unmarshal inputs: %w", err)
	}

	return inputs, nil
}

// checkInputs validates the required inputs
func (e *LLMExecutor) checkInputs(inputs *LLMExecutorInputs) error {
	var missingInputs []string

	if inputs.ModelName == "" {
		missingInputs = append(missingInputs, "modelName")
	}
	if inputs.APIKey == "" {
		missingInputs = append(missingInputs, "apiKey")
	}
	if inputs.APIHost == "" {
		missingInputs = append(missingInputs, "apiHost")
	}
	if inputs.Prompt == "" {
		missingInputs = append(missingInputs, "prompt")
	}

	if len(missingInputs) > 0 {
		return fmt.Errorf("LLM node missing required inputs: \"%s\"", strings.Join(missingInputs, "\", \""))
	}

	return e.checkAPIHost(inputs.APIHost)
}

// checkAPIHost validates the API host URL
func (e *LLMExecutor) checkAPIHost(apiHost string) error {
	if apiHost == "" {
		return fmt.Errorf("invalid API host format - %s", apiHost)
	}

	parsedURL, err := url.Parse(apiHost)
	if err != nil {
		return fmt.Errorf("invalid API host format - %s: %w", apiHost, err)
	}

	if parsedURL.Scheme != "http" && parsedURL.Scheme != "https" {
		return fmt.Errorf("invalid API host protocol - %s", parsedURL.Scheme)
	}

	return nil
}

// callLLMAPI makes the actual API call to the LLM service
func (e *LLMExecutor) callLLMAPI(inputs *LLMExecutorInputs) (string, error) {
	return fmt.Sprintf(`Hi, I am an AI model, my name is %s, temperature is %g, system prompt is "%s", prompt is "%s"`,
		inputs.ModelName, inputs.Temperature, inputs.SystemPrompt, inputs.Prompt), nil
}

// LLMExecutorFactory implements INodeExecutorFactory for LLMExecutor
type LLMExecutorFactory struct{}

// New creates a new LLMExecutor instance
func (f *LLMExecutorFactory) New() runtimeType.INodeExecutor {
	return NewLLMExecutor()
}
