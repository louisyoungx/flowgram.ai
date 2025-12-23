/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { injectable } from '@flowgram.ai/free-layout-editor';

import { BaseTool } from '../base-tool';
import type { Tool } from '../../types';

/**
 * TodoWrite 工具参数
 */
interface TodoWriteArgs {
  operation: 'write' | 'read';
  todoList?: Array<{
    id: number;
    title: string;
    status: 'not_started' | 'in_progress' | 'completed';
    description?: string;
  }>;
}

/**
 * Todo 项
 */
interface TodoItem {
  id: number;
  title: string;
  status: 'not_started' | 'in_progress' | 'completed';
  description?: string;
}

/**
 * Todo 列表存储
 */
class TodoStore {
  private todos: TodoItem[] = [];

  write(todos: TodoItem[]): void {
    this.todos = todos;
  }

  read(): TodoItem[] {
    return this.todos;
  }

  clear(): void {
    this.todos = [];
  }
}

const todoStore = new TodoStore();

/**
 * TodoWrite 工具
 * 用于管理和跟踪任务列表
 * 支持依赖注入，可以注入 WorkflowDocument 等服务
 */
@injectable()
export class TodoWriteTool extends BaseTool<TodoWriteArgs, string> {
  // 如果需要注入服务，可以这样写：
  // @inject(WorkflowDocument) private document: WorkflowDocument;

  readonly tool: Tool = {
    type: 'function',
    function: {
      name: 'TodoWrite',
      description: `管理工作流任务的待办事项列表。用于规划、跟踪和更新任务状态。

使用场景：
- 将复杂任务分解为可操作的步骤
- 在开始工作前标记任务为 in_progress
- 完成任务后立即标记为 completed
- 为用户提供任务进度的可见性

任务状态：
- not_started: 尚未开始
- in_progress: 正在进行（一次只能有一个）
- completed: 已完成

重要：完成每个任务后立即标记为 completed，不要批量处理多个任务。`,
      parameters: {
        type: 'object',
        properties: {
          operation: {
            type: 'string',
            description:
              'write: 替换整个待办事项列表。read: 检索当前待办事项列表。写入时必须提供完整列表 - 不支持部分更新。',
            enum: ['write', 'read'],
          },
          todoList: {
            type: 'array',
            description:
              '所有待办事项的完整数组（write 操作必需，read 操作忽略）。必须包含所有项目 - 现有的和新的。',
            items: {
              type: 'object',
              properties: {
                id: {
                  type: 'number',
                  description: '待办事项的唯一标识符。从 1 开始使用连续数字。',
                },
                title: {
                  type: 'string',
                  description: '简洁的面向行动的待办事项标签（3-7 个词）。',
                },
                status: {
                  type: 'string',
                  description:
                    'not_started: 未开始 | in_progress: 正在工作（最多 1 个）| completed: 完全完成，没有阻碍',
                  enum: ['not_started', 'in_progress', 'completed'],
                },
                description: {
                  type: 'string',
                  description: '可选的详细描述',
                },
              },
              required: ['id', 'title', 'status'],
            },
          },
        },
        required: ['operation'],
      },
    },
  };

  /**
   * 执行工具
   */
  async execute(args: TodoWriteArgs): Promise<string> {
    if (args.operation === 'read') {
      const todos = todoStore.read();
      if (todos.length === 0) {
        return JSON.stringify({
          success: true,
          data: [],
          message: '待办事项列表为空',
        });
      }
      return JSON.stringify({
        success: true,
        data: todos,
        message: `当前有 ${todos.length} 个待办事项`,
      });
    }

    if (args.operation === 'write') {
      if (!args.todoList || !Array.isArray(args.todoList)) {
        return JSON.stringify({
          success: false,
          error: 'write 操作需要提供 todoList 数组',
        });
      }

      // 验证待办事项
      const inProgressCount = args.todoList.filter((t) => t.status === 'in_progress').length;
      if (inProgressCount > 1) {
        return JSON.stringify({
          success: false,
          error: '一次只能有一个 in_progress 状态的任务',
        });
      }

      // 验证 ID 唯一性
      const ids = args.todoList.map((t) => t.id);
      if (new Set(ids).size !== ids.length) {
        return JSON.stringify({
          success: false,
          error: '待办事项 ID 必须唯一',
        });
      }

      todoStore.write(args.todoList);
      return JSON.stringify({
        success: true,
        data: args.todoList,
        message: `成功写入 ${args.todoList.length} 个待办事项`,
      });
    }

    return JSON.stringify({
      success: false,
      error: '未知的操作类型',
    });
  }
}
