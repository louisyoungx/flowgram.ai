import { WorkflowOutputs } from '../base';
import { IContext } from '.';

export interface ITask {
  id: string;
  processing: Promise<WorkflowOutputs>;
  context: IContext;
  cancel(): void;
}

export interface TaskParams {
  processing: Promise<WorkflowOutputs>;
  context: IContext;
}
