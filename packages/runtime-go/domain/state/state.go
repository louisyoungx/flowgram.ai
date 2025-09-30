/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

package state

import (
	"encoding/json"
	"fmt"
	"log"
	"regexp"
	"strings"

	"flowgram-runtime-go/infrastructure/utils"
	runtimeType "flowgram-runtime-go/interface/runtime"
	"flowgram-runtime-go/interface/schema"
)

// WorkflowRuntimeState implements the IState interface
type WorkflowRuntimeState struct {
	id            string
	variableStore runtimeType.IVariableStore
	executedNodes map[string]bool
}

// NewWorkflowRuntimeState creates a new WorkflowRuntimeState instance
func NewWorkflowRuntimeState(variableStore runtimeType.IVariableStore) *WorkflowRuntimeState {
	return &WorkflowRuntimeState{
		id:            utils.UUID(),
		variableStore: variableStore,
		executedNodes: make(map[string]bool),
	}
}

// GetID returns the unique identifier of the state
func (w *WorkflowRuntimeState) GetID() string {
	return w.id
}

// GetVariableStore returns the variable store
func (w *WorkflowRuntimeState) GetVariableStore() runtimeType.IVariableStore {
	return w.variableStore
}

// Init initializes the state with optional workflow schema
func (w *WorkflowRuntimeState) Init(workflowSchema *schema.WorkflowSchema) {
	if workflowSchema != nil {
		w.setGlobalVariable(workflowSchema.GlobalVariable)
	}
	w.executedNodes = make(map[string]bool)
}

// Dispose cleans up the state resources
func (w *WorkflowRuntimeState) Dispose() {
	w.executedNodes = make(map[string]bool)
}

// GetNodeInputs retrieves and parses inputs for a given node
func (w *WorkflowRuntimeState) GetNodeInputs(node runtimeType.INode[any]) runtimeType.WorkflowInputs {
	declare := node.GetDeclare()
	
	// Add detailed debugging for declare fields
	log.Printf("@DEBUG GetNodeInputs %s-node declare struct: %+v", node.GetType(), declare)
	log.Printf("@DEBUG GetNodeInputs %s-node declare.InputsValues type: %T, value: %+v", node.GetType(), declare.InputsValues, declare.InputsValues)
	log.Printf("@DEBUG GetNodeInputs %s-node declare.Inputs type: %T, value: %+v", node.GetType(), declare.Inputs, declare.Inputs)
	log.Printf("@DEBUG GetNodeInputs %s-node declare.Outputs type: %T, value: %+v", node.GetType(), declare.Outputs, declare.Outputs)
	
	inputsDeclare := declare.Inputs
	inputsValues := declare.InputsValues

	declareJSON, _ := json.Marshal(declare)
	log.Printf("@DEBUG GetNodeInputs %s-node declare: %s", node.GetType(), string(declareJSON))
	
	// Check if fields are nil after assignment
	log.Printf("@DEBUG GetNodeInputs %s-node inputsDeclare after assignment: %+v", node.GetType(), inputsDeclare)
	log.Printf("@DEBUG GetNodeInputs %s-node inputsValues after assignment: %+v", node.GetType(), inputsValues)
	
	return w.ParseInputs(inputsValues, inputsDeclare)
}

// SetNodeOutputs sets the outputs for a given node
func (w *WorkflowRuntimeState) SetNodeOutputs(node runtimeType.INode[any], outputs runtimeType.WorkflowOutputs) {
	log.Printf("@DEBUG SetNodeOutputs for node %s with outputs: %v", node.GetID(), outputs)
	
	declare := node.GetDeclare()
	outputsDeclare := declare.Outputs
	
	log.Printf("@DEBUG SetNodeOutputs outputsDeclare: %v", outputsDeclare)

	// Check if outputsDeclare is an object type with properties
	var typeStr string
	if outputsDeclare.Type != nil {
		if typePtr, ok := outputsDeclare.Type.(*string); ok && typePtr != nil {
			typeStr = *typePtr
		} else {
			typeStr = fmt.Sprintf("%v", outputsDeclare.Type)
		}
	}
	
	if typeStr != string(schema.JsonSchemaBasicTypeObject) || outputsDeclare.Properties == nil {
		log.Printf("@DEBUG SetNodeOutputs early return - outputsDeclare.Type: %v (string: %s), Properties: %v", outputsDeclare.Type, typeStr, outputsDeclare.Properties)
		return
	}

	for key, typeInfo := range outputsDeclare.Properties {
		if key == "" {
			continue
		}

		variableType := schema.WorkflowVariableType(fmt.Sprintf("%v", typeInfo.Type))
		var itemsType *schema.WorkflowVariableType
		if typeInfo.Items != nil && typeInfo.Items.Type != nil {
			itemsTypeValue := schema.WorkflowVariableType(fmt.Sprintf("%v", typeInfo.Items.Type))
			itemsType = &itemsTypeValue
		}

		defaultValue := w.parseJSONContent(typeInfo.Default, variableType)
		value := outputs[key]
		if value == nil {
			value = defaultValue
		}

		log.Printf("@DEBUG SetNodeOutputs setting variable - NodeID: %s, Key: %s, Value: %v, Type: %v", node.GetID(), key, value, variableType)

		// Create variable
		w.variableStore.SetVariable(runtimeType.SetVariableParams{
			NodeID:    node.GetID(),
			Key:       key,
			Value:     value,
			Type:      variableType,
			ItemsType: itemsType,
		})
	}
}

// ParseInputs parses input values according to their declarations
func (w *WorkflowRuntimeState) ParseInputs(values map[string]schema.IFlowValue, declare schema.IJsonSchema) runtimeType.WorkflowInputs {
	result := make(runtimeType.WorkflowInputs)

	for key, flowValue := range values {
		log.Printf("@DEBUG ParseInputs Processing key: %s, flowValue: %v", key, flowValue)

		typeInfo, exists := declare.Properties[key]
		if !exists {
			continue
		}

		log.Printf("@DEBUG ParseInputs Key %s typeInfo: %v", key, typeInfo)

		// Convert type to WorkflowVariableType
		var declareType schema.WorkflowVariableType
		if typeInfo.Type != nil {
			if typePtr, ok := typeInfo.Type.(*string); ok && typePtr != nil {
				declareType = schema.WorkflowVariableType(*typePtr)
			} else {
				declareType = schema.WorkflowVariableType(fmt.Sprintf("%v", typeInfo.Type))
			}
		}

		log.Printf("@DEBUG ParseInputs Key %s declareType: %s", key, declareType)

		parseResult := w.ParseFlowValue(flowValue, declareType)
		log.Printf("@DEBUG ParseInputs Key %s parseResult: %v", key, parseResult)

		if parseResult == nil {
			continue
		}

		// Check type equality using string comparison
		if string(parseResult.Type) != string(declareType) {
			log.Printf("@DEBUG ParseInputs Key %s type mismatch - parseResult.Type: %s, declareType: %s", key, parseResult.Type, declareType)
			// Continue processing even with type mismatch for now
		}

		result[key] = parseResult.Value
		log.Printf("@DEBUG ParseInputs Key %s added to result with value: %v", key, parseResult.Value)
	}

	resultJSON, _ := json.Marshal(result)
	log.Printf("@DEBUG ParseInputs Final result: %s", string(resultJSON))

	return result
}

// ParseRef parses a reference value
func (w *WorkflowRuntimeState) ParseRef(ref schema.IFlowRefValue) *runtimeType.IVariableParseResult {
	log.Printf("@DEBUG ParseRef called with ref: %+v", ref)
	
	if ref.Type != "ref" {
		log.Printf("@DEBUG ParseRef failed - type is not 'ref': %s", ref.Type)
		return nil
	}

	if len(ref.Content) < 2 {
		log.Printf("@DEBUG ParseRef failed - content length < 2: %d", len(ref.Content))
		return nil
	}

	nodeID := ref.Content[0]
	variableKey := ref.Content[1]
	var variablePath []string
	if len(ref.Content) > 2 {
		variablePath = ref.Content[2:]
	}
	
	log.Printf("@DEBUG ParseRef getting value - nodeID: %s, variableKey: %s, variablePath: %v", nodeID, variableKey, variablePath)

	result := w.variableStore.GetValue(runtimeType.GetValueParams{
		NodeID:       nodeID,
		VariableKey:  variableKey,
		VariablePath: variablePath,
	})
	
	log.Printf("@DEBUG ParseRef result: %+v", result)

	return result
}

// ParseTemplate parses a template value
func (w *WorkflowRuntimeState) ParseTemplate(template schema.IFlowTemplateValue) *runtimeType.IVariableParseResult {
	if template.Type != "template" {
		return nil
	}

	if template.Content == nil {
		return nil
	}

	// Replace template patterns like {{start_0.work.role}}
	re := regexp.MustCompile(`\{\{([^\}]+)\}\}`)
	parsedValue := re.ReplaceAllStringFunc(*template.Content, func(match string) string {
		// Extract pattern from {{pattern}}
		pattern := strings.TrimSpace(match[2 : len(match)-2])

		// Split path like 'start_0.work.role' => ['start_0', 'work', 'role']
		refContent := strings.Split(pattern, ".")

		variable := w.ParseRef(schema.IFlowRefValue{
			Type:    "ref",
			Content: refContent,
		})

		if variable == nil {
			return ""
		}

		// Convert value to string
		return fmt.Sprintf("%v", variable.Value)
	})

	return &runtimeType.IVariableParseResult{
		Type:  schema.WorkflowVariableTypeString,
		Value: parsedValue,
	}
}

// ParseFlowValue parses a flow value according to its declared type
func (w *WorkflowRuntimeState) ParseFlowValue(flowValue schema.IFlowValue, declareType schema.WorkflowVariableType) *runtimeType.IVariableParseResult {
	if flowValue == nil {
		return nil
	}

	// Try to determine the type of flowValue
	switch v := flowValue.(type) {
	case schema.IFlowConstantValue:
		if v.Type == "constant" {
			value := w.parseJSONContent(v.Content, declareType)
			valueType := declareType
			if valueType == "" {
				workflowType := utils.GetWorkflowType(value)
				if workflowType != nil {
					valueType = *workflowType
				}
			}

			if value == nil || valueType == "" {
				return nil
			}

			return &runtimeType.IVariableParseResult{
				Value: value,
				Type:  valueType,
			}
		}

	case schema.IFlowRefValue:
		if v.Type == "ref" {
			return w.ParseRef(v)
		}

	case schema.IFlowTemplateValue:
		if v.Type == "template" {
			return w.ParseTemplate(v)
		}

	case map[string]interface{}:
		// Handle generic map case
		if typeVal, ok := v["type"].(string); ok {
			switch typeVal {
			case "constant":
				constantValue := schema.IFlowConstantValue{
					Type:    typeVal,
					Content: v["content"],
				}
				return w.ParseFlowValue(constantValue, declareType)

			case "ref":
				if content, ok := v["content"].([]interface{}); ok {
					refContent := make([]string, len(content))
					for i, item := range content {
						refContent[i] = fmt.Sprintf("%v", item)
					}
					refValue := schema.IFlowRefValue{
						Type:    typeVal,
						Content: refContent,
					}
					return w.ParseFlowValue(refValue, declareType)
				}

			case "template":
				var templateContent *string
				if content, ok := v["content"].(string); ok {
					templateContent = &content
				}
				templateValue := schema.IFlowTemplateValue{
					Type:    typeVal,
					Content: templateContent,
				}
				return w.ParseFlowValue(templateValue, declareType)
			}
		}
	}

	return nil
}

// IsExecutedNode checks if a node has been executed
func (w *WorkflowRuntimeState) IsExecutedNode(node runtimeType.INode[any]) bool {
	return w.executedNodes[node.GetID()]
}

// AddExecutedNode marks a node as executed
func (w *WorkflowRuntimeState) AddExecutedNode(node runtimeType.INode[any]) {
	w.executedNodes[node.GetID()] = true
}

// parseJSONContent parses JSON content according to the declared type
func (w *WorkflowRuntimeState) parseJSONContent(jsonContent interface{}, declareType schema.WorkflowVariableType) interface{} {
	jsonTypes := []schema.WorkflowVariableType{
		schema.WorkflowVariableTypeObject,
		schema.WorkflowVariableTypeArray,
		schema.WorkflowVariableTypeMap,
	}

	// Check if declareType requires JSON parsing
	needsJSONParsing := false
	for _, jsonType := range jsonTypes {
		if declareType == jsonType {
			needsJSONParsing = true
			break
		}
	}

	if needsJSONParsing {
		if jsonStr, ok := jsonContent.(string); ok {
			var result interface{}
			if err := json.Unmarshal([]byte(jsonStr), &result); err == nil {
				return result
			}
		}
	}

	return jsonContent
}

// setGlobalVariable sets global variables from schema
func (w *WorkflowRuntimeState) setGlobalVariable(globalVariableDeclare *schema.IJsonSchema) {
	if globalVariableDeclare == nil || globalVariableDeclare.Type != schema.JsonSchemaBasicTypeObject || globalVariableDeclare.Properties == nil {
		return
	}

	for key, typeInfo := range globalVariableDeclare.Properties {
		if key == "" {
			continue
		}

		variableType := schema.WorkflowVariableType(fmt.Sprintf("%v", typeInfo.Type))
		var itemsType *schema.WorkflowVariableType
		if typeInfo.Items != nil && typeInfo.Items.Type != nil {
			itemsTypeValue := schema.WorkflowVariableType(fmt.Sprintf("%v", typeInfo.Items.Type))
			itemsType = &itemsTypeValue
		}

		defaultValue := w.parseJSONContent(typeInfo.Default, variableType)

		// Create variable
		w.variableStore.SetVariable(runtimeType.SetVariableParams{
			NodeID:    "global",
			Key:       key,
			Value:     defaultValue,
			Type:      variableType,
			ItemsType: itemsType,
		})
	}
}

// isTypeEqual checks if two workflow variable types are equal
func (w *WorkflowRuntimeState) isTypeEqual(type1, type2 schema.WorkflowVariableType) bool {
	return type1 == type2
}
