package document

import (
	runtimeType "flowgram-runtime-go/interface/runtime"
	"flowgram-runtime-go/interface/schema"
)

// WorkflowRuntimePort implements IPort interface
type WorkflowRuntimePort struct {
	id       string
	node     runtimeType.INode[any]
	portType schema.WorkflowPortType
	edges    []runtimeType.IEdge
}

// GetId returns the port ID
func (p *WorkflowRuntimePort) GetID() string {
	return p.id
}

// GetNode returns the node that owns this port
func (p *WorkflowRuntimePort) GetNode() runtimeType.INode[any] {
	return p.node
}

// GetType returns the port type
func (p *WorkflowRuntimePort) GetType() schema.WorkflowPortType {
	return p.portType
}

// NewWorkflowRuntimePort creates a new WorkflowRuntimePort instance
func NewWorkflowRuntimePort(params runtimeType.CreatePortParams) *WorkflowRuntimePort {
	return &WorkflowRuntimePort{
		id:       params.ID,
		node:     params.Node.(runtimeType.INode[any]),
		portType: params.Type,
		edges:    make([]runtimeType.IEdge, 0),
	}
}

// GetEdges returns all edges connected to this port
func (p *WorkflowRuntimePort) GetEdges() []runtimeType.IEdge {
	return p.edges
}

// AddEdge adds an edge to this port
func (p *WorkflowRuntimePort) AddEdge(edge runtimeType.IEdge) {
	p.edges = append(p.edges, edge)
}
