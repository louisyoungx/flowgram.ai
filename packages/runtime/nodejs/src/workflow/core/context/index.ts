import { InvokeParams, IContext, IDocument, IState, ITask, IVariableStore } from '@workflow/type';
import { WorkflowRuntimeTask } from '@workflow/task';
import { WorkflowRuntimeState, WorkflowRuntimeVariableStore } from '@workflow/state';
import { uuid } from '@workflow/infra';
import { WorkflowRuntimeDocument } from '@workflow/document';

export class WorkflowRuntimeContext implements IContext {
  public readonly id: string;

  public readonly document: IDocument;

  public readonly variableStore: IVariableStore;

  public readonly state: IState;

  public readonly task: ITask;

  constructor() {
    this.id = uuid();
    this.document = new WorkflowRuntimeDocument();
    this.variableStore = new WorkflowRuntimeVariableStore();
    this.state = new WorkflowRuntimeState(this.variableStore);
    this.task = new WorkflowRuntimeTask();
  }

  public init(params: InvokeParams): void {
    const { schema, inputs } = params;
    this.document.init(schema);
    this.variableStore.init();
    this.state.init(inputs);
    this.task.init();
  }

  public dispose(): void {
    this.document.dispose();
    this.variableStore.dispose();
    this.state.dispose();
    // this.task.dispose(); // 数据没有持久化，不对任务进行销毁
  }

  public static create(): IContext {
    return new WorkflowRuntimeContext();
  }
}
