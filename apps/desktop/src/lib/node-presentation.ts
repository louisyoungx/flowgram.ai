/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */
import {
  definitionFor,
  visibleFields,
  type FieldDefinition,
} from '../components/node-inspector/definitions';
import {
  asValue,
  flattenNodes,
  readPath,
  type Data,
  type Schema,
} from '../components/node-inspector/model';
import type { WorkflowNode, WorkflowSchema } from './types';
import type { ModelInventory, ModelTrace } from './models';
import { tx } from './i18n';
import { nodeSpec } from './node-catalog';

export interface NodeResources {
  names: Record<string, string>;
  workflows: Record<string, string>;
  models?: ModelInventory;
  modelTraces?: Record<string, ModelTrace>;
  readOnly?: boolean;
  owners?: Record<string, { title: string; type: string }>;
}
export function nodeNames(schema: WorkflowSchema) {
  return Object.fromEntries(
    flattenNodes(schema.nodes).map((node) => [
      node.id,
      String(node.data.title || nodeSpec(node.type).title),
    ])
  );
}
export function loopOwners(
  schema: WorkflowSchema,
  owner?: { title: string; type: string }
): NonNullable<NodeResources['owners']> {
  return Object.fromEntries(
    schema.nodes.flatMap((node) => [
      ...(owner ? [[node.id, owner]] : []),
      ...Object.entries(
        node.blocks
          ? loopOwners(
              { nodes: node.blocks, edges: node.edges || [] },
              { title: String(node.data.title || nodeSpec(node.type).title), type: node.type }
            )
          : {}
      ),
    ])
  );
}
const sensitive = /authorization|password|secret|token|api.?key|headers|credential/i;
export function describeValue(raw: unknown, resources: NodeResources): string {
  const value = asValue(raw);
  if (value.type === 'ref') {
    const path = Array.isArray(value.content) ? value.content.map(String) : [];
    const local = {
      item: tx('当前项'),
      index: tx('当前序号'),
      state: tx('循环状态'),
      loop_locals: tx('循环变量'),
    } as Record<string, string>;
    return path.length
      ? `「${resources.names[path[0]] || local[path[0]] || tx('来源节点')}」${
          path.length > 1 ? '.' + path.slice(1).join('.') : ''
        }`
      : tx('未指定引用');
  }
  if (value.type === 'expression') return tx('表达式');
  if (value.type === 'template') return tx('文本模板');
  if (value.content == null) return value.content === null ? 'null' : tx('未配置');
  if (Array.isArray(value.content)) return tx('{0} 项', [value.content.length]);
  if (typeof value.content === 'object')
    return tx('{0} 个字段', [Object.keys(value.content).length]);
  return String(value.content).replace(/\s+/g, ' ').slice(0, 180);
}
const operators: Record<string, string> = {
  eq: '=',
  neq: '≠',
  gt: '>',
  gte: '≥',
  lt: '<',
  lte: '≤',
  contains: '包含',
  starts: '开头是',
  ends: '结尾是',
  in: '属于',
  exists: '已设置',
  missing: '未设置',
  null: '为空值',
  empty: '为空',
};
export function describePredicate(raw: unknown, resources: NodeResources, depth = 0): string {
  const data = (raw || {}) as Data;
  if (depth > 4) return tx('嵌套条件');
  if (Array.isArray(data.rules)) {
    const join = data.combinator === 'or' ? ` ${tx('或')} ` : ` ${tx('且')} `;
    return (
      data.rules
        .map((rule) => describePredicate(rule, resources, depth + 1))
        .filter(Boolean)
        .join(join) || tx('请配置条件')
    );
  }
  if (!data.operator) return tx('请配置条件');
  const op = String(data.operator);
  return [
    describeValue(data.left, resources),
    tx(operators[op] || op),
    ...(['exists', 'missing', 'null', 'empty'].includes(op)
      ? []
      : [describeValue(data.right, resources)]),
  ].join(' ');
}
export function describePort(node: WorkflowNode, id: string, resources: NodeResources) {
  if (id === 'else' && ['control.switch', 'condition'].includes(node.type))
    return tx('未匹配其他条件');
  if (node.type === 'control.switch') {
    const branch = ((node.data.branches as Data[]) || []).find((branch) => branch.id === id);
    return describePredicate(branch?.predicate, resources);
  }
  if (node.type === 'condition') {
    const conditions = ((node.data.conditions as Data[]) || []).filter(
      (condition) => String(condition.key || 'true') === id
    );
    return conditions
      .map((condition) => describePredicate(condition.value, resources))
      .join(` ${tx('且')} `);
  }
  return '';
}
export function safeRequestAddress(raw: unknown, resources: NodeResources) {
  const value = asValue(raw);
  if (value.type !== 'constant') return describeValue(raw, resources);
  if (!value.content) return tx('请配置请求地址');
  try {
    const url = new URL(String(value.content));
    if (!['http:', 'https:'].includes(url.protocol)) return tx('请求地址无效');
    return url.host + url.pathname;
  } catch {
    return tx('请求地址无效');
  }
}
function fieldText(node: WorkflowNode, field: FieldDefinition, resources: NodeResources) {
  const raw = readPath(node.data, field.key.split('.')) ?? field.defaultValue;
  const value = asValue(raw);
  if (value.type !== 'constant') return describeValue(raw, resources);
  if (field.choices && value.type === 'constant')
    return (
      field.choices.find(([key]) => key === String(value.content))?.[1] ||
      describeValue(raw, resources)
    );
  if (field.editor === 'predicate') return describePredicate(raw, resources);
  if (field.editor === 'mapping' || field.editor === 'branch-mappings') {
    const entries = Object.entries((raw || {}) as Data);
    return (
      entries
        .slice(0, 2)
        .map(([key, value]) => `${key} ← ${describeValue(value, resources)}`)
        .join(' · ') || tx('请配置字段映射')
    );
  }
  if (field.editor === 'schema') {
    const properties = (raw as Schema)?.properties || {};
    return (
      Object.entries(properties)
        .map(([key, value]) => `${key}: ${value.type || 'unknown'}`)
        .join(' · ') || tx('未声明字段')
    );
  }
  if (Array.isArray(value.content))
    return (
      value.content
        .slice(0, 3)
        .map((item) =>
          item === null || typeof item !== 'object'
            ? describeValue(item, resources)
            : Object.entries((item as Data) || {})
                .filter(([key]) => !sensitive.test(key))
                .map(([key, val]) => `${key}: ${describeValue(val, resources)}`)
                .join(' ')
        )
        .join(' · ') || tx('未配置')
    );
  return describeValue(raw, resources);
}
// Summary selection is declarative; the renderer has no per-node-type markup.
const summaryFields: Record<string, string[]> = {
  'data.map-fields': ['mapping', 'inputsValues.preserve'],
  'data.select-fields': ['inputsValues.operation', 'paths'],
  'data.merge-objects': ['inputsValues.depth', 'inputsValues.conflict'],
  'data.get-value': ['inputsValues.path', 'inputsValues.data'],
  'data.default': ['inputsValues.replace', 'inputsValues.fallback'],
  'data.convert': ['inputsValues.target', 'inputsValues.value'],
  'data.parse-json': ['inputsValues.text', 'inputsValues.validate'],
  'data.stringify-json': ['inputsValues.value', 'inputsValues.indent'],
  'data.validate': ['schema', 'inputsValues.failure'],
  'list.filter': ['predicate', 'inputsValues.items'],
  'list.map': ['mapping', 'inputsValues.items'],
  'list.sort': ['keys', 'inputsValues.items'],
  'list.deduplicate': ['keys', 'inputsValues.keep'],
  'list.slice': ['inputsValues.operation', 'inputsValues.length'],
  'list.flatten': ['inputsValues.depth', 'inputsValues.items'],
  'list.batch': ['inputsValues.size', 'inputsValues.remainder'],
  'list.group': ['keys', 'inputsValues.items'],
  'list.aggregate': ['keys', 'metrics'],
  'list.concat': ['inputsValues.lists'],
  'list.join': ['inputsValues.mode', 'inputsValues.leftKey'],
  'list.set': ['inputsValues.operation', 'keys'],
  'text.transform': ['inputsValues.operation', 'inputsValues.text'],
  'text.regex': ['inputsValues.operation', 'inputsValues.pattern'],
  'text.template': ['inputsValues.format', 'inputsValues.template'],
  'value.math': ['inputsValues.operation', 'inputsValues.operands'],
  'value.datetime': ['inputsValues.operation', 'inputsValues.timezone'],
  'value.encode': ['inputsValues.operation', 'inputsValues.encoding'],
  'value.hash': ['inputsValues.algorithm', 'inputsValues.encoding'],
  'document.chunk': ['inputsValues.mode', 'inputsValues.size'],
};
export function presentNode(
  node: WorkflowNode,
  resources: NodeResources
): { lines: string[]; issue?: string } {
  const data = node.data;
  const inputs = (data.inputsValues || {}) as Data;
  const scalar = (key: string, fallback?: unknown) => asValue(inputs[key]).content ?? fallback;
  const fields = visibleFields(node);
  const missing = fields.find((field) => {
    if (!field.required || (node.type === 'subworkflow' && field.key === 'inputsValues.inputs'))
      return false;
    const value = asValue(readPath(data, field.key.split('.')) ?? field.defaultValue);
    return (
      value.content === undefined ||
      value.content === '' ||
      value.content === null ||
      (value.type === 'ref' && (!Array.isArray(value.content) || !value.content.length))
    );
  });
  const issue = missing ? tx('请配置{0}', [missing.label]) : undefined;
  if (node.type === 'http') {
    const address = safeRequestAddress(inputs.url, resources);
    return {
      lines: [`${scalar('method', 'GET')}  ${address}`],
      issue:
        issue ||
        ([tx('请求地址无效'), tx('请配置请求地址')].includes(address) ? address : undefined),
    };
  }
  if (['llm', 'agent'].includes(node.type)) {
    const trace = resources.modelTraces?.[node.id];
    const selected =
      (data.model as { modelId?: string })?.modelId || resources.models?.defaults.workflow;
    const model = resources.models?.models.find((model) => model.id === selected);
    const name = trace?.modelName || (!resources.readOnly && model?.name);
    const schema =
      trace?.parameters.outputSchema ||
      (data.model as { parameters?: { outputSchema?: unknown } })?.parameters?.outputSchema ||
      (!resources.readOnly && model?.parameters.outputSchema);
    return {
      lines: [
        name || (resources.readOnly ? tx('未采集模型配置') : tx('请选择模型')),
        node.type === 'agent'
          ? `${tx('{0} 个工具', [
              definitionFor(node).fields.find((field) => field.editor === 'tools')?.tools?.length ||
                0,
            ])} · ${tx('最多 {0} 轮', [scalar('maxSteps', 6) as number])}`
          : schema
          ? tx('结构化输出')
          : tx('文本输出'),
      ],
      issue: issue || (!resources.readOnly && !model ? tx('请选择模型') : undefined),
    };
  }
  if (node.type === 'subworkflow') {
    const reference = asValue(inputs.workflowId);
    const name =
      reference.type === 'constant'
        ? resources.workflows[String(reference.content)]
        : describeValue(inputs.workflowId, resources);
    return {
      lines: [name || tx('请选择工作流'), tx('运行时固定依赖版本')],
      issue: issue || (!name && !resources.readOnly ? tx('请选择工作流') : undefined),
    };
  }
  if (node.type === 'loop')
    return {
      lines: [
        tx('遍历 {0}', [describeValue(data.loopFor, resources)]),
        [
          data.mode === 'parallel' ? tx('并发 {0}', [Number(data.concurrency || 4)]) : tx('串行'),
          data.errorMode === 'collect'
            ? tx('保留失败项')
            : data.errorMode === 'skip'
            ? tx('跳过失败项')
            : tx('失败时停止'),
        ].join(' · '),
      ],
      issue,
    };
  if (node.type === 'control.repeat')
    return {
      lines: [
        tx('退出条件：{0}', [describePredicate(data.predicate, resources)]),
        `${tx('最多 {0} 轮', [Number(data.maxIterations || 20)])} · ${
          data.check === 'after' ? tx('执行后检查') : tx('执行前检查')
        }`,
      ],
      issue,
    };
  if (node.type === 'control.switch')
    return {
      lines: [data.mode === 'all' ? tx('所有匹配分支') : tx('首个匹配分支')],
      issue: issue || (!((data.branches as Data[]) || []).length ? tx('请配置分支') : undefined),
    };
  if (node.type === 'control.parallel')
    return { lines: [tx('全部启动 · 并发 {0}', [Number(data.concurrency || 4)])], issue };
  if (node.type === 'condition') return { lines: [tx('首个匹配分支')], issue };
  if (node.type === 'control.join')
    return {
      lines: [
        data.policy === 'first-success'
          ? tx('等待首个成功分支')
          : data.policy === 'quorum'
          ? tx('等待 {0} 个成功分支', [Number(data.quorum || 1)])
          : tx('等待全部活动分支'),
      ],
      issue,
    };
  if (node.type === 'control.merge-branches') return { lines: [tx('合并命中的互斥分支')], issue };
  if (['control.break', 'control.continue'].includes(node.type))
    return {
      lines: [
        tx(node.type === 'control.break' ? '退出当前循环' : '开始下一轮循环') +
          (resources.owners?.[node.id] ? ' · ' + resources.owners[node.id].title : ''),
      ],
    };
  if (['start', 'block-start'].includes(node.type))
    return {
      lines: [
        node.type === 'block-start'
          ? tx(
              resources.owners?.[node.id]?.type === 'control.repeat'
                ? '本轮状态 · 序号'
                : '当前项 · 序号'
            )
          : fieldText(node, { key: 'outputs', label: '', editor: 'schema' }, resources),
      ],
    };
  if (['end', 'block-end', 'assign'].includes(node.type))
    return { lines: [Object.keys(inputs).join(' · ') || tx('请配置返回字段')], issue };
  const selectedFields = summaryFields[node.type];
  const selected = selectedFields
    ? selectedFields
        .map((key) => fields.find((field) => field.key === key))
        .filter((field): field is FieldDefinition => !!field)
    : fields.filter((field) => !sensitive.test(field.key) && field.editor !== 'tools').slice(0, 2);
  return {
    lines: selected
      .map((field) => `${field.label} · ${fieldText(node, field, resources)}`)
      .slice(0, 2),
    issue,
  };
}
