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
  customRender?: (args: any, result?: any) => React.ReactNode;
}

export const ToolCallCard: React.FC<ToolCallCardProps> = ({
  toolName,
  arguments: args,
  result,
  defaultOpen = false,
  customRender,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const isRunning = !result;
  const hasContent = args || result;

  const handleToggle = () => {
    if (hasContent) {
      setIsOpen(!isOpen);
    }
  };

  let parsedArgs: any = null;
  let parsedResult: any = null;
  let hasValidArgs = false;

  try {
    if (args && args.trim()) {
      parsedArgs = JSON.parse(args);
      hasValidArgs = true;
    }
  } catch (e) {
    console.warn(`Failed to parse tool arguments for ${toolName}:`, args, e);
    parsedArgs = null;
  }

  try {
    if (result && result.trim()) {
      parsedResult = JSON.parse(result);
    }
  } catch (e) {
    console.warn(`Failed to parse tool result for ${toolName}:`, result, e);
    parsedResult = null;
  }

  if (customRender && hasValidArgs) {
    const CustomRenderComponent = customRender;
    return (
      <div style={{ margin: '8px 0' }}>
        <CustomRenderComponent args={parsedArgs} result={parsedResult} />
      </div>
    );
  }

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
