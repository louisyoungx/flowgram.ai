/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package runtimeType

import "flowgram-runtime-go/interface/schema"

type IState interface {
	GetID() string
	GetVariableStore() IVariableStore
	Init(schema *schema.WorkflowSchema)
	Dispose()
	GetNodeInputs(node INode[any]) WorkflowInputs
	SetNodeOutputs(node INode[any], outputs WorkflowOutputs)
	ParseInputs(values map[string]schema.IFlowValue, declare schema.IJsonSchema) WorkflowInputs
	ParseRef(ref schema.IFlowRefValue) *IVariableParseResult
	ParseTemplate(template schema.IFlowTemplateValue) *IVariableParseResult
	ParseFlowValue(flowValue schema.IFlowValue, declareType schema.WorkflowVariableType) *IVariableParseResult
	IsExecutedNode(node INode[any]) bool
	AddExecutedNode(node INode[any])
}
