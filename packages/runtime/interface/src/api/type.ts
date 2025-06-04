import type z from 'zod';

import { FlowGramAPIMethod, FlowGramAPIName } from './constant';

export interface FlowGramAPIDefine {
  name: FlowGramAPIName;
  method: FlowGramAPIMethod;
  path: string;
  schema: {
    req: z.ZodFirstPartySchemaTypes;
    res: z.ZodFirstPartySchemaTypes;
  };
}

export interface FlowGramAPIDefines {
  [key: string]: FlowGramAPIDefine;
}

export type WorkflowInputs = Record<string, any>;
export type WorkflowOutputs = Record<string, any>;
