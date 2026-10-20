/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */
import type { ModelTrace } from './models';
import type { Run, RuntimeEvent, Workflow, WorkflowNode } from './types';
import { tx } from './i18n';

export interface Execution {
  id: string;
  parentId: string | null;
  nodeId: string;
  workflowId: string;
  scopeId: string;
  kind: 'node' | 'model' | 'tool' | 'http';
  name: string | null;
  status: string;
  firstSequence: number;
  lastSequence: number;
  startedAt: string;
  endedAt: string | null;
  durationMs: number | null;
  branchPath: string[];
  iterationPath: number[];
  attempt: number;
  reason: string | null;
  children: number;
  inputsAvailable: boolean;
  outputsAvailable: boolean;
  links: { executionId: string; sourcePortId?: string | null; type: string }[];
}
export interface ExecutionPage {
  executions: Execution[];
  nextCursor: number | null;
  previousCursor?: number | null;
  total?: number;
}
export interface TraceDetail {
  run: Run;
  snapshot: Workflow | null;
  manifest: {
    workflows: {
      workflowId: string;
      name: string;
      revision: number;
      schemaHash: string;
    }[];
  };
  models: { workflowId: string; nodeId: string; model: ModelTrace }[];
  nodeTest: { node: WorkflowNode; bindings: Record<string, unknown> } | null;
  trace: ExecutionPage & {
    at: number | null;
    observedAt: string | null;
    outputsAvailable: boolean;
    origin:import('./debug-intent').DebugOrigin|null;
    format: string;
    runtime: string;
    source: string;
    endedAt: string | null;
    durationMs: number | null;
    watermark: number;
    total: number;
    counts: Record<string, number>;
    failureId: string | null;
    failurePath: string[];
    focus: Execution[];
    links: {
      workflowId: string;
      scopeId: string;
      sourceNodeId: string;
      sourcePortId: string | null;
      targetNodeId: string;
    }[];
    nodes: {
      workflowId: string;
      nodeId: string;
      total: number;
      counts: Record<string, number>;
    }[];
    publication: {
      service: string;
      environment: string;
      operation: string;
      version: string;
    } | null;
  };
}
export const statusLabel = (status: string) =>
  tx(
    (
      {
        running: '运行中',
        succeeded: '已完成',
        failed: '执行失败',
        canceled: '已取消',
        interrupted: '已中断',
        waiting: '等待中',
        skipped: '已跳过',
        untested: '本次未测试',
        pending: '未执行',
      } as Record<string, string>
    )[status] || status
  );
export const sourceLabel = (source: string) =>
  tx(
    (
      {
        node_test: '节点测试',
        manual: '手动运行',
        agent: '会话调用',
        published: '发布运行',
      } as Record<string, string>
    )[source] || source
  );
export function duration(ms: number | null | undefined) {
  if (ms == null) return '—';
  if (ms < 1000) return `${Math.round(ms)} ms`;
  if (ms < 60000) return `${(ms / 1000).toFixed(1)} s`;
  return `${Math.floor(ms / 60000)} m ${Math.round((ms % 60000) / 1000)} s`;
}
export function executionPath(execution: Execution) {
  return [
    ...execution.iterationPath.map((index) => tx('第 {0} 轮', [index + 1])),
    ...execution.branchPath.map((branch) => tx('分支 {0}', [branch])),
    ...(execution.attempt > 1
      ? [tx('第 {0} 次尝试', [execution.attempt])]
      : []),
  ].join(' · ');
}
export function parseEvent(event: RuntimeEvent): Record<string, unknown> {
  try {
    return JSON.parse(event.data);
  } catch {
    return {};
  }
}
export function executionData(events: RuntimeEvent[]) {
  const parsed = events.map((event) => ({
    ...event,
    value: parseEvent(event),
  }));
  const first = parsed.find((event) => Object.hasOwn(event.value, 'inputs'));
  const last = [...parsed]
    .reverse()
    .find((event) => Object.hasOwn(event.value, 'outputs'));
  return {
    inputs: first?.value.inputs,
    outputs: last?.value.outputs,
    metadata: first?.value || parsed[0]?.value || {},
    error: [...parsed]
      .reverse()
      .find((event) => typeof event.value.error === 'string')?.value.error as
      | string
      | undefined,
    firstOutputMs: parsed.find(
      (event) => typeof event.value.firstOutputMs === 'number'
    )?.value.firstOutputMs as number | undefined,
  };
}
export function mergeExecutions(previous: Execution[], next: Execution[]) {
  const values = new Map(previous.map((entry) => [entry.id, entry]));
  next.forEach((entry) => values.set(entry.id, entry));
  return [...values.values()].sort((a, b) => a.firstSequence - b.firstSequence);
}
/** A failed iteration must remain visible even when a later iteration succeeds. */
export function aggregateStatus(counts: Record<string, number>) {
  return (
    [
      'failed',
      'running',
      'waiting',
      'interrupted',
      'canceled',
      'succeeded',
      'skipped',
    ].find((status) => counts[status] > 0) || 'pending'
  );
}
