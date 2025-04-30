import {
  FlowGroupService,
  FlowNodeBaseType,
  HistoryService,
  inject,
  injectable,
  nanoid,
  TransformData,
  WorkflowDocument,
  WorkflowNodeEntity,
  WorkflowNodeJSON,
  WorkflowOperationBaseService,
} from '@flowgram.ai/free-layout-editor';

import { WorkflowGroupUtils } from './utils';

@injectable()
/** 分组服务 */
export class WorkflowGroupService extends FlowGroupService {
  @inject(WorkflowDocument) private document: WorkflowDocument;

  @inject(WorkflowOperationBaseService) freeOperationService: WorkflowOperationBaseService;

  @inject(HistoryService) private historyService: HistoryService;

  /** 创建分组节点 */
  public createGroup(nodes: WorkflowNodeEntity[]): WorkflowNodeEntity | undefined {
    if (!WorkflowGroupUtils.validate(nodes)) {
      return;
    }
    const parent = nodes[0].parent ?? this.document.root;
    const groupId = `group_${nanoid(5)}`;
    const groupJSON: WorkflowNodeJSON = {
      type: FlowNodeBaseType.GROUP,
      id: groupId,
      meta: {
        position: {
          x: 0,
          y: 0,
        },
      },
    };
    this.historyService.startTransaction();
    this.document.createWorkflowNodeByType(
      FlowNodeBaseType.GROUP,
      {
        x: 0,
        y: 0,
      },
      groupJSON,
      parent.id
    );
    nodes.forEach((node) => {
      this.freeOperationService.moveNode(node, {
        parent: groupId,
      });
    });
    this.historyService.endTransaction();
  }

  /** 取消分组 */
  public ungroup(groupNode: WorkflowNodeEntity): void {
    const groupBlocks = groupNode.blocks.slice();
    if (!groupNode.parent) {
      return;
    }
    const groupPosition = groupNode.transform.position;

    this.historyService.startTransaction();
    groupBlocks.forEach((node) => {
      this.freeOperationService.moveNode(node, {
        parent: groupNode.parent?.id,
      });
    });
    groupNode.dispose();
    groupBlocks.forEach((node) => {
      const transform = node.getData(TransformData);
      const position = {
        x: transform.position.x + groupPosition.x,
        y: transform.position.y + groupPosition.y,
      };
      this.freeOperationService.updateNodePosition(node, position);
    });
    this.historyService.endTransaction();
  }
}
