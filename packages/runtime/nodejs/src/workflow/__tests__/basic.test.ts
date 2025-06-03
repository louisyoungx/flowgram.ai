import { beforeEach, describe, expect, it } from 'vitest';

import { IContainer, IEngine } from '@workflow/type';
import { WorkflowRuntimeContainer } from '@workflow/container';
import { TestSchemas } from './schemas';

let container: IContainer;

beforeEach(() => {
  container = WorkflowRuntimeContainer.instance;
});

describe('workflow runtime basic test', () => {
  it('should execute workflow', async () => {
    if (process.env.ENABLE_MODEL_TEST !== 'true') {
      return;
    }
    if (!process.env.MODEL_NAME || !process.env.API_KEY || !process.env.API_HOST) {
      throw new Error('Missing environment variables');
    }
    const engine = container.get<IEngine>(IEngine);
    const result = await engine.execute(TestSchemas.basicLLMSchema, {
      model_name: process.env.MODEL_NAME,
      api_key: process.env.API_KEY,
      api_host: process.env.API_HOST,
      prompt: 'Just give me the answer of "1+1=?", just one number, no other words',
    });
    expect(result).toStrictEqual({
      answer: '2',
    });
  });
});
