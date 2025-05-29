import { IValidation } from '../engine/validation';
import { IEngine } from '../engine/engine';
import { IDocument } from '../document/document';

export type ContainerService = IValidation | IEngine | IDocument;

export interface IContainer {
  get(key: string): ContainerService;
}
