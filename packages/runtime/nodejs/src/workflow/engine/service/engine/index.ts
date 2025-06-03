import { FlowGramNode, WorkflowSchema } from '@flowgram.ai/runtime-interface';

import {
  EngineServices,
  IEngine,
  IExecutor,
  INode,
  IValidation,
  ExecutionInputs,
  ExecutionOutputs,
  IContext,
} from '@workflow/type';
import { WorkflowRuntimeContext } from '@workflow/context';

export class WorkflowRuntimeEngine implements IEngine {
  private readonly validation: IValidation;

  private readonly executor: IExecutor;

  constructor(service: EngineServices) {
    this.validation = service.Validation;
    this.executor = service.Executor;
  }

  public async execute(
    schema: WorkflowSchema,
    inputs: ExecutionInputs = {}
  ): Promise<ExecutionOutputs> {
    const validation = this.validation.validate(schema);
    if (!validation.valid) {
      throw new Error(`validation failed: ${validation.errors?.join(', ')}`);
    }
    const context = WorkflowRuntimeContext.create();
    context.init({ schema });
    const startNode = context.document.start;
    context.state.setWorkflowInputs(inputs);
    await this.executeNode({ node: startNode, context });
    const outputs = context.state.workflowOutputs;
    context.dispose();
    return outputs;
  }

  private async executeNode(params: { context: IContext; node: INode }) {
    const { node, context } = params;
    if (!this.canExecuteNode({ node, context })) {
      return;
    }
    console.log('===== START =====');
    console.log('node: ', node.id);
    const inputs = context.state.getNodeInputs(node);
    console.log('inputs: ', inputs);
    const result = await this.executor.execute({
      node,
      state: context.state,
      inputs,
    });
    const { outputs, branch } = result;
    console.log('outputs: ', outputs);
    if (branch) {
      console.log('branch: ', branch);
    }
    console.log('===== END =====\n\n');
    context.state.setNodeOutputs({ node, outputs });
    context.state.addExecutedNode(node);
    const nextNodes = this.getNextNodes({ node, branch, context });
    await this.executeNext({ node, nextNodes, context });
  }

  private canExecuteNode(params: { context: IContext; node: INode }) {
    const { node, context } = params;
    const prevNodes = node.prev;
    if (prevNodes.length === 0) {
      return true;
    }
    return prevNodes.every((prevNode) => context.state.isExecutedNode(prevNode));
  }

  private getNextNodes(params: { context: IContext; node: INode; branch?: string }) {
    const { node, branch, context } = params;
    const allNextNodes = node.next;
    if (!branch) {
      return allNextNodes;
    }
    const targetPort = node.ports.outputs.find((port) => port.id === branch);
    if (!targetPort) {
      throw new Error(`branch ${branch} not found`);
    }
    const nextNodeIDs: Set<string> = new Set(targetPort.edges.map((edge) => edge.to.id));
    const nextNodes = allNextNodes.filter((nextNode) => nextNodeIDs.has(nextNode.id));
    const skipNodes = allNextNodes.filter((nextNode) => !nextNodeIDs.has(nextNode.id));
    skipNodes.forEach((skipNode) => {
      context.state.addExecutedNode(skipNode);
    });
    return nextNodes;
  }

  private async executeNext(params: { context: IContext; node: INode; nextNodes: INode[] }) {
    const { context, node, nextNodes } = params;
    if (node.type === FlowGramNode.End) {
      return;
    }
    if (nextNodes.length === 0) {
      throw new Error(`node ${node.id} has no next nodes`);
    }
    await Promise.all(
      nextNodes.map((nextNode) =>
        this.executeNode({
          node: nextNode,
          context,
        })
      )
    );
  }
}
