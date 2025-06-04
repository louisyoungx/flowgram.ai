import z from 'zod';

import { WorkflowApplication } from '@application/workflow';
import { publicProcedure, router } from './trpc';

export const appRouter = router({
  run: publicProcedure
    .input(
      z.object({
        schema: z.string(),
        inputs: z.record(z.string(), z.unknown()),
      })
    )
    .output(
      z.object({
        taskID: z.string(),
      })
    )
    .mutation(({ input }) => {
      const app = WorkflowApplication.instance;
      const { schema: stringSchema, inputs } = input;
      const schema = JSON.parse(stringSchema);
      const taskID = app.run({
        schema,
        inputs,
      });
      return {
        taskID,
      };
    }),
  'get-progress': publicProcedure
    .input(
      z.object({
        taskID: z.string(),
      })
    )
    .mutation(({ input }) => {
      const app = WorkflowApplication.instance;
      const { taskID } = input;
      const progress = app.getProgress(taskID);
      return progress;
    }),
  'get-result': publicProcedure
    .input(
      z.object({
        taskID: z.string(),
      })
    )
    .mutation(({ input }) => {
      const app = WorkflowApplication.instance;
      const { taskID } = input;
      const result = app.getResult(taskID);
      return result;
    }),
});

export type AppRouter = typeof appRouter;
