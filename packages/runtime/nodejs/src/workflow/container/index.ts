import {
  ContainerService,
  IContainer,
  IDocument,
  IEngine,
  IExecutor,
  IState,
  IValidation,
  IVariableStore,
} from '@workflow/type';
import { WorkflowRuntimeState, WorkflowRuntimeVariableStore } from '@workflow/state';
import { WorkflowRuntimeNodeExecutors } from '@workflow/executor';
import {
  WorkflowRuntimeEngine,
  WorkflowRuntimeExecutor,
  WorkflowRuntimeValidation,
} from '@workflow/engine';
import { WorkflowRuntimeDocument } from '@workflow/document';

export class WorkflowRuntimeContainer implements IContainer {
  constructor(private readonly services: Record<string, ContainerService>) {}

  public get<T = ContainerService>(key: any): T {
    return this.services[key] as T;
  }

  private static _instance: IContainer;

  public static get instance(): IContainer {
    if (this._instance) {
      return this._instance;
    }
    const services = this.create();
    this._instance = new WorkflowRuntimeContainer(services);
    return this._instance;
  }

  private static create(): Record<symbol, ContainerService> {
    // aggregates
    const Document = new WorkflowRuntimeDocument();
    const VariableStore = new WorkflowRuntimeVariableStore();

    // services
    const Validation = new WorkflowRuntimeValidation();
    const State = new WorkflowRuntimeState({
      VariableStore,
    });
    const Executor = new WorkflowRuntimeExecutor(WorkflowRuntimeNodeExecutors);
    const Engine = new WorkflowRuntimeEngine({
      Document,
      State,
      Validation,
      Executor,
    });

    return {
      [IDocument]: Document,
      [IVariableStore]: VariableStore,
      [IValidation]: Validation,
      [IState]: State,
      [IExecutor]: Executor,
      [IEngine]: Engine,
    };
  }
}
