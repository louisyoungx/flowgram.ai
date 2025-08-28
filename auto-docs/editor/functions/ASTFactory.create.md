# Function: create

[ASTFactory](/auto-docs/editor/modules/ASTFactory.md).create

**create**<`JSON`>(`targetType`, `json`): { `kind`: `string`  } & `JSON`

通过 AST Class 创建

#### Type parameters

| Name | Type |
| :------ | :------ |
| `JSON` | extends [`ASTNodeJSON`](/auto-docs/editor/interfaces/ASTNodeJSON.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetType` | (...`args`: `any`\[]) => [`ASTNode`](/auto-docs/editor/classes/ASTNode.md)<`JSON`, `any`> |
| `targetType.kind` | `string` |
| `json` | `JSON` |

#### Returns

{ `kind`: `string`  } & `JSON`
