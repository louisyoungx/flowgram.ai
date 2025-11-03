/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { useState, useEffect } from 'react';

import { Field } from '@flowgram.ai/fixed-layout-editor';
import './index.less';

interface StatusData {
  loading?: boolean;
  thinking?: string;
}

interface StatusDisplayProps {
  data: StatusData;
}

const StatusDisplay = ({ data }: StatusDisplayProps) => {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Reset animation when thinking text changes
  useEffect(() => {
    setDisplayedText('');
    setCurrentIndex(0);
  }, [data.thinking]);

  // Typewriter effect for thinking text
  useEffect(() => {
    if (!data.thinking || currentIndex >= data.thinking.length) {
      return;
    }

    const timer = setTimeout(() => {
      setDisplayedText((prev: string) => prev + (data.thinking?.[currentIndex] || ''));
      setCurrentIndex((prev: number) => prev + 1);
    }, 50); // 50ms delay between each character

    return () => clearTimeout(timer);
  }, [data.thinking, currentIndex]);

  return (
    <div className="status-display">
      {data.loading && (
        <div className="status-loading">
          <div className="loading-dots">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          {data.thinking && (
            <div className="thinking-text">
              <span className="thinking-content">{displayedText}</span>
              {currentIndex < (data.thinking?.length || 0) && <span className="cursor">|</span>}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export const StatusDisplayField = () => (
  <Field<StatusData> name="status">{({ field }) => <StatusDisplay data={field.value} />}</Field>
);
