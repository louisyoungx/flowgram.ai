import { Snapshot, ISnapshotCenter, SnapshotData, ISnapshot } from '@flowgram.ai/runtime-interface';

import { WorkflowRuntimeSnapshot } from '@workflow/reporter/entity';
import { uuid } from '@workflow/infra';

export class WorkflowRuntimeSnapshotCenter implements ISnapshotCenter {
  public readonly id: string;

  private snapshots: ISnapshot[];

  constructor() {
    this.id = uuid();
  }

  public create(snapshotData: Partial<SnapshotData>): ISnapshot {
    const snapshot = WorkflowRuntimeSnapshot.create(snapshotData);
    this.snapshots.push(snapshot);
    return snapshot;
  }

  public init(): void {
    this.snapshots = [];
  }

  public dispose(): void {
    // because the data is not persisted, do not clear the execution result
  }

  public export(): Snapshot[] {
    return this.snapshots.slice().map((snapshot) => snapshot.export());
  }
}
