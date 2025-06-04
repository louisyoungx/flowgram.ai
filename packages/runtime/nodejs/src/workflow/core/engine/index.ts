import { FlowGramNode } from '@flowgram.ai/runtime-interface';

import {
  EngineServices,
  IEngine,
  IExecutor,
  INode,
  WorkflowOutputs,
  IContext,
  InvokeParams,
  WorkflowStatus,
  ITask,
} from '@workflow/type';
import { WorkflowRuntimeTask } from '@workflow/task';
import { WorkflowRuntimeContext } from '../context';

export class WorkflowRuntimeEngine implements IEngine {
  private readonly executor: IExecutor;

  constructor(service: EngineServices) {
    this.executor = service.Executor;
  }

  public invoke(params: InvokeParams): ITask {
    const context = WorkflowRuntimeContext.create();
    context.init(params);
    const processing = this.process(context);
    processing.then(() => {
      context.dispose();
    });
    return WorkflowRuntimeTask.create({
      processing,
      context,
    });
  }

  private async process(context: IContext): Promise<WorkflowOutputs> {
    const startNode = context.document.start;
    context.status.setWorkflowStatus(WorkflowStatus.Processing);
    try {
      await this.executeNode({ node: startNode, context });
      context.status.setWorkflowStatus(WorkflowStatus.Success);
      const outputs = context.state.workflowOutputs;
      return outputs;
    } catch (e) {
      context.status.setWorkflowStatus(WorkflowStatus.Failed);
      throw e;
    }
  }

  private async executeNode(params: { context: IContext; node: INode }) {
    const { node, context } = params;
    if (!this.canExecuteNode({ node, context })) {
      return;
    }
    context.status.setNodeStatus(node.id, WorkflowStatus.Processing);
    try {
      const inputs = context.state.getNodeInputs(node);
      const result = await this.executor.execute({
        node,
        state: context.state,
        inputs,
      });
      if (context.status.terminated) {
        return;
      }
      const { outputs, branch } = result;
      context.state.setNodeOutputs({ node, outputs });
      context.state.addExecutedNode(node);
      context.status.setNodeStatus(node.id, WorkflowStatus.Success);
      context.recorder.create({
        nodeID: node.id,
        inputs,
        outputs,
        branch,
        data: node.data,
      });
      const nextNodes = this.getNextNodes({ node, branch, context });
      await this.executeNext({ node, nextNodes, context });
    } catch (e) {
      context.status.setNodeStatus(node.id, WorkflowStatus.Failed);
      throw e;
    }
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
