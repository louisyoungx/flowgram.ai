/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

export const UpdateSchema = () => {
  const handleUpdateSchema = () => {
    // Handle update schema logic here
    console.log('Schema update triggered');
  };

  return (
    <>
      <button
        onClick={handleUpdateSchema}
        style={{
          // Position and layout
          position: 'absolute',
          top: 50,
          right: 50,
          zIndex: 100,

          // Size and spacing
          width: 'auto',
          minWidth: 120,
          height: 44,
          padding: '12px 24px',

          // Typography
          fontSize: '14px',
          fontWeight: '600',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          color: '#ffffff',

          // Background and borders
          background: '#667eea',
          border: 'none',
          borderRadius: '8px',

          // Shadow and effects
          boxShadow: '0 4px 12px rgba(102, 126, 234, 0.4), 0 2px 4px rgba(0, 0, 0, 0.1)',

          // Interaction states
          cursor: 'pointer',
          transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',

          // Prevent text selection
          userSelect: 'none',
          WebkitUserSelect: 'none',
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>更新 Schema</span>
      </button>
    </>
  );
};
