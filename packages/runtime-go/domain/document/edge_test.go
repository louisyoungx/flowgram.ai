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

// MockEdgeNode implements INode interface for testing (renamed to avoid conflict)
type MockEdgeNode struct {
	id string
}

func (m *MockEdgeNode) GetID() string {
	return m.id
}

func (m *MockEdgeNode) GetType() constant.FlowGramNode {
	return constant.FlowGramNode("mock")
}

func (m *MockEdgeNode) GetName() string {
	return "mock-node"
}

func (m *MockEdgeNode) GetPosition() schema.PositionSchema {
	return schema.PositionSchema{}
}

func (m *MockEdgeNode) GetDeclare() runtimeType.NodeDeclare {
	return runtimeType.NodeDeclare{}
}

func (m *MockEdgeNode) GetData() any {
	return nil
}

func (m *MockEdgeNode) GetPorts() struct {
	Inputs  []runtimeType.IPort
	Outputs []runtimeType.IPort
} {
	return struct {
		Inputs  []runtimeType.IPort
		Outputs []runtimeType.IPort
	}{}
}

func (m *MockEdgeNode) GetEdges() struct {
	Inputs  []runtimeType.IEdge
	Outputs []runtimeType.IEdge
} {
	return struct {
		Inputs  []runtimeType.IEdge
		Outputs []runtimeType.IEdge
	}{}
}

func (m *MockEdgeNode) GetParent() runtimeType.INode[any] {
	return nil
}

func (m *MockEdgeNode) SetParent(parent runtimeType.INode[any]) {}

func (m *MockEdgeNode) GetChildren() []runtimeType.INode[any] {
	return nil
}

func (m *MockEdgeNode) AddChild(child runtimeType.INode[any]) {}

func (m *MockEdgeNode) AddPort(port runtimeType.IPort) {}

func (m *MockEdgeNode) AddInputEdge(edge runtimeType.IEdge) {}

func (m *MockEdgeNode) AddOutputEdge(edge runtimeType.IEdge) {}

func (m *MockEdgeNode) GetPrev() []runtimeType.INode[any] {
	return nil
}

func (m *MockEdgeNode) GetNext() []runtimeType.INode[any] {
	return nil
}

func (m *MockEdgeNode) IsBranch() bool {
	return false
}

func (m *MockEdgeNode) GetSuccessors() []runtimeType.INode[any] {
	return nil
}

func (m *MockEdgeNode) GetPredecessors() []runtimeType.INode[any] {
	return nil
}

// MockEdgePort implements IPort interface for testing (renamed to avoid conflict)
type MockEdgePort struct {
	id string
}

func (m *MockEdgePort) GetID() string {
	return m.id
}

func (m *MockEdgePort) GetType() schema.WorkflowPortType {
	return schema.WorkflowPortTypeInput
}

func (m *MockEdgePort) GetNode() runtimeType.INode[any] {
	return nil
}

func (m *MockEdgePort) GetEdges() []runtimeType.IEdge {
	return nil
}

func TestWorkflowRuntimeEdge(t *testing.T) {
	// Setup mock nodes
	mockFromNode := &MockEdgeNode{id: "from-node"}
	mockToNode := &MockEdgeNode{id: "to-node"}

	// Setup create edge params
	mockParams := &runtimeType.CreateEdgeParams{
		ID:   "test-edge",
		From: mockFromNode,
		To:   mockToNode,
	}

	// Create edge
	edge := NewWorkflowRuntimeEdge(mockParams)

	t.Run("constructor", func(t *testing.T) {
		t.Run("should initialize with provided params", func(t *testing.T) {
			if edge.GetID() != mockParams.ID {
				t.Errorf("Expected ID %s, got %s", mockParams.ID, edge.GetID())
			}
			if edge.GetFrom() != mockParams.From {
				t.Errorf("Expected From node %v, got %v", mockParams.From, edge.GetFrom())
			}
			if edge.GetTo() != mockParams.To {
				t.Errorf("Expected To node %v, got %v", mockParams.To, edge.GetTo())
			}
		})
	})

	t.Run("ports", func(t *testing.T) {
		mockFromPort := &MockEdgePort{id: "from-port"}
		mockToPort := &MockEdgePort{id: "to-port"}

		t.Run("should set and get fromPort correctly", func(t *testing.T) {
			edge.SetFromPort(mockFromPort)
			if edge.GetFromPort().GetID() != mockFromPort.GetID() {
				t.Errorf("Expected fromPort ID %s, got %s", mockFromPort.GetID(), edge.GetFromPort().GetID())
			}
		})

		t.Run("should set and get toPort correctly", func(t *testing.T) {
			edge.SetToPort(mockToPort)
			if edge.GetToPort().GetID() != mockToPort.GetID() {
				t.Errorf("Expected toPort ID %s, got %s", mockToPort.GetID(), edge.GetToPort().GetID())
			}
		})
	})

	t.Run("createID", func(t *testing.T) {
		t.Run("should create ID with port IDs", func(t *testing.T) {
			sourcePortID := "sourcePort"
			targetPortID := "targetPort"
			schema := &schema.WorkflowEdgeSchema{
				SourceNodeID: "source",
				SourcePortID: &sourcePortID,
				TargetNodeID: "target",
				TargetPortID: &targetPortID,
			}

			id := WorkflowRuntimeEdge_CreateID(schema)
			expected := "source:sourcePort-target:targetPort"
			if id != expected {
				t.Errorf("Expected ID %s, got %s", expected, id)
			}
		})

		t.Run("should create ID without port IDs", func(t *testing.T) {
			schema := &schema.WorkflowEdgeSchema{
				SourceNodeID: "source",
				TargetNodeID: "target",
			}

			id := WorkflowRuntimeEdge_CreateID(schema)
			expected := "source-target"
			if id != expected {
				t.Errorf("Expected ID %s, got %s", expected, id)
			}
		})

		t.Run("should create ID with mixed port IDs", func(t *testing.T) {
			// Test with source port only
			sourcePortID := "sourcePort"
			schemaWithSourcePort := &schema.WorkflowEdgeSchema{
				SourceNodeID: "source",
				SourcePortID: &sourcePortID,
				TargetNodeID: "target",
			}

			id1 := WorkflowRuntimeEdge_CreateID(schemaWithSourcePort)
			expected1 := "source:sourcePort-target"
			if id1 != expected1 {
				t.Errorf("Expected ID %s, got %s", expected1, id1)
			}

			// Test with target port only
			targetPortID := "targetPort"
			schemaWithTargetPort := &schema.WorkflowEdgeSchema{
				SourceNodeID: "source",
				TargetNodeID: "target",
				TargetPortID: &targetPortID,
			}

			id2 := WorkflowRuntimeEdge_CreateID(schemaWithTargetPort)
			expected2 := "source-target:targetPort"
			if id2 != expected2 {
				t.Errorf("Expected ID %s, got %s", expected2, id2)
			}
		})
	})
}