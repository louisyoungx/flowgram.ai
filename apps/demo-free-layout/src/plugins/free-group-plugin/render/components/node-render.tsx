import {
  FlowNodeFormData,
  Form,
  FormModelV2,
  useNodeRender,
} from '@flowgram.ai/free-layout-editor';
import { useNodeSize } from '@flowgram.ai/free-container-plugin';

import { HEADER_HEIGHT, HEADER_PADDING } from '../constant';
import { UngroupButton } from './ungroup';
import { GroupTools } from './tools';
import { GroupHeader } from './header';
import { GroupBackground } from './background';

export const GroupNodeRender = () => {
  const { node, selected, selectNode, nodeRef, startDrag, onFocus, onBlur } = useNodeRender();
  const nodeSize = useNodeSize();
  const formModel = node.getData(FlowNodeFormData).getFormModel<FormModelV2>();
  const formControl = formModel?.formControl;

  const { height, width } = nodeSize ?? {};
  const nodeHeight = height ?? 0;
  return (
    <div
      className={`workflow-group-render ${selected ? 'selected' : ''}`}
      ref={nodeRef}
      data-group-id={node.id}
      data-node-selected={String(selected)}
      onMouseDown={selectNode}
      onClick={(e) => {
        selectNode(e);
      }}
    >
      <Form control={formControl}>
        <>
          <GroupHeader
            onMouseDown={(e) => {
              startDrag(e);
            }}
            onFocus={onFocus}
            onBlur={onBlur}
            style={{
              height: HEADER_HEIGHT,
            }}
          >
            <GroupTools />
            <UngroupButton
              node={node}
              style={{
                left: width,
              }}
            />
          </GroupHeader>
          <GroupBackground
            node={node}
            style={{
              top: HEADER_HEIGHT + HEADER_PADDING,
              width,
              height: nodeHeight - HEADER_HEIGHT - HEADER_PADDING,
            }}
          />
        </>
      </Form>
    </div>
  );
};
