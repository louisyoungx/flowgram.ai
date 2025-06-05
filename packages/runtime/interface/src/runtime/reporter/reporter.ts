import { WorkflowInputs, WorkflowOutputs } from '../base';
import { IStatusCenter } from './status';
import { StatusData } from './status';
import { ISnapshotCenter } from './snapshot-center';
import { Snapshot } from './snapshot';

export interface IReport {
  id: string;
  inputs: WorkflowInputs;
  outputs: WorkflowOutputs;
  workflowStatus: StatusData;
  nodeStatus: Record<string, StatusData>;
  nodeResult: Record<string, Snapshot | Snapshot[]>;
}

export interface IReporter {
  snapshotCenter: ISnapshotCenter;
  statusCenter: IStatusCenter;
  init(): void;
  dispose(): void;
  export(): IReport;
}
