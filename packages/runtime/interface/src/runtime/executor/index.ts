import { FlowGramNode } from '@node/index';
import { IState } from '../state';
import { IIOCenter } from '../reporter';
import { INode } from '../document';
import { WorkflowInputs, WorkflowOutputs } from '../base';

export interface ExecutionContext {
  state: IState;
  io: IIOCenter;
  node: INode;
  inputs: WorkflowInputs;
}

export interface ExecutionResult {
  outputs: WorkflowOutputs;
  branch?: string;
}

export interface INodeExecutor {
  type: FlowGramNode;
  execute: (context: ExecutionContext) => Promise<ExecutionResult>;
}

export interface INodeExecutorFactory {
  new (): INodeExecutor;
}
