import type { WorkflowSchema } from '@flowgram.ai/runtime-interface';

export interface IRuntime {
  id: string;
  schema: WorkflowSchema;
}

export interface RuntimeConstructor {
  new (schema: WorkflowSchema): IRuntime;
}
