/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package document

import (
	"testing"

	"flowgram-runtime-go/interface/constant"
)

// TestWorkflowRuntimeDocumentCreate tests document creation
func TestWorkflowRuntimeDocumentCreate(t *testing.T) {
	t.Run("should create instance", func(t *testing.T) {
		document := NewWorkflowRuntimeDocument()
		if document == nil {
			t.Fatal("document should not be nil")
		}
		if document.GetID() == "" {
			t.Error("document ID should not be empty")
		}
	})

	t.Run("should have root after init", func(t *testing.T) {
		schema := GetTestSchemas().EmptySchema()
		document := NewWorkflowRuntimeDocument()
		document.Init(schema)
		root := document.GetRoot()
		if root == nil {
			t.Error("root should not be nil")
		}
	})

	t.Run("should init with basic schema", func(t *testing.T) {
		schema := GetTestSchemas().BasicSchema()
		document := NewWorkflowRuntimeDocument()
		document.Init(schema)
		
		nodes := document.GetNodes()
		edges := document.GetEdges()
		
		// Check node count: root + start + end = 3 nodes
		if len(nodes) != 3 {
			t.Errorf("expected 3 nodes, got %d", len(nodes))
		}
		
		// Check edge count: start -> end = 1 edge
		if len(edges) != 1 {
			t.Errorf("expected 1 edge, got %d", len(edges))
		}
		
		// Verify node IDs
		nodeIDs := make([]string, len(nodes))
		for i, node := range nodes {
			nodeIDs[i] = node.GetID()
		}
		
		expectedNodeIDs := []string{"root", "start_0", "end_0"}
		if !containsAll(nodeIDs, expectedNodeIDs) {
			t.Errorf("expected node IDs %v, got %v", expectedNodeIDs, nodeIDs)
		}
	})

	t.Run("should dispose correctly", func(t *testing.T) {
		schema := GetTestSchemas().BasicSchema()
		document := NewWorkflowRuntimeDocument()
		document.Init(schema)
		
		// Verify nodes and edges exist before dispose
		if len(document.GetNodes()) == 0 {
			t.Error("nodes should exist before dispose")
		}
		if len(document.GetEdges()) == 0 {
			t.Error("edges should exist before dispose")
		}
		
		document.Dispose()
		
		// Verify nodes and edges are cleared after dispose
		if len(document.GetNodes()) != 0 {
			t.Errorf("expected 0 nodes after dispose, got %d", len(document.GetNodes()))
		}
		if len(document.GetEdges()) != 0 {
			t.Errorf("expected 0 edges after dispose, got %d", len(document.GetEdges()))
		}
	})

	t.Run("should have start and end nodes", func(t *testing.T) {
		schema := GetTestSchemas().BasicSchema()
		document := NewWorkflowRuntimeDocument()
		document.Init(schema)
		
		start := document.GetStart()
		end := document.GetEnd()
		
		if start == nil {
			t.Error("start node should not be nil")
		}
		if end == nil {
			t.Error("end node should not be nil")
		}
		
		if start.GetID() != "start_0" {
			t.Errorf("expected start node ID 'start_0', got '%s'", start.GetID())
		}
		if end.GetID() != "end_0" {
			t.Errorf("expected end node ID 'end_0', got '%s'", end.GetID())
		}
		
		if start.GetType() != constant.FlowGramNodeStart {
			t.Errorf("expected start node type '%s', got '%s'", constant.FlowGramNodeStart, start.GetType())
		}
		if end.GetType() != constant.FlowGramNodeEnd {
			t.Errorf("expected end node type '%s', got '%s'", constant.FlowGramNodeEnd, end.GetType())
		}
	})

	t.Run("should get node by id", func(t *testing.T) {
		schema := GetTestSchemas().BasicSchema()
		document := NewWorkflowRuntimeDocument()
		document.Init(schema)
		
		// Test existing node
		node := document.GetNode("start_0")
		if node == nil {
			t.Error("node should not be nil")
		}
		if node.GetID() != "start_0" {
			t.Errorf("expected node ID 'start_0', got '%s'", node.GetID())
		}
		if node.GetType() != constant.FlowGramNodeStart {
			t.Errorf("expected node type '%s', got '%s'", constant.FlowGramNodeStart, node.GetType())
		}
		
		// Test non-existing node
		nonExistNode := document.GetNode("non_exist")
		if nonExistNode != nil {
			t.Error("non-existing node should be nil")
		}
	})

	t.Run("should get edge by id", func(t *testing.T) {
		schema := GetTestSchemas().BasicSchema()
		document := NewWorkflowRuntimeDocument()
		document.Init(schema)
		
		// Test existing edge
		edge := document.GetEdge("start_0-end_0")
		if edge == nil {
			t.Error("edge should not be nil")
		}
		if edge.GetID() != "start_0-end_0" {
			t.Errorf("expected edge ID 'start_0-end_0', got '%s'", edge.GetID())
		}
		
		// Test non-existing edge
		nonExistEdge := document.GetEdge("non_exist")
		if nonExistEdge != nil {
			t.Error("non-existing edge should be nil")
		}
	})

	t.Run("should init with two LLM schema", func(t *testing.T) {
		schema := GetTestSchemas().TwoLLMSchema()
		document := NewWorkflowRuntimeDocument()
		document.Init(schema)
		
		nodes := document.GetNodes()
		edges := document.GetEdges()
		
		// Should have root + start + 2 LLM + end = 5 nodes
		if len(nodes) < 5 {
			t.Errorf("expected at least 5 nodes, got %d", len(nodes))
		}
		
		// Should have at least 3 edges: start->llm1, llm1->llm2, llm2->end
		if len(edges) < 3 {
			t.Errorf("expected at least 3 edges, got %d", len(edges))
		}
		
		// Verify required nodes exist
		root := document.GetRoot()
		start := document.GetStart()
		end := document.GetEnd()
		
		if root == nil {
			t.Error("root should not be nil")
		}
		if start == nil {
			t.Error("start should not be nil")
		}
		if end == nil {
			t.Error("end should not be nil")
		}
	})
}

// Helper function to check if slice contains all expected elements
func containsAll(slice []string, expected []string) bool {
	for _, exp := range expected {
		found := false
		for _, item := range slice {
			if item == exp {
				found = true
				break
			}
		}
		if !found {
			return false
		}
	}
	return true
}