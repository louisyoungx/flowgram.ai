/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import React, { useRef, useEffect } from 'react';

import { IconComment } from '@douyinfe/semi-icons';
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
      <Bubble.List
        items={messages.map((msg) => {
          const hasToolCall = msg.content.includes('<tool_call');
          return {
            key: msg.id,
            role: msg.role,
            content: msg.content || '正在思考...',
            loading: msg.status === 'sending' && !msg.content,
            streaming: msg.status === 'sending' && !hasToolCall,
          };
        })}
        role={{
          assistant: {
            placement: 'start',
            typing: { effect: 'typing', step: 5, interval: 20 },
            contentRender: (content: string, item: any) => {
              const msg = messages.find((m) => m.id === item.key);
              const isCompleted = msg?.status === 'sent';
              return (
                <MessageContent content={content} isCompleted={isCompleted} messageId={item.key} />
              );
            },
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
          },
        }}
      />
      <div ref={messagesEndRef} />
    </div>
  );
};
