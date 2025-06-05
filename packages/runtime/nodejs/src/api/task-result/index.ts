import {
  TaskResultDefine,
  TaskResultInput,
  TaskResultOutput,
} from '@flowgram.ai/runtime-interface';

import { WorkflowApplication } from '@application/workflow';
import { createAPI } from '@api/create-api';

export const TaskResultAPI = createAPI<TaskResultInput, TaskResultOutput>(
  TaskResultDefine,
  (input) => {
    const app = WorkflowApplication.instance;
    const { taskID } = input;
    const output: TaskResultOutput = app.result(taskID);
    return output;
  }
);
