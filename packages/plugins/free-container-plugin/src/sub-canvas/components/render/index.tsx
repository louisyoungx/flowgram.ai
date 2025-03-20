import React, { CSSProperties, type FC } from 'react';

import { SubCanvasRenderStyle } from './style';
import { SubCanvasBorder } from '../border';
import { SubCanvasBackground } from '../background';

interface ISubCanvasBorder {
  className?: string;
  style?: CSSProperties;
}

export const SubCanvasRender: FC<ISubCanvasBorder> = ({ className, style }) => (
  <SubCanvasRenderStyle
    className={`sub-canvas-render ${className ?? ''}`}
    style={style}
    data-flow-editor-selectable="true"
    onDragStart={(e) => {
      e.stopPropagation();
    }}
  >
    <SubCanvasBorder>
      <SubCanvasBackground />
    </SubCanvasBorder>
  </SubCanvasRenderStyle>
);
