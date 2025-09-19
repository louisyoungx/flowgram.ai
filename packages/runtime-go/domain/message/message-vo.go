/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package message

import (
	"flowgram-runtime-go/infrastructure/utils"
	runtimeType "flowgram-runtime-go/interface/runtime"
	"time"
)

type CreateMessageParams struct {
	Message   string                          `json:"message"`
	NodeID    string                          `json:"nodeID,omitempty"`
	Timestamp int64                           `json:"timestamp,omitempty"`
	Type      runtimeType.WorkflowMessageType `json:"type,omitempty"`
}

func CreateMessage(messageType runtimeType.WorkflowMessageType, data runtimeType.MessageData) runtimeType.IMessage {
	message := runtimeType.IMessage{
		ID:        utils.UUID(),
		Type:      messageType,
		Timestamp: data.Timestamp,
		Message:   data.Message,
		NodeID:    data.NodeID,
	}

	if message.Timestamp == 0 {
		message.Timestamp = time.Now().UnixMilli()
	}

	return message
}
