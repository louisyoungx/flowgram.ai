import { IExecutor } from '@flowgram.ai/runtime-interface';

import { WorkflowRuntimeContainer } from '@workflow/core';
import { MockLLMExecutor } from './executor/llm';

const container = WorkflowRuntimeContainer.instance;
const executor = container.get<IExecutor>(IExecutor);
executor.register(new MockLLMExecutor());
