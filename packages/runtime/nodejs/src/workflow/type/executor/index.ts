import { FlowGramNode } from '@flowgram.ai/runtime-interface';

import { IState } from '../state';
import { INode } from '../document';
import { WorkflowInputs, WorkflowOutputs } from '../base';

export interface ExecutionContext {
  state: IState;
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
