import {
  EntityManager,
  FlowNodeTransformData,
  FreeLayoutPluginContext,
  IPoint,
  Rectangle,
  ShortcutsHandler,
  WorkflowDocument,
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

  constructor(context: FreeLayoutPluginContext) {
    this.document = context.get(WorkflowDocument);
    this.selectService = context.get(WorkflowSelectService);
    this.entityManager = context.get(EntityManager);
    this.hoverService = context.get(WorkflowHoverService);
  }

  public async execute(): Promise<WorkflowNodeEntity[] | undefined> {
    const data = await this.tryReadClipboard();
    if (!data) {
      return;
    }
    if (!this.isValidData(data)) {
      return;
    }
    const nodes = await this.apply(data);
    if (nodes.length > 0) {
      Toast.success({
        content: 'Copy successfully',
        showClose: false,
      });
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
  private async apply(data: WorkflowClipboardData): Promise<WorkflowNodeEntity[]> {
    const { json: rawJSON } = data;
    const json = generateUniqueWorkflow({
      json: rawJSON,
      isUniqueId: (id: string) => !this.entityManager.getEntityById(id),
    });

    const offset = this.calcPasteOffset(data.bounds);
    this.applyOffset(json, offset);
    const parent = this.getSelectedContainer();
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

  private applyOffset(json: WorkflowJSON, offset: IPoint): void {
    json.nodes.forEach((nodeJSON) => {
      if (!nodeJSON.meta?.position) {
        return;
      }
      nodeJSON.meta.position.x += offset.x;
      nodeJSON.meta.position.y += offset.y;
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
}
