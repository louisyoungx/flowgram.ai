/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import React from 'react';

import XMarkdown, { type ComponentProps } from '@ant-design/x-markdown';
import { Mermaid, CodeHighlighter } from '@ant-design/x';

import { ToolCallCard } from './tool-call-card';

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

interface ParsedContent {
  type: 'text' | 'tool_call';
  content?: string;
  toolName?: string;
  toolArgs?: string;
  toolResult?: string;
  id?: string;
}

/**
 * 解析内容，提取工具调用
 */
function parseContent(content: string): ParsedContent[] {
  const parts: ParsedContent[] = [];
  const toolCallRegex =
    /<tool_call id="([^"]+)" name="([^"]+)">\s*<arguments>([\s\S]*?)<\/arguments>(?:\s*<result>([\s\S]*?)<\/result>)?\s*<\/tool_call>/g;

  let lastIndex = 0;
  let match;

  while ((match = toolCallRegex.exec(content)) !== null) {
    // 添加工具调用之前的文本
    if (match.index > lastIndex) {
      const textContent = content.slice(lastIndex, match.index).trim();
      if (textContent) {
        parts.push({ type: 'text', content: textContent });
      }
    }

    // 添加工具调用
    parts.push({
      type: 'tool_call',
      id: match[1],
      toolName: match[2],
      toolArgs: match[3].trim(),
      toolResult: match[4]?.trim(),
    });

    lastIndex = match.index + match[0].length;
  }

  // 添加剩余文本
  if (lastIndex < content.length) {
    const textContent = content.slice(lastIndex).trim();
    if (textContent) {
      parts.push({ type: 'text', content: textContent });
    }
  }

  // 如果没有匹配到任何内容，返回原始文本
  if (parts.length === 0 && content.trim()) {
    parts.push({ type: 'text', content: content.trim() });
  }

  return parts;
}

interface MessageContentProps {
  content: string;
}

/**
 * 消息内容渲染组件
 * 解析并渲染文本和工具调用
 */
export const MessageContent: React.FC<MessageContentProps> = ({ content }) => {
  const parts = parseContent(content);

  return (
    <div className="message-content">
      {parts.map((part, index) => {
        if (part.type === 'text') {
          return (
            <div key={index} className="message-text">
              <XMarkdown components={{ code: Code }}>{part.content || ''}</XMarkdown>
            </div>
          );
        } else if (part.type === 'tool_call') {
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
