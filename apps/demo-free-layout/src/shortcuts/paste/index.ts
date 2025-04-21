import {
  delay,
  EntityManager,
  FlowNodeTransformData,
  FreeLayoutPluginContext,
  IPoint,
  Rectangle,
  ShortcutsHandler,
  WorkflowDocument,
  WorkflowDragService,
  WorkflowHoverService,
  WorkflowJSON,
  WorkflowNodeEntity,
  WorkflowNodeMeta,
  WorkflowSelectService,
} from '@flowgram.ai/free-layout-editor';
import { Toast } from '@douyinfe/semi-ui';

import { WorkflowClipboardData, WorkflowClipboardRect } from '../type';
import { FlowCommandId, WorkflowClipboardDataID } from '../constants';
import { generateUniqueWorkflow } from './unique-workflow';

export class PasteShortcut implements ShortcutsHandler {
  public commandId = FlowCommandId.PASTE;

  public shortcuts = ['meta v', 'ctrl v'];

  private document: WorkflowDocument;

  private selectService: WorkflowSelectService;

  private entityManager: EntityManager;

  private hoverService: WorkflowHoverService;

  private dragService: WorkflowDragService;

  constructor(context: FreeLayoutPluginContext) {
    this.document = context.get(WorkflowDocument);
    this.selectService = context.get(WorkflowSelectService);
    this.entityManager = context.get(EntityManager);
    this.hoverService = context.get(WorkflowHoverService);
    this.dragService = context.get(WorkflowDragService);
  }

  public async execute(): Promise<WorkflowNodeEntity[] | undefined> {
    const data = await this.tryReadClipboard();
    if (!data) {
      return;
    }
    if (!this.isValidData(data)) {
      return;
    }
    const nodes = this.apply(data);
    if (nodes.length > 0) {
      Toast.success({
        content: 'Copy successfully',
        showClose: false,
      });
      await this.nextTick();
      // 滚动到可视区域
      this.scrollToNodes(nodes);
    }
    return nodes;
  }

  /** 尝试读取剪贴板 */
  private async tryReadClipboard(): Promise<WorkflowClipboardData | undefined> {
    try {
      // 需要用户授予网页剪贴板读取权限, 如果用户没有授予权限, 代码可能会抛出异常 NotAllowedError
      const text: string = (await navigator.clipboard.readText()) || '';
      const clipboardData: WorkflowClipboardData = JSON.parse(text);
      return clipboardData;
    } catch (e) {
      // 这里本身剪贴板里的数据就不固定，所以没必要报错
      return;
    }
  }

  private isValidData(data?: WorkflowClipboardData): boolean {
    if (data?.type !== WorkflowClipboardDataID) {
      Toast.error({
        content: 'Invalid clipboard data',
      });
      return false;
    }
    // 跨域名表示不同环境，上架插件不同，不能复制
    if (data.source.host !== window.location.host) {
      Toast.error({
        content: 'Cannot paste nodes from different host',
      });
      return false;
    }
    return true;
  }

  /** 应用剪切板数据 */
  private apply(data: WorkflowClipboardData): WorkflowNodeEntity[] {
    const { json: rawJSON } = data;
    const json = generateUniqueWorkflow({
      json: rawJSON,
      isUniqueId: (id: string) => !this.entityManager.getEntityById(id),
    });

    const offset = this.calcPasteOffset(data.bounds);
    const parent = this.getSelectedContainer();
    this.applyOffset({ json, offset, parent });
    const { nodes } = this.document.renderJSON(json, {
      parent,
    });
    this.selectNodes(nodes);
    return nodes;
  }

  /** 计算粘贴偏移 */
  private calcPasteOffset(boundsData: WorkflowClipboardRect): IPoint {
    const { x, y, width, height } = boundsData;
    const rect = new Rectangle(x, y, width, height);
    const { center } = rect;
    const mousePos = this.hoverService.hoveredPos;
    return {
      x: mousePos.x - center.x,
      y: mousePos.y - center.y,
    };
  }

  private applyOffset(params: {
    json: WorkflowJSON;
    offset: IPoint;
    parent?: WorkflowNodeEntity;
  }): void {
    const { json, offset, parent } = params;
    json.nodes.forEach((nodeJSON) => {
      if (!nodeJSON.meta?.position) {
        return;
      }
      let position = {
        x: nodeJSON.meta.position.x + offset.x,
        y: nodeJSON.meta.position.y + offset.y,
      };
      if (parent) {
        position = this.dragService.adjustSubNodePosition(
          nodeJSON.type as string,
          parent,
          position
        );
      }
      nodeJSON.meta.position = position;
    });
  }

  /** 获取鼠标选中的容器 */
  private getSelectedContainer(): WorkflowNodeEntity | undefined {
    const { activatedNode } = this.selectService;
    return activatedNode?.getNodeMeta<WorkflowNodeMeta>().isContainer ? activatedNode : undefined;
  }

  /** 选中节点 */
  private selectNodes(nodes: WorkflowNodeEntity[]): void {
    this.selectService.selection = nodes;
  }

  /** 滚动到节点 */
  private async scrollToNodes(nodes: WorkflowNodeEntity[]): Promise<void> {
    const nodeBounds = nodes.map((node) => node.getData(FlowNodeTransformData).bounds);
    await this.document.playgroundConfig.scrollToView({
      bounds: Rectangle.enlarge(nodeBounds),
    });
  }

  /** 等待下一帧 */
  private async nextTick(): Promise<void> {
    const frameTime = 16; // 16ms 为一个渲染帧
    await delay(frameTime);
    await new Promise((resolve) => requestAnimationFrame(resolve));
  }
}
