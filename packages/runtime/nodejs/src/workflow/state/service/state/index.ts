import { IFlowConstantRefValue, WorkflowVariableType } from '@flowgram.ai/runtime-interface';

import { IState, StateServices } from '@workflow/type/state/state';
import { INode, IVariableStore, ExecutionInputs, ExecutionOutputs } from '@workflow/type';

export class WorkflowRuntimeState implements IState {
  public variables: IVariableStore;

  constructor(services: StateServices) {
    this.variables = services.VariableStore;
  }

  public init() {
    this.variables.init();
  }

  public dispose() {
    this.variables.dispose();
  }

  public createNodeInputs(node: INode): ExecutionInputs {
    const inputsDeclare = node.declare.inputs;
    const inputsValues = node.declare.inputsValues;
    if (!inputsDeclare || !inputsValues) {
      return {};
    }
    return Object.entries(inputsValues).reduce((prev, [key, inputValue]) => {
      const typeInfo = inputsDeclare.properties?.[key];
      if (!typeInfo) {
        return prev;
      }
      const type = typeInfo.type as WorkflowVariableType;
      // get value
      const value = this.parseFlowValue({
        flowValue: inputValue,
        type,
      });
      prev[key] = value;
      return prev;
    }, {} as ExecutionInputs);
  }

  public setNodeOutputs(params: { node: INode; outputs: ExecutionOutputs }): void {
    const { node, outputs } = params;
    const outputsDeclare = node.declare.outputs;
    // TODO validation service type check, deeply compare input & schema
    if (!outputsDeclare) {
      return;
    }
    Object.entries(outputs).forEach(([key, value]) => {
      const typeInfo = outputsDeclare.properties?.[key];
      if (!typeInfo) {
        return;
      }
      const type = typeInfo.type as WorkflowVariableType;
      // create variable
      this.variables.setVariable({
        nodeID: node.id,
        key,
        value,
        type,
      });
    });
  }

  public get workflowInputs(): ExecutionInputs {
    return (
      this.variables.getValue({
        nodeID: '@workflow',
        variableKey: 'inputs',
      }) ?? {}
    );
  }

  public get workflowOutputs(): ExecutionOutputs {
    return (
      this.variables.getValue({
        nodeID: '@workflow',
        variableKey: 'outputs',
      }) ?? {}
    );
  }

  public setWorkflowInputs(inputs: ExecutionInputs): void {
    this.variables.setVariable({
      nodeID: '@workflow',
      key: 'inputs',
      value: inputs,
      type: WorkflowVariableType.Object,
    });
  }

  public setWorkflowOutputs(outputs: ExecutionOutputs): void {
    this.variables.setVariable({
      nodeID: '@workflow',
      key: 'outputs',
      value: outputs,
      type: WorkflowVariableType.Object,
    });
  }

  private parseFlowValue(params: {
    flowValue: IFlowConstantRefValue;
    type: WorkflowVariableType; // TODO check type
  }): any {
    const { flowValue } = params;
    // constant
    if (flowValue.type === 'constant') {
      return flowValue.content;
    }
    if (flowValue.type !== 'ref') {
      throw new Error(`invalid flow value type: ${(flowValue as any).type}`);
    }
    // ref
    if (!flowValue.content || flowValue.content.length < 2) {
      return null;
    }
    const [nodeID, variableKey, ...variablePath] = flowValue.content;
    const value = this.variables.getValue({
      nodeID,
      variableKey,
      variablePath,
    });
    return value;
  }
}
