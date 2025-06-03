import { ITask } from '../task';
import { IState, IVariableStore } from '../state';
import { IDocument } from '../document';
import { InvokeParams } from '../base';

export interface IContext {
  id: string;
  variableStore: IVariableStore;
  state: IState;
  document: IDocument;
  task: ITask;
  init(params: InvokeParams): void;
  dispose(): void;
}
