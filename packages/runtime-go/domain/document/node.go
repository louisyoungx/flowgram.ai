/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package document

import (
	"log"
	"flowgram-runtime-go/infrastructure/utils"
	"flowgram-runtime-go/interface/constant"
	runtimeType "flowgram-runtime-go/interface/runtime"
	"flowgram-runtime-go/interface/schema"
)

// WorkflowRuntimeNode represents a node in the workflow runtime
type WorkflowRuntimeNode[T any] struct {
	// Basic properties
	id       string
	type_    constant.FlowGramNode
	name     string
	position schema.PositionSchema
	declare  runtimeType.NodeDeclare
	data     T

	// Node relationships
	parent   runtimeType.INode[any]
	children []runtimeType.INode[any]

	// Port and edge management
	ports       []runtimeType.IPort
	inputEdges  []runtimeType.IEdge
	outputEdges []runtimeType.IEdge

	// Node connections
	prev []runtimeType.INode[any]
	next []runtimeType.INode[any]
}

// NewWorkflowRuntimeNode creates a new WorkflowRuntimeNode instance
func NewWorkflowRuntimeNode[T any](params runtimeType.CreateNodeParams) *WorkflowRuntimeNode[T] {
	log.Printf("@DEBUG NewWorkflowRuntimeNode creating node %s with params: %+v", params.ID, params)
	log.Printf("@DEBUG NewWorkflowRuntimeNode Variable param: %+v", params.Variable)
	
	var declare runtimeType.NodeDeclare
	if params.Variable != nil {
		declare = *params.Variable
		log.Printf("@DEBUG NewWorkflowRuntimeNode using provided Variable: %+v", declare)
	} else {
		declare = runtimeType.NodeDeclare{}
		log.Printf("@DEBUG NewWorkflowRuntimeNode using empty NodeDeclare")
	}
	
	log.Printf("@DEBUG NewWorkflowRuntimeNode final declare: %+v", declare)

	var data T
	if params.Data != nil {
		data = params.Data.(T)
	}

	return &WorkflowRuntimeNode[T]{
		id:          params.ID,
		type_:       params.Type,
		name:        params.Name,
		position:    params.Position,
		declare:     declare,
		data:        data,
		parent:      nil,
		children:    make([]runtimeType.INode[any], 0),
		ports:       make([]runtimeType.IPort, 0),
		inputEdges:  make([]runtimeType.IEdge, 0),
		outputEdges: make([]runtimeType.IEdge, 0),
		prev:        make([]runtimeType.INode[any], 0),
		next:        make([]runtimeType.INode[any], 0),
	}
}

// GetPorts returns the input and output ports of the node
func (n *WorkflowRuntimeNode[T]) GetPorts() struct {
	Inputs  []runtimeType.IPort
	Outputs []runtimeType.IPort
} {
	inputs := make([]runtimeType.IPort, 0)
	outputs := make([]runtimeType.IPort, 0)

	for _, port := range n.ports {
		if port.GetType() == schema.WorkflowPortTypeInput {
			inputs = append(inputs, port)
		} else if port.GetType() == schema.WorkflowPortTypeOutput {
			outputs = append(outputs, port)
		}
	}

	return struct {
		Inputs  []runtimeType.IPort
		Outputs []runtimeType.IPort
	}{
		Inputs:  inputs,
		Outputs: outputs,
	}
}

// GetEdges returns the input and output edges of the node
func (n *WorkflowRuntimeNode[T]) GetEdges() struct {
	Inputs  []runtimeType.IEdge
	Outputs []runtimeType.IEdge
} {
	return struct {
		Inputs  []runtimeType.IEdge
		Outputs []runtimeType.IEdge
	}{
		Inputs:  n.inputEdges,
		Outputs: n.outputEdges,
	}
}

// GetParent returns the parent node
func (n *WorkflowRuntimeNode[T]) GetParent() runtimeType.INode[any] {
	return n.parent
}

// SetParent sets the parent node
func (n *WorkflowRuntimeNode[T]) SetParent(parent runtimeType.INode[any]) {
	n.parent = parent
}

// GetChildren returns the child nodes
func (n *WorkflowRuntimeNode[T]) GetChildren() []runtimeType.INode[any] {
	result := make([]runtimeType.INode[any], len(n.children))
	for i, child := range n.children {
		result[i] = child
	}
	return result
}

// AddChild adds a child node
func (n *WorkflowRuntimeNode[T]) AddChild(child runtimeType.INode[any]) {
	n.children = append(n.children, child)
}

// AddPort adds a port to the node
func (n *WorkflowRuntimeNode[T]) AddPort(port runtimeType.IPort) {
	n.ports = append(n.ports, port)
}

// AddInputEdge adds an input edge to the node
func (n *WorkflowRuntimeNode[T]) AddInputEdge(edge runtimeType.IEdge) {
	n.inputEdges = append(n.inputEdges, edge)
	n.prev = append(n.prev, edge.GetFrom())
}

// AddOutputEdge adds an output edge to the node
func (n *WorkflowRuntimeNode[T]) AddOutputEdge(edge runtimeType.IEdge) {
	n.outputEdges = append(n.outputEdges, edge)
	n.next = append(n.next, edge.GetTo())
}

// GetPrev returns the previous nodes
func (n *WorkflowRuntimeNode[T]) GetPrev() []runtimeType.INode[any] {
	return n.prev
}

// GetNext returns the next nodes
func (n *WorkflowRuntimeNode[T]) GetNext() []runtimeType.INode[any] {
	return n.next
}

// IsBranch returns whether the node is a branch node
func (n *WorkflowRuntimeNode[T]) IsBranch() bool {
	return len(n.GetPorts().Outputs) > 1
}

// GetID returns the node ID
func (n *WorkflowRuntimeNode[T]) GetID() string {
	return n.id
}

// GetType returns the node type
func (n *WorkflowRuntimeNode[T]) GetType() constant.FlowGramNode {
	return n.type_
}

// GetName returns the node name
func (n *WorkflowRuntimeNode[T]) GetName() string {
	return n.name
}

// GetPosition returns the node position
func (n *WorkflowRuntimeNode[T]) GetPosition() schema.PositionSchema {
	return n.position
}

// GetDeclare returns the node declare
func (n *WorkflowRuntimeNode[T]) GetDeclare() runtimeType.NodeDeclare {
	return n.declare
}

// GetData returns the node data
func (n *WorkflowRuntimeNode[T]) GetData() any {
	return n.data
}

// GetSuccessors returns all successor nodes
func (n *WorkflowRuntimeNode[T]) GetSuccessors() []runtimeType.INode[any] {
	return utils.TraverseNodes(n, func(node runtimeType.INode[any]) []runtimeType.INode[any] {
		return node.GetNext()
	})
}

// GetPredecessors returns all predecessor nodes
func (n *WorkflowRuntimeNode[T]) GetPredecessors() []runtimeType.INode[any] {
	return utils.TraverseNodes(n, func(node runtimeType.INode[any]) []runtimeType.INode[any] {
		return node.GetPrev()
	})
}
