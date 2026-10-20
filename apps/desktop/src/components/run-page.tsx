/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { useEffect, useState, type ReactNode } from 'react';

import { Check, CircleAlert, CircleMinus, Loader2, PanelRightClose, Square, X } from 'lucide-react';

import type {
  Run,
  RuntimeEvent,
  Session,
  Workflow,
  WorkflowNode,
  WorkflowSchema,
} from '../lib/types';
import { useProjectApi } from '../lib/project-context';
import { errorText, t, tx } from '../lib/i18n';
import { executionLabel, eventData } from '../lib/execution-samples';
import { WorkspaceHeader } from './workspace-header';
import { Button } from './ui/button';
import { flattenNodes } from './node-inspector/model';

export function RunPage({
  id,
  workflows,
  sessions,
  onWorkflow,
  onSession,
  headerLeading,
  documentTabs,
  onClose,
  onCollapse,
}: {
  id: string;
  workflows: Workflow[];
  sessions: Session[];
  onWorkflow: (id: string) => void;
  onSession: (id: string) => void;
  headerLeading?: ReactNode;
  documentTabs?: ReactNode;
  onClose?: () => void;
  onCollapse?: () => void;
}) {
  const api = useProjectApi();
  const [detail, setDetail] = useState<{
    run: Run;
    events: RuntimeEvent[];
    nextAfter?: number | null;
    models?: { workflowId: string; nodeId: string; model: import('../lib/models').ModelTrace }[];
    manifest?: {
      workflows: { workflowId: string; name: string; revision: number; schemaHash: string }[];
    };
    schema: WorkflowSchema | null;
    nodeTest?: { node: WorkflowNode } | null;
  } | null>(null);
  const [error, setError] = useState('');
  const [loadingMore, setLoadingMore] = useState(false);
  const [pageError, setPageError] = useState('');
  const [definition, setDefinition] = useState(false);
  useEffect(() => {
    setDetail(null);
    setError('');
    setDefinition(false);
    setPageError('');
    setLoadingMore(false);
    const controller = new AbortController();
    let timer: ReturnType<typeof setTimeout>;
    async function load() {
      try {
        const next = await api<NonNullable<typeof detail>>(
          `/api/runs/${id}`,
          'GET',
          undefined,
          controller.signal
        );
        if (controller.signal.aborted) return;
        setDetail(next);
        setError('');
        if (next.run.status === 'running') timer = setTimeout(load, 700);
      } catch (cause) {
        if (!controller.signal.aborted) setError((cause as Error).message);
      }
    }
    void load();
    return () => {
      controller.abort();
      clearTimeout(timer);
    };
  }, [id, api]);
  if (error)
    return (
      <div className="flex h-full flex-col">
        <WorkspaceHeader title={tx('运行详情')} leading={headerLeading} />
        <p role="alert" className="p-6 text-sm text-destructive">
          {errorText(error)}
        </p>
      </div>
    );
  if (!detail)
    return (
      <div className="flex h-full flex-col">
        <WorkspaceHeader title={tx('运行详情')} leading={headerLeading} />
        <p className="p-6 text-sm text-muted-foreground">{t('loading')}</p>
      </div>
    );
  const { run, events } = detail;
  const schema =
    detail.schema || (detail.nodeTest ? { nodes: [detail.nodeTest.node], edges: [] } : null);
  const workflow = workflows.find((item) => item.id === run.workflowId);
  const nodes = schema ? flattenNodes(schema.nodes) : [];
  return (
    <section className="flex h-full min-h-0 flex-col" aria-label={tx('运行详情')}>
      <WorkspaceHeader
        leading={headerLeading}
        title={documentTabs || workflow?.name || tx('运行详情')}
      >
        {(onCollapse || onClose) && (
          <Button
            variant="ghost"
            size="icon"
            aria-label={onCollapse ? tx('收起工作台') : tx('关闭运行详情')}
            onClick={onCollapse || onClose}
          >
            {onCollapse ? <PanelRightClose /> : <X />}
          </Button>
        )}
      </WorkspaceHeader>
      <article className="min-h-0 flex-1 overflow-auto p-6">
        <div className="mb-6 flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
              {run.status === 'running' ? (
                <Loader2 size={13} className="animate-spin" />
              ) : run.status === 'succeeded' ? (
                <Check size={13} />
              ) : run.status === 'failed' ? (
                <CircleAlert size={13} className="text-destructive" />
              ) : (
                <CircleMinus size={13} />
              )}
              {t(run.status as 'running') || run.status} ·{' '}
              {new Date(run.createdAt).toLocaleString()}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" onClick={() => setDefinition((value) => !value)}>
              {definition ? tx('返回结果') : tx('查看当时定义')}
            </Button>
            {workflow && (
              <Button variant="outline" size="sm" onClick={() => onWorkflow(workflow.id)}>
                {tx('编辑当前工作流')}
              </Button>
            )}
            {run.status === 'running' && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  void api(`/api/runs/${id}/cancel`, 'POST', {}).catch((cause) =>
                    setError(cause.message)
                  );
                }}
              >
                <Square />
                {tx('停止运行')}
              </Button>
            )}
          </div>
        </div>
        <div className="mb-6 flex flex-wrap gap-8 border-y border-border py-4 text-sm">
          <div>
            <p className="mb-1 text-xs text-muted-foreground">{tx('执行版本')}</p>v{run.revision} ·{' '}
            {tx('当时快照')}
          </div>
          <div>
            <p className="mb-1 text-xs text-muted-foreground">{tx('发起来源')}</p>
            {run.sessionId ? (
              <button
                className="underline underline-offset-4"
                onClick={() => onSession(run.sessionId!)}
              >
                {sessions.find((item) => item.id === run.sessionId)?.title || tx('项目会话')}
              </button>
            ) : (
              tx('手动或外部工具')
            )}
          </div>
          {run.testNodeId && (
            <div>
              <p className="mb-1 text-xs text-muted-foreground">{tx('节点测试')}</p>
              {(nodes.find((item) => item.id === run.testNodeId)?.data.title as string) ||
                run.testNodeId}
            </div>
          )}
        </div>
        {definition ? (
          <section>
            <h2 className="mb-4 text-sm font-medium">{tx('只读执行定义')}</h2>
            <div className="mb-5 flex flex-wrap gap-3">
              {nodes.map((node) => (
                <span key={node.id} className="rounded-lg border border-border px-3 py-2 text-sm">
                  {String(node.data.title || node.type)}
                </span>
              ))}
            </div>
            <details className="text-xs text-muted-foreground">
              <summary>{t('schema')}</summary>
              <pre className="mt-3 whitespace-pre-wrap break-all rounded-lg bg-secondary p-4">
                {JSON.stringify(schema, null, 2)}
              </pre>
            </details>
          </section>
        ) : (
          <>
            <h2 className="mb-3 text-sm font-medium">{t('output')}</h2>
            <pre
              className={`max-h-80 overflow-auto whitespace-pre-wrap break-all rounded-xl bg-secondary/60 p-4 text-xs ${
                run.error ? 'text-destructive' : ''
              }`}
            >
              {run.error ? errorText(run.error) : JSON.stringify(run.outputs, null, 2)}
            </pre>
            <details className="mt-4 text-xs text-muted-foreground">
              <summary>{t('input')}</summary>
              <pre className="mt-2 whitespace-pre-wrap break-all">
                {JSON.stringify(run.inputs, null, 2)}
              </pre>
            </details>
            {!!detail.models?.length && (
              <details className="rounded-lg border border-border p-3 text-xs">
                <summary className="cursor-pointer font-medium">
                  {tx('模型执行快照')} · {detail.models.length}
                </summary>
                <div className="mt-3 space-y-3">
                  {detail.models.map((entry) => (
                    <div key={`${entry.workflowId}:${entry.nodeId}`}>
                      <p>
                        {entry.model.modelName} · {entry.model.connectionName}
                      </p>
                      <code className="block break-all text-muted-foreground">
                        {entry.nodeId} · {entry.model.upstreamModel}
                      </code>
                      <pre className="mt-1 whitespace-pre-wrap text-muted-foreground">
                        {JSON.stringify(entry.model.parameters, null, 2)}
                      </pre>
                    </div>
                  ))}
                </div>
              </details>
            )}
            {!!detail.manifest?.workflows.length && (
              <details className="mt-4 text-xs text-muted-foreground">
                <summary>
                  {tx('执行依赖快照')} · {detail.manifest.workflows.length}
                </summary>
                <ul className="mt-2 space-y-2">
                  {detail.manifest.workflows.map((entry) => (
                    <li key={entry.workflowId} className="flex flex-wrap gap-2">
                      <span>
                        {entry.name} · v{entry.revision}
                      </span>
                      <code title={entry.schemaHash}>{entry.schemaHash.slice(0, 12)}</code>
                    </li>
                  ))}
                </ul>
              </details>
            )}
            <h2 className="mb-3 mt-7 text-sm font-medium">{t('details')}</h2>
            {events
              .filter((event) => event.kind.startsWith('node_'))
              .map((event) => {
                const data = eventData(event);
                return (
                  <div
                    key={event.sequence}
                    className="flex flex-wrap items-center justify-between gap-3 border-b border-border py-2 text-xs"
                  >
                    <span>
                      {String(
                        data.workflowId && data.workflowId !== run.workflowId
                          ? `${
                              detail.manifest?.workflows.find(
                                (entry) => entry.workflowId === data.workflowId
                              )?.name || data.workflowId
                            } / ${data.nodeId}`
                          : nodes.find((item) => item.id === data.nodeId)?.data.title || data.nodeId
                      )}{' '}
                      <span className="text-muted-foreground">{executionLabel(data)}</span>
                    </span>
                    <span
                      className={
                        event.kind === 'node_failed' ? 'text-destructive' : 'text-muted-foreground'
                      }
                    >
                      {tx(
                        (
                          {
                            node_started: '开始',
                            node_finished: '完成',
                            node_failed: '失败',
                            node_skipped: '跳过',
                            node_waiting: '等待汇合',
                            node_canceled: '取消',
                          } as Record<string, string>
                        )[event.kind] || event.kind
                      )}
                    </span>
                  </div>
                );
              })}
            {detail.nextAfter && run.status !== 'running' && (
              <Button
                className="mt-4"
                size="sm"
                variant="ghost"
                disabled={loadingMore}
                onClick={() => {
                  setLoadingMore(true);
                  setPageError('');
                  void api<NonNullable<typeof detail>>(`/api/runs/${id}?after=${detail.nextAfter}`)
                    .then((page) =>
                      setDetail((current) =>
                        current?.run.id === page.run.id
                          ? {
                              ...current,
                              nextAfter: page.nextAfter,
                              events: [
                                ...new Map(
                                  [...current.events, ...page.events].map((event) => [
                                    event.sequence,
                                    event,
                                  ])
                                ).values(),
                              ],
                            }
                          : current
                      )
                    )
                    .catch((cause) => setPageError(cause.message))
                    .finally(() => setLoadingMore(false));
                }}
              >
                {loadingMore ? t('loading') : tx('加载更多执行记录')}
              </Button>
            )}
            {pageError && (
              <p role="alert" className="mt-2 text-xs text-destructive">
                {errorText(pageError)}
              </p>
            )}
          </>
        )}
      </article>
    </section>
  );
}
