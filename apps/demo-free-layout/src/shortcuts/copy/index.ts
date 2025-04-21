import {
  FreeLayoutPluginContext,
  Rectangle,
  ShortcutsHandler,
  TransformData,
  WorkflowDocument,
  WorkflowEdgeJSON,
  WorkflowJSON,
  WorkflowLineEntity,
  WorkflowNodeEntity,
  WorkflowNodeJSON,
  WorkflowNodeLinesData,
  WorkflowNodeMeta,
  WorkflowSelectService,
} from '@flowgram.ai/free-layout-editor';
import { Toast } from '@douyinfe/semi-ui';

import type {
  WorkflowClipboardRect,
  WorkflowClipboardSource,
  WorkflowClipboardData,
} from '../type';
import { FlowCommandId, WorkflowClipboardDataID } from '../constants';
import { WorkflowNodeType } from '../../nodes';

export class CopyShortcut implements ShortcutsHandler {
  public commandId = FlowCommandId.COPY;

  public shortcuts = ['meta c', 'ctrl c'];

  private document: WorkflowDocument;

  private selectService: WorkflowSelectService;

  constructor(context: FreeLayoutPluginContext) {
    this.document = context.get(WorkflowDocument);
    this.selectService = context.get(WorkflowSelectService);
  }

  public async execute(): Promise<void> {
    if (await this.hasTextSelected()) {
      // 如果有选中的文字，优先复制文字
      return;
    }
    if (!this.isValid(this.selectedNodes)) {
      return;
    }
    const data = this.toData();
    await this.write(data);
  }

  /** 是否有选中的文字 */
  private async hasTextSelected(): Promise<boolean> {
    if (!window.getSelection()?.toString()) {
      return false;
    }
    await navigator.clipboard.writeText(window.getSelection()?.toString() ?? '');
    Toast.success({
      content: 'Text copied',
    });
    return true;
  }

  /** 获取选中的节点 */
  private get selectedNodes(): WorkflowNodeEntity[] {
    return this.selectService.selection.filter(
      (n) => n instanceof WorkflowNodeEntity
    ) as WorkflowNodeEntity[];
  }

  private isValid(nodes: WorkflowNodeEntity[]): boolean {
    if (nodes.length === 0) {
      Toast.warning({
        content: 'No nodes selected',
      });
      return false;
    }
    return true;
  }

  private toData(): WorkflowClipboardData {
    const validNodes = this.getValidNodes(this.selectedNodes);
    const source = this.toSource();
    const json = this.toJSON(validNodes);
    const bounds = this.getEntireBounds(validNodes);
    return {
      type: WorkflowClipboardDataID,
      source,
      json,
      bounds,
    };
  }

  private getValidNodes(nodes: WorkflowNodeEntity[]): WorkflowNodeEntity[] {
    return nodes.filter((n) => {
      if (
        [WorkflowNodeType.Start, WorkflowNodeType.End].includes(n.flowNodeType as WorkflowNodeType)
      ) {
        return false;
      }
      if (n.getNodeMeta<WorkflowNodeMeta>().copyDisable) {
        return false;
      }
      return true;
    });
  }

  /** 获取来源数据 */
  private toSource(): WorkflowClipboardSource {
    return {
      host: window.location.host,
    };
  }

  /** 获取节点的 JSON */
  private toJSON(nodes: WorkflowNodeEntity[]): WorkflowJSON {
    const nodeJSONs = this.getNodeJSONs(nodes);
    const edgeJSONs = this.getEdgeJSONs(nodes);
    return {
      nodes: nodeJSONs,
      edges: edgeJSONs,
    };
  }

  /** 获取节点的 JSON */
  private getNodeJSONs(nodes: WorkflowNodeEntity[]): WorkflowNodeJSON[] {
    const nodeJSONs = nodes.map((node) => this.document.toNodeJSON(node));
    return nodeJSONs.filter(Boolean);
  }

  /** 获取所有节点的边 */
  private getEdgeJSONs(nodes: WorkflowNodeEntity[]): WorkflowEdgeJSON[] {
    const lineSet = new Set<WorkflowLineEntity>();
    const nodeIdSet = new Set(nodes.map((n) => n.id));
    nodes.forEach((node) => {
      const linesData = node.getData(WorkflowNodeLinesData);
      const lines = [...linesData.inputLines, ...linesData.outputLines];
      lines.forEach((line) => {
        if (nodeIdSet.has(line.from.id) && line.to?.id && nodeIdSet.has(line.to.id)) {
          lineSet.add(line);
        }
      });
    });
    return Array.from(lineSet).map((line) => line.toJSON());
  }

  /** 获取所有节点的矩形 */
  private getEntireBounds(nodes: WorkflowNodeEntity[]): WorkflowClipboardRect {
    const bounds = nodes.map((node) => node.getData<TransformData>(TransformData).bounds);
    const rect = Rectangle.enlarge(bounds);
    return {
      x: rect.x,
      y: rect.y,
      width: rect.width,
      height: rect.height,
    };
  }

  /** 写入剪贴板 */
  private async write(data: WorkflowClipboardData): Promise<void> {
    try {
      await navigator.clipboard.writeText(JSON.stringify(data));
      this.notifySuccess();
    } catch (err) {
      console.error('Failed to write text: ', err);
    }
  }

  private notifySuccess(): void {
    const nodeTypes = this.selectedNodes.map((node) => node.flowNodeType);
    if (nodeTypes.includes('start') || nodeTypes.includes('end')) {
      Toast.warning({
        content:
          'The Start/End node cannot be duplicated, other nodes have been copied to the clipboard',
        showClose: false,
      });
      return;
    }
    Toast.success({
      content: 'Nodes have been copied to the clipboard',
      showClose: false,
    });
    return;
  }
}
