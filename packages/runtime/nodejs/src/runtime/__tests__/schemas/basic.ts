import type { WorkflowSchema } from '@flowgram.ai/runtime-interface';

export const basicSchema: WorkflowSchema = {
  nodes: [
    {
      id: 'start_0',
      type: 'start',
      meta: {
        position: {
          x: 175.4854323235305,
          y: 341.00223115257165,
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
          x: 1033.36484206234,
          y: 354.00223115257165,
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
      id: 'llm_BjEpK',
      type: 'llm',
      meta: {
        position: {
          x: 604.4251371929352,
          y: 285.00223115257165,
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
          prompt: {
            type: 'ref',
            content: ['start_0', 'query'],
          },
          systemPrompt: {
            type: 'constant',
            content: 'aaaaaa',
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
  ],
  edges: [
    {
      sourceNodeID: 'start_0',
      targetNodeID: 'llm_BjEpK',
    },
    {
      sourceNodeID: 'llm_BjEpK',
      targetNodeID: 'end_0',
    },
  ],
};
