import {
  TaskCancelDefine,
  TaskCancelInput,
  TaskCancelOutput,
} from '@flowgram.ai/runtime-interface';

import { WorkflowApplication } from '@application/workflow';
import { createAPI } from '@api/create-api';

export const TaskCancelAPI = createAPI<TaskCancelInput, TaskCancelOutput>(
  TaskCancelDefine,
  (input) => {
    const app = WorkflowApplication.instance;
    const { taskID } = input;
    const success = app.cancel(taskID);
    const output: TaskCancelOutput = {
      success,
    };
    return output;
  }
);
