/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import './index.less';

export const UpdateSchema = () => {
  const handleUpdateSchema = () => {
    // Handle update schema logic here
    console.log('Schema update triggered');
  };

  return (
    <>
      <button onClick={handleUpdateSchema} className="update-schema-button">
        <span className="button-content">更新 Schema</span>
      </button>
    </>
  );
};
