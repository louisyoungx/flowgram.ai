import { useLayoutEffect } from 'react';

import { SubCanvasRender, useNodeSize } from '@flowgram.ai/free-container-plugin';

import { useNodeRenderContext } from '../../hooks';

export const SubCanvas = () => {
  const { node } = useNodeRenderContext();
  const nodeSize = useNodeSize();
  const { height, width } = nodeSize ?? {};
  const nodeHeight = nodeSize?.height ?? 0;
  const { padding } = node.transform;

  useLayoutEffect(() => {
    node.renderData.node.style.width = width + 'px';
    node.renderData.node.style.height = height + 'px';
  }, [height, width]);

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
