import z from 'zod';

import { WorkflowInputs } from '@runtime/index';
import { FlowGramAPIDefine } from '@api/type';
import { WorkflowZodSchema } from '@api/schema';
import { FlowGramAPIMethod, FlowGramAPIName } from '@api/constant';

export interface RunInput {
  inputs: WorkflowInputs;
  schema: string;
}

export interface RunOutput {
  taskID: string;
}

export const RunDefine: FlowGramAPIDefine = {
  name: FlowGramAPIName.Run,
  method: FlowGramAPIMethod.POST,
  path: 'run',
  schema: {
    input: z.object({
      schema: z.string(),
      inputs: WorkflowZodSchema.Inputs,
    }),
    output: z.object({
      taskID: z.string(),
    }),
  },
};
