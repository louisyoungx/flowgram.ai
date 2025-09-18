package document

import (
	"flowgram-runtime-go/interface/constant"
	schemaType "flowgram-runtime-go/interface/schema"
)

// FlattenData represents the flattened workflow schema data
type FlattenData struct {
	FlattenSchema *schemaType.WorkflowSchema
	NodeBlocks    map[string][]string
	NodeEdges     map[string][]string
}

func flatLayer(data *FlattenData, nodeSchema *schemaType.WorkflowNodeSchema) {
	if nodeSchema.Blocks != nil {
		data.FlattenSchema.Nodes = append(data.FlattenSchema.Nodes, nodeSchema.Blocks...)
		blockIDs := make([]string, 0)

		for _, block := range nodeSchema.Blocks {
			blockIDs = append(blockIDs, block.ID)
			// Recursively process child nodes' blocks and edges
			if block.Blocks != nil {
				flatLayer(data, &block)
			}
		}

		data.NodeBlocks[nodeSchema.ID] = blockIDs
		nodeSchema.Blocks = nil
	}

	if nodeSchema.Edges != nil {
		data.FlattenSchema.Edges = append(data.FlattenSchema.Edges, nodeSchema.Edges...)
		edgeIDs := make([]string, 0)

		for _, edge := range nodeSchema.Edges {
			edgeID := WorkflowRuntimeEdge_CreateID(&edge)
			edgeIDs = append(edgeIDs, edgeID)
		}

		data.NodeEdges[nodeSchema.ID] = edgeIDs
		nodeSchema.Edges = nil
	}
}

// FlatSchema flattens the tree json structure and extracts the structure information to maps
func FlatSchema(schema *schemaType.WorkflowSchema) *FlattenData {
	if schema == nil {
		schema = &schemaType.WorkflowSchema{
			Nodes: make([]schemaType.WorkflowNodeSchema, 0),
			Edges: make([]schemaType.WorkflowEdgeSchema, 0),
		}
	}

	rootNodes := schema.Nodes
	rootEdges := schema.Edges

	data := &FlattenData{
		FlattenSchema: &schemaType.WorkflowSchema{
			Nodes: make([]schemaType.WorkflowNodeSchema, 0),
			Edges: make([]schemaType.WorkflowEdgeSchema, 0),
		},
		NodeBlocks: make(map[string][]string),
		NodeEdges:  make(map[string][]string),
	}

	root := &schemaType.WorkflowNodeSchema{
		ID:     string(constant.FlowGramNodeRoot),
		Type:   constant.FlowGramNodeRoot,
		Blocks: rootNodes,
		Edges:  rootEdges,
		Meta: schemaType.WorkflowNodeMetaSchema{
			Position: schemaType.PositionSchema{
				X: 0,
				Y: 0,
			},
		},
		Data: make(map[string]interface{}),
	}

	flatLayer(data, root)

	return data
}
