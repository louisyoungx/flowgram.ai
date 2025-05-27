import type { ServerInfo, ServerParams } from '@server/type';

export const SERVER_PARAMS: ServerParams = {
  dev: false,
  port: 4000,
  prefix: '/api',
};

export const SERVER_INFO: ServerInfo = {
  name: 'flowgram-runtime',
  runtime: 'nodejs',
  version: '0.0.1',
};
