import {
  FlowNodeBaseType,
  FlowNodeEntity,
  FreeLayoutPluginContext,
  ShortcutsRegistry,
  WorkflowDocument,
  WorkflowDragService,
  WorkflowNodeJSON,
  WorkflowSelectService,
  getAntiOverlapPosition,
} from '@flowgram.ai/free-layout-editor';
import { Toast } from '@douyinfe/semi-ui';

import { CopyShortcut } from './copy';
import { FlowCommandId } from './constants';

export function shortcuts(shortcutsRegistry: ShortcutsRegistry, ctx: FreeLayoutPluginContext) {
  shortcutsRegistry.addHandlers({
    commandId: FlowCommandId.SELECT_ALL,
    shortcuts: ['meta a', 'ctrl a'],
    execute() {
      const allNodes = ctx.document.getAllNodes();
      ctx.playground.selectionService.selection = allNodes;
    },
  });
  shortcutsRegistry.addHandlers(new CopyShortcut(ctx));
  shortcutsRegistry.addHandlers({
    commandId: FlowCommandId.PASTE,
    shortcuts: ['meta v', 'ctrl v'],
    execute: async (e: KeyboardEvent) => {
      const document = ctx.get<WorkflowDocument>(WorkflowDocument);
      const selectService = ctx.get<WorkflowSelectService>(WorkflowSelectService);
      const dragService = ctx.get<WorkflowDragService>(WorkflowDragService);

      const text: string = (await navigator.clipboard.readText()) || '';
      let clipboardData: {
        nodes: {
          nodeJSON: WorkflowNodeJSON;
          nodeType: string;
        }[];
        fromHost: string;
      };
      try {
        clipboardData = JSON.parse(text);
      } catch (e) {
        return;
      }
      if (!clipboardData.nodes || !clipboardData.fromHost) {
        return null;
      }

      if (clipboardData.fromHost !== window.location.host) {
        Toast.error({
          content: 'Cannot paste nodes from different pages',
        });
        return null;
      }

      const { activatedNode } = selectService;
      const containerNode =
        activatedNode?.flowNodeType === FlowNodeBaseType.SUB_CANVAS ? activatedNode : undefined;

      const nodes = await Promise.all(
        clipboardData.nodes.map(({ nodeJSON }) => {
          delete nodeJSON.blocks;
          delete nodeJSON.edges;
          delete nodeJSON.meta?.canvasPosition;
          const position = containerNode
            ? dragService.adjustSubNodePosition(
                nodeJSON.type as string,
                containerNode,
                nodeJSON.meta?.position
              )
            : nodeJSON.meta?.position;
          return document.copyNodeFromJSON(
            nodeJSON.type as string,
            nodeJSON,
            '',
            getAntiOverlapPosition(document, position!),
            containerNode?.id
          );
        })
      );

      if (nodes.length > 0) {
        selectService.selection = nodes;
      }

      Toast.success({
        content: 'Nodes pasted',
      });
    },
  });

  shortcutsRegistry.addHandlers({
    commandId: FlowCommandId.COLLAPSE,
    commandDetail: {
      label: 'Collapse',
    },
    shortcuts: ['meta alt openbracket', 'ctrl alt openbracket'],
    isEnabled: () => !ctx.playground.config.readonlyOrDisabled,
    execute: () => {
      const selection = ctx.selection;

      const selectNodes = selection.selection.filter(
        (_entity) => _entity instanceof FlowNodeEntity
      ) as FlowNodeEntity[];

      selectNodes.forEach((node) => {
        node.renderData.expanded = false;
      });
    },
  });

  shortcutsRegistry.addHandlers({
    commandId: FlowCommandId.EXPAND,
    commandDetail: {
      label: 'Expand',
    },
    shortcuts: ['meta alt closebracket', 'ctrl alt openbracket'],
    isEnabled: () => !ctx.playground.config.readonlyOrDisabled,
    execute: () => {
      const selection = ctx.selection;

      const selectNodes = selection.selection.filter(
        (_entity) => _entity instanceof FlowNodeEntity
      ) as FlowNodeEntity[];

      selectNodes.forEach((node) => {
        node.renderData.expanded = true;
      });
    },
  });
}
