import z from 'zod';

import { InvokeParams, WorkflowInputs } from '@runtime/index';
import { FlowGramAPIDefine } from '@api/type';
import { FlowGramAPIMethod, FlowGramAPIName } from '@api/constant';

export interface RunReq extends InvokeParams {}

export interface RunRes {
  taskID: string;
}

export const RunDefine: FlowGramAPIDefine = {
  name: FlowGramAPIName.Run,
  method: FlowGramAPIMethod.POST,
  path: 'run',
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
