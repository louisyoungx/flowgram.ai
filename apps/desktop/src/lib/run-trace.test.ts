/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */
import { describe, expect, it } from 'vitest';

import {
  aggregateStatus,
  pairGroups,
  instanceKey,
  type ComparisonGroup,
  duration,
  executionData,
  mergeExecutions,
  type Execution,
} from './run-trace';
import type { RuntimeEvent } from './types';

const event = (
  sequence: number,
  kind: string,
  data: unknown
): RuntimeEvent => ({
  sequence,
  kind,
  data: JSON.stringify(data),
  objectId: 'run',
  createdAt: '2026-10-20T00:00:00Z',
});
describe('run inspection', () => {
  it('keeps separate iterations while updating an execution in place', () => {
    const first = {
      id: 'round-1',
      firstSequence: 1,
      status: 'running',
    } as Execution;
    const second = {
      id: 'round-2',
      firstSequence: 2,
      status: 'succeeded',
    } as Execution;
    expect(
      mergeExecutions([first, second], [{ ...first, status: 'failed' }])
    ).toEqual([{ ...first, status: 'failed' }, second]);
    expect(aggregateStatus({ failed: 1, succeeded: 119 })).toBe('failed');
    expect(aggregateStatus({ succeeded: 3, running: 1 })).toBe('running');
  });
  it('distinguishes absent payloads from null and preserves model metadata', () => {
    const events = [
      event(1, 'model_started', {
        inputs: null,
        model: { modelName: 'Pinned' },
      }),
      event(2, 'model_output_started', { firstOutputMs: 42 }),
      event(3, 'model_finished', {
        outputs: { usage: { input_tokens: 12 }, output: [] },
      }),
    ];
    const data = executionData(events);
    expect(data.inputs).toBeNull();
    expect(data.metadata.model).toEqual({ modelName: 'Pinned' });
    expect(data.firstOutputMs).toBe(42);
    expect(data.outputs).toHaveProperty('usage.input_tokens', 12);
    expect(executionData([]).inputs).toBeUndefined();
  });
  it('does not invent a duration for interrupted or unrecorded spans', () => {
    expect(duration(null)).toBe('—');
    expect(duration(0)).toBe('0 ms');
    expect(duration(1250)).toBe('1.3 s');
    expect(
      executionData([event(1, 'http_failed', { error: 'Connection failed' })])
        .error
    ).toBe('Connection failed');
  });
  it('matches debug copies by definition identity and separates repeated call paths', () => {
    const group = {
      canonicalWorkflowId: 'original',
      nodeId: 'parse',
    } as ComparisonGroup;
    const pairs = pairGroups(
      [group],
      [
        { ...group, workflowId: 'copy' },
        { ...group, canonicalWorkflowId: 'another' },
      ]
    );
    expect(pairs).toHaveLength(2);
    expect(pairs[0].left).toBeDefined();
    expect(pairs[0].right?.workflowId).toBe('copy');
    expect(pairs[1].left).toBeUndefined();
    const entry = {
      parentPath: ['loop', 'first-call'],
      iterationPath: [36],
      branchPath: ['approval'],
      attempt: 1,
    } as Execution;
    expect(instanceKey(entry)).not.toBe(
      instanceKey({ ...entry, parentPath: ['loop', 'second-call'] })
    );
    expect(instanceKey(entry)).not.toBe(
      instanceKey({ ...entry, iterationPath: [37] })
    );
  });
});
