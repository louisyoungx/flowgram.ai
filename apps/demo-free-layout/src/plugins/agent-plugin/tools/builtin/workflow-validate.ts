/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { injectable, inject } from '@flowgram.ai/free-layout-editor';

import { ValidateService } from '@/services';

import type { ToolCallResult } from '../tool-result';
import { BaseNodeTool } from '../base-tool';
import type { Tool } from '../../types';

@injectable()
export class WorkflowValidateTool extends BaseNodeTool<Record<string, never>, any[]> {
  @inject(ValidateService)
  private validateService: ValidateService;

  public readonly tool: Tool = {
    type: 'function',
    function: {
      name: 'WorkflowValidate',
      description: '验证工作流中所有节点的配置是否正确',
      parameters: {
        type: 'object',
        properties: {},
      },
    },
  };

  public async execute(): Promise<ToolCallResult<any[]>> {
    await this.fitView();
    const validationResults = await this.workflowValidate();
    return {
      success: true,
      data: validationResults,
      message: validationResults.length
        ? `工作流校验共发现 ${validationResults.length} 个问题`
        : `完成工作流校验，未发现问题`,
    };
  }

  private async workflowValidate() {
    return await this.validateService.validateNodes();
  }
}
