/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import '@flowgram.ai/free-layout-editor/index.css';

import { FreeLayoutEditorProvider, EditorRenderer } from '@flowgram.ai/free-layout-editor';

import './index.less';

import { useEditorProps } from './use-editor-props';

export const FlowGramLogo = () => {
  const editorProps = useEditorProps();
  return (
    <div
      style={{
        position: 'absolute',
        right: 0,
        top: 50,
        width: 'calc(50vw - 64px)',
        height: 550,
      }}
    >
      <FreeLayoutEditorProvider {...editorProps}>
        <EditorRenderer />
      </FreeLayoutEditorProvider>
    </div>
  );
};
