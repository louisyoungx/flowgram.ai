import { publicProcedure, router } from './trpc';

export const appRouter = router({
  hello: publicProcedure.query(() => 'hello workflow runtime'),
});

export type AppRouter = typeof appRouter;
