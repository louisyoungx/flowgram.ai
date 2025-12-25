/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import React from 'react';

import { Tooltip, Toast } from '@douyinfe/semi-ui';
import { IconCopy, IconRefresh } from '@douyinfe/semi-icons';

import { useChatMessages } from '../../hooks';
import { useAgentService } from '../../../../plugins/agent-plugin';

import styles from './index.module.css';

interface MessageActionsProps {
  content: string;
  showCompleted?: boolean;
  messageId?: string;
}

export const MessageActions: React.FC<MessageActionsProps> = ({
  content,
  showCompleted = true,
  messageId,
}) => {
  const agentService = useAgentService();

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    Toast.success('复制成功');
  };

  const handleRetry = () => {
    if (messageId) {
      agentService.retryMessage(messageId);
    }
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
        <Tooltip content="重试">
          <span className={styles.iconButton} onClick={handleRetry}>
            <IconRefresh />
          </span>
        </Tooltip>
      </div>
    </div>
  );
};
