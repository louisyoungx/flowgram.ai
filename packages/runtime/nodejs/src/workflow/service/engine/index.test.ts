import { describe, expect, it } from 'vitest';

import { WorkflowRuntimeEngine } from '@workflow/service';
import { WorkflowRuntimeDocument } from '@workflow/aggregate';

describe('RuntimeModel create', () => {
  it('should create a RuntimeModel', () => {
    const Document = new WorkflowRuntimeDocument();
    const engine = new WorkflowRuntimeEngine({
      Document,
    });
    expect(engine).toBeDefined();
    expect(engine.id).toBeDefined();
  });
});
