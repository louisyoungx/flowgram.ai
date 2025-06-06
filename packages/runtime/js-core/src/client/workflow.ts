/* eslint-disable no-console */
import { IRuntimeClient } from '@flowgram.ai/runtime-interface';

import { taskCancelCall, taskReportCall, taskResultCall, taskRunCall } from './caller';

export class WorkflowRuntimeClient implements IRuntimeClient {
  constructor() {}

  public taskRun = taskRunCall;

  public taskReport = taskReportCall;

  public taskResult = taskResultCall;

  public taskCancel = taskCancelCall;

  private static _instance: WorkflowRuntimeClient;

  public static get instance(): WorkflowRuntimeClient {
    if (this._instance) {
      return this._instance;
    }
    this._instance = new WorkflowRuntimeClient();
    return this._instance;
  }
}
