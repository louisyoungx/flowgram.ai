# Function: create

[ASTFactory](/auto-docs/variable-core/modules/ASTFactory.md).create

**create**<`JSON`>(`targetType`, `json`): { `kind`: `string` = targetType.kind } & `JSON`

通过 AST Class 创建

#### Type parameters

| Name | Type |
| :------ | :------ |
| `JSON` | extends [`ASTNodeJSON`](/auto-docs/variable-core/interfaces/ASTNodeJSON.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetType` | (...`args`: `any`\[]) => [`ASTNode`](/auto-docs/variable-core/classes/ASTNode.md)<`JSON`, `any`> |
| `targetType.kind` | `string` |
| `json` | `JSON` |

#### Returns

{ `kind`: `string` = targetType.kind } & `JSON`
