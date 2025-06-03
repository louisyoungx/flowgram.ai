import { InvokeParams, IContainer, IContext, IEngine } from '@workflow/type';
import { WorkflowRuntimeContainer } from '@workflow/core';

export class WorkflowApplication {
  private container: IContainer;

  private contexts: Map<string, IContext>;

  constructor() {
    this.container = WorkflowRuntimeContainer.instance;
  }

  public run(params: InvokeParams): string {
    const engine = this.container.get<IEngine>(IEngine);
    const { context } = engine.invoke(params);
    this.contexts.set(context.id, context);
    return context.id;
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
