import { FlowGramNode } from '@flowgram.ai/runtime-interface';

import { IState } from '../state';
import { INode } from '../document';

export type ExecutionInputs = Record<string, any>;
export type ExecutionOutputs = Record<string, any>;

export interface ExecutionContext {
  state: IState;
  node: INode;
  inputs: ExecutionInputs;
}

export interface ExecutionResult {
  outputs: ExecutionOutputs;
  branch?: string;
}

export interface INodeExecutor {
  type: FlowGramNode;
  execute: (context: ExecutionContext) => Promise<ExecutionResult>;
}

export interface INodeExecutorFactory {
  new (): INodeExecutor;
}
