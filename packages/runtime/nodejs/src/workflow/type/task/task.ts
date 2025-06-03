import { ISnapshot } from './snapshot';
import { VOData } from '../base';

export interface ITask {
  id: string;
  record(snapshot: VOData<ISnapshot>): ISnapshot;
  export(): ISnapshot[];
  init(): void;
  dispose(): void;
}
