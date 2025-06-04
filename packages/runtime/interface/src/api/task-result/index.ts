import z from 'zod';

import { WorkflowOutputs } from '@runtime/index';
import { FlowGramAPIDefine } from '@api/type';
import { WorkflowZodSchema } from '@api/schema';
import { FlowGramAPIName, FlowGramAPIMethod } from '@api/constant';

export interface TaskResultInput {
  taskID: string;
}

export type TaskResultOutput = WorkflowOutputs | undefined;

export const TaskResultDefine: FlowGramAPIDefine = {
  name: FlowGramAPIName.TaskResult,
  method: FlowGramAPIMethod.GET,
  path: 'task-result',
  schema: {
    input: z.object({
      taskID: z.string(),
    }),
    output: WorkflowZodSchema.Outputs.optional(),
  },
};
