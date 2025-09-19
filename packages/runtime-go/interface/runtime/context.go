/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package runtimeType

// ContextData defines the data structure for runtime context
type ContextData struct {
	Cache          ICache
	VariableStore  IVariableStore
	State          IState
	Document       IDocument
	IOCenter       IIOCenter
	SnapshotCenter ISnapshotCenter
	StatusCenter   IStatusCenter
	MessageCenter  IMessageCenter
	Reporter       IReporter
}

// Getter methods for ContextData
func (c *ContextData) GetCache() ICache                   { return c.Cache }
func (c *ContextData) GetVariableStore() IVariableStore   { return c.VariableStore }
func (c *ContextData) GetState() IState                   { return c.State }
func (c *ContextData) GetDocument() IDocument             { return c.Document }
func (c *ContextData) GetIOCenter() IIOCenter             { return c.IOCenter }
func (c *ContextData) GetSnapshotCenter() ISnapshotCenter { return c.SnapshotCenter }
func (c *ContextData) GetStatusCenter() IStatusCenter     { return c.StatusCenter }
func (c *ContextData) GetMessageCenter() IMessageCenter   { return c.MessageCenter }
func (c *ContextData) GetReporter() IReporter             { return c.Reporter }

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
