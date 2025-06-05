import {
  ISnapshotCenter,
  IReporter,
  Snapshot,
  IStatusCenter,
  IIOCenter,
  IReport,
} from '@flowgram.ai/runtime-interface';

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

  private formatSnapshots(snapshots: Snapshot[]): Record<string, Snapshot | Snapshot[]> {
    const result: Record<string, Snapshot | Snapshot[]> = {};
    snapshots.forEach((snapshot) => {
      if (result[snapshot.nodeID]) {
        if (Array.isArray(result[snapshot.nodeID])) {
          (result[snapshot.nodeID] as Snapshot[]).push(snapshot);
        } else {
          result[snapshot.nodeID] = [result[snapshot.nodeID] as Snapshot, snapshot];
        }
      } else {
        result[snapshot.nodeID] = snapshot;
      }
    });
    return result;
  }
}
