import { WorkflowSchema } from '@flowgram.ai/runtime-interface';

import { IState, IVariableStore } from '../state';
import { IDocument } from '../document';

export interface ContextInitParams {
  schema: WorkflowSchema;
}

export interface IContext {
  id: string;
  variableStore: IVariableStore;
  state: IState;
  document: IDocument;
  init(params: ContextInitParams): void;
  dispose(): void;
}
