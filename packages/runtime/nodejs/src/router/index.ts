import { router } from './trpc';
import { subRouter } from './routers/sub';
import { postsRouter } from './routers/posts';
import { apiRouter } from './routers/api';

export const appRouter = router({
  posts: postsRouter,
  sub: subRouter,
  api: apiRouter,
});

export type AppRouter = typeof appRouter;
