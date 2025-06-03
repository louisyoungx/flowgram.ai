import { ExecutionInputs, ExecutionOutputs } from '../executor';

export interface ISnapshot {
  nodeID: string;
  inputs: ExecutionInputs;
  outputs: ExecutionOutputs;
  data: any;
}
