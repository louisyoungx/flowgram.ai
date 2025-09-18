/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package document

import (
	"testing"

	"flowgram-runtime-go/interface/constant"
	"flowgram-runtime-go/interface/schema"
)

// TestCreateStore tests the CreateStore function
func TestCreateStore(t *testing.T) {
	t.Run("should create an empty store", func(t *testing.T) {
		flattenData := &FlattenData{
			FlattenSchema: &schema.WorkflowSchema{
				Nodes: []schema.WorkflowNodeSchema{},
				Edges: []schema.WorkflowEdgeSchema{},
			},
			NodeBlocks: make(map[string][]string),
			NodeEdges:  make(map[string][]string),
		}

		store := CreateStore(flattenData)

		// Should have only root node
		if len(store.Nodes) != 1 {
			t.Errorf("expected 1 node (root), got %d", len(store.Nodes))
		}
		if len(store.Edges) != 0 {
			t.Errorf("expected 0 edges, got %d", len(store.Edges))
		}
		if len(store.Ports) != 0 {
			t.Errorf("expected 0 ports, got %d", len(store.Ports))
		}

		// Verify root node
		rootNode := store.Nodes[string(constant.FlowGramNodeRoot)]
		if rootNode == nil {
			t.Error("root node should exist")
		}
		if rootNode.GetType() != constant.FlowGramNodeRoot {
			t.Errorf("expected root node type %v, got %v", constant.FlowGramNodeRoot, rootNode.GetType())
		}
		if rootNode.GetPosition().X != 0 || rootNode.GetPosition().Y != 0 {
			t.Errorf("expected root node position (0, 0), got (%f, %f)", rootNode.GetPosition().X, rootNode.GetPosition().Y)
		}
	})

	t.Run("should create store with nodes and edges", func(t *testing.T) {
		// Create test data with nodes and edges
		flattenData := &FlattenData{
			FlattenSchema: &schema.WorkflowSchema{
				Nodes: []schema.WorkflowNodeSchema{
					{
						ID:   "node1",
						Type: "TestNode",
						Meta: schema.WorkflowNodeMetaSchema{
							Position: schema.PositionSchema{X: 100, Y: 100},
						},
						Data: map[string]any{
							"title": "Test Node 1",
							"inputsValues": map[string]any{
								"test": "value",
							},
							"inputs": []string{"input1"},
							"outputs": []string{"output1"},
						},
					},
					{
						ID:   "node2",
						Type: "TestNode",
						Meta: schema.WorkflowNodeMetaSchema{
							Position: schema.PositionSchema{X: 200, Y: 200},
						},
						Data: map[string]any{
							"title": "Test Node 2",
						},
					},
				},
				Edges: []schema.WorkflowEdgeSchema{
					{
						SourceNodeID: "node1",
						TargetNodeID: "node2",
						SourcePortID: stringPtr("output1"),
						TargetPortID: stringPtr("input1"),
					},
				},
			},
			NodeBlocks: map[string][]string{
				"root": {"node1", "node2"},
			},
			NodeEdges: map[string][]string{
				"root": {"node1-node2"},
			},
		}

		store := CreateStore(flattenData)

		// Verify node creation: root + 2 test nodes = 3 nodes
		if len(store.Nodes) != 3 {
			t.Errorf("expected 3 nodes, got %d", len(store.Nodes))
		}

		node1 := store.Nodes["node1"]
		if node1 == nil {
			t.Fatal("node1 should exist")
		}
		if node1.GetType() != "TestNode" {
			t.Errorf("expected node1 type 'TestNode', got %v", node1.GetType())
		}
		if node1.GetName() != "Test Node 1" {
			t.Errorf("expected node1 name 'Test Node 1', got %s", node1.GetName())
		}
		if node1.GetPosition().X != 100 || node1.GetPosition().Y != 100 {
			t.Errorf("expected node1 position (100, 100), got (%f, %f)", node1.GetPosition().X, node1.GetPosition().Y)
		}

		// Verify edge creation
		if len(store.Edges) != 1 {
			t.Errorf("expected 1 edge, got %d", len(store.Edges))
		}

		// Get the edge (there should be only one)
		var edge *WorkflowRuntimeEdge
		for _, e := range store.Edges {
			edge = e
			break
		}
		if edge == nil {
			t.Fatal("edge should exist")
		}
		if edge.GetFrom() != node1 {
			t.Error("edge should connect from node1")
		}
		if edge.GetTo() != store.Nodes["node2"] {
			t.Error("edge should connect to node2")
		}

		// Verify port creation
		if len(store.Ports) != 2 {
			t.Errorf("expected 2 ports (input and output), got %d", len(store.Ports))
		}

		outputPort := store.Ports["output1"]
		inputPort := store.Ports["input1"]
		if outputPort == nil {
			t.Error("output port should exist")
		}
		if inputPort == nil {
			t.Error("input port should exist")
		}
		if outputPort != nil && outputPort.GetType() != schema.WorkflowPortTypeOutput {
			t.Errorf("expected output port type %v, got %v", schema.WorkflowPortTypeOutput, outputPort.GetType())
		}
		if inputPort != nil && inputPort.GetType() != schema.WorkflowPortTypeInput {
			t.Errorf("expected input port type %v, got %v", schema.WorkflowPortTypeInput, inputPort.GetType())
		}

		// Verify node relationships
		rootNode := store.Nodes[string(constant.FlowGramNodeRoot)]
		if rootNode == nil {
			t.Fatal("root node should exist")
		}
		children := rootNode.GetChildren()
		if len(children) != 2 {
			t.Errorf("expected root to have 2 children, got %d", len(children))
		}
		if node1.GetParent() != rootNode {
			t.Error("node1 parent should be root")
		}
	})

	t.Run("should throw error for invalid edge", func(t *testing.T) {
		// Test with invalid edge (nonexistent nodes)
		flattenData := &FlattenData{
			FlattenSchema: &schema.WorkflowSchema{
				Nodes: []schema.WorkflowNodeSchema{},
				Edges: []schema.WorkflowEdgeSchema{
					{
						SourceNodeID: "nonexistent1",
						TargetNodeID: "nonexistent2",
					},
				},
			},
			NodeBlocks: make(map[string][]string),
			NodeEdges:  make(map[string][]string),
		}

		// This should panic due to invalid edge
		defer func() {
			if r := recover(); r == nil {
				t.Error("expected panic for invalid edge, but no panic occurred")
			}
		}()

		CreateStore(flattenData)
	})
}