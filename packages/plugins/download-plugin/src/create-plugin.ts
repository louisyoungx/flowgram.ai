/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { definePluginCreator, PluginContext } from '@flowgram.ai/core';

import { CreateDownloadPluginOptions } from './type';
import { FlowDownloadService } from './service';

export const createDownloadPlugin = definePluginCreator<CreateDownloadPluginOptions>({
  onBind: ({ bind }) => {
    bind(FlowDownloadService).toSelf().inSingletonScope();
  },
  onInit: (ctx: PluginContext, opts: CreateDownloadPluginOptions) => {
    ctx.get(FlowDownloadService).init(opts);
  },
  onDispose: (ctx: PluginContext) => {
    ctx.get(FlowDownloadService).dispose();
  },
});
