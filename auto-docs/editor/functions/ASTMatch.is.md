# Function: is

[ASTMatch](/auto-docs/editor/modules/ASTMatch.md).is

**is**<`TargetASTNode`>(`node?`, `targetType?`): node is TargetASTNode

Check AST Match by ASTClass

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TargetASTNode` | extends [`ASTNode`](/auto-docs/editor/classes/ASTNode.md)<`any`, `any`, `TargetASTNode`> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `node?` | [`ASTNode`](/auto-docs/editor/classes/ASTNode.md)<`any`, `any`> |
| `targetType?` | (...`args`: `any`\[]) => `TargetASTNode` |
| `targetType.kind` | `string` |

#### Returns

node is TargetASTNode
