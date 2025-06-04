import { ITask } from './task';
import { IExecutor } from './executor';
import { InvokeParams } from '../base';

export interface EngineServices {
  Executor: IExecutor;
}

export interface IEngine {
  invoke(params: InvokeParams): ITask;
}

export const IEngine = Symbol.for('Engine');
