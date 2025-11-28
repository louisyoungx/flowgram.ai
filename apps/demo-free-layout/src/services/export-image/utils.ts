/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import {
  TransformData,
  type WorkflowDocument,
  type WorkflowNodeEntity,
} from '@flowgram.ai/free-layout-editor';

const getNodesRect = (nodes: WorkflowNodeEntity[]) => {
  const rects = nodes
    .map((node) => node.getData<TransformData>(TransformData)?.bounds)
    .filter(Boolean);
  const x1 = Math.min(...rects.map((rect) => rect.x));
  const x2 = Math.max(...rects.map((rect) => rect.x + rect.width));
  const y1 = Math.min(...rects.map((rect) => rect.y));
  const y2 = Math.max(...rects.map((rect) => rect.y + rect.height));

  const width = x2 - x1;
  const height = y2 - y1;

  return {
    width,
    height,
    x: x1,
    y: y1,
  };
};

/**
 * 获取流程所有节点矩形坐标
 */
export const getWorkflowRect = (document: WorkflowDocument) => getNodesRect(document.getAllNodes());
