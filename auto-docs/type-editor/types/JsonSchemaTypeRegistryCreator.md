# Type alias: JsonSchemaTypeRegistryCreator\<Schema, Registry, Manager>

**JsonSchemaTypeRegistryCreator**<`Schema`, `Registry`, `Manager`>: [`TypeRegistryCreator`](/auto-docs/type-editor/types/TypeRegistryCreator.md)<`Schema`, `Registry`, `Manager`>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Schema` | extends `Partial`<[`IJsonSchema`](/auto-docs/type-editor/interfaces/IJsonSchema.md)> = [`IJsonSchema`](/auto-docs/type-editor/interfaces/IJsonSchema.md) |
| `Registry` | extends [`JsonSchemaTypeRegistry`](/auto-docs/type-editor/interfaces/JsonSchemaTypeRegistry.md)<`Schema`> = [`JsonSchemaTypeRegistry`](/auto-docs/type-editor/interfaces/JsonSchemaTypeRegistry.md)<`Schema`> |
| `Manager` | extends [`JsonSchemaTypeManager`](/auto-docs/type-editor/classes/JsonSchemaTypeManager.md)<`Schema`, `Registry`> = [`JsonSchemaTypeManager`](/auto-docs/type-editor/classes/JsonSchemaTypeManager.md)<`Schema`, `Registry`> |
