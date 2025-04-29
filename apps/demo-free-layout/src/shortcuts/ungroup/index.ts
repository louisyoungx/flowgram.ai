import {
  FlowNodeBaseType,
  FreeLayoutPluginContext,
  ShortcutsHandler,
  WorkflowNodeEntity,
  WorkflowSelectService,
} from '@flowgram.ai/free-layout-editor';

import { FlowCommandId } from '../constants';
import { WorkflowGroupService } from '../../plugins/free-group-plugin';

export class UngroupShortcut implements ShortcutsHandler {
  public commandId = FlowCommandId.UNGROUP;

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
