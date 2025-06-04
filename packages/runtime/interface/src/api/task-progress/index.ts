import z from 'zod';

import { FlowGramAPIDefine } from '@api/type';
import { FlowGramAPIName, FlowGramAPIMethod } from '@api/constant';

export enum TaskProgressStatus {
  Pending = 'pending',
  Processing = 'processing',
  Success = 'success',
  Failed = 'failed',
  Paused = 'paused',
  Canceled = 'canceled',
}

export interface TaskProgressNodeData {
  nodeId: string;
  status: TaskProgressStatus;
  executionTime: number;
  result: {
    input: Object;
    output: Object;
  };
}

export interface TaskProgressReq {
  taskId: string;
}

export interface TaskProgressRes {
  taskId: string;
  status: TaskProgressStatus;
  nodeResults: TaskProgressNodeData[];
}

export const TaskProgressDefine: FlowGramAPIDefine = {
  name: FlowGramAPIName.TaskProgress,
  method: FlowGramAPIMethod.GET,
  path: '/api/test-run',
  schema: {
    req: z.object({
      taskId: z.string(),
    }),
    res: z.object({
      taskId: z.string(),
      status: z.nativeEnum(TaskProgressStatus),
      nodeResults: z.array(
        z.object({
          nodeId: z.string(),
          status: z.nativeEnum(TaskProgressStatus),
          executionTime: z.number(),
          result: z.object({
            input: z.custom<Object>(),
            output: z.custom<Object>(),
          }),
        })
      ),
    }),
  },
};
