/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import React from 'react';

import { Suggestion } from '@ant-design/x';

import { suggestionQuestions } from '../../constants';

import styles from './index.module.css';

interface ChatSuggestionsProps {
  onSelect: (value: string) => void;
}

export const ChatSuggestions: React.FC<ChatSuggestionsProps> = ({ onSelect }) => (
  <div className={styles.suggestions}>
    <Suggestion
      items={suggestionQuestions.map((text, index) => ({
        key: index.toString(),
        label: text,
        value: text,
      }))}
      onSelect={onSelect}
    />
  </div>
);
