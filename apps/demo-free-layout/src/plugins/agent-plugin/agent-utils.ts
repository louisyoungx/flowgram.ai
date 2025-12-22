/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { ToolCall, ToolResult, UIChatMessage } from './types';

export interface ParsedContent {
  type: 'text' | 'tool_call';
  content?: string;
  toolName?: string;
  toolArgs?: string;
  toolResult?: string;
  id?: string;
}

export function parseMessageContent(content: string): ParsedContent[] {
  const parts: ParsedContent[] = [];
  const toolCallRegex =
    /<tool_call id="([^"]+)" name="([^"]+)">\s*<arguments>([\s\S]*?)<\/arguments>(?:\s*<result>([\s\S]*?)<\/result>)?\s*<\/tool_call>/g;

  let lastIndex = 0;
  let match;

  while ((match = toolCallRegex.exec(content)) !== null) {
    if (match.index > lastIndex) {
      const textContent = content.slice(lastIndex, match.index).trim();
      if (textContent) {
        parts.push({ type: 'text', content: textContent });
      }
    }

    parts.push({
      type: 'tool_call',
      id: match[1],
      toolName: match[2],
      toolArgs: match[3].trim(),
      toolResult: match[4]?.trim(),
    });

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < content.length) {
    const textContent = content.slice(lastIndex).trim();
    if (textContent) {
      parts.push({ type: 'text', content: textContent });
    }
  }

  if (parts.length === 0 && content.trim()) {
    parts.push({ type: 'text', content: content.trim() });
  }

  return parts;
}

export namespace WorkflowAgentUtils {
  /**
   * 创建新的用户消息
   */
  export const createUserMessage = (content: string): UIChatMessage => ({
    id: Date.now().toString(),
    role: 'user',
    content,
    timestamp: Date.now(),
    status: 'sent',
  });

  /**
   * 创建新的 Assistant 消息
   */
  export const createAssistantMessage = (id?: string): UIChatMessage => ({
    id: id || (Date.now() + 1).toString(),
    role: 'assistant',
    content: '',
    timestamp: Date.now(),
    status: 'sending',
  });

  /**
   * 格式化工具调用为 XML
   */
  export const formatToolCallsToXML = (toolCalls: ToolCall[]): string =>
    toolCalls
      .map((tc) => {
        const toolId = tc.id;
        const toolName = tc.function.name;
        const args = tc.function.arguments;
        return `\n\n<tool_call id="${toolId}" name="${toolName}">\n<arguments>\n${args}\n</arguments>\n</tool_call>`;
      })
      .join('');

  /**
   * 更新消息内容中的工具调用结果
   */
  export const updateToolCallResults = (content: string, results: ToolResult[]): string => {
    let updatedContent = content;
    for (const result of results) {
      const toolId = result.toolCallId;
      const resultData = result.result;
      // 查找并更新对应的 tool_call，在 </arguments> 后添加 <result>
      updatedContent = updatedContent.replace(
        new RegExp(
          `(<tool_call id="${toolId}"[^>]*>\\s*<arguments>[\\s\\S]*?<\\/arguments>)(\\s*<\\/tool_call>)`,
          'g'
        ),
        `$1\n<result>\n${resultData}\n</result>$2`
      );
    }
    return updatedContent;
  };

  /**
   * 格式化错误消息
   */
  export const formatErrorMessage = (error: unknown): string => {
    if (error instanceof Error) {
      return `抱歉，发生了错误：${error.message}\n\n请检查 API 配置是否正确，或稍后重试。`;
    }
    return '抱歉，发生了未知错误，请稍后重试。';
  };

  /**
   * 标记未完成的工具调用为已取消
   * 检测消息中没有 result 的 tool_call，并添加取消标记
   */
  export const markIncompleteToolCallsAsCancelled = (content: string): string => {
    // 匹配没有 result 的 tool_call
    const incompleteToolCallRegex =
      /<tool_call id="([^"]+)" name="([^"]+)">\s*<arguments>([\s\S]*?)<\/arguments>\s*<\/tool_call>/g;

    return content.replace(
      incompleteToolCallRegex,
      '<tool_call id="$1" name="$2">\n<arguments>$3</arguments>\n<result>\n请求已取消\n</result>\n</tool_call>'
    );
  };
}
