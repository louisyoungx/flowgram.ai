import { z } from 'zod';

import { publicProcedure, router } from '../trpc';

export const apiRouter = router({
  version: publicProcedure.query(() => ({ version: '0.42.0' })),
  hello: publicProcedure
    .input(z.object({ username: z.string().nullish() }).nullish())
    .query(({ input, ctx }) => ({
      text: `hello ${input?.username ?? ctx.user?.name ?? 'world'}`,
    })),
});
