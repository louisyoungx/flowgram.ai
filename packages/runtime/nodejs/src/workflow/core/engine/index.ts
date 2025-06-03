import { FlowGramNode } from '@flowgram.ai/runtime-interface';

import {
  EngineServices,
  IEngine,
  IExecutor,
  INode,
  WorkflowOutputs,
  IContext,
  InvokeParams,
} from '@workflow/type';
import { WorkflowRuntimeContext } from '../context';

export class WorkflowRuntimeEngine implements IEngine {
  private readonly executor: IExecutor;

  constructor(service: EngineServices) {
    this.executor = service.Executor;
  }

  public invoke(params: InvokeParams): {
    executing: Promise<WorkflowOutputs>;
    context: IContext;
  } {
    const context = WorkflowRuntimeContext.create();
    context.init(params);
    const executing = this.execute(context);
    executing.then(() => {
      context.dispose();
    });
    return {
      context,
      executing,
    };
  }

  public async execute(context: IContext): Promise<WorkflowOutputs> {
    const startNode = context.document.start;
    await this.executeNode({ node: startNode, context });
    const outputs = context.state.workflowOutputs;
    return outputs;
  }

  private async executeNode(params: { context: IContext; node: INode }) {
    const { node, context } = params;
    if (!this.canExecuteNode({ node, context })) {
      return;
    }
    const inputs = context.state.getNodeInputs(node);
    const result = await this.executor.execute({
      node,
      state: context.state,
      inputs,
    });
    const { outputs, branch } = result;
    context.state.setNodeOutputs({ node, outputs });
    context.state.addExecutedNode(node);
    context.task.record({
      nodeID: node.id,
      inputs,
      outputs,
      branch,
      data: node.data,
    });
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
