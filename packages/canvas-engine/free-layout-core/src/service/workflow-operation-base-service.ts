/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { inject } from 'inversify';
import { IPoint, Emitter } from '@flowgram.ai/utils';
import { FlowNodeEntityOrId, FlowOperationBaseServiceImpl } from '@flowgram.ai/document';
import { TransformData } from '@flowgram.ai/core';

import { WorkflowDocument } from '../workflow-document';
import {
  NodePostionUpdateEvent,
  WorkflowOperationBaseService,
} from '../typings/workflow-operation';
import { WorkflowJSON } from '../typings';
import { WorkflowNodeEntity, WorkflowLineEntity } from '../entities';

export class WorkflowOperationBaseServiceImpl
  extends FlowOperationBaseServiceImpl
  implements WorkflowOperationBaseService
{
  @inject(WorkflowDocument)
  protected declare document: WorkflowDocument;

  private onNodePostionUpdateEmitter = new Emitter<NodePostionUpdateEvent>();

  public readonly onNodePostionUpdate = this.onNodePostionUpdateEmitter.event;

  updateNodePosition(nodeOrId: FlowNodeEntityOrId, position: IPoint): void {
    const node = this.toNodeEntity(nodeOrId);

    if (!node) {
      return;
    }

    const transformData = node.getData(TransformData);
    const oldPosition = {
      x: transformData.position.x,
      y: transformData.position.y,
    };
    transformData.update({
      position,
    });

    this.onNodePostionUpdateEmitter.fire({
      node,
      oldPosition,
      newPosition: position,
    });
  }

  fromJSON(json: WorkflowJSON) {
    if (this.document.disposed) return;
    const workflowJSON: WorkflowJSON = {
      nodes: json.nodes ?? [],
      edges: json.edges ?? [],
    };

    const oldNodes = this.document.getAllNodes();
    const oldEdges = this.document.getAllEdges();

    const newNodes: WorkflowNodeEntity[] = [];
    const newEdges: WorkflowLineEntity[] = [];

    // 逐层渲染
    this.document.batchAddFromJSON(workflowJSON, {
      onNodeCreated: (node) => newNodes.push(node),
      onEdgeCreated: (edge) => newEdges.push(edge),
    });

    const newNodesSet = new Set<WorkflowNodeEntity>(newNodes);
    oldNodes.forEach((node) => {
      if (!newNodesSet.has(node)) {
        node.dispose();
      }
    });

    const newEdgesSet = new Set<WorkflowLineEntity>(newEdges);
    oldEdges.forEach((edge) => {
      if (!newEdgesSet.has(edge)) {
        edge.dispose();
      }
    });

    // 批量触发画布更新
    this.document.fireRender();
  }
}
