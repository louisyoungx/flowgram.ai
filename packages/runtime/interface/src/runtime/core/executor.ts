import { ExecutionContext, ExecutionResult, INodeExecutor } from '../executor';

export interface IExecutor {
  execute: (context: ExecutionContext) => Promise<ExecutionResult>;
  register: (executor: INodeExecutor) => void;
}

export const IExecutor = Symbol.for('Executor');
