# Function: createProperty

[ASTFactory](/en/auto-docs/fixed-layout-editor/modules/ASTFactory.md).createProperty

**createProperty**<`VariableMeta`>(`json`): `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `VariableMeta` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | [`PropertyJSON`](/en/auto-docs/fixed-layout-editor/types/PropertyJSON.md)<`VariableMeta`> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `initializer?` | [`ASTNodeJSON`](/en/auto-docs/fixed-layout-editor/interfaces/ASTNodeJSON.md) |
| `key` | `string` |
| `kind` | [`ASTKind`](/en/auto-docs/fixed-layout-editor/enums/ASTKind.md) |
| `meta?` | `VariableMeta` |
| `type?` | `ASTNodeJSONOrKind` |
