/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import React from 'react';

import { ChatSuggestions } from '../chat-suggestions';
import { ChatMessages } from '../chat-messages';
import { ChatInput } from '../chat-input';
import { ChatHeader } from '../chat-header';
import { useChatMessages, useChatInput } from '../../hooks';
import { useChatPanel } from '../../../../plugins/panel-manager-plugin/hooks';

import styles from './index.module.css';

export const ChatPanel: React.FC = () => {
  const { close } = useChatPanel();
  const messages = useChatMessages();
  const {
    inputValue,
    setInputValue,
    editInputValue,
    setEditInputValue,
    isLoading,
    handleSend,
    handleEditSend,
    handleCancel,
    handleEditCancel,
    editingMessageId,
    startEditMessage,
  } = useChatInput();

  return (
    <div className={styles.panel}>
      <ChatHeader onClose={close} />

      <div className={styles.content}>
        <ChatMessages
          messages={messages}
          editingMessageId={editingMessageId}
          onEditMessage={startEditMessage}
          editInputValue={editInputValue}
          onEditInputChange={setEditInputValue}
          onEditSubmit={handleEditSend}
          onEditCancel={handleEditCancel}
          isLoading={isLoading}
        />

        {messages.length <= 1 && <ChatSuggestions onSelect={handleSend} />}

        <ChatInput
          value={inputValue}
          onChange={setInputValue}
          onSubmit={handleSend}
          onCancel={handleCancel}
          loading={isLoading}
        />
      </div>
    </div>
  );
};
