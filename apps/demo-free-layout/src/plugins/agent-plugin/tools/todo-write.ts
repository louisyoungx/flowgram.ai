/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { z } from 'zod';
import { injectable } from '@flowgram.ai/free-layout-editor';

import { TodoWriteRender } from '../renders/todo-write-render';
import type { AgentToolDefinition, ToolCallResult } from './type';
import { BaseTool } from './base-tool';

const TodoItemSchema = z.object({
  id: z.number().describe('待办事项的唯一标识符。从 1 开始使用连续数字。'),
  title: z.string().describe('简洁的面向行动的待办事项标签（3-7 个词）。'),
  status: z
    .enum(['not_started', 'in_progress', 'completed'])
    .describe(
      'not_started: 未开始 | in_progress: 正在工作（最多 1 个）| completed: 完全完成，没有阻碍'
    ),
  description: z.string().optional().describe('可选的详细描述'),
});

const TodoWriteParamsSchema = z.object({
  operation: z
    .enum(['write', 'read', 'update', 'add', 'remove'])
    .describe(
      '操作类型。必须使用 update/add/remove 进行增量更新。write 只能在创建初始列表时使用一次，之后禁止再次使用 write。'
    ),
  todoList: z.array(TodoItemSchema).optional().describe('仅用于 write 操作：完整的待办事项数组。'),
  id: z
    .number()
    .optional()
    .describe('用于 update/remove 操作：要操作的任务 ID。add 操作时自动生成。'),
  title: z.string().optional().describe('用于 add/update 操作：任务标题。'),
  status: z
    .enum(['not_started', 'in_progress', 'completed'])
    .optional()
    .describe('用于 add/update 操作：任务状态。'),
  description: z.string().optional().describe('用于 add/update 操作：任务描述（可选）。'),
});

type TodoWriteParams = z.infer<typeof TodoWriteParamsSchema>;
type TodoItem = z.infer<typeof TodoItemSchema>;
type TodoWriteResult = TodoItem[] | TodoItem;

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

@injectable()
export class TodoWriteTool extends BaseTool<TodoWriteParams, TodoWriteResult> {
  readonly activated = true;

  readonly definition: AgentToolDefinition<TodoWriteParams, TodoWriteResult> = {
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

重要：完成每个任务后立即标记为 completed，不要批量处理多个任务。

操作类型（必须严格遵守）：
- update: 更新单个任务状态（推荐，最省 token）- 用于标记任务为 in_progress 或 completed
- add: 添加单个新任务（推荐）- 用于在执行过程中发现新任务
- remove: 删除单个任务 - 用于删除不再需要的任务
- write: 初始化完整列表（警告：仅在会话开始创建初始任务列表时使用一次！之后必须使用 update/add/remove）
- read: 读取当前列表

IMPORTANT：write 操作会完全替换整个列表，导致之前的任务历史丢失。创建初始列表后，必须使用 update 来改变任务状态，使用 add 来添加新任务。禁止多次使用 write 操作。`,
    parameters: TodoWriteParamsSchema,
    render: TodoWriteRender,
  };

  async execute(params: TodoWriteParams): Promise<ToolCallResult<TodoWriteResult>> {
    if (params.operation === 'read') {
      const todos = todoStore.read();
      if (todos.length === 0) {
        return {
          success: true,
          data: [],
          message: '待办事项列表为空',
        };
      }
      return {
        success: true,
        data: todos,
        message: `当前有 ${todos.length} 个待办事项`,
      };
    }

    if (params.operation === 'write') {
      if (!params.todoList || !Array.isArray(params.todoList)) {
        return {
          success: false,
          error: 'write 操作需要提供 todoList 数组',
        };
      }

      const inProgressCount = params.todoList.filter((t) => t.status === 'in_progress').length;
      if (inProgressCount > 1) {
        return {
          success: false,
          error: '一次只能有一个 in_progress 状态的任务',
        };
      }

      const ids = params.todoList.map((t) => t.id);
      if (new Set(ids).size !== ids.length) {
        return {
          success: false,
          error: '待办事项 ID 必须唯一',
        };
      }

      todoStore.write(params.todoList);
      return {
        success: true,
        data: params.todoList,
        message: `成功写入 ${params.todoList.length} 个待办事项`,
      };
    }

    if (params.operation === 'update') {
      if (params.id === undefined) {
        return {
          success: false,
          error: 'update 操作需要提供 id',
        };
      }

      const todos = todoStore.read();
      const todoIndex = todos.findIndex((t) => t.id === params.id);

      if (todoIndex === -1) {
        return {
          success: false,
          error: `未找到 ID 为 ${params.id} 的任务`,
        };
      }

      if (params.status === 'in_progress') {
        const hasOtherInProgress = todos.some(
          (t) => t.id !== params.id && t.status === 'in_progress'
        );
        if (hasOtherInProgress) {
          return {
            success: false,
            error: '一次只能有一个 in_progress 状态的任务',
          };
        }
      }

      const updatedTodo = { ...todos[todoIndex] };
      if (params.title !== undefined) updatedTodo.title = params.title;
      if (params.status !== undefined) updatedTodo.status = params.status;
      if (params.description !== undefined) updatedTodo.description = params.description;

      todos[todoIndex] = updatedTodo;
      todoStore.write(todos);

      return {
        success: true,
        data: updatedTodo,
        message: `成功更新任务 ${params.id}`,
      };
    }

    if (params.operation === 'add') {
      if (!params.title) {
        return {
          success: false,
          error: 'add 操作需要提供 title',
        };
      }

      const todos = todoStore.read();
      const newId = todos.length > 0 ? Math.max(...todos.map((t) => t.id)) + 1 : 1;

      if (params.status === 'in_progress') {
        const hasInProgress = todos.some((t) => t.status === 'in_progress');
        if (hasInProgress) {
          return {
            success: false,
            error: '一次只能有一个 in_progress 状态的任务',
          };
        }
      }

      const newTodo: TodoItem = {
        id: newId,
        title: params.title,
        status: params.status || 'not_started',
        description: params.description,
      };

      todos.push(newTodo);
      todoStore.write(todos);

      return {
        success: true,
        data: todos,
        message: `成功添加任务 ${newId}`,
      };
    }

    if (params.operation === 'remove') {
      if (params.id === undefined) {
        return {
          success: false,
          error: 'remove 操作需要提供 id',
        };
      }

      const todos = todoStore.read();
      const todoIndex = todos.findIndex((t) => t.id === params.id);

      if (todoIndex === -1) {
        return {
          success: false,
          error: `未找到 ID 为 ${params.id} 的任务`,
        };
      }

      const removedTodo = todos[todoIndex];
      todos.splice(todoIndex, 1);
      todoStore.write(todos);

      return {
        success: true,
        data: removedTodo,
        message: `成功删除任务 ${params.id}`,
      };
    }

    return {
      success: false,
      error: '未知的操作类型',
    };
  }
}
