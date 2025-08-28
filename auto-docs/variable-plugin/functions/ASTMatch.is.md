# Function: is

[ASTMatch](/auto-docs/variable-plugin/modules/ASTMatch.md).is

**is**<`TargetASTNode`>(`node?`, `targetType?`): node is TargetASTNode

Check AST Match by ASTClass

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TargetASTNode` | extends [`ASTNode`](/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`, `TargetASTNode`> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `node?` | [`ASTNode`](/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`> |
| `targetType?` | (...`args`: `any`\[]) => `TargetASTNode` |
| `targetType.kind` | `string` |

#### Returns

node is TargetASTNode
