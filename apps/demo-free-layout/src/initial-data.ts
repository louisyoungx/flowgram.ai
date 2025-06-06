import { FlowDocumentJSON } from './typings';

export const initialData: FlowDocumentJSON = {
  nodes: [
    {
      id: 'start_0',
      type: 'start',
      meta: {
        position: {
          x: 180,
          y: 118,
        },
      },
      data: {
        title: 'Start',
        outputs: {
          type: 'object',
          properties: {},
          required: [],
        },
      },
    },
    {
      id: 'end_0',
      type: 'end',
      meta: {
        position: {
          x: 1100,
          y: 108,
        },
      },
      data: {
        title: 'End',
        inputs: {
          type: 'object',
          properties: {
            result: {
              type: 'string',
            },
          },
        },
        inputsValues: {
          result: {
            type: 'ref',
            content: ['llm_-2irx', 'result'],
          },
        },
      },
    },
    {
      id: 'llm_-2irx',
      type: 'llm',
      meta: {
        position: {
          x: 640,
          y: 0,
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
            content: 'c5720be8-e02d-4584-8cd7-27bcbcc14dab',
          },
          apiHost: {
            type: 'constant',
            content: 'https://ark.cn-beijing.volces.com/api/v3',
          },
          temperature: {
            type: 'constant',
            content: 0.6,
          },
          systemPrompt: {
            type: 'constant',
            content: 'You are an AI assistant.',
          },
          prompt: {
            type: 'constant',
            content: 'How are you?',
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
      targetNodeID: 'llm_-2irx',
    },
    {
      sourceNodeID: 'llm_-2irx',
      targetNodeID: 'end_0',
    },
  ],
};
