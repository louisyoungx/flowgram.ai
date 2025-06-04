import { StatusData } from '@workflow/type/reporter/status';
import { IStatus, IStatusCenter, WorkflowStatus } from '@workflow/type';
import { WorkflowRuntimeStatus } from '@workflow/reporter/entity';

export class WorkflowRuntimeStatusCenter implements IStatusCenter {
  private _workflowStatus: IStatus;

  private _nodeStatus: Map<string, IStatus>;

  public startTime: number;

  public endTime?: number;

  public init(): void {
    this._workflowStatus = WorkflowRuntimeStatus.create();
    this._nodeStatus = new Map();
  }

  public dispose(): void {
    // 由于数据未持久化，不对执行结果进行清空
  }

  public get workflow(): IStatus {
    return this._workflowStatus;
  }

  public get workflowStatus(): IStatus {
    return this._workflowStatus;
  }

  public nodeStatus(nodeID: string): IStatus {
    if (!this._nodeStatus.has(nodeID)) {
      this._nodeStatus.set(nodeID, WorkflowRuntimeStatus.create());
    }
    const status = this._nodeStatus.get(nodeID)!;
    return status;
  }

  public getStatusNodeIDs(status: WorkflowStatus): string[] {
    return Array.from(this._nodeStatus.entries())
      .filter(([, nodeStatus]) => nodeStatus.status === status)
      .map(([nodeID]) => nodeID);
  }

  public exportNodeStatus(): Record<string, StatusData> {
    return Object.fromEntries(
      Array.from(this._nodeStatus.entries()).map(([nodeID, status]) => [nodeID, status.export()])
    );
  }
}
