import { IReport, VOData } from '@flowgram.ai/runtime-interface';

import { uuid } from '@workflow/infra';

export namespace WorkflowRuntimeReport {
  export const create = (params: VOData<IReport>): IReport => ({
    id: uuid(),
    ...params,
  });
}
