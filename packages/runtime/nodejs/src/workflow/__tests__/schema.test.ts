import { beforeEach, describe, expect, it } from 'vitest';

import { IContainer, IEngine, IExecutor, WorkflowStatus } from '@workflow/type';
import { WorkflowRuntimeContainer } from '@workflow/core';
import { snapshotsToVOData } from '@workflow/__tests__/utils';
import { TestSchemas } from '@workflow/__tests__/schemas';
import { MockLLMExecutor } from './executor/llm';

let container: IContainer;

beforeEach(() => {
  container = WorkflowRuntimeContainer.instance;
  const executor = container.get<IExecutor>(IExecutor);
  executor.register(new MockLLMExecutor());
});

describe('WorkflowRuntimeEngine', () => {
  it('should execute a workflow with input', async () => {
    const engine = container.get<IEngine>(IEngine);
    const { context, processing } = engine.invoke({
      schema: TestSchemas.basicSchema,
      inputs: {
        model_name: 'ai-model',
        llm_settings: {
          temperature: 0.5,
        },
        prompt: 'How are you?',
      },
    });
    expect(context.status.workflowStatus).toBe(WorkflowStatus.Processing);
    const result = await processing;
    expect(context.status.workflowStatus).toBe(WorkflowStatus.Success);
    expect(result).toStrictEqual({
      llm_res: `Hi, I'm an AI assistant, my name is ai-model, temperature is 0.5, system prompt is "You are a helpful AI assistant.", prompt is "How are you?"`,
      llm_prompt: 'How are you?',
    });
    const snapshots = snapshotsToVOData(context.recorder.export());
    expect(snapshots).toStrictEqual([
      {
        nodeID: 'start_0',
        inputs: {},
        outputs: {
          model_name: 'ai-model',
          llm_settings: { temperature: 0.5 },
          prompt: 'How are you?',
        },
        data: { title: 'Start' },
      },
      {
        nodeID: 'llm_0',
        inputs: {
          modelName: 'ai-model',
          apiKey: 'sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
          apiHost: 'https://mock-ai-url/api/v3',
          temperature: 0.5,
          prompt: 'How are you?',
          systemPrompt: 'You are a helpful AI assistant.',
        },
        outputs: {
          result:
            'Hi, I\'m an AI assistant, my name is ai-model, temperature is 0.5, system prompt is "You are a helpful AI assistant.", prompt is "How are you?"',
        },
        data: { title: 'LLM_1' },
      },
      {
        nodeID: 'end_0',
        inputs: {
          llm_res:
            'Hi, I\'m an AI assistant, my name is ai-model, temperature is 0.5, system prompt is "You are a helpful AI assistant.", prompt is "How are you?"',
          llm_prompt: 'How are you?',
        },
        outputs: {
          llm_res:
            'Hi, I\'m an AI assistant, my name is ai-model, temperature is 0.5, system prompt is "You are a helpful AI assistant.", prompt is "How are you?"',
          llm_prompt: 'How are you?',
        },
        data: { title: 'End' },
      },
    ]);
  });

  it('should execute a workflow with branch', async () => {
    const engine = container.get<IEngine>(IEngine);
    const { context, processing } = engine.invoke({
      schema: TestSchemas.branchSchema,
      inputs: {
        model_id: 1,
        prompt: 'Tell me a joke',
      },
    });
    expect(context.status.workflowStatus).toBe(WorkflowStatus.Processing);
    const result = await processing;
    expect(context.status.workflowStatus).toBe(WorkflowStatus.Success);
    expect(result).toStrictEqual({
      m1_res: `Hi, I'm an AI assistant, my name is AI_MODEL_1, temperature is 0.5, system prompt is "I'm Model 1.", prompt is "Tell me a joke"`,
    });
    const snapshots = snapshotsToVOData(context.recorder.export());
    expect(snapshots).toStrictEqual([
      {
        nodeID: 'start_0',
        inputs: {},
        outputs: { model_id: 1, prompt: 'Tell me a joke' },
        data: { title: 'Start' },
      },
      {
        nodeID: 'condition_0',
        inputs: {},
        outputs: {},
        data: {
          title: 'Condition',
          conditions: [
            {
              value: {
                left: { type: 'ref', content: ['start_0', 'model_id'] },
                operator: 'eq',
                right: { type: 'constant', content: 1 },
              },
              key: 'if_1',
            },
            {
              value: {
                left: { type: 'ref', content: ['start_0', 'model_id'] },
                operator: 'eq',
                right: { type: 'constant', content: 2 },
              },
              key: 'if_2',
            },
          ],
        },
        branch: 'if_1',
      },
      {
        nodeID: 'llm_1',
        inputs: {
          modelName: 'AI_MODEL_1',
          apiKey: 'sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
          apiHost: 'https://mock-ai-url/api/v3',
          temperature: 0.5,
          systemPrompt: "I'm Model 1.",
          prompt: 'Tell me a joke',
        },
        outputs: {
          result:
            'Hi, I\'m an AI assistant, my name is AI_MODEL_1, temperature is 0.5, system prompt is "I\'m Model 1.", prompt is "Tell me a joke"',
        },
        data: { title: 'LLM_1' },
      },
      {
        nodeID: 'end_0',
        inputs: {
          m1_res:
            'Hi, I\'m an AI assistant, my name is AI_MODEL_1, temperature is 0.5, system prompt is "I\'m Model 1.", prompt is "Tell me a joke"',
        },
        outputs: {
          m1_res:
            'Hi, I\'m an AI assistant, my name is AI_MODEL_1, temperature is 0.5, system prompt is "I\'m Model 1.", prompt is "Tell me a joke"',
        },
        data: { title: 'End' },
      },
    ]);
  });
});
