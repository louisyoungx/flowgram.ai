/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { describe, expect, it, beforeEach } from 'vitest';

import { WorkflowRuntimeCache } from './index';

describe('WorkflowRuntimeCache', () => {
  let cache: WorkflowRuntimeCache;

  beforeEach(() => {
    cache = new WorkflowRuntimeCache();
    cache.init();
  });

  describe('init', () => {
    it('should initialize the cache', () => {
      const newCache = new WorkflowRuntimeCache();
      newCache.init();

      expect(newCache.has('test')).toBe(false);
      newCache.set('test', 'value');
      expect(newCache.has('test')).toBe(true);
    });
  });

  describe('dispose', () => {
    it('should clear all cached data', () => {
      cache.set('key1', 'value1');
      cache.set('key2', 'value2');

      cache.dispose();

      expect(cache.has('key1')).toBe(false);
      expect(cache.has('key2')).toBe(false);
    });
  });

  describe('get and set', () => {
    it('should store and retrieve values', () => {
      const testValue = { data: 'test' };
      cache.set('testKey', testValue);

      expect(cache.get('testKey')).toBe(testValue);
    });

    it('should return undefined for non-existing key', () => {
      expect(cache.get('nonExistentKey')).toBeUndefined();
    });

    it('should support method chaining', () => {
      const result = cache.set('key1', 'value1').set('key2', 'value2');

      expect(result).toBe(cache);
      expect(cache.get('key1')).toBe('value1');
      expect(cache.get('key2')).toBe('value2');
    });
  });

  describe('delete', () => {
    it('should remove existing key and return true', () => {
      cache.set('key', 'value');

      const result = cache.delete('key');

      expect(result).toBe(true);
      expect(cache.has('key')).toBe(false);
    });

    it('should return false for non-existing key', () => {
      expect(cache.delete('nonExistentKey')).toBe(false);
    });
  });

  describe('has', () => {
    it('should return correct existence status', () => {
      expect(cache.has('key')).toBe(false);

      cache.set('key', 'value');
      expect(cache.has('key')).toBe(true);

      cache.delete('key');
      expect(cache.has('key')).toBe(false);
    });
  });
});
