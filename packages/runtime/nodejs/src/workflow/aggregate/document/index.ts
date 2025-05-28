import { FlowGramNode, WorkflowSchema } from '@flowgram.ai/runtime-interface';

import type { IDocument, IEdge, INode } from '@workflow/type';
import { uuid } from '@workflow/infra';
import { flatSchema } from './flat-schema';
import { createStore, DocumentStore } from './create-store';

export class WorkflowRuntimeDocument implements IDocument {
  public readonly id: string;

  private store: DocumentStore;

  constructor() {
    this.id = uuid();
  }

  public get root(): INode {
    return this.getNode(FlowGramNode.Root)!;
  }

  public get start(): INode {
    return this.nodes.find((n) => n.type === FlowGramNode.Start)!;
  }

  public get end(): INode {
    return this.nodes.find((n) => n.type === FlowGramNode.End)!;
  }

  public getNode(id: string): INode | null {
    return this.store.nodes.get(id) ?? null;
  }

  public getEdge(id: string): IEdge | null {
    return this.store.edges.get(id) ?? null;
  }

  public get nodes(): INode[] {
    return Array.from(this.store.nodes.values());
  }

  public get edges(): IEdge[] {
    return Array.from(this.store.edges.values());
  }

  public init(schema: WorkflowSchema): void {
    const flattenSchema = flatSchema(schema);
    this.store = createStore(flattenSchema);
  }

  public dispose(): void {
    this.store.edges.clear();
    this.store.nodes.clear();
    this.store.ports.clear();
  }
}
