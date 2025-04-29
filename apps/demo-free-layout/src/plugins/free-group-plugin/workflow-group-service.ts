import {
  FlowGroupService,
  FreeOperationType,
  HistoryService,
  inject,
  injectable,
  nanoid,
  WorkflowNodeEntity,
} from '@flowgram.ai/free-layout-editor';

import { WorkflowGroupUtils } from './utils';

@injectable()
/** 分组服务 */
export class WorkflowGroupService extends FlowGroupService {
  @inject(HistoryService) private historyService: HistoryService;

  /** 创建分组节点 */
  public createGroup(nodes: WorkflowNodeEntity[]): WorkflowNodeEntity | undefined {
    if (!WorkflowGroupUtils.validate(nodes)) {
      return;
    }
    const sortedNodes: WorkflowNodeEntity[] = nodes.sort((a, b) => a.index - b.index);
    const fromNode = sortedNodes[0];
    const groupId = `group_${nanoid(5)}`;
    this.historyService.pushOperation({
      type: FreeOperationType.createGroup,
      value: {
        targetId: fromNode.id,
        groupId,
        nodeIds: nodes.map((node) => node.id),
      },
    });
  }

  /** 取消分组 */
  public ungroup(groupNode: WorkflowNodeEntity): void {
    const group = this.groupController(groupNode);
    if (!group) {
      return;
    }
    const nodes = group.nodes;
    if (!groupNode.pre) {
      return;
    }
    group.collapse();
    this.historyService.pushOperation({
      type: FreeOperationType.ungroup,
      value: {
        groupId: groupNode.id,
        targetId: groupNode.pre.id,
        nodeIds: nodes.map((node) => node.id),
      },
    });
  }
}
