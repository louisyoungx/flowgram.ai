/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { isNil } from 'lodash-es';
import {
  ExecutionContext,
  ExecutionResult,
  FlowGramNode,
  IContext,
  IEngine,
  INode,
  INodeExecutor,
  IVariableParseResult,
  LoopNodeSchema,
  WorkflowVariableType,
} from '@flowgram.ai/runtime-interface';

import { WorkflowRuntimeType } from '@infra/index';

type LoopArray = Array<any>;
type LoopBlockVariables = Record<string, IVariableParseResult>;
type LoopOutputs = Record<string, any>;

export interface LoopExecutorInputs {
  loopFor: LoopArray;
}

export class LoopExecutor implements INodeExecutor {
  public type = FlowGramNode.Loop;

  public async execute(context: ExecutionContext): Promise<ExecutionResult> {
    const loopNodeID = context.node.id;

    const engine = context.container.get<IEngine>(IEngine);
    const { value: loopArray, itemsType } = this.getLoopArrayVariable(context);
    const subNodes = context.node.children;
    const blockStartNode = subNodes.find((node) => node.type === FlowGramNode.BlockStart);

    if (!blockStartNode) {
      throw new Error('block start node not found');
    }

    const blockOutputs: LoopOutputs[] = [];

    // not use Array method to make error stack more concise, and better performance
    for (let i = 0; i < loopArray.length; i++) {
      const loopItem = loopArray[i];
      const subContext = context.runtime.sub();
      subContext.variableStore.setVariable({
        nodeID: `${loopNodeID}_locals`,
        key: 'item',
        type: itemsType,
        value: loopItem,
      });
      await engine.executeNode({
        context: subContext,
        node: blockStartNode,
      });
      const blockOutput = this.getBlockOutput(context, subContext);
      blockOutputs.push(blockOutput);
    }

    this.setLoopNodeOutputs(context, blockOutputs);
    const outputs = this.combineBlockOutputs(context, blockOutputs);

    return {
      outputs,
    };
  }

  private getLoopArrayVariable(
    executionContext: ExecutionContext
  ): IVariableParseResult<LoopArray> & {
    itemsType: WorkflowVariableType;
  } {
    const loopNodeData = executionContext.node.data as LoopNodeSchema['data'];
    const LoopArrayVariable = executionContext.runtime.state.parseRef<LoopArray>(
      loopNodeData.loopFor
    );
    this.checkLoopArray(LoopArrayVariable);
    return LoopArrayVariable as IVariableParseResult<LoopArray> & {
      itemsType: WorkflowVariableType;
    };
  }

  private checkLoopArray(LoopArrayVariable: IVariableParseResult<LoopArray> | null): void {
    const loopArray = LoopArrayVariable?.value;
    if (!loopArray || isNil(loopArray) || !Array.isArray(loopArray)) {
      throw new Error('loopFor is required');
    }
    const loopArrayType = LoopArrayVariable.type;
    if (loopArrayType !== WorkflowVariableType.Array) {
      throw new Error('loopFor must be an array');
    }
    const loopArrayItemType = LoopArrayVariable.itemsType;
    if (isNil(loopArrayItemType)) {
      throw new Error('loopFor items must be array items');
    }
  }

  private getBlockOutput(
    executionContext: ExecutionContext,
    subContext: IContext
  ): LoopBlockVariables {
    const loopNodeData = executionContext.node.data as LoopNodeSchema['data'];
    const blockOutput = Object.entries(loopNodeData.loopOutputs).reduce(
      (acc, [outputName, outputRef]) => {
        const outputVariable = subContext.state.parseRef(outputRef);
        if (!outputVariable) {
          return acc;
        }
        return {
          ...acc,
          [outputName]: outputVariable,
        };
      },
      {} as LoopBlockVariables
    );
    return blockOutput;
  }

  private setLoopNodeOutputs(
    executionContext: ExecutionContext,
    blockOutputs: LoopBlockVariables[]
  ) {
    const loopNode = executionContext.node as INode<LoopNodeSchema['data']>;
    const loopNodeData = loopNode.data;
    const loopOutputNames = Object.keys(loopNodeData.loopOutputs);
    loopOutputNames.forEach((outputName) => {
      const outputVariables = blockOutputs.map((blockOutput) => blockOutput[outputName]);
      const outputTypes = outputVariables.map((fieldVariable) => fieldVariable.type);
      const itemsType = WorkflowRuntimeType.getArrayItemsType(outputTypes);
      const value = outputVariables.map((fieldVariable) => fieldVariable.value);
      executionContext.runtime.variableStore.setVariable({
        nodeID: loopNode.id,
        key: outputName,
        type: WorkflowVariableType.Array,
        itemsType,
        value,
      });
    });
  }

  private combineBlockOutputs(
    executionContext: ExecutionContext,
    blockOutputs: LoopBlockVariables[]
  ): LoopOutputs {
    const loopNodeData = executionContext.node.data as LoopNodeSchema['data'];
    const loopOutputNames = Object.keys(loopNodeData.loopOutputs);
    const loopOutput = loopOutputNames.reduce(
      (outputs, outputName) => ({
        ...outputs,
        [outputName]: blockOutputs.map((blockOutput) => blockOutput[outputName].value),
      }),
      {} as LoopOutputs
    );
    return loopOutput;
  }
}
