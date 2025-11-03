/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { useState } from 'react';

import { FlowDocumentJSON, useService } from '@flowgram.ai/fixed-layout-editor';

import './index.less';
import { WorkflowLoadSchemaService } from '../../services';
import { exampleSchemas } from './example-schemas';

export const UpdateSchema = () => {
  const loadSchemaService = useService(WorkflowLoadSchemaService);
  const [currentSchemaIndex, setCurrentSchemaIndex] = useState<number>(0);

  // Schema version names for display
  const schemaVersions = [
    '加载初始状态',
    '加载中状态',
    '基础节点加载中',
    '基础结构',
    '核心功能',
    '完整工作流',
  ];

  const handleUpdateSchema = (): void => {
    const currentSchema: FlowDocumentJSON = exampleSchemas[currentSchemaIndex];

    // Update the document with current schema
    loadSchemaService.load(currentSchema);

    // Move to next schema index, cycle back to 0 when reaching the end
    setCurrentSchemaIndex((currentSchemaIndex + 1) % exampleSchemas.length);
  };

  // Determine button text based on current state
  const getButtonText = (): string =>
    `更新 ${currentSchemaIndex}.${schemaVersions[currentSchemaIndex]}`;

  return (
    <>
      <button onClick={handleUpdateSchema} className="update-schema-button">
        <span className="button-content">{getButtonText()}</span>
      </button>
    </>
  );
};
