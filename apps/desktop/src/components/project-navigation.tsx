/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import {
  Boxes,
  History,
  House,
  Loader2,
  MessageCircle,
  PanelLeftClose,
  Plus,
  Search,
  Settings2,
  Workflow as WorkflowIcon,
} from 'lucide-react';

import type { Workbench } from '../lib/workbench';
import { cn } from '../lib/utils';
import type { Project, Snapshot } from '../lib/types';
import { t, tx } from '../lib/i18n';
import { Select } from './ui/select';
import { Button } from './ui/button';

export function ProjectMenu({
  projects,
  projectId,
  onSelect,
  onAction,
  compact = false,
}: {
  projects: Project[];
  projectId: string;
  onSelect: (id: string) => void;
  onAction: (action: 'project' | 'open' | 'details') => void;
  compact?: boolean;
}) {
  return (
    <Select
      variant="ghost"
      aria-label={tx('项目菜单')}
      title={projects.find((item) => item.id === projectId)?.name || tx('项目')}
      value={projectId ? `project:${projectId}` : ''}
      placeholder={tx('选择项目')}
      className={cn('project-menu', compact && 'max-w-44')}
      onValueChange={(value) =>
        value.startsWith('project:')
          ? onSelect(value.slice(8))
          : onAction(value as 'project' | 'open' | 'details')
      }
      options={[
        ...projects.map((project) => ({ value: `project:${project.id}`, label: project.name })),
        { value: 'project', label: t('newProject'), separatorBefore: !!projects.length },
        { value: 'open', label: tx('打开项目') },
        ...(projectId ? [{ value: 'details', label: tx('项目详情'), separatorBefore: true }] : []),
      ]}
    />
  );
}
export function ProjectSidebar({
  projectId,
  projects,
  snapshot,
  bench,
  onSelectProject,
  onProjectAction,
  onCollapse,
  onSearch,
  onNewSession,
  onNewWorkflow,
  onSession,
  onWorkflow,
  onRuns,
  onResources,
  onSettings,
  onHome,
}: {
  projectId: string;
  projects: Project[];
  snapshot: Snapshot;
  bench: Workbench;
  onSelectProject: (id: string) => void;
  onProjectAction: (action: 'project' | 'open' | 'details') => void;
  onCollapse: () => void;
  onSearch: () => void;
  onNewSession: () => void;
  onNewWorkflow: () => void;
  onSession: (id: string) => void;
  onWorkflow: (id: string) => void;
  onRuns: () => void;
  onResources: () => void;
  onSettings: () => void;
  onHome: () => void;
}) {
  return (
    <aside className="flex min-h-0 flex-1 flex-col bg-sidebar" aria-label={tx('项目导航')}>
      <header className="flex h-12 shrink-0 items-center gap-1 px-2" data-tauri-drag-region>
        <ProjectMenu
          projects={projects}
          projectId={projectId}
          onSelect={onSelectProject}
          onAction={onProjectAction}
        />
        <Button
          variant="ghost"
          size="icon"
          aria-label={tx('搜索项目内容')}
          title={tx('搜索项目内容')}
          disabled={!projectId}
          onClick={onSearch}
        >
          <Search size={15} />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          aria-label={tx('收起侧栏')}
          title={tx('收起侧栏')}
          onClick={onCollapse}
        >
          <PanelLeftClose size={15} />
        </Button>
      </header>
      <div className="min-h-0 flex-1 overflow-y-auto px-2 pb-4">
        <nav className="mb-5 mt-3" aria-label={tx('项目操作')}>
          {[
            {
              label: tx('主页'),
              icon: House,
              action: onHome,
              selected: bench.view.kind === 'workflows',
            },
            { label: tx('新建会话'), icon: MessageCircle, action: onNewSession },
            { label: t('newWorkflow'), icon: WorkflowIcon, action: onNewWorkflow },
            { label: tx('搜索'), icon: Search, action: onSearch },
            {
              label: tx('运行记录'),
              icon: History,
              action: onRuns,
              selected: bench.view.kind === 'runs' || bench.view.kind === 'run',
            },
            {
              label: tx('项目资源'),
              icon: Boxes,
              action: onResources,
              selected: bench.view.kind === 'resources',
            },
          ].map(({ label, icon: Icon, action, selected }) => (
            <button
              key={label}
              className={cn('sidebar-row', selected && projectId && 'sidebar-selected')}
              disabled={!projectId}
              aria-current={selected && projectId ? 'page' : undefined}
              onClick={action}
            >
              <Icon size={16} strokeWidth={1.6} />
              <span className="truncate">{label}</span>
            </button>
          ))}
        </nav>
        {projectId ? (
          <>
            <section aria-label={tx('工作流')} className="mb-5">
              <div className="mb-1 flex h-8 items-center justify-between pl-2.5">
                <h2 className="flex items-center gap-2.5 text-xs font-medium text-muted-foreground">
                  <WorkflowIcon size={15} strokeWidth={1.6} aria-hidden="true" />
                  {tx('工作流')}
                </h2>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label={t('newWorkflow')}
                  title={t('newWorkflow')}
                  onClick={onNewWorkflow}
                >
                  <Plus size={14} />
                </Button>
              </div>
              {snapshot.workflows.map((workflow) => {
                const selected = bench.view.kind === 'workflow' && bench.view.id === workflow.id;
                return (
                  <button
                    key={workflow.id}
                    title={workflow.name}
                    className={cn('sidebar-row sidebar-object-row', selected && 'sidebar-selected')}
                    aria-current={selected ? 'page' : undefined}
                    onClick={() => onWorkflow(workflow.id)}
                  >
                    <span className="truncate">{workflow.name}</span>
                  </button>
                );
              })}
              {!snapshot.workflows.length && (
                <p className="py-2 pl-[35px] pr-2 text-xs text-muted-foreground">
                  {t('emptyWorkflows')}
                </p>
              )}
            </section>
            <section aria-label={tx('会话')}>
              <div className="mb-1 flex h-8 items-center justify-between pl-2.5">
                <h2 className="flex items-center gap-2.5 text-xs font-medium text-muted-foreground">
                  <MessageCircle size={15} strokeWidth={1.6} aria-hidden="true" />
                  {tx('会话')}
                </h2>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label={tx('新建会话')}
                  title={tx('新建会话')}
                  onClick={onNewSession}
                >
                  <Plus size={14} />
                </Button>
              </div>
              {snapshot.sessions.map((session) => {
                const selected = bench.view.kind === 'session' && bench.sessionId === session.id;
                return (
                  <button
                    key={session.id}
                    title={session.title}
                    className={cn('sidebar-row sidebar-object-row', selected && 'sidebar-selected')}
                    aria-current={selected ? 'page' : undefined}
                    onClick={() => onSession(session.id)}
                  >
                    <span className="truncate">{session.title}</span>
                    {session.status === 'running' && (
                      <Loader2 size={12} className="ml-auto shrink-0 animate-spin" />
                    )}
                  </button>
                );
              })}
              {!snapshot.sessions.length && (
                <p className="py-2 pl-[35px] pr-2 text-xs text-muted-foreground">
                  {tx('还没有会话')}
                </p>
              )}
            </section>
          </>
        ) : (
          <p className="px-2 py-3 text-xs leading-6 text-muted-foreground">
            {tx('从项目菜单创建或打开工程。')}
          </p>
        )}
      </div>
      <footer className="shrink-0 px-2 py-3">
        <button className="sidebar-row" onClick={onSettings}>
          <Settings2 size={16} strokeWidth={1.6} />
          {t('settings')}
        </button>
      </footer>
    </aside>
  );
}
