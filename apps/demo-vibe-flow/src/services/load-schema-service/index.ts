/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import {
  FlowDocument,
  FlowDocumentJSON,
  inject,
  injectable,
} from '@flowgram.ai/fixed-layout-editor';

@injectable()
export class WorkflowLoadSchemaService {
  @inject(FlowDocument) private document: FlowDocument;

  private currentSchema: FlowDocumentJSON;

  public load(schema: FlowDocumentJSON): void {
    if (!this.currentSchema) {
      this.currentSchema = schema;
      this.document.fromJSON(schema);
      return;
    }

    this.currentSchema = schema;
    this.document.fromJSON(schema);
    return;
    // TODO
  }
}
