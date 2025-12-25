/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import React, { useRef, useEffect, useCallback } from 'react';

import { IconComment } from '@douyinfe/semi-icons';
import { Bubble } from '@ant-design/x';

import { MessageContent } from '../message-content';
import { ChatInput } from '../chat-input';
import type { UIChatMessage } from '../../../../plugins/agent-plugin/types';

import styles from './index.module.css';

interface ChatMessagesProps {
  messages: UIChatMessage[];
  editingMessageId?: string | null;
  onEditMessage?: (messageId: string, content: string) => void;
  editInputValue?: string;
  onEditInputChange?: (value: string) => void;
  onEditSubmit?: (value: string) => void;
  onEditCancel?: () => void;
  isLoading?: boolean;
}

export const ChatMessages: React.FC<ChatMessagesProps> = ({
  messages,
  editingMessageId,
  onEditMessage,
  editInputValue = '',
  onEditInputChange = () => {},
  onEditSubmit = () => {},
  onEditCancel = () => {},
  isLoading = false,
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const editInputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (!editingMessageId) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (editInputRef.current && !editInputRef.current.contains(event.target as Node)) {
        onEditCancel();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [editingMessageId, onEditCancel]);

  if (messages.length === 0) {
    return (
      <div className={styles.messages}>
        <div className={styles.emptyState}>
          <div className={styles.emptyContent}>
            <div className={styles.emptyIcon}>
              <IconComment style={{ fontSize: '64px' }} />
            </div>
            <div className={styles.emptyTitle}>你好！我是 FlowGram AI 助手</div>
            <div className={styles.emptyDescription}>
              我可以帮你创建和编辑流程图,
              <br />
              有什么我可以帮助你的吗？
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.messages}>
      {messages.map((msg, index) => {
        if (msg.id === editingMessageId) {
          return (
            <div key={msg.id} style={{ marginBottom: '16px' }} ref={editInputRef}>
              <ChatInput
                value={editInputValue}
                onChange={onEditInputChange}
                onSubmit={onEditSubmit}
                onCancel={onEditCancel}
                loading={isLoading}
              />
            </div>
          );
        }

        const hasToolCall = msg.content.includes('<tool_call');
        const isCompleted = msg.status === 'sent';

        return (
          <Bubble.List
            key={msg.id}
            items={[
              {
                key: msg.id,
                role: msg.role,
                content: msg.content || '正在思考...',
                loading: msg.status === 'sending' && !msg.content,
                streaming: msg.status === 'sending' && !hasToolCall,
              },
            ]}
            role={{
              assistant: {
                placement: 'start',
                typing: { effect: 'typing', step: 5, interval: 20 },
                contentRender: (content: string) => (
                  <MessageContent content={content} isCompleted={isCompleted} messageId={msg.id} />
                ),
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
                  body: {
                    width: '100%',
                  },
                },
              },
              user: {
                placement: 'end',
                variant: 'filled',
                contentRender: (content: string) => (
                  <div
                    onClick={() => {
                      if (onEditMessage) {
                        onEditMessage(msg.id, msg.content);
                      }
                    }}
                    style={{ cursor: 'pointer' }}
                  >
                    {content}
                  </div>
                ),
              },
            }}
          />
        );
      })}
      <div ref={messagesEndRef} />
    </div>
  );
};
