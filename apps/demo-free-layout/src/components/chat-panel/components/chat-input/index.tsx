/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import React from 'react';

import { Sender } from '@ant-design/x';

import styles from './index.module.css';

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (value: string) => void;
  onCancel?: () => void;
  loading: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({
  value,
  onChange,
  onSubmit,
  loading,
  onCancel,
}) => (
  <div className={styles.sender}>
    <Sender
      placeholder="输入消息..."
      value={value}
      onChange={onChange}
      onCancel={onCancel}
      onSubmit={onSubmit}
      loading={loading}
    />
  </div>
);
