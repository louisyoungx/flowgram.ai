/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { useState } from 'react';

import { FlowDocument, useService } from '@flowgram.ai/fixed-layout-editor';

import './index.less';
import { exampleSchemas } from './example-schemas';

export const UpdateSchema = () => {
  const document = useService(FlowDocument);
  const [currentSchemaIndex, setCurrentSchemaIndex] = useState<number>(0);

  // Schema version names for display
  const schemaVersions = ['0.加载初始状态', '1.基础结构', '2.核心功能', '3.完整工作流'];

  const handleUpdateSchema = (): void => {
    // Update the document with current schema
    document.fromJSON(exampleSchemas[currentSchemaIndex]);

    // Move to next schema index, cycle back to 0 when reaching the end
    setCurrentSchemaIndex((currentSchemaIndex + 1) % exampleSchemas.length);
  };

  // Determine button text based on current state
  const getButtonText = (): string => `更新 ${schemaVersions[currentSchemaIndex]}`;

  return (
    <>
      <button onClick={handleUpdateSchema} className="update-schema-button">
        <span className="button-content">{getButtonText()}</span>
      </button>
    </>
  );
};
