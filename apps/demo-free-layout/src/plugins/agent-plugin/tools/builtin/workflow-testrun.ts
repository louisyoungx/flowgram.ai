/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { WorkflowInputs } from '@flowgram.ai/runtime-interface';
import { injectable, inject } from '@flowgram.ai/free-layout-editor';
import { IJsonSchema } from '@flowgram.ai/form-materials';

import { TaskRunResult, WorkflowRuntimeService } from '@/plugins/runtime-plugin/runtime-service';

import { BaseTool } from '../base-tool';
import type { Tool } from '../../types';

interface WorkflowTestrunParams {
  testrun_inputs: WorkflowInputs;
}

@injectable()
export class WorkflowTestrunTool extends BaseTool<WorkflowTestrunParams, string> {
  @inject(WorkflowRuntimeService)
  private runtimeService: WorkflowRuntimeService;

  public readonly tool: Tool = {
    type: 'function',
    function: {
      name: 'WorkflowTestrun',
      description:
        '工作流试运行\nIMPORTANT: 若不清楚入参格式，请先调用 GetWorkflowInputDefinition 工具获取工作流输入定义。',
      parameters: {
        type: 'object',
        properties: {
          testrun_inputs: {
            type: 'object',
            description: '工作流试运行的输入参数。如果工作流无需入参，则传入空对象 {} 即可。',
          },
        },
        required: ['testrun_inputs'],
      } as IJsonSchema,
    },
  };

  public async execute(params: WorkflowTestrunParams): Promise<string> {
    if (!params.testrun_inputs) {
      return JSON.stringify({
        success: false,
        error:
          '参数 testrun_inputs 在执行 workflow_testrun 操作时为必填项,如果工作流无需入参,则传入空对象 {} 即可。',
      });
    }

    const result = await this.workflowTestRun(params.testrun_inputs);
    if (result.errors) {
      return JSON.stringify({
        success: false,
        error: result.errors.join('; '),
      });
    }
    return JSON.stringify({
      success: true,
      data: result.result,
    });
  }

  private async workflowTestRun(inputs: WorkflowInputs): Promise<TaskRunResult> {
    await this.runtimeService.taskRun(inputs);
    return new Promise((resolve) => {
      const disposable = this.runtimeService.onResultChanged((result) => {
        disposable.dispose();
        resolve(result);
      });
    });
  }
}
