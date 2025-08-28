# Interface: IVariableTable

An object that performs a cleanup operation when `.dispose()` is called.

Some examples of how disposables are used:

* An event listener that removes itself when `.dispose()` is called.
* The return value from registering a provider. When `.dispose()` is called, the provider is unregistered.

## Hierarchy

* [`Disposable`](/en/auto-docs/editor/interfaces/Disposable-1.md)

  ↳ **`IVariableTable`**

## Table of contents

### Properties

* [onDataChange](/en/auto-docs/editor/interfaces/IVariableTable.md#ondatachange)
* [parentTable](/en/auto-docs/editor/interfaces/IVariableTable.md#parenttable)
* [variableKeys](/en/auto-docs/editor/interfaces/IVariableTable.md#variablekeys)
* [variables](/en/auto-docs/editor/interfaces/IVariableTable.md#variables)
* [version](/en/auto-docs/editor/interfaces/IVariableTable.md#version)

### Methods

* [dispose](/en/auto-docs/editor/interfaces/IVariableTable.md#dispose)
* [fireChange](/en/auto-docs/editor/interfaces/IVariableTable.md#firechange)
* [getByKeyPath](/en/auto-docs/editor/interfaces/IVariableTable.md#getbykeypath)
* [getVariableByKey](/en/auto-docs/editor/interfaces/IVariableTable.md#getvariablebykey)
* [onAnyVariableChange](/en/auto-docs/editor/interfaces/IVariableTable.md#onanyvariablechange)
* [onListOrAnyVarChange](/en/auto-docs/editor/interfaces/IVariableTable.md#onlistoranyvarchange)
* [onVariableListChange](/en/auto-docs/editor/interfaces/IVariableTable.md#onvariablelistchange)

## Properties

### onDataChange

**onDataChange**: [`Event`](/en/auto-docs/editor/interfaces/Event-1.md)<`void`>

***

### parentTable

`Optional` **parentTable**: [`IVariableTable`](/en/auto-docs/editor/interfaces/IVariableTable.md)

***

### variableKeys

**variableKeys**: `string`\[]

***

### variables

**variables**: [`VariableDeclaration`](/en/auto-docs/editor/classes/VariableDeclaration.md)<`any`>\[]

***

### version

**version**: `number`

## Methods

### dispose

**dispose**(): `void`

#### Returns

`void`

#### Overrides

[Disposable](/en/auto-docs/editor/interfaces/Disposable-1.md).[dispose](/en/auto-docs/editor/interfaces/Disposable-1.md#dispose)

***

### fireChange

**fireChange**(): `void`

#### Returns

`void`

***

### getByKeyPath

**getByKeyPath**(`keyPath`): `undefined` | [`BaseVariableField`](/en/auto-docs/editor/classes/BaseVariableField.md)<`any`>

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyPath` | `string`\[] |

#### Returns

`undefined` | [`BaseVariableField`](/en/auto-docs/editor/classes/BaseVariableField.md)<`any`>

***

### getVariableByKey

**getVariableByKey**(`key`): `undefined` | [`VariableDeclaration`](/en/auto-docs/editor/classes/VariableDeclaration.md)<`any`>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`undefined` | [`VariableDeclaration`](/en/auto-docs/editor/classes/VariableDeclaration.md)<`any`>

***

### onAnyVariableChange

**onAnyVariableChange**(`observer`): [`Disposable`](/en/auto-docs/editor/interfaces/Disposable-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | (`changedVariable`: [`VariableDeclaration`](/en/auto-docs/editor/classes/VariableDeclaration.md)<`any`>) => `void` |

#### Returns

[`Disposable`](/en/auto-docs/editor/interfaces/Disposable-1.md)

***

### onListOrAnyVarChange

**onListOrAnyVarChange**(`observer`): [`Disposable`](/en/auto-docs/editor/interfaces/Disposable-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | () => `void` |

#### Returns

[`Disposable`](/en/auto-docs/editor/interfaces/Disposable-1.md)

***

### onVariableListChange

**onVariableListChange**(`observer`): [`Disposable`](/en/auto-docs/editor/interfaces/Disposable-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | (`variables`: [`VariableDeclaration`](/en/auto-docs/editor/classes/VariableDeclaration.md)<`any`>\[]) => `void` |

#### Returns

[`Disposable`](/en/auto-docs/editor/interfaces/Disposable-1.md)
