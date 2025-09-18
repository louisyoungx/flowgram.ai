/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package schema

// XYSchema defines a 2D coordinate
type XYSchema struct {
	X float64 `json:"x"`
	Y float64 `json:"y"`
}

// PositionSchema is an alias for XYSchema
type PositionSchema = XYSchema