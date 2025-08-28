# Interface: TypeEditorRef\<Mode, TypeSchema>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Mode` | extends [`TypeEditorMode`](/auto-docs/type-editor/types/TypeEditorMode.md) |
| `TypeSchema` | extends `Partial`<[`IJsonSchema`](/auto-docs/type-editor/interfaces/IJsonSchema.md)> |

## Table of contents

### Properties

* [getContainer](/auto-docs/type-editor/interfaces/TypeEditorRef.md#getcontainer)
* [getOperator](/auto-docs/type-editor/interfaces/TypeEditorRef.md#getoperator)
* [getService](/auto-docs/type-editor/interfaces/TypeEditorRef.md#getservice)
* [getValue](/auto-docs/type-editor/interfaces/TypeEditorRef.md#getvalue)
* [redo](/auto-docs/type-editor/interfaces/TypeEditorRef.md#redo)
* [setValue](/auto-docs/type-editor/interfaces/TypeEditorRef.md#setvalue)
* [undo](/auto-docs/type-editor/interfaces/TypeEditorRef.md#undo)

## Properties

### getContainer

**getContainer**: () => `undefined` | `HTMLDivElement`

#### Type declaration

(): `undefined` | `HTMLDivElement`

##### Returns

`undefined` | `HTMLDivElement`

***

### getOperator

**getOperator**: () => `undefined` | `TypeEditorOperationService`<`TypeSchema`>

#### Type declaration

(): `undefined` | `TypeEditorOperationService`<`TypeSchema`>

##### Returns

`undefined` | `TypeEditorOperationService`<`TypeSchema`>

***

### getService

**getService**: () => `undefined` | [`TypeEditorService`](/auto-docs/type-editor/classes/TypeEditorService.md)<`TypeSchema`>

#### Type declaration

(): `undefined` | [`TypeEditorService`](/auto-docs/type-editor/classes/TypeEditorService.md)<`TypeSchema`>

##### Returns

`undefined` | [`TypeEditorService`](/auto-docs/type-editor/classes/TypeEditorService.md)<`TypeSchema`>

***

### getValue

**getValue**: () => `undefined` | [`TypeEditorValue`](/auto-docs/type-editor/types/TypeEditorValue.md)<`Mode`, `TypeSchema`>

#### Type declaration

(): `undefined` | [`TypeEditorValue`](/auto-docs/type-editor/types/TypeEditorValue.md)<`Mode`, `TypeSchema`>

##### Returns

`undefined` | [`TypeEditorValue`](/auto-docs/type-editor/types/TypeEditorValue.md)<`Mode`, `TypeSchema`>

***

### redo

**redo**: () => `void`

#### Type declaration

(): `void`

##### Returns

`void`

***

### setValue

**setValue**: (`newVal`: [`TypeEditorValue`](/auto-docs/type-editor/types/TypeEditorValue.md)<`Mode`, `TypeSchema`>) => `void`

#### Type declaration

(`newVal`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `newVal` | [`TypeEditorValue`](/auto-docs/type-editor/types/TypeEditorValue.md)<`Mode`, `TypeSchema`> |

##### Returns

`void`

***

### undo

**undo**: () => `void`

#### Type declaration

(): `void`

##### Returns

`void`
