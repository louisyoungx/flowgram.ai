import type { FlowGramNode, WorkflowNodeSchema } from '@flowgram.ai/runtime-interface';

export interface INodeModel {
  id: string;
  type: FlowGramNode;
  parent: INodeModel | null;
  children: INodeModel[];
  schema: WorkflowNodeSchema;
}
