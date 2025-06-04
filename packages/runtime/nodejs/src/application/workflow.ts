import { InvokeParams, IContainer, IEngine, ITask, IReport, WorkflowOutputs } from '@workflow/type';
import { WorkflowRuntimeContainer } from '@workflow/core';

export class WorkflowApplication {
  private container: IContainer;

  public tasks: Map<string, ITask>;

  constructor() {
    this.container = WorkflowRuntimeContainer.instance;
    this.tasks = new Map();
  }

  public run(params: InvokeParams): string {
    const engine = this.container.get<IEngine>(IEngine);
    const task = engine.invoke(params);
    this.tasks.set(task.id, task);
    return task.id;
  }

  public cancel(taskID: string): void {
    const task = this.tasks.get(taskID);
    if (!task) {
      return;
    }
    task.cancel();
  }

  public getProgress(taskID: string): IReport | undefined {
    const task = this.tasks.get(taskID);
    if (!task) {
      return;
    }
    return task.context.reporter.export();
  }

  public getResult(taskID: string): WorkflowOutputs | undefined {
    const task = this.tasks.get(taskID);
    if (!task) {
      return;
    }
    if (!task.context.statusCenter.workflow.terminated) {
      return;
    }
    return task.context.ioCenter.outputs;
  }

  private static _instance: WorkflowApplication;

  public static get instance(): WorkflowApplication {
    if (this._instance) {
      return this._instance;
    }
    this._instance = new WorkflowApplication();
    return this._instance;
  }
}
