import {
  IReport,
  NodeReport,
  WorkflowInputs,
  WorkflowOutputs,
  WorkflowStatus,
} from '@flowgram.ai/runtime-interface';
import {
  injectable,
  inject,
  WorkflowDocument,
  Playground,
  delay,
  WorkflowLineEntity,
  WorkflowNodeEntity,
  WorkflowNodeLinesData,
  Emitter,
  getNodeForm,
} from '@flowgram.ai/free-layout-editor';

import { runtimeClient } from '../utils';
const RUNNING_INTERVAL = 1000;
const SYNC_TASK_REPORT_INTERVAL = 500;

interface NodeRunningStatus {
  nodeID: string;
  status: WorkflowStatus;
  nodeResultLength: number;
}

@injectable()
export class RunningService {
  @inject(Playground) playground: Playground;

  @inject(WorkflowDocument) document: WorkflowDocument;

  private _runningNodes: WorkflowNodeEntity[] = [];

  private taskID?: string;

  private syncTaskReportIntervalID?: ReturnType<typeof setInterval>;

  private reportEmitter = new Emitter<NodeReport>();

  private resetEmitter = new Emitter<{}>();

  public terminatedEmitter = new Emitter<{
    result?: {
      inputs: WorkflowInputs;
      outputs: WorkflowOutputs;
    };
  }>();

  private nodeRunningStatus: Map<string, NodeRunningStatus>;

  public onNodeReportChange = this.reportEmitter.event;

  public onReset = this.resetEmitter.event;

  public onTerminated = this.terminatedEmitter.event;

  async addRunningNode(node: WorkflowNodeEntity): Promise<void> {
    this._runningNodes.push(node);
    node.renderData.node.classList.add('node-running');
    this.document.linesManager.forceUpdate(); // Refresh line renderer
    await delay(RUNNING_INTERVAL);
    // Child Nodes
    await Promise.all(node.blocks.map((nextNode) => this.addRunningNode(nextNode)));
    // Sibling Nodes
    const nextNodes = node.getData(WorkflowNodeLinesData).outputNodes;
    await Promise.all(nextNodes.map((nextNode) => this.addRunningNode(nextNode)));
  }

  async startRun(): Promise<void> {
    await this.addRunningNode(this.document.getNode('start_0')!);
    this._runningNodes.forEach((node) => {
      node.renderData.node.classList.remove('node-running');
    });
    this._runningNodes = [];
    this.document.linesManager.forceUpdate();
  }

  isFlowingLine(line: WorkflowLineEntity) {
    return this._runningNodes.some((node) =>
      node.getData(WorkflowNodeLinesData).outputLines.includes(line)
    );
  }

  public async taskRun(inputsString: string): Promise<void> {
    if (this.taskID) {
      await this.taskCancel();
    }
    if (!this.validate()) {
      return;
    }
    this.reset();
    const output = await runtimeClient.taskRun({
      schema: JSON.stringify(this.document.toJSON()),
      inputs: JSON.parse(inputsString) as WorkflowInputs,
    });
    if (!output) {
      return;
    }
    this.taskID = output.taskID;
    this.syncTaskReportIntervalID = setInterval(() => {
      this.syncTaskReport();
    }, SYNC_TASK_REPORT_INTERVAL);
  }

  public async taskCancel(): Promise<void> {
    if (!this.taskID) {
      return;
    }
    await runtimeClient.taskCancel({
      taskID: this.taskID,
    });
  }

  private async validate(): Promise<boolean> {
    const allForms = this.document.getAllNodes().map((node) => getNodeForm(node));
    const formValidations = await Promise.all(allForms.map(async (form) => form?.validate()));
    const validations = formValidations.filter((validation) => validation !== undefined);
    const isValid = validations.every((validation) => validation);
    return isValid;
  }

  private reset(): void {
    this.taskID = undefined;
    this.nodeRunningStatus = new Map();
    if (this.syncTaskReportIntervalID) {
      clearInterval(this.syncTaskReportIntervalID);
    }
    this.resetEmitter.fire({});
  }

  private async syncTaskReport(): Promise<void> {
    if (!this.taskID) {
      return;
    }
    const output = await runtimeClient.taskReport({
      taskID: this.taskID,
    });
    if (!output) {
      clearInterval(this.syncTaskReportIntervalID);
      console.error('Sync task report failed');
      return;
    }
    const { workflowStatus, inputs, outputs } = output;
    if (workflowStatus.terminated) {
      clearInterval(this.syncTaskReportIntervalID);
      if (Object.keys(outputs).length > 0) {
        this.terminatedEmitter.fire({ result: { inputs, outputs } });
      } else {
        this.terminatedEmitter.fire({});
      }
    }
    this.updateReport(output);
  }

  private updateReport(report: IReport): void {
    const { reports } = report;
    this.document.getAllNodes().forEach((node) => {
      const nodeID = node.id;
      const nodeReport = reports[nodeID];
      if (!nodeReport) {
        return;
      }
      const runningStatus = this.nodeRunningStatus.get(nodeID);
      if (
        !runningStatus ||
        nodeReport.status !== runningStatus.status ||
        nodeReport.snapshots.length !== runningStatus.nodeResultLength
      ) {
        this.nodeRunningStatus.set(nodeID, {
          nodeID,
          status: nodeReport.status,
          nodeResultLength: nodeReport.snapshots.length,
        });
        this.reportEmitter.fire(nodeReport);
      } else if (nodeReport.status === WorkflowStatus.Processing) {
        this.reportEmitter.fire(nodeReport);
      }
    });
  }
}
