import type { WorkflowSchema } from '@flowgram.ai/runtime-interface';

import { uuid } from '@runtime/utils';
import { IRuntime } from '@runtime/type';

export class RuntimeModel implements IRuntime {
  public readonly id: string;

  public readonly schema: WorkflowSchema;

  constructor(params: { schema: WorkflowSchema }) {
    const { schema } = params;
    this.id = uuid();
    this.schema = schema;
  }
}
