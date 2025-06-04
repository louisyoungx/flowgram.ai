import { IState, IVariableStore } from '../state';
import { ISnapshotCenter, IReporter, IStatusCenter, IIOCenter } from '../reporter';
import { IDocument } from '../document';
import { InvokeParams } from '../base';

export interface IContext {
  id: string;
  variableStore: IVariableStore;
  state: IState;
  document: IDocument;
  ioCenter: IIOCenter;
  snapshotCenter: ISnapshotCenter;
  statusCenter: IStatusCenter;
  reporter: IReporter;
  init(params: InvokeParams): void;
  dispose(): void;
}
