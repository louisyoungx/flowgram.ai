import { INodeExecutorFactory } from '@workflow/type';
import { StartExecutor } from '@workflow/executor/start';
import { EndExecutor } from '@workflow/executor/end';
import { ConditionExecutor } from '@workflow/executor/condition';
import { MockLLMExecutor } from './llm';

export const MockWorkflowRuntimeNodeExecutors: INodeExecutorFactory[] = [
  StartExecutor,
  EndExecutor,
  MockLLMExecutor,
  ConditionExecutor,
];
