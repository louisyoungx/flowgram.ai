/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react';

import { Spin } from '@douyinfe/semi-ui';
import { IconChevronDown, IconChevronRight } from '@douyinfe/semi-icons';

import styles from './index.module.css';

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

  const handleToggle = () => {
    if (hasContent) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.header} onClick={handleToggle}>
        <span className={styles.title}>{toolName}</span>
        {(hasContent || isRunning) && (
          <span className={styles.icon}>
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
        <div className={styles.body}>
          {args && (
            <div className={styles.section}>
              <div className={styles.label}>参数</div>
              <pre className={styles.contentText}>{args}</pre>
            </div>
          )}
          {result && (
            <div className={styles.section}>
              <div className={styles.label}>结果</div>
              <pre className={styles.contentText}>{result}</pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
