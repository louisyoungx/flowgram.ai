# Function: createProperty

[ASTFactory](/auto-docs/variable-core/modules/ASTFactory.md).createProperty

**createProperty**<`VariableMeta`>(`json`): `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `VariableMeta` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | [`PropertyJSON`](/auto-docs/variable-core/types/PropertyJSON.md)<`VariableMeta`> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `initializer?` | [`ASTNodeJSON`](/auto-docs/variable-core/interfaces/ASTNodeJSON.md) |
| `key` | `string` |
| `kind` | [`ASTKind`](/auto-docs/variable-core/enums/ASTKind.md) |
| `meta?` | `VariableMeta` |
| `type?` | `ASTNodeJSONOrKind` |
