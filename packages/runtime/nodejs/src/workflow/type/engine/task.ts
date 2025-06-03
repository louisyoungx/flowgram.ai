import { VOData } from '../base';
import { ISnapshot } from './snapshot';

export interface ITask {
  snapshots: ISnapshot[];
  record(snapshot: VOData<ISnapshot>): ISnapshot;
}
