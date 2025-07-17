/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { FlowNodeBaseType } from '@flowgram.ai/document';

import { WorkflowGroupJSON, WorkflowJSON, WorkflowNodeJSON } from '../typings';

const createGroupNodes = (
  nodeJSON: WorkflowNodeJSON,
  groupMap: Map<string, WorkflowGroupJSON[]>
): void => {
  if (!nodeJSON.blocks) {
    return;
  }
  nodeJSON.blocks.forEach((blockJSON) => {
    createGroupNodes(blockJSON, groupMap);
  });
  const groups = groupMap.get(nodeJSON.id);
  if (!groups || !groups.length) {
    return;
  }
  const blockMap = new Map<string, WorkflowNodeJSON>(nodeJSON.blocks.map((n) => [n.id, n]));
  const groupNodeJSONs = groups.map((groupJSON): WorkflowNodeJSON => {
    const groupBlocks = groupJSON.data.blockIDs
      .map((blockID) => blockMap.get(blockID))
      .filter(Boolean) as WorkflowNodeJSON[];
    const groupEdges = nodeJSON.edges?.filter((edge) =>
      groupBlocks.some((block) => block.id === edge.sourceNodeID || block.id === edge.targetNodeID)
    );
    const groupNodeJSON: WorkflowNodeJSON = {
      ...groupJSON,
      blocks: groupBlocks,
      edges: groupEdges,
    };
    return groupNodeJSON;
  });
  const groupBlockSet = new Set(groups.map((groupJSON) => groupJSON.data.blockIDs).flat());
  const blocks = nodeJSON.blocks
    .filter((block) => !groupBlockSet.has(block.id))
    .concat(groupNodeJSONs);
  nodeJSON.blocks = blocks;
};

export const jsonJoinGroups = (json: WorkflowJSON): WorkflowJSON => {
  const rootNode: WorkflowNodeJSON = {
    id: FlowNodeBaseType.ROOT,
    type: FlowNodeBaseType.ROOT,
    data: {},
    meta: {},
    blocks: json.nodes ?? [],
    edges: json.edges ?? [],
  };
  const groupMap = new Map<string, WorkflowGroupJSON[]>();
  (json.groups ?? []).forEach((group) => {
    const parentID = group.data.parentID;
    if (!groupMap.has(parentID)) {
      groupMap.set(parentID, []);
    }
    groupMap.get(parentID)?.push(group);
  });
  createGroupNodes(rootNode, groupMap);
  return {
    nodes: rootNode.blocks ?? [],
    edges: rootNode.edges ?? [],
  };
};
