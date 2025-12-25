/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import React from 'react';

import {
  useService,
  WorkflowDocument,
  WorkflowSelectService,
} from '@flowgram.ai/free-layout-editor';

import { useNodeFormPanel } from '@/plugins/panel-manager-plugin/hooks';
import { nodeRegistries } from '@/nodes';
import { WorkflowNodeType } from '@/nodes';

interface BaseNodeArgs {
  operation?: 'create' | 'update';
  id: string;
  title?: string;
  description?: string;
  [key: string]: any;
}

interface NodeResult {
  success: boolean;
  data?: { nodeID: string };
  message?: string;
  error?: string;
}

const truncateText = (text: string, maxLength: number = 50): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

export const GenericNodeRender: React.FC<{
  args: BaseNodeArgs;
  result?: NodeResult | string;
  nodeType: WorkflowNodeType;
}> = ({ args, result, nodeType }) => {
  const document = useService(WorkflowDocument);
  const selectService = useService(WorkflowSelectService);

  if (!args) {
    return null;
  }

  const parsedResult: NodeResult | null = React.useMemo(() => {
    if (!result) return null;
    if (typeof result === 'string') {
      try {
        return JSON.parse(result);
      } catch {
        return null;
      }
    }
    return result;
  }, [result]);

  const nodeRegistry = React.useMemo(
    () => nodeRegistries.find((reg) => reg.type === nodeType),
    [nodeType]
  );

  const isCreate = args.operation === 'create';
  const success = parsedResult?.success ?? false;
  const hasResult = parsedResult !== null;

  const nodeId = args.id;
  const nodeTitle = args.title;
  const nodeDescription = args.description;

  const borderColor = hasResult && !success ? '#ef4444' : 'rgba(6, 7, 9, 0.15)';

  const operationLabel = isCreate ? `创建节点 ${nodeType}` : `更新节点 ${nodeType}`;
  const { open: openNodeFormPanel } = useNodeFormPanel();

  const handleClick = React.useCallback(() => {
    const node = document.getNode(nodeId);
    if (node) {
      selectService.selectNodeAndScrollToView(node);
      openNodeFormPanel({ nodeId: node.id });
    }
  }, [document, selectService, nodeId]);

  return (
    <div
      style={{
        width: '360px',
        backgroundColor: '#fff',
        border: `1px solid ${borderColor}`,
        borderRadius: '8px',
        boxShadow: '0 2px 6px 0 rgba(0, 0, 0, 0.04), 0 4px 12px 0 rgba(0, 0, 0, 0.02)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'box-shadow 0.2s ease, transform 0.2s ease',
      }}
      onClick={handleClick}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow =
          '0 4px 12px 0 rgba(0, 0, 0, 0.08), 0 8px 24px 0 rgba(0, 0, 0, 0.04)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow =
          '0 2px 6px 0 rgba(0, 0, 0, 0.04), 0 4px 12px 0 rgba(0, 0, 0, 0.02)';
      }}
    >
      <div
        style={{
          padding: '12px',
          borderBottom: '1px solid rgba(6, 7, 9, 0.08)',
          backgroundColor: hasResult && !success ? '#fef2f2' : '#fff',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '8px',
            marginBottom: nodeDescription ? '6px' : '0',
          }}
        >
          {nodeRegistry?.info?.icon && (
            <img
              src={nodeRegistry.info.icon}
              alt={nodeType}
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '6px',
                objectFit: 'cover',
                flexShrink: 0,
              }}
            />
          )}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              flex: 1,
              minWidth: 0,
            }}
          >
            <div
              style={{
                fontSize: '14px',
                fontWeight: 600,
                color: '#1f2937',
              }}
            >
              {nodeTitle || nodeRegistry?.info?.description || 'Node'}
            </div>
            <div
              style={{
                fontSize: '11px',
                color: '#6b7280',
                fontFamily: 'monospace',
                backgroundColor: 'rgba(107, 114, 128, 0.1)',
                padding: '2px 6px',
                borderRadius: '4px',
                flexShrink: 0,
              }}
            >
              {nodeId}
            </div>
          </div>
          {hasResult && (
            <div
              style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                backgroundColor: success ? '#10b981' : '#ef4444',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                fontWeight: 'bold',
                flexShrink: 0,
              }}
            >
              {success ? '✓' : '✗'}
            </div>
          )}
        </div>
        {nodeDescription && (
          <div
            style={{
              fontSize: '12px',
              color: '#6b7280',
              lineHeight: '1.5',
            }}
          >
            {truncateText(nodeDescription, 80)}
          </div>
        )}
      </div>

      <div
        style={{
          padding: '12px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}
      >
        <div
          style={{
            fontSize: '12px',
            color: '#374151',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              padding: '2px 6px',
              backgroundColor: hasResult && !success ? '#fee2e2' : '#f3f4f6',
              color: hasResult && !success ? '#991b1b' : '#374151',
              borderRadius: '4px',
              fontSize: '11px',
              fontWeight: 500,
            }}
          >
            {operationLabel}
          </span>
        </div>

        {nodeRegistry?.info?.description && !nodeDescription && (
          <div
            style={{
              fontSize: '11px',
              color: '#9ca3af',
              lineHeight: '1.4',
              fontStyle: 'italic',
            }}
          >
            {truncateText(nodeRegistry.info.description, 60)}
          </div>
        )}

        {hasResult && parsedResult.message && (
          <div
            style={{
              marginTop: '4px',
              padding: '0 8px',
              borderRadius: '4px',
              fontSize: '11px',
              color: success ? '#374151' : '#991b1b',
              lineHeight: '1.4',
            }}
          >
            {parsedResult.message}
          </div>
        )}

        {hasResult && parsedResult.error && (
          <div
            style={{
              marginTop: '4px',
              padding: '8px',
              backgroundColor: '#fef2f2',
              borderRadius: '4px',
              fontSize: '11px',
              color: '#991b1b',
              lineHeight: '1.4',
            }}
          >
            {parsedResult.error}
          </div>
        )}
      </div>
    </div>
  );
};
