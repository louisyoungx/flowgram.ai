/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import '@flowgram.ai/fixed-layout-editor/index.css';
import './index.less';

import classNames from 'classnames';
import { FlowNodeEntity, useNodeRender } from '@flowgram.ai/fixed-layout-editor';

export const NodeRender = ({ node }: { node: FlowNodeEntity }) => {
  const { onMouseEnter, onMouseLeave, form, dragging, isBlockOrderIcon, isBlockIcon, activated } =
    useNodeRender();

  const className = classNames('node-render', {
    'node-render--activated': activated,
    'node-render--dragging': dragging,
    'node-render--block-order-icon': isBlockOrderIcon,
    'node-render--block-icon': isBlockIcon,
  });

  return (
    <div className={className} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {form?.render()}
    </div>
  );
};
