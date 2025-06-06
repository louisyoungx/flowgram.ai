import { IVariable, VOData } from '@flowgram.ai/runtime-interface';

import { uuid } from '@workflow/infra';

export namespace WorkflowRuntimeVariable {
  export const create = (params: VOData<IVariable>): IVariable => ({
    id: uuid(),
    ...params,
  });
}
