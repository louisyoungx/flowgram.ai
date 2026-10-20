/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import {
  createContext,
  forwardRef,
  memo,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
} from 'react';

import { Check, Circle, Loader2, MoreHorizontal, Plus } from 'lucide-react';
import {
  EditorRenderer,
  Field,
  FreeLayoutEditorProvider,
  WorkflowNodeRenderer,
  WorkflowNodePortsData,
  WorkflowDragService,
  WorkflowHoverService,
  WorkflowLineEntity,
  WorkflowNodeEntity,
  SelectorBoxConfigEntity,
  WorkflowOperationBaseService,
  FreeOperationType,
  FlowNodeTransformData,
  Rectangle,
  useListenEvents,
  useNodeRender,
  type FreeLayoutProps,
  type WorkflowNodeProps,
  type FlowNodeEntity,
  type FreeLayoutPluginContext,
} from '@flowgram.ai/free-layout-editor';

import type { InsertionIntent, NodeCommand, Edge } from '../lib/workflow-editing';
import type { WorkflowNode, WorkflowSchema } from '../lib/types';
import { nodeCatalog, nodeSpec, nodeSummary } from '../lib/node-catalog';
import { tx, useLocale } from '../lib/i18n';
import {
  isLoop,
  portModels,
  portModelSignature,
  scopeFor,
  staticPorts,
} from '../lib/control-nodes';
import { WorkflowCanvasToolbar } from './workflow-canvas-toolbar';
import { InlineRename } from './ui/inline-rename';
import '@flowgram.ai/free-layout-editor/index.css';

function fitCanvas(ctx: FreeLayoutPluginContext | null) {
  if (!ctx) return;
  const bounds = ctx.document
    .getAllNodes()
    .map((node) => node.getData(FlowNodeTransformData).bounds);
  if (bounds.length)
    void ctx.playground.config
      .fitView(Rectangle.enlarge(bounds), false, 40)
      .then(() => ctx.document.linesManager.forceUpdate());
}

interface CanvasInteraction {
  click: (id: string) => void;
  open: (id: string) => void;
  menu: (id: string, event: ReactMouseEvent) => void;
  add: (intent: InsertionIntent) => void;
  addInside: (id: string, event: ReactMouseEvent) => void;
  select: (id: string, toggle?: boolean) => void;
  renameId: string | null;
  rename: (id: string, title: string) => void;
  endRename: () => void;
  suppressClick: () => boolean;
  readOnly: boolean;
}
const InteractionContext = createContext<CanvasInteraction>(null!);
const PortContext = createContext<ReturnType<typeof portModels>>({});
const ExecutionContext = createContext<Record<string, string>>({});
function NodeFields({ type }: { type: string }) {
  const interaction = useContext(InteractionContext);
  const statuses = useContext(ExecutionContext);
  const { node } = useNodeRender();
  const models = useContext(PortContext);
  const labels = models[node.id] || { input: [], output: [] };
  const rows = Math.max(labels.input.length, labels.output.length);
  const spec = nodeSpec(type);
  const Icon = spec.icon;
  const status = statuses[node.id];
  return (
    <>
      {!interaction.readOnly &&
        labels.output.map((port, index) => (
          <button
            key={port.id}
            type="button"
            className="node-port-add flow-canvas-not-draggable"
            style={{ top: rows > 1 ? 123 + index * 28 : 'calc(50% - 12px)' }}
            aria-label={tx('在「{0}」后添加节点', [port.label])}
            title={tx('在「{0}」后添加节点', [port.label])}
            onPointerDown={(event) => event.stopPropagation()}
            onClick={(event) => {
              event.stopPropagation();
              interaction.add({
                anchor: { x: event.clientX, y: event.clientY },
                source: { nodeId: node.id, portId: port.id },
                position: {
                  x: node.transform.position.x + 360,
                  y: node.transform.position.y + index * 80,
                },
              });
            }}
          >
            <Plus size={13} />
          </button>
        ))}
      <div className="workflow-node-heading">
        <span className={`node-icon node-tone-${spec.tone}`}>
          <Icon size={18} strokeWidth={1.7} />
        </span>
        <div className="min-w-0 flex-1">
          <Field<string> name="title">
            {({ field }) =>
              interaction.readOnly ? (
                <span
                  className="block truncate text-sm font-medium"
                  title={field.value || spec.title}
                >
                  {field.value || spec.title}
                </span>
              ) : (
                <InlineRename
                  value={field.value || spec.title}
                  editing={interaction.renameId === node.id}
                  onStart={() => {}}
                  onCommit={(title) => interaction.rename(node.id, title)}
                  onEnd={interaction.endRename}
                />
              )
            }
          </Field>
          <span className="node-type-label">{spec.title}</span>
        </div>
        {!interaction.readOnly && (
          <button
            type="button"
            className="node-config-button flow-canvas-not-draggable"
            aria-label={tx('节点更多操作')}
            onClick={(event) => {
              event.stopPropagation();
              interaction.menu(node.id, event);
            }}
          >
            <MoreHorizontal size={18} />
          </button>
        )}
      </div>
      <div className="node-content-summary">
        {type === 'start' ? (
          <Field<Record<string, unknown>> name="outputs">
            {({ field }) => <span>{nodeSummary(type, { outputs: field.value })}</span>}
          </Field>
        ) : (
          <Field<Record<string, unknown>> name="inputsValues">
            {({ field }) => <span>{nodeSummary(type, { inputsValues: field.value })}</span>}
          </Field>
        )}
      </div>
      {rows > 1 && (
        <div className="node-port-rows">
          {Array.from({ length: rows }, (_, index) => (
            <div className="node-port-row" key={index}>
              <span>{labels.input[index]?.label}</span>
              <span>{labels.output[index]?.label}</span>
            </div>
          ))}
        </div>
      )}
      <div className="node-footer">
        <span>{type === 'start' || type === 'block-start' ? tx('运行输入') : tx('输入')}</span>
        <span className="node-execution-state">
          {status === 'running' ? (
            <Loader2 size={12} className="animate-spin" />
          ) : status === 'succeeded' ? (
            <Check size={12} />
          ) : (
            <Circle size={8} />
          )}{' '}
          {status === 'running'
            ? tx('运行中')
            : status === 'succeeded'
            ? tx('已完成')
            : status === 'failed'
            ? tx('执行失败')
            : status === 'untested'
            ? tx('本次未测试')
            : status === 'pending'
            ? tx('未执行')
            : status === 'skipped'
            ? tx('已跳过')
            : status === 'waiting'
            ? tx('等待中')
            : status === 'canceled'
            ? tx('已取消')
            : status === 'interrupted'
            ? tx('已中断')
            : type === 'condition'
            ? tx('通过 / 否则')
            : tx('输出')}
        </span>
      </div>
    </>
  );
}
function NodeCard(props: WorkflowNodeProps) {
  const { node, form } = useNodeRender();
  const interaction = useContext(InteractionContext);
  const pointer = useRef({ x: 0, y: 0 });
  const models = useContext(PortContext);
  const height = models[node.id]?.height || 150;
  const transform = node.getData(FlowNodeTransformData);
  useListenEvents(transform.onDataChange);
  const container = isLoop(String(node.flowNodeType));
  return (
    <div
      data-workflow-node-id={node.id}
      data-execution-status={useContext(ExecutionContext)[node.id]}
      tabIndex={0}
      role="group"
      aria-label={String(form?.values?.title || nodeSpec(String(node.flowNodeType)).title)}
      onPointerDownCapture={(event) => {
        pointer.current = { x: event.clientX, y: event.clientY };
      }}
      onDragStartCapture={(event) => {
        if (
          interaction.readOnly ||
          (container && !(event.target as Element).closest('.workflow-node-heading')) ||
          (event.target as Element).closest('button,input,.flow-canvas-not-draggable')
        ) {
          event.preventDefault();
          event.stopPropagation();
        }
      }}
      onClickCapture={(event) => {
        if ((event.target as Element).closest('button,input')) return;
        if (event.metaKey || event.ctrlKey) {
          event.stopPropagation();
          interaction.select(node.id, true);
        }
      }}
      onClick={(event) => {
        event.stopPropagation();
        if ((event.target as Element).closest('button,input,[data-port-entity-id]')) return;
        if (
          Math.hypot(event.clientX - pointer.current.x, event.clientY - pointer.current.y) > 5 ||
          interaction.suppressClick()
        )
          return;
        if (!event.shiftKey && !event.metaKey && !event.ctrlKey) interaction.click(node.id);
      }}
      onDoubleClick={(event) => {
        event.stopPropagation();
        if ((event.target as Element).closest('button,input,[data-port-entity-id]')) return;
        if (interaction.readOnly) interaction.click(node.id);
        else if (container && !(event.target as Element).closest('.workflow-node-heading'))
          interaction.addInside(node.id, event);
        else interaction.open(node.id);
      }}
    >
      <WorkflowNodeRenderer
        node={props.node}
        className={`flowgram-node flowgram-node-${node.flowNodeType}`}
        style={
          container
            ? {
                width: transform.bounds.width || 720,
                height: transform.bounds.height || 330,
              }
            : { height }
        }
        portPrimaryColor="var(--foreground)"
        portSecondaryColor="var(--muted-foreground)"
        portBackgroundColor="var(--surface-panel)"
      >
        {form?.render()}
      </WorkflowNodeRenderer>
    </div>
  );
}
export interface CanvasHandle {
  fit: () => void;
  insertionPosition: () => { x: number; y: number } | undefined;
  select: (ids: string[]) => void;
  focus: () => void;
  undo: () => void;
  redo: () => void;
  reveal: (id: string) => void;
}
export const WorkflowCanvas = memo(
  forwardRef<
    CanvasHandle,
    {
      schema: WorkflowSchema;
      readOnly?: boolean;
      selectedIds?: string[];
      edgeStates?: Record<string, string>;
      onChange: (schema: WorkflowSchema) => void;
      onOpen: (id: string) => void;
      onNodeClick: (id: string) => void;
      onSelectionChange: (ids: string[]) => void;
      onMenu: (
        point: { x: number; y: number },
        ids: string[],
        edge?: Edge,
        intent?: InsertionIntent
      ) => void;
      onAdd: (intent: InsertionIntent) => void;
      onCommand: (command: NodeCommand | 'paste', ids: string[]) => void;
      onDeleteConnections: (edges: Edge[]) => void;
      onConnectionError: (message: string) => void;
      onEscape: () => boolean;
      renameId: string | null;
      onRename: (id: string, title: string) => void;
      onEndRename: () => void;
      statuses?: Record<string, string>;
      toolbarLeading?: ReactNode;
      toolbarTrailing?: ReactNode;
    }
  >(function WorkflowCanvas(
    {
      schema,
      readOnly = false,
      selectedIds,
      edgeStates,
      onChange,
      onOpen,
      onNodeClick,
      onSelectionChange,
      onMenu,
      onAdd,
      onCommand,
      onDeleteConnections,
      onConnectionError,
      onEscape,
      renameId,
      onRename,
      onEndRename,
      statuses = {},
      toolbarLeading,
      toolbarTrailing,
    },
    ref
  ) {
    const handlers = useRef({
      onOpen,
      onNodeClick,
      onSelectionChange,
      onMenu,
      onAdd,
      onCommand,
      onConnectionError,
    });
    handlers.current = {
      onOpen,
      onNodeClick,
      onSelectionChange,
      onMenu,
      onAdd,
      onCommand,
      onConnectionError,
    };
    const suppressed = useRef(false);
    const lineCanceled = useRef(false);
    const [lineAction, setLineAction] = useState<{
      edge: Edge;
      x: number;
      y: number;
      position: { x: number; y: number };
    } | null>(null);
    const disposables = useRef<Array<{ dispose: () => void }>>([]);
    const root = useRef<HTMLDivElement>(null);
    const portSignature = portModelSignature(schema);
    const locale = useLocale();
    const models = useMemo(() => portModels(schema), [portSignature, locale]);
    const portCache = useRef(new WeakMap<object, string>());
    function updatePorts(entity: FlowNodeEntity, model: WorkflowNode, graph: WorkflowSchema) {
      const layout = staticPorts(model, graph);
      const ports = layout.ports;
      if (!isLoop(model.type))
        entity.getData(FlowNodeTransformData).size = {
          width: 280,
          height: layout.height,
        };
      const signature = JSON.stringify(ports);
      if (portCache.current.get(entity) === signature) return;
      portCache.current.set(entity, signature);
      entity.getData(WorkflowNodePortsData).updateAllPorts(ports);
    }
    const callback = useRef(onChange);
    callback.current = onChange;
    const selectedRef = useRef(selectedIds);
    selectedRef.current = selectedIds;
    const latest = useRef(schema);
    latest.current = schema;
    const initial = useRef(schema);
    const ready = useRef(false);
    const context = useRef<FreeLayoutPluginContext | null>(null);
    const updating = useRef(false);
    const historyBusy = useRef(false);
    async function runHistory(redo = false) {
      const ctx = context.current;
      if (!ctx || readOnly || historyBusy.current) return;
      historyBusy.current = true;
      updating.current = true;
      try {
        await (redo ? ctx.history.redo() : ctx.history.undo());
      } catch (cause) {
        handlers.current.onConnectionError((cause as Error).message);
      } finally {
        updating.current = false;
        historyBusy.current = false;
        ctx.selection.selection = ctx.selection.selection.filter((entity) => !entity.disposed);
        callback.current(ctx.document.toJSON() as WorkflowSchema);
        ctx.playground.node.focus({ preventScroll: true });
      }
    }
    useImperativeHandle(
      ref,
      () => ({
        reveal(id) {
          const ctx = context.current;
          const node = ctx?.document.getNode(id);
          if (ctx && node)
            void ctx.playground.config.scrollToView({
              entities: [node],
              zoom: Math.max(ctx.playground.config.zoom, 0.6),
              easing: false,
            });
        },
        select(ids) {
          const ctx = context.current;
          if (!ctx) return;
          ctx.selection.selection = ctx.document
            .getAllNodes()
            .filter((node) => ids.includes(node.id));
        },
        focus() {
          context.current?.playground.node.focus({ preventScroll: true });
        },
        undo() {
          void runHistory();
        },
        redo() {
          void runHistory(true);
        },
        fit() {
          fitCanvas(context.current);
        },
        insertionPosition() {
          const center = context.current?.playground.config.getViewport(true).center;
          return center && { x: center.x - 140, y: center.y - 75 };
        },
      }),
      []
    );
    function sync(next: WorkflowSchema) {
      const document = context.current?.document;
      if (
        !document ||
        !ready.current ||
        updating.current ||
        JSON.stringify(document.toJSON()) === JSON.stringify(next)
      )
        return;
      updating.current = true;
      try {
        // The operation service records additions/removals and form changes in
        // one transaction. Document.fromJSON intentionally suppresses history.
        context.current!.operation.fromJSON(next);
      } finally {
        updating.current = false;
      }
    }
    useEffect(() => {
      sync(schema);
    }, [schema]);
    useEffect(() => {
      // Undo can restore entities before React receives their configuration.
      // Reconcile static definitions after the graph is present; movement never invalidates them.
      context.current?.document.getAllNodes().forEach((entity) => {
        const graph = scopeFor(latest.current, entity.id);
        const model = graph.nodes.find((node) => node.id === entity.id);
        if (model) updatePorts(entity, model, graph);
      });
    }, [portSignature]);
    useEffect(() => {
      const ctx = context.current;
      if (ctx && selectedIds)
        ctx.selection.selection = ctx.document
          .getAllNodes()
          .filter((node) => selectedIds.includes(node.id));
    }, [selectedIds]);
    const executionEdges = useRef(edgeStates);
    executionEdges.current = edgeStates;
    function updateExecutionEdges() {
      const ctx = context.current;
      if (!ctx || !executionEdges.current) return;
      for (const line of ctx.document.linesManager.getAllLines()) {
        const edge = line.toJSON() as Edge;
        const state =
          executionEdges.current[
            `${edge.sourceNodeID}:${edge.sourcePortID || ''}:${edge.targetNodeID}`
          ];
        line.highlightColor =
          state === 'active' ? 'var(--foreground)' : state === 'muted' ? 'var(--canvas-dot)' : '';
      }
    }
    useEffect(updateExecutionEdges, [edgeStates]);
    const props = useMemo<FreeLayoutProps>(
      () => ({
        readonly: readOnly,
        enableReadonlyNodeDragging: false,
        canDeleteNode: () => !readOnly,
        initialData: initial.current,
        onInit(ctx) {
          ctx.playground.config.updateConfig({ minZoom: 0.1 });
        },
        onReady(ctx) {
          context.current = ctx;
          const selector = ctx.playground.entityManager.getEntity<SelectorBoxConfigEntity>(
            SelectorBoxConfigEntity,
            true
          )!;
          const updateSelectionPhase = () => {
            const phase = selector.isMoving ? 'marquee' : 'idle';
            if (ctx.playground.node.dataset.selectionGesture !== phase)
              ctx.playground.node.dataset.selectionGesture = phase;
          };
          updateSelectionPhase();
          disposables.current.push(selector.onConfigChanged(updateSelectionPhase));
          // The public operation service and the history plugin's base service
          // can be distinct DI instances. Bridge programmatic moves so insertion
          // spacing is recorded inside the same transaction as the graph edit.
          if (
            ctx.operation !== ctx.get<WorkflowOperationBaseService>(WorkflowOperationBaseService)
          ) {
            disposables.current.push(
              ctx.operation.onNodePostionUpdate((event) => {
                ctx.history.pushOperation(
                  {
                    type: FreeOperationType.dragNodes,
                    value: {
                      ids: [event.node.id],
                      value: [event.newPosition],
                      oldValue: [event.oldPosition],
                    },
                  },
                  { noApply: true }
                );
              })
            );
          }
          disposables.current.push(
            ctx.selection.onSelectionChanged(() => {
              handlers.current.onSelectionChange(
                ctx.selection.selection
                  .filter((entity) => entity instanceof WorkflowNodeEntity && !entity.disposed)
                  .map((entity) => entity.id)
              );
            })
          );
          disposables.current.push(
            ctx.get<WorkflowDragService>(WorkflowDragService).onDragLineEventChange((event) => {
              if (event.type === 'onDrag') lineCanceled.current = false;
            })
          );
          disposables.current.push(
            ctx.get<WorkflowDragService>(WorkflowDragService).onNodesDrag((event) => {
              suppressed.current = true;
              if (event.type === 'onDragEnd')
                requestAnimationFrame(() => {
                  suppressed.current = false;
                });
            })
          );
        },
        onDispose() {
          disposables.current.forEach((item) => item.dispose());
        },
        canDropToNode: () => false,
        // A missed/cancelled reconnection must retain the original edge.
        canDeleteLine: (_ctx, _line, next) => !readOnly && !!next && !lineCanceled.current,
        canResetLine(ctx, old, next) {
          if (readOnly) return false;
          if (lineCanceled.current) return false;
          const from = ctx.document.getNode(next.from);
          const to = ctx.document.getNode(next.to);
          return (
            !!from &&
            !!to &&
            from !== to &&
            from.parent === to.parent &&
            !ctx.document.linesManager
              .getAllLines()
              .some(
                (line) =>
                  line !== old &&
                  !line.isDrawing &&
                  line.from?.id === next.from &&
                  String(line.fromPort?.portID || '') === String(next.fromPort || '')
              )
          );
        },
        canAddLine(ctx, from, to, _lines, silent) {
          if (readOnly) return false;
          if (lineCanceled.current) return false;
          const reason =
            from.node.parent !== to.node.parent
              ? 'Connections cannot cross a loop boundary'
              : ctx.document.linesManager
                  .getAllLines()
                  .some(
                    (line) =>
                      !line.isDrawing &&
                      line.highlightColor !== ctx.document.linesManager.lineColor.hidden &&
                      line.fromPort === from
                  )
              ? 'This output is already connected. Insert a node into the existing connection instead.'
              : null;
          if (reason && !silent) handlers.current.onConnectionError(reason);
          return !reason;
        },
        async onDragLineEnd(ctx, params) {
          if (readOnly) return;
          lineCanceled.current =
            !Number.isFinite(params.mousePos.x) || !Number.isFinite(params.mousePos.y);
          if (lineCanceled.current) return;
          if (params.originLine || !params.fromPort || params.toPort || !params.line) return;
          handlers.current.onAdd({
            position: params.mousePos,
            anchor: { x: params.event.clientX, y: params.event.clientY },
            source: {
              nodeId: params.fromPort.node.id,
              portId: String(params.fromPort.portID),
            },
          });
        },
        background: {
          gridSize: 28,
          dotSize: 0.7,
          dotColor: 'transparent',
          dotFillColor: 'var(--canvas-dot)',
          dotOpacity: 1,
          backgroundColor: 'var(--surface-canvas)',
        },
        nodeEngine: { enable: true },
        history: {
          enable: true,
          enableChangeNode: true,
          disableShortcuts: true,
        },
        nodeRegistries: [...nodeCatalog.map((node) => node.type), 'block-start', 'block-end'].map(
          (type) => ({
            type,
            meta: {
              isStart: type === 'start' || type === 'block-start',
              isContainer: isLoop(type),
              size: isLoop(type) ? { width: 720, height: 330 } : { width: 280, height: 150 },
              padding: isLoop(type) ? { top: 120, left: 40, right: 40, bottom: 50 } : undefined,
              defaultPorts: [],
              useDynamicPort: false,
            },
          })
        ),
        fromNodeJSON(node, json) {
          const model = json as unknown as WorkflowNode;
          updatePorts(node, model, scopeFor(latest.current, model.id));
          return json;
        },
        getNodeDefaultRegistry(type) {
          return {
            type,
            formMeta: { render: () => <NodeFields type={String(type)} /> },
          };
        },
        materials: { renderDefaultNode: NodeCard },
        onContentChange(ctx) {
          if (!readOnly && ready.current && !updating.current)
            callback.current(ctx.document.toJSON() as WorkflowSchema);
        },
        onAllLayersRendered(ctx) {
          context.current = ctx;
          if (!ready.current) {
            ready.current = true;
            sync(latest.current);
            // A newly opened split can start at zero width. Fit once at its
            // settled size; subsequent panel changes preserve this viewport.
            let fitted = false;
            let frame = 0;
            const fit = () => {
              if (fitted || !root.current) return;
              root.current.dataset.viewportPending = 'true';
              if (!root.current.clientWidth || !root.current.clientHeight) return;
              if (
                document.querySelector('[data-layout-animating]') ||
                document.documentElement.matches('.resizing-column, .resizing-row')
              ) {
                root.current.dataset.viewportPending = 'true';
                return;
              }
              fitted = true;
              observer.disconnect();
              window.removeEventListener('flowgram:layout-settled', settled);
              updateExecutionEdges();
              const selected =
                readOnly && selectedRef.current?.length
                  ? ctx.document
                      .getAllNodes()
                      .filter((node) => selectedRef.current!.includes(node.id))
                  : [];
              if (selected.length) {
                ctx.selection.selection = selected;
                void ctx.playground.config.scrollToView({
                  entities: selected,
                  zoom: 0.6,
                  easing: false,
                });
              } else fitCanvas(ctx);
              delete root.current.dataset.viewportPending;
            };
            const settled = () => {
              cancelAnimationFrame(frame);
              frame = requestAnimationFrame(fit);
            };
            const observer = new ResizeObserver(settled);
            observer.observe(ctx.playground.node);
            window.addEventListener('flowgram:layout-settled', settled);
            disposables.current.push({
              dispose() {
                cancelAnimationFrame(frame);
                observer.disconnect();
                window.removeEventListener('flowgram:layout-settled', settled);
              },
            });
            fit();
          }
        },
      }),
      []
    );
    return (
      <PortContext.Provider value={models}>
        <InteractionContext.Provider
          value={{
            readOnly,
            click: onNodeClick,
            open: onOpen,
            renameId,
            rename: onRename,
            endRename: onEndRename,
            suppressClick: () => suppressed.current,
            select(id, toggle = false) {
              const ctx = context.current;
              const entity = ctx?.document.getNode(id);
              if (!ctx || !entity) return;
              ctx.selection.selection = toggle
                ? ctx.selection.selection.some((item) => item.id === id)
                  ? ctx.selection.selection.filter((item) => item.id !== id)
                  : [...ctx.selection.selection, entity]
                : [entity];
            },
            menu(id, event) {
              const ctx = context.current;
              if (!ctx) return;
              if (!ctx.selection.selection.some((item) => item.id === id)) {
                const entity = ctx.document.getNode(id);
                if (entity) ctx.selection.selection = [entity];
              }
              onMenu(
                { x: event.clientX, y: event.clientY },
                ctx.selection.selection
                  .filter((entity) => entity instanceof WorkflowNodeEntity)
                  .map((entity) => entity.id)
              );
            },
            addInside(id, event) {
              const ctx = context.current;
              const model = scopeFor(latest.current, id).nodes.find((node) => node.id === id);
              const entity = ctx?.document.getNode(id);
              if (!ctx || !entity || !model?.blocks?.[0]) return;
              const position = ctx.playground.config.getPosFromMouseEvent(event);
              const bounds = entity.getData(FlowNodeTransformData).bounds;
              onAdd({
                scopeId: model.blocks[0].id,
                anchor: { x: event.clientX, y: event.clientY },
                position: {
                  x: Math.max(40, position.x - bounds.x),
                  y: Math.max(120, position.y - bounds.y),
                },
              });
            },
            add: onAdd,
          }}
        >
          <ExecutionContext.Provider value={statuses}>
            <FreeLayoutEditorProvider {...props}>
              <div
                ref={root}
                className={`workflow-canvas-interactions h-full w-full ${
                  readOnly ? 'workflow-canvas-readonly' : ''
                }`}
                onPasteCapture={
                  readOnly
                    ? (event) => {
                        event.preventDefault();
                        event.stopPropagation();
                      }
                    : undefined
                }
                onPointerMove={(event) => {
                  if (readOnly) return;
                  if ((event.target as Element).closest('.workflow-line-add')) return;
                  const ctx = context.current;
                  if (!ctx || event.buttons) {
                    setLineAction(null);
                    return;
                  }
                  const hovered = ctx.get<WorkflowHoverService>(WorkflowHoverService).someHovered;
                  if (hovered instanceof WorkflowLineEntity && !hovered.isDrawing) {
                    const rect = root.current!.getBoundingClientRect();
                    const canvasRect = ctx.playground.node.getBoundingClientRect();
                    const { zoom, config } = ctx.playground.config;
                    const center = hovered.center;
                    const x = center.x * zoom - config.scrollX + canvasRect.left - rect.left;
                    const y = center.y * zoom - config.scrollY + canvasRect.top - rect.top;
                    setLineAction((current) =>
                      current && Math.abs(current.x - x) < 1 && Math.abs(current.y - y) < 1
                        ? current
                        : {
                            edge: hovered.toJSON() as Edge,
                            x,
                            y,
                            position: { x: center.x, y: center.y },
                          }
                    );
                  } else if (lineAction) {
                    const rect = root.current!.getBoundingClientRect();
                    if (
                      Math.hypot(
                        event.clientX - rect.left - lineAction.x,
                        event.clientY - rect.top - lineAction.y
                      ) > 36
                    )
                      setLineAction(null);
                  }
                }}
                onPointerLeave={() => setLineAction(null)}
                onMouseDownCapture={(event) => {
                  // The engine's group-drag layer also listens to mousedown. Keep
                  // context menus, modifiers and controls out of that gesture.
                  const targetId = (event.target as Element).closest<HTMLElement>(
                    '[data-workflow-node-id]'
                  )?.dataset.workflowNodeId;
                  const targetNode =
                    targetId &&
                    scopeFor(latest.current, targetId).nodes.find((node) => node.id === targetId);
                  if (
                    (targetNode &&
                      isLoop(targetNode.type) &&
                      !(event.target as Element).closest('.workflow-node-heading')) ||
                    event.button === 2 ||
                    event.metaKey ||
                    event.ctrlKey ||
                    event.shiftKey ||
                    (event.target as Element).closest(
                      'button,input,textarea,.flow-canvas-not-draggable'
                    )
                  )
                    event.stopPropagation();
                }}
                onKeyDownCapture={(event) => {
                  if (readOnly) {
                    if (event.key === 'Enter') {
                      const node = context.current?.selection.selection.find(
                        (entity) => entity instanceof WorkflowNodeEntity
                      );
                      if (node) onNodeClick(node.id);
                    }
                    if (
                      ['Delete', 'Backspace', 'F2'].includes(event.key) ||
                      ((event.metaKey || event.ctrlKey) &&
                        ['v', 'x', 'z', 'd'].includes(event.key.toLowerCase()))
                    ) {
                      event.preventDefault();
                      event.stopPropagation();
                    }
                    return;
                  }
                  if (
                    event.defaultPrevented ||
                    event.nativeEvent.isComposing ||
                    (event.target as Element).closest(
                      'input,textarea,button,[contenteditable="true"],[role="dialog"],[role="menu"]'
                    )
                  )
                    return;
                  const ctx = context.current;
                  if (!ctx) return;
                  const ids = ctx.selection.selection
                    .filter((entity) => entity instanceof WorkflowNodeEntity)
                    .map((entity) => entity.id);
                  const modifier = event.metaKey || event.ctrlKey;
                  const key = event.key.toLowerCase();
                  let command: NodeCommand | 'paste' | undefined;
                  if (key === 'f2' && ids.length === 1) command = 'rename';
                  if (key === 'enter' && ids.length === 1) command = 'open';
                  if (key === 'delete' || key === 'backspace') {
                    const edges = ctx.selection.selection
                      .filter((entity) => entity instanceof WorkflowLineEntity)
                      .map((entity) => (entity as WorkflowLineEntity).toJSON() as Edge);
                    if (edges.length && !ids.length) {
                      event.preventDefault();
                      event.stopPropagation();
                      onDeleteConnections(edges);
                      return;
                    }
                    command = 'delete';
                  }
                  if (modifier && key === 'c') command = 'copy';
                  if (modifier && key === 'x') command = 'cut';
                  if (modifier && key === 'v') command = 'paste';
                  if (modifier && key === 'd') command = 'duplicate';
                  if (command) {
                    event.preventDefault();
                    event.stopPropagation();
                    onCommand(command, ids);
                    return;
                  }
                  if (modifier && key === 'z') {
                    event.preventDefault();
                    event.stopPropagation();
                    void runHistory(event.shiftKey);
                    return;
                  }
                  if (modifier && key === 'a') {
                    event.preventDefault();
                    event.stopPropagation();
                    ctx.selection.selection = ctx.document
                      .getAllNodes()
                      .filter(
                        (node) =>
                          node.parent ===
                          (ctx.document.getNode(ids[0])?.parent || ctx.document.root)
                      );
                    return;
                  }
                  if (
                    !modifier &&
                    ['arrowleft', 'arrowright', 'arrowup', 'arrowdown'].includes(key) &&
                    ids.length === 1
                  ) {
                    const current = ctx.document.getNode(ids[0]);
                    if (current) {
                      const origin = current.getData(FlowNodeTransformData).bounds.center;
                      const horizontal = key === 'arrowleft' || key === 'arrowright';
                      const positive = key === 'arrowright' || key === 'arrowdown';
                      const candidates = ctx.document
                        .getAllNodes()
                        .filter((node) => node !== current && node.parent === current.parent)
                        .map((node) => {
                          const center = node.getData(FlowNodeTransformData).bounds.center;
                          const primary = horizontal ? center.x - origin.x : center.y - origin.y;
                          const cross = horizontal ? center.y - origin.y : center.x - origin.x;
                          return {
                            node,
                            primary,
                            score: Math.abs(primary) + 2 * Math.abs(cross),
                          };
                        })
                        .filter((item) => (positive ? item.primary > 0 : item.primary < 0))
                        .sort((a, b) => a.score - b.score);
                      if (candidates[0]) {
                        event.preventDefault();
                        event.stopPropagation();
                        ctx.selection.selection = [candidates[0].node];
                        onNodeClick(candidates[0].node.id);
                      }
                    }
                  }
                  if (!modifier && key === 'n') {
                    event.preventDefault();
                    event.stopPropagation();
                    onAdd({
                      position: ctx.playground.config.getViewport(true).center,
                    });
                  }
                  if (key === 'escape') {
                    event.preventDefault();
                    event.stopPropagation();
                    if (!onEscape()) ctx.selection.selection = [];
                  }
                  if (event.shiftKey && key === 'f10' && ids.length) {
                    event.preventDefault();
                    event.stopPropagation();
                    const rect = root.current!.getBoundingClientRect();
                    onMenu(
                      {
                        x: rect.left + rect.width / 2,
                        y: rect.top + rect.height / 2,
                      },
                      ids
                    );
                  }
                }}
                onDoubleClick={(event) => {
                  if (readOnly) return;
                  if (
                    (event.target as Element).closest(
                      '[data-workflow-node-id],button,input,[data-port-entity-id]'
                    )
                  )
                    return;
                  const ctx = context.current;
                  if (ctx && !ctx.get<WorkflowHoverService>(WorkflowHoverService).someHovered)
                    onAdd({
                      position: ctx.playground.config.getPosFromMouseEvent(event),
                      anchor: { x: event.clientX, y: event.clientY },
                    });
                }}
                onContextMenuCapture={(event) => {
                  if ((event.target as Element).closest('input,textarea,[contenteditable="true"]'))
                    return;
                  event.preventDefault();
                  event.stopPropagation();
                  if (readOnly) return;
                  const ctx = context.current;
                  if (!ctx) return;
                  const hovered = ctx.get<WorkflowHoverService>(WorkflowHoverService).someHovered;
                  const nodeId =
                    (event.target as Element).closest<HTMLElement>('[data-workflow-node-id]')
                      ?.dataset.workflowNodeId ||
                    (hovered instanceof WorkflowNodeEntity ? hovered.id : undefined);
                  if (nodeId && !ctx.selection.selection.some((item) => item.id === nodeId)) {
                    const node = ctx.document.getNode(nodeId);
                    if (node) ctx.selection.selection = [node];
                  } else if (!nodeId && hovered instanceof WorkflowLineEntity)
                    ctx.selection.selection = [hovered];
                  const ids = nodeId
                    ? ctx.selection.selection
                        .filter((entity) => entity instanceof WorkflowNodeEntity)
                        .map((entity) => entity.id)
                    : [];
                  onMenu(
                    { x: event.clientX, y: event.clientY },
                    ids,
                    hovered instanceof WorkflowLineEntity && !nodeId
                      ? (hovered.toJSON() as Edge)
                      : undefined,
                    {
                      position: ctx.playground.config.getPosFromMouseEvent(event),
                      anchor: { x: event.clientX, y: event.clientY },
                    }
                  );
                }}
              >
                <EditorRenderer className="h-full w-full" />
                {lineAction && (
                  <button
                    type="button"
                    className="workflow-line-add"
                    aria-label={tx('在连线中插入节点')}
                    style={{ left: lineAction.x - 12, top: lineAction.y - 12 }}
                    onPointerDown={(event) => event.stopPropagation()}
                    onClick={(event) => {
                      event.stopPropagation();
                      onAdd({
                        edge: lineAction.edge,
                        position: lineAction.position,
                        anchor: { x: event.clientX, y: event.clientY },
                      });
                      setLineAction(null);
                    }}
                  >
                    <Plus size={13} />
                  </button>
                )}
              </div>
              <WorkflowCanvasToolbar
                readOnly={readOnly}
                leading={toolbarLeading}
                trailing={toolbarTrailing}
                onHistory={runHistory}
                onFit={() => fitCanvas(context.current)}
              />
            </FreeLayoutEditorProvider>
          </ExecutionContext.Provider>
        </InteractionContext.Provider>
      </PortContext.Provider>
    );
  })
);
