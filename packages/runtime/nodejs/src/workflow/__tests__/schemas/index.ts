import { WorkflowSchema } from '@flowgram.ai/runtime-interface';

import { twoLLMSchema } from './two-llm';
import { conditionSchema } from './condition';
import { basicSchema } from './basic';

export const TestSchemas: Record<string, WorkflowSchema> = {
  twoLLMSchema,
  basicSchema,
  conditionSchema,
};
