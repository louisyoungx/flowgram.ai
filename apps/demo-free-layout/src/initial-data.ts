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
          x: 181.33535069974707,
          y: 127.39459271636287,
        },
      },
      data: {
        title: 'Start',
        outputs: {
          type: 'object',
          properties: {
            cities: {
              type: 'array',
              extra: {
                index: 0,
              },
              items: {
                type: 'string',
              },
              default:
                '[\n  "Beijing",\n  "Shanghai",\n  "Hangzhou",\n  "New York",\n  "London",\n  "Paris"\n]',
            },
            model_name: {
              type: 'string',
              extra: {
                index: 2,
              },
            },
            api_key: {
              type: 'string',
              extra: {
                index: 3,
              },
            },
            api_host: {
              type: 'string',
              extra: {
                index: 4,
              },
            },
          },
          required: ['cities', 'model_name', 'api_key', 'api_host'],
        },
      },
    },
    {
      id: 'end_0',
      type: 'end',
      meta: {
        position: {
          x: 3712,
          y: 127.39459271636287,
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
            content: ['440190', 'result'],
          },
        },
      },
    },
    {
      id: 'loop_CR9P_',
      type: 'loop',
      meta: {
        position: {
          x: -168.33232465012654,
          y: -138.40540728363717,
        },
      },
      data: {
        title: 'Loop_Cities',
        loopFor: {
          type: 'ref',
          content: ['start_0', 'cities'],
        },
        loopOutputs: {
          temperatures: {
            type: 'ref',
            content: ['code_TYMaY', 'temperature'],
          },
          outfits: {
            type: 'ref',
            content: ['llm_4tfMh', 'result'],
          },
        },
        outputs: {
          type: 'object',
          required: [],
          properties: {
            temperatures: {
              type: 'array',
            },
            outfits: {
              type: 'array',
            },
          },
        },
      },
      blocks: [
        {
          id: 'block_start_Qy2kJ',
          type: 'block-start',
          meta: {
            position: {
              x: 737,
              y: 350.25868010985994,
            },
          },
          data: {},
        },
        {
          id: 'block_end_ascT4',
          type: 'block-end',
          meta: {
            position: {
              x: 2889,
              y: 270.75868010985994,
            },
          },
          data: {},
        },
        {
          id: 'condition_hsMZW',
          type: 'condition',
          meta: {
            position: {
              x: 2429,
              y: 290.25868010985994,
            },
          },
          data: {
            title: 'Condition',
            conditions: [
              {
                value: {
                  left: {
                    type: 'ref',
                    content: ['code_TYMaY', 'temperature'],
                  },
                  operator: 'gt',
                  right: {
                    type: 'constant',
                    content: 20,
                    schema: {
                      type: 'number',
                    },
                  },
                },
                key: 'if_J58vJ',
              },
            ],
          },
        },
        {
          id: 'continue_YmaO7',
          type: 'continue',
          meta: {
            position: {
              x: 2889,
              y: 434.75868010985994,
            },
          },
          data: {
            title: 'Continue_1',
          },
        },
        {
          id: '167372',
          type: 'comment',
          meta: {
            position: {
              x: 1049.0000000000005,
              y: 10.899533660537003,
            },
          },
          data: {
            size: {
              width: 214.43992303301346,
              height: 80,
            },
            note: 'Get the weather of city',
          },
        },
        {
          id: '909285',
          type: 'comment',
          meta: {
            position: {
              x: 1509,
              y: 2.842170943040401e-14,
            },
          },
          data: {
            size: {
              width: 214.43992303301346,
              height: 80,
            },
            note: 'Parse string to JSON',
          },
        },
        {
          id: '399663',
          type: 'comment',
          meta: {
            position: {
              x: 1968.9999999999998,
              y: 0,
            },
          },
          data: {
            size: {
              width: 214.43992303301346,
              height: 80,
            },
            note: 'Give direct, concise clothing suggestions based on weather',
          },
        },
        {
          id: 'group_fRJTc',
          type: 'group',
          meta: {
            position: {
              x: 705,
              y: 52.28918543272561,
            },
          },
          data: {
            color: 'Indigo',
            title: 'Group_handle_data',
            parentID: 'loop_CR9P_',
            blockIDs: ['http_cFiha', 'code_TYMaY', 'llm_4tfMh'],
          },
        },
        {
          id: 'http_cFiha',
          type: 'http',
          meta: {
            position: {
              x: 344,
              y: 107.71081456727438,
            },
          },
          data: {
            title: 'HTTP_Weather',
            api: {
              method: 'GET',
              url: {
                type: 'template',
                content: 'https://wttr.in/{{loop_CR9P__locals.item}}?format=j1',
              },
            },
            body: {
              bodyType: 'none',
            },
            outputs: {
              type: 'object',
              properties: {
                body: {
                  type: 'string',
                },
                headers: {
                  type: 'object',
                },
                statusCode: {
                  type: 'integer',
                },
              },
            },
            timeout: {
              timeout: 10000,
              retryTimes: 1,
            },
          },
        },
        {
          id: 'code_TYMaY',
          type: 'code',
          meta: {
            position: {
              x: 804,
              y: 276.0108145672744,
            },
          },
          data: {
            title: 'Code_ParseTemp',
            inputsValues: {
              weather: {
                type: 'ref',
                content: ['http_cFiha', 'body'],
                extra: {
                  index: 0,
                },
              },
            },
            script: {
              language: 'javascript',
              content:
                "// Here, you can retrieve input variables from the node using 'params' and output results using 'ret'.\n// 'params' has been correctly injected into the environment.\n// Here's an example of getting the value of the parameter named 'input' from the node input:\n// const input = params.input;\n// Here's an example of outputting a 'ret' object containing multiple data types:\n// const ret = { \"name\": 'Xiaoming', \"hobbies\": [\"Reading\", \"Traveling\"] };\n\nasync function main({ params }) {\n  // Build the output object\n  const data = JSON.parse(params.weather)\n  const temperature = Number(data.current_condition[0].temp_C)\n  const ret = {\n    temperature,\n  };\n\n  return ret;\n}",
            },
            outputs: {
              type: 'object',
              properties: {
                temperature: {
                  type: 'number',
                },
              },
              required: [],
            },
            inputs: {
              type: 'object',
              properties: {
                weather: {
                  type: 'string',
                },
              },
            },
          },
        },
        {
          id: 'llm_4tfMh',
          type: 'llm',
          meta: {
            position: {
              x: 1264,
              y: 111.4108145672744,
            },
          },
          data: {
            title: 'LLM_outfit',
            inputsValues: {
              modelName: {
                type: 'ref',
                content: ['start_0', 'model_name'],
              },
              apiKey: {
                type: 'ref',
                content: ['start_0', 'api_key'],
              },
              apiHost: {
                type: 'ref',
                content: ['start_0', 'api_host'],
              },
              temperature: {
                type: 'constant',
                content: 0.5,
              },
              systemPrompt: {
                type: 'template',
                content:
                  'You are a fashion advisor. Give direct, concise clothing suggestions based on weather. No\n  explanations.',
              },
              prompt: {
                type: 'template',
                content: '{{loop_CR9P__locals.item}} {{code_TYMaY.temperature}}°C',
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
          sourceNodeID: 'block_start_Qy2kJ',
          targetNodeID: 'http_cFiha',
        },
        {
          sourceNodeID: 'condition_hsMZW',
          targetNodeID: 'block_end_ascT4',
          sourcePortID: 'if_J58vJ',
        },
        {
          sourceNodeID: 'llm_4tfMh',
          targetNodeID: 'condition_hsMZW',
        },
        {
          sourceNodeID: 'condition_hsMZW',
          targetNodeID: 'continue_YmaO7',
          sourcePortID: 'else',
        },
        {
          sourceNodeID: 'http_cFiha',
          targetNodeID: 'code_TYMaY',
        },
        {
          sourceNodeID: 'code_TYMaY',
          targetNodeID: 'llm_4tfMh',
        },
      ],
    },
    {
      id: '440190',
      type: 'llm',
      meta: {
        position: {
          x: 3256,
          y: -173.85540728363713,
        },
      },
      data: {
        title: 'LLM_Advisor',
        inputsValues: {
          modelName: {
            type: 'ref',
            content: ['start_0', 'model_name'],
          },
          apiKey: {
            type: 'ref',
            content: ['start_0', 'api_key'],
          },
          apiHost: {
            type: 'ref',
            content: ['start_0', 'api_host'],
          },
          temperature: {
            type: 'constant',
            content: 0.5,
          },
          systemPrompt: {
            type: 'template',
            content:
              'You are a travel advisor. Based on weather and clothing comfort, recommend the best city to\n  visit with one sentence.',
          },
          prompt: {
            type: 'template',
            content:
              'Given these cities with temperatures and clothing suggestions:\n<Cities>\n  {{start_0.cities}}\n</Cities>\n\n<Temperatures>\n  {{loop_CR9P_.temperatures}}\n</Temperatures>\n\n<outfits>\n  {{loop_CR9P_.outfits}}\n</outfits>\n\nWhich city is most comfortable for travel? Return only city name and reason.',
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
      id: '316938',
      type: 'comment',
      meta: {
        position: {
          x: 3256,
          y: -325.6608145672743,
        },
      },
      data: {
        size: {
          width: 261.60708060422826,
          height: 113.41006994627716,
        },
        note: 'Based on weather and clothing comfort, recommend the best city to visit.',
      },
    },
  ],
  edges: [
    {
      sourceNodeID: 'start_0',
      targetNodeID: 'loop_CR9P_',
    },
    {
      sourceNodeID: '440190',
      targetNodeID: 'end_0',
    },
    {
      sourceNodeID: 'loop_CR9P_',
      targetNodeID: '440190',
    },
  ],
  globalVariable: {
    type: 'object',
    required: [],
    properties: {
      userId: {
        type: 'string',
      },
    },
  },
};
