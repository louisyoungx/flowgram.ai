/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package nodeType

import (
	"flowgram-runtime-go/interface/constant"
	"flowgram-runtime-go/interface/schema"
)

// ContinueNodeData defines the data structure for continue nodes
type ContinueNodeData struct{}

// ContinueNodeSchema represents the schema for continue nodes
type ContinueNodeSchema struct {
	schema.WorkflowNodeSchema
	Type constant.FlowGramNode `json:"type"`
	Data ContinueNodeData      `json:"data"`
}
