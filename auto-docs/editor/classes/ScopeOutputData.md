# Class: ScopeOutputData

作用域输出

## Table of contents

### Constructors

* [constructor](/auto-docs/editor/classes/ScopeOutputData.md#constructor)

### Properties

* [scope](/auto-docs/editor/classes/ScopeOutputData.md#scope)

### Accessors

* [globalVariableTable](/auto-docs/editor/classes/ScopeOutputData.md#globalvariabletable)
* [onAnyVariableChange](/auto-docs/editor/classes/ScopeOutputData.md#onanyvariablechange)
* [onDataChange](/auto-docs/editor/classes/ScopeOutputData.md#ondatachange)
* [onListOrAnyVarChange](/auto-docs/editor/classes/ScopeOutputData.md#onlistoranyvarchange)
* [onVariableListChange](/auto-docs/editor/classes/ScopeOutputData.md#onvariablelistchange)
* [variableEngine](/auto-docs/editor/classes/ScopeOutputData.md#variableengine)
* [variableKeys](/auto-docs/editor/classes/ScopeOutputData.md#variablekeys)
* [variables](/auto-docs/editor/classes/ScopeOutputData.md#variables)
* [version](/auto-docs/editor/classes/ScopeOutputData.md#version)

### Methods

* [addVariableToTable](/auto-docs/editor/classes/ScopeOutputData.md#addvariabletotable)
* [getVariableByKey](/auto-docs/editor/classes/ScopeOutputData.md#getvariablebykey)
* [notifyCoversChange](/auto-docs/editor/classes/ScopeOutputData.md#notifycoverschange)
* [removeVariableFromTable](/auto-docs/editor/classes/ScopeOutputData.md#removevariablefromtable)

## Constructors

### constructor

**new ScopeOutputData**(`scope`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scope` | [`Scope`](/auto-docs/editor/classes/Scope.md)<`Record`<`string`, `any`>> |

## Properties

### scope

`Readonly` **scope**: [`Scope`](/auto-docs/editor/classes/Scope.md)<`Record`<`string`, `any`>>

## Accessors

### globalVariableTable

`get` **globalVariableTable**(): [`IVariableTable`](/auto-docs/editor/interfaces/IVariableTable.md)

#### Returns

[`IVariableTable`](/auto-docs/editor/interfaces/IVariableTable.md)

***

### onAnyVariableChange

`get` **onAnyVariableChange**(): (`observer`: (`changedVariable`: [`VariableDeclaration`](/auto-docs/editor/classes/VariableDeclaration.md)<`any`>) => `void`) => [`Disposable`](/auto-docs/editor/interfaces/Disposable-1.md)

listen to any variable update in list

#### Returns

`fn`

(`observer`): [`Disposable`](/auto-docs/editor/interfaces/Disposable-1.md)

listen to any variable update in list

##### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | (`changedVariable`: [`VariableDeclaration`](/auto-docs/editor/classes/VariableDeclaration.md)<`any`>) => `void` |

##### Returns

[`Disposable`](/auto-docs/editor/interfaces/Disposable-1.md)

***

### onDataChange

`get` **onDataChange**(): [`Event`](/auto-docs/editor/interfaces/Event-1.md)<`void`>

#### Returns

[`Event`](/auto-docs/editor/interfaces/Event-1.md)<`void`>

**`Deprecated`**

use onListOrAnyVarChange instead

***

### onListOrAnyVarChange

`get` **onListOrAnyVarChange**(): (`observer`: () => `void`) => [`Disposable`](/auto-docs/editor/interfaces/Disposable-1.md)

listen to variable list change + any variable update in list

#### Returns

`fn`

(`observer`): [`Disposable`](/auto-docs/editor/interfaces/Disposable-1.md)

listen to variable list change + any variable update in list

##### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | () => `void` |

##### Returns

[`Disposable`](/auto-docs/editor/interfaces/Disposable-1.md)

***

### onVariableListChange

`get` **onVariableListChange**(): (`observer`: (`variables`: [`VariableDeclaration`](/auto-docs/editor/classes/VariableDeclaration.md)<`any`>\[]) => `void`) => [`Disposable`](/auto-docs/editor/interfaces/Disposable-1.md)

listen to variable list change

#### Returns

`fn`

(`observer`): [`Disposable`](/auto-docs/editor/interfaces/Disposable-1.md)

listen to variable list change

##### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | (`variables`: [`VariableDeclaration`](/auto-docs/editor/classes/VariableDeclaration.md)<`any`>\[]) => `void` |

##### Returns

[`Disposable`](/auto-docs/editor/interfaces/Disposable-1.md)

***

### variableEngine

`get` **variableEngine**(): [`VariableEngine`](/auto-docs/editor/classes/VariableEngine.md)

#### Returns

[`VariableEngine`](/auto-docs/editor/classes/VariableEngine.md)

***

### variableKeys

`get` **variableKeys**(): `string`\[]

Output Variable Keys

#### Returns

`string`\[]

***

### variables

`get` **variables**(): [`VariableDeclaration`](/auto-docs/editor/classes/VariableDeclaration.md)<`any`>\[]

Scope Output Variable Declarations

#### Returns

[`VariableDeclaration`](/auto-docs/editor/classes/VariableDeclaration.md)<`any`>\[]

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
| `variable` | [`VariableDeclaration`](/auto-docs/editor/classes/VariableDeclaration.md)<`any`> |

#### Returns

`void`

***

### getVariableByKey

**getVariableByKey**(`key`): `undefined` | [`VariableDeclaration`](/auto-docs/editor/classes/VariableDeclaration.md)<`any`>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`undefined` | [`VariableDeclaration`](/auto-docs/editor/classes/VariableDeclaration.md)<`any`>

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
