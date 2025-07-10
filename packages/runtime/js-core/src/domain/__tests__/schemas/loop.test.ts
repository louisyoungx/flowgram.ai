/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { describe, expect, it } from 'vitest';
import { IContainer, IEngine, WorkflowStatus } from '@flowgram.ai/runtime-interface';

import { snapshotsToVOData } from '../utils';
import { WorkflowRuntimeContainer } from '../../container';
import { TestSchemas } from '.';

const container: IContainer = WorkflowRuntimeContainer.instance;

describe('WorkflowRuntime loop schema', () => {
  it('should execute a workflow with input', async () => {
    const engine = container.get<IEngine>(IEngine);
    const { context, processing } = engine.invoke({
      schema: TestSchemas.loopSchema,
      inputs: {
        system_prompt: 'You are a helpful assistant',
        prompt: 'How are you?',
        tasks: [
          'TASK - A',
          'TASK - B',
          'TASK - C',
          'TASK - D',
          'TASK - E',
          'TASK - F',
          'TASK - G',
          'TASK - H',
        ],
      },
    });
    expect(context.statusCenter.workflow.status).toBe(WorkflowStatus.Processing);
    const result = await processing;
    expect(context.statusCenter.workflow.status).toBe(WorkflowStatus.Succeeded);
    expect(result).toStrictEqual({
      answers: [
        'Hi, I am an AI model, my name is AI_MODEL_1, temperature is 0.6, system prompt is "You are a helpful assistant", prompt is "TASK - A"',
        'Hi, I am an AI model, my name is AI_MODEL_1, temperature is 0.6, system prompt is "You are a helpful assistant", prompt is "TASK - B"',
        'Hi, I am an AI model, my name is AI_MODEL_1, temperature is 0.6, system prompt is "You are a helpful assistant", prompt is "TASK - C"',
        'Hi, I am an AI model, my name is AI_MODEL_1, temperature is 0.6, system prompt is "You are a helpful assistant", prompt is "TASK - D"',
        'Hi, I am an AI model, my name is AI_MODEL_1, temperature is 0.6, system prompt is "You are a helpful assistant", prompt is "TASK - E"',
        'Hi, I am an AI model, my name is AI_MODEL_1, temperature is 0.6, system prompt is "You are a helpful assistant", prompt is "TASK - F"',
        'Hi, I am an AI model, my name is AI_MODEL_1, temperature is 0.6, system prompt is "You are a helpful assistant", prompt is "TASK - G"',
        'Hi, I am an AI model, my name is AI_MODEL_1, temperature is 0.6, system prompt is "You are a helpful assistant", prompt is "TASK - H"',
      ],
    });
    const snapshots = snapshotsToVOData(context.snapshotCenter.exportAll());
    expect(snapshots).toStrictEqual([
      {
        nodeID: 'start_0',
        inputs: {},
        outputs: {
          system_prompt: 'You are a helpful assistant',
          prompt: 'How are you?',
          tasks: [
            'TASK - A',
            'TASK - B',
            'TASK - C',
            'TASK - D',
            'TASK - E',
            'TASK - F',
            'TASK - G',
            'TASK - H',
          ],
        },
        data: {},
      },
      {
        nodeID: 'loop_0',
        inputs: {},
        outputs: {
          llm_results: [
            'Hi, I am an AI model, my name is AI_MODEL_1, temperature is 0.6, system prompt is "You are a helpful assistant", prompt is "TASK - A"',
            'Hi, I am an AI model, my name is AI_MODEL_1, temperature is 0.6, system prompt is "You are a helpful assistant", prompt is "TASK - B"',
            'Hi, I am an AI model, my name is AI_MODEL_1, temperature is 0.6, system prompt is "You are a helpful assistant", prompt is "TASK - C"',
            'Hi, I am an AI model, my name is AI_MODEL_1, temperature is 0.6, system prompt is "You are a helpful assistant", prompt is "TASK - D"',
            'Hi, I am an AI model, my name is AI_MODEL_1, temperature is 0.6, system prompt is "You are a helpful assistant", prompt is "TASK - E"',
            'Hi, I am an AI model, my name is AI_MODEL_1, temperature is 0.6, system prompt is "You are a helpful assistant", prompt is "TASK - F"',
            'Hi, I am an AI model, my name is AI_MODEL_1, temperature is 0.6, system prompt is "You are a helpful assistant", prompt is "TASK - G"',
            'Hi, I am an AI model, my name is AI_MODEL_1, temperature is 0.6, system prompt is "You are a helpful assistant", prompt is "TASK - H"',
          ],
        },
        data: {
          loopFor: { type: 'ref', content: ['start_0', 'tasks'] },
          loopOutputs: { llm_results: { type: 'ref', content: ['llm_0', 'result'] } },
        },
      },
      { nodeID: 'block_start_0', inputs: {}, outputs: {}, data: {} },
      {
        nodeID: 'llm_0',
        inputs: {
          modelName: 'AI_MODEL_1',
          apiKey: 'sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
          apiHost: 'https://mock-ai-url/api/v3',
          temperature: 0.6,
          systemPrompt: 'You are a helpful assistant',
          prompt: 'TASK - A',
        },
        outputs: {
          result:
            'Hi, I am an AI model, my name is AI_MODEL_1, temperature is 0.6, system prompt is "You are a helpful assistant", prompt is "TASK - A"',
        },
        data: {},
      },
      { nodeID: 'block_end_0', inputs: {}, outputs: {}, data: {} },
      { nodeID: 'block_start_0', inputs: {}, outputs: {}, data: {} },
      {
        nodeID: 'llm_0',
        inputs: {
          modelName: 'AI_MODEL_1',
          apiKey: 'sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
          apiHost: 'https://mock-ai-url/api/v3',
          temperature: 0.6,
          systemPrompt: 'You are a helpful assistant',
          prompt: 'TASK - B',
        },
        outputs: {
          result:
            'Hi, I am an AI model, my name is AI_MODEL_1, temperature is 0.6, system prompt is "You are a helpful assistant", prompt is "TASK - B"',
        },
        data: {},
      },
      { nodeID: 'block_end_0', inputs: {}, outputs: {}, data: {} },
      { nodeID: 'block_start_0', inputs: {}, outputs: {}, data: {} },
      {
        nodeID: 'llm_0',
        inputs: {
          modelName: 'AI_MODEL_1',
          apiKey: 'sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
          apiHost: 'https://mock-ai-url/api/v3',
          temperature: 0.6,
          systemPrompt: 'You are a helpful assistant',
          prompt: 'TASK - C',
        },
        outputs: {
          result:
            'Hi, I am an AI model, my name is AI_MODEL_1, temperature is 0.6, system prompt is "You are a helpful assistant", prompt is "TASK - C"',
        },
        data: {},
      },
      { nodeID: 'block_end_0', inputs: {}, outputs: {}, data: {} },
      { nodeID: 'block_start_0', inputs: {}, outputs: {}, data: {} },
      {
        nodeID: 'llm_0',
        inputs: {
          modelName: 'AI_MODEL_1',
          apiKey: 'sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
          apiHost: 'https://mock-ai-url/api/v3',
          temperature: 0.6,
          systemPrompt: 'You are a helpful assistant',
          prompt: 'TASK - D',
        },
        outputs: {
          result:
            'Hi, I am an AI model, my name is AI_MODEL_1, temperature is 0.6, system prompt is "You are a helpful assistant", prompt is "TASK - D"',
        },
        data: {},
      },
      { nodeID: 'block_end_0', inputs: {}, outputs: {}, data: {} },
      { nodeID: 'block_start_0', inputs: {}, outputs: {}, data: {} },
      {
        nodeID: 'llm_0',
        inputs: {
          modelName: 'AI_MODEL_1',
          apiKey: 'sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
          apiHost: 'https://mock-ai-url/api/v3',
          temperature: 0.6,
          systemPrompt: 'You are a helpful assistant',
          prompt: 'TASK - E',
        },
        outputs: {
          result:
            'Hi, I am an AI model, my name is AI_MODEL_1, temperature is 0.6, system prompt is "You are a helpful assistant", prompt is "TASK - E"',
        },
        data: {},
      },
      { nodeID: 'block_end_0', inputs: {}, outputs: {}, data: {} },
      { nodeID: 'block_start_0', inputs: {}, outputs: {}, data: {} },
      {
        nodeID: 'llm_0',
        inputs: {
          modelName: 'AI_MODEL_1',
          apiKey: 'sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
          apiHost: 'https://mock-ai-url/api/v3',
          temperature: 0.6,
          systemPrompt: 'You are a helpful assistant',
          prompt: 'TASK - F',
        },
        outputs: {
          result:
            'Hi, I am an AI model, my name is AI_MODEL_1, temperature is 0.6, system prompt is "You are a helpful assistant", prompt is "TASK - F"',
        },
        data: {},
      },
      { nodeID: 'block_end_0', inputs: {}, outputs: {}, data: {} },
      { nodeID: 'block_start_0', inputs: {}, outputs: {}, data: {} },
      {
        nodeID: 'llm_0',
        inputs: {
          modelName: 'AI_MODEL_1',
          apiKey: 'sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
          apiHost: 'https://mock-ai-url/api/v3',
          temperature: 0.6,
          systemPrompt: 'You are a helpful assistant',
          prompt: 'TASK - G',
        },
        outputs: {
          result:
            'Hi, I am an AI model, my name is AI_MODEL_1, temperature is 0.6, system prompt is "You are a helpful assistant", prompt is "TASK - G"',
        },
        data: {},
      },
      { nodeID: 'block_end_0', inputs: {}, outputs: {}, data: {} },
      { nodeID: 'block_start_0', inputs: {}, outputs: {}, data: {} },
      {
        nodeID: 'llm_0',
        inputs: {
          modelName: 'AI_MODEL_1',
          apiKey: 'sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
          apiHost: 'https://mock-ai-url/api/v3',
          temperature: 0.6,
          systemPrompt: 'You are a helpful assistant',
          prompt: 'TASK - H',
        },
        outputs: {
          result:
            'Hi, I am an AI model, my name is AI_MODEL_1, temperature is 0.6, system prompt is "You are a helpful assistant", prompt is "TASK - H"',
        },
        data: {},
      },
      { nodeID: 'block_end_0', inputs: {}, outputs: {}, data: {} },
      {
        nodeID: 'end_0',
        inputs: {
          answers: [
            'Hi, I am an AI model, my name is AI_MODEL_1, temperature is 0.6, system prompt is "You are a helpful assistant", prompt is "TASK - A"',
            'Hi, I am an AI model, my name is AI_MODEL_1, temperature is 0.6, system prompt is "You are a helpful assistant", prompt is "TASK - B"',
            'Hi, I am an AI model, my name is AI_MODEL_1, temperature is 0.6, system prompt is "You are a helpful assistant", prompt is "TASK - C"',
            'Hi, I am an AI model, my name is AI_MODEL_1, temperature is 0.6, system prompt is "You are a helpful assistant", prompt is "TASK - D"',
            'Hi, I am an AI model, my name is AI_MODEL_1, temperature is 0.6, system prompt is "You are a helpful assistant", prompt is "TASK - E"',
            'Hi, I am an AI model, my name is AI_MODEL_1, temperature is 0.6, system prompt is "You are a helpful assistant", prompt is "TASK - F"',
            'Hi, I am an AI model, my name is AI_MODEL_1, temperature is 0.6, system prompt is "You are a helpful assistant", prompt is "TASK - G"',
            'Hi, I am an AI model, my name is AI_MODEL_1, temperature is 0.6, system prompt is "You are a helpful assistant", prompt is "TASK - H"',
          ],
        },
        outputs: {
          answers: [
            'Hi, I am an AI model, my name is AI_MODEL_1, temperature is 0.6, system prompt is "You are a helpful assistant", prompt is "TASK - A"',
            'Hi, I am an AI model, my name is AI_MODEL_1, temperature is 0.6, system prompt is "You are a helpful assistant", prompt is "TASK - B"',
            'Hi, I am an AI model, my name is AI_MODEL_1, temperature is 0.6, system prompt is "You are a helpful assistant", prompt is "TASK - C"',
            'Hi, I am an AI model, my name is AI_MODEL_1, temperature is 0.6, system prompt is "You are a helpful assistant", prompt is "TASK - D"',
            'Hi, I am an AI model, my name is AI_MODEL_1, temperature is 0.6, system prompt is "You are a helpful assistant", prompt is "TASK - E"',
            'Hi, I am an AI model, my name is AI_MODEL_1, temperature is 0.6, system prompt is "You are a helpful assistant", prompt is "TASK - F"',
            'Hi, I am an AI model, my name is AI_MODEL_1, temperature is 0.6, system prompt is "You are a helpful assistant", prompt is "TASK - G"',
            'Hi, I am an AI model, my name is AI_MODEL_1, temperature is 0.6, system prompt is "You are a helpful assistant", prompt is "TASK - H"',
          ],
        },
        data: {},
      },
    ]);
    const report = context.reporter.export();
    expect(report.workflowStatus.status).toBe(WorkflowStatus.Succeeded);
    expect(report.reports.start_0.status).toBe(WorkflowStatus.Succeeded);
    expect(report.reports.loop_0.status).toBe(WorkflowStatus.Succeeded);
    expect(report.reports.llm_0.status).toBe(WorkflowStatus.Succeeded);
    expect(report.reports.end_0.status).toBe(WorkflowStatus.Succeeded);
    expect(report.reports.llm_0.snapshots.length).toBe(8);
    expect(report.reports.block_start_0.snapshots.length).toBe(8);
    expect(report.reports.block_end_0.snapshots.length).toBe(8);
  });
});
