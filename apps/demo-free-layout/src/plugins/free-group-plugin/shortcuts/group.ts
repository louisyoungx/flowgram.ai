import {
  FreeLayoutPluginContext,
  ShortcutsHandler,
  WorkflowSelectService,
} from '@flowgram.ai/free-layout-editor';

import { WorkflowGroupService } from '../workflow-group-service';
import { WorkflowGroupCommand } from '../constant';

export class GroupShortcut implements ShortcutsHandler {
  public commandId = WorkflowGroupCommand.Group;

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
