import { WorkflowRuntimeClient } from '@flowgram.ai/runtime-js';
import {
  IRuntimeClient,
  TaskReportInput,
  TaskReportOutput,
  TaskRunInput,
  TaskRunOutput,
} from '@flowgram.ai/runtime-interface';

interface ServerError {
  code: string;
  message: string;
}

const isError = (output: unknown | undefined): output is ServerError =>
  !!output && (output as ServerError).code !== undefined;

const taskRun = async (input: TaskRunInput): Promise<TaskRunOutput | undefined> => {
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

const taskReport = async (input: TaskReportInput): Promise<TaskReportOutput | undefined> => {
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

/**
 * 还没封装，先跑通流程
 */
const runtimeServerClient: IRuntimeClient = {
  taskRun: taskRun,
  taskReport: taskReport,
  taskResult: async () => undefined, // TODO
  taskCancel: async () => undefined, // TODO
};

/**
 * 还没封装，先跑通流程
 */
const runtimeBrowserClient = WorkflowRuntimeClient.instance;

const isServerMode = false; // 是否开启服务端运行模式

export const runtimeClient: IRuntimeClient = isServerMode
  ? runtimeServerClient
  : runtimeBrowserClient;
