import { IValidation } from '../service/validation';
import { IEngine } from '../service/engine';
import { IDocument } from '../aggregate/document';

export type ContainerService = IValidation | IEngine | IDocument;

export interface IContainer {
  get(key: string): ContainerService;
}
