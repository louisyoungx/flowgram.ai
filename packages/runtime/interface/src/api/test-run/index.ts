import z from 'zod';

import { FlowGramAPIDefine } from '@api/type';
import { FlowGramAPIName, FlowGramAPIMethod } from '@api/constant';

export interface TestRunReq {
  schema: string;
  input: Object;
}

export interface TestRunRes {
  taskId: string;
}

export const TestRunDefine: FlowGramAPIDefine = {
  name: FlowGramAPIName.TestRun,
  method: FlowGramAPIMethod.POST,
  path: 'test-run',
  schema: {
    input: z.object({
      schema: z.string(),
      input: z.custom<Object>(),
    }),
    output: z.object({
      taskId: z.string(),
    }),
  },
};
