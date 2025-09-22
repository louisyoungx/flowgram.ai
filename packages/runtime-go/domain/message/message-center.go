/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package message

import (
	runtimeType "flowgram-runtime-go/interface/runtime"
)

type WorkflowRuntimeMessageCenter struct {
	messages runtimeType.WorkflowMessages
}

func (c *WorkflowRuntimeMessageCenter) Init() {
	c.messages = runtimeType.WorkflowMessages{
		runtimeType.WorkflowMessageTypeLog:   []runtimeType.IMessage{},
		runtimeType.WorkflowMessageTypeInfo:  []runtimeType.IMessage{},
		runtimeType.WorkflowMessageTypeDebug: []runtimeType.IMessage{},
		runtimeType.WorkflowMessageTypeError: []runtimeType.IMessage{},
		runtimeType.WorkflowMessageTypeWarn:  []runtimeType.IMessage{},
	}
}

func (c *WorkflowRuntimeMessageCenter) Dispose() {}

func (c *WorkflowRuntimeMessageCenter) Log(data runtimeType.MessageData) runtimeType.IMessage {
	message := CreateMessage(runtimeType.WorkflowMessageTypeLog, data)
	c.messages[runtimeType.WorkflowMessageTypeLog] = append(c.messages[runtimeType.WorkflowMessageTypeLog], message)
	return message
}

func (c *WorkflowRuntimeMessageCenter) Info(data runtimeType.MessageData) runtimeType.IMessage {
	message := CreateMessage(runtimeType.WorkflowMessageTypeInfo, data)
	c.messages[runtimeType.WorkflowMessageTypeInfo] = append(c.messages[runtimeType.WorkflowMessageTypeInfo], message)
	return message
}

func (c *WorkflowRuntimeMessageCenter) Debug(data runtimeType.MessageData) runtimeType.IMessage {
	message := CreateMessage(runtimeType.WorkflowMessageTypeDebug, data)
	c.messages[runtimeType.WorkflowMessageTypeDebug] = append(c.messages[runtimeType.WorkflowMessageTypeDebug], message)
	return message
}

func (c *WorkflowRuntimeMessageCenter) Error(data runtimeType.MessageData) runtimeType.IMessage {
	message := CreateMessage(runtimeType.WorkflowMessageTypeError, data)
	c.messages[runtimeType.WorkflowMessageTypeError] = append(c.messages[runtimeType.WorkflowMessageTypeError], message)
	return message
}

func (c *WorkflowRuntimeMessageCenter) Warn(data runtimeType.MessageData) runtimeType.IMessage {
	message := CreateMessage(runtimeType.WorkflowMessageTypeWarn, data)
	c.messages[runtimeType.WorkflowMessageTypeWarn] = append(c.messages[runtimeType.WorkflowMessageTypeWarn], message)
	return message
}

func (c *WorkflowRuntimeMessageCenter) Export() runtimeType.WorkflowMessages {
	// Create a deep copy of the messages
	result := runtimeType.WorkflowMessages{
		runtimeType.WorkflowMessageTypeLog:   make([]runtimeType.IMessage, len(c.messages[runtimeType.WorkflowMessageTypeLog])),
		runtimeType.WorkflowMessageTypeInfo:  make([]runtimeType.IMessage, len(c.messages[runtimeType.WorkflowMessageTypeInfo])),
		runtimeType.WorkflowMessageTypeDebug: make([]runtimeType.IMessage, len(c.messages[runtimeType.WorkflowMessageTypeDebug])),
		runtimeType.WorkflowMessageTypeError: make([]runtimeType.IMessage, len(c.messages[runtimeType.WorkflowMessageTypeError])),
		runtimeType.WorkflowMessageTypeWarn:  make([]runtimeType.IMessage, len(c.messages[runtimeType.WorkflowMessageTypeWarn])),
	}

	copy(result[runtimeType.WorkflowMessageTypeLog], c.messages[runtimeType.WorkflowMessageTypeLog])
	copy(result[runtimeType.WorkflowMessageTypeInfo], c.messages[runtimeType.WorkflowMessageTypeInfo])
	copy(result[runtimeType.WorkflowMessageTypeDebug], c.messages[runtimeType.WorkflowMessageTypeDebug])
	copy(result[runtimeType.WorkflowMessageTypeError], c.messages[runtimeType.WorkflowMessageTypeError])
	copy(result[runtimeType.WorkflowMessageTypeWarn], c.messages[runtimeType.WorkflowMessageTypeWarn])

	return result
}

// NewWorkflowRuntimeMessageCenter creates a new WorkflowRuntimeMessageCenter instance
func NewWorkflowRuntimeMessageCenter() *WorkflowRuntimeMessageCenter {
	center := &WorkflowRuntimeMessageCenter{}
	center.Init()
	return center
}
