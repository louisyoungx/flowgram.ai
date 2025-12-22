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
import { defaultToolRegistry } from '../../plugins/agent-plugin';
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

    // 创建一个空的 assistant 消息用于显示工具调用过程
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

      // 获取所有可用工具
      const tools = defaultToolRegistry.getAllTools();

      // 使用 ReAct Loop 流式执行，带步骤回调
      const finalResponse = await agentService.executeReActLoopStream(conversationHistory, tools, {
        maxIterations: 10,
        onChunk: (chunk) => {
          // 流式更新思考内容
          setMessages((prev) =>
            prev.map((msg) => {
              if (msg.id === assistantMessageId) {
                return { ...msg, content: msg.content + chunk };
              }
              return msg;
            })
          );
        },
        onStep: (step) => {
          // 根据步骤类型更新 UI
          if (step.type === 'thought' && step.content) {
            // 思考已通过 onChunk 流式显示，这里不需要额外操作
            // 只是标记思考阶段完成
          } else if (step.type === 'tool_call') {
            // 使用 XML 格式添加工具调用标记（立即显示）
            const toolCallsXML = step.toolCalls
              .map((tc) => {
                const toolId = tc.id;
                const toolName = tc.function.name;
                const args = tc.function.arguments;
                return `\n\n<tool_call id="${toolId}" name="${toolName}">\n<arguments>\n${args}\n</arguments>\n</tool_call>`;
              })
              .join('');

            // 使用 setState 的函数形式确保立即更新
            setMessages((prev) =>
              prev.map((msg) =>
                msg.id === assistantMessageId
                  ? { ...msg, content: msg.content + toolCallsXML }
                  : msg
              )
            );
          } else if (step.type === 'tool_result') {
            // 更新对应工具调用的结果
            setMessages((prev) =>
              prev.map((msg) => {
                if (msg.id === assistantMessageId) {
                  let updatedContent = msg.content;
                  // 为每个结果更新对应的 tool_call XML
                  for (const result of step.results) {
                    const toolId = result.toolCallId;
                    const resultData = result.result;
                    // 查找并更新对应的 tool_call，在 </arguments> 后添加 <result>
                    updatedContent = updatedContent.replace(
                      new RegExp(
                        `(<tool_call id="${toolId}"[^>]*>\\s*<arguments>[\\s\\S]*?<\\/arguments>)(\\s*<\\/tool_call>)`,
                        'g'
                      ),
                      `$1\n<result>\n${resultData}\n</result>$2`
                    );
                  }
                  return { ...msg, content: updatedContent };
                }
                return msg;
              })
            );
          } else if (step.type === 'response') {
            // 这是最终响应，将在 ReAct Loop 返回后处理
          }
        },
      });

      // ReAct Loop 完成，如果有最终响应且与当前内容不同，追加
      setMessages((prev) =>
        prev.map((msg) => {
          if (msg.id === assistantMessageId) {
            // 检查 finalResponse 是否已经在 content 中
            const needsAppend = finalResponse && !msg.content.includes(finalResponse);
            const newContent = needsAppend ? `${msg.content}\n\n${finalResponse}` : msg.content;
            return { ...msg, content: newContent, status: 'sent' as const };
          }
          return msg;
        })
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
                contentRender: (content: string) => <MessageContent content={content} />,
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
