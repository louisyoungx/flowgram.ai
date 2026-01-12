/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { z } from 'zod';
import { WorkflowInputs } from '@flowgram.ai/runtime-interface';
import { injectable, inject } from '@flowgram.ai/free-layout-editor';

import { ValidateService } from '@/services';
import { TaskRunResult, WorkflowRuntimeService } from '@/plugins/runtime-plugin/runtime-service';

import type { AgentToolDefinition, ToolCallResult } from './type';
import { BaseNodeTool } from './base-tool';

const WorkflowTestrunParamsSchema = z.object({
  inputs: z
    .record(z.any())
    .describe('工作流试运行的输入参数。如果工作流无需入参，则传入空对象 {} 即可。'),
});

type WorkflowTestrunParams = z.infer<typeof WorkflowTestrunParamsSchema>;

@injectable()
export class WorkflowTestrunTool extends BaseNodeTool<WorkflowTestrunParams, TaskRunResult> {
  @inject(WorkflowRuntimeService)
  private runtimeService: WorkflowRuntimeService;

  @inject(ValidateService)
  private validateService: ValidateService;

  public readonly definition: AgentToolDefinition<WorkflowTestrunParams, TaskRunResult> = {
    name: 'WorkflowTestrun',
    description:
      '执行工作流试运行\nIMPORTANT: 若不清楚入参格式，请先调用 GetWorkflowInputDefinition 工具获取工作流输入定义。',
    parameters: WorkflowTestrunParamsSchema,
  };

  public async execute(params: WorkflowTestrunParams): Promise<ToolCallResult<TaskRunResult>> {
    await this.fitView();
    if (!params.inputs) {
      return {
        success: false,
        error:
          '参数 inputs 在执行 workflow_testrun 操作时为必填项,如果工作流无需入参,则传入空对象 {} 即可。',
      };
    }

    const validationResults = await this.validateService.validateNodes();

    if (validationResults.length) {
      return {
        success: false,
        error: `工作流校验未通过，发现 ${validationResults.length} 个问题，无法进行试运行，请先修复问题后再试。`,
        data: validationResults,
      };
    }

    const result = await this.workflowTestRun(params.inputs as WorkflowInputs);
    if (result.errors) {
      return {
        success: false,
        error: result.errors.join('; '),
        data: { report: result.report },
      };
    }
    return {
      success: true,
      data: result,
      message: '工作流试运行成功',
    };
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
