package document

import (
	"flowgram-runtime-go/infrastructure/utils"
	"flowgram-runtime-go/interface/constant"
	runtimeType "flowgram-runtime-go/interface/runtime"
	"flowgram-runtime-go/interface/schema"
)

// WorkflowRuntimeDocument implements IDocument interface
type WorkflowRuntimeDocument struct {
	id    string
	store *DocumentStore
}

// GetId returns the document ID
func (d *WorkflowRuntimeDocument) GetID() string {
	return d.id
}

// NewWorkflowRuntimeDocument creates a new WorkflowRuntimeDocument instance
func NewWorkflowRuntimeDocument() *WorkflowRuntimeDocument {
	return &WorkflowRuntimeDocument{
		id: utils.UUID(),
	}
}

// GetRoot returns the root node
func (d *WorkflowRuntimeDocument) GetRoot() runtimeType.INode[any] {
	rootNode := d.GetNode(string(constant.FlowGramNodeRoot))
	if rootNode == nil {
		panic("Root node not found")
	}
	return rootNode
}

// GetStart returns the start node
func (d *WorkflowRuntimeDocument) GetStart() runtimeType.INode[any] {
	for _, node := range d.GetNodes() {
		if node.GetType() == constant.FlowGramNodeStart {
			return node
		}
	}
	panic("Start node not found")
}

// GetEnd returns the end node
func (d *WorkflowRuntimeDocument) GetEnd() runtimeType.INode[any] {
	for _, node := range d.GetNodes() {
		if node.GetType() == constant.FlowGramNodeEnd {
			return node
		}
	}
	panic("End node not found")
}

// GetNode returns a node by its ID
func (d *WorkflowRuntimeDocument) GetNode(id string) runtimeType.INode[any] {
	if node, ok := d.store.Nodes[id]; ok {
		return node
	}
	return nil
}

// GetEdge returns an edge by its ID
func (d *WorkflowRuntimeDocument) GetEdge(id string) runtimeType.IEdge {
	if edge, ok := d.store.Edges[id]; ok {
		return edge
	}
	return nil
}

// GetNodes returns all nodes
func (d *WorkflowRuntimeDocument) GetNodes() []runtimeType.INode[any] {
	nodes := make([]runtimeType.INode[any], 0, len(d.store.Nodes))
	for _, node := range d.store.Nodes {
		nodes = append(nodes, node)
	}
	return nodes
}

// GetEdges returns all edges
func (d *WorkflowRuntimeDocument) GetEdges() []runtimeType.IEdge {
	edges := make([]runtimeType.IEdge, 0, len(d.store.Edges))
	for _, edge := range d.store.Edges {
		edges = append(edges, edge)
	}
	return edges
}

// Init initializes the document with a workflow schema
func (d *WorkflowRuntimeDocument) Init(workflowSchema schema.WorkflowSchema) {
	flattenSchema := FlatSchema(&workflowSchema)
	store := CreateStore(flattenSchema)
	d.store = store
}

// Dispose clears all data in the document
func (d *WorkflowRuntimeDocument) Dispose() {
	d.store.Edges = make(map[string]*WorkflowRuntimeEdge)
	d.store.Nodes = make(map[string]*WorkflowRuntimeNode[any])
	d.store.Ports = make(map[string]*WorkflowRuntimePort)
}
