import { ValidationDefine } from './validation';
import { FlowGramAPIDefines } from './type';
import { TestRunDefine } from './test-run';
import { TaskResultDefine } from './task-result';
import { TaskReportDefine } from './task-report';
import { ServerInfoDefine } from './server-info';
import { RunDefine } from './run';
import { FlowGramAPIName } from './constant';

export const apis: FlowGramAPIDefines = {
  [FlowGramAPIName.ServerInfo]: ServerInfoDefine,
  [FlowGramAPIName.Run]: RunDefine,
  [FlowGramAPIName.TestRun]: TestRunDefine,
  [FlowGramAPIName.TaskReport]: TaskReportDefine,
  [FlowGramAPIName.TaskResult]: TaskResultDefine,
  [FlowGramAPIName.Validation]: ValidationDefine,
};
