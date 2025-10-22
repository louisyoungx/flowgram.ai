/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { FC } from 'react';

import { Sandpack } from '@codesandbox/sandpack-react';

import './index.less';

interface CodePreviewProps {
  files: Record<string, string>;
  activeFile?: string;
}

export const CodePreview: FC<CodePreviewProps> = ({ files, activeFile }) => (
  <Sandpack
    files={files}
    theme="light"
    template="react-ts"
    customSetup={{
      dependencies: {
        '@flowgram.ai/free-layout-editor': '0.5.5',
        '@flowgram.ai/free-snap-plugin': '0.5.5',
        '@flowgram.ai/minimap-plugin': '0.5.5',
        'styled-components': '5.3.11',
      },
    }}
    options={{
      editorHeight: 350,
      activeFile,
    }}
  />
);
