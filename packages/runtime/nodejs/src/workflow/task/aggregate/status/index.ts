import { IStatus, WorkflowStatus } from '@workflow/type';

export class WorkflowRuntimeStatus implements IStatus {
  private _workflowStatus: WorkflowStatus;

  private nodeStatus: Map<string, WorkflowStatus>;

  public init(): void {
    this.setWorkflowStatus(WorkflowStatus.Pending);
    this.nodeStatus = new Map();
  }

  public dispose(): void {
    // 由于数据未持久化，不对执行结果进行清空
  }

  public get terminated(): boolean {
    return [WorkflowStatus.Success, WorkflowStatus.Failed, WorkflowStatus.Canceled].includes(
      this.workflowStatus
    );
  }

  public get workflowStatus(): WorkflowStatus {
    return this._workflowStatus;
  }

  public setWorkflowStatus(status: WorkflowStatus): void {
    this._workflowStatus = status;
  }

  public getNodeStatus(nodeID: string): WorkflowStatus {
    return this.nodeStatus.get(nodeID) ?? WorkflowStatus.Pending;
  }

  public setNodeStatus(nodeID: string, status: WorkflowStatus): void {
    this.nodeStatus.set(nodeID, status);
  }

  public getStatusNodeIDs(status: WorkflowStatus): string[] {
    return Array.from(this.nodeStatus.entries())
      .filter(([, nodeStatus]) => nodeStatus === status)
      .map(([nodeID]) => nodeID);
  }
}
