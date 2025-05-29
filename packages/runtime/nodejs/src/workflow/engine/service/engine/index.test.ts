import { beforeEach, describe, expect, it } from 'vitest';

import { WorkflowRuntimeEngine } from '@workflow/engine';
import { WorkflowRuntimeDocument } from '@workflow/document';
import { TestSchemas } from '@workflow/__tests__/schemas';
import { WorkflowRuntimeValidation } from '../validation';

let engine: WorkflowRuntimeEngine;

beforeEach(() => {
  const Document = new WorkflowRuntimeDocument();
  const Validation = new WorkflowRuntimeValidation();
  engine = new WorkflowRuntimeEngine({
    Document,
    Validation,
  });
});

describe('WorkflowRuntimeEngine', () => {
  it('should create a WorkflowRuntimeEngine', () => {
    const Document = new WorkflowRuntimeDocument();
    const Validation = new WorkflowRuntimeValidation();
    const engine = new WorkflowRuntimeEngine({
      Document,
      Validation,
    });
    expect(engine).toBeDefined();
  });

  it('should execute a workflow', async () => {
    await engine.execute(TestSchemas.twoLLMSchema);
  });

  it('should execute a workflow with input', async () => {
    await engine.execute(TestSchemas.basicSchema, {
      model_type: 'ai-model',
      llm_settings: {
        temperature: 0.5,
      },
      prompt: 'how are you?',
    });
  });
});
