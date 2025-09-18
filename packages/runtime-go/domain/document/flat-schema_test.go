/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package document

import (
	"flowgram-runtime-go/interface/constant"
	schema "flowgram-runtime-go/interface/schema"
	"testing"
)

func TestFlatSchema(t *testing.T) {
	t.Run("should handle empty schema", func(t *testing.T) {
		result := FlatSchema(nil)
		
		if len(result.FlattenSchema.Nodes) != 0 {
			t.Errorf("Expected empty nodes, got %d", len(result.FlattenSchema.Nodes))
		}
		
		if len(result.FlattenSchema.Edges) != 0 {
			t.Errorf("Expected empty edges, got %d", len(result.FlattenSchema.Edges))
		}
		
		rootBlocks, exists := result.NodeBlocks[string(constant.FlowGramNodeRoot)]
		if !exists || len(rootBlocks) != 0 {
			t.Errorf("Expected empty root blocks, got %v", rootBlocks)
		}
		
		rootEdges, exists := result.NodeEdges[string(constant.FlowGramNodeRoot)]
		if !exists || len(rootEdges) != 0 {
			t.Errorf("Expected empty root edges, got %v", rootEdges)
		}
	})
	
	t.Run("should handle basic schema without nested blocks", func(t *testing.T) {
		schemaData := &schema.WorkflowSchema{
			Nodes: []schema.WorkflowNodeSchema{
				{ID: "node1", Type: "test"},
				{ID: "node2", Type: "test"},
			},
			Edges: []schema.WorkflowEdgeSchema{
				{SourceNodeID: "node1", TargetNodeID: "node2"},
			},
		}
		
		result := FlatSchema(schemaData)
		
		// Verify nodes are preserved
		if len(result.FlattenSchema.Nodes) != 2 {
			t.Errorf("Expected 2 nodes, got %d", len(result.FlattenSchema.Nodes))
		}
		
		// Verify edges are preserved
		if len(result.FlattenSchema.Edges) != 1 {
			t.Errorf("Expected 1 edge, got %d", len(result.FlattenSchema.Edges))
		}
		
		// Verify root blocks mapping
		rootBlocks := result.NodeBlocks[string(constant.FlowGramNodeRoot)]
		if len(rootBlocks) != 2 {
			t.Errorf("Expected 2 root blocks, got %d", len(rootBlocks))
		}
		
		expectedBlocks := []string{"node1", "node2"}
		if !containsAll(rootBlocks, expectedBlocks) {
			t.Errorf("Expected root blocks %v, got %v", expectedBlocks, rootBlocks)
		}
		
		// Verify root edges mapping
		rootEdges := result.NodeEdges[string(constant.FlowGramNodeRoot)]
		if len(rootEdges) != 1 {
			t.Errorf("Expected 1 root edge, got %d", len(rootEdges))
		}
	})
	
	t.Run("should flatten nested blocks and edges", func(t *testing.T) {
		schemaData := &schema.WorkflowSchema{
			Nodes: []schema.WorkflowNodeSchema{
				{
					ID:   "parent",
					Type: "container",
					Blocks: []schema.WorkflowNodeSchema{
						{ID: "child1", Type: "test"},
						{
							ID:   "child2",
							Type: "test",
							Blocks: []schema.WorkflowNodeSchema{
								{ID: "grandchild", Type: "test"},
							},
							Edges: []schema.WorkflowEdgeSchema{
								{SourceNodeID: "child2", TargetNodeID: "grandchild"},
							},
						},
					},
					Edges: []schema.WorkflowEdgeSchema{
						{SourceNodeID: "child1", TargetNodeID: "child2"},
					},
				},
			},
			Edges: []schema.WorkflowEdgeSchema{},
		}
		
		result := FlatSchema(schemaData)
		
		// Verify nodes are correctly flattened
		expectedNodeIDs := []string{"parent", "child1", "child2", "grandchild"}
		actualNodeIDs := make([]string, len(result.FlattenSchema.Nodes))
		for i, node := range result.FlattenSchema.Nodes {
			actualNodeIDs[i] = node.ID
		}
		
		if !containsAll(actualNodeIDs, expectedNodeIDs) {
			t.Errorf("Expected nodes %v, got %v", expectedNodeIDs, actualNodeIDs)
		}
		
		// Verify edges are correctly flattened
		if len(result.FlattenSchema.Edges) != 2 {
			t.Errorf("Expected 2 edges, got %d", len(result.FlattenSchema.Edges))
		}
		
		// Verify node blocks mapping
		parentBlocks := result.NodeBlocks["parent"]
		expectedParentBlocks := []string{"child1", "child2"}
		if !containsAll(parentBlocks, expectedParentBlocks) {
			t.Errorf("Expected parent blocks %v, got %v", expectedParentBlocks, parentBlocks)
		}
		
		child2Blocks := result.NodeBlocks["child2"]
		expectedChild2Blocks := []string{"grandchild"}
		if !containsAll(child2Blocks, expectedChild2Blocks) {
			t.Errorf("Expected child2 blocks %v, got %v", expectedChild2Blocks, child2Blocks)
		}
		
		// Verify node edges mapping
		parentEdges := result.NodeEdges["parent"]
		if len(parentEdges) != 1 {
			t.Errorf("Expected 1 parent edge, got %d", len(parentEdges))
		}
		
		child2Edges := result.NodeEdges["child2"]
		if len(child2Edges) != 1 {
			t.Errorf("Expected 1 child2 edge, got %d", len(child2Edges))
		}
	})
}

// Helper function to check if slice contains all expected elements