import { IDocument } from '../document/document';
import { IValidation } from './validation';

export interface EngineServices {
  Document: IDocument;
  Validation: IValidation;
}

export interface IEngine {}

export const IEngine = Symbol.for('Engine');
