import {
  TaskReportInput,
  TaskReportOutput,
  TaskRunInput,
  TaskRunOutput,
} from '@flowgram.ai/runtime-interface';

interface ServerError {
  code: string;
  message: string;
}

/**
 * 还没封装，先跑通流程
 */
export namespace WorkflowRuntimeClient {
  export const isError = (output: unknown | undefined): output is ServerError =>
    !!output && (output as ServerError).code !== undefined;

  export const TaskRun = async (input: TaskRunInput): Promise<TaskRunOutput | undefined> => {
    try {
      const body = JSON.stringify(input);
      const response = await fetch('http://localhost:4000/api/task/run', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
        redirect: 'follow',
      });
      const output: TaskRunOutput | ServerError = await response.json();
      if (isError(output)) {
        console.error('TaskRun failed', output);
        return;
      }
      return output;
    } catch (e) {
      console.error(e);
      return;
    }
  };

  export const TaskReport = async (
    input: TaskReportInput
  ): Promise<TaskReportOutput | undefined> => {
    try {
      const response = await fetch(`http://localhost:4000/api/task/report?taskID=${input.taskID}`, {
        method: 'GET',
        redirect: 'follow',
      });
      const output: TaskReportOutput | ServerError = await response.json();
      if (isError(output)) {
        console.error('TaskReport failed', output);
        return;
      }
      return output;
    } catch (e) {
      console.error(e);
      return;
    }
  };
}
