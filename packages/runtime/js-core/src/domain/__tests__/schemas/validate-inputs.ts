/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { WorkflowSchema } from '@flowgram.ai/runtime-interface';

export interface ValidateInputsSchemaInputs {
  AA: string;
  BB: number;
  CC?: {
    CA: string;
    CB: number;
    CC: number;
    CD: boolean;
    CE: {
      CEA: string;
    };
    CF: string[];
  };
  DD?: Array<{
    DA?: string;
    DB?: {
      DBA: string;
    };
  }>;
  EE: {
    EA: {
      EAA: string;
    };
    EB?: string;
  };
}

export const validateInputsSchema: WorkflowSchema = {
  nodes: [
    {
      id: 'start_0',
      type: 'start',
      meta: {
        position: {
          x: 180,
          y: 0,
        },
      },
      data: {
        title: 'Start',
        outputs: {
          type: 'object',
          properties: {
            AA: {
              key: 10,
              name: 'AA',
              type: 'string',
              extra: {
                index: 0,
              },
            },
            BB: {
              key: 11,
              name: 'BB',
              type: 'integer',
              extra: {
                index: 1,
              },
            },
            CC: {
              key: 12,
              name: 'CC',
              type: 'object',
              extra: {
                index: 2,
              },
              properties: {
                CA: {
                  key: 13,
                  name: 'CA',
                  type: 'string',
                  extra: {
                    index: 0,
                  },
                },
                CB: {
                  key: 14,
                  name: 'CB',
                  type: 'integer',
                  extra: {
                    index: 1,
                  },
                },
                CC: {
                  key: 50,
                  name: 'CC',
                  type: 'number',
                  extra: {
                    index: 3,
                  },
                },
                CD: {
                  key: 51,
                  name: 'CD',
                  type: 'boolean',
                  extra: {
                    index: 4,
                  },
                },
                CE: {
                  key: 52,
                  name: 'CE',
                  type: 'object',
                  extra: {
                    index: 5,
                  },
                  properties: {
                    CEA: {
                      key: 53,
                      name: 'CEA',
                      type: 'string',
                      extra: {
                        index: 1,
                      },
                    },
                  },
                  required: ['CEA'],
                },
                CF: {
                  key: 54,
                  name: 'CF',
                  type: 'array',
                  extra: {
                    index: 6,
                  },
                  items: {
                    type: 'string',
                  },
                },
              },
              required: ['CA', 'CB', 'CC', 'CD', 'CE', 'CF'],
            },
            DD: {
              key: 15,
              name: 'DD',
              type: 'array',
              extra: {
                index: 3,
              },
              items: {
                type: 'object',
                properties: {
                  DA: {
                    key: 16,
                    name: 'DA',
                    type: 'string',
                    extra: {
                      index: 1,
                    },
                  },
                  DB: {
                    key: 17,
                    name: 'DB',
                    type: 'object',
                    extra: {
                      index: 2,
                    },
                    properties: {
                      DBA: {
                        key: 19,
                        name: 'DBA',
                        type: 'string',
                        extra: {
                          index: 1,
                        },
                      },
                    },
                    required: ['DBA'],
                  },
                },
                required: [],
              },
            },
            EE: {
              key: 20,
              name: 'EE',
              type: 'object',
              extra: {
                index: 4,
              },
              properties: {
                EA: {
                  key: 21,
                  name: 'EA',
                  type: 'object',
                  extra: {
                    index: 1,
                  },
                  properties: {
                    EAA: {
                      key: 22,
                      name: 'EAA',
                      type: 'string',
                      extra: {
                        index: 1,
                      },
                    },
                  },
                  required: ['EAA'],
                },
                EB: {
                  key: 23,
                  name: 'EB',
                  type: 'string',
                  extra: {
                    index: 2,
                  },
                },
              },
              required: ['EA'],
            },
          },
          required: ['AA', 'EE'],
        },
      },
    },
    {
      id: 'end_0',
      type: 'end',
      meta: {
        position: {
          x: 640,
          y: 0,
        },
      },
      data: {
        title: 'End',
        inputs: {
          type: 'object',
          properties: {
            AA: {
              type: 'string',
            },
            BB: {
              type: 'integer',
            },
            CC: {
              type: 'object',
            },
            DD: {
              type: 'array',
            },
            EE: {
              type: 'object',
            },
          },
        },
        inputsValues: {
          AA: {
            type: 'ref',
            content: ['start_0', 'AA'],
          },
          BB: {
            type: 'ref',
            content: ['start_0', 'BB'],
          },
          CC: {
            type: 'ref',
            content: ['start_0', 'CC'],
          },
          DD: {
            type: 'ref',
            content: ['start_0', 'DD'],
          },
          EE: {
            type: 'ref',
            content: ['start_0', 'EE'],
          },
        },
      },
    },
  ],
  edges: [
    {
      sourceNodeID: 'start_0',
      targetNodeID: 'end_0',
    },
  ],
};
