/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import React, { useState, useRef, useEffect } from 'react';

import { IconButton } from '@douyinfe/semi-ui';
import { IconClose } from '@douyinfe/semi-icons';
import XMarkdown, { type ComponentProps } from '@ant-design/x-markdown';
import { Bubble, Sender, Suggestion, Mermaid, CodeHighlighter } from '@ant-design/x';

import { useChatPanel } from '../../plugins/panel-manager-plugin/hooks';
import type { UIChatMessage } from '../../plugins/agent-plugin/types';
import { useAgentService } from '../../plugins/agent-plugin/hooks';
import { initialMessages, suggestionQuestions } from './init-data';
import './styles.css';

// 自定义 Code 组件，用于渲染代码高亮和 Mermaid 图表
const Code: React.FC<ComponentProps> = (props) => {
  const { className, children } = props;
  const lang = className?.match(/language-(\w+)/)?.[1] || '';

  if (typeof children !== 'string') return null;

  // Mermaid 图表特殊处理
  if (lang === 'mermaid') {
    return <Mermaid>{children}</Mermaid>;
  }

  // 使用 CodeHighlighter 渲染代码块
  return <CodeHighlighter lang={lang || 'plaintext'}>{children}</CodeHighlighter>;
};

export const ChatPanel: React.FC = () => {
  const { close } = useChatPanel();
  const agentService = useAgentService();
  const [messages, setMessages] = useState<UIChatMessage[]>(initialMessages);
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

    const newUserMessage: UIChatMessage = {
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
    const assistantMessage: UIChatMessage = {
      id: assistantMessageId,
      role: 'assistant',
      content: '',
      timestamp: Date.now(),
      status: 'sending',
    };
    setMessages((prev) => [...prev, assistantMessage]);
    setStreamingMessageId(assistantMessageId);

    try {
      // 使用 service 层的方法构建对话历史
      const conversationHistory = agentService.buildConversationHistory(messages, value);

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
              avatar: <span>{msg.role === 'assistant' ? '🤖' : '👤'}</span>,
              loading: msg.status === 'sending' && !msg.content,
              streaming: msg.id === streamingMessageId,
            }))}
            role={{
              assistant: {
                typing: { effect: 'typing', step: 5, interval: 20 },
                contentRender: (content: string) => (
                  <XMarkdown components={{ code: Code }}>{content}</XMarkdown>
                ),
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
