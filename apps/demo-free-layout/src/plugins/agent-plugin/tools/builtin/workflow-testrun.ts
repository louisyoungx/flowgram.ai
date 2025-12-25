/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { WorkflowInputs } from '@flowgram.ai/runtime-interface';
import { injectable, inject } from '@flowgram.ai/free-layout-editor';
import { IJsonSchema } from '@flowgram.ai/form-materials';

import { ValidateService } from '@/services';
import { TaskRunResult, WorkflowRuntimeService } from '@/plugins/runtime-plugin/runtime-service';

import { BaseTool } from '../base-tool';
import type { Tool } from '../../types';

interface WorkflowTestrunParams {
  testrunInputs: WorkflowInputs;
}

@injectable()
export class WorkflowTestrunTool extends BaseTool<WorkflowTestrunParams, string> {
  @inject(WorkflowRuntimeService)
  private runtimeService: WorkflowRuntimeService;

  @inject(ValidateService)
  private validateService: ValidateService;

  public readonly tool: Tool = {
    type: 'function',
    function: {
      name: 'WorkflowTestrun',
      description:
        '工作流试运行\nIMPORTANT: 若不清楚入参格式，请先调用 GetWorkflowInputDefinition 工具获取工作流输入定义。',
      parameters: {
        type: 'object',
        properties: {
          testrunInputs: {
            type: 'object',
            description: '工作流试运行的输入参数。如果工作流无需入参，则传入空对象 {} 即可。',
          },
        },
        required: ['testrunInputs'],
      } as IJsonSchema,
    },
  };

  public async execute(params: WorkflowTestrunParams): Promise<string> {
    if (!params.testrunInputs) {
      return JSON.stringify({
        success: false,
        error:
          '参数 testrunInputs 在执行 workflow_testrun 操作时为必填项,如果工作流无需入参,则传入空对象 {} 即可。',
      });
    }

    const validationResults = await this.validateService.validateNodes();

    if (validationResults.length) {
      return JSON.stringify({
        success: false,
        error: `工作流校验未通过，发现 ${validationResults.length} 个问题，无法进行试运行，请先修复问题后再试。`,
        data: validationResults,
      });
    }

    const result = await this.workflowTestRun(params.testrunInputs);
    if (result.errors) {
      return JSON.stringify({
        success: false,
        error: result.errors.join('; '),
        report: result.report,
      });
    }
    return JSON.stringify({
      success: true,
      data: result.result,
      report: result.report,
    });
  }

  private async workflowTestRun(inputs: WorkflowInputs): Promise<TaskRunResult> {
    return new Promise((resolve) => {
      const disposable = this.runtimeService.onResultChanged((result) => {
        disposable.dispose();
        resolve(result);
      });
      this.runtimeService.taskRun(inputs);
    });
  }
}
