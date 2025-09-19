/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package cache

import (
    "reflect"
    "testing"
)

func TestWorkflowRuntimeCache(t *testing.T) {
    t.Run("init", func(t *testing.T) {
        t.Run("should initialize the cache", func(t *testing.T) {
            newCache := &WorkflowRuntimeCache{}
            newCache.Init()

            if newCache.Has("test") {
                t.Error("expected cache to not have 'test' key")
            }

            newCache.Set("test", "value")
            if !newCache.Has("test") {
                t.Error("expected cache to have 'test' key")
            }
        })
    })

    t.Run("dispose", func(t *testing.T) {
        t.Run("should clear all cached data", func(t *testing.T) {
            cache := &WorkflowRuntimeCache{}
            cache.Init()

            cache.Set("key1", "value1")
            cache.Set("key2", "value2")

            cache.Dispose()

            if cache.Has("key1") {
                t.Error("expected key1 to be removed")
            }
            if cache.Has("key2") {
                t.Error("expected key2 to be removed")
            }
        })
    })

    t.Run("get and set", func(t *testing.T) {
        t.Run("should store and retrieve values", func(t *testing.T) {
            cache := &WorkflowRuntimeCache{}
            cache.Init()

            testValue := map[string]string{"data": "test"}
            cache.Set("testKey", testValue)

            got := cache.Get("testKey")
            if !reflect.DeepEqual(got, testValue) {
                t.Errorf("expected %v, got %v", testValue, got)
            }
        })

        t.Run("should return nil for non-existing key", func(t *testing.T) {
            cache := &WorkflowRuntimeCache{}
            cache.Init()

            if got := cache.Get("nonExistentKey"); got != nil {
                t.Errorf("expected nil, got %v", got)
            }
        })

        t.Run("should support method chaining", func(t *testing.T) {
            cache := &WorkflowRuntimeCache{}
            cache.Init()

            result := cache.Set("key1", "value1").Set("key2", "value2")

            if result != cache {
                t.Error("expected method chaining to return cache instance")
            }
            if got := cache.Get("key1"); got != "value1" {
                t.Errorf("expected value1, got %v", got)
            }
            if got := cache.Get("key2"); got != "value2" {
                t.Errorf("expected value2, got %v", got)
            }
        })
    })

    t.Run("delete", func(t *testing.T) {
        t.Run("should remove existing key and return true", func(t *testing.T) {
            cache := &WorkflowRuntimeCache{}
            cache.Init()

            cache.Set("key", "value")

            if result := cache.Delete("key"); !result {
                t.Error("expected Delete to return true for existing key")
            }
            if cache.Has("key") {
                t.Error("expected key to be deleted")
            }
        })

        t.Run("should return false for non-existing key", func(t *testing.T) {
            cache := &WorkflowRuntimeCache{}
            cache.Init()

            if result := cache.Delete("nonExistentKey"); result {
                t.Error("expected Delete to return false for non-existing key")
            }
        })
    })

    t.Run("has", func(t *testing.T) {
        t.Run("should return correct existence status", func(t *testing.T) {
            cache := &WorkflowRuntimeCache{}
            cache.Init()

            if cache.Has("key") {
                t.Error("expected key to not exist initially")
            }

            cache.Set("key", "value")
            if !cache.Has("key") {
                t.Error("expected key to exist after setting")
            }

            cache.Delete("key")
            if cache.Has("key") {
                t.Error("expected key to not exist after deletion")
            }
        })
    })
}