/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { z } from 'zod';
import { injectable } from '@flowgram.ai/free-layout-editor';

import { AskUserQuestionRender } from '../renders/ask-user-question-render';
import type { AgentToolDefinition, ToolCallResult } from './type';
import { BaseTool } from './base-tool';

const AskUserQuestionParamsSchema = z.object({
  question: z.string().describe('要向用户提出的问题'),
  options: z
    .array(z.string())
    .optional()
    .describe('可选的选项列表，如果提供，用户只能从这些选项中选择'),
});

type AskUserQuestionParams = z.infer<typeof AskUserQuestionParamsSchema>;

interface QuestionState {
  question: string;
  options?: string[];
  answer?: string;
  resolve?: (value: string) => void;
}

const questionStore = new Map<string, QuestionState>();

interface AskUserQuestionResult {
  question: string;
  answer: string;
}

@injectable()
export class AskUserQuestionTool extends BaseTool<AskUserQuestionParams, AskUserQuestionResult> {
  readonly activated = true;

  readonly definition: AgentToolDefinition<AskUserQuestionParams, AskUserQuestionResult> = {
    name: 'AskUserQuestion',
    description: `向用户提问以获取必要的信息。

使用场景：
- 当需要用户提供额外信息才能继续任务时
- 需要用户确认某个操作时
- 需要用户在多个选项中做出选择时

注意：
- 问题应该清晰、具体
- 如果提供选项，用户只能从选项中选择
- 工具会等待用户回答后才返回结果`,
    parameters: AskUserQuestionParamsSchema,
    render: AskUserQuestionRender,
  };

  async execute(params: AskUserQuestionParams): Promise<ToolCallResult<AskUserQuestionResult>> {
    const questionId = params.question;

    return new Promise<ToolCallResult<AskUserQuestionResult>>((resolve) => {
      questionStore.set(questionId, {
        question: params.question,
        options: params.options,
        resolve: (answer: string) => {
          resolve({
            success: true,
            data: {
              question: params.question,
              answer,
            },
            message: '用户已回答问题',
          });
        },
      });

      setTimeout(() => {
        const state = questionStore.get(questionId);
        if (state && !state.answer) {
          questionStore.delete(questionId);
          resolve({
            success: false,
            error: '用户未在规定时间内回答问题',
          });
        }
      }, 300000);
    });
  }

  public static answerQuestion(questionId: string, answer: string): void {
    const state = questionStore.get(questionId);
    if (state?.resolve) {
      state.answer = answer;
      state.resolve(answer);
      questionStore.delete(questionId);
    }
  }
}
