export interface IVariable<T = Object> {
  nodeID: string;
  key: string;
  value: T;
}

export interface IVariableStore {
  id: string;
  store: Record<string, Record<string, IVariable>>;
  set(params: { nodeID: string; variableKey: string; valuePath?: string[]; value: Object }): void;
  get<T = Object>(params: {
    nodeID: string;
    variableKey: string;
    valuePath?: string[];
  }): T | undefined;
}
