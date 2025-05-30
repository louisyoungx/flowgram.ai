import { WorkflowVariableType } from '@flowgram.ai/runtime-interface';

import { IVariable } from '@workflow/type';

export class WorkflowRuntimeVariable implements IVariable {
  public readonly nodeID: string;

  public readonly key: string;

  public value: Object;

  public type: WorkflowVariableType;

  constructor(params: IVariable) {
    const { nodeID, key, value, type } = params;
    this.nodeID = nodeID;
    this.key = key;
    this.value = value;
    this.type = type;
  }

  public static create(params: IVariable) {
    return new WorkflowRuntimeVariable(params);
  }
}
