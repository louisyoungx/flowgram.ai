/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import type { FlowDocumentJSON } from '@flowgram.ai/fixed-layout-editor';

export const initialData: FlowDocumentJSON = {
  nodes: [
    {
      id: 'start_0',
      type: 'start',
      data: {
        title: 'Start',
        content: 'start content',
      },
      blocks: [],
    },
    {
      id: 'custom_1',
      type: 'custom',
      data: {
        title: 'Custom',
        content: 'custom content',
      },
    },
    {
      id: 'end_2',
      type: 'end',
      data: {
        title: 'End',
        content: 'end content',
      },
    },
  ],
};
