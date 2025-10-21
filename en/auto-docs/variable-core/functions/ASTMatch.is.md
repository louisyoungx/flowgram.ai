# Function: is

[ASTMatch](/en/auto-docs/variable-core/modules/ASTMatch.md).is

**is**<`TargetASTNode`>(`node?`, `targetType?`): node is TargetASTNode

Check ASTNode Match by ASTClass

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TargetASTNode` | extends [`ASTNode`](/en/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`, `TargetASTNode`> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node?` | [`ASTNode`](/en/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`> | ASTNode to be checked. |
| `targetType?` | (...`args`: `any`\[]) => `TargetASTNode` | Target ASTNode class. |
| `targetType.kind` | `string` | - |

#### Returns

node is TargetASTNode

Whether the node is of the target type.
