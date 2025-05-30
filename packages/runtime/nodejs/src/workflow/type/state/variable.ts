import { WorkflowVariableType } from '@flowgram.ai/runtime-interface';

export interface IVariable<T = Object> {
  nodeID: string;
  key: string;
  value: T;
  type: WorkflowVariableType;
}

export interface IVariableStore {
  id: string;
  store: Map<string, Map<string, IVariable>>;
  setVariable(params: {
    nodeID: string;
    key: string;
    value: Object;
    type: WorkflowVariableType;
  }): void;
  setValue(params: {
    nodeID: string;
    variableKey: string;
    variablePath?: string[];
    value: Object;
  }): void;
  getValue<T = any>(params: {
    nodeID: string;
    variableKey: string;
    variablePath?: string[];
  }): T | undefined;
  init(): void;
  dispose(): void;
}

export const IVariableStore = Symbol('VariableStore');
