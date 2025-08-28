# Class: BaseTypeManager\<Schema, Registry, Manager>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Schema` | `Schema` |
| `Registry` | extends [`BaseTypeRegistry`](/en/auto-docs/type-editor/interfaces/BaseTypeRegistry.md) |
| `Manager` | extends [`BaseTypeManager`](/en/auto-docs/type-editor/classes/BaseTypeManager.md)<`Schema`, `Registry`, `Manager`> |

## Hierarchy

* **`BaseTypeManager`**

  ↳ [`JsonSchemaTypeManager`](/en/auto-docs/type-editor/classes/JsonSchemaTypeManager.md)

## Table of contents

### Constructors

* [constructor](/en/auto-docs/type-editor/classes/BaseTypeManager.md#constructor)

### Properties

* [onTypeRegistryChange](/en/auto-docs/type-editor/classes/BaseTypeManager.md#ontyperegistrychange)

### Methods

* [getAllTypeRegistries](/en/auto-docs/type-editor/classes/BaseTypeManager.md#getalltyperegistries)
* [getDefaultTypeRegistry](/en/auto-docs/type-editor/classes/BaseTypeManager.md#getdefaulttyperegistry)
* [getTypeByName](/en/auto-docs/type-editor/classes/BaseTypeManager.md#gettypebyname)
* [getTypeBySchema](/en/auto-docs/type-editor/classes/BaseTypeManager.md#gettypebyschema)
* [register](/en/auto-docs/type-editor/classes/BaseTypeManager.md#register)
* [triggerChanges](/en/auto-docs/type-editor/classes/BaseTypeManager.md#triggerchanges)
* [unregister](/en/auto-docs/type-editor/classes/BaseTypeManager.md#unregister)

## Constructors

### constructor

**new BaseTypeManager**<`Schema`, `Registry`, `Manager`>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Schema` | `Schema` |
| `Registry` | extends [`BaseTypeRegistry`](/en/auto-docs/type-editor/interfaces/BaseTypeRegistry.md) |
| `Manager` | extends [`BaseTypeManager`](/en/auto-docs/type-editor/classes/BaseTypeManager.md)<`Schema`, `Registry`, `Manager`, `Manager`> |

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
| `originRegistry` | `Partial`<`Registry`> | [`TypeRegistryCreator`](/en/auto-docs/type-editor/types/TypeRegistryCreator.md)<`Schema`, `Registry`, `Manager`> |

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
