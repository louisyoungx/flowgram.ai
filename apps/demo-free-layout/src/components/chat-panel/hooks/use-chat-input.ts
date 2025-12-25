/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { useState } from 'react';

import { useAgentService } from '../../../plugins/agent-plugin';

export const useChatInput = () => {
  const agentService = useAgentService();
  const [inputValue, setInputValue] = useState('');
  const [editInputValue, setEditInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [editingMessageId, setEditingMessageId] = useState<string | null>(null);

  const handleSend = async (value: string) => {
    if (!value.trim() || isLoading) return;

    setInputValue('');
    setIsLoading(true);

    try {
      await agentService.sendMessage(value);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditSend = async (value: string) => {
    if (!value.trim() || isLoading || !editingMessageId) return;

    setIsLoading(true);

    try {
      await agentService.editAndResendMessage(editingMessageId, value);
      setEditingMessageId(null);
      setEditInputValue('');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    if (isLoading) {
      agentService.cancelCurrentRequest();
      setIsLoading(false);
    }
  };

  const handleEditCancel = () => {
    setEditingMessageId(null);
    setEditInputValue('');
  };

  const startEditMessage = (messageId: string, content: string) => {
    setEditingMessageId(messageId);
    setEditInputValue(content);
  };

  return {
    inputValue,
    setInputValue,
    editInputValue,
    setEditInputValue,
    isLoading,
    handleSend,
    handleEditSend,
    handleCancel,
    handleEditCancel,
    editingMessageId,
    startEditMessage,
  };
};
