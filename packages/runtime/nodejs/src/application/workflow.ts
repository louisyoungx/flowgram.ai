import { InvokeParams, IContainer, IEngine, ITask } from '@workflow/type';
import { WorkflowRuntimeContainer } from '@workflow/core';

export class WorkflowApplication {
  private container: IContainer;

  private tasks: Map<string, ITask>;

  constructor() {
    this.container = WorkflowRuntimeContainer.instance;
  }

  public run(params: InvokeParams): string {
    const engine = this.container.get<IEngine>(IEngine);
    const task = engine.invoke(params);
    this.tasks.set(task.context.id, task);
    return task.id;
  }

  public cancel(taskID: string): void {
    const task = this.tasks.get(taskID);
    if (!task) {
      return;
    }
    task.cancel();
  }

  public getProgress(taskID: string) {
    const task = this.tasks.get(taskID);
    if (!task) {
      return;
    }
    // return task.progress; // TODO
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
