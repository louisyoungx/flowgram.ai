import { WorkflowSchema } from '@flowgram.ai/runtime-interface';

export interface ValidationResult {
  valid: boolean;
  errors?: string[];
}

export interface IValidation {
  validate(schema: WorkflowSchema): ValidationResult;
}

export const IValidation = Symbol.for('Validation');
