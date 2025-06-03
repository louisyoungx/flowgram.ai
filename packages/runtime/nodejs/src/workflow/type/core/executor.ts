import { ExecutionContext, ExecutionResult } from '../executor';

export interface IExecutor {
  execute: (context: ExecutionContext) => Promise<ExecutionResult>;
}

export const IExecutor = Symbol.for('Executor');
