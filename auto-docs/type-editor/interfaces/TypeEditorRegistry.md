# Interface: TypeEditorRegistry\<TypeSchema>

TypeRegistry based on IJsonSchema

## Type parameters

| Name | Type |
| :------ | :------ |
| `TypeSchema` | extends `Partial`<[`IJsonSchema`](/auto-docs/type-editor/interfaces/IJsonSchema.md)> |

## Hierarchy

* [`JsonSchemaTypeRegistry`](/auto-docs/type-editor/interfaces/JsonSchemaTypeRegistry.md)<`TypeSchema`>

  ↳ **`TypeEditorRegistry`**

## Table of contents

### Properties

* [canAddField](/auto-docs/type-editor/interfaces/TypeEditorRegistry.md#canaddfield)
* [childrenDefaultEditable](/auto-docs/type-editor/interfaces/TypeEditorRegistry.md#childrendefaulteditable)
* [childrenValueEditable](/auto-docs/type-editor/interfaces/TypeEditorRegistry.md#childrenvalueeditable)
* [container](/auto-docs/type-editor/interfaces/TypeEditorRegistry.md#container)
* [customChildOptionValue](/auto-docs/type-editor/interfaces/TypeEditorRegistry.md#customchildoptionvalue)
* [customComplexText](/auto-docs/type-editor/interfaces/TypeEditorRegistry.md#customcomplextext)
* [customDisabled](/auto-docs/type-editor/interfaces/TypeEditorRegistry.md#customdisabled)
* [deFormatDefault](/auto-docs/type-editor/interfaces/TypeEditorRegistry.md#deformatdefault)
* [defaultEditable](/auto-docs/type-editor/interfaces/TypeEditorRegistry.md#defaulteditable)
* [extend](/auto-docs/type-editor/interfaces/TypeEditorRegistry.md#extend)
* [formatDefault](/auto-docs/type-editor/interfaces/TypeEditorRegistry.md#formatdefault)
* [getDefaultSchema](/auto-docs/type-editor/interfaces/TypeEditorRegistry.md#getdefaultschema)
* [getDefaultValue](/auto-docs/type-editor/interfaces/TypeEditorRegistry.md#getdefaultvalue)
* [getDisplayIcon](/auto-docs/type-editor/interfaces/TypeEditorRegistry.md#getdisplayicon)
* [getDisplayLabel](/auto-docs/type-editor/interfaces/TypeEditorRegistry.md#getdisplaylabel)
* [getDisplayText](/auto-docs/type-editor/interfaces/TypeEditorRegistry.md#getdisplaytext)
* [getInputNode](/auto-docs/type-editor/interfaces/TypeEditorRegistry.md#getinputnode)
* [getItemType](/auto-docs/type-editor/interfaces/TypeEditorRegistry.md#getitemtype)
* [getItemTypes](/auto-docs/type-editor/interfaces/TypeEditorRegistry.md#getitemtypes)
* [getJsonPaths](/auto-docs/type-editor/interfaces/TypeEditorRegistry.md#getjsonpaths)
* [getPropertiesParent](/auto-docs/type-editor/interfaces/TypeEditorRegistry.md#getpropertiesparent)
* [getStringValueByTypeSchema](/auto-docs/type-editor/interfaces/TypeEditorRegistry.md#getstringvaluebytypeschema)
* [getSupportedItemTypes](/auto-docs/type-editor/interfaces/TypeEditorRegistry.md#getsupporteditemtypes)
* [getTypeSchemaByStringValue](/auto-docs/type-editor/interfaces/TypeEditorRegistry.md#gettypeschemabystringvalue)
* [getTypeSchemaProperties](/auto-docs/type-editor/interfaces/TypeEditorRegistry.md#gettypeschemaproperties)
* [getValueText](/auto-docs/type-editor/interfaces/TypeEditorRegistry.md#getvaluetext)
* [icon](/auto-docs/type-editor/interfaces/TypeEditorRegistry.md#icon)
* [label](/auto-docs/type-editor/interfaces/TypeEditorRegistry.md#label)
* [onInit](/auto-docs/type-editor/interfaces/TypeEditorRegistry.md#oninit)
* [parentType](/auto-docs/type-editor/interfaces/TypeEditorRegistry.md#parenttype)
* [type](/auto-docs/type-editor/interfaces/TypeEditorRegistry.md#type)
* [typeCascaderConfig](/auto-docs/type-editor/interfaces/TypeEditorRegistry.md#typecascaderconfig)
* [typeInputConfig](/auto-docs/type-editor/interfaces/TypeEditorRegistry.md#typeinputconfig)

## Properties

### canAddField

**canAddField**: (`typeSchema`: `TypeSchema`) => `boolean`

#### Type declaration

(`typeSchema`): `boolean`

Whether to allow adding fields, such as object

##### Parameters

| Name | Type |
| :------ | :------ |
| `typeSchema` | `TypeSchema` |

##### Returns

`boolean`

#### Inherited from

[JsonSchemaTypeRegistry](/auto-docs/type-editor/interfaces/JsonSchemaTypeRegistry.md).[canAddField](/auto-docs/type-editor/interfaces/JsonSchemaTypeRegistry.md#canaddfield)

***

### childrenDefaultEditable

`Optional` **childrenDefaultEditable**: (`type`: `TypeSchema`) => `string` | `true`

#### Type declaration

(`type`): `string` | `true`

子字段是否可以编辑 default

##### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `TypeSchema` |

##### Returns

`string` | `true`

***

### childrenValueEditable

`Optional` **childrenValueEditable**: (`type`: `TypeSchema`) => `string` | `true`

#### Type declaration

(`type`): `string` | `true`

子字段是否可以编辑 default

##### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `TypeSchema` |

##### Returns

`string` | `true`

***

### container

**container**: `boolean`

Whether it is a container type

#### Inherited from

[JsonSchemaTypeRegistry](/auto-docs/type-editor/interfaces/JsonSchemaTypeRegistry.md).[container](/auto-docs/type-editor/interfaces/JsonSchemaTypeRegistry.md#container)

***

### customChildOptionValue

`Optional` **customChildOptionValue**: () => `string`\[]

#### Type declaration

(): `string`\[]

自定义生成子类型的 optionValue

##### Returns

`string`\[]

***

### customComplexText

`Optional` **customComplexText**: (`typeSchema`: `TypeSchema`) => `string`

#### Type declaration

(`typeSchema`): `string`

The complexText of a custom type
For example, Array<string>, can be modified

##### Parameters

| Name | Type |
| :------ | :------ |
| `typeSchema` | `TypeSchema` |

##### Returns

`string`

#### Inherited from

[JsonSchemaTypeRegistry](/auto-docs/type-editor/interfaces/JsonSchemaTypeRegistry.md).[customComplexText](/auto-docs/type-editor/interfaces/JsonSchemaTypeRegistry.md#customcomplextext)

***

### customDisabled

`Optional` **customDisabled**: (`ctx`: { `level`: `number` ; `parentType`: `string` ; `parentTypes`: `string`\[]  }) => `string`

#### Type declaration

(`ctx`): `string`

自定义 disabled

##### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `Object` |
| `ctx.level` | `number` |
| `ctx.parentType` | `string` |
| `ctx.parentTypes` | `string`\[] |

##### Returns

`string`

***

### deFormatDefault

`Optional` **deFormatDefault**: (`val`: `any`) => `any`

#### Type declaration

(`val`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `any` |

##### Returns

`any`

***

### defaultEditable

`Optional` **defaultEditable**: `string` | `true`

当前字段是否支持 default

***

### extend

`Optional` **extend**: `string`

The inherited type. If there is an inheritance, the definition of this type will use the inherited type definition,
and the new definition will override the inherited definition.

#### Inherited from

[JsonSchemaTypeRegistry](/auto-docs/type-editor/interfaces/JsonSchemaTypeRegistry.md).[extend](/auto-docs/type-editor/interfaces/JsonSchemaTypeRegistry.md#extend)

***

### formatDefault

`Optional` **formatDefault**: (`val`: `any`, `type`: [`IJsonSchema`](/auto-docs/type-editor/interfaces/IJsonSchema.md)<`string`>) => [`IJsonSchema`](/auto-docs/type-editor/interfaces/IJsonSchema.md)<`string`>

#### Type declaration

(`val`, `type`): [`IJsonSchema`](/auto-docs/type-editor/interfaces/IJsonSchema.md)<`string`>

从默认值上下文

##### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `any` |
| `type` | [`IJsonSchema`](/auto-docs/type-editor/interfaces/IJsonSchema.md)<`string`> |

##### Returns

[`IJsonSchema`](/auto-docs/type-editor/interfaces/IJsonSchema.md)<`string`>

***

### getDefaultSchema

**getDefaultSchema**: () => `TypeSchema`

#### Type declaration

(): `TypeSchema`

Generate default Schema

##### Returns

`TypeSchema`

#### Inherited from

[JsonSchemaTypeRegistry](/auto-docs/type-editor/interfaces/JsonSchemaTypeRegistry.md).[getDefaultSchema](/auto-docs/type-editor/interfaces/JsonSchemaTypeRegistry.md#getdefaultschema)

***

### getDefaultValue

**getDefaultValue**: () => `unknown`

#### Type declaration

(): `unknown`

Get the default value

##### Returns

`unknown`

#### Inherited from

[JsonSchemaTypeRegistry](/auto-docs/type-editor/interfaces/JsonSchemaTypeRegistry.md).[getDefaultValue](/auto-docs/type-editor/interfaces/JsonSchemaTypeRegistry.md#getdefaultvalue)

***

### getDisplayIcon

**getDisplayIcon**: (`typeSchema`: `TypeSchema`) => `Element`

#### Type declaration

(`typeSchema`): `Element`

Get the display icon, and the composite icon of the array is also processed

##### Parameters

| Name | Type |
| :------ | :------ |
| `typeSchema` | `TypeSchema` |

##### Returns

`Element`

#### Inherited from

[JsonSchemaTypeRegistry](/auto-docs/type-editor/interfaces/JsonSchemaTypeRegistry.md).[getDisplayIcon](/auto-docs/type-editor/interfaces/JsonSchemaTypeRegistry.md#getdisplayicon)

***

### getDisplayLabel

**getDisplayLabel**: (`typeSchema`: `TypeSchema`) => `Element`

#### Type declaration

(`typeSchema`): `Element`

Get the display label

##### Parameters

| Name | Type |
| :------ | :------ |
| `typeSchema` | `TypeSchema` |

##### Returns

`Element`

#### Inherited from

[JsonSchemaTypeRegistry](/auto-docs/type-editor/interfaces/JsonSchemaTypeRegistry.md).[getDisplayLabel](/auto-docs/type-editor/interfaces/JsonSchemaTypeRegistry.md#getdisplaylabel)

***

### getDisplayText

**getDisplayText**: (`typeSchema`: `TypeSchema`) => `undefined` | `string`

#### Type declaration

(`typeSchema`): `undefined` | `string`

Get the display text

##### Parameters

| Name | Type |
| :------ | :------ |
| `typeSchema` | `TypeSchema` |

##### Returns

`undefined` | `string`

#### Inherited from

[JsonSchemaTypeRegistry](/auto-docs/type-editor/interfaces/JsonSchemaTypeRegistry.md).[getDisplayText](/auto-docs/type-editor/interfaces/JsonSchemaTypeRegistry.md#getdisplaytext)

***

### getInputNode

`Optional` **getInputNode**: (`ctx`: [`TypeInputContext`](/auto-docs/type-editor/interfaces/TypeInputContext.md)<`TypeSchema`>) => `Element`

#### Type declaration

(`ctx`): `Element`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`TypeInputContext`](/auto-docs/type-editor/interfaces/TypeInputContext.md)<`TypeSchema`> |

##### Returns

`Element`

***

### getItemType

`Optional` **getItemType**: (`typeSchema`: `TypeSchema`) => `undefined` | `TypeSchema`

#### Type declaration

(`typeSchema`): `undefined` | `TypeSchema`

Get the sub-type

##### Parameters

| Name | Type |
| :------ | :------ |
| `typeSchema` | `TypeSchema` |

##### Returns

`undefined` | `TypeSchema`

#### Inherited from

[JsonSchemaTypeRegistry](/auto-docs/type-editor/interfaces/JsonSchemaTypeRegistry.md).[getItemType](/auto-docs/type-editor/interfaces/JsonSchemaTypeRegistry.md#getitemtype)

***

### getItemTypes

`Optional` **getItemTypes**: (`ctx`: { `level`: `number` ; `parentTypes?`: `string`\[]  }) => { `disabled?`: `string` ; `type`: `string`  }\[]

#### Type declaration

(`ctx`): { `disabled?`: `string` ; `type`: `string`  }\[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `Object` |
| `ctx.level` | `number` |
| `ctx.parentTypes?` | `string`\[] |

##### Returns

{ `disabled?`: `string` ; `type`: `string`  }\[]

**`Deprecated`**

api 已废弃，能力仍保留，请优先使用或定义 getSupportedItemTypes

***

### getJsonPaths

**getJsonPaths**: (`typeSchema`: `TypeSchema`) => `string`\[]

#### Type declaration

(`typeSchema`): `string`\[]

Get the json path of a certain type in the flow schema
For example
{ type: "object", properties: { name: { type: "string" } } }
-> \['properties', 'name']
{ type: "array", items: { type: "string" } }
->\['items']

##### Parameters

| Name | Type |
| :------ | :------ |
| `typeSchema` | `TypeSchema` |

##### Returns

`string`\[]

#### Inherited from

[JsonSchemaTypeRegistry](/auto-docs/type-editor/interfaces/JsonSchemaTypeRegistry.md).[getJsonPaths](/auto-docs/type-editor/interfaces/JsonSchemaTypeRegistry.md#getjsonpaths)

***

### getPropertiesParent

**getPropertiesParent**: (`typeSchema`: `TypeSchema`) => `undefined` | `TypeSchema`

#### Type declaration

(`typeSchema`): `undefined` | `TypeSchema`

Get the parent node of the sub-field
object is itself
array<object> is items
map<object> is additionalProperties

##### Parameters

| Name | Type |
| :------ | :------ |
| `typeSchema` | `TypeSchema` |

##### Returns

`undefined` | `TypeSchema`

#### Inherited from

[JsonSchemaTypeRegistry](/auto-docs/type-editor/interfaces/JsonSchemaTypeRegistry.md).[getPropertiesParent](/auto-docs/type-editor/interfaces/JsonSchemaTypeRegistry.md#getpropertiesparent)

***

### getStringValueByTypeSchema

`Optional` **getStringValueByTypeSchema**: (`optionValue`: `TypeSchema`) => `undefined` | `string`

#### Type declaration

(`optionValue`): `undefined` | `string`

Get the string value, for example
{ type: "array", items: { type: "string" } }
The value is "array-string"

The use case is that in some UI components, a string value needs to be generated

##### Parameters

| Name | Type |
| :------ | :------ |
| `optionValue` | `TypeSchema` |

##### Returns

`undefined` | `string`

#### Inherited from

[JsonSchemaTypeRegistry](/auto-docs/type-editor/interfaces/JsonSchemaTypeRegistry.md).[getStringValueByTypeSchema](/auto-docs/type-editor/interfaces/JsonSchemaTypeRegistry.md#getstringvaluebytypeschema)

***

### getSupportedItemTypes

`Optional` **getSupportedItemTypes**: (`ctx`: { `level`: `number` ; `parentTypes?`: `string`\[]  }) => { `disabled?`: `string` ; `type`: `string`  }\[]

#### Type declaration

(`ctx`): { `disabled?`: `string` ; `type`: `string`  }\[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `Object` |
| `ctx.level` | `number` |
| `ctx.parentTypes?` | `string`\[] |

##### Returns

{ `disabled?`: `string` ; `type`: `string`  }\[]

#### Inherited from

[JsonSchemaTypeRegistry](/auto-docs/type-editor/interfaces/JsonSchemaTypeRegistry.md).[getSupportedItemTypes](/auto-docs/type-editor/interfaces/JsonSchemaTypeRegistry.md#getsupporteditemtypes)

***

### getTypeSchemaByStringValue

`Optional` **getTypeSchemaByStringValue**: (`type`: `string`) => `TypeSchema`

#### Type declaration

(`type`): `TypeSchema`

Restore the string value to typeSchema
"array-string" is restored to
{ type: "array", items: { type: "string" } }

##### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

##### Returns

`TypeSchema`

#### Inherited from

[JsonSchemaTypeRegistry](/auto-docs/type-editor/interfaces/JsonSchemaTypeRegistry.md).[getTypeSchemaByStringValue](/auto-docs/type-editor/interfaces/JsonSchemaTypeRegistry.md#gettypeschemabystringvalue)

***

### getTypeSchemaProperties

**getTypeSchemaProperties**: (`typeSchema`: `TypeSchema`) => `undefined` | `Record`<`string`, `TypeSchema`>

#### Type declaration

(`typeSchema`): `undefined` | `Record`<`string`, `TypeSchema`>

Get sub-properties

##### Parameters

| Name | Type |
| :------ | :------ |
| `typeSchema` | `TypeSchema` |

##### Returns

`undefined` | `Record`<`string`, `TypeSchema`>

#### Inherited from

[JsonSchemaTypeRegistry](/auto-docs/type-editor/interfaces/JsonSchemaTypeRegistry.md).[getTypeSchemaProperties](/auto-docs/type-editor/interfaces/JsonSchemaTypeRegistry.md#gettypeschemaproperties)

***

### getValueText

**getValueText**: (`value?`: `unknown`) => `string`

#### Type declaration

(`value?`): `string`

Get the display text based on the value

##### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `unknown` |

##### Returns

`string`

#### Inherited from

[JsonSchemaTypeRegistry](/auto-docs/type-editor/interfaces/JsonSchemaTypeRegistry.md).[getValueText](/auto-docs/type-editor/interfaces/JsonSchemaTypeRegistry.md#getvaluetext)

***

### icon

**icon**: `Element`

The icon of this type

#### Inherited from

[JsonSchemaTypeRegistry](/auto-docs/type-editor/interfaces/JsonSchemaTypeRegistry.md).[icon](/auto-docs/type-editor/interfaces/JsonSchemaTypeRegistry.md#icon)

***

### label

**label**: `string`

The display text of this type, not including the icon

#### Inherited from

[JsonSchemaTypeRegistry](/auto-docs/type-editor/interfaces/JsonSchemaTypeRegistry.md).[label](/auto-docs/type-editor/interfaces/JsonSchemaTypeRegistry.md#label)

***

### onInit

`Optional` **onInit**: () => `void`

#### Type declaration

(): `void`

onInit initialization logic, which is called at the appropriate time externally to register data into the type system

##### Returns

`void`

#### Inherited from

[JsonSchemaTypeRegistry](/auto-docs/type-editor/interfaces/JsonSchemaTypeRegistry.md).[onInit](/auto-docs/type-editor/interfaces/JsonSchemaTypeRegistry.md#oninit)

***

### parentType

`Optional` **parentType**: `string`\[]

Supported parent types. Some types can only appear as subtypes in type selection, but not as basic types.

#### Inherited from

[JsonSchemaTypeRegistry](/auto-docs/type-editor/interfaces/JsonSchemaTypeRegistry.md).[parentType](/auto-docs/type-editor/interfaces/JsonSchemaTypeRegistry.md#parenttype)

***

### type

**type**: `string`

type reference

#### Inherited from

[JsonSchemaTypeRegistry](/auto-docs/type-editor/interfaces/JsonSchemaTypeRegistry.md).[type](/auto-docs/type-editor/interfaces/JsonSchemaTypeRegistry.md#type)

***

### typeCascaderConfig

`Optional` **typeCascaderConfig**: [`TypeCascaderConfig`](/auto-docs/type-editor/interfaces/TypeCascaderConfig.md)<`TypeSchema`>

typeCascader 设置

***

### typeInputConfig

`Optional` **typeInputConfig**: [`TypeInputConfig`](/auto-docs/type-editor/interfaces/TypeInputConfig.md)<`TypeSchema`>

typeInput 设置
