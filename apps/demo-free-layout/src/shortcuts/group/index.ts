import {
  FreeLayoutPluginContext,
  ShortcutsHandler,
  WorkflowSelectService,
} from '@flowgram.ai/free-layout-editor';

import { FlowCommandId } from '../constants';
import { WorkflowGroupService } from '../../plugins/free-group-plugin';

export class GroupShortcut implements ShortcutsHandler {
  public commandId = FlowCommandId.GROUP;

  public commandDetail: ShortcutsHandler['commandDetail'] = {
    label: 'Group',
  };

  public shortcuts = ['meta g', 'ctrl g'];

  private selectService: WorkflowSelectService;

  private groupService: WorkflowGroupService;

  constructor(context: FreeLayoutPluginContext) {
    this.selectService = context.get(WorkflowSelectService);
    this.groupService = context.get(WorkflowGroupService);
    this.execute = this.execute.bind(this);
  }

  public async execute(): Promise<void> {
    this.groupService.createGroup(this.selectService.selectedNodes);
    this.selectService.clear();
  }
}
