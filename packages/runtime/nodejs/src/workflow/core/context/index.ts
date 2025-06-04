import {
  InvokeParams,
  IContext,
  IDocument,
  IState,
  IRecorder,
  IVariableStore,
  IStatus,
} from '@workflow/type';
import { WorkflowRuntimeRecorder, WorkflowRuntimeStatus } from '@workflow/task';
import { WorkflowRuntimeState, WorkflowRuntimeVariableStore } from '@workflow/state';
import { uuid } from '@workflow/infra';
import { WorkflowRuntimeDocument } from '@workflow/document';

export class WorkflowRuntimeContext implements IContext {
  public readonly id: string;

  public readonly document: IDocument;

  public readonly variableStore: IVariableStore;

  public readonly status: IStatus;

  public readonly state: IState;

  public readonly recorder: IRecorder;

  constructor() {
    this.id = uuid();
    this.document = new WorkflowRuntimeDocument();
    this.variableStore = new WorkflowRuntimeVariableStore();
    this.status = new WorkflowRuntimeStatus();
    this.state = new WorkflowRuntimeState(this.variableStore);
    this.recorder = new WorkflowRuntimeRecorder();
  }

  public init(params: InvokeParams): void {
    const { schema, inputs } = params;
    this.document.init(schema);
    this.variableStore.init();
    this.status.init();
    this.state.init(inputs);
    this.recorder.init();
  }

  public dispose(): void {
    this.document.dispose();
    this.variableStore.dispose();
    this.status.dispose();
    this.state.dispose();
    this.recorder.dispose();
  }

  public static create(): IContext {
    return new WorkflowRuntimeContext();
  }
}
