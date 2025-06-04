import { ISnapshot } from './snapshot';
import { VOData } from '../base';

export interface ISnapshotCenter {
  id: string;
  create(snapshot: VOData<ISnapshot>): ISnapshot;
  export(): ISnapshot[];
  init(): void;
  dispose(): void;
}
