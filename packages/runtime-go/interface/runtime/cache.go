/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package runtimeType

// ICache defines a generic cache interface
type ICache interface {
	// Init initializes the cache
	Init()

	// Dispose cleans up the cache
	Dispose()

	// Get retrieves a value by key
	Get(key string) any

	// Set stores a value with the given key
	Set(key string, value any) ICache

	// Delete removes a key-value pair
	Delete(key string) bool

	// Has checks if a key exists
	Has(key string) bool
}
