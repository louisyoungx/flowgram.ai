/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package nodes

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"net/url"
	"strings"
	"time"

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
	// Prepare messages
	var messages []OpenAIMessage
	
	if inputs.SystemPrompt != "" {
		messages = append(messages, OpenAIMessage{
			Role:    "system",
			Content: inputs.SystemPrompt,
		})
	}
	
	messages = append(messages, OpenAIMessage{
		Role:    "user",
		Content: inputs.Prompt,
	})

	// Prepare request
	request := OpenAIRequest{
		Model:       inputs.ModelName,
		Messages:    messages,
		Temperature: inputs.Temperature,
	}

	// Marshal request to JSON
	requestBody, err := json.Marshal(request)
	if err != nil {
		return "", fmt.Errorf("failed to marshal request: %w", err)
	}

	// Create HTTP request
	apiURL := strings.TrimSuffix(inputs.APIHost, "/") + "/v1/chat/completions"
	httpReq, err := http.NewRequest("POST", apiURL, bytes.NewBuffer(requestBody))
	if err != nil {
		return "", fmt.Errorf("failed to create HTTP request: %w", err)
	}

	// Set headers
	httpReq.Header.Set("Content-Type", "application/json")
	httpReq.Header.Set("Authorization", "Bearer "+inputs.APIKey)

	// Create HTTP client with timeout and retry logic
	client := &http.Client{
		Timeout: 60 * time.Second,
	}

	var resp *http.Response
	var lastErr error
	
	// Retry up to 3 times
	for i := 0; i < 3; i++ {
		resp, lastErr = client.Do(httpReq)
		if lastErr == nil {
			break
		}
		
		if i < 2 { // Don't sleep after the last attempt
			time.Sleep(time.Duration(i+1) * time.Second)
		}
	}

	if lastErr != nil {
		if strings.Contains(lastErr.Error(), "connection") {
			return "", fmt.Errorf("network error: unreachable api \"%s\"", inputs.APIHost)
		}
		return "", fmt.Errorf("HTTP request failed: %w", lastErr)
	}
	defer resp.Body.Close()

	// Read response body
	responseBody, err := io.ReadAll(resp.Body)
	if err != nil {
		return "", fmt.Errorf("failed to read response body: %w", err)
	}

	// Parse response
	var apiResponse OpenAIResponse
	if err := json.Unmarshal(responseBody, &apiResponse); err != nil {
		return "", fmt.Errorf("failed to parse API response: %w", err)
	}

	// Check for API errors
	if apiResponse.Error != nil {
		return "", fmt.Errorf("API error: %s", apiResponse.Error.Message)
	}

	// Check if we have choices
	if len(apiResponse.Choices) == 0 {
		return "", fmt.Errorf("no response choices returned from API")
	}

	return apiResponse.Choices[0].Message.Content, nil
}

// LLMExecutorFactory implements INodeExecutorFactory for LLMExecutor
type LLMExecutorFactory struct{}

// New creates a new LLMExecutor instance
func (f *LLMExecutorFactory) New() runtimeType.INodeExecutor {
	return NewLLMExecutor()
}