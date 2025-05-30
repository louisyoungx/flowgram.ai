import { INodeExecutorFactory } from '@workflow/type';
import { StartExecutor } from './start';
import { LLMExecutor } from './llm';
import { EndExecutor } from './end';

export { WorkflowRuntimeExecutor } from '../engine/service/executor';

export const WorkflowRuntimeNodeExecutors: INodeExecutorFactory[] = [
  StartExecutor,
  EndExecutor,
  LLMExecutor,
];
