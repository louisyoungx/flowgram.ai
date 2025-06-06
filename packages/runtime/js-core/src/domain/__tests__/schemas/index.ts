import { WorkflowSchema } from '@flowgram.ai/runtime-interface';

import { twoLLMSchema } from './two-llm';
import { branchSchema } from './branch';
import { basicLLMSchema } from './basic-llm';
import { basicSchema } from './basic';

export const TestSchemas: Record<string, WorkflowSchema> = {
  twoLLMSchema,
  basicSchema,
  branchSchema,
  basicLLMSchema,
};
