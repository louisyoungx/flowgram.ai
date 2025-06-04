import {
  InvokeParams,
  IContext,
  IDocument,
  IState,
  ISnapshotCenter,
  IVariableStore,
  IStatusCenter,
  IReporter,
  IIOCenter,
} from '@flowgram.ai/runtime-interface';

import { WorkflowRuntimeState, WorkflowRuntimeVariableStore } from '@workflow/state';
import { WorkflowRuntimeIOCenter } from '@workflow/reporter/aggregate/io-center';
import { WorkflowRuntimeReporter } from '@workflow/reporter/aggregate';
import { WorkflowRuntimeSnapshotCenter, WorkflowRuntimeStatusCenter } from '@workflow/reporter';
import { uuid } from '@workflow/infra';
import { WorkflowRuntimeDocument } from '@workflow/document';

export class WorkflowRuntimeContext implements IContext {
  public readonly id: string;

  public readonly document: IDocument;

  public readonly variableStore: IVariableStore;

  public readonly state: IState;

  public readonly ioCenter: IIOCenter;

  public readonly snapshotCenter: ISnapshotCenter;

  public readonly statusCenter: IStatusCenter;

  public readonly reporter: IReporter;

  constructor() {
    this.id = uuid();
    this.document = new WorkflowRuntimeDocument();
    this.variableStore = new WorkflowRuntimeVariableStore();
    this.state = new WorkflowRuntimeState(this.variableStore);
    this.ioCenter = new WorkflowRuntimeIOCenter();
    this.snapshotCenter = new WorkflowRuntimeSnapshotCenter();
    this.statusCenter = new WorkflowRuntimeStatusCenter();
    this.reporter = new WorkflowRuntimeReporter(
      this.ioCenter,
      this.snapshotCenter,
      this.statusCenter
    );
  }

  public init(params: InvokeParams): void {
    const { schema, inputs } = params;
    this.document.init(schema);
    this.variableStore.init();
    this.state.init();
    this.ioCenter.init(inputs);
    this.snapshotCenter.init();
    this.statusCenter.init();
    this.reporter.init();
  }

  public dispose(): void {
    this.document.dispose();
    this.variableStore.dispose();
    this.state.dispose();
    this.ioCenter.dispose();
    this.snapshotCenter.dispose();
    this.statusCenter.dispose();
    this.reporter.dispose();
  }

  public static create(): IContext {
    return new WorkflowRuntimeContext();
  }
}
