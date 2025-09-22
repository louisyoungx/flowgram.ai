/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package context

import (
	"flowgram-runtime-go/domain/cache"
	"flowgram-runtime-go/domain/document"
	ioCenter "flowgram-runtime-go/domain/io-center"
	"flowgram-runtime-go/domain/message"
	"flowgram-runtime-go/domain/report"
	"flowgram-runtime-go/domain/snapshot"
	"flowgram-runtime-go/domain/state"
	"flowgram-runtime-go/domain/status"
	"flowgram-runtime-go/domain/variable"
	"flowgram-runtime-go/infrastructure/utils"
	runtimeType "flowgram-runtime-go/interface/runtime"
)

// WorkflowRuntimeContext implements IContext interface
type WorkflowRuntimeContext struct {
	id             string
	cache          runtimeType.ICache
	document       runtimeType.IDocument
	variableStore  runtimeType.IVariableStore
	state          runtimeType.IState
	ioCenter       runtimeType.IIOCenter
	snapshotCenter runtimeType.ISnapshotCenter
	statusCenter   runtimeType.IStatusCenter
	messageCenter  runtimeType.IMessageCenter
	reporter       runtimeType.IReporter
	subContexts    []runtimeType.IContext
}

// NewWorkflowRuntimeContext creates a new WorkflowRuntimeContext instance
func NewWorkflowRuntimeContext(data runtimeType.ContextData) *WorkflowRuntimeContext {
	return &WorkflowRuntimeContext{
		id:             utils.UUID(),
		cache:          data.Cache,
		document:       data.Document,
		variableStore:  data.VariableStore,
		state:          data.State,
		ioCenter:       data.IOCenter,
		snapshotCenter: data.SnapshotCenter,
		statusCenter:   data.StatusCenter,
		messageCenter:  data.MessageCenter,
		reporter:       data.Reporter,
		subContexts:    make([]runtimeType.IContext, 0),
	}
}

// GetID returns the unique identifier of the context
func (w *WorkflowRuntimeContext) GetID() string {
	return w.id
}

// GetCache returns the cache instance
func (w *WorkflowRuntimeContext) GetCache() runtimeType.ICache {
	return w.cache
}

// GetDocument returns the document instance
func (w *WorkflowRuntimeContext) GetDocument() runtimeType.IDocument {
	return w.document
}

// GetVariableStore returns the variable store instance
func (w *WorkflowRuntimeContext) GetVariableStore() runtimeType.IVariableStore {
	return w.variableStore
}

// GetState returns the state instance
func (w *WorkflowRuntimeContext) GetState() runtimeType.IState {
	return w.state
}

// GetIOCenter returns the IO center instance
func (w *WorkflowRuntimeContext) GetIOCenter() runtimeType.IIOCenter {
	return w.ioCenter
}

// GetSnapshotCenter returns the snapshot center instance
func (w *WorkflowRuntimeContext) GetSnapshotCenter() runtimeType.ISnapshotCenter {
	return w.snapshotCenter
}

// GetStatusCenter returns the status center instance
func (w *WorkflowRuntimeContext) GetStatusCenter() runtimeType.IStatusCenter {
	return w.statusCenter
}

// GetMessageCenter returns the message center instance
func (w *WorkflowRuntimeContext) GetMessageCenter() runtimeType.IMessageCenter {
	return w.messageCenter
}

// GetReporter returns the reporter instance
func (w *WorkflowRuntimeContext) GetReporter() runtimeType.IReporter {
	return w.reporter
}

// Init initializes all components with the given parameters
func (w *WorkflowRuntimeContext) Init(params runtimeType.InvokeParams) {
	w.cache.Init()
	w.document.Init(params.Schema)
	w.variableStore.Init()
	w.state.Init(&params.Schema)
	w.ioCenter.Init(params.Inputs)
	w.snapshotCenter.Init()
	w.statusCenter.Init()
	w.messageCenter.Init()
	w.reporter.Init()
}

// Dispose cleans up all resources
func (w *WorkflowRuntimeContext) Dispose() {
	// Dispose all sub contexts first
	for _, subContext := range w.subContexts {
		subContext.Dispose()
	}
	w.subContexts = make([]runtimeType.IContext, 0)

	// Dispose all components
	w.cache.Dispose()
	w.document.Dispose()
	w.variableStore.Dispose()
	w.state.Dispose()
	w.ioCenter.Dispose()
	w.snapshotCenter.Dispose()
	w.statusCenter.Dispose()
	w.messageCenter.Dispose()
	w.reporter.Dispose()
}

// Sub creates a sub-context with shared components
func (w *WorkflowRuntimeContext) Sub() runtimeType.IContext {
	// Create new cache and variable store for sub context
	subCache := cache.NewWorkflowRuntimeCache()
	subVariableStore := variable.NewWorkflowRuntimeVariableStore()
	subVariableStore.SetParent(w.variableStore)
	subState := state.NewWorkflowRuntimeState(subVariableStore)

	// Create context data for sub context
	contextData := runtimeType.ContextData{
		Cache:          subCache,
		Document:       w.document,       // Shared
		IOCenter:       w.ioCenter,       // Shared
		SnapshotCenter: w.snapshotCenter, // Shared
		StatusCenter:   w.statusCenter,   // Shared
		MessageCenter:  w.messageCenter,  // Shared
		Reporter:       w.reporter,       // Shared
		VariableStore:  subVariableStore,
		State:          subState,
	}

	// Create sub context
	subContext := NewWorkflowRuntimeContext(contextData)
	w.subContexts = append(w.subContexts, subContext)

	// Initialize sub context components
	subContext.cache.Init()
	subContext.variableStore.Init()
	subContext.state.Init(nil)

	return subContext
}

// Create creates a new WorkflowRuntimeContext with all components initialized
func Create() runtimeType.IContext {
	// Create all components
	contextCache := cache.NewWorkflowRuntimeCache()
	contextDocument := document.NewWorkflowRuntimeDocument()
	contextVariableStore := variable.NewWorkflowRuntimeVariableStore()
	contextState := state.NewWorkflowRuntimeState(contextVariableStore)
	contextIOCenter := ioCenter.NewWorkflowRuntimeIOCenter()
	contextSnapshotCenter := snapshot.NewWorkflowRuntimeSnapshotCenter()
	contextStatusCenter := status.NewWorkflowRuntimeStatusCenter()
	contextMessageCenter := message.NewWorkflowRuntimeMessageCenter()
	contextReporter := report.NewWorkflowRuntimeReporter(
		contextIOCenter,
		contextSnapshotCenter,
		contextStatusCenter,
		contextMessageCenter,
	)

	// Create context data
	contextData := runtimeType.ContextData{
		Cache:          contextCache,
		Document:       contextDocument,
		VariableStore:  contextVariableStore,
		State:          contextState,
		IOCenter:       contextIOCenter,
		SnapshotCenter: contextSnapshotCenter,
		StatusCenter:   contextStatusCenter,
		MessageCenter:  contextMessageCenter,
		Reporter:       contextReporter,
	}

	return NewWorkflowRuntimeContext(contextData)
}
