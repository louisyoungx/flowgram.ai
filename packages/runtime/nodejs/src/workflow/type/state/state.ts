import {
  IFlowConstantRefValue,
  IFlowRefValue,
  WorkflowVariableType,
} from '@flowgram.ai/runtime-interface';

import { INode } from '../document';
import { WorkflowInputs, WorkflowOutputs } from '../base';
import { IVariableParseResult, IVariableStore } from './variable';

export interface IState {
  id: string;
  variableStore: IVariableStore;
  workflowInputs: WorkflowInputs;
  workflowOutputs: WorkflowOutputs;
  init(inputs: WorkflowInputs): void;
  dispose(): void;
  getNodeInputs(node: INode): WorkflowInputs;
  setNodeOutputs(params: { node: INode; outputs: WorkflowOutputs }): void;
  setWorkflowInputs(inputs: WorkflowInputs): void;
  setWorkflowOutputs(outputs: WorkflowOutputs): void;
  parseRef<T = unknown>(ref: IFlowRefValue): IVariableParseResult<T> | null;
  parseValue<T = unknown>(
    flowValue: IFlowConstantRefValue,
    type?: WorkflowVariableType
  ): IVariableParseResult<T> | null;
  isExecutedNode(node: INode): boolean;
  addExecutedNode(node: INode): void;
}
