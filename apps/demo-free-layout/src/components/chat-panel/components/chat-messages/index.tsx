/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import React, { useRef, useEffect } from 'react';

import { Bubble } from '@ant-design/x';

import { MessageContent } from '../message-content';
import type { UIChatMessage } from '../../../../plugins/agent-plugin/types';

import styles from './index.module.css';

interface ChatMessagesProps {
  messages: UIChatMessage[];
}

export const ChatMessages: React.FC<ChatMessagesProps> = ({ messages }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className={styles.messages}>
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
  );
};
