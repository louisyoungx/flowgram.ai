# Function: createVariableDeclaration

[ASTFactory](/auto-docs/variable-core/modules/ASTFactory.md).createVariableDeclaration

**createVariableDeclaration**<`VariableMeta`>(`json`): `Object`

声明相关

#### Type parameters

| Name | Type |
| :------ | :------ |
| `VariableMeta` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | [`VariableDeclarationJSON`](/auto-docs/variable-core/types/VariableDeclarationJSON.md)<`VariableMeta`> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `initializer?` | [`ASTNodeJSON`](/auto-docs/variable-core/interfaces/ASTNodeJSON.md) |
| `key?` | `string` |
| `kind` | [`ASTKind`](/auto-docs/variable-core/enums/ASTKind.md) |
| `meta?` | `VariableMeta` |
| `order?` | `number` |
| `type?` | `ASTNodeJSONOrKind` |
