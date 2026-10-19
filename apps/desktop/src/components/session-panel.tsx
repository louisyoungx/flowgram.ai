/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react';

import {
  ArrowUp,
  Loader2,
  MoreHorizontal,
  PanelRight,
  PanelRightClose,
  Square,
} from 'lucide-react';

import { workflowActivity } from '../lib/workbench';
import { useConversation } from '../lib/use-conversation';
import type {
  ConversationInput,
  DeliveryMode,
  ModelSettings,
  Project,
  Run,
  Session,
  Workflow,
} from '../lib/types';
import { useProjectApi } from '../lib/project-context';
import { errorText, t, tx } from '../lib/i18n';
import { WorkspaceHeader } from './workspace-header';
import { Select } from './ui/select';
import { MenuButton } from './ui/menu-button';
import { Button } from './ui/button';
import { ConversationQueue, ConversationTimeline } from './conversation-timeline';

interface Draft {
  content: string;
  workflowId: string;
}
export function SessionPanel({
  project,
  sessionId,
  sessionEpoch,
  sessions,
  workflows,
  runs,
  model,
  online,
  ready,
  referenceIntent,
  onCreated,
  onChanged,
  onOpenWorkflow,
  onOpenRun,
  onSettings,
  headerLeading,
  workbenchOpen,
  onToggleWorkbench,
  onNewSession,
  onActivity,
  onTurn,
}: {
  project: Project;
  sessionId: string | null;
  sessionEpoch: number;
  sessions: Session[];
  workflows: Workflow[];
  runs: Run[];
  model: ModelSettings | null;
  online: boolean;
  ready: boolean;
  referenceIntent?: { workflowId: string | null; sequence: number };
  onCreated: (id: string, previous: string | null) => void;
  onChanged: () => void;
  onOpenWorkflow: (id: string) => void;
  onOpenRun: (run: Run) => void;
  onSettings: () => void;
  headerLeading?: ReactNode;
  workbenchOpen: boolean;
  onToggleWorkbench: (turnId: string | null) => void;
  onNewSession: () => void;
  onActivity: (activity: NonNullable<ReturnType<typeof workflowActivity>>) => void;
  onTurn: (turnId: string | null) => void;
}) {
  const api = useProjectApi();
  const conversation = useConversation(sessionId, ready, (item) => {
    const activity = workflowActivity(item);
    if (activity) onActivity(activity);
  });
  const key = sessionId || `new.${sessionEpoch}`;
  const storageKey = `flowgram.compose.v2.${project.id}`;
  const [drafts, setDrafts] = useState<Record<string, Draft>>(() => {
    try {
      return JSON.parse(sessionStorage.getItem(storageKey) || '{}');
    } catch {
      return {};
    }
  });
  const draft = drafts[key] || { content: '', workflowId: '' };
  const draftsRef = useRef(drafts);
  draftsRef.current = drafts;
  const scope = useRef(sessionId);
  scope.current = sessionId;
  const [sending, setSending] = useState<Set<string>>(new Set());
  const [delivery, setDelivery] = useState<DeliveryMode>('queue');
  const [steerTarget, setSteerTarget] = useState<string | null>(null);
  const [error, setError] = useState('');
  const textarea = useRef<HTMLTextAreaElement>(null);
  useLayoutEffect(() => {
    const element = textarea.current;
    if (!element) return;
    const resize = () => {
      if (!element.clientWidth) return;
      element.style.height = '0px';
      element.style.height = `${Math.max(48, Math.min(element.scrollHeight, 160))}px`;
      element.style.overflowY = element.scrollHeight > 160 ? 'auto' : 'hidden';
    };
    resize();
    let width = element.clientWidth;
    const observer = new ResizeObserver(() => {
      if (element.clientWidth === width) return;
      width = element.clientWidth;
      resize();
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, [draft.content, key]);
  const active = Object.values(conversation.state.turns).find((turn) =>
    ['running', 'stopping'].includes(turn.status)
  );
  useEffect(() => {
    onTurn(active?.id || null);
  }, [active?.id, sessionId]);
  const staleSteer =
    delivery === 'steer' && (!active || active.id !== steerTarget || active.status !== 'running');
  function updateDraft(patch: Partial<Draft>, target = key) {
    setDrafts((current) => ({
      ...current,
      [target]: { ...(current[target] || { content: '', workflowId: '' }), ...patch },
    }));
  }
  useEffect(() => {
    sessionStorage.setItem(storageKey, JSON.stringify(drafts));
  }, [drafts, storageKey]);
  useEffect(() => {
    if (referenceIntent) updateDraft({ workflowId: referenceIntent.workflowId || '' });
  }, [referenceIntent?.sequence]);
  useEffect(() => {
    setDelivery('queue');
    setSteerTarget(null);
    setError('');
  }, [sessionId, sessionEpoch]);
  async function send() {
    if (!draft.content.trim() || sending.has(key) || staleSteer) return;
    if (!model?.configured) {
      onSettings();
      return;
    }
    const submitted = { ...draft };
    const previous = sessionId;
    setSending((values) => new Set(values).add(key));
    setError('');
    let current = sessionId;
    try {
      if (!current) {
        const created = await api<Session>('/api/sessions', 'POST', {
          projectId: project.id,
          title: submitted.content.trim().slice(0, 45),
        });
        current = created.id;
        updateDraft(submitted, current);
        setSending((values) => new Set(values).add(current!));
        onCreated(current, previous);
      }
      const request = {
        content: submitted.content,
        deliveryMode: delivery,
        expectedTurnId: delivery === 'steer' ? steerTarget : undefined,
        references: submitted.workflowId ? { workflowId: submitted.workflowId } : null,
      };
      const pendingKey = `flowgram.pending.v2.${project.id}.${current}`;
      let pending: { request: typeof request; clientInputId: string } | null = null;
      try {
        pending = JSON.parse(sessionStorage.getItem(pendingKey) || 'null');
      } catch {
        /* New operation. */
      }
      if (!pending || JSON.stringify(pending.request) !== JSON.stringify(request))
        pending = { request, clientInputId: crypto.randomUUID() };
      sessionStorage.setItem(pendingKey, JSON.stringify(pending));
      await api<ConversationInput>(`/api/sessions/${current}/inputs`, 'POST', {
        ...request,
        clientInputId: pending.clientInputId,
      });
      sessionStorage.removeItem(pendingKey);
      for (const target of new Set([key, current]))
        if ((draftsRef.current[target]?.content || submitted.content) === submitted.content)
          updateDraft({ content: '' }, target);
      if (scope.current === current) {
        setDelivery('queue');
        setSteerTarget(null);
        await conversation.reload();
      }
      onChanged();
    } catch (cause) {
      setError((cause as Error).message);
      onChanged();
    } finally {
      setSending((values) => {
        const next = new Set(values);
        next.delete(key);
        if (current) next.delete(current);
        return next;
      });
    }
  }
  return (
    <section
      className="session-panel flex h-full min-h-0 min-w-0 flex-col bg-background"
      aria-label={tx('项目会话')}
    >
      <WorkspaceHeader
        title={sessions.find((item) => item.id === sessionId)?.title || t('newSession')}
        leading={headerLeading}
      >
        <MenuButton
          label={tx('会话更多操作')}
          commands={[
            { id: 'copy', label: tx('复制会话名称') },
            { id: 'new', label: t('newSession') },
          ]}
          onCommand={(id) => {
            if (id === 'new') onNewSession();
            else
              void navigator.clipboard
                .writeText(sessions.find((item) => item.id === sessionId)?.title || t('newSession'))
                .catch((cause) => setError(cause.message));
          }}
        >
          <MoreHorizontal />
        </MenuButton>
        <Button
          variant="ghost"
          size="icon"
          aria-label={workbenchOpen ? tx('收起工作台') : tx('打开工作台')}
          title={workbenchOpen ? tx('收起工作台') : tx('打开工作台')}
          aria-pressed={workbenchOpen}
          onClick={() => onToggleWorkbench(active?.id || null)}
        >
          {workbenchOpen ? <PanelRightClose /> : <PanelRight />}
        </Button>
      </WorkspaceHeader>
      {!sessionId ? (
        <div className="flex min-h-0 flex-1 items-center justify-center p-8">
          <div className="max-w-md">
            <h2 className="text-xl font-medium">{tx('一起完善这个项目')}</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {tx('会话中的工作流会保存在项目里。选择引用，或直接描述目标。')}
            </p>
          </div>
        </div>
      ) : (
        <ConversationTimeline
          key={sessionId}
          state={conversation.state}
          retry={conversation.retry}
          runs={runs}
          workflows={workflows}
          openWorkflow={onOpenWorkflow}
          openRun={onOpenRun}
          followUp={(content) => updateDraft({ content })}
          loadOlder={conversation.loadOlder}
          loadingOlder={conversation.loadingOlder}
          error={conversation.error}
        />
      )}
      {error && (
        <p role="alert" className="mx-4 mb-2 text-xs text-destructive">
          {errorText(error)}
        </p>
      )}
      <div className="conversation-composer mx-auto w-full max-w-[800px] shrink-0 px-6 pb-5 pt-3">
        <ConversationQueue
          state={conversation.state}
          active={active}
          reload={conversation.reload}
        />
        <div className="composer-surface p-2.5">
          {(active || delivery === 'steer') && (
            <div className="mb-1 flex justify-end">
              <Select
                variant="ghost"
                className="composer-delivery"
                aria-label={tx('输入投递方式')}
                value={delivery}
                onValueChange={(value) => {
                  setDelivery(value as DeliveryMode);
                  setSteerTarget(value === 'steer' ? active?.id || null : null);
                }}
                options={[
                  { value: 'queue', label: tx('下一轮执行') },
                  {
                    value: 'steer',
                    label: tx('补充本轮'),
                    disabled: !active || active.status !== 'running',
                  },
                ]}
              />
            </div>
          )}
          <textarea
            ref={textarea}
            rows={2}
            aria-label={tx('消息输入')}
            className="composer-textarea block max-h-40 min-h-12 w-full resize-none bg-transparent px-1.5 py-1.5 text-sm leading-6 outline-none"
            value={draft.content}
            placeholder={t('placeholder')}
            onChange={(event) => updateDraft({ content: event.target.value })}
            onKeyDown={(event) => {
              if (event.key === 'Enter' && !event.shiftKey && !event.nativeEvent.isComposing) {
                event.preventDefault();
                void send();
              }
            }}
          />
          <div className="mt-1 flex min-w-0 items-center justify-between gap-1">
            <div className="flex min-w-0 flex-1 items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                className="max-w-32 min-w-0 shrink justify-start px-1.5 text-muted-foreground"
                onClick={onSettings}
              >
                <span className="truncate">
                  {model?.configured ? model.displayName : t('modelMissing')}
                </span>
              </Button>
              <Select
                variant="ghost"
                className="composer-context"
                title={
                  workflows.find((flow) => flow.id === draft.workflowId)?.name || tx('项目上下文')
                }
                aria-label={tx('本次引用')}
                value={draft.workflowId}
                onValueChange={(workflowId) => updateDraft({ workflowId })}
                options={[
                  { value: '', label: tx('项目上下文') },
                  ...workflows.map((item) => ({ value: item.id, label: item.name })),
                ]}
              />
            </div>
            <div className="flex shrink-0 items-center gap-1">
              {active && (
                <Button
                  variant="outline"
                  size="icon"
                  aria-label={tx('停止本轮')}
                  disabled={active.status === 'stopping'}
                  onClick={() => {
                    void api(`/api/sessions/${sessionId}/turns/${active.id}/stop`, 'POST', {})
                      .then(conversation.reload)
                      .catch((cause) => setError(cause.message));
                  }}
                >
                  <Square />
                </Button>
              )}
              <Button
                size="icon"
                className="composer-send"
                aria-label={active ? tx('加入待办') : t('send')}
                disabled={!online || sending.has(key) || !draft.content.trim() || staleSteer}
                onClick={() => void send()}
              >
                {sending.has(key) ? <Loader2 className="animate-spin" /> : <ArrowUp />}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
