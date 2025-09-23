/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package engine

import (
	"fmt"
	"log"

	"flowgram-runtime-go/domain/context"
	"flowgram-runtime-go/domain/task"
	"flowgram-runtime-go/interface/constant"
	runtimeType "flowgram-runtime-go/interface/runtime"
)

// WorkflowRuntimeEngine implements IEngine interface
type WorkflowRuntimeEngine struct {
	validation runtimeType.IValidation
	executor   runtimeType.IExecutor
}

// NewWorkflowRuntimeEngine creates a new WorkflowRuntimeEngine instance
func NewWorkflowRuntimeEngine(service runtimeType.EngineServices) *WorkflowRuntimeEngine {
	return &WorkflowRuntimeEngine{
		validation: service.Validation,
		executor:   service.Executor,
	}
}

// Invoke starts workflow execution and returns a task
func (e *WorkflowRuntimeEngine) Invoke(params runtimeType.InvokeParams) runtimeType.ITask {
	// Create context
	ctx := context.Create()
	ctx.Init(params)

	// Validate workflow
	valid := e.validate(params, ctx)
	if !valid {
		// Return task with empty processing channel for invalid workflow
		processingChan := make(chan runtimeType.WorkflowOutputs, 1)
		processingChan <- runtimeType.WorkflowOutputs{}
		close(processingChan)
		
		return task.Create(runtimeType.TaskParams{
			Processing: processingChan,
			Context:    ctx,
		})
	}

	// Start processing
	processingChan := make(chan runtimeType.WorkflowOutputs, 1)
	go func() {
		defer func() {
			ctx.Dispose()
			close(processingChan)
		}()
		
		outputs := e.process(ctx)
		processingChan <- outputs
	}()

	return task.Create(runtimeType.TaskParams{
		Processing: processingChan,
		Context:    ctx,
	})
}

// ExecuteNode executes a single node
func (e *WorkflowRuntimeEngine) ExecuteNode(context runtimeType.IContext, node runtimeType.INode[any]) error {
	if !e.canExecuteNode(context, node) {
		return nil
	}

	// Set node status to processing
	context.GetStatusCenter().GetNodeStatus(node.GetID()).Process()

	// Create snapshot
	snapshot := context.GetSnapshotCenter().Create(runtimeType.SnapshotData{
		NodeID: node.GetID(),
		Data:   node.GetData(),
	})

	var nextNodes []runtimeType.INode[any]
	
	defer func() {
		// Execute next nodes
		if err := e.executeNext(context, node, nextNodes); err != nil {
			log.Printf("Error executing next nodes: %v", err)
		}
	}()

	// Get node inputs
	inputs := context.GetState().GetNodeInputs(node)
	snapshot.Update(runtimeType.SnapshotData{
		NodeID: node.GetID(),
		Inputs: inputs,
	})

	// Execute node
	executionContext := runtimeType.ExecutionContext{
		Node:      node,
		Inputs:    inputs,
		Runtime:   context,
		Container: nil, // TODO: Implement container if needed
		Snapshot:  snapshot,
	}

	result, err := e.executor.Execute(executionContext)
	if err != nil {
		// Handle execution error
		errorMessage := err.Error()
		snapshot.Update(runtimeType.SnapshotData{
			NodeID: node.GetID(),
			Error:  errorMessage,
		})
		
		context.GetMessageCenter().Error(runtimeType.MessageData{
			NodeID:  node.GetID(),
			Message: errorMessage,
		})
		
		context.GetStatusCenter().GetNodeStatus(node.GetID()).Fail()
		return err
	}

	// Check if workflow is terminated
	if context.GetStatusCenter().GetWorkflow().Export().Terminated {
		return nil
	}

	// Update snapshot with results
	var branchValue string
	if result.Branch != nil {
		branchValue = *result.Branch
	}
	
	snapshot.Update(runtimeType.SnapshotData{
		NodeID:  node.GetID(),
		Outputs: result.Outputs,
		Branch:  branchValue,
	})

	// Set node outputs and mark as executed
	context.GetState().SetNodeOutputs(node, result.Outputs)
	context.GetState().AddExecutedNode(node)
	context.GetStatusCenter().GetNodeStatus(node.GetID()).Success()

	// Get next nodes to execute
	nextNodes = e.getNextNodes(context, node, result.Branch)

	return nil
}

// process executes the workflow from start to finish
func (e *WorkflowRuntimeEngine) process(context runtimeType.IContext) runtimeType.WorkflowOutputs {
	startNode := context.GetDocument().GetStart()
	context.GetStatusCenter().GetWorkflow().Process()

	err := e.ExecuteNode(context, startNode)
	if err != nil {
		context.GetStatusCenter().GetWorkflow().Fail()
		return runtimeType.WorkflowOutputs{}
	}

	outputs := context.GetIOCenter().GetOutputs()
	context.GetStatusCenter().GetWorkflow().Success()
	return outputs
}

// validate validates the workflow parameters
func (e *WorkflowRuntimeEngine) validate(params runtimeType.InvokeParams, context runtimeType.IContext) bool {
	result := e.validation.Invoke(params)
	if result.Valid {
		return true
	}

	// Add validation errors to message center
	for _, errorMsg := range result.Errors {
		context.GetMessageCenter().Error(runtimeType.MessageData{
			Message: errorMsg,
		})
	}

	context.GetStatusCenter().GetWorkflow().Fail()
	return false
}

// canExecuteNode checks if a node can be executed
func (e *WorkflowRuntimeEngine) canExecuteNode(context runtimeType.IContext, node runtimeType.INode[any]) bool {
	prevNodes := node.GetPrev()
	if len(prevNodes) == 0 {
		return true
	}

	// Check if all previous nodes have been executed
	for _, prevNode := range prevNodes {
		if !context.GetState().IsExecutedNode(prevNode) {
			return false
		}
	}

	return true
}

// getNextNodes determines which nodes to execute next based on branch
func (e *WorkflowRuntimeEngine) getNextNodes(context runtimeType.IContext, node runtimeType.INode[any], branch *string) []runtimeType.INode[any] {
	allNextNodes := node.GetNext()
	
	if branch == nil {
		return allNextNodes
	}

	// Find target port by branch ID
	var targetPort runtimeType.IPort
	ports := node.GetPorts()
	for _, port := range ports.Outputs {
		if port.GetID() == *branch {
			targetPort = port
			break
		}
	}

	if targetPort == nil {
		log.Printf("Branch %s not found", *branch)
		return allNextNodes
	}

	// Get next node IDs from target port edges
	nextNodeIDs := make(map[string]bool)
	for _, edge := range targetPort.GetEdges() {
		nextNodeIDs[edge.GetTo().GetID()] = true
	}

	// Filter next nodes based on branch
	var nextNodes []runtimeType.INode[any]
	var skipNodes []runtimeType.INode[any]
	
	for _, nextNode := range allNextNodes {
		if nextNodeIDs[nextNode.GetID()] {
			nextNodes = append(nextNodes, nextNode)
		} else {
			skipNodes = append(skipNodes, nextNode)
		}
	}

	// Mark skipped nodes and their successors as executed
	for _, skipNode := range skipNodes {
		e.markNodeAndSuccessorsAsExecuted(context, skipNode)
	}

	return nextNodes
}

// markNodeAndSuccessorsAsExecuted marks a node and all its successors as executed
func (e *WorkflowRuntimeEngine) markNodeAndSuccessorsAsExecuted(context runtimeType.IContext, node runtimeType.INode[any]) {
	context.GetState().AddExecutedNode(node)
	for _, successor := range node.GetSuccessors() {
		e.markNodeAndSuccessorsAsExecuted(context, successor)
	}
}

// executeNext executes the next nodes in the workflow
func (e *WorkflowRuntimeEngine) executeNext(context runtimeType.IContext, node runtimeType.INode[any], nextNodes []runtimeType.INode[any]) error {
	// Check for terminating node types
	terminatingNodeTypes := []constant.FlowGramNode{
		constant.FlowGramNodeEnd,
		constant.FlowGramNodeBlockEnd,
		constant.FlowGramNodeBreak,
		constant.FlowGramNodeContinue,
	}

	for _, terminatingType := range terminatingNodeTypes {
		if node.GetType() == terminatingType {
			return nil
		}
	}

	if len(nextNodes) == 0 {
		return fmt.Errorf("node %s has no next nodes", node.GetID())
	}

	// Execute all next nodes concurrently
	errChan := make(chan error, len(nextNodes))
	for _, nextNode := range nextNodes {
		go func(n runtimeType.INode[any]) {
			errChan <- e.ExecuteNode(context, n)
		}(nextNode)
	}

	// Wait for all executions to complete
	for i := 0; i < len(nextNodes); i++ {
		if err := <-errChan; err != nil {
			return err
		}
	}

	return nil
}

// Create is a static factory method to create a new WorkflowRuntimeEngine
func Create(service runtimeType.EngineServices) *WorkflowRuntimeEngine {
	return NewWorkflowRuntimeEngine(service)
}