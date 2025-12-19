/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import React from 'react';

import { IconButton } from '@douyinfe/semi-ui';
import { IconClose } from '@douyinfe/semi-icons';

import { useChatPanel } from '../../plugins/panel-manager-plugin/hooks';
import './styles.css';

export const ChatPanel: React.FC = () => {
  const { close } = useChatPanel();

  return (
    <div className="chat-panel">
      <div className="chat-panel-header">
        <h3>Chat</h3>
        <IconButton
          type="tertiary"
          theme="borderless"
          icon={<IconClose />}
          onClick={() => close()}
        />
      </div>
      <div className="chat-panel-content">{/* 聊天内容区域 - 待后续开发 */}</div>
    </div>
  );
};
