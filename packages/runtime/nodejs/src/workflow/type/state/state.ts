import {
  IFlowConstantRefValue,
  IFlowRefValue,
  WorkflowVariableType,
} from '@flowgram.ai/runtime-interface';

import { ExecutionInputs, ExecutionOutputs } from '../executor';
import { INode } from '../document';
import { IVariableParseResult, IVariableStore } from './variable';

export interface StateServices {
  VariableStore: IVariableStore;
}

export interface IState {
  variables: IVariableStore;
  workflowInputs: ExecutionInputs;
  workflowOutputs: ExecutionOutputs;
  init(): void;
  dispose(): void;
  getNodeInputs(node: INode): ExecutionInputs;
  setNodeOutputs(params: { node: INode; outputs: ExecutionOutputs }): void;
  setWorkflowInputs(inputs: ExecutionInputs): void;
  setWorkflowOutputs(outputs: ExecutionOutputs): void;
  parseRef<T = unknown>(ref: IFlowRefValue): IVariableParseResult<T> | null;
  parseValue<T = unknown>(
    flowValue: IFlowConstantRefValue,
    type?: WorkflowVariableType
  ): IVariableParseResult<T> | null;
}

export const IState = Symbol('State');
