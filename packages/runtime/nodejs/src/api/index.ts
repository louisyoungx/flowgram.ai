import {
  RunDefine,
  RunInput,
  RunOutput,
  TaskReportDefine,
  TaskReportInput,
  TaskReportOutput,
  TaskResultDefine,
  TaskResultInput,
  TaskResultOutput,
} from '@flowgram.ai/runtime-interface';

import { WorkflowApplication } from '@application/workflow';
import { publicProcedure, router } from './trpc';

export const appRouter = router({
  [RunDefine.path]: publicProcedure
    .input(RunDefine.schema.input)
    .output(RunDefine.schema.output)
    .mutation((opts) => {
      const input: RunInput = opts.input;
      const app = WorkflowApplication.instance;
      const { schema: stringSchema, inputs } = input;
      const schema = JSON.parse(stringSchema);
      const taskID = app.run({
        schema,
        inputs,
      });
      const output: RunOutput = {
        taskID,
      };
      return output;
    }),
  [TaskReportDefine.path]: publicProcedure
    .input(TaskReportDefine.schema.input)
    .output(TaskReportDefine.schema.output)
    .mutation((opts) => {
      const input: TaskReportInput = opts.input;
      const app = WorkflowApplication.instance;
      const { taskID } = input;
      const output: TaskReportOutput = app.report(taskID);
      return output;
    }),
  [TaskResultDefine.path]: publicProcedure
    .input(TaskResultDefine.schema.input)
    .output(TaskResultDefine.schema.output)
    .mutation((opts) => {
      const input: TaskResultInput = opts.input;
      const app = WorkflowApplication.instance;
      const { taskID } = input;
      const output: TaskResultOutput = app.getResult(taskID);
      return output;
    }),
});

export type AppRouter = typeof appRouter;
