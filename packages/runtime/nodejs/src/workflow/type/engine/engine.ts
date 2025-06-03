import { WorkflowSchema } from '@flowgram.ai/runtime-interface';

import { IValidation } from './validation';
import { IExecutor } from './executor';

export interface EngineServices {
  Executor: IExecutor;
  Validation: IValidation;
}

export interface IEngine {
  execute(schema: WorkflowSchema, input: Record<string, any>): Promise<Record<string, any>>;
}

export const IEngine = Symbol.for('Engine');
