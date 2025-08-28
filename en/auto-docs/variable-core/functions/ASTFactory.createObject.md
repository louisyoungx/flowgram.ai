# Function: createObject

[ASTFactory](/en/auto-docs/variable-core/modules/ASTFactory.md).createObject

**createObject**(`json`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | [`ObjectJSON`](/en/auto-docs/variable-core/interfaces/ObjectJSON.md)<`any`> |

#### Returns

`Object`

| Name | Type | Description |
| :------ | :------ | :------ |
| `kind` | [`ASTKind`](/en/auto-docs/variable-core/enums/ASTKind.md) | - |
| `properties?` | [`PropertyJSON`](/en/auto-docs/variable-core/types/PropertyJSON.md)<`any`>\[] | Object 的 properties 一定是 Property 类型，因此业务可以不用填 kind |
