package constant

type FlowGramNode string

const (
	FlowGramNodeRoot       FlowGramNode = "root"
	FlowGramNodeStart      FlowGramNode = "start"
	FlowGramNodeEnd        FlowGramNode = "end"
	FlowGramNodeLLM        FlowGramNode = "llm"
	FlowGramNodeCode       FlowGramNode = "code"
	FlowGramNodeCondition  FlowGramNode = "condition"
	FlowGramNodeLoop       FlowGramNode = "loop"
	FlowGramNodeComment    FlowGramNode = "comment"
	FlowGramNodeGroup      FlowGramNode = "group"
	FlowGramNodeBlockStart FlowGramNode = "block-start"
	FlowGramNodeBlockEnd   FlowGramNode = "block-end"
	FlowGramNodeHTTP       FlowGramNode = "http"
	FlowGramNodeBreak      FlowGramNode = "break"
	FlowGramNodeContinue   FlowGramNode = "continue"
)
