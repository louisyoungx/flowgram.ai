/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package schema

// JsonSchemaBasicType defines the basic types for JSON schema
type JsonSchemaBasicType string

// JsonSchemaBasicType enum values
const (
	JsonSchemaBasicTypeBoolean JsonSchemaBasicType = "boolean"
	JsonSchemaBasicTypeString  JsonSchemaBasicType = "string"
	JsonSchemaBasicTypeInteger JsonSchemaBasicType = "integer"
	JsonSchemaBasicTypeNumber  JsonSchemaBasicType = "number"
	JsonSchemaBasicTypeObject  JsonSchemaBasicType = "object"
	JsonSchemaBasicTypeArray   JsonSchemaBasicType = "array"
	JsonSchemaBasicTypeMap     JsonSchemaBasicType = "map"
)

// IJsonSchema defines the structure of a JSON schema
type IJsonSchema struct {
	Type                 interface{}            `json:"type"`
	Default              interface{}            `json:"default,omitempty"`
	Title                *string                `json:"title,omitempty"`
	Description          *string                `json:"description,omitempty"`
	Enum                 []interface{}          `json:"enum,omitempty"`
	Properties           map[string]IJsonSchema `json:"properties,omitempty"`
	AdditionalProperties *IJsonSchema           `json:"additionalProperties,omitempty"`
	Items                *IJsonSchema           `json:"items,omitempty"`
	Required             []string               `json:"required,omitempty"`
	Ref                  *string                `json:"$ref,omitempty"`
	Extra                *struct {
		Index         *int         `json:"index,omitempty"`
		Weak          *bool        `json:"weak,omitempty"`
		FormComponent *string      `json:"formComponent,omitempty"`
		Additional    map[string]interface{} `json:"additional,omitempty"`
	} `json:"extra,omitempty"`
}

// IBasicJsonSchema is a type alias for IJsonSchema with JsonSchemaBasicType
type IBasicJsonSchema = IJsonSchema