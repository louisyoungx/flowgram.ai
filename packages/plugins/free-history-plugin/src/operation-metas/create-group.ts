import { OperationMeta } from '@flowgram.ai/history';
import { WorkflowDocument } from '@flowgram.ai/free-layout-core';
import { createOrUngroupValue, FlowNodeBaseType } from '@flowgram.ai/document';
import { PluginContext } from '@flowgram.ai/core';

import { baseOperationMeta } from './base';
import { FreeOperationType } from '../types';

export const createGroupOperationMeta: OperationMeta<createOrUngroupValue, PluginContext, void> = {
  ...baseOperationMeta,
  type: FreeOperationType.createGroup,
  inverse: (op) => ({ ...op, type: FreeOperationType.ungroup }),
  apply: (op, ctx) => {
    const document = ctx.get<WorkflowDocument>(WorkflowDocument);
    document.addFromNode(op.value.targetId, {
      id: op.value.groupId,
      type: FlowNodeBaseType.GROUP,
    });
    document.moveNodes({
      dropNodeId: op.value.groupId,
      sortNodeIds: op.value.nodeIds,
      inside: true,
    });
  },
  getLabel: (op, ctx) => {
    const value = op.value;
    return `Create group ${value.groupId} from ${value.targetId}`;
  },
  getDescription: (op, ctx) => {
    const value = op.value;
    return `Create group with nodes ${value.nodeIds.join(', ')}`;
  },
};
