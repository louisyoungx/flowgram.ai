# Class: ScopeOutputData

作用域输出

## Table of contents

### Constructors

* [constructor](/auto-docs/variable-core/classes/ScopeOutputData.md#constructor)

### Properties

* [scope](/auto-docs/variable-core/classes/ScopeOutputData.md#scope)

### Accessors

* [globalVariableTable](/auto-docs/variable-core/classes/ScopeOutputData.md#globalvariabletable)
* [onAnyVariableChange](/auto-docs/variable-core/classes/ScopeOutputData.md#onanyvariablechange)
* [onDataChange](/auto-docs/variable-core/classes/ScopeOutputData.md#ondatachange)
* [onListOrAnyVarChange](/auto-docs/variable-core/classes/ScopeOutputData.md#onlistoranyvarchange)
* [onVariableListChange](/auto-docs/variable-core/classes/ScopeOutputData.md#onvariablelistchange)
* [variableEngine](/auto-docs/variable-core/classes/ScopeOutputData.md#variableengine)
* [variableKeys](/auto-docs/variable-core/classes/ScopeOutputData.md#variablekeys)
* [variables](/auto-docs/variable-core/classes/ScopeOutputData.md#variables)
* [version](/auto-docs/variable-core/classes/ScopeOutputData.md#version)

### Methods

* [addVariableToTable](/auto-docs/variable-core/classes/ScopeOutputData.md#addvariabletotable)
* [getVariableByKey](/auto-docs/variable-core/classes/ScopeOutputData.md#getvariablebykey)
* [notifyCoversChange](/auto-docs/variable-core/classes/ScopeOutputData.md#notifycoverschange)
* [removeVariableFromTable](/auto-docs/variable-core/classes/ScopeOutputData.md#removevariablefromtable)

## Constructors

### constructor

**new ScopeOutputData**(`scope`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scope` | [`Scope`](/auto-docs/variable-core/classes/Scope.md)<`Record`<`string`, `any`>> |

## Properties

### scope

`Readonly` **scope**: [`Scope`](/auto-docs/variable-core/classes/Scope.md)<`Record`<`string`, `any`>>

## Accessors

### globalVariableTable

`get` **globalVariableTable**(): [`IVariableTable`](/auto-docs/variable-core/interfaces/IVariableTable.md)

#### Returns

[`IVariableTable`](/auto-docs/variable-core/interfaces/IVariableTable.md)

***

### onAnyVariableChange

`get` **onAnyVariableChange**(): (`observer`: (`changedVariable`: [`VariableDeclaration`](/auto-docs/variable-core/classes/VariableDeclaration.md)<`any`>) => `void`) => `Disposable`

listen to any variable update in list

#### Returns

`fn`

(`observer`): `Disposable`

##### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | (`changedVariable`: [`VariableDeclaration`](/auto-docs/variable-core/classes/VariableDeclaration.md)<`any`>) => `void` |

##### Returns

`Disposable`

***

### onDataChange

`get` **onDataChange**(): `Event`<`void`>

#### Returns

`Event`<`void`>

**`Deprecated`**

use onListOrAnyVarChange instead

***

### onListOrAnyVarChange

`get` **onListOrAnyVarChange**(): (`observer`: () => `void`) => `Disposable`

listen to variable list change + any variable update in list

#### Returns

`fn`

(`observer`): `Disposable`

##### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | () => `void` |

##### Returns

`Disposable`

***

### onVariableListChange

`get` **onVariableListChange**(): (`observer`: (`variables`: [`VariableDeclaration`](/auto-docs/variable-core/classes/VariableDeclaration.md)<`any`>\[]) => `void`) => `Disposable`

listen to variable list change

#### Returns

`fn`

(`observer`): `Disposable`

##### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | (`variables`: [`VariableDeclaration`](/auto-docs/variable-core/classes/VariableDeclaration.md)<`any`>\[]) => `void` |

##### Returns

`Disposable`

***

### variableEngine

`get` **variableEngine**(): [`VariableEngine`](/auto-docs/variable-core/classes/VariableEngine.md)

#### Returns

[`VariableEngine`](/auto-docs/variable-core/classes/VariableEngine.md)

***

### variableKeys

`get` **variableKeys**(): `string`\[]

Output Variable Keys

#### Returns

`string`\[]

***

### variables

`get` **variables**(): [`VariableDeclaration`](/auto-docs/variable-core/classes/VariableDeclaration.md)<`any`>\[]

Scope Output Variable Declarations

#### Returns

[`VariableDeclaration`](/auto-docs/variable-core/classes/VariableDeclaration.md)<`any`>\[]

***

### version

`get` **version**(): `number`

#### Returns

`number`

## Methods

### addVariableToTable

**addVariableToTable**(`variable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `variable` | [`VariableDeclaration`](/auto-docs/variable-core/classes/VariableDeclaration.md)<`any`> |

#### Returns

`void`

***

### getVariableByKey

**getVariableByKey**(`key`): `undefined` | [`VariableDeclaration`](/auto-docs/variable-core/classes/VariableDeclaration.md)<`any`>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`undefined` | [`VariableDeclaration`](/auto-docs/variable-core/classes/VariableDeclaration.md)<`any`>

***

### notifyCoversChange

**notifyCoversChange**(): `void`

#### Returns

`void`

***

### removeVariableFromTable

**removeVariableFromTable**(`key`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`void`
