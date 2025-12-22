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
  disabled: boolean;
  loading: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({
  value,
  onChange,
  onSubmit,
  disabled,
  loading,
}) => (
  <div className={styles.sender}>
    <Sender
      placeholder="输入消息..."
      value={value}
      onChange={onChange}
      onSubmit={onSubmit}
      disabled={disabled}
      loading={loading}
    />
  </div>
);
