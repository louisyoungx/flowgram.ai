import { FlowGramNode, WorkflowNodeSchema, WorkflowSchema } from '@flowgram.ai/runtime-interface';

import { WorkflowRuntimeEdge } from '@workflow/entity';

export interface FlattenData {
  flattenSchema: WorkflowSchema;
  nodeBlocks: Map<string, string[]>;
  nodeEdges: Map<string, string[]>;
}

type FlatSchema = (json: Partial<WorkflowSchema>) => FlattenData;

const flatLayer = (data: FlattenData, layerNodes: WorkflowNodeSchema[]) => {
  layerNodes.forEach((nodeJSON) => {
    const { blocks, edges } = nodeJSON;
    if (blocks) {
      data.flattenSchema.nodes.push(...blocks);
      const blockIDs: string[] = [];
      blocks.forEach((block) => {
        if (block.blocks) {
          flatLayer(data, block.blocks);
        }
        blockIDs.push(block.id);
      });
      data.nodeBlocks.set(nodeJSON.id, blockIDs);
      delete nodeJSON.blocks;
    }
    if (edges) {
      data.flattenSchema.edges.push(...edges);
      const edgeIDs: string[] = [];
      edges.forEach((edge) => {
        const edgeID = WorkflowRuntimeEdge.createID(edge);
        edgeIDs.push(edgeID);
      });
      data.nodeEdges.set(nodeJSON.id, edgeIDs);
      delete nodeJSON.edges;
    }
  });
};

/**
 * flat the tree json structure, extract the structure information to map
 */
export const flatSchema: FlatSchema = (schema = { nodes: [], edges: [] }) => {
  const rootNodes = schema.nodes ?? [];
  const rootEdges = schema.edges ?? [];

  const data: FlattenData = {
    flattenSchema: {
      nodes: [...rootNodes],
      edges: [...rootEdges],
    },
    nodeBlocks: new Map(),
    nodeEdges: new Map(),
  };

  const rootBlockIDs: string[] = rootNodes.map((node) => node.id);
  const rootEdgeIDs: string[] = rootEdges.map((edge) => WorkflowRuntimeEdge.createID(edge));

  data.nodeBlocks.set(FlowGramNode.Root, rootBlockIDs);
  data.nodeEdges.set(FlowGramNode.Root, rootEdgeIDs);

  flatLayer(data, rootNodes);

  return data;
};
