import { IRecorder, IStatus } from '../task';
import { IState, IVariableStore } from '../state';
import { IDocument } from '../document';
import { InvokeParams } from '../base';

export interface IContext {
  id: string;
  variableStore: IVariableStore;
  status: IStatus;
  state: IState;
  document: IDocument;
  recorder: IRecorder;
  init(params: InvokeParams): void;
  dispose(): void;
}
