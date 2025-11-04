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
    for (const nodeSchema of createSchemaPatchData) {
      const isExist = Boolean(this.document.getNode(nodeSchema.nodeID));
      let node: FlowNodeEntity;
      if (nodeSchema.fromNodeID) {
        node = this.operationService.addFromNode(nodeSchema.fromNodeID, nodeSchema.schema);
      } else {
        node = this.document.addNode({
          ...nodeSchema.schema,
          parent: nodeSchema.parentID
            ? this.document.getNode(nodeSchema.parentID)
            : this.document.root,
        });
      }
      if (isExist) {
        continue;
      }
      this.setNodeStatus(node, { loading: true, className: 'node-render-before-render' });
      this.document.fireRender();
      await delay(20);
      this.setNodeStatus(node, { loading: true, className: 'node-render-rendered' });
      await delay(180);
      this.playground.scrollToView({
        bounds: node.bounds,
        scrollToCenter: true,
      });
      this.setNodeStatus(node, { loading: true, className: 'node-render-border-transition' });
      await delay(800);
      this.setNodeStatus(node, { loading: false, className: '' });
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
