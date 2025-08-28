# Type alias: TypeRegistryCreator\<Schema, Registry, Manager>

**TypeRegistryCreator**<`Schema`, `Registry`, `Manager`>: (`ctx`: { `typeManager`: `Manager`  }) => `Partial`<`Registry`>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Schema` | `Schema` |
| `Registry` | extends [`BaseTypeRegistry`](/en/auto-docs/type-editor/interfaces/BaseTypeRegistry.md) |
| `Manager` | extends [`BaseTypeManager`](/en/auto-docs/type-editor/classes/BaseTypeManager.md)<`Schema`, `Registry`, `Manager`> |

#### Type declaration

(`ctx`): `Partial`<`Registry`>

TypeRegistryCreator

##### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `Object` |
| `ctx.typeManager` | `Manager` |

##### Returns

`Partial`<`Registry`>
