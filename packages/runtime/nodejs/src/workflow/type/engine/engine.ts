import { WorkflowSchema } from '@flowgram.ai/runtime-interface';

import { IState } from '../state';
import { IDocument } from '../document/document';
import { IValidation } from './validation';
import { IExecutor } from './executor';

export interface EngineServices {
  Document: IDocument;
  State: IState;
  Executor: IExecutor;
  Validation: IValidation;
}

export interface IEngine {
  execute(schema: WorkflowSchema, input: Record<string, any>): Promise<Record<string, any>>;
}

export const IEngine = Symbol.for('Engine');
