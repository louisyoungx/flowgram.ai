import z from 'zod';

import { type FlowGramAPIDefine } from '@api/type';
import { FlowGramAPIMethod, FlowGramAPIName } from '@api/constant';

export interface ServerInfoReq {}

export interface ServerInfoRes {
  name: string;
  runtime: string;
  version: string;
  time: string;
}

export const ServerInfoDefine: FlowGramAPIDefine = {
  name: FlowGramAPIName.ServerInfo,
  method: FlowGramAPIMethod.GET,
  path: '/',
  schema: {
    req: z.undefined(),
    res: z.object({
      name: z.string(),
      runtime: z.string(),
      version: z.string(),
      time: z.string(),
    }),
  },
};
