import fastify from 'fastify';
import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify';
import { type ServerInfoRes } from '@flowgram.ai/runtime-interface';
import ws from '@fastify/websocket';

import { SERVER_INFO } from '@config/index';
import { appRouter } from '@api/index';
import type { ServerParams } from './type';
import { createContext } from './context';

export function createServer(opts: ServerParams) {
  const dev = opts.dev ?? true;
  const port = opts.port ?? 4000;
  const prefix = opts.prefix ?? '/api';
  const server = fastify({ logger: dev });

  void server.register(ws);
  void server.register(fastifyTRPCPlugin, {
    prefix,
    useWSS: true,
    trpcOptions: { router: appRouter, createContext },
  });

  server.get('/', async (): Promise<ServerInfoRes> => {
    const serverTime = new Date();
    return {
      ...SERVER_INFO,
      time: serverTime.toISOString(),
    };
  });

  const stop = async () => {
    await server.close();
  };
  const start = async () => {
    try {
      await server.listen({ port });
      console.log('listening on port', port);
    } catch (err) {
      server.log.error(err);
      process.exit(1);
    }
  };

  return { server, start, stop };
}
