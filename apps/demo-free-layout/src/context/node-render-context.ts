import React from 'react';

import type { NodeRenderReturnType } from '@flowgram.ai/free-layout-editor';

interface INodeRenderContext extends NodeRenderReturnType {
  nodeSize?: {
    width: number;
    height: number;
  };
}

/** 业务自定义节点上下文 */
export const NodeRenderContext = React.createContext<INodeRenderContext>({} as INodeRenderContext);
