/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import React, { useState, useRef, useEffect } from 'react';

import { IconButton } from '@douyinfe/semi-ui';
import { IconClose } from '@douyinfe/semi-icons';
import { Bubble, Sender, Suggestion } from '@ant-design/x';

import { useChatPanel } from '../../plugins/panel-manager-plugin/hooks';
import type { UIChatMessage } from '../../plugins/agent-plugin/types';
import { useAgentService } from '../../plugins/agent-plugin/hooks';
import { MessageContent } from './message-content';
import { suggestionQuestions } from './init-data';
// @ts-ignore
import './styles.css';

export const ChatPanel: React.FC = () => {
  const { close } = useChatPanel();
  const agentService = useAgentService();
  const [messages, setMessages] = useState<UIChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // 监听 service 的消息变化
  useEffect(() => {
    // 初始化时获取消息
    setMessages(agentService.getMessages());

    // 订阅消息变化
    const disposable = agentService.onMessagesChange((newMessages) => {
      setMessages(newMessages);
    });

    return () => {
      disposable.dispose();
    };
  }, [agentService]);

  // 自动滚动到底部
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // 发送消息到 AI
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

  // 处理快捷建议点击
  const handleSuggestionClick = (suggestion: string) => {
    handleSend(suggestion);
  };

  return (
    <div className="chat-panel">
      <div className="chat-panel-header">
        <h3>FlowGram AI 助手</h3>
        <IconButton
          type="tertiary"
          theme="borderless"
          icon={<IconClose />}
          onClick={() => close()}
        />
      </div>

      <div className="chat-panel-content">
        <div className="chat-messages">
          <Bubble.List
            items={messages.map((msg) => ({
              key: msg.id,
              role: msg.role,
              content: msg.content || '正在思考...',
              loading: msg.status === 'sending' && !msg.content,
              streaming: msg.status === 'sending',
            }))}
            role={{
              assistant: {
                placement: 'start',
                typing: { effect: 'typing', step: 5, interval: 20 },
                contentRender: (content: string) => <MessageContent content={content} />,
                variant: 'filled',
                styles: {
                  // @ts-ignore
                  bubble: {
                    paddingInlineEnd: 0,
                  },
                  content: {
                    background: 'transparent',
                    padding: 0,
                  },
                },
              },
              user: {
                placement: 'end',
                variant: 'filled',
              },
            }}
          />
          <div ref={messagesEndRef} />
        </div>

        {messages.length <= 1 && (
          <div className="chat-suggestions">
            <Suggestion
              items={suggestionQuestions.map((text, index) => ({
                key: index.toString(),
                label: text,
                value: text,
              }))}
              onSelect={(value) => handleSuggestionClick(value)}
            />
          </div>
        )}

        <div className="chat-sender">
          <Sender
            placeholder="输入消息..."
            value={inputValue}
            onChange={setInputValue}
            onSubmit={handleSend}
            disabled={isLoading}
            loading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};
