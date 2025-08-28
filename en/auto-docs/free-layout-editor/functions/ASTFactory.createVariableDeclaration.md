# Function: createVariableDeclaration

[ASTFactory](/en/auto-docs/free-layout-editor/modules/ASTFactory.md).createVariableDeclaration

**createVariableDeclaration**<`VariableMeta`>(`json`): `Object`

声明相关

#### Type parameters

| Name | Type |
| :------ | :------ |
| `VariableMeta` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | [`VariableDeclarationJSON`](/en/auto-docs/free-layout-editor/types/VariableDeclarationJSON.md)<`VariableMeta`> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `initializer?` | [`ASTNodeJSON`](/en/auto-docs/free-layout-editor/interfaces/ASTNodeJSON.md) |
| `key?` | `string` |
| `kind` | [`ASTKind`](/en/auto-docs/free-layout-editor/enums/ASTKind.md) |
| `meta?` | `VariableMeta` |
| `order?` | `number` |
| `type?` | `ASTNodeJSONOrKind` |
