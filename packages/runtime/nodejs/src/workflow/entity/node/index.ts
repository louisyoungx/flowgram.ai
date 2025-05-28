import { FlowGramNode, PositionSchema, WorkflowPortType } from '@flowgram.ai/runtime-interface';

import { CreateNodeParams, IEdge, INode, IPort } from '@workflow/type';

export class WorkflowRuntimeNode implements INode {
  public readonly id: string;

  public readonly type: FlowGramNode;

  public readonly name: string;

  public readonly position: PositionSchema;

  private _parent: INode | null;

  private readonly _children: INode[];

  private readonly _ports: IPort[];

  private readonly _inputEdges: IEdge[];

  private readonly _outputEdges: IEdge[];

  constructor(params: CreateNodeParams) {
    const { id, type, name, position } = params;
    this.id = id;
    this.type = type;
    this.name = name;
    this.position = position;
    this._parent = null;
    this._children = [];
    this._ports = [];
    this._inputEdges = [];
    this._outputEdges = [];
  }

  public get ports() {
    const inputs = this._ports.filter((port) => port.type === WorkflowPortType.Input);
    const outputs = this._ports.filter((port) => port.type === WorkflowPortType.Output);
    return {
      inputs,
      outputs,
    };
  }

  public get edges() {
    return {
      inputs: this._inputEdges,
      outputs: this._outputEdges,
    };
  }

  public get parent() {
    return this._parent;
  }

  public set parent(parent: INode | null) {
    this._parent = parent;
  }

  public get children() {
    return this._children;
  }

  public addChild(child: INode) {
    this._children.push(child);
  }

  public addPort(port: IPort) {
    this._ports.push(port);
  }

  public addInputEdge(edge: IEdge) {
    this._inputEdges.push(edge);
  }

  public addOutputEdge(edge: IEdge) {
    this._outputEdges.push(edge);
  }
}
