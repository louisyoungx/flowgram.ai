import { beforeEach, describe, expect, it } from 'vitest';

import { WorkflowRuntimeState, WorkflowRuntimeVariableStore } from '@workflow/state';
import { WorkflowRuntimeEngine, WorkflowRuntimeExecutor } from '@workflow/engine';
import { WorkflowRuntimeDocument } from '@workflow/document';
import { TestSchemas } from '@workflow/__tests__/schemas';
import { MockWorkflowRuntimeNodeExecutors } from '@workflow/__tests__/executor';
import { WorkflowRuntimeValidation } from '../validation';

let engine: WorkflowRuntimeEngine;

beforeEach(() => {
  const Document = new WorkflowRuntimeDocument();
  const VariableStore = new WorkflowRuntimeVariableStore();
  const State = new WorkflowRuntimeState({ VariableStore });
  const Validation = new WorkflowRuntimeValidation();
  const Executor = new WorkflowRuntimeExecutor(MockWorkflowRuntimeNodeExecutors);
  engine = new WorkflowRuntimeEngine({
    Document,
    State,
    Validation,
    Executor,
  });
});

describe('WorkflowRuntimeEngine', () => {
  it('should create a WorkflowRuntimeEngine', () => {
    expect(engine).toBeDefined();
  });

  it('should execute a workflow with input', async () => {
    const result = await engine.execute(TestSchemas.basicSchema, {
      model_name: 'ai-model',
      llm_settings: {
        temperature: 0.5,
      },
      prompt: 'How are you?',
    });
    expect(result).toStrictEqual({
      llm_res: `Hi, I'm an AI assistant, my name is ai-model, temperature is 0.5, system prompt is "You are a helpful AI assistant.", prompt is "How are you?"`,
      llm_prompt: 'How are you?',
    });
  });

  it('should execute a workflow with branch', async () => {
    const result = await engine.execute(TestSchemas.branchSchema, {
      model_id: 1,
      prompt: 'Tell me a joke',
    });
    expect(result).toStrictEqual({
      m1_res: `Hi, I'm an AI assistant, my name is AI_MODEL_1, temperature is 0.5, system prompt is "I'm Model 1.", prompt is "Tell me a joke"`,
    });
  });
});
