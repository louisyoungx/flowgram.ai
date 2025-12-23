/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import React from 'react';

import XMarkdown, { type ComponentProps } from '@ant-design/x-markdown';
import { Mermaid, CodeHighlighter } from '@ant-design/x';

import { ToolCallCard } from '../tool-call-card';
import { parseMessageContent } from './message-parser';

import styles from './index.module.css';

const Code: React.FC<ComponentProps> = (props) => {
  const { className, children, block } = props;
  const lang = className?.match(/language-(\w+)/)?.[1] || '';

  if (typeof children !== 'string') return null;

  if (!block) {
    return <code className={styles.inlineCode}>{children}</code>;
  }

  if (lang === 'mermaid') {
    return <Mermaid>{children}</Mermaid>;
  }

  return <CodeHighlighter lang={lang || 'plaintext'}>{children}</CodeHighlighter>;
};

interface MessageContentProps {
  content: string;
}

export const MessageContent: React.FC<MessageContentProps> = ({ content }) => {
  const parts = parseMessageContent(content);

  return (
    <div className={styles.content}>
      {parts.map((part, index) => {
        if (part.type === 'text') {
          return (
            <div key={index} className={styles.text}>
              <XMarkdown components={{ code: Code }}>{part.content || ''}</XMarkdown>
            </div>
          );
        }

        if (part.type === 'tool_call') {
          return (
            <ToolCallCard
              key={part.id || index}
              toolName={part.toolName || ''}
              arguments={part.toolArgs || ''}
              result={part.toolResult}
              defaultOpen={false}
            />
          );
        }

        return null;
      })}
    </div>
  );
};
