import { FlowGramAPIDefine, FlowGramAPIMethod } from '@flowgram.ai/runtime-interface';

import { APIHandler } from './type';
import { publicProcedure } from './trpc';

export const createAPI = <I, O>(
  define: FlowGramAPIDefine,
  handler: (input: I) => O
): APIHandler => {
  if (define.method === FlowGramAPIMethod.GET) {
    const procedure = publicProcedure
      .meta({
        openapi: {
          method: define.method,
          path: define.path,
          summary: define.name,
          tags: [define.module],
        },
      })
      .input(define.schema.input)
      .output(define.schema.output)
      .query((opts) => {
        const input = opts.input as unknown as I;
        const output: O = handler(input);
        return output;
      });

    return {
      define,
      procedure: procedure as any,
    };
  }

  const procedure = publicProcedure
    .meta({
      openapi: {
        method: define.method,
        path: define.path,
        summary: define.name,
        tags: [define.module],
      },
    })
    .input(define.schema.input)
    .output(define.schema.output)
    .mutation((opts) => {
      const input = opts.input as unknown as I;
      const output: O = handler(input);
      return output;
    });
  return {
    define,
    procedure: procedure as any,
  };
};
