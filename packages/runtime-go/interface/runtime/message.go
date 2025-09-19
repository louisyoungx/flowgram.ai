/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package runtimeType

type WorkflowMessageType string

const (
	WorkflowMessageTypeLog   WorkflowMessageType = "log"
	WorkflowMessageTypeInfo  WorkflowMessageType = "info"
	WorkflowMessageTypeDebug WorkflowMessageType = "debug"
	WorkflowMessageTypeError WorkflowMessageType = "error"
	WorkflowMessageTypeWarn  WorkflowMessageType = "warning"
)

type MessageData struct {
	Message   string `json:"message"`
	NodeID    string `json:"nodeID,omitempty"`
	Timestamp int64  `json:"timestamp,omitempty"`
}

type IMessage struct {
	ID        string              `json:"id"`
	Type      WorkflowMessageType `json:"type"`
	Timestamp int64               `json:"timestamp"`
	Message   string              `json:"message"`
	NodeID    string              `json:"nodeID,omitempty"`
}

type WorkflowMessages map[WorkflowMessageType][]IMessage

type IMessageCenter interface {
	Init()
	Dispose()
	Log(data MessageData) IMessage
	Info(data MessageData) IMessage
	Debug(data MessageData) IMessage
	Error(data MessageData) IMessage
	Warn(data MessageData) IMessage
	Export() WorkflowMessages
}
