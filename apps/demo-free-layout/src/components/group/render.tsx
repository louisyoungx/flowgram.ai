import { useNodeRender } from '@flowgram.ai/free-layout-editor';
import { useNodeSize } from '@flowgram.ai/free-container-plugin';

export const GroupNodeRender = () => {
  const { selected, selectNode, nodeRef, startDrag, onFocus, onBlur } = useNodeRender();
  const nodeSize = useNodeSize();
  const { height, width } = nodeSize ?? {};
  return (
    <div
      className={`group-node-render ${selected ? 'selected' : ''}`}
      ref={nodeRef}
      data-node-selected={String(selected)}
      onMouseDown={selectNode}
      onClick={(e) => {
        selectNode(e);
      }}
    >
      <div
        className="group-node-header"
        draggable={true}
        onMouseDown={(e) => {
          startDrag(e);
        }}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <div
        className="group-node-background"
        style={{
          width,
          height,
        }}
      />
    </div>
  );
};
