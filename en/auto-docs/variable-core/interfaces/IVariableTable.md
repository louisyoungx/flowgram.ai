# Interface: IVariableTable

## Hierarchy

* `Disposable`

  ↳ **`IVariableTable`**

## Table of contents

### Properties

* [onDataChange](/en/auto-docs/variable-core/interfaces/IVariableTable.md#ondatachange)
* [parentTable](/en/auto-docs/variable-core/interfaces/IVariableTable.md#parenttable)
* [variableKeys](/en/auto-docs/variable-core/interfaces/IVariableTable.md#variablekeys)
* [variables](/en/auto-docs/variable-core/interfaces/IVariableTable.md#variables)
* [version](/en/auto-docs/variable-core/interfaces/IVariableTable.md#version)

### Methods

* [dispose](/en/auto-docs/variable-core/interfaces/IVariableTable.md#dispose)
* [fireChange](/en/auto-docs/variable-core/interfaces/IVariableTable.md#firechange)
* [getByKeyPath](/en/auto-docs/variable-core/interfaces/IVariableTable.md#getbykeypath)
* [getVariableByKey](/en/auto-docs/variable-core/interfaces/IVariableTable.md#getvariablebykey)
* [onAnyVariableChange](/en/auto-docs/variable-core/interfaces/IVariableTable.md#onanyvariablechange)
* [onListOrAnyVarChange](/en/auto-docs/variable-core/interfaces/IVariableTable.md#onlistoranyvarchange)
* [onVariableListChange](/en/auto-docs/variable-core/interfaces/IVariableTable.md#onvariablelistchange)

## Properties

### onDataChange

**onDataChange**: `Event`<`void`>

***

### parentTable

`Optional` **parentTable**: [`IVariableTable`](/en/auto-docs/variable-core/interfaces/IVariableTable.md)

***

### variableKeys

**variableKeys**: `string`\[]

***

### variables

**variables**: [`VariableDeclaration`](/en/auto-docs/variable-core/classes/VariableDeclaration.md)<`any`>\[]

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

**getByKeyPath**(`keyPath`): `undefined` | [`BaseVariableField`](/en/auto-docs/variable-core/classes/BaseVariableField.md)<`any`>

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyPath` | `string`\[] |

#### Returns

`undefined` | [`BaseVariableField`](/en/auto-docs/variable-core/classes/BaseVariableField.md)<`any`>

***

### getVariableByKey

**getVariableByKey**(`key`): `undefined` | [`VariableDeclaration`](/en/auto-docs/variable-core/classes/VariableDeclaration.md)<`any`>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`undefined` | [`VariableDeclaration`](/en/auto-docs/variable-core/classes/VariableDeclaration.md)<`any`>

***

### onAnyVariableChange

**onAnyVariableChange**(`observer`): `Disposable`

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | (`changedVariable`: [`VariableDeclaration`](/en/auto-docs/variable-core/classes/VariableDeclaration.md)<`any`>) => `void` |

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
| `observer` | (`variables`: [`VariableDeclaration`](/en/auto-docs/variable-core/classes/VariableDeclaration.md)<`any`>\[]) => `void` |

#### Returns

`Disposable`
