import { ISnapshot } from '@workflow/type';
import { ISnapshotCenter, VOData } from '@workflow/type';
import { WorkflowRuntimeSnapshot } from '@workflow/reporter/value-object';
import { uuid } from '@workflow/infra';

export class WorkflowRuntimeSnapshotCenter implements ISnapshotCenter {
  public readonly id: string;

  private snapshots: ISnapshot[];

  constructor() {
    this.id = uuid();
  }

  public create(snapshotData: VOData<ISnapshot>): ISnapshot {
    const snapshot = WorkflowRuntimeSnapshot.create(snapshotData);
    this.snapshots.push(snapshot);
    return snapshot;
  }

  public init(): void {
    this.snapshots = [];
  }

  public dispose(): void {
    // 由于数据未持久化，不对执行结果进行清空
  }

  public export(): ISnapshot[] {
    return this.snapshots.slice();
  }
}
