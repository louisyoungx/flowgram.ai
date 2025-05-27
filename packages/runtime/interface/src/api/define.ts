import { FlowGramAPIDefines } from './type';
import { TestRunDefine } from './test-run';
import { TaskProgressDefine } from './task-progress';
import { ServerInfoDefine } from './server-info';
import { RunDefine } from './run';
import { FlowGramAPIName } from './constant';

export const apis: FlowGramAPIDefines = {
  [FlowGramAPIName.ServerInfo]: ServerInfoDefine,
  [FlowGramAPIName.Run]: RunDefine,
  [FlowGramAPIName.TestRun]: TestRunDefine,
  [FlowGramAPIName.TaskProgress]: TaskProgressDefine,
};
