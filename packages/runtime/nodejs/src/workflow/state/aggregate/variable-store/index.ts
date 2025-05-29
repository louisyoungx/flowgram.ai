import { get, set } from 'lodash-es';

import { IVariableStore, IVariable } from '@workflow/type';
import { uuid } from '@workflow/infra';
import { WorkflowRuntimeVariable } from '../../value-object';

export class WorkflowRuntimeVariableStore implements IVariableStore {
  public readonly id: string;

  constructor() {
    this.id = uuid();
  }

  public store: Record<string, Record<string, IVariable>> = {};

  public set(params: {
    nodeID: string;
    variableKey: string;
    variablePath?: string[];
    value: Object;
  }): void {
    const { nodeID, variableKey, variablePath, value } = params;
    if (!this.store[nodeID]) {
      // create node store
      this.store[nodeID] = {};
    }
    if (!this.store[nodeID][variableKey]) {
      // create variable store
      this.store[nodeID][variableKey] = WorkflowRuntimeVariable.create({
        nodeID,
        key: variableKey,
        value: {},
      });
    }
    const variable = this.store[nodeID][variableKey];
    if (!variablePath) {
      variable.value = value;
      return;
    }
    set(variable.value, variablePath, value);
  }

  public get<T = unknown>(params: {
    nodeID: string;
    variableKey: string;
    variablePath?: string[];
  }): T | undefined {
    const { nodeID, variableKey, variablePath } = params;
    const variable = this.store[nodeID]?.[variableKey];
    if (!variable) {
      return undefined;
    }
    if (!variablePath) {
      return variable.value as T;
    }
    return get(variable.value, variablePath) as T;
  }
}
