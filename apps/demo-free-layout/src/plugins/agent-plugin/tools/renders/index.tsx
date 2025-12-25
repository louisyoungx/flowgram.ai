/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import React from 'react';

import { TodoWriteRender } from './todo-write-render';
import { LLMNodeRender } from './llm-node-render';
import { AskUserQuestionRender } from './ask-user-question-render';

export const TOOL_RENDERS: Record<string, React.FC<{ args: any; result?: any }>> = {
  AskUserQuestion: AskUserQuestionRender,
  TodoWrite: TodoWriteRender,
  LLMNode: LLMNodeRender,
};

export { AskUserQuestionRender, TodoWriteRender, LLMNodeRender };
