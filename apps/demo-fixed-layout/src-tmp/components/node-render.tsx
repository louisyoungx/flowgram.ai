/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import '@flowgram.ai/fixed-layout-editor/index.css';

import { FlowNodeEntity, useNodeRender } from '@flowgram.ai/fixed-layout-editor';

export const NodeRender = ({ node }: { node: FlowNodeEntity }) => {
  const { onMouseEnter, onMouseLeave, form, dragging, isBlockOrderIcon, isBlockIcon, activated } =
    useNodeRender();

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        background: '#fff',
        border: '1px solid rgba(6, 7, 9, 0.15)',
        borderColor: activated ? '#82a7fc' : 'rgba(6, 7, 9, 0.15)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        cursor: 'move',
        padding: '16px',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        width: '100%',
        minWidth: '200px',
        opacity: dragging ? 0.3 : 1,
        ...(isBlockOrderIcon || isBlockIcon ? { width: 260 } : {}),
      }}
    >
      {form?.render()}
    </div>
  );
};
