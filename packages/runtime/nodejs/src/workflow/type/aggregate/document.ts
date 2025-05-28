import { WorkflowSchema } from '@flowgram.ai/runtime-interface';

import { INode } from '../entity/node';
import { IEdge } from '../entity/edge';

export interface IDocument {
  id: string;
  nodes: INode[];
  edges: IEdge[];

  init(schema: WorkflowSchema): void;
  dispose(): void;
}
