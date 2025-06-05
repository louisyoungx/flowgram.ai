import { APIRouter } from './type';
import { TaskRunAPI } from './task-run';
import { TaskResultAPI } from './task-result';
import { TaskReportAPI } from './task-report';
import { TaskCancelAPI } from './task-cancel';

const APIS = [TaskRunAPI, TaskResultAPI, TaskReportAPI, TaskCancelAPI];

export const routers = APIS.reduce((acc, api) => {
  acc[api.define.path] = api.procedure;
  return acc;
}, {} as APIRouter);
