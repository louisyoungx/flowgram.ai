import { WorkflowVariableType } from '@workflow/type';
import { ConditionHandlers } from '../type';
import { conditionStringHandler } from './string';
import { conditionObjectHandler } from './object';
import { conditionNumberHandler } from './number';
import { conditionBooleanHandler } from './boolean';
import { conditionArrayHandler } from './array';

export const conditionHandlers: ConditionHandlers = {
  [WorkflowVariableType.String]: conditionStringHandler,
  [WorkflowVariableType.Number]: conditionNumberHandler,
  [WorkflowVariableType.Integer]: conditionNumberHandler,
  [WorkflowVariableType.Boolean]: conditionBooleanHandler,
  [WorkflowVariableType.Object]: conditionObjectHandler,
  [WorkflowVariableType.Array]: conditionArrayHandler,
};
