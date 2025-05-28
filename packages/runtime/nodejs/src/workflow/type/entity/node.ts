import type { FlowGramNode, PositionSchema } from '@flowgram.ai/runtime-interface';

import { IPort } from './port';
import { IEdge } from './edge';

export interface INode {
  id: string;
  type: FlowGramNode;
  name: string;
  position: PositionSchema;
  ports: {
    inputs: IPort[];
    outputs: IPort[];
  };
  edges: {
    inputs: IEdge[];
    outputs: IEdge[];
  };
  parent: INode | null;
  children: INode[];
  prev: INode[];
  next: INode[];
  isBranch?: boolean;
}

export interface CreateNodeParams {
  id: string;
  type: FlowGramNode;
  name: string;
  position: PositionSchema;
}
