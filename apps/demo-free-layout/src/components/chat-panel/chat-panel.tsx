/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import React, { useState, useRef, useEffect } from 'react';

import { IconButton } from '@douyinfe/semi-ui';
import { IconClose } from '@douyinfe/semi-icons';
import { Bubble, Sender, Suggestion } from '@ant-design/x';

import { useChatPanel } from '../../plugins/panel-manager-plugin/hooks';
import type { ChatMessage as AgentChatMessage } from '../../plugins/agent-plugin/types';
import { useAgentService } from '../../plugins/agent-plugin/hooks';
import { initialMessages, suggestionQuestions, type ChatMessage } from './init-data';
import './styles.css';

export const ChatPanel: React.FC = () => {
  const { close } = useChatPanel();
  const agentService = useAgentService();
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [streamingMessageId, setStreamingMessageId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

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

    const newUserMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: value,
      timestamp: Date.now(),
      status: 'sent',
    };

    // 添加用户消息
    setMessages((prev) => [...prev, newUserMessage]);
    setInputValue('');
    setIsLoading(true);

    // 立即创建一个空的 assistant 消息用于流式显示
    const assistantMessageId = (Date.now() + 1).toString();
    const assistantMessage: ChatMessage = {
      id: assistantMessageId,
      role: 'assistant',
      content: '',
      timestamp: Date.now(),
      status: 'sending',
    };
    setMessages((prev) => [...prev, assistantMessage]);
    setStreamingMessageId(assistantMessageId);

    try {
      // 构建对话历史（转换为 AgentChatMessage 格式）
      const conversationHistory: AgentChatMessage[] = [
        {
          role: 'system',
          content:
            '你是 FlowGram AI 助手，专门帮助用户创建和编辑流程图。你需要理解用户的需求，并提供清晰的指导和建议。',
        },
        ...messages.map((msg) => ({
          role: msg.role,
          content: msg.content,
        })),
        {
          role: 'user',
          content: value,
        },
      ];

      // 使用流式响应，实时更新消息内容
      let fullContent = '';
      await agentService.streamMessage(conversationHistory, (chunk) => {
        fullContent += chunk;
        // 实时更新 assistant 消息的内容
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === assistantMessageId ? { ...msg, content: fullContent } : msg
          )
        );
      });

      // 流式传输完成后，更新消息状态为 sent
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === assistantMessageId ? { ...msg, status: 'sent' as const } : msg
        )
      );
      setStreamingMessageId(null);
    } catch (error) {
      // 错误处理：更新 assistant 消息为错误状态
      const errorContent =
        error instanceof Error
          ? `抱歉，发生了错误：${error.message}\n\n请检查 API 配置是否正确，或稍后重试。`
          : '抱歉，发生了未知错误，请稍后重试。';

      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === assistantMessageId
            ? { ...msg, content: errorContent, status: 'error' as const }
            : msg
        )
      );
      setStreamingMessageId(null);
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
              content: msg.content || '正在思考...',
              avatar: <span>{msg.role === 'assistant' ? '🤖' : '👤'}</span>,
              loading: msg.status === 'sending' && !msg.content,
              streaming: msg.id === streamingMessageId,
            }))}
            role={{
              assistant: {
                typing: { effect: 'typing', step: 5, interval: 20 },
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
