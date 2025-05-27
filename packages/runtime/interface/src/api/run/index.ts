import z from 'zod';

import { FlowGramAPIDefine } from '@api/type';
import { FlowGramAPIMethod, FlowGramAPIName } from '@api/constant';

export interface RunReq {
  schema: string;
  input: Object;
}

export interface RunRes {
  output: Object;
}

export const RunDefine: FlowGramAPIDefine = {
  name: FlowGramAPIName.Run,
  method: FlowGramAPIMethod.POST,
  path: '/api/run',
  schema: {
    req: z.object({
      schema: z.string(),
      input: z.custom<Object>(),
    }),
    res: z.object({
      output: z.custom<Object>(),
    }),
  },
};
