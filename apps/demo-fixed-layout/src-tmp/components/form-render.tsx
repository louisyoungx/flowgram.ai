/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { Field } from '@flowgram.ai/fixed-layout-editor';

export const FormRender = () => (
  <>
    <Field<string> name="title">
      {({ field }) => (
        <div
          style={{
            fontSize: '18px',
            fontWeight: 'bold',
            marginBottom: '12px',
            color: '#333333',
          }}
        >
          {field.value}
        </div>
      )}
    </Field>
    <Field<string> name="content">
      {({ field }) => (
        <div
          style={{
            fontSize: '14px',
            lineHeight: '1.6',
            color: '#666666',
          }}
        >
          {field.value}
        </div>
      )}
    </Field>
  </>
);
