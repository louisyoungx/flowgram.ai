# Class: BaseTypeManager\<Schema, Registry, Manager>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Schema` | `Schema` |
| `Registry` | extends [`BaseTypeRegistry`](/auto-docs/type-editor/interfaces/BaseTypeRegistry.md) |
| `Manager` | extends [`BaseTypeManager`](/auto-docs/type-editor/classes/BaseTypeManager.md)<`Schema`, `Registry`, `Manager`> |

## Hierarchy

* **`BaseTypeManager`**

  ↳ [`JsonSchemaTypeManager`](/auto-docs/type-editor/classes/JsonSchemaTypeManager.md)

## Table of contents

### Constructors

* [constructor](/auto-docs/type-editor/classes/BaseTypeManager.md#constructor)

### Properties

* [onTypeRegistryChange](/auto-docs/type-editor/classes/BaseTypeManager.md#ontyperegistrychange)

### Methods

* [getAllTypeRegistries](/auto-docs/type-editor/classes/BaseTypeManager.md#getalltyperegistries)
* [getDefaultTypeRegistry](/auto-docs/type-editor/classes/BaseTypeManager.md#getdefaulttyperegistry)
* [getTypeByName](/auto-docs/type-editor/classes/BaseTypeManager.md#gettypebyname)
* [getTypeBySchema](/auto-docs/type-editor/classes/BaseTypeManager.md#gettypebyschema)
* [register](/auto-docs/type-editor/classes/BaseTypeManager.md#register)
* [triggerChanges](/auto-docs/type-editor/classes/BaseTypeManager.md#triggerchanges)
* [unregister](/auto-docs/type-editor/classes/BaseTypeManager.md#unregister)

## Constructors

### constructor

**new BaseTypeManager**<`Schema`, `Registry`, `Manager`>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Schema` | `Schema` |
| `Registry` | extends [`BaseTypeRegistry`](/auto-docs/type-editor/interfaces/BaseTypeRegistry.md) |
| `Manager` | extends [`BaseTypeManager`](/auto-docs/type-editor/classes/BaseTypeManager.md)<`Schema`, `Registry`, `Manager`, `Manager`> |

## Properties

### onTypeRegistryChange

**onTypeRegistryChange**: `Event`<`Registry`\[]>

## Methods

### getAllTypeRegistries

**getAllTypeRegistries**(): `Registry`\[]

获取全量的 TypeRegistries

#### Returns

`Registry`\[]

***

### getDefaultTypeRegistry

**getDefaultTypeRegistry**(): `undefined` | `Registry`

#### Returns

`undefined` | `Registry`

***

### getTypeByName

**getTypeByName**(`typeName`): `undefined` | `Registry`

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeName` | `string` |

#### Returns

`undefined` | `Registry`

***

### getTypeBySchema

**getTypeBySchema**(`type`): `undefined` | `Registry`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `Schema` |

#### Returns

`undefined` | `Registry`

***

### register

**register**(`originRegistry`): `void`

注册 TypeRegistry

#### Parameters

| Name | Type |
| :------ | :------ |
| `originRegistry` | `Partial`<`Registry`> | [`TypeRegistryCreator`](/auto-docs/type-editor/types/TypeRegistryCreator.md)<`Schema`, `Registry`, `Manager`> |

#### Returns

`void`

***

### triggerChanges

**triggerChanges**(): `void`

#### Returns

`void`

***

### unregister

**unregister**(`type`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`void`
