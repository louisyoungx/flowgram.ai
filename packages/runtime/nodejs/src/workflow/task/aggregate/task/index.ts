import { ISnapshot } from '@workflow/type';
import { ITask, VOData } from '@workflow/type';
import { WorkflowRuntimeSnapshot } from '@workflow/task/value-object';
import { uuid } from '@workflow/infra';

export class WorkflowRuntimeTask implements ITask {
  public readonly id: string;

  private snapshots: ISnapshot[];

  constructor() {
    this.id = uuid();
  }

  public record(snapshotData: VOData<ISnapshot>): ISnapshot {
    const snapshot = WorkflowRuntimeSnapshot.create(snapshotData);
    this.snapshots.push(snapshot);
    return snapshot;
  }

  public init(): void {
    this.snapshots = [];
  }

  public dispose(): void {
    this.snapshots = [];
  }

  public export(): ISnapshot[] {
    return this.snapshots.slice();
  }
}
