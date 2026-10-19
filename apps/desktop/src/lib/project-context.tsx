/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { createContext, useContext, useMemo, type ReactNode } from 'react';

import { api } from './api';

export function projectApi(projectId: string) {
  return <T,>(path: string, method = 'GET', body?: unknown, signal?: AbortSignal) =>
    api<T>(path, method, body, signal, projectId);
}
const ProjectContext = createContext<{
  projectId: string;
  request: ReturnType<typeof projectApi>;
} | null>(null);
export function ProjectScope({ projectId, children }: { projectId: string; children: ReactNode }) {
  const value = useMemo(() => ({ projectId, request: projectApi(projectId) }), [projectId]);
  return <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>;
}
export function useProject() {
  const value = useContext(ProjectContext);
  if (!value) throw new Error('A project context is required');
  return value;
}
export function useProjectApi() {
  return useProject().request;
}
