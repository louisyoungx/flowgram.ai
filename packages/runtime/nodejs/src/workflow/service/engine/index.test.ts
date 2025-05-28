import { beforeEach, describe, expect, it } from 'vitest';

import { WorkflowRuntimeEngine } from '@workflow/service';
import { WorkflowRuntimeDocument } from '@workflow/aggregate';
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
});
