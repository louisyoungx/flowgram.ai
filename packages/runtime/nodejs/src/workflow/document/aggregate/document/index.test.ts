import { describe, expect, it } from 'vitest';

import { WorkflowRuntimeDocument } from '@workflow/document';
import { TestSchemas } from '@workflow/__tests__/schemas';

describe('WorkflowRuntimeDocument create', () => {
  it('should create instance', () => {
    const document = new WorkflowRuntimeDocument();
    expect(document).toBeDefined();
    expect(document.id).toBeDefined();
  });

  it('should has root', () => {
    const schema = {
      nodes: [],
      edges: [],
    };
    const document = new WorkflowRuntimeDocument();
    document.init(schema);
    expect(document.root).toBeDefined();
  });

  it('should init', () => {
    const document = new WorkflowRuntimeDocument();
    document.init(TestSchemas.basicSchema);
    const nodeIDs = document.nodes.map((n) => n.id);
    const edgeIDs = document.edges.map((e) => e.id);
    expect(nodeIDs).toEqual(['root', 'start_0', 'end_0', 'llm_0']);
    expect(edgeIDs).toEqual(['start_0-llm_0', 'llm_0-end_0']);
  });

  it('should dispose', () => {
    const document = new WorkflowRuntimeDocument();
    document.init(TestSchemas.basicSchema);
    expect(document.nodes.length).toBe(4);
    expect(document.edges.length).toBe(2);
    document.dispose();
    expect(document.nodes.length).toBe(0);
    expect(document.edges.length).toBe(0);
  });

  it('should has start & end', () => {
    const document = new WorkflowRuntimeDocument();
    document.init(TestSchemas.basicSchema);
    expect(document.start.id).toBe('start_0');
    expect(document.end.id).toBe('end_0');
  });
});
