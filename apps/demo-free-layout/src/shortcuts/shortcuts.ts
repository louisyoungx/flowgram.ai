import {
  FlowNodeEntity,
  FreeLayoutPluginContext,
  ShortcutsRegistry,
} from '@flowgram.ai/free-layout-editor';

import { PasteShortcut } from './paste';
import { CopyShortcut } from './copy';
import { FlowCommandId } from './constants';

export function shortcuts(shortcutsRegistry: ShortcutsRegistry, ctx: FreeLayoutPluginContext) {
  shortcutsRegistry.addHandlers(new CopyShortcut(ctx), new PasteShortcut(ctx));
  shortcutsRegistry.addHandlers({
    commandId: FlowCommandId.SELECT_ALL,
    shortcuts: ['meta a', 'ctrl a'],
    execute() {
      const allNodes = ctx.document.getAllNodes();
      ctx.playground.selectionService.selection = allNodes;
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
