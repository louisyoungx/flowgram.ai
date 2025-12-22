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
import { defaultToolRegistry, WorkflowAgentUtils } from '../../plugins/agent-plugin';
import { MessageContent } from './message-content';
import { initialMessages, suggestionQuestions } from './init-data';
// @ts-ignore
import './styles.css';

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

  // 发送消息到 AI (使用 ReAct Loop)
  const handleSend = async (value: string) => {
    if (!value.trim() || isLoading) return;

    // 使用 service 创建用户消息
    const newUserMessage = WorkflowAgentUtils.createUserMessage(value);
    setMessages((prev) => [...prev, newUserMessage]);
    setInputValue('');
    setIsLoading(true);

    // 使用 service 创建 assistant 消息
    const assistantMessage = WorkflowAgentUtils.createAssistantMessage();
    const assistantMessageId = assistantMessage.id;
    setMessages((prev) => [...prev, assistantMessage]);
    setStreamingMessageId(assistantMessageId);

    try {
      // 构建对话历史
      const conversationHistory = agentService.buildConversationHistory(messages, value);
      const tools = defaultToolRegistry.getAllTools();

      // 使用 ReAct Loop 流式执行
      const finalResponse = await agentService.executeReActLoopStream(conversationHistory, tools, {
        maxIterations: 10,
        onChunk: (chunk) => {
          // 流式更新思考内容
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === assistantMessageId ? { ...msg, content: msg.content + chunk } : msg
            )
          );
        },
        onStep: (step) => {
          if (step.type === 'tool_call') {
            // 使用 service 格式化工具调用为 XML
            const toolCallsXML = WorkflowAgentUtils.formatToolCallsToXML(step.toolCalls);
            setMessages((prev) =>
              prev.map((msg) =>
                msg.id === assistantMessageId
                  ? { ...msg, content: msg.content + toolCallsXML }
                  : msg
              )
            );
          } else if (step.type === 'tool_result') {
            // 使用 service 更新工具调用结果
            setMessages((prev) =>
              prev.map((msg) => {
                if (msg.id === assistantMessageId) {
                  const updatedContent = WorkflowAgentUtils.updateToolCallResults(
                    msg.content,
                    step.results
                  );
                  return { ...msg, content: updatedContent };
                }
                return msg;
              })
            );
          }
        },
      });

      // ReAct Loop 完成，更新最终状态
      setMessages((prev) =>
        prev.map((msg) => {
          if (msg.id === assistantMessageId) {
            const needsAppend = finalResponse && !msg.content.includes(finalResponse);
            const newContent = needsAppend ? `${msg.content}\n\n${finalResponse}` : msg.content;
            return { ...msg, content: newContent, status: 'sent' as const };
          }
          return msg;
        })
      );
      setStreamingMessageId(null);
    } catch (error) {
      // 使用 service 格式化错误消息
      const errorContent = WorkflowAgentUtils.formatErrorMessage(error);
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
              loading: msg.status === 'sending' && !msg.content,
              streaming: msg.id === streamingMessageId,
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
