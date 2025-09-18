/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package utils

import (
	runtimeType "flowgram-runtime-go/interface/runtime"
)

// TraverseNodes is a generic function to traverse a node graph
func TraverseNodes(
	startNode runtimeType.INode[any],
	getConnectedNodes func(node runtimeType.INode[any]) []runtimeType.INode[any],
) []runtimeType.INode[any] {
	visited := make(map[string]bool)
	result := make([]runtimeType.INode[any], 0)

	var traverse func(node runtimeType.INode[any])
	traverse = func(node runtimeType.INode[any]) {
		for _, connectedNode := range getConnectedNodes(node) {
			if !visited[connectedNode.GetID()] {
				visited[connectedNode.GetID()] = true
				result = append(result, connectedNode)
				traverse(connectedNode)
			}
		}
	}

	traverse(startNode)
	return result
}
