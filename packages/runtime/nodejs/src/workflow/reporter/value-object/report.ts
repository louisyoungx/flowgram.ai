import { IReport } from '@workflow/type';
import { VOData } from '@workflow/type';
import { uuid } from '@workflow/infra';

export namespace WorkflowRuntimeReport {
  export const create = (params: VOData<IReport>): IReport => ({
    id: uuid(),
    ...params,
  });
}
