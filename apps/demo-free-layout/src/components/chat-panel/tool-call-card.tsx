/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react';

import { Spin } from '@douyinfe/semi-ui';
import { IconChevronDown, IconChevronRight } from '@douyinfe/semi-icons';

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
  const isRunning = !result;
  const hasContent = args || result;

  return (
    <div className="tool-call-card">
      <div className="tool-call-header" onClick={hasContent ? () => setIsOpen(!isOpen) : undefined}>
        <span className="tool-call-title">{toolName}</span>
        {(hasContent || isRunning) && (
          <span className="tool-call-icon">
            {isRunning ? (
              <Spin size="small" />
            ) : isOpen ? (
              <IconChevronDown size="small" />
            ) : (
              <IconChevronRight size="small" />
            )}
          </span>
        )}
      </div>
      {isOpen && hasContent && (
        <div className="tool-call-body">
          {args && (
            <div className="tool-call-section">
              <div className="tool-call-label">参数</div>
              <pre className="tool-call-content">{args}</pre>
            </div>
          )}
          {result && (
            <div className="tool-call-section">
              <div className="tool-call-label">结果</div>
              <pre className="tool-call-content">{result}</pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
