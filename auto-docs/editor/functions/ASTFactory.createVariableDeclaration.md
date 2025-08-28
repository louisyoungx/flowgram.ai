# Function: createVariableDeclaration

[ASTFactory](/auto-docs/editor/modules/ASTFactory.md).createVariableDeclaration

**createVariableDeclaration**<`VariableMeta`>(`json`): `Object`

声明相关

#### Type parameters

| Name | Type |
| :------ | :------ |
| `VariableMeta` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | [`VariableDeclarationJSON`](/auto-docs/editor/types/VariableDeclarationJSON.md)<`VariableMeta`> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `initializer?` | [`ASTNodeJSON`](/auto-docs/editor/interfaces/ASTNodeJSON.md) |
| `key?` | `string` |
| `kind` | [`ASTKind`](/auto-docs/editor/enums/ASTKind.md) |
| `meta?` | `VariableMeta` |
| `order?` | `number` |
| `type?` | `ASTNodeJSONOrKind` |
