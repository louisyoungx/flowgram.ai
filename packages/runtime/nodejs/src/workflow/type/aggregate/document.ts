import { WorkflowSchema } from '@flowgram.ai/runtime-interface';

import { INode } from '../entity/node';
import { IEdge } from '../entity/edge';

export interface IDocument {
  id: string;
  nodes: INode[];
  edges: IEdge[];
  root: INode;
  start: INode;
  end: INode;
  init(schema: WorkflowSchema): void;
  dispose(): void;
}

export const IDocument = Symbol('Document');
