import z from 'zod';

import { FlowGramAPIDefine, WorkflowInputs } from '@api/type';
import { FlowGramAPIMethod, FlowGramAPIName } from '@api/constant';

export interface RunReq {
  schema: string;
  inputs: WorkflowInputs;
}

export interface RunRes {
  taskID: string;
}

export const RunDefine: FlowGramAPIDefine = {
  name: FlowGramAPIName.Run,
  method: FlowGramAPIMethod.POST,
  path: '/api/run',
  schema: {
    req: z.object({
      schema: z.string(),
      inputs: z.custom<WorkflowInputs>(),
    }),
    res: z.object({
      taskID: z.string(),
    }),
  },
};
