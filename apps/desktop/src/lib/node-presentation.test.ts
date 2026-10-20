/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */
import { describe, expect, it } from 'vitest';

import {
  presentNode,
  describePredicate,
  safeRequestAddress,
  type NodeResources,
} from './node-presentation';
import { nodeCatalog } from './node-catalog';
import { staticPorts } from './control-nodes';
import type { WorkflowNode } from './types';
import type { ModelInventory } from './models';
import { tx } from './i18n';

const constant = (content: unknown) => ({ type: 'constant', content });
const resources: NodeResources = {
  names: { start: '采购单' },
  workflows: { dependency: '审核订单' },
};
const node = (type: string, data: WorkflowNode['data'] = {}): WorkflowNode => ({
  id: 'node',
  type,
  data,
});
describe('canvas node presentation', () => {
  it('shows the configured request without exposing credentials or query values', () => {
    const request = node('http', {
      inputsValues: {
        method: constant('POST'),
        url: constant('https://alice:password@example.com/orders?apiKey=secret#private'),
      },
    });
    expect(presentNode(request, resources).lines).toEqual(['POST  example.com/orders']);
    expect(safeRequestAddress(constant('javascript:secret'), resources)).toBe(tx('请求地址无效'));
    expect(
      safeRequestAddress({ type: 'ref', content: ['start', 'endpoint'] }, resources)
    ).toContain('采购单');
  });
  it('resolves user-authored names and describes typed values without serializing object secrets', () => {
    const call = presentNode(
      node('subworkflow', { inputsValues: { workflowId: constant('dependency') } }),
      resources
    );
    expect(call.lines[0]).toBe('审核订单');
    expect(call.issue).toBeUndefined();
    expect(
      presentNode(
        node('data.parse-json', {
          inputsValues: { text: { type: 'ref', content: ['start', 'json'] } },
        }),
        resources
      ).lines[0]
    ).toContain('「采购单」.json');
    const data = {
      mapping: {
        order: { type: 'ref', content: ['start', 'id'] },
        credentials: constant({ apiKey: 'secret' }),
      },
    };
    const result = presentNode(node('data.map-fields', data), resources);
    expect(result.lines.join()).toContain('采购单');
    expect(result.lines.join()).not.toContain('secret');
    expect(data.mapping.order.content).toEqual(['start', 'id']);
  });
  it('uses operation labels and actual changed values instead of generic descriptions', () => {
    const make = (operation: string) =>
      presentNode(
        node('text.transform', {
          inputsValues: { operation: constant(operation), text: constant('hello') },
        }),
        resources
      ).lines;
    expect(make('upper')).not.toEqual(make('lower'));
    expect(
      presentNode(
        node('value.math', {
          inputsValues: { operation: constant('add'), operands: constant([1, 2]) },
        }),
        resources
      ).lines[1]
    ).toContain('1 · 2');
    expect(make('upper').join()).not.toContain(
      nodeCatalog.find((entry) => entry.type === 'text.transform')!.description
    );
    for (const spec of nodeCatalog)
      expect(
        presentNode(node(spec.type, structuredClone(spec.defaults)), resources).lines.length
      ).toBeLessThanOrEqual(2);
  });
  it('preserves false and zero as configured values and marks absent required fields', () => {
    expect(
      presentNode(node('wait', { inputsValues: { durationMs: constant(0) } }), resources).issue
    ).toBeUndefined();
    expect(
      presentNode(node('http', { inputsValues: { url: constant('') } }), resources).issue
    ).toBeTruthy();
    expect(
      describePredicate(
        { left: constant(false), operator: 'eq', right: constant(false) },
        resources
      )
    ).toBe('false = false');
  });
  it('keeps model snapshots independent of current model defaults', () => {
    const models = {
      models: [{ id: 'current', name: 'Current model', parameters: {} }],
      defaults: { workflow: 'current' },
    } as ModelInventory;
    const llm = node('llm', { inputsValues: { prompt: constant('private instructions') } });
    expect(presentNode(llm, { ...resources, models }).lines[0]).toBe('Current model');
    expect(presentNode(llm, { ...resources, models, readOnly: true }).lines[0]).toBe(
      tx('未采集模型配置')
    );
    const trace = {
      modelId: 'old',
      modelName: 'Pinned model',
      upstreamModel: 'upstream',
      connectionName: 'Original',
      parameters: { outputSchema: { type: 'object' } },
    };
    expect(
      presentNode(llm, { ...resources, models, readOnly: true, modelTraces: { node: trace } }).lines
    ).toEqual(['Pinned model', tx('结构化输出')]);
    expect(presentNode(llm, resources).lines.join()).not.toContain('private instructions');
  });
});
describe('static canvas geometry', () => {
  it('uses semantic branch rows on the corresponding side while preserving port IDs', () => {
    const fork = node('control.switch', {
      branches: [
        { id: 'high', label: '高额' },
        { id: 'low', label: '普通' },
      ],
    });
    const join = { ...node('control.join', { forkId: fork.id }), id: 'join' };
    const graph = { nodes: [fork, join], edges: [] };
    const first = staticPorts(fork, graph),
      second = staticPorts(join, graph);
    expect(
      first.ports
        .filter((port) => port.type === 'output')
        .map((port) => [port.portID, port.locationConfig.top])
    ).toEqual([
      ['high', 106],
      ['low', 150],
      ['else', 194],
    ]);
    expect(first.ports.find((port) => port.type === 'input')!.locationConfig.top).toBe(42);
    expect(
      second.ports.filter((port) => port.type === 'input').map((port) => port.locationConfig.top)
    ).toEqual([106, 150, 194]);
    expect(second.ports.find((port) => port.type === 'output')!.locationConfig.top).toBe(42);
    expect(first.ports.every((port) => !('targetElement' in port))).toBe(true);
  });
  it('keeps terminal controls compact and never invents a forward output', () => {
    for (const type of ['end', 'block-end', 'control.break', 'control.continue'])
      expect(
        staticPorts(node(type), { nodes: [], edges: [] }).ports.filter(
          (port) => port.type === 'output'
        )
      ).toEqual([]);
    expect(staticPorts(node('block-start'), { nodes: [], edges: [] })).toMatchObject({
      width: 208,
      height: 64,
    });
    expect(staticPorts(node('http'), { nodes: [], edges: [] })).toMatchObject({
      width: 280,
      height: 112,
    });
    const loop = staticPorts(node('loop'), { nodes: [], edges: [] });
    expect(loop.ports.every((port) => port.locationConfig.top === 36)).toBe(true);
  });
});
