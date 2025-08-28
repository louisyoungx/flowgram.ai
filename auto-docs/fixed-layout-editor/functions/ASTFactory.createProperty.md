# Function: createProperty

[ASTFactory](/auto-docs/fixed-layout-editor/modules/ASTFactory.md).createProperty

**createProperty**<`VariableMeta`>(`json`): `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `VariableMeta` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | [`PropertyJSON`](/auto-docs/fixed-layout-editor/types/PropertyJSON.md)<`VariableMeta`> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `initializer?` | [`ASTNodeJSON`](/auto-docs/fixed-layout-editor/interfaces/ASTNodeJSON.md) |
| `key` | `string` |
| `kind` | [`ASTKind`](/auto-docs/fixed-layout-editor/enums/ASTKind.md) |
| `meta?` | `VariableMeta` |
| `type?` | `ASTNodeJSONOrKind` |
