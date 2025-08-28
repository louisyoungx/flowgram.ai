# Function: create

[ASTFactory](/en/auto-docs/editor/modules/ASTFactory.md).create

**create**<`JSON`>(`targetType`, `json`): { `kind`: `string`  } & `JSON`

通过 AST Class 创建

#### Type parameters

| Name | Type |
| :------ | :------ |
| `JSON` | extends [`ASTNodeJSON`](/en/auto-docs/editor/interfaces/ASTNodeJSON.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetType` | (...`args`: `any`\[]) => [`ASTNode`](/en/auto-docs/editor/classes/ASTNode.md)<`JSON`, `any`> |
| `targetType.kind` | `string` |
| `json` | `JSON` |

#### Returns

{ `kind`: `string`  } & `JSON`
