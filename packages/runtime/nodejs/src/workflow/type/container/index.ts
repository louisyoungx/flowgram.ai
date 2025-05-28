import { IEngine } from '../service/engine';
import { IDocument } from '../aggregate/document';

export interface IContainer {
  Document: IDocument;
  Engine: IEngine;
}
