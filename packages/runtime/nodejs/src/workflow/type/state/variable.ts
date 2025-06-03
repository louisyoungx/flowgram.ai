import { WorkflowVariableType } from '@flowgram.ai/runtime-interface';

export interface IVariable<T = Object> {
  id: string;
  nodeID: string;
  key: string;
  value: T;
  type: WorkflowVariableType;
}

export interface IVariableParseResult<T = unknown> {
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
  getValue<T = unknown>(params: {
    nodeID: string;
    variableKey: string;
    variablePath?: string[];
  }): IVariableParseResult<T> | null;
  init(): void;
  dispose(): void;
}
