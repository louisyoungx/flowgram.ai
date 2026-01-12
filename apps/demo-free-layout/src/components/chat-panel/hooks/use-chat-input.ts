/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { useState, useMemo } from 'react';

import { useAgentService } from '../../../plugins/agent-plugin';
import { useChatMessages } from './use-chat-messages';

export const useChatInput = () => {
  const agentService = useAgentService();
  const messages = useChatMessages();
  const [value, setValue] = useState('');

  const isLoading = useMemo(() => {
    if (messages.length === 0) return false;
    const lastMessage = messages[messages.length - 1];
    return lastMessage.role === 'assistant' && lastMessage.status === 'sending';
  }, [messages]);

  const send = (inputValue: string) => {
    if (!inputValue.trim() || isLoading) return;
    setValue('');
    agentService.sendMessage(inputValue);
  };

  const cancel = () => {
    agentService.cancelCurrentRequest();
  };

  return {
    value,
    setValue,
    isLoading,
    send,
    cancel,
  };
};
