import { FlowDocumentJSON } from './typings';

export const initialData: FlowDocumentJSON = {
  nodes: [
    {
      id: 'start_0',
      type: 'start',
      meta: {
        position: {
          x: 175,
          y: 341,
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
          x: 1033,
          y: 354,
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
      id: 'llm_0',
      type: 'llm',
      meta: {
        position: {
          x: 604,
          y: 285,
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
      blocks: [
        {
          id: 'llm_CBdCg',
          type: 'llm',
          meta: {
            position: {
              x: 180,
              y: 0,
            },
          },
          data: {
            title: 'LLM_4',
            inputsValues: {
              modelType: {
                type: 'constant',
                content: 'gpt-3.5-turbo',
              },
              temperature: {
                type: 'constant',
                content: 0.5,
              },
              systemPrompt: {
                type: 'constant',
                content: 'You are an AI assistant.',
              },
              prompt: {
                type: 'constant',
                content: '',
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
          id: 'llm_gZafu',
          type: 'llm',
          meta: {
            position: {
              x: 640,
              y: 0,
            },
          },
          data: {
            title: 'LLM_5',
            inputsValues: {
              modelType: {
                type: 'constant',
                content: 'gpt-3.5-turbo',
              },
              temperature: {
                type: 'constant',
                content: 0.5,
              },
              systemPrompt: {
                type: 'constant',
                content: 'You are an AI assistant.',
              },
              prompt: {
                type: 'constant',
                content: '',
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
          sourceNodeID: 'llm_CBdCg',
          targetNodeID: 'llm_gZafu',
        },
      ],
    },
    {
      id: '159623',
      type: 'comment',
      meta: {
        position: {
          x: 640,
          y: 522.46875,
        },
      },
      data: {
        size: {
          width: 240,
          height: 150,
        },
        note: 'hi ~\n\nthis is a comment node\n\n- flowgram.ai',
      },
    },
    {
      id: 'group_V-_st',
      type: 'group',
      meta: {
        position: {
          x: 1020,
          y: 96.25,
        },
      },
      data: {
        title: 'LLM_Group',
        color: 'Violet',
      },
      blocks: [
        {
          id: 'llm_0',
          type: 'llm',
          meta: {
            position: {
              x: 640,
              y: 0,
            },
          },
          data: {
            title: 'LLM_0',
            inputsValues: {
              modelType: {
                type: 'constant',
                content: 'gpt-3.5-turbo',
              },
              temperature: {
                type: 'constant',
                content: 0.5,
              },
              systemPrompt: {
                type: 'constant',
                content: 'You are an AI assistant.',
              },
              prompt: {
                type: 'constant',
                content: '',
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
          id: 'llm_l_TcE',
          type: 'llm',
          meta: {
            position: {
              x: 180,
              y: 0,
            },
          },
          data: {
            title: 'LLM_1',
            inputsValues: {
              modelType: {
                type: 'constant',
                content: 'gpt-3.5-turbo',
              },
              temperature: {
                type: 'constant',
                content: 0.5,
              },
              systemPrompt: {
                type: 'constant',
                content: 'You are an AI assistant.',
              },
              prompt: {
                type: 'constant',
                content: '',
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
          sourceNodeID: 'llm_l_TcE',
          targetNodeID: 'llm_0',
        },
        {
          sourceNodeID: 'llm_0',
          targetNodeID: 'end_0',
        },
        {
          sourceNodeID: 'condition_0',
          targetNodeID: 'llm_l_TcE',
          sourcePortID: 'if_0',
        },
      ],
    },
  ],
  edges: [
    {
      sourceNodeID: 'start_0',
      targetNodeID: 'llm_0',
    },
    {
      sourceNodeID: 'llm_0',
      targetNodeID: 'end_0',
    },
  ],
};
