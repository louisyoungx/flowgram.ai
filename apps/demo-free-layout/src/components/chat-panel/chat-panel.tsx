/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import React, { useState, useRef, useEffect } from 'react';

import { IconButton } from '@douyinfe/semi-ui';
import { IconClose } from '@douyinfe/semi-icons';
import { Bubble, Sender, Suggestion } from '@ant-design/x';

import { useChatPanel } from '../../plugins/panel-manager-plugin/hooks';
import { mockMessages, mockSuggestions, type ChatMessage } from './mock-data';
import './styles.css';

export const ChatPanel: React.FC = () => {
  const { close } = useChatPanel();
  const [messages, setMessages] = useState<ChatMessage[]>(mockMessages);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // 自动滚动到底部
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // 模拟发送消息
  const handleSend = (value: string) => {
    if (!value.trim() || isLoading) return;

    const newUserMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: value,
      timestamp: Date.now(),
      status: 'sent',
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInputValue('');
    setIsLoading(true);

    // 模拟 AI 响应延迟
    setTimeout(() => {
      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `收到你的消息："${value}"。这是一个模拟回复，实际的 AI 响应将在接入真实 API 后实现。`,
        timestamp: Date.now(),
        status: 'sent',
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1000);
  };

  // 处理快捷建议点击
  const handleSuggestionClick = (suggestion: string) => {
    handleSend(suggestion);
  };

  return (
    <div className="chat-panel">
      <div className="chat-panel-header">
        <h3>AI 助手</h3>
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
              content: msg.content,
              avatar: <span>{msg.role === 'assistant' ? '🤖' : '👤'}</span>,
            }))}
          />
          {isLoading && (
            <Bubble role="assistant" avatar={<span>🤖</span>} content="正在思考..." loading />
          )}
          <div ref={messagesEndRef} />
        </div>

        {messages.length <= 2 && (
          <div className="chat-suggestions">
            <Suggestion
              items={mockSuggestions.map((text, index) => ({
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
