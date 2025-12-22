/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react';

import { Tag } from '@douyinfe/semi-ui';
import { IconChevronDown, IconChevronRight } from '@douyinfe/semi-icons';
import { CodeHighlighter } from '@ant-design/x';

interface ToolCallCardProps {
  toolName: string;
  arguments: string;
  result?: string;
  defaultOpen?: boolean;
}

export const ToolCallCard: React.FC<ToolCallCardProps> = ({
  toolName,
  arguments: args,
  result,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="tool-call-card">
      <div className="tool-call-header" onClick={() => setIsOpen(!isOpen)}>
        <span className="tool-call-icon">
          {isOpen ? <IconChevronDown size="small" /> : <IconChevronRight size="small" />}
        </span>
        <span className="tool-call-emoji">🔧</span>
        <span className="tool-call-title">工具调用: {toolName}</span>
        <Tag color="blue" size="small">
          {result ? '已完成' : '执行中'}
        </Tag>
      </div>
      {isOpen && (
        <div className="tool-call-body">
          <div className="tool-call-section">
            <div className="tool-call-label">参数：</div>
            <div className="tool-call-content">
              <CodeHighlighter lang="json">{args}</CodeHighlighter>
            </div>
          </div>
          {result && (
            <div className="tool-call-section">
              <div className="tool-call-label">结果：</div>
              <div className="tool-call-content">
                <CodeHighlighter lang="json">{result}</CodeHighlighter>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
