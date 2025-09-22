/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package cache

import runtimeType "flowgram-runtime-go/interface/runtime"

// WorkflowRuntimeCache implements ICache interface
type WorkflowRuntimeCache struct {
    // map to store key-value pairs
    m map[string]any
}

// Init initializes the cache
func (c *WorkflowRuntimeCache) Init() {
    c.m = make(map[string]any)
}

// Dispose clears the cache
func (c *WorkflowRuntimeCache) Dispose() {
    clear(c.m)
}

// Get retrieves a value by key
func (c *WorkflowRuntimeCache) Get(key string) any {
    return c.m[key]
}

// Set stores a key-value pair
func (c *WorkflowRuntimeCache) Set(key string, value any) runtimeType.ICache {
    c.m[key] = value
    return c
}

// Delete removes a key-value pair
func (c *WorkflowRuntimeCache) Delete(key string) bool {
    if _, exists := c.m[key]; exists {
        delete(c.m, key)
        return true
    }
    return false
}

// Has checks if a key exists
func (c *WorkflowRuntimeCache) Has(key string) bool {
    _, exists := c.m[key]
    return exists
}

// NewWorkflowRuntimeCache creates a new WorkflowRuntimeCache instance
func NewWorkflowRuntimeCache() *WorkflowRuntimeCache {
    return &WorkflowRuntimeCache{
        m: make(map[string]any),
    }
}
