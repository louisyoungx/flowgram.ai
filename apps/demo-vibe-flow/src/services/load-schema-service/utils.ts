/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { FlowDocumentJSON, FlowNodeJSON } from '@flowgram.ai/fixed-layout-editor';

import { SchemaPatch, SchemaPatchData } from './type';

export namespace WorkflowLoadSchemaUtils {
  const createSchemaPatchDataMap = (params: {
    nodeSchemas: FlowNodeJSON[];
    parentID?: string;
    schemaPatchDataMap?: Map<string, SchemaPatchData>;
  }): Map<string, SchemaPatchData> => {
    const { nodeSchemas, parentID, schemaPatchDataMap = new Map() } = params;
    nodeSchemas.forEach((nodeSchema: FlowNodeJSON, index: number) => {
      const prevNodeSchema = nodeSchemas[index - 1];
      const schemaPatchData: SchemaPatchData = {
        nodeID: nodeSchema.id,
        schema: nodeSchema,
        parentID,
        index,
        fromNodeID: prevNodeSchema?.id,
      };
      schemaPatchDataMap.set(nodeSchema.id, schemaPatchData);
      if (nodeSchema.blocks) {
        createSchemaPatchDataMap({
          nodeSchemas: nodeSchema.blocks,
          parentID: nodeSchema.id,
          schemaPatchDataMap,
        });
      }
    });
    return schemaPatchDataMap;
  };

  export const createSchemaPatch = (
    prevSchema: FlowDocumentJSON,
    schema: FlowDocumentJSON
  ): SchemaPatch => {
    const prevSchemaPatchDataMap = createSchemaPatchDataMap({
      nodeSchemas: prevSchema.nodes,
    });
    const currentSchemaPatchDataMap = createSchemaPatchDataMap({
      nodeSchemas: schema.nodes,
    });
    const prevNodeIDs: string[] = Array.from(prevSchemaPatchDataMap.keys());
    const currentNodeIDs: string[] = Array.from(currentSchemaPatchDataMap.keys());

    const createNodeIDs: string[] = currentNodeIDs.filter((id) => !prevSchemaPatchDataMap.has(id));
    const removeNodeIDs: string[] = prevNodeIDs.filter((id) => !currentSchemaPatchDataMap.has(id));

    const createSchemaPatches: SchemaPatchData[] = createNodeIDs
      .map((id) => currentSchemaPatchDataMap.get(id)!)
      .filter(Boolean);

    const schemaPatch: SchemaPatch = {
      create: createSchemaPatches,
      remove: removeNodeIDs,
    };

    console.log('@debug schemaPatch', schemaPatch);

    return schemaPatch;
  };
}
