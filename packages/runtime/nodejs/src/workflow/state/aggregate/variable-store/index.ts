import { get, set } from 'lodash-es';
import { WorkflowVariableType } from '@flowgram.ai/runtime-interface';

import { IVariableStore, IVariable, IVariableParseResult } from '@workflow/type';
import { uuid } from '@workflow/infra';
import { WorkflowRuntimeVariable } from '../../value-object';

export class WorkflowRuntimeVariableStore implements IVariableStore {
  public readonly id: string;

  constructor() {
    this.id = uuid();
  }

  public store: Map<string, Map<string, IVariable>>;

  public init(): void {
    this.store = new Map();
  }

  public dispose(): void {
    this.store.clear();
  }

  public setVariable(params: {
    nodeID: string;
    key: string;
    value: Object;
    type: WorkflowVariableType;
  }): void {
    const { nodeID, key, value, type } = params;
    if (!this.store.has(nodeID)) {
      // create node store
      this.store.set(nodeID, new Map());
    }
    const nodeStore = this.store.get(nodeID)!;
    // create variable store
    const variable = WorkflowRuntimeVariable.create({
      nodeID,
      key,
      value,
      type, // TODO check type
    });
    nodeStore.set(key, variable);
  }

  public setValue(params: {
    nodeID: string;
    variableKey: string;
    variablePath?: string[];
    value: Object;
  }): void {
    const { nodeID, variableKey, variablePath, value } = params;
    if (!this.store.has(nodeID)) {
      // create node store
      this.store.set(nodeID, new Map());
    }
    const nodeStore = this.store.get(nodeID)!;
    if (!nodeStore.has(variableKey)) {
      // create variable store
      const variable = WorkflowRuntimeVariable.create({
        nodeID,
        key: variableKey,
        value: {},
        type: WorkflowVariableType.Object,
      });
      nodeStore.set(variableKey, variable);
    }
    const variable = nodeStore.get(variableKey)!;
    if (!variablePath) {
      variable.value = value;
      return;
    }
    set(variable.value, variablePath, value);
  }

  public getValue<T = unknown>(params: {
    nodeID: string;
    variableKey: string;
    variablePath?: string[];
  }): IVariableParseResult<T> | null {
    const { nodeID, variableKey, variablePath } = params;
    const variable = this.store.get(nodeID)?.get(variableKey);
    if (!variable) {
      return null;
    }
    if (!variablePath || variablePath.length === 0) {
      return {
        value: variable.value as T,
        type: variable.type,
      };
    }
    const value = get(variable.value, variablePath) as T;
    return {
      value,
      type: variable.type,
    };
  }
}
