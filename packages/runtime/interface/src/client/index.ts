import type {
  TaskCancelInput,
  TaskCancelOutput,
  TaskReportInput,
  TaskReportOutput,
  TaskResultInput,
  TaskResultOutput,
  TaskRunInput,
  TaskRunOutput,
} from '@api/index';

export interface IRuntimeClient {
  taskRun: (input: TaskRunInput) => Promise<TaskRunOutput | undefined>;
  taskReport: (input: TaskReportInput) => Promise<TaskReportOutput | undefined>;
  taskResult: (input: TaskResultInput) => Promise<TaskResultOutput | undefined>;
  taskCancel: (input: TaskCancelInput) => Promise<TaskCancelOutput | undefined>;
}
