import { WorkflowInputs, WorkflowOutputs } from '@flowgram.ai/runtime-interface';

import { IStatusCenter } from './status';
import { StatusData } from './status';
import { ISnapshotCenter } from './snapshot-center';
import { ISnapshot } from './snapshot';

export interface IReport {
  id: string;
  inputs: WorkflowInputs;
  outputs: WorkflowOutputs;
  workflowStatus: StatusData;
  nodeStatus: Record<string, StatusData>;
  nodeResult: Record<string, ISnapshot | ISnapshot[]>;
}

export interface IReporter {
  snapshotCenter: ISnapshotCenter;
  statusCenter: IStatusCenter;
  init(): void;
  dispose(): void;
  export(): IReport;
}
