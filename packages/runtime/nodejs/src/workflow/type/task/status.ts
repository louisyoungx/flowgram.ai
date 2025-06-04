import { WorkflowStatus } from '../base/status';

export interface IStatus {
  workflowStatus: WorkflowStatus;
  terminated: boolean;
  setWorkflowStatus(status: WorkflowStatus): void;
  getNodeStatus(nodeID: string): WorkflowStatus;
  setNodeStatus(nodeID: string, status: WorkflowStatus): void;
  getStatusNodeIDs(status: WorkflowStatus): string[];
  init(): void;
  dispose(): void;
}
