/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package nodeType

import (
	"flowgram-runtime-go/interface/constant"
	"flowgram-runtime-go/interface/schema"
)

// HTTPAPIConfig defines the API configuration
type HTTPAPIConfig struct {
	Method HTTPMethod                `json:"method"`
	URL    schema.IFlowTemplateValue `json:"url"`
}

// HTTPTimeoutConfig defines the timeout configuration
type HTTPTimeoutConfig struct {
	RetryTimes int `json:"retryTimes"`
	Timeout    int `json:"timeout"`
}

// HTTPBodyConfig defines the body configuration
type HTTPBodyConfig struct {
	BodyType                 HTTPBodyType                 `json:"bodyType"`
	JSON                     *schema.IFlowTemplateValue   `json:"json,omitempty"`
	FormData                 *schema.IJsonSchema          `json:"formData,omitempty"`
	FormDataValues           map[string]schema.IFlowValue `json:"formDataValues,omitempty"`
	RawText                  *schema.IFlowTemplateValue   `json:"rawText,omitempty"`
	Binary                   *schema.IFlowTemplateValue   `json:"binary,omitempty"`
	XWwwFormUrlencoded       *schema.IJsonSchema          `json:"xWwwFormUrlencoded,omitempty"`
	XWwwFormUrlencodedValues map[string]schema.IFlowValue `json:"xWwwFormUrlencodedValues,omitempty"`
}

// HTTPNodeData defines the data structure for HTTP nodes
type HTTPNodeData struct {
	Title         string                       `json:"title"`
	Outputs       schema.IJsonSchema           `json:"outputs"`
	API           HTTPAPIConfig                `json:"api"`
	Headers       schema.IJsonSchema           `json:"headers"`
	HeadersValues map[string]schema.IFlowValue `json:"headersValues"`
	Params        schema.IJsonSchema           `json:"params"`
	ParamsValues  map[string]schema.IFlowValue `json:"paramsValues"`
	Body          HTTPBodyConfig               `json:"body"`
	Timeout       HTTPTimeoutConfig            `json:"timeout"`
}

// HTTPNodeSchema represents the schema for HTTP nodes
type HTTPNodeSchema struct {
	schema.WorkflowNodeSchema
	Type constant.FlowGramNode `json:"type"`
	Data HTTPNodeData          `json:"data"`
}

// HTTPMethod defines the type of HTTP methods
type HTTPMethod string

const (
	Get    HTTPMethod = "GET"
	Post   HTTPMethod = "POST"
	Put    HTTPMethod = "PUT"
	Delete HTTPMethod = "DELETE"
	Patch  HTTPMethod = "PATCH"
	Head   HTTPMethod = "HEAD"
)

// HTTPBodyType defines the type of HTTP request body
type HTTPBodyType string

const (
	None               HTTPBodyType = "none"
	FormData           HTTPBodyType = "form-data"
	XWwwFormUrlencoded HTTPBodyType = "x-www-form-urlencoded"
	RawText            HTTPBodyType = "raw-text"
	JSON               HTTPBodyType = "JSON"
	Binary             HTTPBodyType = "binary"
)
