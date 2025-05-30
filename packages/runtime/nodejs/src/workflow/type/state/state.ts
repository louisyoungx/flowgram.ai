import { ExecutionInputs, ExecutionOutputs } from '../executor';
import { INode } from '../document';
import { IVariableStore } from './variable';

export interface StateServices {
  VariableStore: IVariableStore;
}

export interface IState {
  variables: IVariableStore;
  workflowInputs: ExecutionInputs;
  workflowOutputs: ExecutionOutputs;
  init(): void;
  dispose(): void;
  createNodeInputs(node: INode): ExecutionInputs;
  setNodeOutputs(params: { node: INode; outputs: ExecutionOutputs }): void;
  setWorkflowInputs(inputs: ExecutionInputs): void;
  setWorkflowOutputs(outputs: ExecutionOutputs): void;
}

export const IState = Symbol('State');
