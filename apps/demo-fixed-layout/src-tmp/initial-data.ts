/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import type { FlowDocumentJSON } from '@flowgram.ai/fixed-layout-editor';

export const initialData: FlowDocumentJSON = {
  nodes: [
    {
      id: 'start_0',
      type: 'start',
      data: {
        title: '开始',
        content: '天气穿衣建议工作流开始',
      },
      blocks: [],
    },
    {
      id: 'validate_input_0',
      type: 'custom',
      data: {
        title: '输入处理节点',
        content: '验证并清理城市名称输入 - validate_city_input()',
      },
      blocks: [],
    },
    {
      id: 'condition_0',
      type: 'condition',
      data: {
        title: '错误检查',
        content: '检查输入验证是否有错误',
      },
      blocks: [
        {
          id: 'fetch_weather_0',
          type: 'block',
          data: {
            title: '天气数据获取',
            content: '调用wttr.in API获取天气信息 - fetch_weather_data()',
          },
          blocks: [],
        },
        {
          id: 'format_error_0',
          type: 'block',
          data: {
            title: '格式化错误',
            content: '直接跳转到输出格式化',
          },
          blocks: [],
        },
      ],
    },
    {
      id: 'condition_1',
      type: 'condition',
      data: {
        title: '天气数据检查',
        content: '检查天气数据获取是否成功',
      },
      blocks: [
        {
          id: 'generate_suggestion_0',
          type: 'block',
          data: {
            title: '穿衣建议生成',
            content: '基于天气数据生成穿衣建议 - generate_clothing_suggestion()',
          },
          blocks: [],
        },
        {
          id: 'format_error_1',
          type: 'block',
          data: {
            title: '格式化错误',
            content: '跳转到输出格式化',
          },
          blocks: [],
        },
      ],
    },
    {
      id: 'format_response_0',
      type: 'custom',
      data: {
        title: '输出整理节点',
        content: '格式化最终回答 - format_final_response()',
      },
      blocks: [],
    },
    {
      id: 'end_0',
      type: 'end',
      data: {
        title: '结束',
        content: '返回格式化的穿衣建议',
      },
      blocks: [],
    },
  ],
};
