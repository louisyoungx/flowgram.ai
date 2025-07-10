/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { WorkflowSchema } from '@flowgram.ai/runtime-interface';

export const loopSchema: WorkflowSchema = {
  nodes: [
    {
      id: 'start_0',
      type: 'start',
      meta: {
        position: {
          x: 180,
          y: 230,
        },
      },
      data: {
        title: 'Start',
        outputs: {
          type: 'object',
          properties: {
            tasks: {
              key: 7,
              name: 'tasks',
              isPropertyRequired: true,
              type: 'array',
              extra: {
                index: 0,
              },
              items: {
                type: 'string',
              },
            },
            system_prompt: {
              key: 1,
              name: 'system_prompt',
              isPropertyRequired: true,
              type: 'string',
              extra: {
                index: 1,
              },
            },
          },
          required: ['tasks', 'system_prompt'],
        },
      },
    },
    {
      id: 'end_0',
      type: 'end',
      meta: {
        position: {
          x: 1628,
          y: 230,
        },
      },
      data: {
        title: 'End',
        inputs: {
          type: 'object',
          properties: {
            answers: {
              type: 'array',
              items: {
                type: 'string',
              },
            },
          },
        },
        inputsValues: {
          answers: {
            type: 'ref',
            content: ['loop_0', 'llm_results'],
          },
        },
      },
    },
    {
      id: 'loop_0',
      type: 'loop',
      meta: {
        position: {
          x: 560,
          y: 120,
        },
      },
      data: {
        title: 'Loop_1',
        loopFor: {
          type: 'ref',
          content: ['start_0', 'tasks'],
        },
        loopOutputs: {
          llm_results: {
            type: 'ref',
            content: ['llm_0', 'result'],
          },
        },
      },
      blocks: [
        {
          id: 'block_start_0',
          type: 'block-start',
          meta: {
            position: {
              x: 32,
              y: 149.5,
            },
          },
          data: {},
        },
        {
          id: 'block_end_0',
          type: 'block-end',
          meta: {
            position: {
              x: 656,
              y: 149.5,
            },
          },
          data: {},
        },
        {
          id: 'llm_0',
          type: 'llm',
          meta: {
            position: {
              x: 344,
              y: 0,
            },
          },
          data: {
            title: 'LLM_0',
            inputsValues: {
              modelName: {
                type: 'constant',
                content: 'AI_MODEL_1',
              },
              apiKey: {
                type: 'constant',
                content: 'sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
              },
              apiHost: {
                type: 'constant',
                content: 'https://mock-ai-url/api/v3',
              },
              temperature: {
                type: 'constant',
                content: 0.6,
              },
              systemPrompt: {
                type: 'template',
                content: '{{start_0.system_prompt}}',
              },
              prompt: {
                type: 'template',
                content: '{{loop_0_locals.item}}',
              },
            },
            inputs: {
              type: 'object',
              required: ['modelName', 'apiKey', 'apiHost', 'temperature', 'prompt'],
              properties: {
                modelName: {
                  type: 'string',
                },
                apiKey: {
                  type: 'string',
                },
                apiHost: {
                  type: 'string',
                },
                temperature: {
                  type: 'number',
                },
                systemPrompt: {
                  type: 'string',
                  extra: {
                    formComponent: 'prompt-editor',
                  },
                },
                prompt: {
                  type: 'string',
                  extra: {
                    formComponent: 'prompt-editor',
                  },
                },
              },
            },
            outputs: {
              type: 'object',
              properties: {
                result: {
                  type: 'string',
                },
              },
            },
          },
        },
      ],
      edges: [
        {
          sourceNodeID: 'block_start_0',
          targetNodeID: 'llm_0',
        },
        {
          sourceNodeID: 'llm_0',
          targetNodeID: 'block_end_0',
        },
      ],
    },
  ],
  edges: [
    {
      sourceNodeID: 'start_0',
      targetNodeID: 'loop_0',
    },
    {
      sourceNodeID: 'loop_0',
      targetNodeID: 'end_0',
    },
  ],
};
