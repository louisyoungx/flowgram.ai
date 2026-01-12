/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { z } from 'zod';
import { injectable, FlowNodeFormData, FormModelV2 } from '@flowgram.ai/free-layout-editor';

import { WorkflowNodeType } from '@/nodes';

import type { AgentToolDefinition, ToolCallResult } from './type';
import { BaseNodeTool } from './base-tool';
import { createNodeRender } from '../renders';

const FlowTemplateValueSchema = z.object({
  type: z.literal('template'),
  content: z.string().describe('可使用 {{nodeID.varKey}} 语法引用变量'),
});

const FlowConstantRefValueSchema = z.union([
  z.object({
    type: z.literal('constant'),
    content: z.any(),
  }),
  z.object({
    type: z.literal('ref'),
    content: z.array(z.string()),
  }),
]);

const APIConfigSchema = z.object({
  method: z.enum(['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS']),
  url: FlowTemplateValueSchema,
});

const BodyConfigSchema = z.object({
  bodyType: z.enum(['none', 'raw-text', 'json', 'form-data', 'x-www-form-urlencoded']),
  json: FlowTemplateValueSchema.optional(),
  rawText: FlowTemplateValueSchema.optional(),
});

const TimeoutConfigSchema = z.object({
  timeout: z.number().describe('超时时间（毫秒）'),
  retryTimes: z.number().describe('重试次数'),
});

const HTTPNodeParamsSchema = z.discriminatedUnion('operation', [
  z.object({
    operation: z.literal('create'),
    id: z.string().describe('节点 ID，英文、数字、下划线组成'),
    title: z.string().describe('节点标题，根据用户可理解的语言生成'),
    description: z.string().optional().describe('节点描述，根据用户可理解的语言生成'),
    api: APIConfigSchema.describe('API 配置（method 和 url）'),
    body: BodyConfigSchema.optional().describe('请求体配置'),
    headersValues: z.record(FlowConstantRefValueSchema).optional().describe('请求头值映射'),
    paramsValues: z.record(FlowConstantRefValueSchema).optional().describe('URL 参数值映射'),
    timeout: TimeoutConfigSchema.optional().describe('超时和重试配置'),
    parentNodeID: z.string().optional().describe('可选，指定父 Loop 节点 ID，将节点创建在 Loop 内'),
  }),
  z.object({
    operation: z.literal('update'),
    id: z.string().describe('节点 ID，英文、数字、下划线组成'),
    title: z.string().optional().describe('节点标题，根据用户可理解的语言生成'),
    description: z.string().optional().describe('节点描述，根据用户可理解的语言生成'),
    api: APIConfigSchema.optional().describe('API 配置（method 和 url）'),
    body: BodyConfigSchema.optional().describe('请求体配置'),
    headersValues: z.record(FlowConstantRefValueSchema).optional().describe('请求头值映射'),
    paramsValues: z.record(FlowConstantRefValueSchema).optional().describe('URL 参数值映射'),
    timeout: TimeoutConfigSchema.optional().describe('超时和重试配置'),
  }),
]);

type HTTPNodeParams = z.infer<typeof HTTPNodeParamsSchema>;

interface HTTPNodeResult {
  nodeID: string;
}

@injectable()
export class HTTPNodeTool extends BaseNodeTool<HTTPNodeParams, HTTPNodeResult> {
  public readonly definition: AgentToolDefinition<HTTPNodeParams, HTTPNodeResult> = {
    name: 'HTTPNode',
    description: `在工作流中创建一个 HTTP 节点，或者修改一个 HTTP 节点的参数

## 创建节点参数类型

全量更新，所有 key 都为必填

\`\`\`typescript
interface CreateHTTPNodeParams {
  operation: 'create'; // 固定为 create
  id: string; // 节点 ID，英文、数字、下划线组成
  title: string; // 节点标题，根据用户可理解的语言生成
  description?: string; // 节点描述，根据用户可理解的语言生成
  api: APIConfig; // API 配置（method 和 url）
  body?: BodyConfig; // 请求体配置
  headersValues?: ValuesItem; // 请求头值映射
  paramsValues?: ValuesItem; // URL 参数值映射
  timeout?: TimeoutConfig; // 超时和重试配置
  parentNodeID?: string; // 可选，指定父 Loop 节点 ID，将节点创建在 Loop 内
}
\`\`\`

## 修改节点参数类型

增量更新，可选部分 key 进行更新

\`\`\`typescript
interface UpdateHTTPNodeParams {
  operation: 'update'; // 固定为 update
  id: string; // 节点 ID，英文、数字、下划线组成
  title?: string; // 节点标题，根据用户可理解的语言生成
  description?: string; // 节点描述，根据用户可理解的语言生成
  api?: APIConfig; // API 配置（method 和 url）
  body?: BodyConfig; // 请求体配置
  headersValues?: ValuesItem; // 请求头值映射
  paramsValues?: ValuesItem; // URL 参数值映射
  timeout?: TimeoutConfig; // 超时和重试配置
}
\`\`\`

## api 字段说明

api 字段包含 HTTP 方法和 URL

\`\`\`typescript
interface APIConfig {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS';
  url: IFlowTemplateValue; // URL 支持模板语法
}

interface IFlowTemplateValue {
  type: 'template';
  content: string; // 可使用 {{nodeID.varKey}} 语法引用变量
}
\`\`\`

URL 模板示例：\`https://api.example.com/{{start.endpoint}}\`

## body 字段说明

body 字段配置请求体

\`\`\`typescript
interface BodyConfig {
  bodyType: 'none' | 'raw-text' | 'json' | 'form-data' | 'x-www-form-urlencoded';
  json?: IFlowTemplateValue; // bodyType 为 json 时使用
  rawText?: IFlowTemplateValue; // bodyType 为 raw-text 时使用
}
\`\`\`

## headersValues 字段说明

headersValues 设置请求头的值

\`\`\`typescript
{
  "Authorization": {
    "type": "constant",
    "content": "Bearer token123"
  },
  "Content-Type": {
    "type": "constant",
    "content": "application/json"
  }
}
\`\`\`

## paramsValues 字段说明

paramsValues 设置参数的值

\`\`\`typescript
{
  "page": {
    "type": "constant",
    "content": "1"
  },
  "limit": {
    "type": "ref",
    "content": ["start", "page_size"]
  }
}
\`\`\`

## timeout 字段说明

timeout 字段配置超时时间和重试次数

\`\`\`typescript
interface TimeoutConfig {
  timeout: number; // 超时时间（毫秒）
  retryTimes: number; // 重试次数
}
\`\`\``,
    parameters: HTTPNodeParamsSchema,
    render: createNodeRender(WorkflowNodeType.HTTP),
  };

  public async execute(params: HTTPNodeParams): Promise<ToolCallResult<HTTPNodeResult>> {
    if (params.operation === 'create') {
      if (this.document.getNode(params.id)) {
        return {
          success: false,
          error: `节点 ID ${params.id} 已存在，请重新生成一个唯一的节点 ID。`,
        };
      }
      const nodeID = await this.createHTTPNode(params);
      return {
        success: true,
        data: { nodeID },
        message: `成功创建 HTTP 节点，节点 ID: ${nodeID}`,
      };
    }
    if (params.operation === 'update') {
      if (!this.document.getNode(params.id)) {
        return {
          success: false,
          error: `节点 ID ${params.id} 不存在，无法进行修改。`,
        };
      }
      const nodeID = await this.updateHTTPNode(params);
      return {
        success: true,
        data: { nodeID },
        message: `成功修改 HTTP 节点，节点 ID: ${nodeID}`,
      };
    }
    return {
      success: false,
      error: `无效的操作类型，仅支持 create 和 update。`,
    };
  }

  private async createHTTPNode(
    params: Extract<HTTPNodeParams, { operation: 'create' }>
  ): Promise<string> {
    const nodeConfig = {
      id: params.id,
      type: WorkflowNodeType.HTTP,
      data: {
        title: params.title,
        description: params.description || 'Call the HTTP API',
        api: params.api,
        body: params.body || {
          bodyType: 'none',
          json: { type: 'template', content: '{}' },
          rawText: { type: 'template', content: '' },
        },
        headersValues: params.headersValues || {},
        paramsValues: params.paramsValues || {},
        timeout: params.timeout || { timeout: 10000, retryTimes: 1 },
        outputs: {
          type: 'object',
          properties: {
            body: { type: 'string' },
            headers: { type: 'object' },
            statusCode: { type: 'integer' },
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

  private async updateHTTPNode(
    params: Extract<HTTPNodeParams, { operation: 'update' }>
  ): Promise<string> {
    const node = this.document.getNode(params.id)!;

    const formModel = node?.getData(FlowNodeFormData).getFormModel<FormModelV2>();

    if (params.title !== undefined) {
      formModel.setValueIn('title', params.title);
    }

    if (params.description !== undefined) {
      formModel.setValueIn('description', params.description);
    }

    if (params.api !== undefined) {
      formModel.setValueIn('api', params.api);
    }

    if (params.body !== undefined) {
      formModel.setValueIn('body', params.body);
    }

    if (params.headersValues !== undefined) {
      formModel.setValueIn('headersValues', params.headersValues);
    }

    if (params.paramsValues !== undefined) {
      formModel.setValueIn('paramsValues', params.paramsValues);
    }

    if (params.timeout !== undefined) {
      formModel.setValueIn('timeout', params.timeout);
    }

    await this.handleAutoLayout();

    this.focusNode(node);

    return node.id;
  }
}
