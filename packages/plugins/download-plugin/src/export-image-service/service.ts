/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { inject, injectable } from 'inversify';
import { FlowDocument } from '@flowgram.ai/document';

import { getWorkflowRect } from './utils';
import { type IFlowExportImageService, type ExportImageOptions } from './type';
import {
  IN_SAFARI,
  IN_FIREFOX,
  EXPORT_IMAGE_WATERMARK_SVG,
  EXPORT_IMAGE_STYLE_PROPERTIES,
} from './constant';
import { FlowDownloadFormat } from '../constant';

const PADDING_X = 58;
const PADDING_Y = 138;

@injectable()
export class FlowExportImageService implements IFlowExportImageService {
  private modernScreenshot: any;

  @inject(FlowDocument)
  private workflowDocument: FlowDocument;

  public async export(options: ExportImageOptions): Promise<string | undefined> {
    try {
      const imgUrl = await this.doExport(options);
      return imgUrl;
    } catch (e) {
      console.error('Export image failed:', e);
      return;
    }
  }

  private async loadModernScreenshot() {
    if (this.modernScreenshot) {
      return this.modernScreenshot;
    }

    const modernScreenshot = await import('modern-screenshot');
    this.modernScreenshot = modernScreenshot;
  }

  private async doExport(exportOptions: ExportImageOptions): Promise<string | undefined> {
    const { format } = exportOptions;
    // const el = this.stackingContextManager.node as HTMLElement;
    const el = window.document.querySelector('.gedit-flow-render-layer') as HTMLElement;

    if (!el) {
      return;
    }

    const { width, height, x, y } = getWorkflowRect(this.workflowDocument);

    await this.loadModernScreenshot();
    const { domToPng, domToForeignObjectSvg, domToJpeg } = this.modernScreenshot;
    let imgUrl: string;
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
      case FlowDownloadFormat.PNG:
        imgUrl = await domToPng(el, options);
        break;
      case FlowDownloadFormat.SVG: {
        const svg = await domToForeignObjectSvg(el, options);
        imgUrl = await this.svgToDataURL(svg);
        break;
      }
      case FlowDownloadFormat.JPEG:
        imgUrl = await domToJpeg(el, options);
        break;
      default:
        imgUrl = await domToPng(el, options);
    }
    return imgUrl;
  }

  private async svgToDataURL(svg: SVGElement): Promise<string> {
    return Promise.resolve()
      .then(() => new XMLSerializer().serializeToString(svg))
      .then(encodeURIComponent)
      .then((html) => `data:image/svg+xml;charset=utf-8,${html}`);
  }

  // 处理克隆节点
  private handleClone(
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
  private handlePosition(cloned: HTMLElement, x: number, y: number) {
    cloned.style.transform = `translate(${-x + PADDING_X}px, ${-y + PADDING_Y}px)`;
  }

  // 处理画布
  private handleCanvas(cloned: HTMLElement, width: number, height: number) {
    cloned.style.width = `${width + PADDING_X * 2}px`;
    cloned.style.height = `${height + PADDING_Y * 2}px`;
    cloned.style.transform = 'none';
    cloned.style.backgroundColor = '#ECECEE';
    this.handleWaterMark(cloned);
  }

  // 添加水印节点
  private handleWaterMark(element: HTMLElement) {
    const watermarkNode = document.createElement('div');
    // 水印svg
    watermarkNode.innerHTML = EXPORT_IMAGE_WATERMARK_SVG;
    watermarkNode.style.position = 'absolute';
    watermarkNode.style.bottom = '16px';
    watermarkNode.style.right = '16px';
    watermarkNode.style.zIndex = '999999';
    element.appendChild(watermarkNode);
  }
}
