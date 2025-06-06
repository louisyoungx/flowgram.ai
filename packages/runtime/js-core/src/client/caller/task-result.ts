import { TaskResultInput, TaskResultOutput } from '@flowgram.ai/runtime-interface';

import { WorkflowApplication } from '@application/workflow';

export const taskResultCall = async (input: TaskResultInput): Promise<TaskResultOutput> => {
  const app = WorkflowApplication.instance;
  const { taskID } = input;
  const output: TaskResultOutput = app.result(taskID);
  return output;
};
