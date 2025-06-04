import z from 'zod';

const WorkflowIOZodSchema = z.record(z.string(), z.any());

export const WorkflowZodSchema = {
  Inputs: WorkflowIOZodSchema,
  Outputs: WorkflowIOZodSchema,
  Status: z.object({
    status: z.string(),
    terminated: z.boolean(),
    startTime: z.number(),
    endTime: z.number(),
    timeCost: z.number(),
  }),
  Snapshot: z.object({
    id: z.string(),
    nodeID: z.string(),
    inputs: WorkflowIOZodSchema,
    outputs: WorkflowIOZodSchema,
    data: WorkflowIOZodSchema,
  }),
};
