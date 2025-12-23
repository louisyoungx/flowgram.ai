/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { IFlowConstantRefValue } from '@flowgram.ai/runtime-interface';
import {
  injectable,
  inject,
  WorkflowDocument,
  WorkflowAutoLayoutTool,
  Playground,
  WorkflowSelectService,
  delay,
} from '@flowgram.ai/free-layout-editor';
import { IJsonSchema } from '@flowgram.ai/form-materials';

import { WorkflowNodeType } from '@/nodes';

import { BaseTool } from '../base-tool';
import type { Tool } from '../../types';

type ValueRef = [string, string];

interface CreateLLMNodeParams {
  id: string;
  title: string;
  modelName: string | ValueRef;
  apiKey: string | ValueRef;
  apiHost: string | ValueRef;
  temperature: number | ValueRef;
  systemPrompt: string;
  prompt: string;
}

@injectable()
export class CreateLLMNodeTool extends BaseTool<CreateLLMNodeParams, string> {
  @inject(WorkflowDocument)
  private document: WorkflowDocument;

  @inject(WorkflowAutoLayoutTool)
  private autoLayout: WorkflowAutoLayoutTool;

  @inject(Playground)
  private playground: Playground;

  @inject(WorkflowSelectService)
  private selectService: WorkflowSelectService;

  public readonly tool: Tool = {
    type: 'function',
    function: {
      name: 'CreateLLMNode',
      description: `在工作流中创建一个 LLM 节点

## 参数

接受参数类型:
\`\`\`typescript
interface CreateLLMNodeParams {
  id: string; // 节点 ID，英文、数字、下划线组成
  title: string; // 节点标题，根据用户可理解的语言生成
  modelName: string | ValueRef; // 使用的模型名称
  apiKey: string | ValueRef; // 模型的 API Key
  apiHost: string | ValueRef; // 提供模型服务的 API Host
  temperature: number | ValueRef; // 模型温度
  systemPrompt: string; // 系统提示词
  prompt: string; // 用户提示词
}
\`\`\`

额外说明:

1. ValueRef 为引用其他前序节点输出变量的结构，例如 ['start_0', 'user_input'] 可以引用开始节点的 user_input 字段
\`\`\`
type ValueRef = [string, string]; // [节点ID, 输出变量名]
\`\`\`

2. systemPrompt 和 prompt 可通过双花括号语法引用前序节点输出变量，遵循 {{NodeID.VarKey}} 规则，例如 "生成一个关于 {{start_0.user_input}} 的故事"
`,
      parameters: {
        type: 'object',
      } as IJsonSchema,
    },
  };

  public async execute(params: CreateLLMNodeParams): Promise<string> {
    if (this.document.getNode(params.id)) {
      return JSON.stringify({
        success: false,
        error: `节点 ID ${params.id} 已存在，请重新生成一个唯一的节点 ID。`,
      });
    }
    try {
      const nodeID = await this.createLLMNode(params);
      return JSON.stringify({
        success: true,
        data: { nodeID },
        message: `成功创建 LLM 节点，节点 ID: ${nodeID}`,
      });
    } catch (error) {
      return JSON.stringify({
        success: false,
        error: `创建 LLM 节点失败: ${error instanceof Error ? error.message : String(error)}`,
      });
    }
  }

  private convertToValueDefine(value: string | number | ValueRef): IFlowConstantRefValue {
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

  private async createLLMNode(params: CreateLLMNodeParams): Promise<string> {
    const node = this.document.createWorkflowNode({
      id: params.id,
      type: WorkflowNodeType.LLM,
      data: {
        title: params.title,
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
            modelName: {
              type: 'string',
            },
            apiKey: {
              type: 'string',
            },
            apiHost: {
              type: 'string',
            },
            temperature: {
              type: 'number',
            },
            systemPrompt: {
              type: 'string',
              extra: {
                formComponent: 'prompt-editor',
              },
            },
            prompt: {
              type: 'string',
              extra: {
                formComponent: 'prompt-editor',
              },
            },
          },
        },
        outputs: {
          type: 'object',
          properties: {
            result: {
              type: 'string',
            },
          },
        },
      },
    });

    this.autoLayout.handle({
      enableAnimation: false,
    });

    await delay(20);

    this.selectService.toggleSelect(node);

    const bounds = node.transform.bounds;
    this.playground.scrollToView({
      bounds,
      scrollDelta: {
        x: 224,
        y: 0,
      },
      zoom: 1,
      scrollToCenter: true,
    });

    return node.id;
  }
}
