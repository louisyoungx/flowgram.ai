import { beforeEach, describe, expect, it } from 'vitest';

import { IContainer, IEngine, WorkflowStatus } from '@workflow/type';
import { WorkflowRuntimeContainer } from '@workflow/core';
import { snapshotsToVOData } from './utils';
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
    const modelName = process.env.MODEL_NAME;
    const apiKey = process.env.API_KEY;
    const apiHost = process.env.API_HOST;
    const { context, processing } = engine.invoke({
      schema: TestSchemas.basicLLMSchema,
      inputs: {
        model_name: modelName,
        api_key: apiKey,
        api_host: apiHost,
        prompt: 'Just give me the answer of "1+1=?", just one number, no other words',
      },
    });
    expect(context.status.workflowStatus).toBe(WorkflowStatus.Processing);
    const result = await processing;
    expect(context.status.workflowStatus).toBe(WorkflowStatus.Success);
    expect(result).toStrictEqual({
      answer: '2',
    });
    const snapshots = snapshotsToVOData(context.recorder.export());
    expect(snapshots).toStrictEqual([
      {
        nodeID: 'start_0',
        inputs: {},
        outputs: {
          model_name: modelName,
          api_key: apiKey,
          api_host: apiHost,
          prompt: 'Just give me the answer of "1+1=?", just one number, no other words',
        },
        data: { title: 'Start' },
      },
      {
        nodeID: 'llm_0',
        inputs: {
          modelName: modelName,
          apiKey: apiKey,
          apiHost: apiHost,
          temperature: 0,
          prompt: 'Just give me the answer of "1+1=?", just one number, no other words',
          systemPrompt: 'You are a helpful AI assistant.',
        },
        outputs: { result: '2' },
        data: { title: 'LLM_0' },
      },
      {
        nodeID: 'end_0',
        inputs: { answer: '2' },
        outputs: { answer: '2' },
        data: { title: 'End' },
      },
    ]);
  });
});
