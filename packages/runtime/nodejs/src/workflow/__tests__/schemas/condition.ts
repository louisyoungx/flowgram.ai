import { WorkflowSchema } from '@flowgram.ai/runtime-interface';

export const conditionSchema: WorkflowSchema = {
  nodes: [
    {
      id: 'start_0',
      type: 'start',
      meta: {
        position: {
          x: 180,
          y: 216.5,
        },
      },
      data: {
        title: 'Start',
        outputs: {
          type: 'object',
          properties: {
            query: {
              key: 5,
              name: 'query',
              isPropertyRequired: false,
              type: 'string',
              default: 'Hello Flow.',
              extra: {
                index: 0,
              },
            },
            enable: {
              key: 6,
              name: 'enable',
              isPropertyRequired: false,
              type: 'boolean',
              default: true,
              extra: {
                index: 1,
              },
            },
            array_obj: {
              key: 7,
              name: 'array_obj',
              isPropertyRequired: false,
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  int: {
                    type: 'number',
                  },
                  str: {
                    type: 'string',
                  },
                },
              },
              extra: {
                index: 2,
              },
            },
            num: {
              key: 10,
              name: 'num',
              isPropertyRequired: false,
              type: 'number',
              extra: {
                index: 3,
              },
            },
            model: {
              key: 24,
              name: 'model',
              isPropertyRequired: false,
              type: 'string',
              extra: {
                index: 4,
              },
            },
            scene: {
              key: 54,
              name: 'scene',
              isPropertyRequired: false,
              type: 'string',
              extra: {
                index: 5,
              },
            },
          },
          required: [],
        },
      },
    },
    {
      id: 'end_0',
      type: 'end',
      meta: {
        position: {
          x: 1560,
          y: 229.5,
        },
      },
      data: {
        title: 'End',
        outputs: {
          type: 'object',
          properties: {
            result: {
              type: 'string',
              default: {
                type: 'ref',
                content: ['llm_BjEpK', 'result'],
              },
            },
          },
        },
      },
    },
    {
      id: 'llm_2',
      type: 'llm',
      meta: {
        position: {
          x: 1100,
          y: 321,
        },
      },
      data: {
        title: 'LLM_2',
        inputsValues: {
          systemPrompt: {
            type: 'constant',
            content: 'BBBB',
          },
          modelType: {
            type: 'ref',
            content: ['start_0', 'model'],
          },
          temperature: {
            type: 'ref',
            content: ['start_0', 'num'],
          },
          prompt: {
            type: 'ref',
            content: ['start_0', 'query'],
          },
        },
        inputs: {
          type: 'object',
          required: ['modelType', 'temperature', 'prompt'],
          properties: {
            modelType: {
              type: 'string',
            },
            temperature: {
              type: 'number',
            },
            systemPrompt: {
              type: 'string',
            },
            prompt: {
              type: 'string',
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
      id: 'llm_1',
      type: 'llm',
      meta: {
        position: {
          x: 1100,
          y: 0,
        },
      },
      data: {
        title: 'LLM_1',
        inputsValues: {
          modelType: {
            type: 'ref',
            content: ['start_0', 'model'],
          },
          temperature: {
            type: 'ref',
            content: ['start_0', 'num'],
          },
          systemPrompt: {
            type: 'constant',
            content: 'AAAA',
          },
          prompt: {
            type: 'ref',
            content: ['start_0', 'query'],
          },
        },
        inputs: {
          type: 'object',
          required: ['modelType', 'temperature', 'prompt'],
          properties: {
            modelType: {
              type: 'string',
            },
            temperature: {
              type: 'number',
            },
            systemPrompt: {
              type: 'string',
            },
            prompt: {
              type: 'string',
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
      id: 'condition_0',
      type: 'condition',
      meta: {
        position: {
          x: 640,
          y: 135,
        },
      },
      data: {
        title: 'Condition',
        conditions: [
          {
            value: {
              left: {
                type: 'ref',
                content: ['start_0', 'scene'],
              },
              operator: 'eq',
              right: {
                type: 'constant',
                content: 'AAA',
              },
            },
            key: 'if_llm_1',
          },
          {
            value: {
              left: {
                type: 'ref',
                content: ['start_0', 'scene'],
              },
              operator: 'eq',
              right: {
                type: 'constant',
                content: 'BBB',
              },
            },
            key: 'if_end',
          },
          {
            value: {
              type: 'expression',
              content: '',
              left: {
                type: 'ref',
                content: ['start_0', 'scene'],
              },
              operator: 'is_empty',
            },
            key: 'if_llm_2',
          },
        ],
      },
    },
  ],
  edges: [
    {
      sourceNodeID: 'start_0',
      targetNodeID: 'condition_0',
    },
    {
      sourceNodeID: 'llm_2',
      targetNodeID: 'end_0',
    },
    {
      sourceNodeID: 'llm_1',
      targetNodeID: 'end_0',
    },
    {
      sourceNodeID: 'condition_0',
      targetNodeID: 'end_0',
      sourcePortID: 'if_end',
    },
    {
      sourceNodeID: 'condition_0',
      targetNodeID: 'llm_2',
      sourcePortID: 'if_llm_2',
    },
    {
      sourceNodeID: 'condition_0',
      targetNodeID: 'llm_1',
      sourcePortID: 'if_llm_1',
    },
  ],
};
