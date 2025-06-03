import { ExecutionInputs, ExecutionOutputs } from '../executor';

export interface ISnapshot {
  id: string;
  nodeID: string;
  inputs: ExecutionInputs;
  outputs: ExecutionOutputs;
  data: any;
  branch?: string;
}
