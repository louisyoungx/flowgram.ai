# Function: createProperty

[ASTFactory](/auto-docs/editor/modules/ASTFactory.md).createProperty

**createProperty**<`VariableMeta`>(`json`): `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `VariableMeta` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | [`PropertyJSON`](/auto-docs/editor/types/PropertyJSON.md)<`VariableMeta`> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `initializer?` | [`ASTNodeJSON`](/auto-docs/editor/interfaces/ASTNodeJSON.md) |
| `key` | `string` |
| `kind` | [`ASTKind`](/auto-docs/editor/enums/ASTKind.md) |
| `meta?` | `VariableMeta` |
| `type?` | `ASTNodeJSONOrKind` |
