/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { type Event } from '@flowgram.ai/free-layout-editor';
export const ExportImageService = Symbol('ExportImageService');

/**
 * 导出图片服务
 */
export interface ExportImageService {
  /**
   * 导出
   */
  export: (options: ExportImageOptions) => Promise<void>;

  /**
   * 是否正在导出
   */
  exporting: boolean;

  /**
   * 导出状态改变事件
   */
  onExportingChange: Event<boolean>;
}

/**
 * 导出图片格式
 */
export enum ExportImageFormat {
  Png = 'png',
  Jpeg = 'jpeg',
  Svg = 'svg',
}

/**
 * 导出图片选项
 */
export interface ExportImageOptions {
  /**
   * 导出的格式
   */
  format: ExportImageFormat;
  /**
   * 导出成功回调
   */
  onSuccess?: () => void;
  /**
   * 导出失败回调
   */
  onError?: () => void;
}
