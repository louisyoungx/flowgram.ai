# Type alias: JsonSchemaTypeRegistryCreator\<Schema, Registry, Manager>

**JsonSchemaTypeRegistryCreator**<`Schema`, `Registry`, `Manager`>: [`TypeRegistryCreator`](/en/auto-docs/type-editor/types/TypeRegistryCreator.md)<`Schema`, `Registry`, `Manager`>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Schema` | extends `Partial`<[`IJsonSchema`](/en/auto-docs/type-editor/interfaces/IJsonSchema.md)> = [`IJsonSchema`](/en/auto-docs/type-editor/interfaces/IJsonSchema.md) |
| `Registry` | extends [`JsonSchemaTypeRegistry`](/en/auto-docs/type-editor/interfaces/JsonSchemaTypeRegistry.md)<`Schema`> = [`JsonSchemaTypeRegistry`](/en/auto-docs/type-editor/interfaces/JsonSchemaTypeRegistry.md)<`Schema`> |
| `Manager` | extends [`JsonSchemaTypeManager`](/en/auto-docs/type-editor/classes/JsonSchemaTypeManager.md)<`Schema`, `Registry`> = [`JsonSchemaTypeManager`](/en/auto-docs/type-editor/classes/JsonSchemaTypeManager.md)<`Schema`, `Registry`> |
