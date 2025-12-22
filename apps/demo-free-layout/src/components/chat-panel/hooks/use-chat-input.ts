/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { useState } from 'react';

import { useAgentService } from '../../../plugins/agent-plugin';

export const useChatInput = () => {
  const agentService = useAgentService();
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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

  return {
    inputValue,
    setInputValue,
    isLoading,
    handleSend,
  };
};
