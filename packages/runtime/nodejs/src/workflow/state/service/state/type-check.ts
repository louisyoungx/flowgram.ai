import { WorkflowVariableType } from '@flowgram.ai/runtime-interface';
export const getWorkflowType = (value: unknown): WorkflowVariableType | null => {
  // 处理 null 和 undefined 的情况
  if (value === null || value === undefined) {
    return null;
  }

  // 处理基本类型
  if (typeof value === 'string') {
    return WorkflowVariableType.String;
  }

  if (typeof value === 'boolean') {
    return WorkflowVariableType.Boolean;
  }

  if (typeof value === 'number') {
    if (Number.isInteger(value)) {
      return WorkflowVariableType.Integer;
    }
    return WorkflowVariableType.Number;
  }

  // 处理数组
  if (Array.isArray(value)) {
    return WorkflowVariableType.Array;
  }

  // 处理普通对象
  if (typeof value === 'object') {
    return WorkflowVariableType.Object;
  }

  return null;
};

export const isMatchWorkflowType = (value: unknown, type: WorkflowVariableType): boolean => {
  const workflowType = getWorkflowType(value);
  if (!workflowType) {
    return false;
  }
  return workflowType === type;
};

export const isTypeEqual = (
  leftType: WorkflowVariableType,
  rightType: WorkflowVariableType
): boolean => leftType === rightType;
