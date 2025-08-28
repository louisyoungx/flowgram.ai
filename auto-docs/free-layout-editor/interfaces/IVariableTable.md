# Interface: IVariableTable

An object that performs a cleanup operation when `.dispose()` is called.

Some examples of how disposables are used:

* An event listener that removes itself when `.dispose()` is called.
* The return value from registering a provider. When `.dispose()` is called, the provider is unregistered.

## Hierarchy

* [`Disposable`](/auto-docs/free-layout-editor/interfaces/Disposable-1.md)

  ↳ **`IVariableTable`**

## Table of contents

### Properties

* [onDataChange](/auto-docs/free-layout-editor/interfaces/IVariableTable.md#ondatachange)
* [parentTable](/auto-docs/free-layout-editor/interfaces/IVariableTable.md#parenttable)
* [variableKeys](/auto-docs/free-layout-editor/interfaces/IVariableTable.md#variablekeys)
* [variables](/auto-docs/free-layout-editor/interfaces/IVariableTable.md#variables)
* [version](/auto-docs/free-layout-editor/interfaces/IVariableTable.md#version)

### Methods

* [dispose](/auto-docs/free-layout-editor/interfaces/IVariableTable.md#dispose)
* [fireChange](/auto-docs/free-layout-editor/interfaces/IVariableTable.md#firechange)
* [getByKeyPath](/auto-docs/free-layout-editor/interfaces/IVariableTable.md#getbykeypath)
* [getVariableByKey](/auto-docs/free-layout-editor/interfaces/IVariableTable.md#getvariablebykey)
* [onAnyVariableChange](/auto-docs/free-layout-editor/interfaces/IVariableTable.md#onanyvariablechange)
* [onListOrAnyVarChange](/auto-docs/free-layout-editor/interfaces/IVariableTable.md#onlistoranyvarchange)
* [onVariableListChange](/auto-docs/free-layout-editor/interfaces/IVariableTable.md#onvariablelistchange)

## Properties

### onDataChange

**onDataChange**: [`Event`](/auto-docs/free-layout-editor/interfaces/Event-1.md)<`void`>

***

### parentTable

`Optional` **parentTable**: [`IVariableTable`](/auto-docs/free-layout-editor/interfaces/IVariableTable.md)

***

### variableKeys

**variableKeys**: `string`\[]

***

### variables

**variables**: [`VariableDeclaration`](/auto-docs/free-layout-editor/classes/VariableDeclaration.md)<`any`>\[]

***

### version

**version**: `number`

## Methods

### dispose

**dispose**(): `void`

#### Returns

`void`

#### Overrides

[Disposable](/auto-docs/free-layout-editor/interfaces/Disposable-1.md).[dispose](/auto-docs/free-layout-editor/interfaces/Disposable-1.md#dispose)

***

### fireChange

**fireChange**(): `void`

#### Returns

`void`

***

### getByKeyPath

**getByKeyPath**(`keyPath`): `undefined` | [`BaseVariableField`](/auto-docs/free-layout-editor/classes/BaseVariableField.md)<`any`>

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyPath` | `string`\[] |

#### Returns

`undefined` | [`BaseVariableField`](/auto-docs/free-layout-editor/classes/BaseVariableField.md)<`any`>

***

### getVariableByKey

**getVariableByKey**(`key`): `undefined` | [`VariableDeclaration`](/auto-docs/free-layout-editor/classes/VariableDeclaration.md)<`any`>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`undefined` | [`VariableDeclaration`](/auto-docs/free-layout-editor/classes/VariableDeclaration.md)<`any`>

***

### onAnyVariableChange

**onAnyVariableChange**(`observer`): [`Disposable`](/auto-docs/free-layout-editor/interfaces/Disposable-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | (`changedVariable`: [`VariableDeclaration`](/auto-docs/free-layout-editor/classes/VariableDeclaration.md)<`any`>) => `void` |

#### Returns

[`Disposable`](/auto-docs/free-layout-editor/interfaces/Disposable-1.md)

***

### onListOrAnyVarChange

**onListOrAnyVarChange**(`observer`): [`Disposable`](/auto-docs/free-layout-editor/interfaces/Disposable-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | () => `void` |

#### Returns

[`Disposable`](/auto-docs/free-layout-editor/interfaces/Disposable-1.md)

***

### onVariableListChange

**onVariableListChange**(`observer`): [`Disposable`](/auto-docs/free-layout-editor/interfaces/Disposable-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | (`variables`: [`VariableDeclaration`](/auto-docs/free-layout-editor/classes/VariableDeclaration.md)<`any`>\[]) => `void` |

#### Returns

[`Disposable`](/auto-docs/free-layout-editor/interfaces/Disposable-1.md)
