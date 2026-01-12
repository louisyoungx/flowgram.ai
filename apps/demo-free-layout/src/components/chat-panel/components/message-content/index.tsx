/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import React from 'react';

import XMarkdown, { type ComponentProps } from '@ant-design/x-markdown';
import { Mermaid, CodeHighlighter } from '@ant-design/x';

import { ToolCallCard } from '../tool-call-card';
import { MessageActions } from '../message-actions';
import type { UIMessagePart } from '../../../../plugins/agent-plugin/types';
import { useToolRegistry } from '../../../../plugins/agent-plugin/hooks';

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
  parts: UIMessagePart[];
  isCompleted?: boolean;
  messageId?: string;
}

export const MessageContent: React.FC<MessageContentProps> = ({
  parts,
  isCompleted = false,
  messageId,
}) => {
  const toolRegistry = useToolRegistry();

  const getTextContent = () =>
    parts
      .filter((part): part is Extract<UIMessagePart, { type: 'text' }> => part.type === 'text')
      .map((part) => part.text)
      .join('\n');

  return (
    <div className={styles.content}>
      {parts.map((part, index) => {
        if (part.type === 'text') {
          return (
            <div key={index} className={styles.text}>
              <XMarkdown components={{ code: Code }}>{part.text || ''}</XMarkdown>
            </div>
          );
        }

        if (part.type === 'tool-call') {
          const tool = toolRegistry.getTool(part.toolName);
          const customRender = tool?.definition.render;

          return (
            <ToolCallCard
              key={part.toolCallId}
              toolName={part.toolName}
              args={part.args}
              result={part.result}
              state={part.state}
              defaultOpen={false}
              customRender={customRender}
            />
          );
        }

        return null;
      })}

      {isCompleted && (
        <MessageActions content={getTextContent()} showCompleted={true} messageId={messageId} />
      )}
    </div>
  );
};
