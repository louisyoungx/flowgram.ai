import {
  definePluginCreator,
  FlowGroupService,
  FreeLayoutPluginContext,
  ShortcutsRegistry,
} from '@flowgram.ai/free-layout-editor';

import { WorkflowGroupService } from './workflow-group-service';
import { GroupShortcut, UngroupShortcut } from './shortcuts';

export const createFreeGroupPlugin = definePluginCreator<{}, FreeLayoutPluginContext>({
  onBind({ bind, rebind }) {
    bind(WorkflowGroupService).toSelf().inSingletonScope();
    rebind(FlowGroupService).toService(WorkflowGroupService);
  },
  onInit(ctx) {
    const shortcutsRegistry = ctx.get(ShortcutsRegistry);
    shortcutsRegistry.addHandlers(new GroupShortcut(ctx), new UngroupShortcut(ctx));
  },
});
