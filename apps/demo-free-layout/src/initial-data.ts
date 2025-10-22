/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { FlowDocumentJSON } from './typings';

export const initialData: FlowDocumentJSON = {
  nodes: [
    {
      id: 'start_0',
      type: 'start',
      meta: {
        position: {
          x: 180,
          y: 381.61875,
        },
      },
      data: {
        title: 'Start',
        outputs: {
          type: 'object',
          properties: {
            questions: {
              type: 'array',
              extra: {
                index: 0,
              },
              items: {
                type: 'string',
              },
            },
          },
          required: ['questions'],
        },
      },
    },
    {
      id: 'end_0',
      type: 'end',
      meta: {
        position: {
          x: 2002.1458333333335,
          y: 381.61875,
        },
      },
      data: {
        title: 'End',
        inputs: {
          type: 'object',
          properties: {
            outputs: {
              type: 'array',
              items: {
                type: 'string',
              },
            },
          },
        },
        inputsValues: {
          outputs: {
            type: 'ref',
            content: ['loop_TMfff', 'results'],
          },
        },
      },
    },
    {
      id: '159623',
      type: 'comment',
      meta: {
        position: {
          x: 180,
          y: 609,
        },
      },
      data: {
        size: {
          width: 252.25284362023254,
          height: 329.1978379459009,
        },
        note: '[\n    "1+1",\n    "2+2",\n    "3+3",\n    "4+4",\n    "5+5",\n    "6+6",\n    "7+7",\n    "8+8",\n    "9+9",\n    "10+10"\n  ]',
      },
    },
    {
      id: 'loop_TMfff',
      type: 'loop',
      meta: {
        position: {
          x: 520.0000000000001,
          y: 90,
        },
      },
      data: {
        title: 'Loop_1',
        loopFor: {
          type: 'ref',
          content: ['start_0', 'questions'],
        },
        loopOutputs: {
          results: {
            type: 'ref',
            content: ['llm_4tfMh', 'result'],
          },
        },
      },
      blocks: [
        {
          id: 'block_start_O1vrq',
          type: 'block-start',
          meta: {
            position: {
              x: 32,
              y: 149,
            },
          },
          data: {},
        },
        {
          id: 'block_end_iOtJW',
          type: 'block-end',
          meta: {
            position: {
              x: 1110.1458333333333,
              y: 425.73749999999995,
            },
          },
          data: {},
        },
        {
          id: 'llm_4tfMh',
          type: 'llm',
          meta: {
            position: {
              x: 804,
              y: 234.23749999999998,
            },
          },
          data: {
            title: 'LLM_1',
            inputsValues: {
              modelName: {
                type: 'constant',
                content: 'ep-20250206192339-nnr9m',
              },
              apiKey: {
                type: 'constant',
                content: 'b0515e86-d99f-4b6c-87f6-f00dad61fc0a',
              },
              apiHost: {
                type: 'constant',
                content: 'https://ark.cn-beijing.volces.com/api/v3',
              },
              temperature: {
                type: 'constant',
                content: 0.5,
              },
              systemPrompt: {
                type: 'template',
                content:
                  '# Role\nYou are a "math formula {{loop_TMfff_locals.index}}" calculator.\n',
              },
              prompt: {
                type: 'template',
                content:
                  'Just give me the answer of "{{loop_TMfff_locals.item}}=?", just one number, no other words',
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
        {
          id: 'condition_L6_6g',
          type: 'condition',
          meta: {
            position: {
              x: 344,
              y: 45,
            },
          },
          data: {
            title: 'Condition',
            conditions: [
              {
                value: {
                  left: {
                    type: 'ref',
                    content: ['loop_TMfff_locals', 'index'],
                  },
                  operator: 'lte',
                  right: {
                    type: 'constant',
                    content: 2,
                  },
                },
                key: 'if_w28hW',
              },
              {
                value: {
                  left: {
                    type: 'ref',
                    content: ['loop_TMfff_locals', 'index'],
                  },
                  operator: 'gt',
                  right: {
                    type: 'constant',
                    content: 6,
                  },
                },
                key: 'if_i8b7U',
              },
              {
                value: {
                  type: 'expression',
                  content: '',
                  left: {
                    type: 'ref',
                    content: ['loop_TMfff_locals', 'index'],
                  },
                  operator: 'is_not_empty',
                },
                key: 'if_NaLP_A',
              },
            ],
          },
        },
        {
          id: 'continue_XEM73',
          type: 'continue',
          meta: {
            position: {
              x: 804,
              y: 73.7625,
            },
          },
          data: {
            title: 'Continue_1',
          },
        },
        {
          id: 'break_iq-x4',
          type: 'break',
          meta: {
            position: {
              x: 804,
              y: 154,
            },
          },
          data: {
            title: 'Break_1',
          },
        },
      ],
      edges: [
        {
          sourceNodeID: 'block_start_O1vrq',
          targetNodeID: 'condition_L6_6g',
        },
        {
          sourceNodeID: 'llm_4tfMh',
          targetNodeID: 'block_end_iOtJW',
        },
        {
          sourceNodeID: 'condition_L6_6g',
          targetNodeID: 'llm_4tfMh',
          sourcePortID: 'if_NaLP_A',
        },
        {
          sourceNodeID: 'condition_L6_6g',
          targetNodeID: 'continue_XEM73',
          sourcePortID: 'if_w28hW',
        },
        {
          sourceNodeID: 'condition_L6_6g',
          targetNodeID: 'break_iq-x4',
          sourcePortID: 'if_i8b7U',
        },
      ],
    },
  ],
  edges: [
    {
      sourceNodeID: 'start_0',
      targetNodeID: 'loop_TMfff',
    },
    {
      sourceNodeID: 'loop_TMfff',
      targetNodeID: 'end_0',
    },
  ],
};
