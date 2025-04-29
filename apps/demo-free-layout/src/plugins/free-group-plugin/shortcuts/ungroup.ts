import {
  FlowNodeBaseType,
  FreeLayoutPluginContext,
  ShortcutsHandler,
  WorkflowNodeEntity,
  WorkflowSelectService,
} from '@flowgram.ai/free-layout-editor';

import { WorkflowGroupService } from '../workflow-group-service';
import { WorkflowGroupCommand } from '../constant';

export class UngroupShortcut implements ShortcutsHandler {
  public commandId = WorkflowGroupCommand.Ungroup;

  public commandDetail: ShortcutsHandler['commandDetail'] = {
    label: 'Ungroup',
  };

  public shortcuts = ['meta shift g', 'ctrl shift g'];

  private selectService: WorkflowSelectService;

  private groupService: WorkflowGroupService;

  constructor(context: FreeLayoutPluginContext) {
    this.selectService = context.get(WorkflowSelectService);
    this.groupService = context.get(WorkflowGroupService);
    this.execute = this.execute.bind(this);
  }

  public async execute(_groupNode?: WorkflowNodeEntity): Promise<void> {
    const groupNode = _groupNode || this.selectService.activatedNode;
    if (!groupNode || groupNode.flowNodeType !== FlowNodeBaseType.GROUP) {
      return;
    }
    this.groupService.ungroup(groupNode);
    this.selectService.clear();
  }
}
