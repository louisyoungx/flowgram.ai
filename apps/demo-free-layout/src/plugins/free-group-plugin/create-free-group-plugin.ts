import {
  definePluginCreator,
  FlowGroupService,
  FlowNodeBaseType,
  FlowRendererRegistry,
  FreeLayoutPluginContext,
  ShortcutsRegistry,
} from '@flowgram.ai/free-layout-editor';

import { WorkflowGroupService } from './workflow-group-service';
import { GroupShortcut, UngroupShortcut } from './shortcuts';
import { GroupNodeRender } from './render';

export const createFreeGroupPlugin = definePluginCreator<{}, FreeLayoutPluginContext>({
  onBind({ bind, rebind }) {
    bind(WorkflowGroupService).toSelf().inSingletonScope();
    rebind(FlowGroupService).toService(WorkflowGroupService);
  },
  onInit(ctx) {
    // register node render
    const renderRegistry = ctx.get<FlowRendererRegistry>(FlowRendererRegistry);
    renderRegistry.registerReactComponent(FlowNodeBaseType.GROUP, GroupNodeRender);
    // register shortcuts
    const shortcutsRegistry = ctx.get(ShortcutsRegistry);
    shortcutsRegistry.addHandlers(new GroupShortcut(ctx), new UngroupShortcut(ctx));
  },
  onReady(ctx) {
    const groupService = ctx.get(WorkflowGroupService);
    groupService.ready();
  },
  onDispose(ctx) {
    const groupService = ctx.get(WorkflowGroupService);
    groupService.dispose();
  },
});
