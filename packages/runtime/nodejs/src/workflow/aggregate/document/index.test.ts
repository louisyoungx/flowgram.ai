import { describe, expect, it } from 'vitest';

import { WorkflowRuntimeDocument } from '@workflow/aggregate';
import { basicSchema } from '@workflow/__tests__/schemas';

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
    const schema = basicSchema;
    const document = new WorkflowRuntimeDocument();
    document.init(schema);
    const nodeIDs = document.nodes.map((n) => n.id);
    const edgeIDs = document.edges.map((e) => e.id);
    expect(nodeIDs).toEqual(['root', 'start_0', 'end_0', 'llm_0']);
    expect(edgeIDs).toEqual(['start_0-llm_0', 'llm_0-end_0']);
  });

  it('should dispose', () => {
    const schema = {
      nodes: [],
      edges: [],
    };
    const document = new WorkflowRuntimeDocument();
    document.init(schema);
    expect(document.root).toBeDefined();
    document.dispose();
    expect(document.root).toBeNull();
  });
});
