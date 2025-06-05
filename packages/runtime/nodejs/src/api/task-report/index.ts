import {
  TaskReportDefine,
  TaskReportInput,
  TaskReportOutput,
} from '@flowgram.ai/runtime-interface';

import { WorkflowApplication } from '@application/workflow';
import { createAPI } from '@api/create-api';

export const TaskReportAPI = createAPI<TaskReportInput, TaskReportOutput>(
  TaskReportDefine,
  (input) => {
    const app = WorkflowApplication.instance;
    const { taskID } = input;
    const output: TaskReportOutput = app.report(taskID);
    return output;
  }
);
