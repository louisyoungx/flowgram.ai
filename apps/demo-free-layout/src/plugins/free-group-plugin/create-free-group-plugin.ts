import { definePluginCreator, FlowGroupService } from '@flowgram.ai/free-layout-editor';

import { WorkflowGroupService } from './workflow-group-service';

export const createFreeGroupPlugin = definePluginCreator({
  onBind({ bind, rebind }) {
    bind(WorkflowGroupService).toSelf().inSingletonScope();
    rebind(FlowGroupService).toService(WorkflowGroupService);
  },
});
