import type { WorkflowNodeMetaSchema } from './node-meta';
import type { WorkflowEdgeSchema } from './edge';

export interface WorkflowNodeSchema<T = string, D = unknown> {
  id: string;
  type: T;
  meta: WorkflowNodeMetaSchema;
  data: D;
  blocks?: WorkflowNodeSchema[];
  edges?: WorkflowEdgeSchema[];
}
