import { beforeEach, describe, expect, it } from 'vitest';

import { WorkflowRuntimeState, WorkflowRuntimeVariableStore } from '@workflow/state';
import { WorkflowRuntimeNodeExecutors } from '@workflow/executor';
import { WorkflowRuntimeEngine, WorkflowRuntimeExecutor } from '@workflow/engine';
import { WorkflowRuntimeDocument } from '@workflow/document';
import { TestSchemas } from '@workflow/__tests__/schemas';
import { WorkflowRuntimeValidation } from '../validation';

let engine: WorkflowRuntimeEngine;

beforeEach(() => {
  const Document = new WorkflowRuntimeDocument();
  const VariableStore = new WorkflowRuntimeVariableStore();
  const State = new WorkflowRuntimeState({ VariableStore });
  const Validation = new WorkflowRuntimeValidation();
  const Executor = new WorkflowRuntimeExecutor(WorkflowRuntimeNodeExecutors);
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

  // it('should execute a workflow', async () => {
  //   await engine.execute(TestSchemas.twoLLMSchema);
  // });

  it('should execute a workflow with input', async () => {
    const result = await engine.execute(TestSchemas.basicSchema, {
      model_type: 'ai-model',
      llm_settings: {
        temperature: 0.5,
      },
      prompt: 'How are you?',
    });
    expect(result).toStrictEqual({
      llm_res: 'Hi, I am an AI assistant',
      llm_prompt: 'How are you?',
    });
  });
});
