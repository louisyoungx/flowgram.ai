/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { useState } from 'react';

import { useAgentService } from '../../../plugins/agent-plugin';

export const useChatEdit = () => {
  const agentService = useAgentService();
  const [editingMessageId, setEditingMessageId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const startEdit = (messageId: string, content: string) => {
    setEditingMessageId(messageId);
    setEditValue(content);
  };

  const cancelEdit = () => {
    setEditingMessageId(null);
    setEditValue('');
  };

  const submitEdit = async (value: string) => {
    if (!value.trim() || isLoading || !editingMessageId) return;

    setIsLoading(true);

    try {
      await agentService.editAndResendMessage(editingMessageId, value);
      cancelEdit();
    } finally {
      setIsLoading(false);
    }
  };

  return {
    editingMessageId,
    editValue,
    setEditValue,
    isLoading,
    startEdit,
    cancelEdit,
    submitEdit,
  };
};
