import { nanoid } from 'nanoid';
import {
  WorkflowNodeEntity,
  PositionSchema,
  FlowNodeTransformData,
  FlowNodeBaseType,
} from '@flowgram.ai/free-layout-editor';

import { FlowNodeRegistry } from '../../typings';
import iconLoop from '../../assets/icon-loop.jpg';

let index = 0;
export const GroupNodeRegistry: FlowNodeRegistry = {
  type: FlowNodeBaseType.GROUP,
  info: {
    icon: iconLoop,
    description:
      'Used to repeatedly execute a series of tasks by setting the number of iterations and logic.',
  },
  meta: {
    renderKey: FlowNodeBaseType.GROUP,
    isContainer: true,
    disableSideBar: true,
    disablePorts: true,
    size: {
      width: 560,
      height: 400,
    },
    padding: () => ({
      top: 80,
      bottom: 40,
      left: 65,
      right: 65,
    }),
    selectable(node: WorkflowNodeEntity, mousePos?: PositionSchema): boolean {
      if (!mousePos) {
        return true;
      }
      const transform = node.getData<FlowNodeTransformData>(FlowNodeTransformData);
      return !transform.bounds.contains(mousePos.x, mousePos.y);
    },
    expandable: false,
  },
  onAdd() {
    return {
      id: `group_${nanoid(5)}`,
      type: 'group',
      data: {
        title: `group_${++index}`,
        inputsValues: {
          loopTimes: 2,
        },
      },
    };
  },
  formMeta: {
    render: () => <></>,
  },
  onCreate() {
    // NOTICE: 这个函数是为了避免触发固定布局 flowDocument.addBlocksAsChildren
  },
};
