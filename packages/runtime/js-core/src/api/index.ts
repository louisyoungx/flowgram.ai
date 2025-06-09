import { FlowGramAPIName } from '@flowgram.ai/runtime-interface';

import { TaskRunAPI } from './task-run';
import { TaskResultAPI } from './task-result';
import { TaskReportAPI } from './task-report';
import { TaskCancelAPI } from './task-cancel';

export const WorkflowRuntimeAPIs: Record<FlowGramAPIName, (i: any) => any> = {
  [FlowGramAPIName.TaskRun]: TaskRunAPI,
  [FlowGramAPIName.TaskReport]: TaskReportAPI,
  [FlowGramAPIName.TaskResult]: TaskResultAPI,
  [FlowGramAPIName.TaskCancel]: TaskCancelAPI,
  [FlowGramAPIName.ServerInfo]: () => {}, // TODO
  [FlowGramAPIName.Validation]: () => {}, // TODO
};
