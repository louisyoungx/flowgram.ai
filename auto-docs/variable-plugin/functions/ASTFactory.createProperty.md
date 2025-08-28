# Function: createProperty

[ASTFactory](/auto-docs/variable-plugin/modules/ASTFactory.md).createProperty

**createProperty**<`VariableMeta`>(`json`): `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `VariableMeta` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | [`PropertyJSON`](/auto-docs/variable-plugin/types/PropertyJSON.md)<`VariableMeta`> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `initializer?` | [`ASTNodeJSON`](/auto-docs/variable-plugin/interfaces/ASTNodeJSON.md) |
| `key` | `string` |
| `kind` | [`ASTKind`](/auto-docs/variable-plugin/enums/ASTKind.md) |
| `meta?` | `VariableMeta` |
| `type?` | `ASTNodeJSONOrKind` |
