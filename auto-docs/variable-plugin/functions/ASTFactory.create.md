# Function: create

[ASTFactory](/auto-docs/variable-plugin/modules/ASTFactory.md).create

**create**<`JSON`>(`targetType`, `json`): { `kind`: `string`  } & `JSON`

通过 AST Class 创建

#### Type parameters

| Name | Type |
| :------ | :------ |
| `JSON` | extends [`ASTNodeJSON`](/auto-docs/variable-plugin/interfaces/ASTNodeJSON.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetType` | (...`args`: `any`\[]) => [`ASTNode`](/auto-docs/variable-plugin/classes/ASTNode.md)<`JSON`, `any`> |
| `targetType.kind` | `string` |
| `json` | `JSON` |

#### Returns

{ `kind`: `string`  } & `JSON`
