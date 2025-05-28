import z from 'zod';

import { WorkflowEdgeSchema } from '@schema/edge';
import { FlowGramAPIDefine } from '@api/type';
import { FlowGramAPIMethod, FlowGramAPIName } from '@api/constant';

interface ValidationNodeError {
  message: string;
  nodeID: string;
}

interface ValidationEdgeError {
  message: string;
  edge: WorkflowEdgeSchema;
}

export interface ValidationResult {
  valid: boolean;
  nodeErrors: ValidationNodeError[];
  edgeErrors: ValidationEdgeError[];
}

export interface ValidationReq {
  schema: string;
}

export interface ValidationRes extends ValidationResult {}

export const ValidationDefine: FlowGramAPIDefine = {
  name: FlowGramAPIName.Validation,
  method: FlowGramAPIMethod.POST,
  path: '/api/validation',
  schema: {
    req: z.object({
      schema: z.string(),
    }),
    res: z.object({
      valid: z.boolean(),
      nodeErrors: z.array(
        z.object({
          message: z.string(),
          nodeID: z.string(),
        })
      ),
      edgeErrors: z.array(
        z.object({
          message: z.string(),
          edge: z.object({
            sourceNodeID: z.string(),
            targetNodeID: z.string(),
            sourcePortID: z.string().optional(),
            targetPortID: z.string().optional(),
          }),
        })
      ),
    }),
  },
};
