/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import React from 'react';

import { createRoot } from 'react-dom/client';

import { Editor } from './editor';

const app = createRoot(document.getElementById('root')!);

console.log('react version', React.version);

app.render(<Editor />);
