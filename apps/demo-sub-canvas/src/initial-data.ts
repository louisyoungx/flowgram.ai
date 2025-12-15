/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { WorkflowJSON } from '@flowgram.ai/free-layout-editor';

export const initialData: WorkflowJSON = {
  nodes: [
    {
      id: '1',
      type: 'start',
      meta: {
        position: {
          x: 140,
          y: 334.5,
        },
      },
      data: {
        title: 'Start Node',
      },
    },
    {
      id: '2',
      type: 'custom',
      meta: {
        position: {
          x: 788,
          y: 0,
        },
      },
      data: {
        title: 'Custom Node A',
      },
    },
    {
      id: '4',
      type: 'custom',
      meta: {
        position: {
          x: 788,
          y: 669,
        },
      },
      data: {
        title: 'Custom Node C',
      },
    },
    {
      id: '5',
      type: 'end',
      meta: {
        position: {
          x: 1436,
          y: 334.5,
        },
      },
      data: {
        title: 'End Node',
      },
    },
    {
      id: 'loop_yvdFr',
      type: 'loop',
      meta: {
        position: {
          x: 460,
          y: 253,
        },
      },
      data: {
        title: 'Loop_1',
      },
      blocks: [
        {
          id: 'block_start_MYgCG',
          type: 'block_start',
          meta: {
            position: {
              x: 44,
              y: 94,
            },
          },
          data: {},
        },
        {
          id: 'block_end_hVfcS',
          type: 'block_end',
          meta: {
            position: {
              x: 612,
              y: 94,
            },
          },
          data: {},
        },
        {
          id: '144478',
          type: 'custom',
          meta: {
            position: {
              x: 328,
              y: 0,
            },
          },
          data: {
            title: 'New Node',
          },
        },
        {
          id: '152294',
          type: 'custom',
          meta: {
            position: {
              x: 328,
              y: 188,
            },
          },
          data: {
            title: 'New Node',
          },
        },
      ],
      edges: [
        {
          sourceNodeID: 'block_start_MYgCG',
          targetNodeID: '144478',
        },
        {
          sourceNodeID: 'block_start_MYgCG',
          targetNodeID: '152294',
        },
        {
          sourceNodeID: '144478',
          targetNodeID: 'block_end_hVfcS',
        },
        {
          sourceNodeID: '152294',
          targetNodeID: 'block_end_hVfcS',
        },
      ],
    },
  ],
  edges: [
    {
      sourceNodeID: '1',
      targetNodeID: '2',
    },
    {
      sourceNodeID: '1',
      targetNodeID: 'loop_yvdFr',
    },
    {
      sourceNodeID: '1',
      targetNodeID: '4',
    },
    {
      sourceNodeID: '2',
      targetNodeID: '5',
    },
    {
      sourceNodeID: '4',
      targetNodeID: '5',
    },
    {
      sourceNodeID: 'loop_yvdFr',
      targetNodeID: '5',
    },
  ],
};
