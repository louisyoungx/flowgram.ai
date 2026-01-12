/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { z } from 'zod';
import { IFlowConstantRefValue } from '@flowgram.ai/runtime-interface';
import { injectable, FlowNodeFormData, FormModelV2 } from '@flowgram.ai/free-layout-editor';

import { WorkflowNodeType } from '@/nodes';

import type { AgentToolDefinition, ToolCallResult } from './type';
import { BaseNodeTool } from './base-tool';
import { createNodeRender } from '../renders';

type RefPath = string[];

const RefPathSchema = z.array(z.string());
const StringOrRefSchema = z.union([z.string(), RefPathSchema]);
const NumberOrRefSchema = z.union([z.number(), RefPathSchema]);

const LLMNodeParamsSchema = z.discriminatedUnion('operation', [
  z.object({
    operation: z.literal('create'),
    id: z.string().describe('节点 ID，英文、数字、下划线组成'),
    title: z.string().describe('节点标题，根据用户可理解的语言生成'),
    description: z.string().describe('节点描述，根据用户可理解的语言生成'),
    modelName: StringOrRefSchema.describe('使用的模型名称'),
    apiKey: StringOrRefSchema.describe('模型的 API Key'),
    apiHost: StringOrRefSchema.describe('提供模型服务的 API Host'),
    temperature: NumberOrRefSchema.describe('模型温度'),
    systemPrompt: z.string().describe('系统提示词'),
    prompt: z.string().describe('用户提示词'),
    parentNodeID: z.string().optional().describe('可选，指定父 Loop 节点 ID，将节点创建在 Loop 内'),
  }),
  z.object({
    operation: z.literal('update'),
    id: z.string().describe('节点 ID，英文、数字、下划线组成'),
    title: z.string().optional().describe('节点标题，根据用户可理解的语言生成'),
    description: z.string().optional().describe('节点描述，根据用户可理解的语言生成'),
    modelName: StringOrRefSchema.optional().describe('使用的模型名称'),
    apiKey: StringOrRefSchema.optional().describe('模型的 API Key'),
    apiHost: StringOrRefSchema.optional().describe('提供模型服务的 API Host'),
    temperature: NumberOrRefSchema.optional().describe('模型温度'),
    systemPrompt: z.string().optional().describe('系统提示词'),
    prompt: z.string().optional().describe('用户提示词'),
  }),
]);

type LLMNodeParams = z.infer<typeof LLMNodeParamsSchema>;

interface LLMNodeResult {
  nodeID: string;
}

@injectable()
export class LLMNodeTool extends BaseNodeTool<LLMNodeParams, LLMNodeResult> {
  public readonly definition: AgentToolDefinition<LLMNodeParams, LLMNodeResult> = {
    name: 'LLMNode',
    description: `在工作流中创建一个 LLM 节点，或者修改一个 LLM 节点的参数

## 创建节点参数类型

全量更新，所有 key 都为必填

\`\`\`typescript
interface CreateLLMNodeParams {
  operation: 'create'; // 固定为 create
  id: string; // 节点 ID，英文、数字、下划线组成
  title: string; // 节点标题，根据用户可理解的语言生成
  description: string; // 节点描述，根据用户可理解的语言生成
  modelName: string | RefPath; // 使用的模型名称
  apiKey: string | RefPath; // 模型的 API Key
  apiHost: string | RefPath; // 提供模型服务的 API Host
  temperature: number | RefPath; // 模型温度
  systemPrompt: string; // 系统提示词
  prompt: string; // 用户提示词
  parentNodeID?: string; // 可选，指定父 Loop 节点 ID，将节点创建在 Loop 内
}
\`\`\`

## 修改节点参数类型

增量更新，可选部分 key 进行更新

\`\`\`typescript
interface UpdateLLMNodeParams {
  operation: 'update'; // 固定为 update
  id: string; // 节点 ID，英文、数字、下划线组成
  title?: string; // 节点标题，根据用户可理解的语言生成
  description?: string; // 节点描述，根据用户可理解的语言生成
  modelName?: string | RefPath; // 使用的模型名称
  apiKey?: string | RefPath; // 模型的 API Key
  apiHost?: string | RefPath; // 提供模型服务的 API Host
  temperature?: number | RefPath; // 模型温度
  systemPrompt?: string; // 系统提示词
  prompt?: string; // 用户提示词
}
\`\`\`

## RefPath 说明

RefPath 为引用其他前序节点输出变量的结构，例如 ['start_0', 'llm_config', 'model_name'] 可以引用开始节点的 llm_config 对象下的 model_name 字段

\`\`\`typescript
type RefPath = string[]; // [节点ID, key1, key2, ...]
\`\`\`

2. systemPrompt 和 prompt 可通过双花括号语法引用前序节点输出变量，遵循 {{NodeID.VarKey1.xxx}} 规则，例如 "生成一个关于 {{start_0.user_input.theme}} 的故事"`,
    parameters: LLMNodeParamsSchema,
    render: createNodeRender(WorkflowNodeType.LLM),
  };

  public async execute(params: LLMNodeParams): Promise<ToolCallResult<LLMNodeResult>> {
    if (params.operation === 'create') {
      if (this.document.getNode(params.id)) {
        return {
          success: false,
          error: `节点 ID ${params.id} 已存在，请重新生成一个唯一的节点 ID。`,
        };
      }
      const nodeID = await this.createLLMNode(params);
      return {
        success: true,
        data: { nodeID },
        message: `成功创建 LLM 节点，节点 ID: ${nodeID}`,
      };
    }
    if (params.operation === 'update') {
      if (!this.document.getNode(params.id)) {
        return {
          success: false,
          error: `节点 ID ${params.id} 不存在，无法进行修改。`,
        };
      }
      const nodeID = await this.updateLLMNode(params);
      return {
        success: true,
        data: { nodeID },
        message: `成功修改 LLM 节点，节点 ID: ${nodeID}`,
      };
    }
    return {
      success: false,
      error: `无效的操作类型，仅支持 create 和 update。`,
    };
  }

  private convertToValueDefine(value: string | number | RefPath): IFlowConstantRefValue {
    if (Array.isArray(value)) {
      return {
        type: 'ref',
        content: value,
      };
    }
    return {
      type: 'constant',
      content: value,
    };
  }

  private async createLLMNode(
    params: Extract<LLMNodeParams, { operation: 'create' }>
  ): Promise<string> {
    const nodeConfig = {
      id: params.id,
      type: WorkflowNodeType.LLM,
      data: {
        title: params.title,
        description: params.description,
        inputsValues: {
          modelName: this.convertToValueDefine(params.modelName),
          apiKey: this.convertToValueDefine(params.apiKey),
          apiHost: this.convertToValueDefine(params.apiHost),
          temperature: this.convertToValueDefine(params.temperature),
          systemPrompt: {
            type: 'template',
            content: params.systemPrompt,
          },
          prompt: {
            type: 'template',
            content: params.prompt,
          },
        },
        inputs: {
          type: 'object',
          required: ['modelName', 'apiKey', 'apiHost', 'temperature', 'prompt'],
          properties: {
            modelName: { type: 'string' },
            apiKey: { type: 'string' },
            apiHost: { type: 'string' },
            temperature: { type: 'number' },
            systemPrompt: { type: 'string', extra: { formComponent: 'prompt-editor' } },
            prompt: { type: 'string', extra: { formComponent: 'prompt-editor' } },
          },
        },
        outputs: {
          type: 'object',
          properties: {
            result: { type: 'string' },
          },
        },
      },
    };

    const node = params.parentNodeID
      ? this.document.createWorkflowNode(nodeConfig, false, params.parentNodeID)
      : this.document.createWorkflowNode(nodeConfig);

    await this.handleAutoLayout();

    this.focusNode(node);

    return node.id;
  }

  private async updateLLMNode(
    params: Extract<LLMNodeParams, { operation: 'update' }>
  ): Promise<string> {
    const node = this.document.getNode(params.id)!;

    const formModel = node?.getData(FlowNodeFormData).getFormModel<FormModelV2>();

    Object.entries(params).forEach(([key, value]) => {
      if (key === 'operation' || key === 'id' || value === undefined) {
        return;
      }
      if (key === 'title' || key === 'description') {
        formModel.setValueIn(key, value as string);
        return;
      }
      if (key === 'systemPrompt' || key === 'prompt') {
        formModel.setValueIn(`inputsValues.${key}`, {
          type: 'template',
          content: value as string,
        });
      } else if (
        key === 'modelName' ||
        key === 'apiKey' ||
        key === 'apiHost' ||
        key === 'temperature'
      ) {
        formModel.setValueIn(
          `inputsValues.${key}`,
          this.convertToValueDefine(value as string | number | RefPath)
        );
      }
    });

    await this.handleAutoLayout();

    this.focusNode(node);

    return node.id;
  }
}
