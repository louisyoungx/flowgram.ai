import { IReport } from '@workflow/type/reporter/reporter';
import { ISnapshotCenter, IReporter, ISnapshot, IStatusCenter, IIOCenter } from '@workflow/type';
import { WorkflowRuntimeReport } from '@workflow/reporter/value-object';

export class WorkflowRuntimeReporter implements IReporter {
  constructor(
    public readonly ioCenter: IIOCenter,
    public readonly snapshotCenter: ISnapshotCenter,
    public readonly statusCenter: IStatusCenter
  ) {}

  public init(): void {}

  public dispose(): void {}

  public export(): IReport {
    const snapshots = this.snapshotCenter.export();
    const report = WorkflowRuntimeReport.create({
      inputs: this.ioCenter.inputs,
      outputs: this.ioCenter.outputs,
      workflowStatus: this.statusCenter.workflow.export(),
      nodeStatus: this.statusCenter.exportNodeStatus(),
      nodeResult: this.formatSnapshots(snapshots),
    });
    return report;
  }

  private formatSnapshots(snapshots: ISnapshot[]): Record<string, ISnapshot | ISnapshot[]> {
    const result: Record<string, ISnapshot | ISnapshot[]> = {};
    snapshots.forEach((snapshot) => {
      if (result[snapshot.nodeID]) {
        if (Array.isArray(result[snapshot.nodeID])) {
          (result[snapshot.nodeID] as ISnapshot[]).push(snapshot);
        } else {
          result[snapshot.nodeID] = [result[snapshot.nodeID] as ISnapshot, snapshot];
        }
      } else {
        result[snapshot.nodeID] = snapshot;
      }
    });
    return result;
  }
}
