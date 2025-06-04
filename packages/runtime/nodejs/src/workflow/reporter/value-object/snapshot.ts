import { ISnapshot } from '@workflow/type/reporter/snapshot';
import { VOData } from '@workflow/type';
import { uuid } from '@workflow/infra';

export namespace WorkflowRuntimeSnapshot {
  export const create = (params: VOData<ISnapshot>): ISnapshot => ({
    id: uuid(),
    ...params,
  });
}
