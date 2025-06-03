import { IVariable, VOData } from '@workflow/type';
import { uuid } from '@workflow/infra';

export namespace WorkflowRuntimeVariable {
  export const create = (params: VOData<IVariable>): IVariable => ({
    id: uuid(),
    ...params,
  });
}
