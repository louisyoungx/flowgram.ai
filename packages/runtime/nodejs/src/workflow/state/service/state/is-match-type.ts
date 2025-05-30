import { WorkflowVariableType } from '@flowgram.ai/runtime-interface';

export const isMatchWorkflowType = (value: unknown, type: WorkflowVariableType): boolean => {
  // 处理 null 和 undefined 的情况
  if (value === null || value === undefined) {
    return false;
  }

  switch (type) {
    case WorkflowVariableType.String:
      return typeof value === 'string';

    case WorkflowVariableType.Integer:
      return Number.isInteger(value);

    case WorkflowVariableType.Number:
      return typeof value === 'number' && !Number.isNaN(value);

    case WorkflowVariableType.Boolean:
      return typeof value === 'boolean';

    case WorkflowVariableType.Object:
      return typeof value === 'object' && !Array.isArray(value);

    case WorkflowVariableType.Array:
      return Array.isArray(value);

    default:
      return false;
  }
};
