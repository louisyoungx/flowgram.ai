# Function: createVariableDeclaration

[ASTFactory](/en/auto-docs/variable-core/modules/ASTFactory.md).createVariableDeclaration

**createVariableDeclaration**<`VariableMeta`>(`json`): `Object`

声明相关

#### Type parameters

| Name | Type |
| :------ | :------ |
| `VariableMeta` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | [`VariableDeclarationJSON`](/en/auto-docs/variable-core/types/VariableDeclarationJSON.md)<`VariableMeta`> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `initializer?` | [`ASTNodeJSON`](/en/auto-docs/variable-core/interfaces/ASTNodeJSON.md) |
| `key?` | `string` |
| `kind` | [`ASTKind`](/en/auto-docs/variable-core/enums/ASTKind.md) |
| `meta?` | `VariableMeta` |
| `order?` | `number` |
| `type?` | `ASTNodeJSONOrKind` |
