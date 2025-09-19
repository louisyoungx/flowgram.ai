/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { describe, expect, it, vi, beforeEach } from 'vitest';
import { FlowGramNode } from '@flowgram.ai/runtime-interface';
import type {
  ExecutionContext,
  ExecutionResult,
  INodeExecutor,
  INodeExecutorFactory,
} from '@flowgram.ai/runtime-interface';

import { WorkflowRuntimeExecutor } from './index';

describe('WorkflowRuntimeExecutor', () => {
  let executor: WorkflowRuntimeExecutor;
  let mockNodeExecutor: INodeExecutor;
  let mockExecutorFactory: INodeExecutorFactory;

  beforeEach(() => {
    // Create mock node executor
    mockNodeExecutor = {
      type: FlowGramNode.Code,
      execute: vi.fn().mockResolvedValue({
        outputs: { result: 'test output' },
      }),
    };

    // Create mock executor factory
    mockExecutorFactory = vi.fn().mockImplementation(() => mockNodeExecutor);

    executor = new WorkflowRuntimeExecutor([mockExecutorFactory]);
  });

  describe('constructor', () => {
    it('should register node executors from factories', () => {
      const factory1 = vi.fn().mockImplementation(() => ({
        type: FlowGramNode.Code,
        execute: vi.fn(),
      }));
      const factory2 = vi.fn().mockImplementation(() => ({
        type: FlowGramNode.LLM,
        execute: vi.fn(),
      }));

      new WorkflowRuntimeExecutor([factory1, factory2]);

      expect(factory1).toHaveBeenCalledOnce();
      expect(factory2).toHaveBeenCalledOnce();
    });
  });

  describe('register', () => {
    it('should register a node executor', () => {
      const newExecutor: INodeExecutor = {
        type: FlowGramNode.LLM,
        execute: vi.fn().mockResolvedValue({ outputs: {} }),
      };

      executor.register(newExecutor);

      // Test that the executor was registered by trying to execute with it
      const context: ExecutionContext = {
        node: { type: FlowGramNode.LLM } as any,
        inputs: {},
        container: {} as any,
        runtime: {} as any,
        snapshot: {} as any,
      };

      expect(async () => {
        await executor.execute(context);
      }).not.toThrow();
    });
  });

  describe('execute', () => {
    it('should execute with registered node executor', async () => {
      const context: ExecutionContext = {
        node: { type: FlowGramNode.Code } as any,
        inputs: { input1: 'test' },
        container: {} as any,
        runtime: {} as any,
        snapshot: {} as any,
      };

      const result = await executor.execute(context);

      expect(mockNodeExecutor.execute).toHaveBeenCalledWith(context);
      expect(result).toEqual({
        outputs: { result: 'test output' },
      });
    });

    it('should throw error for unregistered node type', async () => {
      const context: ExecutionContext = {
        node: { type: FlowGramNode.HTTP } as any,
        inputs: {},
        container: {} as any,
        runtime: {} as any,
        snapshot: {} as any,
      };

      await expect(executor.execute(context)).rejects.toThrow(
        'No executor found for node type http'
      );
    });

    it('should pass through execution results with branch', async () => {
      const expectedResult: ExecutionResult = {
        outputs: { data: 'result' },
        branch: 'success',
      };

      mockNodeExecutor.execute = vi.fn().mockResolvedValue(expectedResult);

      const context: ExecutionContext = {
        node: { type: FlowGramNode.Code } as any,
        inputs: {},
        container: {} as any,
        runtime: {} as any,
        snapshot: {} as any,
      };

      const result = await executor.execute(context);

      expect(result).toEqual(expectedResult);
    });
  });
});
