# Class: JsonSchemaTypeManager\<Schema, Registry>

Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
SPDX-License-Identifier: MIT

## Type parameters

| Name | Type |
| :------ | :------ |
| `Schema` | extends `Partial`<[`IJsonSchema`](/en/auto-docs/type-editor/interfaces/IJsonSchema.md)> = [`IJsonSchema`](/en/auto-docs/type-editor/interfaces/IJsonSchema.md) |
| `Registry` | extends [`JsonSchemaTypeRegistry`](/en/auto-docs/type-editor/interfaces/JsonSchemaTypeRegistry.md)<`Schema`> = [`JsonSchemaTypeRegistry`](/en/auto-docs/type-editor/interfaces/JsonSchemaTypeRegistry.md)<`Schema`> |

## Hierarchy

* [`BaseTypeManager`](/en/auto-docs/type-editor/classes/BaseTypeManager.md)<`Schema`, `Registry`, [`JsonSchemaTypeManager`](/en/auto-docs/type-editor/classes/JsonSchemaTypeManager.md)<`Schema`, `Registry`>>

  ↳ **`JsonSchemaTypeManager`**

  ↳↳ [`TypeEditorRegistryManager`](/en/auto-docs/type-editor/classes/TypeEditorRegistryManager.md)

## Table of contents

### Constructors

* [constructor](/en/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#constructor)

### Properties

* [canAddField](/en/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#canaddfield)
* [getComplexText](/en/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#getcomplextext)
* [getDefaultValue](/en/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#getdefaultvalue)
* [getDisplayIcon](/en/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#getdisplayicon)
* [getJsonPaths](/en/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#getjsonpaths)
* [getPropertiesParent](/en/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#getpropertiesparent)
* [getTypeRegistriesWithParentType](/en/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#gettyperegistrieswithparenttype)
* [getTypeSchemaDeepChildField](/en/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#gettypeschemadeepchildfield)
* [getTypeSchemaProperties](/en/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#gettypeschemaproperties)
* [onTypeRegistryChange](/en/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#ontyperegistrychange)

### Methods

* [getAllTypeRegistries](/en/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#getalltyperegistries)
* [getDefaultTypeRegistry](/en/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#getdefaulttyperegistry)
* [getTypeByName](/en/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#gettypebyname)
* [getTypeBySchema](/en/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#gettypebyschema)
* [register](/en/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#register)
* [triggerChanges](/en/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#triggerchanges)
* [unregister](/en/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#unregister)

## Constructors

### constructor

**new JsonSchemaTypeManager**<`Schema`, `Registry`>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Schema` | extends `Partial`<[`IJsonSchema`](/en/auto-docs/type-editor/interfaces/IJsonSchema.md)<`string`>> = [`IJsonSchema`](/en/auto-docs/type-editor/interfaces/IJsonSchema.md)<`string`> |
| `Registry` | extends [`JsonSchemaTypeRegistry`](/en/auto-docs/type-editor/interfaces/JsonSchemaTypeRegistry.md)<`Schema`, `Registry`> = [`JsonSchemaTypeRegistry`](/en/auto-docs/type-editor/interfaces/JsonSchemaTypeRegistry.md)<`Schema`> |

#### Overrides

[BaseTypeManager](/en/auto-docs/type-editor/classes/BaseTypeManager.md).[constructor](/en/auto-docs/type-editor/classes/BaseTypeManager.md#constructor)

## Properties

### canAddField

**canAddField**: (`type`: `Schema`) => `undefined` | `boolean`

#### Type declaration

(`type`): `undefined` | `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `Schema` |

##### Returns

`undefined` | `boolean`

***

### getComplexText

**getComplexText**: (`type`: `Schema`) => `string`

#### Type declaration

(`type`): `string`

Get the plain text display string of the type schema, for example:
Array\<Array<String>>, Map\<String, Number>

##### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `Schema` |

##### Returns

`string`

***

### getDefaultValue

**getDefaultValue**: (`type`: `Schema`) => `unknown`

#### Type declaration

(`type`): `unknown`

##### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `Schema` |

##### Returns

`unknown`

***

### getDisplayIcon

**getDisplayIcon**: (`type`: `Schema`) => `Element`

#### Type declaration

(`type`): `Element`

##### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `Schema` |

##### Returns

`Element`

***

### getJsonPaths

**getJsonPaths**: (`type`: `Schema`) => `undefined` | `string`\[]

#### Type declaration

(`type`): `undefined` | `string`\[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `Schema` |

##### Returns

`undefined` | `string`\[]

***

### getPropertiesParent

**getPropertiesParent**: (`type`: `Schema`) => `undefined` | `Schema`

#### Type declaration

(`type`): `undefined` | `Schema`

##### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `Schema` |

##### Returns

`undefined` | `Schema`

***

### getTypeRegistriesWithParentType

**getTypeRegistriesWithParentType**: (`parentType?`: `string`) => `Registry`\[]

#### Type declaration

(`parentType?`): `Registry`\[]

Get TypeRegistries based on the current parentType

##### Parameters

| Name | Type |
| :------ | :------ |
| `parentType?` | `string` |

##### Returns

`Registry`\[]

***

### getTypeSchemaDeepChildField

**getTypeSchemaDeepChildField**: (`type`: `Schema`) => `Schema`

#### Type declaration

(`type`): `Schema`

Get the deepest child field of a field
Array\<Array<String>> -> String

##### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `Schema` |

##### Returns

`Schema`

***

### getTypeSchemaProperties

**getTypeSchemaProperties**: (`type`: `Schema`) => `undefined` | `Record`<`string`, `Schema`>

#### Type declaration

(`type`): `undefined` | `Record`<`string`, `Schema`>

##### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `Schema` |

##### Returns

`undefined` | `Record`<`string`, `Schema`>

***

### onTypeRegistryChange

**onTypeRegistryChange**: `Event`<`Registry`\[]>

#### Inherited from

[BaseTypeManager](/en/auto-docs/type-editor/classes/BaseTypeManager.md).[onTypeRegistryChange](/en/auto-docs/type-editor/classes/BaseTypeManager.md#ontyperegistrychange)

## Methods

### getAllTypeRegistries

**getAllTypeRegistries**(): `Registry`\[]

获取全量的 TypeRegistries

#### Returns

`Registry`\[]

#### Inherited from

[BaseTypeManager](/en/auto-docs/type-editor/classes/BaseTypeManager.md).[getAllTypeRegistries](/en/auto-docs/type-editor/classes/BaseTypeManager.md#getalltyperegistries)

***

### getDefaultTypeRegistry

**getDefaultTypeRegistry**(): `undefined` | `Registry`

#### Returns

`undefined` | `Registry`

#### Inherited from

[BaseTypeManager](/en/auto-docs/type-editor/classes/BaseTypeManager.md).[getDefaultTypeRegistry](/en/auto-docs/type-editor/classes/BaseTypeManager.md#getdefaulttyperegistry)

***

### getTypeByName

**getTypeByName**(`typeName`): `undefined` | `Registry`

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeName` | `string` |

#### Returns

`undefined` | `Registry`

#### Inherited from

[BaseTypeManager](/en/auto-docs/type-editor/classes/BaseTypeManager.md).[getTypeByName](/en/auto-docs/type-editor/classes/BaseTypeManager.md#gettypebyname)

***

### getTypeBySchema

**getTypeBySchema**(`type`): `undefined` | `Registry`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `Schema` |

#### Returns

`undefined` | `Registry`

#### Inherited from

[BaseTypeManager](/en/auto-docs/type-editor/classes/BaseTypeManager.md).[getTypeBySchema](/en/auto-docs/type-editor/classes/BaseTypeManager.md#gettypebyschema)

***

### register

**register**(`originRegistry`): `void`

注册 TypeRegistry

#### Parameters

| Name | Type |
| :------ | :------ |
| `originRegistry` | `Partial`<`Registry`> | [`TypeRegistryCreator`](/en/auto-docs/type-editor/types/TypeRegistryCreator.md)<`Schema`, `Registry`, [`JsonSchemaTypeManager`](/en/auto-docs/type-editor/classes/JsonSchemaTypeManager.md)<`Schema`, `Registry`>> |

#### Returns

`void`

#### Inherited from

[BaseTypeManager](/en/auto-docs/type-editor/classes/BaseTypeManager.md).[register](/en/auto-docs/type-editor/classes/BaseTypeManager.md#register)

***

### triggerChanges

**triggerChanges**(): `void`

#### Returns

`void`

#### Inherited from

[BaseTypeManager](/en/auto-docs/type-editor/classes/BaseTypeManager.md).[triggerChanges](/en/auto-docs/type-editor/classes/BaseTypeManager.md#triggerchanges)

***

### unregister

**unregister**(`type`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`void`

#### Inherited from

[BaseTypeManager](/en/auto-docs/type-editor/classes/BaseTypeManager.md).[unregister](/en/auto-docs/type-editor/classes/BaseTypeManager.md#unregister)
