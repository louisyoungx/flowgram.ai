/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import React from 'react';

import { Field } from '@flowgram.ai/fixed-layout-editor';

import { ThinkingText } from './thinking-text';
import './index.less';

interface StatusData {
  loading?: boolean;
  thinking?: string;
}

interface StatusDisplayProps {
  data: StatusData;
}

const StatusDisplay: React.FC<StatusDisplayProps> = ({ data }) => (
  <div className="status-display">
    {data.loading && (
      <div className="status-loading">
        <ThinkingText thinking={data.thinking} />
      </div>
    )}
  </div>
);

export const StatusDisplayField = () => (
  <Field<StatusData> name="status">
    {({ field }) => field.value && <StatusDisplay data={field.value} />}
  </Field>
);
