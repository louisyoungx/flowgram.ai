# Function: is

[ASTMatch](/en/auto-docs/variable-plugin/modules/ASTMatch.md).is

**is**<`TargetASTNode`>(`node?`, `targetType?`): node is TargetASTNode

Check AST Match by ASTClass

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TargetASTNode` | extends [`ASTNode`](/en/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`, `TargetASTNode`> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `node?` | [`ASTNode`](/en/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`> |
| `targetType?` | (...`args`: `any`\[]) => `TargetASTNode` |
| `targetType.kind` | `string` |

#### Returns

node is TargetASTNode
