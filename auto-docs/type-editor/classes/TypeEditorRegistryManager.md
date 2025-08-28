# Class: TypeEditorRegistryManager\<TypeSchema>

Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
SPDX-License-Identifier: MIT

## Type parameters

| Name | Type |
| :------ | :------ |
| `TypeSchema` | extends `Partial`<[`IJsonSchema`](/auto-docs/type-editor/interfaces/IJsonSchema.md)> |

## Hierarchy

* [`JsonSchemaTypeManager`](/auto-docs/type-editor/classes/JsonSchemaTypeManager.md)<`TypeSchema`, [`TypeEditorRegistry`](/auto-docs/type-editor/interfaces/TypeEditorRegistry.md)<`TypeSchema`>>

  ↳ **`TypeEditorRegistryManager`**

## Table of contents

### Constructors

* [constructor](/auto-docs/type-editor/classes/TypeEditorRegistryManager.md#constructor)

### Properties

* [canAddField](/auto-docs/type-editor/classes/TypeEditorRegistryManager.md#canaddfield)
* [getComplexText](/auto-docs/type-editor/classes/TypeEditorRegistryManager.md#getcomplextext)
* [getDefaultValue](/auto-docs/type-editor/classes/TypeEditorRegistryManager.md#getdefaultvalue)
* [getDisplayIcon](/auto-docs/type-editor/classes/TypeEditorRegistryManager.md#getdisplayicon)
* [getJsonPaths](/auto-docs/type-editor/classes/TypeEditorRegistryManager.md#getjsonpaths)
* [getPropertiesParent](/auto-docs/type-editor/classes/TypeEditorRegistryManager.md#getpropertiesparent)
* [getTypeRegistriesWithParentType](/auto-docs/type-editor/classes/TypeEditorRegistryManager.md#gettyperegistrieswithparenttype)
* [getTypeSchemaDeepChildField](/auto-docs/type-editor/classes/TypeEditorRegistryManager.md#gettypeschemadeepchildfield)
* [getTypeSchemaProperties](/auto-docs/type-editor/classes/TypeEditorRegistryManager.md#gettypeschemaproperties)
* [onTypeRegistryChange](/auto-docs/type-editor/classes/TypeEditorRegistryManager.md#ontyperegistrychange)

### Methods

* [getAllTypeRegistries](/auto-docs/type-editor/classes/TypeEditorRegistryManager.md#getalltyperegistries)
* [getDefaultTypeRegistry](/auto-docs/type-editor/classes/TypeEditorRegistryManager.md#getdefaulttyperegistry)
* [getTypeByName](/auto-docs/type-editor/classes/TypeEditorRegistryManager.md#gettypebyname)
* [getTypeBySchema](/auto-docs/type-editor/classes/TypeEditorRegistryManager.md#gettypebyschema)
* [register](/auto-docs/type-editor/classes/TypeEditorRegistryManager.md#register)
* [triggerChanges](/auto-docs/type-editor/classes/TypeEditorRegistryManager.md#triggerchanges)
* [unregister](/auto-docs/type-editor/classes/TypeEditorRegistryManager.md#unregister)

## Constructors

### constructor

**new TypeEditorRegistryManager**<`TypeSchema`>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TypeSchema` | extends `Partial`<[`IJsonSchema`](/auto-docs/type-editor/interfaces/IJsonSchema.md)<`string`>> |

#### Inherited from

[JsonSchemaTypeManager](/auto-docs/type-editor/classes/JsonSchemaTypeManager.md).[constructor](/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#constructor)

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

[JsonSchemaTypeManager](/auto-docs/type-editor/classes/JsonSchemaTypeManager.md).[canAddField](/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#canaddfield)

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

[JsonSchemaTypeManager](/auto-docs/type-editor/classes/JsonSchemaTypeManager.md).[getComplexText](/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#getcomplextext)

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

[JsonSchemaTypeManager](/auto-docs/type-editor/classes/JsonSchemaTypeManager.md).[getDefaultValue](/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#getdefaultvalue)

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

[JsonSchemaTypeManager](/auto-docs/type-editor/classes/JsonSchemaTypeManager.md).[getDisplayIcon](/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#getdisplayicon)

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

[JsonSchemaTypeManager](/auto-docs/type-editor/classes/JsonSchemaTypeManager.md).[getJsonPaths](/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#getjsonpaths)

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

[JsonSchemaTypeManager](/auto-docs/type-editor/classes/JsonSchemaTypeManager.md).[getPropertiesParent](/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#getpropertiesparent)

***

### getTypeRegistriesWithParentType

**getTypeRegistriesWithParentType**: (`parentType?`: `string`) => [`TypeEditorRegistry`](/auto-docs/type-editor/interfaces/TypeEditorRegistry.md)<`TypeSchema`>\[]

#### Type declaration

(`parentType?`): [`TypeEditorRegistry`](/auto-docs/type-editor/interfaces/TypeEditorRegistry.md)<`TypeSchema`>\[]

Get TypeRegistries based on the current parentType

##### Parameters

| Name | Type |
| :------ | :------ |
| `parentType?` | `string` |

##### Returns

[`TypeEditorRegistry`](/auto-docs/type-editor/interfaces/TypeEditorRegistry.md)<`TypeSchema`>\[]

#### Inherited from

[JsonSchemaTypeManager](/auto-docs/type-editor/classes/JsonSchemaTypeManager.md).[getTypeRegistriesWithParentType](/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#gettyperegistrieswithparenttype)

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

[JsonSchemaTypeManager](/auto-docs/type-editor/classes/JsonSchemaTypeManager.md).[getTypeSchemaDeepChildField](/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#gettypeschemadeepchildfield)

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

[JsonSchemaTypeManager](/auto-docs/type-editor/classes/JsonSchemaTypeManager.md).[getTypeSchemaProperties](/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#gettypeschemaproperties)

***

### onTypeRegistryChange

**onTypeRegistryChange**: `Event`<[`TypeEditorRegistry`](/auto-docs/type-editor/interfaces/TypeEditorRegistry.md)<`TypeSchema`>\[]>

#### Inherited from

[JsonSchemaTypeManager](/auto-docs/type-editor/classes/JsonSchemaTypeManager.md).[onTypeRegistryChange](/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#ontyperegistrychange)

## Methods

### getAllTypeRegistries

**getAllTypeRegistries**(): [`TypeEditorRegistry`](/auto-docs/type-editor/interfaces/TypeEditorRegistry.md)<`TypeSchema`>\[]

获取全量的 TypeRegistries

#### Returns

[`TypeEditorRegistry`](/auto-docs/type-editor/interfaces/TypeEditorRegistry.md)<`TypeSchema`>\[]

#### Inherited from

[JsonSchemaTypeManager](/auto-docs/type-editor/classes/JsonSchemaTypeManager.md).[getAllTypeRegistries](/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#getalltyperegistries)

***

### getDefaultTypeRegistry

**getDefaultTypeRegistry**(): `undefined` | [`TypeEditorRegistry`](/auto-docs/type-editor/interfaces/TypeEditorRegistry.md)<`TypeSchema`>

#### Returns

`undefined` | [`TypeEditorRegistry`](/auto-docs/type-editor/interfaces/TypeEditorRegistry.md)<`TypeSchema`>

#### Inherited from

[JsonSchemaTypeManager](/auto-docs/type-editor/classes/JsonSchemaTypeManager.md).[getDefaultTypeRegistry](/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#getdefaulttyperegistry)

***

### getTypeByName

**getTypeByName**(`typeName`): `undefined` | [`TypeEditorRegistry`](/auto-docs/type-editor/interfaces/TypeEditorRegistry.md)<`TypeSchema`>

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeName` | `string` |

#### Returns

`undefined` | [`TypeEditorRegistry`](/auto-docs/type-editor/interfaces/TypeEditorRegistry.md)<`TypeSchema`>

#### Inherited from

[JsonSchemaTypeManager](/auto-docs/type-editor/classes/JsonSchemaTypeManager.md).[getTypeByName](/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#gettypebyname)

***

### getTypeBySchema

**getTypeBySchema**(`type`): `undefined` | [`TypeEditorRegistry`](/auto-docs/type-editor/interfaces/TypeEditorRegistry.md)<`TypeSchema`>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `TypeSchema` |

#### Returns

`undefined` | [`TypeEditorRegistry`](/auto-docs/type-editor/interfaces/TypeEditorRegistry.md)<`TypeSchema`>

#### Inherited from

[JsonSchemaTypeManager](/auto-docs/type-editor/classes/JsonSchemaTypeManager.md).[getTypeBySchema](/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#gettypebyschema)

***

### register

**register**(`originRegistry`): `void`

注册 TypeRegistry

#### Parameters

| Name | Type |
| :------ | :------ |
| `originRegistry` | `Partial`<[`TypeEditorRegistry`](/auto-docs/type-editor/interfaces/TypeEditorRegistry.md)<`TypeSchema`>> | [`TypeRegistryCreator`](/auto-docs/type-editor/types/TypeRegistryCreator.md)<`TypeSchema`, [`TypeEditorRegistry`](/auto-docs/type-editor/interfaces/TypeEditorRegistry.md)<`TypeSchema`>, [`JsonSchemaTypeManager`](/auto-docs/type-editor/classes/JsonSchemaTypeManager.md)<`TypeSchema`, [`TypeEditorRegistry`](/auto-docs/type-editor/interfaces/TypeEditorRegistry.md)<`TypeSchema`>>> |

#### Returns

`void`

#### Inherited from

[JsonSchemaTypeManager](/auto-docs/type-editor/classes/JsonSchemaTypeManager.md).[register](/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#register)

***

### triggerChanges

**triggerChanges**(): `void`

#### Returns

`void`

#### Inherited from

[JsonSchemaTypeManager](/auto-docs/type-editor/classes/JsonSchemaTypeManager.md).[triggerChanges](/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#triggerchanges)

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

[JsonSchemaTypeManager](/auto-docs/type-editor/classes/JsonSchemaTypeManager.md).[unregister](/auto-docs/type-editor/classes/JsonSchemaTypeManager.md#unregister)
