import {
  FreeLayoutPluginContext,
  ShortcutsHandler,
  WorkflowDocument,
  WorkflowLineEntity,
  WorkflowNodeEntity,
  WorkflowNodeMeta,
  WorkflowSelectService,
} from '@flowgram.ai/free-layout-editor';
import { Toast } from '@douyinfe/semi-ui';

import { FlowCommandId } from '../constants';
import { WorkflowNodeType } from '../../nodes';

export class DeleteShortcut implements ShortcutsHandler {
  public commandId = FlowCommandId.DELETE;

  public shortcuts = ['backspace', 'delete'];

  private document: WorkflowDocument;

  private selectService: WorkflowSelectService;

  constructor(context: FreeLayoutPluginContext) {
    this.document = context.get(WorkflowDocument);
    this.selectService = context.get(WorkflowSelectService);
  }

  public async execute(): Promise<void> {
    if (!this.isValid(this.selectService.selectedNodes)) {
      return;
    }
    // 删除选中实体
    this.selectService.selection.forEach((entity) => {
      if (entity instanceof WorkflowNodeEntity) {
        this.removeNode(entity);
      } else if (entity instanceof WorkflowLineEntity) {
        this.removeLine(entity);
      } else {
        entity.dispose();
      }
    });
    // 过滤掉已删除的实体
    this.selectService.selection = this.selectService.selection.filter((s) => !s.disposed);
  }

  private isValid(nodes: WorkflowNodeEntity[]): boolean {
    const hasSystemNodes = nodes.some((n) =>
      [WorkflowNodeType.Start, WorkflowNodeType.End].includes(n.flowNodeType as WorkflowNodeType)
    );
    if (hasSystemNodes) {
      Toast.error({
        content: 'Start or End node cannot be deleted',
        showClose: false,
      });
      return false;
    }
    return true;
  }

  /** 删除节点 */
  private removeNode(node: WorkflowNodeEntity): void {
    if (!this.document.canRemove(node)) {
      return;
    }
    const nodeMeta = node.getNodeMeta<WorkflowNodeMeta>();
    const subCanvas = nodeMeta.subCanvas?.(node);
    if (subCanvas?.isCanvas) {
      subCanvas.parentNode.dispose();
      return;
    }
    node.dispose();
  }

  /** 删除连线 */
  private removeLine(line: WorkflowLineEntity): void {
    if (!this.document.linesManager.canRemove(line)) {
      return;
    }
    line.dispose();
  }
}
