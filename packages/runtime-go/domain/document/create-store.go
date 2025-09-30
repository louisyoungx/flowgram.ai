package document

import (
	"fmt"
	"flowgram-runtime-go/interface/constant"
	runtimeType "flowgram-runtime-go/interface/runtime"
	"flowgram-runtime-go/interface/schema"
)

// DocumentStore defines the store structure for workflow runtime
type DocumentStore struct {
	Nodes map[string]*WorkflowRuntimeNode[any]
	Edges map[string]*WorkflowRuntimeEdge
	Ports map[string]*WorkflowRuntimePort
}

func createNode(store *DocumentStore, params *runtimeType.CreateNodeParams) *WorkflowRuntimeNode[any] {
	node := NewWorkflowRuntimeNode[any](*params)
	store.Nodes[node.GetID()] = node
	return node
}

func createEdge(store *DocumentStore, params *runtimeType.CreateEdgeParams) *WorkflowRuntimeEdge {
	edge := NewWorkflowRuntimeEdge(params)
	store.Edges[edge.GetID()] = edge
	return edge
}

func getOrCreatePort(store *DocumentStore, params *runtimeType.CreatePortParams) *WorkflowRuntimePort {
	if createdPort, exists := store.Ports[params.ID]; exists {
		return createdPort
	}
	port := NewWorkflowRuntimePort(*params)
	store.Ports[port.GetID()] = port
	return port
}

// CreateStore creates a new DocumentStore instance
func CreateStore(params *FlattenData) *DocumentStore {
	flattenSchema := params.FlattenSchema
	nodes := flattenSchema.Nodes
	edges := flattenSchema.Edges
	nodeBlocks := params.NodeBlocks

	store := &DocumentStore{
		Nodes: make(map[string]*WorkflowRuntimeNode[any]),
		Edges: make(map[string]*WorkflowRuntimeEdge),
		Ports: make(map[string]*WorkflowRuntimePort),
	}

	// create root node
	createNode(store, &runtimeType.CreateNodeParams{
		ID:       string(constant.FlowGramNodeRoot),
		Type:     constant.FlowGramNodeRoot,
		Name:     string(constant.FlowGramNodeRoot),
		Position: schema.PositionSchema{X: 0, Y: 0},
	})

	// create nodes
	for _, nodeSchema := range nodes {
		id := nodeSchema.ID
		nodeType := nodeSchema.Type
		data := nodeSchema.Data

		title := string(nodeType) + "-" + id + "-untitled"
		if data != nil {
			if titleValue, ok := data["title"].(string); ok && titleValue != "" {
				title = titleValue
			}
		}

		// Extract data fields safely with proper type conversion
		var inputsValues map[string]schema.IFlowValue
		var inputs schema.IJsonSchema
		var outputs schema.IJsonSchema
		if data != nil {
			if iv, ok := data["inputsValues"].(map[string]any); ok {
				// Convert map[string]any to map[string]schema.IFlowValue
				inputsValues = make(map[string]schema.IFlowValue)
				for k, v := range iv {
					// Handle different types of IFlowValue
					switch val := v.(type) {
					case map[string]interface{}:
						// Convert map to appropriate IFlowValue type based on "type" field
						if typeStr, hasType := val["type"].(string); hasType {
							switch typeStr {
							case "constant":
								inputsValues[k] = schema.IFlowConstantValue{
									Type:    typeStr,
									Content: val["content"],
								}
							case "ref":
								if content, ok := val["content"].([]interface{}); ok {
									refContent := make([]string, len(content))
									for i, item := range content {
										refContent[i] = fmt.Sprintf("%v", item)
									}
									inputsValues[k] = schema.IFlowRefValue{
										Type:    typeStr,
										Content: refContent,
									}
								}
							case "template":
								var templateContent *string
								if content, ok := val["content"].(string); ok {
									templateContent = &content
								}
								inputsValues[k] = schema.IFlowTemplateValue{
									Type:    typeStr,
									Content: templateContent,
								}
							case "expression":
								var exprContent *string
								if content, ok := val["content"].(string); ok {
									exprContent = &content
								}
								inputsValues[k] = schema.IFlowExpressionValue{
									Type:    typeStr,
									Content: exprContent,
								}
							default:
								// Fallback: store as-is
								inputsValues[k] = v
							}
						} else {
							// No type field, store as-is
							inputsValues[k] = v
						}
					default:
						// Direct assignment for already typed values
						inputsValues[k] = v
					}
				}
			}
			if i, ok := data["inputs"].(schema.IJsonSchema); ok {
				inputs = i
			} else if iMap, ok := data["inputs"].(map[string]any); ok {
				// Convert map[string]any to schema.IJsonSchema
				inputs = convertMapToJsonSchema(iMap)
			}
			if o, ok := data["outputs"].(schema.IJsonSchema); ok {
				outputs = o
			} else if oMap, ok := data["outputs"].(map[string]any); ok {
				// Convert map[string]any to schema.IJsonSchema
				outputs = convertMapToJsonSchema(oMap)
			}
		}

		createNode(store, &runtimeType.CreateNodeParams{
			ID:       id,
			Type:     nodeType,
			Name:     title,
			Position: nodeSchema.Meta.Position,
			Variable: &runtimeType.NodeDeclare{
				InputsValues: inputsValues,
				Inputs:       inputs,
				Outputs:      outputs,
			},
			Data: data,
		})
	}

	// create node relations
	for parentID, blockIDs := range nodeBlocks {
		parent := store.Nodes[parentID]
		for _, id := range blockIDs {
			if child, exists := store.Nodes[id]; exists {
				child.SetParent(parent)
				parent.AddChild(child)
			}
		}
	}

	// create edges & ports
	for _, edgeSchema := range edges {
		id := WorkflowRuntimeEdge_CreateID(&edgeSchema)
		sourceNodeID := edgeSchema.SourceNodeID
		targetNodeID := edgeSchema.TargetNodeID
		sourcePortID := edgeSchema.SourcePortID
		targetPortID := edgeSchema.TargetPortID

		// Handle pointer to string conversion for port IDs
		sourcePortIDStr := "defaultOutput"
		if sourcePortID != nil && *sourcePortID != "" {
			sourcePortIDStr = *sourcePortID
		}
		targetPortIDStr := "defaultInput"
		if targetPortID != nil && *targetPortID != "" {
			targetPortIDStr = *targetPortID
		}

		from := store.Nodes[sourceNodeID]
		to := store.Nodes[targetNodeID]

		if from == nil || to == nil {
			panic("Invalid edge schema ID: " + id + ", from: " + sourceNodeID + ", to: " + targetNodeID)
		}

		edge := createEdge(store, &runtimeType.CreateEdgeParams{
			ID:   id,
			From: from,
			To:   to,
		})

		// create from port
		fromPort := getOrCreatePort(store, &runtimeType.CreatePortParams{
			Node: from,
			ID:   sourcePortIDStr,
			Type: schema.WorkflowPortTypeOutput,
		})

		// build relation
		fromPort.AddEdge(edge)
		edge.SetFromPort(fromPort)
		from.AddPort(fromPort)
		from.AddOutputEdge(edge)

		// create to port
		toPort := getOrCreatePort(store, &runtimeType.CreatePortParams{
			Node: to,
			ID:   targetPortIDStr,
			Type: schema.WorkflowPortTypeInput,
		})

		// build relation
		toPort.AddEdge(edge)
		edge.SetToPort(toPort)
		to.AddPort(toPort)
		to.AddInputEdge(edge)
	}

	return store
}

// convertMapToJsonSchema converts a map[string]any to schema.IJsonSchema
func convertMapToJsonSchema(data map[string]any) schema.IJsonSchema {
	jsonSchema := schema.IJsonSchema{}
	
	if typeVal, ok := data["type"].(string); ok {
		jsonSchema.Type = &typeVal
	}
	
	if properties, ok := data["properties"].(map[string]any); ok {
		jsonSchema.Properties = make(map[string]schema.IJsonSchema)
		for key, value := range properties {
			if valueMap, ok := value.(map[string]any); ok {
				jsonSchema.Properties[key] = convertMapToJsonSchema(valueMap)
			}
		}
	}
	
	if required, ok := data["required"].([]any); ok {
		jsonSchema.Required = make([]string, len(required))
		for i, req := range required {
			if reqStr, ok := req.(string); ok {
				jsonSchema.Required[i] = reqStr
			}
		}
	}
	
	if extra, ok := data["extra"].(map[string]any); ok {
		extraStruct := &struct {
			Index         *int         `json:"index,omitempty"`
			Weak          *bool        `json:"weak,omitempty"`
			FormComponent *string      `json:"formComponent,omitempty"`
			Additional    map[string]interface{} `json:"additional,omitempty"`
		}{}
		
		if index, ok := extra["index"].(float64); ok {
			indexInt := int(index)
			extraStruct.Index = &indexInt
		}
		
		if weak, ok := extra["weak"].(bool); ok {
			extraStruct.Weak = &weak
		}
		
		if formComponent, ok := extra["formComponent"].(string); ok {
			extraStruct.FormComponent = &formComponent
		}
		
		// Handle additional fields
		additional := make(map[string]interface{})
		for k, v := range extra {
			if k != "index" && k != "weak" && k != "formComponent" {
				additional[k] = v
			}
		}
		if len(additional) > 0 {
			extraStruct.Additional = additional
		}
		
		jsonSchema.Extra = extraStruct
	}
	
	return jsonSchema
}
