/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { useState, useEffect } from 'react';

import type { UIMessage } from '../../../plugins/agent-plugin/types';
import { useAgentService } from '../../../plugins/agent-plugin/hooks';

export const useChatMessages = (): UIMessage[] => {
  const agentService = useAgentService();
  const [messages, setMessages] = useState<UIMessage[]>([]);

  useEffect(() => {
    // 初始化时获取消息
    setMessages(agentService.getUIMessages());

    // 订阅消息变化
    const disposable = agentService.onUIMessagesChange((newMessages) => {
      setMessages(newMessages);
    });

    return () => {
      disposable.dispose();
    };
  }, [agentService]);

  return messages;
};
