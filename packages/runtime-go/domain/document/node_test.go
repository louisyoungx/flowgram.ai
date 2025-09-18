/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package document

import (
	"flowgram-runtime-go/interface/constant"
	runtimeType "flowgram-runtime-go/interface/runtime"
	"flowgram-runtime-go/interface/schema"
	"testing"
)

// MockPort implements IPort interface for testing
type MockPort struct {
	id   string
	type_ schema.WorkflowPortType
	node runtimeType.INode[any]
	edges []runtimeType.IEdge
}

func (p *MockPort) GetID() string {
	return p.id
}

func (p *MockPort) GetType() schema.WorkflowPortType {
	return p.type_
}

func (p *MockPort) GetNode() runtimeType.INode[any] {
	return p.node
}

func (p *MockPort) GetEdges() []runtimeType.IEdge {
	return p.edges
}

// MockEdge implements IEdge interface for testing
type MockEdge struct {
	id       string
	from     runtimeType.INode[any]
	to       runtimeType.INode[any]
	fromPort runtimeType.IPort
	toPort   runtimeType.IPort
}

func (e *MockEdge) GetID() string {
	return e.id
}

func (e *MockEdge) GetFrom() runtimeType.INode[any] {
	return e.from
}

func (e *MockEdge) GetTo() runtimeType.INode[any] {
	return e.to
}

func (e *MockEdge) GetFromPort() runtimeType.IPort {
	return e.fromPort
}

func (e *MockEdge) GetToPort() runtimeType.IPort {
	return e.toPort
}

// TestWorkflowRuntimeNode tests the WorkflowRuntimeNode functionality
func TestWorkflowRuntimeNode(t *testing.T) {
	t.Run("constructor", func(t *testing.T) {
		t.Run("should initialize with provided params", func(t *testing.T) {
			mockParams := runtimeType.CreateNodeParams{
				ID:       "test-node",
				Type:     constant.FlowGramNodeStart,
				Name:     "Test Node",
				Position: schema.PositionSchema{X: 0, Y: 0},
				Variable: &runtimeType.NodeDeclare{},
				Data:     map[string]interface{}{"testData": "data"},
			}
			node := NewWorkflowRuntimeNode[map[string]interface{}](mockParams)
			
			if node.GetID() != mockParams.ID {
				t.Errorf("Expected ID %s, got %s", mockParams.ID, node.GetID())
			}
			if node.GetType() != mockParams.Type {
				t.Errorf("Expected Type %v, got %v", mockParams.Type, node.GetType())
			}
			if node.GetName() != mockParams.Name {
				t.Errorf("Expected Name %s, got %s", mockParams.Name, node.GetName())
			}
			if node.GetPosition() != mockParams.Position {
				t.Errorf("Expected Position %v, got %v", mockParams.Position, node.GetPosition())
			}
		})
		
		t.Run("should initialize with default values when optional params are not provided", func(t *testing.T) {
			minimalParams := runtimeType.CreateNodeParams{
				ID:       "test-node",
				Type:     constant.FlowGramNodeStart,
				Name:     "Test Node",
				Position: schema.PositionSchema{X: 0, Y: 0},
			}
			node := NewWorkflowRuntimeNode[map[string]interface{}](minimalParams)
			
			// Check that declare and data are initialized with default values
			declare := node.GetDeclare()
			// NodeDeclare is a struct, so it's always initialized
			_ = declare
			
			data := node.GetData()
			if data == nil {
				t.Error("Expected data to be initialized")
			}
		})
	})
	
	t.Run("ports", func(t *testing.T) {
		mockParams := runtimeType.CreateNodeParams{
			ID:       "test-node",
			Type:     constant.FlowGramNodeStart,
			Name:     "Test Node",
			Position: schema.PositionSchema{X: 0, Y: 0},
		}
		node := NewWorkflowRuntimeNode[map[string]interface{}](mockParams)
		
		inputPort := &MockPort{
			id:    "input-1",
			type_: schema.WorkflowPortTypeInput,
			node:  node,
			edges: []runtimeType.IEdge{},
		}
		outputPort := &MockPort{
			id:    "output-1",
			type_: schema.WorkflowPortTypeOutput,
			node:  node,
			edges: []runtimeType.IEdge{},
		}
		
		node.AddPort(inputPort)
		node.AddPort(outputPort)
		
		t.Run("should correctly categorize input and output ports", func(t *testing.T) {
			ports := node.GetPorts()
			
			if len(ports.Inputs) != 1 {
				t.Errorf("Expected 1 input port, got %d", len(ports.Inputs))
			}
			if len(ports.Outputs) != 1 {
				t.Errorf("Expected 1 output port, got %d", len(ports.Outputs))
			}
			if ports.Inputs[0] != inputPort {
				t.Error("Input port mismatch")
			}
			if ports.Outputs[0] != outputPort {
				t.Error("Output port mismatch")
			}
		})
	})
	
	t.Run("edges", func(t *testing.T) {
		mockParams := runtimeType.CreateNodeParams{
			ID:       "test-node",
			Type:     constant.FlowGramNodeStart,
			Name:     "Test Node",
			Position: schema.PositionSchema{X: 0, Y: 0},
		}
		node := NewWorkflowRuntimeNode[map[string]interface{}](mockParams)
		
		fromNodeParams := runtimeType.CreateNodeParams{
			ID:       "from-node",
			Type:     constant.FlowGramNodeStart,
			Name:     "From Node",
			Position: schema.PositionSchema{X: 0, Y: 0},
		}
		fromNode := NewWorkflowRuntimeNode[map[string]interface{}](fromNodeParams)
		
		toNodeParams := runtimeType.CreateNodeParams{
			ID:       "to-node",
			Type:     constant.FlowGramNodeStart,
			Name:     "To Node",
			Position: schema.PositionSchema{X: 0, Y: 0},
		}
		toNode := NewWorkflowRuntimeNode[map[string]interface{}](toNodeParams)
		
		inputEdge := &MockEdge{
			id:       "input-edge",
			from:     fromNode,
			to:       node,
			fromPort: &MockPort{},
			toPort:   &MockPort{},
		}
		outputEdge := &MockEdge{
			id:       "output-edge",
			from:     node,
			to:       toNode,
			fromPort: &MockPort{},
			toPort:   &MockPort{},
		}
		
		node.AddInputEdge(inputEdge)
		node.AddOutputEdge(outputEdge)
		
		t.Run("should correctly store input and output edges", func(t *testing.T) {
			edges := node.GetEdges()
			
			if len(edges.Inputs) != 1 {
				t.Errorf("Expected 1 input edge, got %d", len(edges.Inputs))
			}
			if len(edges.Outputs) != 1 {
				t.Errorf("Expected 1 output edge, got %d", len(edges.Outputs))
			}
			if edges.Inputs[0] != inputEdge {
				t.Error("Input edge mismatch")
			}
			if edges.Outputs[0] != outputEdge {
				t.Error("Output edge mismatch")
			}
		})
		
		t.Run("should update prev and next nodes when adding edges", func(t *testing.T) {
			prev := node.GetPrev()
			next := node.GetNext()
			
			if len(prev) != 1 {
				t.Errorf("Expected 1 prev node, got %d", len(prev))
			}
			if len(next) != 1 {
				t.Errorf("Expected 1 next node, got %d", len(next))
			}
			if prev[0] != fromNode {
				t.Error("Prev node mismatch")
			}
			if next[0] != toNode {
				t.Error("Next node mismatch")
			}
		})
	})
	
	t.Run("parent and children", func(t *testing.T) {
		mockParams := runtimeType.CreateNodeParams{
			ID:       "test-node",
			Type:     constant.FlowGramNodeStart,
			Name:     "Test Node",
			Position: schema.PositionSchema{X: 0, Y: 0},
		}
		node := NewWorkflowRuntimeNode[map[string]interface{}](mockParams)
		
		parentNodeParams := runtimeType.CreateNodeParams{
			ID:       "parent-node",
			Type:     constant.FlowGramNodeStart,
			Name:     "Parent Node",
			Position: schema.PositionSchema{X: 0, Y: 0},
		}
		parentNode := NewWorkflowRuntimeNode[map[string]interface{}](parentNodeParams)
		
		childNodeParams := runtimeType.CreateNodeParams{
			ID:       "child-node",
			Type:     constant.FlowGramNodeStart,
			Name:     "Child Node",
			Position: schema.PositionSchema{X: 0, Y: 0},
		}
		childNode := NewWorkflowRuntimeNode[map[string]interface{}](childNodeParams)
		
		t.Run("should handle parent-child relationships", func(t *testing.T) {
			node.SetParent(parentNode)
			node.AddChild(childNode)
			
			if node.GetParent() != parentNode {
				t.Error("Parent node mismatch")
			}
			
			children := node.GetChildren()
			if len(children) != 1 {
				t.Errorf("Expected 1 child, got %d", len(children))
			}
			if children[0] != childNode {
				t.Error("Child node mismatch")
			}
		})
	})
	
	t.Run("isBranch", func(t *testing.T) {
		mockParams := runtimeType.CreateNodeParams{
			ID:       "test-node",
			Type:     constant.FlowGramNodeStart,
			Name:     "Test Node",
			Position: schema.PositionSchema{X: 0, Y: 0},
		}
		node := NewWorkflowRuntimeNode[map[string]interface{}](mockParams)
		
		t.Run("should return true when node has multiple output ports", func(t *testing.T) {
			outputPort1 := &MockPort{
				id:    "output-1",
				type_: schema.WorkflowPortTypeOutput,
				node:  node,
				edges: []runtimeType.IEdge{},
			}
			outputPort2 := &MockPort{
				id:    "output-2",
				type_: schema.WorkflowPortTypeOutput,
				node:  node,
				edges: []runtimeType.IEdge{},
			}
			
			node.AddPort(outputPort1)
			node.AddPort(outputPort2)
			
			if !node.IsBranch() {
				t.Error("Expected node to be a branch")
			}
		})
		
		t.Run("should return false when node has one or zero output ports", func(t *testing.T) {
			// Create a new node for this test
			singlePortNode := NewWorkflowRuntimeNode[map[string]interface{}](mockParams)
			
			outputPort := &MockPort{
				id:    "output-1",
				type_: schema.WorkflowPortTypeOutput,
				node:  singlePortNode,
				edges: []runtimeType.IEdge{},
			}
			
			singlePortNode.AddPort(outputPort)
			
			if singlePortNode.IsBranch() {
				t.Error("Expected node not to be a branch")
			}
		})
	})
}