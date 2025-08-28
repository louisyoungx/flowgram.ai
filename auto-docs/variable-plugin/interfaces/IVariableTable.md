# Interface: IVariableTable

## Hierarchy

* `Disposable`

  ↳ **`IVariableTable`**

## Table of contents

### Properties

* [onDataChange](/auto-docs/variable-plugin/interfaces/IVariableTable.md#ondatachange)
* [parentTable](/auto-docs/variable-plugin/interfaces/IVariableTable.md#parenttable)
* [variableKeys](/auto-docs/variable-plugin/interfaces/IVariableTable.md#variablekeys)
* [variables](/auto-docs/variable-plugin/interfaces/IVariableTable.md#variables)
* [version](/auto-docs/variable-plugin/interfaces/IVariableTable.md#version)

### Methods

* [dispose](/auto-docs/variable-plugin/interfaces/IVariableTable.md#dispose)
* [fireChange](/auto-docs/variable-plugin/interfaces/IVariableTable.md#firechange)
* [getByKeyPath](/auto-docs/variable-plugin/interfaces/IVariableTable.md#getbykeypath)
* [getVariableByKey](/auto-docs/variable-plugin/interfaces/IVariableTable.md#getvariablebykey)
* [onAnyVariableChange](/auto-docs/variable-plugin/interfaces/IVariableTable.md#onanyvariablechange)
* [onListOrAnyVarChange](/auto-docs/variable-plugin/interfaces/IVariableTable.md#onlistoranyvarchange)
* [onVariableListChange](/auto-docs/variable-plugin/interfaces/IVariableTable.md#onvariablelistchange)

## Properties

### onDataChange

**onDataChange**: `Event`<`void`>

***

### parentTable

`Optional` **parentTable**: [`IVariableTable`](/auto-docs/variable-plugin/interfaces/IVariableTable.md)

***

### variableKeys

**variableKeys**: `string`\[]

***

### variables

**variables**: [`VariableDeclaration`](/auto-docs/variable-plugin/classes/VariableDeclaration.md)<`any`>\[]

***

### version

**version**: `number`

## Methods

### dispose

**dispose**(): `void`

#### Returns

`void`

#### Overrides

Disposable.dispose

***

### fireChange

**fireChange**(): `void`

#### Returns

`void`

***

### getByKeyPath

**getByKeyPath**(`keyPath`): `undefined` | [`BaseVariableField`](/auto-docs/variable-plugin/classes/BaseVariableField.md)<`any`>

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyPath` | `string`\[] |

#### Returns

`undefined` | [`BaseVariableField`](/auto-docs/variable-plugin/classes/BaseVariableField.md)<`any`>

***

### getVariableByKey

**getVariableByKey**(`key`): `undefined` | [`VariableDeclaration`](/auto-docs/variable-plugin/classes/VariableDeclaration.md)<`any`>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`undefined` | [`VariableDeclaration`](/auto-docs/variable-plugin/classes/VariableDeclaration.md)<`any`>

***

### onAnyVariableChange

**onAnyVariableChange**(`observer`): `Disposable`

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | (`changedVariable`: [`VariableDeclaration`](/auto-docs/variable-plugin/classes/VariableDeclaration.md)<`any`>) => `void` |

#### Returns

`Disposable`

***

### onListOrAnyVarChange

**onListOrAnyVarChange**(`observer`): `Disposable`

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | () => `void` |

#### Returns

`Disposable`

***

### onVariableListChange

**onVariableListChange**(`observer`): `Disposable`

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | (`variables`: [`VariableDeclaration`](/auto-docs/variable-plugin/classes/VariableDeclaration.md)<`any`>\[]) => `void` |

#### Returns

`Disposable`
