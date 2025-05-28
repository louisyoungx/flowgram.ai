import { ContainerService, IContainer, IDocument, IEngine, IValidation } from '@workflow/type';
import { WorkflowRuntimeEngine, WorkflowRuntimeValidation } from '@workflow/service';
import { WorkflowRuntimeDocument } from '@workflow/aggregate';

export class WorkflowRuntimeContainer implements IContainer {
  constructor(private readonly services: Record<string, ContainerService>) {}

  public get<T = ContainerService>(key: string): T {
    return this.services[key] as T;
  }

  private static _instance: IContainer;

  public static instance(): IContainer {
    if (this._instance) {
      return this._instance;
    }
    const services = this.create();
    this._instance = new WorkflowRuntimeContainer(services);
    return this._instance;
  }

  public static create(): Record<string, ContainerService> {
    // aggregates
    const Document = new WorkflowRuntimeDocument();
    const Validation = new WorkflowRuntimeValidation();

    // services
    const Engine = new WorkflowRuntimeEngine({
      Document,
      Validation,
    });

    return {
      [IDocument]: Document,
      [IValidation]: Validation,
      [IEngine]: Engine,
    };
  }
}
