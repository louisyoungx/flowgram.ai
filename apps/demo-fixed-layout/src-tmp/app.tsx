/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import '@flowgram.ai/fixed-layout-editor/index.css';

import { createRoot } from 'react-dom/client';
import { FixedLayoutEditorProvider, EditorRenderer } from '@flowgram.ai/fixed-layout-editor';

import { useEditorProps } from './use-editor-props';
import { UpdateSchema } from './components/update-schemas';
import { Tools } from './components/tools';
import { Minimap } from './components/minimap';

const FlowGramApp = () => {
  const editorProps = useEditorProps();
  return (
    <FixedLayoutEditorProvider {...editorProps}>
      <EditorRenderer />
      <Tools />
      <Minimap />
      <UpdateSchema />
    </FixedLayoutEditorProvider>
  );
};

const app = createRoot(document.getElementById('root')!);

app.render(<FlowGramApp />);
