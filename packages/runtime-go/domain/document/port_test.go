/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package document

import (
	"testing"

	"flowgram-runtime-go/interface/constant"
	runtimeType "flowgram-runtime-go/interface/runtime"
	"flowgram-runtime-go/interface/schema"
)

// MockPortNode implements INode interface for testing (renamed to avoid conflict)
type MockPortNode struct {
	id string
}

func (m *MockPortNode) GetID() string {
	return m.id
}

func (m *MockPortNode) GetType() constant.FlowGramNode {
	return constant.FlowGramNode("mock")
}

func (m *MockPortNode) GetName() string {
	return "mock-node"
}

func (m *MockPortNode) GetPosition() schema.PositionSchema {
	return schema.PositionSchema{}
}

func (m *MockPortNode) GetDeclare() runtimeType.NodeDeclare {
	return runtimeType.NodeDeclare{}
}

func (m *MockPortNode) GetData() any {
	return nil
}

func (m *MockPortNode) GetPorts() struct {
	Inputs  []runtimeType.IPort
	Outputs []runtimeType.IPort
} {
	return struct {
		Inputs  []runtimeType.IPort
		Outputs []runtimeType.IPort
	}{}
}

func (m *MockPortNode) GetEdges() struct {
	Inputs  []runtimeType.IEdge
	Outputs []runtimeType.IEdge
} {
	return struct {
		Inputs  []runtimeType.IEdge
		Outputs []runtimeType.IEdge
	}{}
}

func (m *MockPortNode) GetParent() runtimeType.INode[any] {
	return nil
}

func (m *MockPortNode) SetParent(parent runtimeType.INode[any]) {}

func (m *MockPortNode) GetChildren() []runtimeType.INode[any] {
	return nil
}

func (m *MockPortNode) AddChild(child runtimeType.INode[any]) {}

func (m *MockPortNode) AddPort(port runtimeType.IPort) {}

func (m *MockPortNode) AddInputEdge(edge runtimeType.IEdge) {}

func (m *MockPortNode) AddOutputEdge(edge runtimeType.IEdge) {}

func (m *MockPortNode) GetPrev() []runtimeType.INode[any] {
	return nil
}

func (m *MockPortNode) GetNext() []runtimeType.INode[any] {
	return nil
}

func (m *MockPortNode) IsBranch() bool {
	return false
}

func (m *MockPortNode) GetSuccessors() []runtimeType.INode[any] {
	return nil
}

func (m *MockPortNode) GetPredecessors() []runtimeType.INode[any] {
	return nil
}

// MockPortEdge implements IEdge interface for testing (renamed to avoid conflict)
type MockPortEdge struct {
	id string
}

func (m *MockPortEdge) GetID() string {
	return m.id
}

func (m *MockPortEdge) GetFrom() runtimeType.INode[any] {
	return nil
}

func (m *MockPortEdge) GetTo() runtimeType.INode[any] {
	return nil
}

func (m *MockPortEdge) GetFromPort() runtimeType.IPort {
	return nil
}

func (m *MockPortEdge) GetToPort() runtimeType.IPort {
	return nil
}

func TestWorkflowRuntimePort(t *testing.T) {
	// Setup mock node
	mockNode := &MockPortNode{id: "test-node"}

	// Setup create port params
	mockParams := runtimeType.CreatePortParams{
		ID:   "test-port",
		Node: mockNode,
		Type: schema.WorkflowPortTypeInput,
	}

	// Create port
	port := NewWorkflowRuntimePort(mockParams)

	t.Run("constructor", func(t *testing.T) {
		t.Run("should initialize with provided params", func(t *testing.T) {
			if port.GetID() != mockParams.ID {
				t.Errorf("Expected ID %s, got %s", mockParams.ID, port.GetID())
			}
			if port.GetNode().GetID() != mockNode.GetID() {
				t.Errorf("Expected Node ID %s, got %s", mockNode.GetID(), port.GetNode().GetID())
			}
			if port.GetType() != mockParams.Type {
				t.Errorf("Expected Type %v, got %v", mockParams.Type, port.GetType())
			}
			if len(port.GetEdges()) != 0 {
				t.Errorf("Expected empty edges, got %d edges", len(port.GetEdges()))
			}
		})

		t.Run("should initialize with different port types", func(t *testing.T) {
			// Test input port
			inputParams := runtimeType.CreatePortParams{
				ID:   "input-port",
				Node: mockNode,
				Type: schema.WorkflowPortTypeInput,
			}
			inputPort := NewWorkflowRuntimePort(inputParams)
			if inputPort.GetType() != schema.WorkflowPortTypeInput {
				t.Errorf("Expected Input type, got %v", inputPort.GetType())
			}

			// Test output port
			outputParams := runtimeType.CreatePortParams{
				ID:   "output-port",
				Node: mockNode,
				Type: schema.WorkflowPortTypeOutput,
			}
			outputPort := NewWorkflowRuntimePort(outputParams)
			if outputPort.GetType() != schema.WorkflowPortTypeOutput {
				t.Errorf("Expected Output type, got %v", outputPort.GetType())
			}
		})
	})

	t.Run("edges management", func(t *testing.T) {
		t.Run("should add edge correctly", func(t *testing.T) {
			mockEdge := &MockPortEdge{id: "test-edge"}

			port.AddEdge(mockEdge)
			if len(port.GetEdges()) != 1 {
				t.Errorf("Expected 1 edge, got %d", len(port.GetEdges()))
			}
			if port.GetEdges()[0].GetID() != mockEdge.GetID() {
				t.Errorf("Expected edge ID %s, got %s", mockEdge.GetID(), port.GetEdges()[0].GetID())
			}
		})

		t.Run("should maintain edge order when adding multiple edges", func(t *testing.T) {
			// Create a new port for this test to avoid interference
			testPort := NewWorkflowRuntimePort(mockParams)

			mockEdge1 := &MockPortEdge{id: "edge-1"}
			mockEdge2 := &MockPortEdge{id: "edge-2"}
			mockEdge3 := &MockPortEdge{id: "edge-3"}

			testPort.AddEdge(mockEdge1)
			testPort.AddEdge(mockEdge2)
			testPort.AddEdge(mockEdge3)

			if len(testPort.GetEdges()) != 3 {
				t.Errorf("Expected 3 edges, got %d", len(testPort.GetEdges()))
			}
			if testPort.GetEdges()[0].GetID() != mockEdge1.GetID() {
				t.Errorf("Expected first edge ID %s, got %s", mockEdge1.GetID(), testPort.GetEdges()[0].GetID())
			}
			if testPort.GetEdges()[1].GetID() != mockEdge2.GetID() {
				t.Errorf("Expected second edge ID %s, got %s", mockEdge2.GetID(), testPort.GetEdges()[1].GetID())
			}
			if testPort.GetEdges()[2].GetID() != mockEdge3.GetID() {
				t.Errorf("Expected third edge ID %s, got %s", mockEdge3.GetID(), testPort.GetEdges()[2].GetID())
			}
		})
	})
}