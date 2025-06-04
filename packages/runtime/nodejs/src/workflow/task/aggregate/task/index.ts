import { IContext, ITask, TaskParams, WorkflowOutputs, WorkflowStatus } from '@workflow/type';
import { uuid } from '@workflow/infra';

export class WorkflowRuntimeTask implements ITask {
  public readonly id: string;

  public readonly processing: Promise<WorkflowOutputs>;

  public readonly context: IContext;

  constructor(params: TaskParams) {
    this.id = uuid();
    this.context = params.context;
    this.processing = params.processing;
  }

  public cancel(): void {
    this.context.status.setWorkflowStatus(WorkflowStatus.Canceled);
    const cancelNodeIDs = this.context.status.getStatusNodeIDs(WorkflowStatus.Processing);
    cancelNodeIDs.forEach((nodeID) => {
      this.context.status.setNodeStatus(nodeID, WorkflowStatus.Canceled);
    });
  }

  public static create(params: TaskParams): WorkflowRuntimeTask {
    return new WorkflowRuntimeTask(params);
  }
}
