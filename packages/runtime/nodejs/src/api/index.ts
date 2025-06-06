import {
  taskRunCall,
  taskReportCall,
  taskResultCall,
  taskCancelCall,
} from '@flowgram.ai/runtime-js';
import {
  TaskRunInput,
  TaskRunOutput,
  TaskRunDefine,
  TaskReportInput,
  TaskReportOutput,
  TaskReportDefine,
  TaskResultInput,
  TaskResultOutput,
  TaskResultDefine,
  TaskCancelInput,
  TaskCancelOutput,
  TaskCancelDefine,
} from '@flowgram.ai/runtime-interface';

import { APIRouter } from './type';
import { router } from './trpc';
import { createAPI } from './create-api';

const TaskRunAPI = createAPI<TaskRunInput, TaskRunOutput>(TaskRunDefine, taskRunCall);

const TaskReportAPI = createAPI<TaskReportInput, TaskReportOutput>(
  TaskReportDefine,
  taskReportCall
);

const TaskResultAPI = createAPI<TaskResultInput, TaskResultOutput>(
  TaskResultDefine,
  taskResultCall
);

const TaskCancelAPI = createAPI<TaskCancelInput, TaskCancelOutput>(
  TaskCancelDefine,
  taskCancelCall
);

const APIS = [TaskRunAPI, TaskResultAPI, TaskReportAPI, TaskCancelAPI];

export const routers = APIS.reduce((acc, api) => {
  acc[api.define.path] = api.procedure;
  return acc;
}, {} as APIRouter);

export const appRouter = router(routers);

export type AppRouter = typeof appRouter;
