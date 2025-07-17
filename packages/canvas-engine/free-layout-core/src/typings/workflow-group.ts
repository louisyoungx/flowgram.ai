/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { WorkflowNodeJSON } from './workflow-node';

export interface WorkflowGroupJSON extends WorkflowNodeJSON {
  data: {
    title?: string;
    color?: string;
    parentID: string;
    blockIDs: string[];
  };
}
