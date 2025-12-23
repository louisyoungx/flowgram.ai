/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { WorkflowInputs } from '@flowgram.ai/runtime-interface';
import { IJsonSchema } from '@flowgram.ai/form-materials';

/**
 * WorkflowInfo 工具参数
 */
export interface WorkflowInfoParams {
  operation:
    | 'get_workflow_structure'
    | 'get_workflow_schema'
    | 'get_workflow_input_definition'
    | 'workflow_validate'
    | 'workflow_testrun';
  testrun_inputs?: WorkflowInputs;
}

export const parameters: IJsonSchema = {
  type: 'object',
  properties: {
    operation: {
      type: 'string',
      description: '要执行的操作类型',
      enum: [
        'get_workflow_structure',
        'get_workflow_schema',
        'get_workflow_input_definition',
        'workflow_validate',
        'workflow_testrun',
      ],
    },
    testrun_inputs: {
      type: 'object',
      description:
        '工作流试运行的输入参数, 仅在 operation 为 workflow_testrun 时必填。如果工作流无需入参，则传入空对象 {} 即可。',
    },
  },
  required: ['operation'],
};
