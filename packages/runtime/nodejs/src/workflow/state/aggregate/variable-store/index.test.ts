import { beforeEach, describe, expect, it } from 'vitest';

import { WorkflowRuntimeVariableStore } from '@workflow/state';

describe('WorkflowRuntimeVariableStore', () => {
  let variableStore: WorkflowRuntimeVariableStore;

  beforeEach(() => {
    variableStore = new WorkflowRuntimeVariableStore();
  });

  it('should create a store with unique id', () => {
    const store1 = new WorkflowRuntimeVariableStore();
    const store2 = new WorkflowRuntimeVariableStore();
    expect(store1.id).toBeTruthy();
    expect(store2.id).toBeTruthy();
    expect(store1.id).not.toBe(store2.id);
  });

  describe('set', () => {
    it('should set value without path', () => {
      const value = { foo: 'bar' };
      variableStore.set({
        nodeID: 'node1',
        variableKey: 'var1',
        value,
      });

      expect(variableStore.store.node1.var1.value).toEqual(value);
    });

    it('should set value with path', () => {
      variableStore.set({
        nodeID: 'node1',
        variableKey: 'var1',
        variablePath: ['foo', 'bar'],
        value: 'baz',
      });

      expect(variableStore.store.node1.var1.value).toEqual({
        foo: { bar: 'baz' },
      });
    });

    it('should update existing value', () => {
      variableStore.set({
        nodeID: 'node1',
        variableKey: 'var1',
        value: { foo: 'bar' },
      });

      variableStore.set({
        nodeID: 'node1',
        variableKey: 'var1',
        value: { baz: 'qux' },
      });

      expect(variableStore.store.node1.var1.value).toEqual({ baz: 'qux' });
    });
  });

  describe('get', () => {
    beforeEach(() => {
      variableStore.set({
        nodeID: 'node1',
        variableKey: 'var1',
        value: { foo: { bar: 'baz' } },
      });
    });

    it('should get value without path', () => {
      const value = variableStore.get({
        nodeID: 'node1',
        variableKey: 'var1',
      });

      expect(value).toEqual({ foo: { bar: 'baz' } });
    });

    it('should get value with path', () => {
      const value = variableStore.get({
        nodeID: 'node1',
        variableKey: 'var1',
        variablePath: ['foo', 'bar'],
      });

      expect(value).toBe('baz');
    });

    it('should return undefined for non-existent node', () => {
      const value = variableStore.get({
        nodeID: 'non-existent',
        variableKey: 'var1',
      });

      expect(value).toBeUndefined();
    });

    it('should return undefined for non-existent variable', () => {
      const value = variableStore.get({
        nodeID: 'node1',
        variableKey: 'non-existent',
      });

      expect(value).toBeUndefined();
    });

    it('should return undefined for non-existent path', () => {
      const value = variableStore.get({
        nodeID: 'node1',
        variableKey: 'var1',
        variablePath: ['non', 'existent'],
      });

      expect(value).toBeUndefined();
    });
  });
});
