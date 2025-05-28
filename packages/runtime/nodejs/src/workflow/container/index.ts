import { IContainer, IDocument, IEngine } from '@workflow/type';
import { WorkflowRuntimeEngine } from '@workflow/service';
import { WorkflowRuntimeDocument } from '@workflow/aggregate';

export class WorkflowRuntimeContainer implements IContainer {
  public readonly Document: IDocument;

  public readonly Engine: IEngine;

  constructor(service: IContainer) {
    this.Engine = service.Engine;
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

  public static create(): IContainer {
    // aggregates
    const Document = new WorkflowRuntimeDocument();

    // services
    const Engine = new WorkflowRuntimeEngine({
      Document,
    });

    return {
      Engine,
      Document,
    };
  }
}
