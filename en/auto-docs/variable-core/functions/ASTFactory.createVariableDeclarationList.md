# Function: createVariableDeclarationList

[ASTFactory](/en/auto-docs/variable-core/modules/ASTFactory.md).createVariableDeclarationList

**createVariableDeclarationList**(`json`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | [`VariableDeclarationListJSON`](/en/auto-docs/variable-core/interfaces/VariableDeclarationListJSON.md)<`any`> |

#### Returns

`Object`

| Name | Type | Description |
| :------ | :------ | :------ |
| `declarations?` | [`VariableDeclarationJSON`](/en/auto-docs/variable-core/types/VariableDeclarationJSON.md)<`any`>\[] | declarations 一定是 VariableDeclaration 类型，因此业务可以不用填 kind |
| `kind` | [`ASTKind`](/en/auto-docs/variable-core/enums/ASTKind.md) | - |
| `startOrder?` | `number` | - |
