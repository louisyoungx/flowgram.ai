import { ITask } from './task';
import { IExecutor } from './executor';
import { InvokeParams } from '../base';
import { IContext } from './context';
import { INode } from '../document';

export interface EngineServices {
  Executor: IExecutor;
}

export interface IEngine {
  invoke(params: InvokeParams): ITask;
  executeNode(params: { context: IContext; node: INode }): Promise<void>;
}

export const IEngine = Symbol.for('Engine');
