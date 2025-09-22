/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package container

import (
	"sync"

	"flowgram-runtime-go/domain/engine"
	"flowgram-runtime-go/domain/executor"
	"flowgram-runtime-go/domain/validation"
	"flowgram-runtime-go/nodes"
	runtimeType "flowgram-runtime-go/interface/runtime"
)

// WorkflowRuntimeContainer implements IContainer interface
type WorkflowRuntimeContainer struct {
	services map[string]runtimeType.ContainerService
	mutex    sync.RWMutex
}

// NewWorkflowRuntimeContainer creates a new container instance with provided services
func NewWorkflowRuntimeContainer(services map[string]runtimeType.ContainerService) *WorkflowRuntimeContainer {
	return &WorkflowRuntimeContainer{
		services: services,
		mutex:    sync.RWMutex{},
	}
}

// Get retrieves a service from the container by key
func (c *WorkflowRuntimeContainer) Get(key any) runtimeType.ContainerService {
	c.mutex.RLock()
	defer c.mutex.RUnlock()

	keyStr, ok := key.(string)
	if !ok {
		return nil
	}

	return c.services[keyStr]
}

// Set stores a service in the container with the given key
func (c *WorkflowRuntimeContainer) Set(key string, service runtimeType.ContainerService) {
	c.mutex.Lock()
	defer c.mutex.Unlock()

	c.services[key] = service
}

// Container singleton instance
var (
	instance *WorkflowRuntimeContainer
	once     sync.Once
)

// GetInstance returns the singleton container instance
func GetInstance() runtimeType.IContainer {
	once.Do(func() {
		services := createServices()
		instance = NewWorkflowRuntimeContainer(services)
	})
	return instance
}

// createServices creates and configures all runtime services
func createServices() map[string]runtimeType.ContainerService {
	// Create validation service
	validationService := validation.NewWorkflowRuntimeValidation()

	// Create executor service with all available node executors
	executorService := executor.NewWorkflowRuntimeExecutor(nodes.WorkflowRuntimeNodeExecutors)

	// Create engine service with dependencies
	engineServices := runtimeType.EngineServices{
		Validation: validationService,
		Executor:   executorService,
	}
	engineService := engine.NewWorkflowRuntimeEngine(engineServices)

	// Return services map
	return map[string]runtimeType.ContainerService{
		runtimeType.ValidationKey: validationService,
		runtimeType.ExecutorKey:   executorService,
		runtimeType.EngineKey:     engineService,
	}
}

// ResetInstance resets the singleton instance (useful for testing)
func ResetInstance() {
	instance = nil
	once = sync.Once{}
}