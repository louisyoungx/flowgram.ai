import { ContextInitParams, IContext, IDocument, IState, IVariableStore } from '@workflow/type';
import { WorkflowRuntimeState, WorkflowRuntimeVariableStore } from '@workflow/state';
import { uuid } from '@workflow/infra';
import { WorkflowRuntimeDocument } from '@workflow/document';

export class WorkflowRuntimeContext implements IContext {
  public readonly id: string;

  public readonly document: IDocument;

  public readonly variableStore: IVariableStore;

  public readonly state: IState;

  constructor() {
    this.id = uuid();
    this.document = new WorkflowRuntimeDocument();
    this.variableStore = new WorkflowRuntimeVariableStore();
    this.state = new WorkflowRuntimeState(this.variableStore);
  }

  public init(params: ContextInitParams): void {
    const { schema } = params;
    this.document.init(schema);
    this.variableStore.init();
    this.state.init();
  }

  public dispose(): void {
    this.document.dispose();
    this.variableStore.dispose();
    this.state.dispose();
  }

  public static create(): IContext {
    return new WorkflowRuntimeContext();
  }
}
