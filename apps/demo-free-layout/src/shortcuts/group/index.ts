import {
  FlowGroupService,
  FreeLayoutPluginContext,
  ShortcutsHandler,
  WorkflowNodeEntity,
  WorkflowSelectService,
} from '@flowgram.ai/free-layout-editor';

import { FlowCommandId } from '../constants';

export class GroupShortcut implements ShortcutsHandler {
  public commandId = FlowCommandId.GROUP;

  public commandDetail: ShortcutsHandler['commandDetail'] = {
    label: 'Group',
  };

  public shortcuts = ['meta g', 'ctrl g'];

  private selectService: WorkflowSelectService;

  private groupService: FlowGroupService;

  constructor(context: FreeLayoutPluginContext) {
    this.selectService = context.get(WorkflowSelectService);
    this.groupService = context.get(FlowGroupService);
    this.execute = this.execute.bind(this);
  }

  public async execute(): Promise<void> {
    this.groupService.createGroup(
      this.selectService.selectedNodes.filter(
        (_entity) => _entity instanceof WorkflowNodeEntity
      ) as WorkflowNodeEntity[],
      {
        checkIndexContinuous: false,
      }
    );

    this.selectService.clear();
  }
}
