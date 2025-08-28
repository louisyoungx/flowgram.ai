# Interface: TypeEditorRef\<Mode, TypeSchema>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Mode` | extends [`TypeEditorMode`](/en/auto-docs/type-editor/types/TypeEditorMode.md) |
| `TypeSchema` | extends `Partial`<[`IJsonSchema`](/en/auto-docs/type-editor/interfaces/IJsonSchema.md)> |

## Table of contents

### Properties

* [getContainer](/en/auto-docs/type-editor/interfaces/TypeEditorRef.md#getcontainer)
* [getOperator](/en/auto-docs/type-editor/interfaces/TypeEditorRef.md#getoperator)
* [getService](/en/auto-docs/type-editor/interfaces/TypeEditorRef.md#getservice)
* [getValue](/en/auto-docs/type-editor/interfaces/TypeEditorRef.md#getvalue)
* [redo](/en/auto-docs/type-editor/interfaces/TypeEditorRef.md#redo)
* [setValue](/en/auto-docs/type-editor/interfaces/TypeEditorRef.md#setvalue)
* [undo](/en/auto-docs/type-editor/interfaces/TypeEditorRef.md#undo)

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

**getService**: () => `undefined` | [`TypeEditorService`](/en/auto-docs/type-editor/classes/TypeEditorService.md)<`TypeSchema`>

#### Type declaration

(): `undefined` | [`TypeEditorService`](/en/auto-docs/type-editor/classes/TypeEditorService.md)<`TypeSchema`>

##### Returns

`undefined` | [`TypeEditorService`](/en/auto-docs/type-editor/classes/TypeEditorService.md)<`TypeSchema`>

***

### getValue

**getValue**: () => `undefined` | [`TypeEditorValue`](/en/auto-docs/type-editor/types/TypeEditorValue.md)<`Mode`, `TypeSchema`>

#### Type declaration

(): `undefined` | [`TypeEditorValue`](/en/auto-docs/type-editor/types/TypeEditorValue.md)<`Mode`, `TypeSchema`>

##### Returns

`undefined` | [`TypeEditorValue`](/en/auto-docs/type-editor/types/TypeEditorValue.md)<`Mode`, `TypeSchema`>

***

### redo

**redo**: () => `void`

#### Type declaration

(): `void`

##### Returns

`void`

***

### setValue

**setValue**: (`newVal`: [`TypeEditorValue`](/en/auto-docs/type-editor/types/TypeEditorValue.md)<`Mode`, `TypeSchema`>) => `void`

#### Type declaration

(`newVal`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `newVal` | [`TypeEditorValue`](/en/auto-docs/type-editor/types/TypeEditorValue.md)<`Mode`, `TypeSchema`> |

##### Returns

`void`

***

### undo

**undo**: () => `void`

#### Type declaration

(): `void`

##### Returns

`void`
