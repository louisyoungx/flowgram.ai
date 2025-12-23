/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { WorkflowInputs } from '@flowgram.ai/runtime-interface';
import {
  injectable,
  inject,
  WorkflowDocument,
  WorkflowJSON,
  WorkflowNodeJSON,
  FlowNodeBaseType,
} from '@flowgram.ai/free-layout-editor';
import { IJsonSchema } from '@flowgram.ai/form-materials';

import { ValidateService } from '@/services';
import { TaskRunResult, WorkflowRuntimeService } from '@/plugins/runtime-plugin/runtime-service';

import { BaseTool } from '../../base-tool';
import type { Tool } from '../../../types';
import { parameters, WorkflowInfoParams } from './params';
import description from './description.md?raw';

/**
 * WorkflowInfo 工具
 * 用于获取工作流信息
 * 演示如何注入容器中的服务（WorkflowDocument）
 */
@injectable()
export class WorkflowInfoTool extends BaseTool<WorkflowInfoParams, string> {
  @inject(WorkflowDocument)
  private document: WorkflowDocument;

  @inject(ValidateService) validateService: ValidateService;

  @inject(WorkflowRuntimeService) private runtimeService: WorkflowRuntimeService;

  public readonly tool: Tool = {
    type: 'function',
    function: {
      name: 'WorkflowInfo',
      description,
      parameters,
    },
  };

  /**
   * 执行工具
   */
  public async execute(params: WorkflowInfoParams): Promise<string> {
    switch (params.operation) {
      case 'get_workflow_structure': {
        const structure = this.getWorkflowStructure();
        return JSON.stringify({
          success: true,
          data: structure,
          message: `成功获取工作流完整结构`,
        });
      }

      case 'get_workflow_schema': {
        const json = this.getWorkflowSchema();
        return JSON.stringify({
          success: true,
          data: json,
          message: `成功获取工作流完整 Schema`,
        });
      }

      case 'get_workflow_input_definition': {
        const inputDef = this.getWorkflowInputDefinition();
        return JSON.stringify({
          success: true,
          data: inputDef,
          message: `成功获取工作流输入定义`,
        });
      }

      case 'workflow_validate': {
        const validationResults = await this.workflowValidate();
        return JSON.stringify({
          success: true,
          data: validationResults,
          message: validationResults.length
            ? `工作流校验共发现 ${validationResults.length} 个问题`
            : `完成工作流校验，未发现问题`,
        });
      }

      case 'workflow_testrun': {
        if (!params.testrun_inputs) {
          return JSON.stringify({
            success: false,
            error:
              '参数 testrun_inputs 在执行 workflow_testrun 操作时为必填项，如果工作流无需入参，则传入空对象 {} 即可。',
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

      default:
        return JSON.stringify({
          success: false,
          error: '未知的操作类型',
        });
    }
  }

  private getWorkflowStructure() {
    interface NodeInfo {
      id: string;
      type: string;
      name: string;
      description?: string;
      nodes?: NodeInfo[];
    }
    const json = this.document.toJSON();
    const buildStructure = (nodes: WorkflowNodeJSON[]): NodeInfo[] =>
      nodes.map((node) => ({
        id: node.id,
        type: node.type as string,
        name: node.data.title,
        description: node.data.description,
        nodes: node.blocks ? buildStructure(node.blocks) : undefined,
        edges: node.edges,
      }));
    return {
      nodes: buildStructure(json.nodes),
      edges: json.edges,
    };
  }

  private getWorkflowSchema(): WorkflowJSON {
    const json = this.document.toJSON();
    return json;
  }

  private getWorkflowInputDefinition(): IJsonSchema<'object'> {
    const defaultValue: IJsonSchema<'object'> = { type: 'object', properties: {} };
    const startNode =
      this.document.getNode('start_0') ??
      this.document.getAllNodes().find((n) => n.flowNodeType === FlowNodeBaseType.START);
    if (!startNode) {
      return defaultValue;
    }
    const startNodeJSON = this.document.toNodeJSON(startNode);
    return startNodeJSON.data.outputs ?? defaultValue;
  }

  private async workflowValidate() {
    return await this.validateService.validateNodes();
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
