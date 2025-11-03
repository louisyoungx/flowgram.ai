/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import React, { useState, useEffect } from 'react';

interface ThinkingTextProps {
  thinking?: string;
}

// ThinkingText component with typewriter effect
export const ThinkingText: React.FC<ThinkingTextProps> = ({ thinking }) => {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Reset animation when thinking text changes
  useEffect(() => {
    setDisplayedText('');
    setCurrentIndex(0);
  }, [thinking]);

  // Typewriter effect for thinking text
  useEffect(() => {
    if (!thinking || currentIndex >= thinking.length) {
      return;
    }

    const timer = setTimeout(() => {
      setDisplayedText((prev: string) => prev + (thinking?.[currentIndex] || ''));
      setCurrentIndex((prev: number) => prev + 1);
    }, 50); // 50ms delay between each character

    return () => clearTimeout(timer);
  }, [thinking, currentIndex]);

  if (!thinking) {
    return null;
  }

  return (
    <div className="thinking-text">
      <div className="thinking-title">思考:</div>
      <div>
        <span className="thinking-content">{displayedText}</span>
        <span className="cursor">
          {currentIndex < (thinking?.length || 0) && <span className="cursor">|</span>}
        </span>
      </div>
    </div>
  );
};
