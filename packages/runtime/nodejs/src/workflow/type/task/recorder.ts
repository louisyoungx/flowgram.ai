import { ISnapshot } from './snapshot';
import { VOData } from '../base';

export interface IRecorder {
  id: string;
  create(snapshot: VOData<ISnapshot>): ISnapshot;
  export(): ISnapshot[];
  init(): void;
  dispose(): void;
}
