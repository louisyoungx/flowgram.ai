import { WorkflowInputs, WorkflowOutputs } from '../base';

export interface ISnapshot {
  id: string;
  nodeID: string;
  inputs: WorkflowInputs;
  outputs: WorkflowOutputs;
  data: any;
  branch?: string;
}
