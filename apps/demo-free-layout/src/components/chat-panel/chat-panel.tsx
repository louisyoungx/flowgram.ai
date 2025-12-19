/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import React, { useState, useRef, useEffect } from 'react';

import { IconButton } from '@douyinfe/semi-ui';
import { IconClose } from '@douyinfe/semi-icons';
import XMarkdown, { type ComponentProps } from '@ant-design/x-markdown';
import { Bubble, Sender, Suggestion, Mermaid } from '@ant-design/x';

import { useChatPanel } from '../../plugins/panel-manager-plugin/hooks';
import type { ChatMessage as AgentChatMessage } from '../../plugins/agent-plugin/types';
import { useAgentService } from '../../plugins/agent-plugin/hooks';
import { initialMessages, suggestionQuestions, type ChatMessage } from './init-data';
import './styles.css';

// 自定义 Code 组件，用于渲染 Mermaid 图表
const Code: React.FC<ComponentProps> = (props) => {
  const { className, children } = props;
  const lang = className?.match(/language-(\w+)/)?.[1] || '';

  if (typeof children !== 'string') return null;
  if (lang === 'mermaid') {
    return <Mermaid>{children}</Mermaid>;
  }
  return <code className={className}>{children}</code>;
};

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
            '你是 FlowGram AI 助手，专门帮助用户创建和编辑流程图。\n\n## 核心职责\n- 理解用户需求，提供清晰的流程图设计指导\n- 帮助用户优化流程图结构和布局\n- 解答 FlowGram 使用相关问题\n\n## 回复要求\n**必须使用 Markdown 格式回复**，确保内容结构清晰、易读：\n- 使用标题（#、##、###）组织内容层次\n- 使用列表（-、1.）列举要点\n- 使用代码块（```）展示代码或配置\n- 使用 **粗体** 强调重点\n- 使用表格整理对比信息\n\n## Mermaid 流程图绘制\n**系统已集成 Mermaid 渲染引擎**，你可以直接绘制流程图来可视化说明：\n\n当需要展示流程、关系或结构时，使用 Mermaid 代码块：\n```mermaid\ngraph TD\n    A[开始] --> B{条件判断}\n    B -->|是| C[执行操作]\n    B -->|否| D[结束]\n    C --> D\n```\n\n支持的图表类型包括：flowchart/graph（流程图）、sequenceDiagram（时序图）、classDiagram（类图）、stateDiagram（状态图）等。\n\n**优先使用 Mermaid 图表**来直观展示流程逻辑，让用户更容易理解。\n\n保持回复简洁、专业、友好。',
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
