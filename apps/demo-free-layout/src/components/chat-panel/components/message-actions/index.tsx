/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import React from 'react';

import { Tooltip, Toast } from '@douyinfe/semi-ui';
import { IconCopy, IconRefresh } from '@douyinfe/semi-icons';

import styles from './index.module.css';

interface MessageActionsProps {
  content: string;
  onRetry?: () => void;
  showCompleted?: boolean;
}

export const MessageActions: React.FC<MessageActionsProps> = ({
  content,
  onRetry,
  showCompleted = true,
}) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    Toast.success('复制成功');
  };

  return (
    <div className={styles.actions}>
      <div className={styles.left}>
        {showCompleted && (
          <div className={styles.completed}>
            <span className={styles.checkIcon}>✓</span>
            <span className={styles.completedText}>任务完成</span>
          </div>
        )}
      </div>
      <div className={styles.right}>
        <Tooltip content="复制">
          <span className={styles.iconButton} onClick={handleCopy}>
            <IconCopy />
          </span>
        </Tooltip>
        {onRetry && (
          <Tooltip content="重试">
            <span className={styles.iconButton} onClick={onRetry}>
              <IconRefresh />
            </span>
          </Tooltip>
        )}
      </div>
    </div>
  );
};
