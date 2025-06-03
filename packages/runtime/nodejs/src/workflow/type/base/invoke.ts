import { WorkflowSchema } from '@flowgram.ai/runtime-interface';

import { WorkflowInputs } from './inputs-outputs';

export interface InvokeParams {
  schema: WorkflowSchema;
  inputs: WorkflowInputs;
}

export type WorkflowRuntimeInvoke = (params: InvokeParams) => Promise<WorkflowInputs>;
