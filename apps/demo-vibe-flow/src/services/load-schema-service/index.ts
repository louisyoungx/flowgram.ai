/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import {
  delay,
  EntityManager,
  FlowDocument,
  FlowDocumentJSON,
  FlowNodeEntity,
  FlowNodeFormData,
  FlowOperationBaseService,
  FormModelV2,
  inject,
  injectable,
  Playground,
} from '@flowgram.ai/fixed-layout-editor';

import { WorkflowLoadSchemaUtils } from './utils';
import { SchemaPatch, SchemaPatchData } from './type';

@injectable()
export class WorkflowLoadSchemaService {
  @inject(FlowDocument) private document: FlowDocument;

  @inject(EntityManager) private entityManager: EntityManager;

  @inject(FlowOperationBaseService) private operationService: FlowOperationBaseService;

  @inject(Playground) private playground: Playground;

  private currentSchema: FlowDocumentJSON = {
    nodes: [],
  };

  public async load(schema: FlowDocumentJSON): Promise<void> {
    const schemaPatch: SchemaPatch = WorkflowLoadSchemaUtils.createSchemaPatch(
      this.currentSchema,
      schema
    );
    this.currentSchema = schema;
    await this.applySchemaPatch(schemaPatch);
    this.document.fromJSON(schema);
  }

  private async applySchemaPatch(schemaPatch: SchemaPatch): Promise<void> {
    this.applyRemovePatch(schemaPatch.remove);
    await this.applyCreatePatch(schemaPatch.create);
  }

  private async applyCreatePatch(createSchemaPatchData: SchemaPatchData[]): Promise<void> {
    for (const nodePatchData of createSchemaPatchData) {
      const isExist = Boolean(this.document.getNode(nodePatchData.nodeID));
      const node = this.createNode(nodePatchData);
      if (isExist) {
        continue;
      }
      // 隐藏节点
      this.setNodeStatus(node, { loading: true, className: 'node-render-before-render' });
      this.document.fireRender();
      await delay(20);
      // 展示节点动画
      this.setNodeStatus(node, { loading: true, className: 'node-render-rendered' });
      await delay(180);
      // 滚动到节点位置
      this.playground.scrollToView({
        bounds: node.bounds,
        scrollToCenter: true,
      });
      // 高亮节点边框
      this.setNodeStatus(node, { loading: true, className: 'node-render-border-transition' });
      await delay(800);
      // 移除节点边框高亮
      this.setNodeStatus(node, { loading: false, className: '' });
    }
  }

  private createNode(patchData: SchemaPatchData): FlowNodeEntity {
    const parent = patchData.parentID
      ? this.document.getNode(patchData.parentID)
      : this.document.root;
    if (parent?.flowNodeType === 'condition' && patchData.schema.type === 'block') {
      const blocks = this.document.addInlineBlocks(parent, [patchData.schema]);
      return blocks.find((block) => block.flowNodeType === 'block') ?? blocks[0];
    } else if (patchData.fromNodeID) {
      return this.operationService.addFromNode(patchData.fromNodeID, patchData.schema);
    } else {
      return this.document.addNode({
        ...patchData.schema,
        parent,
      });
    }
  }

  private applyRemovePatch(removeNodeIDs: string[]): void {
    removeNodeIDs.forEach((nodeID) => {
      const node = this.entityManager.getEntityById<FlowNodeEntity>(nodeID);
      if (node) {
        node.dispose();
      }
    });
  }

  private setNodeStatus(
    node: FlowNodeEntity,
    status: {
      loading: boolean;
      className: string;
    }
  ): void {
    const formModel = node.getData(FlowNodeFormData)?.getFormModel<FormModelV2>();
    formModel?.setValueIn('status', status);
  }
}
