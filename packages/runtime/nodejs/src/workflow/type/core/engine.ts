import { IExecutor } from './executor';
import { IContext } from './context';
import { InvokeParams, WorkflowOutputs } from '../base';

export interface EngineServices {
  Executor: IExecutor;
}

export interface IEngine {
  invoke(params: InvokeParams): {
    executing: Promise<WorkflowOutputs>;
    context: IContext;
  };
}

export const IEngine = Symbol.for('Engine');
