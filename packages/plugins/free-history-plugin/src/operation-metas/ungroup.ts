import { OperationMeta } from '@flowgram.ai/history';
import { WorkflowDocument } from '@flowgram.ai/free-layout-core';
import { createOrUngroupValue } from '@flowgram.ai/document';
import { PluginContext } from '@flowgram.ai/core';

import { baseOperationMeta } from './base';
import { FreeOperationType } from '../types';

export const ungroupOperationMeta: OperationMeta<createOrUngroupValue, PluginContext, void> = {
  ...baseOperationMeta,
  type: FreeOperationType.ungroup,
  inverse: (op) => ({ ...op, type: FreeOperationType.createGroup }),
  apply: (op, ctx) => {
    const document = ctx.get<WorkflowDocument>(WorkflowDocument);
    document.moveNodes({
      dropNodeId: op.value.groupId,
      sortNodeIds: op.value.nodeIds,
    });
    return document.getNode(op.value.groupId)?.dispose();
  },
  getLabel: (op, ctx) => {
    const value = op.value;
    return `Ungroup ${value.groupId}`;
  },
  getDescription: (op, ctx) => {
    const value = op.value;
    return `Ungroup with nodes ${value.nodeIds.join(', ')}`;
  },
};
