import { IVariable } from '@workflow/type';

export class WorkflowRuntimeVariable implements IVariable {
  public readonly nodeID: string;

  public readonly key: string;

  public value: Object;

  constructor(params: IVariable) {
    const { nodeID, key, value } = params;
    this.nodeID = nodeID;
    this.key = key;
    this.value = value;
  }

  public static create(params: IVariable) {
    return new WorkflowRuntimeVariable(params);
  }
}
