/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { Field } from '@flowgram.ai/fixed-layout-editor';

import './index.less';
import { StatusDisplayField } from '../../fields/status-display';

export const FormRender = () => (
  <>
    <Field<string> name="title">
      {({ field }) => <div className="form-render-title">{field.value}</div>}
    </Field>
    <Field<string> name="content">
      {({ field }) => <div className="form-render-content">{field.value}</div>}
    </Field>
    <StatusDisplayField />
  </>
);
