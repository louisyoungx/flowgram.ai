import { VOData, ISnapshot } from '@flowgram.ai/runtime-interface';

import { uuid } from '@workflow/infra';

export namespace WorkflowRuntimeSnapshot {
  export const create = (params: VOData<ISnapshot>): ISnapshot => ({
    id: uuid(),
    ...params,
  });
}
