/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { Field } from '@flowgram.ai/fixed-layout-editor';

import './index.less';
import { LoadingDots } from '../loading-dots';
import { useNodeStatus } from '../../hooks/use-node-loading';
import { StatusDisplayField } from '../../fields/status-display';

export const FormRender = () => {
  const { loading } = useNodeStatus();
  return (
    <>
      <Field<string> name="title">
        {({ field }) => (
          <div className="form-render-title">
            <span>{field.value}</span>
            {loading && (
              <span>
                <LoadingDots />
              </span>
            )}
          </div>
        )}
      </Field>
      <Field<string> name="content">
        {({ field }) => <div className="form-render-content">{field.value}</div>}
      </Field>
      <StatusDisplayField />
    </>
  );
};
