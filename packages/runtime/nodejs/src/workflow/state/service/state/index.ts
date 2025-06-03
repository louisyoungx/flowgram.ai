import {
  IFlowConstantRefValue,
  IFlowRefValue,
  WorkflowVariableType,
} from '@flowgram.ai/runtime-interface';

import type {
  IState,
  IVariableParseResult,
  StateServices,
  INode,
  IVariableStore,
  ExecutionInputs,
  ExecutionOutputs,
} from '@workflow/type';
import { getWorkflowType, isTypeEqual } from './type-check';
import { WORKFLOW_INPUTS_KEY, WORKFLOW_OUTPUTS_KEY, WORKFLOW_VARIABLE_ID } from './constant';

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
      const expectType = typeInfo.type as WorkflowVariableType;
      // get value
      const result = this.parseValue(inputValue);
      if (!result) {
        return prev;
      }
      const { value, type } = result;
      if (!isTypeEqual(type, expectType)) {
        return prev;
      }
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
        nodeID: WORKFLOW_VARIABLE_ID,
        variableKey: WORKFLOW_INPUTS_KEY,
      })?.value ?? {}
    );
  }

  public get workflowOutputs(): ExecutionOutputs {
    return (
      this.variables.getValue({
        nodeID: WORKFLOW_VARIABLE_ID,
        variableKey: WORKFLOW_OUTPUTS_KEY,
      })?.value ?? {}
    );
  }

  public setWorkflowInputs(inputs: ExecutionInputs): void {
    this.variables.setVariable({
      nodeID: WORKFLOW_VARIABLE_ID,
      key: WORKFLOW_INPUTS_KEY,
      value: inputs,
      type: WorkflowVariableType.Object,
    });
  }

  public setWorkflowOutputs(outputs: ExecutionOutputs): void {
    this.variables.setVariable({
      nodeID: WORKFLOW_VARIABLE_ID,
      key: WORKFLOW_OUTPUTS_KEY,
      value: outputs,
      type: WorkflowVariableType.Object,
    });
  }

  public parseRef<T = unknown>(ref: IFlowRefValue): IVariableParseResult<T> | null {
    if (ref?.type !== 'ref') {
      throw new Error(`invalid ref value: ${ref}`);
    }
    if (!ref.content || ref.content.length < 2) {
      return null;
    }
    const [nodeID, variableKey, ...variablePath] = ref.content;
    const result = this.variables.getValue<T>({
      nodeID,
      variableKey,
      variablePath,
    });
    if (!result) {
      return null;
    }
    return result;
  }

  public parseValue<T = unknown>(flowValue: IFlowConstantRefValue): IVariableParseResult<T> | null {
    if (!flowValue?.type) {
      throw new Error(`invalid flow value type: ${(flowValue as any).type}`);
    }
    // constant
    if (flowValue.type === 'constant') {
      const value = flowValue.content as T;
      const type = getWorkflowType(value);
      if (!value || !type) {
        return null;
      }
      return {
        value,
        type,
      };
    }
    // ref
    if (flowValue.type === 'ref') {
      return this.parseRef<T>(flowValue);
    }
    // unknown type
    throw new Error(`unknown flow value type: ${(flowValue as any).type}`);
  }
}
