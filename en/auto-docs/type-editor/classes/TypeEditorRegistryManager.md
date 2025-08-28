# Class: TypeEditorRegistryManager\<TypeSchema>

Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
SPDX-License-Identifier: MIT

## Type parameters

| Name | Type |
| :------ | :------ |
| `TypeSchema` | extends `Partial`<[`IJsonSchema`](/en/auto-docs/type-editor/interfaces/IJsonSchema.md)> |

## Hierarchy

* [`JsonSchemaTypeManager`](/en/auto-docs/type-editor/classes/JsonSchemaTypeManager.md)<`TypeSchema`, [`TypeEditorRegistry`](/en/auto-docs/type-editor/interfaces/TypeEditorRegistry.md)<`TypeSchema`>>

  ↳ **`TypeEditorRegistryManager`**

## Table of contents

### Constructors

* [constructor](/en/auto-docs/type-editor/classes/TypeEditorRegistryManager.md#constructor)

### Properties

* [canAddField](/en/auto-docs/type-editor/classes/TypeEditorRegistryManager.md#canaddfield)
* [getComplexText](/en/auto-docs/type-editor/classes/TypeEditorRegistryManager.md#getcomplextext)
* [getDefaultValue](/en/auto-docs/type-editor/classes/TypeEditorRegistryManager.md#getdefaultvalue)
* [getDisplayIcon](/en/auto-docs/type-editor/classes/TypeEditorRegistryManager.md#getdisplayicon)
* [getJsonPaths](/en/auto-docs/type-editor/classes/TypeEditorRegistryManager.md#getjsonpaths)
* [getPropertiesParent](/en/auto-docs/type-editor/classes/TypeEditorRegistryManager.md#getpropertiesparent)
* [getTypeRegistriesWithParentType](/en/auto-docs/type-editor/classes/TypeEditorRegistryManager.md#gettyperegistrieswithparenttype)
* [getTypeSchemaDeepChildField](/en/auto-docs/type-editor/classes/TypeEditorRegistryManager.md#gettypeschemadeepchildfield)
* [getTypeSchemaProperties](/en/auto-docs/type-editor/classes/TypeEditorRegistryManager.md#gettypeschemaproperties)
* [onTypeRegistryChange](/en/auto-docs/type-editor/classes/TypeEditorRegistryManager.md#ontyperegistrychange)

### Methods

* [getAllTypeRegistries](/en/auto-docs/type-editor/classes/TypeEditorRegistryManager.md#getalltyperegistries)
* [getDefaultTypeRegistry](/en/auto-docs/type-editor/classes/TypeEditorRegistryManager.md#getdefaulttyperegistry)
* [getTypeByName](/en/auto-docs/type-editor/classes/TypeEditorRegistryManager.md#gettypebyname)
* [getTypeBySchema](/en/auto-docs/type-editor/classes/TypeEditorRegistryManager.md#gettypebyschema)
* [register](/en/auto-docs/type-editor/classes/TypeEditorRegistryManager.md#register)
* [triggerChanges](/en/auto-docs/type-editor/classes/TypeEditorRegistryManager.md#triggerchanges)
* [unregister](/en/auto-docs/type-editor/classes/TypeEditorRegistryManager.md#unregister)

## Constructors

### constructor

**new TypeEditorRegistryManager**<`TypeSchema`>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TypeSchema` | extends `Partial`<[`IJsonSchema`](/en/auto-docs/type-editor/interfaces/IJsonSchema.md)<`string`>> |

#### Inherited from

[JsonSchemaTypeManager](/en/auto-docs/type-editor/classes/JsonSchemaTypeManager.md).[constructor](/en/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#constructor)

## Properties

### canAddField

**canAddField**: (`type`: `TypeSchema`) => `undefined` | `boolean`

#### Type declaration

(`type`): `undefined` | `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `TypeSchema` |

##### Returns

`undefined` | `boolean`

#### Inherited from

[JsonSchemaTypeManager](/en/auto-docs/type-editor/classes/JsonSchemaTypeManager.md).[canAddField](/en/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#canaddfield)

***

### getComplexText

**getComplexText**: (`type`: `TypeSchema`) => `string`

#### Type declaration

(`type`): `string`

Get the plain text display string of the type schema, for example:
Array\<Array<String>>, Map\<String, Number>

##### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `TypeSchema` |

##### Returns

`string`

#### Inherited from

[JsonSchemaTypeManager](/en/auto-docs/type-editor/classes/JsonSchemaTypeManager.md).[getComplexText](/en/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#getcomplextext)

***

### getDefaultValue

**getDefaultValue**: (`type`: `TypeSchema`) => `unknown`

#### Type declaration

(`type`): `unknown`

##### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `TypeSchema` |

##### Returns

`unknown`

#### Inherited from

[JsonSchemaTypeManager](/en/auto-docs/type-editor/classes/JsonSchemaTypeManager.md).[getDefaultValue](/en/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#getdefaultvalue)

***

### getDisplayIcon

**getDisplayIcon**: (`type`: `TypeSchema`) => `Element`

#### Type declaration

(`type`): `Element`

##### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `TypeSchema` |

##### Returns

`Element`

#### Inherited from

[JsonSchemaTypeManager](/en/auto-docs/type-editor/classes/JsonSchemaTypeManager.md).[getDisplayIcon](/en/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#getdisplayicon)

***

### getJsonPaths

**getJsonPaths**: (`type`: `TypeSchema`) => `undefined` | `string`\[]

#### Type declaration

(`type`): `undefined` | `string`\[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `TypeSchema` |

##### Returns

`undefined` | `string`\[]

#### Inherited from

[JsonSchemaTypeManager](/en/auto-docs/type-editor/classes/JsonSchemaTypeManager.md).[getJsonPaths](/en/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#getjsonpaths)

***

### getPropertiesParent

**getPropertiesParent**: (`type`: `TypeSchema`) => `undefined` | `TypeSchema`

#### Type declaration

(`type`): `undefined` | `TypeSchema`

##### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `TypeSchema` |

##### Returns

`undefined` | `TypeSchema`

#### Inherited from

[JsonSchemaTypeManager](/en/auto-docs/type-editor/classes/JsonSchemaTypeManager.md).[getPropertiesParent](/en/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#getpropertiesparent)

***

### getTypeRegistriesWithParentType

**getTypeRegistriesWithParentType**: (`parentType?`: `string`) => [`TypeEditorRegistry`](/en/auto-docs/type-editor/interfaces/TypeEditorRegistry.md)<`TypeSchema`>\[]

#### Type declaration

(`parentType?`): [`TypeEditorRegistry`](/en/auto-docs/type-editor/interfaces/TypeEditorRegistry.md)<`TypeSchema`>\[]

Get TypeRegistries based on the current parentType

##### Parameters

| Name | Type |
| :------ | :------ |
| `parentType?` | `string` |

##### Returns

[`TypeEditorRegistry`](/en/auto-docs/type-editor/interfaces/TypeEditorRegistry.md)<`TypeSchema`>\[]

#### Inherited from

[JsonSchemaTypeManager](/en/auto-docs/type-editor/classes/JsonSchemaTypeManager.md).[getTypeRegistriesWithParentType](/en/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#gettyperegistrieswithparenttype)

***

### getTypeSchemaDeepChildField

**getTypeSchemaDeepChildField**: (`type`: `TypeSchema`) => `TypeSchema`

#### Type declaration

(`type`): `TypeSchema`

Get the deepest child field of a field
Array\<Array<String>> -> String

##### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `TypeSchema` |

##### Returns

`TypeSchema`

#### Inherited from

[JsonSchemaTypeManager](/en/auto-docs/type-editor/classes/JsonSchemaTypeManager.md).[getTypeSchemaDeepChildField](/en/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#gettypeschemadeepchildfield)

***

### getTypeSchemaProperties

**getTypeSchemaProperties**: (`type`: `TypeSchema`) => `undefined` | `Record`<`string`, `TypeSchema`>

#### Type declaration

(`type`): `undefined` | `Record`<`string`, `TypeSchema`>

##### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `TypeSchema` |

##### Returns

`undefined` | `Record`<`string`, `TypeSchema`>

#### Inherited from

[JsonSchemaTypeManager](/en/auto-docs/type-editor/classes/JsonSchemaTypeManager.md).[getTypeSchemaProperties](/en/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#gettypeschemaproperties)

***

### onTypeRegistryChange

**onTypeRegistryChange**: `Event`<[`TypeEditorRegistry`](/en/auto-docs/type-editor/interfaces/TypeEditorRegistry.md)<`TypeSchema`>\[]>

#### Inherited from

[JsonSchemaTypeManager](/en/auto-docs/type-editor/classes/JsonSchemaTypeManager.md).[onTypeRegistryChange](/en/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#ontyperegistrychange)

## Methods

### getAllTypeRegistries

**getAllTypeRegistries**(): [`TypeEditorRegistry`](/en/auto-docs/type-editor/interfaces/TypeEditorRegistry.md)<`TypeSchema`>\[]

获取全量的 TypeRegistries

#### Returns

[`TypeEditorRegistry`](/en/auto-docs/type-editor/interfaces/TypeEditorRegistry.md)<`TypeSchema`>\[]

#### Inherited from

[JsonSchemaTypeManager](/en/auto-docs/type-editor/classes/JsonSchemaTypeManager.md).[getAllTypeRegistries](/en/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#getalltyperegistries)

***

### getDefaultTypeRegistry

**getDefaultTypeRegistry**(): `undefined` | [`TypeEditorRegistry`](/en/auto-docs/type-editor/interfaces/TypeEditorRegistry.md)<`TypeSchema`>

#### Returns

`undefined` | [`TypeEditorRegistry`](/en/auto-docs/type-editor/interfaces/TypeEditorRegistry.md)<`TypeSchema`>

#### Inherited from

[JsonSchemaTypeManager](/en/auto-docs/type-editor/classes/JsonSchemaTypeManager.md).[getDefaultTypeRegistry](/en/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#getdefaulttyperegistry)

***

### getTypeByName

**getTypeByName**(`typeName`): `undefined` | [`TypeEditorRegistry`](/en/auto-docs/type-editor/interfaces/TypeEditorRegistry.md)<`TypeSchema`>

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeName` | `string` |

#### Returns

`undefined` | [`TypeEditorRegistry`](/en/auto-docs/type-editor/interfaces/TypeEditorRegistry.md)<`TypeSchema`>

#### Inherited from

[JsonSchemaTypeManager](/en/auto-docs/type-editor/classes/JsonSchemaTypeManager.md).[getTypeByName](/en/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#gettypebyname)

***

### getTypeBySchema

**getTypeBySchema**(`type`): `undefined` | [`TypeEditorRegistry`](/en/auto-docs/type-editor/interfaces/TypeEditorRegistry.md)<`TypeSchema`>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `TypeSchema` |

#### Returns

`undefined` | [`TypeEditorRegistry`](/en/auto-docs/type-editor/interfaces/TypeEditorRegistry.md)<`TypeSchema`>

#### Inherited from

[JsonSchemaTypeManager](/en/auto-docs/type-editor/classes/JsonSchemaTypeManager.md).[getTypeBySchema](/en/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#gettypebyschema)

***

### register

**register**(`originRegistry`): `void`

注册 TypeRegistry

#### Parameters

| Name | Type |
| :------ | :------ |
| `originRegistry` | `Partial`<[`TypeEditorRegistry`](/en/auto-docs/type-editor/interfaces/TypeEditorRegistry.md)<`TypeSchema`>> | [`TypeRegistryCreator`](/en/auto-docs/type-editor/types/TypeRegistryCreator.md)<`TypeSchema`, [`TypeEditorRegistry`](/en/auto-docs/type-editor/interfaces/TypeEditorRegistry.md)<`TypeSchema`>, [`JsonSchemaTypeManager`](/en/auto-docs/type-editor/classes/JsonSchemaTypeManager.md)<`TypeSchema`, [`TypeEditorRegistry`](/en/auto-docs/type-editor/interfaces/TypeEditorRegistry.md)<`TypeSchema`>>> |

#### Returns

`void`

#### Inherited from

[JsonSchemaTypeManager](/en/auto-docs/type-editor/classes/JsonSchemaTypeManager.md).[register](/en/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#register)

***

### triggerChanges

**triggerChanges**(): `void`

#### Returns

`void`

#### Inherited from

[JsonSchemaTypeManager](/en/auto-docs/type-editor/classes/JsonSchemaTypeManager.md).[triggerChanges](/en/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#triggerchanges)

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

[JsonSchemaTypeManager](/en/auto-docs/type-editor/classes/JsonSchemaTypeManager.md).[unregister](/en/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#unregister)
