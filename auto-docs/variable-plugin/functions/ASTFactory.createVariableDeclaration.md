# Function: createVariableDeclaration

[ASTFactory](/auto-docs/variable-plugin/modules/ASTFactory.md).createVariableDeclaration

**createVariableDeclaration**<`VariableMeta`>(`json`): `Object`

声明相关

#### Type parameters

| Name | Type |
| :------ | :------ |
| `VariableMeta` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | [`VariableDeclarationJSON`](/auto-docs/variable-plugin/types/VariableDeclarationJSON.md)<`VariableMeta`> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `initializer?` | [`ASTNodeJSON`](/auto-docs/variable-plugin/interfaces/ASTNodeJSON.md) |
| `key?` | `string` |
| `kind` | [`ASTKind`](/auto-docs/variable-plugin/enums/ASTKind.md) |
| `meta?` | `VariableMeta` |
| `order?` | `number` |
| `type?` | `ASTNodeJSONOrKind` |
