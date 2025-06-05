import { TaskRunDefine, TaskRunInput, TaskRunOutput } from '@flowgram.ai/runtime-interface';

import { WorkflowApplication } from '@application/workflow';
import { createAPI } from '@api/create-api';

export const TaskRunAPI = createAPI<TaskRunInput, TaskRunOutput>(TaskRunDefine, (input) => {
  const app = WorkflowApplication.instance;
  const { schema: stringSchema, inputs } = input;
  const schema = JSON.parse(stringSchema);
  const taskID = app.run({
    schema,
    inputs,
  });
  const output: TaskRunOutput = {
    taskID,
  };
  return output;
});
