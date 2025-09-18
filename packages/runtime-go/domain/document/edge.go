package document

import (
	"fmt"

	runtimeType "flowgram-runtime-go/interface/runtime"
	"flowgram-runtime-go/interface/schema"
)

// WorkflowRuntimeEdge implements IEdge interface
type WorkflowRuntimeEdge struct {
	ID       string
	From     runtimeType.INode[any]
	To       runtimeType.INode[any]
	fromPort runtimeType.IPort
	toPort   runtimeType.IPort
}

// GetId returns the edge ID
func (e *WorkflowRuntimeEdge) GetID() string {
	return e.ID
}

// GetFrom returns the source node
func (e *WorkflowRuntimeEdge) GetFrom() runtimeType.INode[any] {
	return e.From
}

// GetTo returns the target node
func (e *WorkflowRuntimeEdge) GetTo() runtimeType.INode[any] {
	return e.To
}

// NewWorkflowRuntimeEdge creates a new WorkflowRuntimeEdge instance
func NewWorkflowRuntimeEdge(params *runtimeType.CreateEdgeParams) *WorkflowRuntimeEdge {
	return &WorkflowRuntimeEdge{
		ID:   params.ID,
		From: params.From.(runtimeType.INode[any]),
		To:   params.To.(runtimeType.INode[any]),
	}
}

// GetFromPort returns the from port
func (e *WorkflowRuntimeEdge) GetFromPort() runtimeType.IPort {
	return e.fromPort
}

// SetFromPort sets the from port
func (e *WorkflowRuntimeEdge) SetFromPort(port runtimeType.IPort) {
	e.fromPort = port
}

// GetToPort returns the to port
func (e *WorkflowRuntimeEdge) GetToPort() runtimeType.IPort {
	return e.toPort
}

// SetToPort sets the to port
func (e *WorkflowRuntimeEdge) SetToPort(port runtimeType.IPort) {
	e.toPort = port
}

// WorkflowRuntimeEdge_CreateID creates an edge ID from schema
func WorkflowRuntimeEdge_CreateID(schema *schema.WorkflowEdgeSchema) string {
	sourcePart := schema.SourceNodeID
	if schema.SourcePortID != nil {
		sourcePart = fmt.Sprintf("%s:%s", schema.SourceNodeID, *schema.SourcePortID)
	}

	targetPart := schema.TargetNodeID
	if schema.TargetPortID != nil {
		targetPart = fmt.Sprintf("%s:%s", schema.TargetNodeID, *schema.TargetPortID)
	}

	return fmt.Sprintf("%s-%s", sourcePart, targetPart)
}
