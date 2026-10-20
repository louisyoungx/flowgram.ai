/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */
import { describe, expect, it } from "vitest";

import {
  mentionParts,
  mentionQuery,
  mentionsFromReferences,
  replaceMentionRange,
  workflowReferences,
  type MentionValue,
} from "./mentions";

const token = (id: string, label: string): MentionValue => ({
  content: `@${label} `,
  mentions: [{ id, label, start: 0, end: label.length + 1 }],
});
describe("inline workflow mentions", () => {
  it("combines repeated workflow references with surrounding instructions and UTF-16 offsets", () => {
    let value: MentionValue = { content: "😀 让 ", mentions: [] };
    value = replaceMentionRange(
      value,
      value.content.length,
      value.content.length,
      token("a", "A 工作流")
    );
    value = replaceMentionRange(
      value,
      value.content.length,
      value.content.length,
      { content: "完成审核，再接入 ", mentions: [] }
    );
    value = replaceMentionRange(
      value,
      value.content.length,
      value.content.length,
      token("b", "B 工作流")
    );
    value = replaceMentionRange(
      value,
      value.content.length,
      value.content.length,
      token("a", "A 工作流")
    );
    const references = workflowReferences(value)!;
    expect(references.workflows?.map((m) => m.workflowId)).toEqual([
      "a",
      "b",
      "a",
    ]);
    expect(references.workflows?.[0].start).toBe(5);
    expect(mentionsFromReferences(value.content, references)).toEqual(
      value.mentions
    );
    expect(
      mentionParts(value)
        .map((part) => part.text)
        .join("")
    ).toBe(value.content);
  });
  it("inserts at a middle selection and rebases later tokens without recognizing ordinary @text as a reference", () => {
    const initial = replaceMentionRange(
      { content: "前面 后面 ", mentions: [] },
      6,
      6,
      token("b", "B")
    );
    const next = replaceMentionRange(initial, 3, 5, token("a", "A"));
    expect(next.content).toBe("前面 @A  @B ");
    expect(next.mentions.map((m) => [m.id, m.start, m.end])).toEqual([
      ["a", 3, 5],
      ["b", 7, 9],
    ]);
    expect(
      workflowReferences({ content: "@A 普通文字", mentions: [] })
    ).toBeNull();
  });
  it("replaces whole atomic tokens, removes their identity and keeps later reference positions valid", () => {
    const value = replaceMentionRange(
      token("a", "审核"),
      4,
      4,
      token("b", "发送")
    );
    const next = replaceMentionRange(value, 1, 2, {
      content: "",
      mentions: [],
    });
    expect(next.content).toBe(" @发送 ");
    expect(next.mentions).toEqual([
      { id: "b", label: "发送", start: 1, end: 4 },
    ]);
    expect(
      mentionsFromReferences("标签已删除", workflowReferences(value))
    ).toEqual([]);
  });
  it("queries typed @ at Chinese or whitespace boundaries, skips emails and existing labels", () => {
    expect(mentionQuery({ content: "然后接入@订", mentions: [] }, 6)).toEqual({
      start: 4,
      end: 6,
      query: "订",
    });
    expect(
      mentionQuery({ content: "user@example.com", mentions: [] }, 16)
    ).toBeNull();
    expect(mentionQuery(token("a", "A 工作流"), 7)).toBeNull();
    expect(mentionQuery({ content: "@A\n下一行", mentions: [] }, 6)).toBeNull();
  });
});
