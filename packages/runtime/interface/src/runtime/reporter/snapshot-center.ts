import { ISnapshot, Snapshot, SnapshotData } from './snapshot';

export interface ISnapshotCenter {
  id: string;
  create(snapshot: Partial<SnapshotData>): ISnapshot;
  export(): Snapshot[];
  init(): void;
  dispose(): void;
}
