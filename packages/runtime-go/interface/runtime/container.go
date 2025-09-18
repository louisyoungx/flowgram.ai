/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package runtimeType

// ContainerService represents any service that can be stored in the container
type ContainerService any

// IContainer defines the interface for a service container
type IContainer interface {
	// Get retrieves a service from the container by key
	Get(key any) ContainerService
}
