import { WorkflowInputs, WorkflowOutputs } from '../executor';

export interface ISnapshot {
  id: string;
  nodeID: string;
  inputs: WorkflowInputs;
  outputs: WorkflowOutputs;
  data: any;
  branch?: string;
}
