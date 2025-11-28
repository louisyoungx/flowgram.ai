/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { nanoid } from 'nanoid';
import {
  inject,
  injectable,
  Emitter,
  EntityManager,
  SelectionService,
  WorkflowDocument,
} from '@flowgram.ai/free-layout-editor';

import { getWorkflowRect } from './utils';
import { ExportImageFormat, type ExportImageService, type ExportImageOptions } from './type';
import {
  IN_SAFARI,
  IN_FIREFOX,
  EXPORT_IMAGE_WATERMARK_SVG,
  EXPORT_IMAGE_STYLE_PROPERTIES,
} from './constant';

const PADDING_X = 58;
const PADDING_Y = 138;

@injectable()
export class WorkflowExportImageService implements ExportImageService {
  protected modernScreenshot: any;

  @inject(EntityManager)
  protected entityManager: EntityManager;

  @inject(WorkflowDocument)
  protected workflowDocument: WorkflowDocument;

  @inject(SelectionService)
  protected selectionService: SelectionService;

  // @inject(StackingContextManager)
  // protected stackingContextManager: StackingContextManager;

  protected isExporting = false;

  protected onExportingChangeEmitter = new Emitter<boolean>();

  onExportingChange = this.onExportingChangeEmitter.event;

  get exporting() {
    return this.isExporting;
  }

  protected set exporting(value: boolean) {
    this.isExporting = value;
    this.onExportingChangeEmitter.fire(value);
  }

  async export(options: ExportImageOptions) {
    if (this.exporting) {
      return;
    }

    try {
      this.exporting = true;
      await this.doExport(options);
      options?.onSuccess?.();
    } catch (e) {
      options?.onError?.();
    } finally {
      this.exporting = false;
    }
  }

  protected getDownloadFilename() {
    return 'workflow' + nanoid(5);
  }

  protected async loadModernScreenshot() {
    if (this.modernScreenshot) {
      return this.modernScreenshot;
    }

    const modernScreenshot = await import('modern-screenshot');
    this.modernScreenshot = modernScreenshot;
  }

  protected async doExport(exportOptions: ExportImageOptions) {
    const { format } = exportOptions;
    // const el = this.stackingContextManager.node as HTMLElement;
    const el = window.document.querySelector('.gedit-flow-render-layer') as HTMLElement;

    if (!el) {
      return;
    }

    const { width, height, x, y } = getWorkflowRect(this.workflowDocument);

    await this.loadModernScreenshot();
    const { domToPng, domToForeignObjectSvg, domToJpeg } = this.modernScreenshot;
    let dataUrl;
    const options = {
      scale: 2,
      includeStyleProperties: IN_SAFARI || IN_FIREFOX ? EXPORT_IMAGE_STYLE_PROPERTIES : undefined,
      width: width + PADDING_X * 2,
      height: height + PADDING_Y * 2,
      onCloneEachNode: (cloned: HTMLElement) => {
        this.handleClone(cloned, { width, height, x, y });
      },
    };
    switch (format) {
      case ExportImageFormat.Png:
        dataUrl = await domToPng(el, options);
        break;
      case ExportImageFormat.Svg: {
        const svg = await domToForeignObjectSvg(el, options);
        dataUrl = await this.svgToDataURL(svg);
        break;
      }
      case ExportImageFormat.Jpeg:
        dataUrl = await domToJpeg(el, options);
        break;
      default:
        dataUrl = await domToPng(el, options);
    }
    this.download(dataUrl, `${this.getDownloadFilename()}.${format}`);
  }

  async svgToDataURL(svg: SVGElement): Promise<string> {
    return Promise.resolve()
      .then(() => new XMLSerializer().serializeToString(svg))
      .then(encodeURIComponent)
      .then((html) => `data:image/svg+xml;charset=utf-8,${html}`);
  }

  // 处理克隆节点
  protected handleClone(
    cloned: HTMLElement,
    { width, height, x, y }: { width: number; height: number; x: number; y: number }
  ) {
    if (
      cloned?.classList?.contains('gedit-flow-activity-node') ||
      cloned?.classList?.contains('gedit-flow-activity-line')
    ) {
      this.handlePosition(cloned, x, y);
    }

    if (cloned?.classList?.contains('gedit-flow-render-layer')) {
      this.handleCanvas(cloned, width, height);
    }
  }

  // 处理节点位置
  protected handlePosition(cloned: HTMLElement, x: number, y: number) {
    cloned.style.transform = `translate(${-x + PADDING_X}px, ${-y + PADDING_Y}px)`;
  }

  // 处理画布
  protected handleCanvas(cloned: HTMLElement, width: number, height: number) {
    cloned.style.width = `${width + PADDING_X * 2}px`;
    cloned.style.height = `${height + PADDING_Y * 2}px`;
    cloned.style.transform = 'none';
    cloned.style.backgroundColor = '#ECECEE';
    this.handleWaterMark(cloned);
  }

  // 添加水印节点
  protected handleWaterMark(element: HTMLElement) {
    const watermarkNode = document.createElement('div');
    // 水印svg
    watermarkNode.innerHTML = EXPORT_IMAGE_WATERMARK_SVG;
    watermarkNode.style.position = 'absolute';
    watermarkNode.style.bottom = '16px';
    watermarkNode.style.right = '16px';
    watermarkNode.style.zIndex = '999999';
    element.appendChild(watermarkNode);
  }

  // 生成下载链接并下载图片
  protected download(href: string, filename: string) {
    const link = document.createElement('a');
    link.href = href;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
