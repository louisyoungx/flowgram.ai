import { WorkflowSchema } from '@flowgram.ai/runtime-interface';

import { EngineServices, IDocument, IEngine } from '@workflow/type';
import { uuid } from '@workflow/infra';

export class WorkflowRuntimeEngine implements IEngine {
  public readonly id: string;

  private readonly document: IDocument;

  constructor(service: EngineServices) {
    this.id = uuid();
    this.document = service.Document;
  }

  execute(schema: WorkflowSchema) {
    this.document.init(schema);
  }
}
