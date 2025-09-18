/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package runtimeType

// ContextData defines the data structure for runtime context
type ContextData struct {
	cache          ICache
	variableStore  IVariableStore
	state          IState
	document       IDocument
	ioCenter       IIOCenter
	snapshotCenter ISnapshotCenter
	statusCenter   IStatusCenter
	messageCenter  IMessageCenter
	reporter       IReporter
}

// Getter methods for ContextData
func (c *ContextData) GetCache() ICache { return c.cache }
func (c *ContextData) GetVariableStore() IVariableStore { return c.variableStore }
func (c *ContextData) GetState() IState { return c.state }
func (c *ContextData) GetDocument() IDocument { return c.document }
func (c *ContextData) GetIOCenter() IIOCenter { return c.ioCenter }
func (c *ContextData) GetSnapshotCenter() ISnapshotCenter { return c.snapshotCenter }
func (c *ContextData) GetStatusCenter() IStatusCenter { return c.statusCenter }
func (c *ContextData) GetMessageCenter() IMessageCenter { return c.messageCenter }
func (c *ContextData) GetReporter() IReporter { return c.reporter }

// IContext defines the interface for runtime context
type IContext interface {
	// Embed all fields from ContextData
	GetCache() ICache
	GetVariableStore() IVariableStore
	GetState() IState
	GetDocument() IDocument
	GetIOCenter() IIOCenter
	GetSnapshotCenter() ISnapshotCenter
	GetStatusCenter() IStatusCenter
	GetMessageCenter() IMessageCenter
	GetReporter() IReporter

	// IContext specific methods
	GetID() string
	Init(params InvokeParams)
	Dispose()
	Sub() IContext
}
