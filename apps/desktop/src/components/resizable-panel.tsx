/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';

import { cn } from '../lib/utils';

export function clampPanelSize(value: number, min: number, max: number, available: number) {
  const ceiling = Math.max(0, Math.min(max, available));
  return Math.min(ceiling, Math.max(Math.min(min, ceiling), Number.isFinite(value) ? value : min));
}
export function ResizablePanel({
  children,
  storageKey,
  label,
  initial,
  min,
  max,
  reserve = 0,
  edge = 'right',
  fill = false,
  hidden = false,
  className,
  axis = 'horizontal',
}: {
  children: ReactNode;
  storageKey: string;
  label: string;
  initial: number;
  min: number;
  max: number;
  reserve?: number;
  edge?: 'left' | 'right';
  fill?: boolean;
  hidden?: boolean;
  className?: string;
  axis?: 'horizontal' | 'vertical';
}) {
  const container = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState(() => {
    const value = Number(localStorage.getItem(storageKey));
    return value > 0 ? Math.min(max, Math.max(min, value)) : initial;
  });
  const [available, setAvailable] = useState(max);
  const drag = useRef<{ start: number; size: number; latest: number } | null>(null);
  const [dragging, setDragging] = useState(false);
  const vertical = axis === 'vertical';
  const bounded = clampPanelSize(size, min, max, available);
  useEffect(() => {
    const reset = () => {
      setSize(initial);
      localStorage.removeItem(storageKey);
    };
    window.addEventListener('flowgram:reset-layout', reset);
    return () => window.removeEventListener('flowgram:reset-layout', reset);
  }, [initial, storageKey]);
  useEffect(() => {
    const parent = container.current?.parentElement;
    if (!parent) return;
    const observer = new ResizeObserver(([entry]) =>
      setAvailable(
        Math.max(0, (vertical ? entry.contentRect.height : entry.contentRect.width) - reserve)
      )
    );
    observer.observe(parent);
    return () => observer.disconnect();
  }, [reserve, vertical]);
  useEffect(() => {
    if (!dragging) return;
    document.documentElement.classList.add(vertical ? 'resizing-row' : 'resizing-column');
    return () =>
      document.documentElement.classList.remove(vertical ? 'resizing-row' : 'resizing-column');
  }, [dragging, vertical]);
  function finish() {
    if (drag.current) localStorage.setItem(storageKey, String(drag.current.latest));
    drag.current = null;
    setDragging(false);
  }
  const style: CSSProperties = hidden
    ? { display: 'none' }
    : fill
    ? { flex: '1 1 0%' }
    : { flex: `0 0 ${bounded}px`, [vertical ? 'height' : 'width']: bounded };
  return (
    <div
      ref={container}
      style={style}
      className={cn('resizable-panel relative flex min-h-0 min-w-0 flex-col', className)}
      data-resizing={dragging || undefined}
    >
      {children}
      {!fill && !hidden && (
        <div
          role="separator"
          aria-label={label}
          aria-orientation={vertical ? 'horizontal' : 'vertical'}
          aria-valuenow={Math.round(bounded)}
          aria-valuemin={Math.min(min, available)}
          aria-valuemax={Math.min(max, available)}
          tabIndex={0}
          className={cn(
            'panel-divider',
            vertical
              ? 'panel-divider-row'
              : edge === 'left'
              ? 'panel-divider-left'
              : 'panel-divider-right'
          )}
          onDoubleClick={() => {
            setSize(initial);
            localStorage.removeItem(storageKey);
          }}
          onKeyDown={(event) => {
            const delta =
              event.key === (vertical ? 'ArrowUp' : 'ArrowLeft')
                ? -16
                : event.key === (vertical ? 'ArrowDown' : 'ArrowRight')
                ? 16
                : 0;
            if (!delta) return;
            event.preventDefault();
            const next = clampPanelSize(
              bounded + delta * (edge === 'left' ? -1 : 1),
              min,
              max,
              available
            );
            setSize(next);
            localStorage.setItem(storageKey, String(next));
          }}
          onPointerDown={(event) => {
            if (event.button !== 0) return;
            event.preventDefault();
            event.currentTarget.setPointerCapture(event.pointerId);
            drag.current = {
              start: vertical ? event.clientY : event.clientX,
              size: bounded,
              latest: bounded,
            };
            setDragging(true);
          }}
          onPointerMove={(event) => {
            if (!drag.current) return;
            const delta =
              ((vertical ? event.clientY : event.clientX) - drag.current.start) *
              (edge === 'left' ? -1 : 1);
            const next = clampPanelSize(drag.current.size + delta, min, max, available);
            drag.current.latest = next;
            setSize(next);
          }}
          onPointerUp={finish}
          onPointerCancel={finish}
          onLostPointerCapture={finish}
        />
      )}
    </div>
  );
}
