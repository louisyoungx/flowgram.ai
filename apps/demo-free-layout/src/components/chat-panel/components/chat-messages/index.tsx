/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import React, { useRef, useEffect } from 'react';

import { Bubble } from '@ant-design/x';

import { MessageContent } from '../message-content';
import { ChatInput } from '../chat-input';
import { useChatEdit } from '../../hooks';
import type { UIChatMessage } from '../../../../plugins/agent-plugin/types';

import styles from './index.module.css';

interface ChatMessagesProps {
  messages: UIChatMessage[];
}

export const ChatMessages: React.FC<ChatMessagesProps> = ({ messages }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const editInputRef = useRef<HTMLDivElement>(null);
  const {
    editingMessageId,
    editValue,
    setEditValue,
    isLoading,
    startEdit,
    cancelEdit,
    submitEdit,
  } = useChatEdit();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (!editingMessageId) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (editInputRef.current && !editInputRef.current.contains(event.target as Node)) {
        cancelEdit();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [editingMessageId, cancelEdit]);

  return (
    <div className={styles.messages}>
      {messages.map((msg, index) => {
        if (msg.id === editingMessageId) {
          return (
            <div key={msg.id} style={{ marginBottom: '16px' }} ref={editInputRef}>
              <ChatInput
                value={editValue}
                onChange={setEditValue}
                onSubmit={submitEdit}
                onCancel={cancelEdit}
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
                  <div onClick={() => startEdit(msg.id, msg.content)} style={{ cursor: 'pointer' }}>
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
