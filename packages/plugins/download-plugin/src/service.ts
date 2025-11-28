/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */
import { inject, injectable } from 'inversify';
import { DisposableCollection } from '@flowgram.ai/utils';
import { FlowDocument } from '@flowgram.ai/document';

import type { DownloadServiceOptions } from './type';

@injectable()
export class FlowDownloadService {
  @inject(FlowDocument) private readonly document: FlowDocument;

  private toDispose: DisposableCollection;

  constructor() {
    this.document;
  }

  public init(options?: Partial<DownloadServiceOptions>) {}

  public dispose(): void {
    this.toDispose.dispose();
  }
}
