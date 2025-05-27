import { describe, expect, it } from 'vitest';
import { WorkflowSchema } from '@flowgram.ai/runtime-interface';

import { RuntimeModel } from '@runtime/model';

describe('RuntimeModel create', () => {
  it('should create a RuntimeModel', () => {
    const schema: WorkflowSchema = {
      nodes: [],
      edges: [],
    };
    const runtime = new RuntimeModel({ schema });
    expect(runtime).toBeDefined();
    expect(runtime.id).toBeDefined();
    expect(runtime.schema).toEqual(schema);
  });
});
