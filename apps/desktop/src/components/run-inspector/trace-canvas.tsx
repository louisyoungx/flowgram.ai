/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */
import { lazy, Suspense, useEffect, useMemo, useRef } from 'react';

import type { CanvasHandle } from '../workflow-canvas';
import type { Workflow } from '../../lib/types';
import { tx } from '../../lib/i18n';

const Canvas = lazy(() =>
  import('../workflow-canvas').then((module) => ({
    default: module.WorkflowCanvas,
  }))
);
const noop = () => {};
export function TraceCanvas({
  snapshot,
  selectedId,
  statuses,
  edgeStates,
  onSelect,
  active,
}: {
  snapshot: Workflow;
  selectedId: string | null;
  statuses: Record<string, string>;
  edgeStates?: Record<string, string>;
  onSelect: (node: string) => void;
  active: boolean;
}) {
  const canvas = useRef<CanvasHandle>(null);
  const revealed = useRef<string | null>(null);
  const selected = useMemo(() => (selectedId ? [selectedId] : []), [selectedId]);
  useEffect(() => {
    if (selectedId && active && revealed.current !== selectedId) {
      canvas.current?.reveal(selectedId);
      revealed.current = selectedId;
    }
  }, [selectedId, active]);
  return (
    <Suspense fallback={<p className="p-4 text-xs text-muted-foreground">{tx('加载画布…')}</p>}>
      <Canvas
        ref={canvas}
        schema={snapshot.schema}
        readOnly
        selectedIds={selected}
        statuses={statuses}
        edgeStates={edgeStates}
        onNodeClick={onSelect}
        onOpen={onSelect}
        onChange={noop}
        onSelectionChange={noop}
        onMenu={noop}
        onAdd={noop}
        onCommand={noop}
        onDeleteConnections={noop}
        onConnectionError={noop}
        onEscape={() => false}
        renameId={null}
        onRename={noop}
        onEndRename={noop}
      />
    </Suspense>
  );
}
