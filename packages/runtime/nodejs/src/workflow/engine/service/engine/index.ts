import { WorkflowSchema } from '@flowgram.ai/runtime-interface';

import {
  EngineServices,
  IDocument,
  IEngine,
  IExecutor,
  INode,
  IState,
  IValidation,
  ExecutionInputs,
  ExecutionOutputs,
} from '@workflow/type';

export class WorkflowRuntimeEngine implements IEngine {
  private readonly document: IDocument;

  private readonly validation: IValidation;

  private readonly state: IState;

  private readonly executor: IExecutor;

  private executedNodes: Set<string> = new Set(); // TODO service

  constructor(service: EngineServices) {
    this.document = service.Document;
    this.state = service.State;
    this.validation = service.Validation;
    this.executor = service.Executor;
  }

  public async execute(
    schema: WorkflowSchema,
    inputs: ExecutionInputs = {}
  ): Promise<ExecutionOutputs> {
    const result = this.validation.validate(schema);
    if (!result.valid) {
      throw new Error(`validation failed: ${result.errors?.join(', ')}`);
    }
    this.document.init(schema);
    const startNode = this.document.start;
    this.state.init();
    this.state.setWorkflowInputs(inputs);
    await this.executeNode(startNode);
    const outputs = this.state.workflowOutputs;
    this.document.dispose();
    this.state.dispose();
    return outputs;
  }

  private async executeNode(node: INode) {
    if (!this.canExecuteNode(node)) {
      return;
    }
    console.log('===== START =====');
    console.log('node: ', node.id);
    const inputs = this.state.createNodeInputs(node);
    console.log('inputs: ', inputs);
    const result = await this.executor.execute({
      node,
      state: this.state,
      inputs,
    });
    const { outputs } = result;
    console.log('outputs: ', outputs);
    console.log('===== END =====\n\n');
    this.state.setNodeOutputs({ node, outputs });
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
    const nextNodes = node.next;
    await Promise.all(nextNodes.map((nextNode) => this.executeNode(nextNode)));
  }
}
