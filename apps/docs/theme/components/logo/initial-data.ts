/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { WorkflowJSON } from '@flowgram.ai/free-layout-editor';

const BasePosition = {
  x: 100,
  y: 200,
};

export const initialData: WorkflowJSON = {
  nodes: [
    {
      id: '1',
      type: 'start',
      meta: {
        position: { x: BasePosition.x + 0, y: BasePosition.y + 0 },
      },
    },
    {
      id: '2',
      type: 'custom',
      meta: {
        position: { x: BasePosition.x + 110, y: BasePosition.y + 0 },
      },
    },
    {
      id: '3',
      type: 'custom',
      meta: {
        position: { x: BasePosition.x + 220, y: BasePosition.y + 0 },
      },
    },
    {
      id: '4',
      type: 'end',
      meta: {
        position: { x: BasePosition.x + 330, y: BasePosition.y + 0 },
      },
    },
  ],
  edges: [
    {
      sourceNodeID: '1',
      targetNodeID: '2',
    },
    {
      sourceNodeID: '2',
      targetNodeID: '3',
    },
    {
      sourceNodeID: '3',
      targetNodeID: '4',
    },
  ],
};
