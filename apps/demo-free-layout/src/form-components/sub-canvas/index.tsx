import { SubCanvasRender } from '@flowgram.ai/free-container-plugin';

import { useNodeRenderContext } from '../../hooks';

export const SubCanvas = () => {
  const { node, nodeSize } = useNodeRenderContext();
  const nodeHeight = nodeSize?.height ?? 0;
  const { padding } = node.transform;
  return (
    <>
      <SubCanvasRender
        style={{
          height: nodeHeight - padding.top,
        }}
      />
    </>
  );
};
