# Function: create

[ASTFactory](/auto-docs/fixed-layout-editor/modules/ASTFactory.md).create

**create**<`JSON`>(`targetType`, `json`): { `kind`: `string`  } & `JSON`

通过 AST Class 创建

#### Type parameters

| Name | Type |
| :------ | :------ |
| `JSON` | extends [`ASTNodeJSON`](/auto-docs/fixed-layout-editor/interfaces/ASTNodeJSON.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetType` | (...`args`: `any`\[]) => [`ASTNode`](/auto-docs/fixed-layout-editor/classes/ASTNode.md)<`JSON`, `any`> |
| `targetType.kind` | `string` |
| `json` | `JSON` |

#### Returns

{ `kind`: `string`  } & `JSON`
