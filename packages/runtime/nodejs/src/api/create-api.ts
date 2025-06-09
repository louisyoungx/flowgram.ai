import { WorkflowRuntimeAPIs } from '@flowgram.ai/runtime-js';
import { FlowGramAPIMethod, FlowGramAPIName, FlowGramAPIs } from '@flowgram.ai/runtime-interface';

import { APIHandler } from './type';
import { publicProcedure } from './trpc';

export const createAPI = (apiName: FlowGramAPIName): APIHandler => {
  const define = FlowGramAPIs[apiName];
  const caller = WorkflowRuntimeAPIs[apiName];
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
      .query(async (opts) => {
        const input = opts.input;
        const output = await caller(input);
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
    .mutation(async (opts) => {
      const input = opts.input;
      const output = await caller(input);
      return output;
    });
  return {
    define,
    procedure: procedure as any,
  };
};
