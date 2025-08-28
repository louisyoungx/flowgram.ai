# Class: JsonSchemaTypeManager\<Schema, Registry>

Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
SPDX-License-Identifier: MIT

## Type parameters

| Name | Type |
| :------ | :------ |
| `Schema` | extends `Partial`<[`IJsonSchema`](/auto-docs/type-editor/interfaces/IJsonSchema.md)> = [`IJsonSchema`](/auto-docs/type-editor/interfaces/IJsonSchema.md) |
| `Registry` | extends [`JsonSchemaTypeRegistry`](/auto-docs/type-editor/interfaces/JsonSchemaTypeRegistry.md)<`Schema`> = [`JsonSchemaTypeRegistry`](/auto-docs/type-editor/interfaces/JsonSchemaTypeRegistry.md)<`Schema`> |

## Hierarchy

* [`BaseTypeManager`](/auto-docs/type-editor/classes/BaseTypeManager.md)<`Schema`, `Registry`, [`JsonSchemaTypeManager`](/auto-docs/type-editor/classes/JsonSchemaTypeManager.md)<`Schema`, `Registry`>>

  ↳ **`JsonSchemaTypeManager`**

  ↳↳ [`TypeEditorRegistryManager`](/auto-docs/type-editor/classes/TypeEditorRegistryManager.md)

## Table of contents

### Constructors

* [constructor](/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#constructor)

### Properties

* [canAddField](/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#canaddfield)
* [getComplexText](/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#getcomplextext)
* [getDefaultValue](/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#getdefaultvalue)
* [getDisplayIcon](/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#getdisplayicon)
* [getJsonPaths](/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#getjsonpaths)
* [getPropertiesParent](/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#getpropertiesparent)
* [getTypeRegistriesWithParentType](/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#gettyperegistrieswithparenttype)
* [getTypeSchemaDeepChildField](/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#gettypeschemadeepchildfield)
* [getTypeSchemaProperties](/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#gettypeschemaproperties)
* [onTypeRegistryChange](/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#ontyperegistrychange)

### Methods

* [getAllTypeRegistries](/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#getalltyperegistries)
* [getDefaultTypeRegistry](/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#getdefaulttyperegistry)
* [getTypeByName](/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#gettypebyname)
* [getTypeBySchema](/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#gettypebyschema)
* [register](/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#register)
* [triggerChanges](/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#triggerchanges)
* [unregister](/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#unregister)

## Constructors

### constructor

**new JsonSchemaTypeManager**<`Schema`, `Registry`>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Schema` | extends `Partial`<[`IJsonSchema`](/auto-docs/type-editor/interfaces/IJsonSchema.md)<`string`>> = [`IJsonSchema`](/auto-docs/type-editor/interfaces/IJsonSchema.md)<`string`> |
| `Registry` | extends [`JsonSchemaTypeRegistry`](/auto-docs/type-editor/interfaces/JsonSchemaTypeRegistry.md)<`Schema`, `Registry`> = [`JsonSchemaTypeRegistry`](/auto-docs/type-editor/interfaces/JsonSchemaTypeRegistry.md)<`Schema`> |

#### Overrides

[BaseTypeManager](/auto-docs/type-editor/classes/BaseTypeManager.md).[constructor](/auto-docs/type-editor/classes/BaseTypeManager.md#constructor)

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

[BaseTypeManager](/auto-docs/type-editor/classes/BaseTypeManager.md).[onTypeRegistryChange](/auto-docs/type-editor/classes/BaseTypeManager.md#ontyperegistrychange)

## Methods

### getAllTypeRegistries

**getAllTypeRegistries**(): `Registry`\[]

获取全量的 TypeRegistries

#### Returns

`Registry`\[]

#### Inherited from

[BaseTypeManager](/auto-docs/type-editor/classes/BaseTypeManager.md).[getAllTypeRegistries](/auto-docs/type-editor/classes/BaseTypeManager.md#getalltyperegistries)

***

### getDefaultTypeRegistry

**getDefaultTypeRegistry**(): `undefined` | `Registry`

#### Returns

`undefined` | `Registry`

#### Inherited from

[BaseTypeManager](/auto-docs/type-editor/classes/BaseTypeManager.md).[getDefaultTypeRegistry](/auto-docs/type-editor/classes/BaseTypeManager.md#getdefaulttyperegistry)

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

[BaseTypeManager](/auto-docs/type-editor/classes/BaseTypeManager.md).[getTypeByName](/auto-docs/type-editor/classes/BaseTypeManager.md#gettypebyname)

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

[BaseTypeManager](/auto-docs/type-editor/classes/BaseTypeManager.md).[getTypeBySchema](/auto-docs/type-editor/classes/BaseTypeManager.md#gettypebyschema)

***

### register

**register**(`originRegistry`): `void`

注册 TypeRegistry

#### Parameters

| Name | Type |
| :------ | :------ |
| `originRegistry` | `Partial`<`Registry`> | [`TypeRegistryCreator`](/auto-docs/type-editor/types/TypeRegistryCreator.md)<`Schema`, `Registry`, [`JsonSchemaTypeManager`](/auto-docs/type-editor/classes/JsonSchemaTypeManager.md)<`Schema`, `Registry`>> |

#### Returns

`void`

#### Inherited from

[BaseTypeManager](/auto-docs/type-editor/classes/BaseTypeManager.md).[register](/auto-docs/type-editor/classes/BaseTypeManager.md#register)

***

### triggerChanges

**triggerChanges**(): `void`

#### Returns

`void`

#### Inherited from

[BaseTypeManager](/auto-docs/type-editor/classes/BaseTypeManager.md).[triggerChanges](/auto-docs/type-editor/classes/BaseTypeManager.md#triggerchanges)

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

[BaseTypeManager](/auto-docs/type-editor/classes/BaseTypeManager.md).[unregister](/auto-docs/type-editor/classes/BaseTypeManager.md#unregister)
