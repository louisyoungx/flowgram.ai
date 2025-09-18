/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package runtimeType

import (
	"flowgram-runtime-go/interface/constant"
	"flowgram-runtime-go/interface/schema"
)

// IDocument defines the interface for workflow documents
type IDocument interface {
	GetID() string
	GetNodes() []INode[any]
	GetEdges() []IEdge
	GetRoot() INode[any]
	GetStart() INode[any]
	GetEnd() INode[any]
	Init(schema schema.WorkflowSchema)
	Dispose()
}

// IEdge defines the interface for workflow edges
type IEdge interface {
	GetID() string
	GetFrom() INode[any]
	GetTo() INode[any]
	GetFromPort() IPort
	GetToPort() IPort
}

// CreateEdgeParams defines parameters for creating an edge
type CreateEdgeParams struct {
	ID   string
	From INode[any]
	To   INode[any]
}

// NodeDeclare defines the declaration structure for a node
type NodeDeclare struct {
	InputsValues map[string]schema.IFlowValue `json:"inputsValues,omitempty"`
	Inputs       schema.IJsonSchema           `json:"inputs,omitempty"`
	Outputs      schema.IJsonSchema           `json:"outputs,omitempty"`
}

// INode defines the interface for workflow nodes
type INode[T any] interface {
	GetID() string                      // id field
	GetType() constant.FlowGramNode     // type field
	GetName() string                    // name field
	GetPosition() schema.PositionSchema // position field
	GetDeclare() NodeDeclare            // declare field
	GetData() T                         // data field
	GetPorts() struct {                 // ports field
		Inputs  []IPort
		Outputs []IPort
	}
	GetEdges() struct { // edges field
		Inputs  []IEdge
		Outputs []IEdge
	}
	GetParent() INode[T]         // parent field
	GetChildren() []INode[T]     // children field
	GetPrev() []INode[T]         // prev field
	GetNext() []INode[T]         // next field
	GetSuccessors() []INode[T]   // successors field
	GetPredecessors() []INode[T] // predecessors field
	IsBranch() bool              // isBranch field
}

// CreateNodeParams defines parameters for creating a node
type CreateNodeParams struct {
	ID       string                `json:"id"`
	Type     constant.FlowGramNode `json:"type"`
	Name     string                `json:"name"`
	Position schema.PositionSchema `json:"position"`
	Variable *NodeDeclare          `json:"variable,omitempty"`
	Data     interface{}           `json:"data,omitempty"`
}

// IPort defines the interface for workflow ports
type IPort interface {
	GetID() string
	GetNode() INode[any]
	GetEdges() []IEdge
	GetType() schema.WorkflowPortType
}

// CreatePortParams defines parameters for creating a port
type CreatePortParams struct {
	ID   string
	Node INode[any]
	Type schema.WorkflowPortType
}
