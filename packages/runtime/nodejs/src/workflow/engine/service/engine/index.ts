import { WorkflowSchema } from '@flowgram.ai/runtime-interface';

import { EngineServices, IDocument, IEngine, INode, IValidation } from '@workflow/type';
import { delay } from '@workflow/infra';

let delayTime = 0; // TODO mock node run

export class WorkflowRuntimeEngine implements IEngine {
  private readonly document: IDocument;

  private readonly validation: IValidation;

  private executedNodes: Set<string> = new Set(); // TODO service

  constructor(service: EngineServices) {
    this.document = service.Document;
    this.validation = service.Validation;
  }

  public async execute(schema: WorkflowSchema, input: Object = {}) {
    const result = this.validation.validate(schema);
    if (!result.valid) {
      throw new Error(`validation failed: ${result.errors?.join(', ')}`);
    }
    this.document.init(schema);
    const startNode = this.document.start;
    await this.executeNode(startNode);
  }

  private async executeNode(node: INode) {
    if (!this.canExecuteNode(node)) {
      return;
    }
    console.log(`execute node: ${node.id}`);
    await delay((delayTime += 10)); // TODO mock node run
    await this.nodeExecuted(node);
  }

  private canExecuteNode(node: INode) {
    const prevNodes = node.prev;
    if (prevNodes.length === 0) {
      return true;
    }
    return prevNodes.every((prevNode) => this.executedNodes.has(prevNode.id));
  }

  private async nodeExecuted(node: INode) {
    this.executedNodes.add(node.id);
    console.log(`executed node: ${node.id}`);
    const nextNodes = node.next;
    await Promise.all(nextNodes.map((nextNode) => this.executeNode(nextNode)));
  }
}
