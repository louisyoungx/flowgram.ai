import { WorkflowInputs, WorkflowOutputs } from '../base';
import { IStatusCenter } from './status';
import { StatusData } from './status';
import { ISnapshotCenter } from './snapshot-center';
import { Snapshot } from './snapshot';

export interface NodeReport extends StatusData {
  id: string;
  snapshots: Snapshot[];
}

export interface IReport {
  id: string;
  inputs: WorkflowInputs;
  outputs: WorkflowOutputs;
  workflowStatus: StatusData;
  reports: Record<string, NodeReport>;
}

export interface IReporter {
  snapshotCenter: ISnapshotCenter;
  statusCenter: IStatusCenter;
  init(): void;
  dispose(): void;
  export(): IReport;
}
