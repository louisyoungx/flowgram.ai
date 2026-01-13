/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import React, { useState, useMemo } from 'react';

import classNames from 'classnames';
import { IconChevronDown, IconChevronRight, IconClose, IconSpin } from '@douyinfe/semi-icons';

import type { ToolCallState } from '../../../../plugins/agent-plugin/types';

import styles from './index.module.css';

interface ToolCallCardProps {
  toolName: string;
  args: unknown;
  result?: unknown;
  state: ToolCallState;
  defaultOpen?: boolean;
  customRender?: React.FC<{ args: any; result?: any }>;
}

export const ToolCallCard: React.FC<ToolCallCardProps> = ({
  toolName,
  args,
  result,
  state,
  defaultOpen = false,
  customRender,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const isRunning = state === 'pending' || state === 'streaming';
  const isCancelled = state === 'cancelled';
  const isError = state === 'error';

  const argsString = useMemo(() => {
    if (args === null || args === undefined) return '';
    return typeof args === 'string' ? args : JSON.stringify(args, null, 2);
  }, [args]);

  const resultString = useMemo(() => {
    if (result === null || result === undefined) return '';
    return typeof result === 'string' ? result : JSON.stringify(result, null, 2);
  }, [result]);

  const hasContent = argsString || resultString;

  const handleToggle = () => {
    if (hasContent) {
      setIsOpen(!isOpen);
    }
  };

  if (customRender && args !== null && args !== undefined && !isRunning) {
    const CustomRenderComponent = customRender;
    return (
      <div style={{ margin: '8px 0' }}>
        <CustomRenderComponent args={args} result={result} />
      </div>
    );
  }

  const statusIcon =
    isCancelled || isError ? <IconClose size="small" className={styles.errorIcon} /> : null;

  return (
    <div
      className={classNames(styles.card, {
        [styles.running]: isRunning,
        [styles.cancelled]: isCancelled,
        [styles.error]: isError,
        [styles.cardExpanded]: isOpen,
      })}
    >
      <div
        className={classNames(styles.header, {
          [styles.headerExpanded]: isOpen,
        })}
        onClick={handleToggle}
      >
        <span className={styles.title}>
          {toolName}
          {!isRunning && (isCancelled || isError) && (
            <span className={styles.statusIcon}>{statusIcon}</span>
          )}
        </span>
        <div className={styles.headerRight}>
          {(hasContent || isRunning) && (
            <span className={styles.icon}>
              {isRunning ? (
                <IconSpin size="small" className={styles.spinning} />
              ) : isOpen ? (
                <IconChevronDown size="small" />
              ) : (
                <IconChevronRight size="small" />
              )}
            </span>
          )}
        </div>
      </div>
      {isOpen && hasContent && (
        <div className={styles.body}>
          {argsString && (
            <div className={styles.section}>
              <div className={styles.label}>参数</div>
              <pre className={styles.contentText}>{argsString}</pre>
            </div>
          )}
          {resultString && (
            <div className={styles.section}>
              <div className={styles.label}>结果</div>
              <pre className={styles.contentText}>{resultString}</pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
