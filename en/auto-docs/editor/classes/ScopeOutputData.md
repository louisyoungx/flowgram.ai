# Class: ScopeOutputData

作用域输出

## Table of contents

### Constructors

* [constructor](/en/auto-docs/editor/classes/ScopeOutputData.md#constructor)

### Properties

* [scope](/en/auto-docs/editor/classes/ScopeOutputData.md#scope)

### Accessors

* [globalVariableTable](/en/auto-docs/editor/classes/ScopeOutputData.md#globalvariabletable)
* [onAnyVariableChange](/en/auto-docs/editor/classes/ScopeOutputData.md#onanyvariablechange)
* [onDataChange](/en/auto-docs/editor/classes/ScopeOutputData.md#ondatachange)
* [onListOrAnyVarChange](/en/auto-docs/editor/classes/ScopeOutputData.md#onlistoranyvarchange)
* [onVariableListChange](/en/auto-docs/editor/classes/ScopeOutputData.md#onvariablelistchange)
* [variableEngine](/en/auto-docs/editor/classes/ScopeOutputData.md#variableengine)
* [variableKeys](/en/auto-docs/editor/classes/ScopeOutputData.md#variablekeys)
* [variables](/en/auto-docs/editor/classes/ScopeOutputData.md#variables)
* [version](/en/auto-docs/editor/classes/ScopeOutputData.md#version)

### Methods

* [addVariableToTable](/en/auto-docs/editor/classes/ScopeOutputData.md#addvariabletotable)
* [getVariableByKey](/en/auto-docs/editor/classes/ScopeOutputData.md#getvariablebykey)
* [notifyCoversChange](/en/auto-docs/editor/classes/ScopeOutputData.md#notifycoverschange)
* [removeVariableFromTable](/en/auto-docs/editor/classes/ScopeOutputData.md#removevariablefromtable)

## Constructors

### constructor

**new ScopeOutputData**(`scope`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scope` | [`Scope`](/en/auto-docs/editor/classes/Scope.md)<`Record`<`string`, `any`>> |

## Properties

### scope

`Readonly` **scope**: [`Scope`](/en/auto-docs/editor/classes/Scope.md)<`Record`<`string`, `any`>>

## Accessors

### globalVariableTable

`get` **globalVariableTable**(): [`IVariableTable`](/en/auto-docs/editor/interfaces/IVariableTable.md)

#### Returns

[`IVariableTable`](/en/auto-docs/editor/interfaces/IVariableTable.md)

***

### onAnyVariableChange

`get` **onAnyVariableChange**(): (`observer`: (`changedVariable`: [`VariableDeclaration`](/en/auto-docs/editor/classes/VariableDeclaration.md)<`any`>) => `void`) => [`Disposable`](/en/auto-docs/editor/interfaces/Disposable-1.md)

listen to any variable update in list

#### Returns

`fn`

(`observer`): [`Disposable`](/en/auto-docs/editor/interfaces/Disposable-1.md)

listen to any variable update in list

##### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | (`changedVariable`: [`VariableDeclaration`](/en/auto-docs/editor/classes/VariableDeclaration.md)<`any`>) => `void` |

##### Returns

[`Disposable`](/en/auto-docs/editor/interfaces/Disposable-1.md)

***

### onDataChange

`get` **onDataChange**(): [`Event`](/en/auto-docs/editor/interfaces/Event-1.md)<`void`>

#### Returns

[`Event`](/en/auto-docs/editor/interfaces/Event-1.md)<`void`>

**`Deprecated`**

use onListOrAnyVarChange instead

***

### onListOrAnyVarChange

`get` **onListOrAnyVarChange**(): (`observer`: () => `void`) => [`Disposable`](/en/auto-docs/editor/interfaces/Disposable-1.md)

listen to variable list change + any variable update in list

#### Returns

`fn`

(`observer`): [`Disposable`](/en/auto-docs/editor/interfaces/Disposable-1.md)

listen to variable list change + any variable update in list

##### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | () => `void` |

##### Returns

[`Disposable`](/en/auto-docs/editor/interfaces/Disposable-1.md)

***

### onVariableListChange

`get` **onVariableListChange**(): (`observer`: (`variables`: [`VariableDeclaration`](/en/auto-docs/editor/classes/VariableDeclaration.md)<`any`>\[]) => `void`) => [`Disposable`](/en/auto-docs/editor/interfaces/Disposable-1.md)

listen to variable list change

#### Returns

`fn`

(`observer`): [`Disposable`](/en/auto-docs/editor/interfaces/Disposable-1.md)

listen to variable list change

##### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | (`variables`: [`VariableDeclaration`](/en/auto-docs/editor/classes/VariableDeclaration.md)<`any`>\[]) => `void` |

##### Returns

[`Disposable`](/en/auto-docs/editor/interfaces/Disposable-1.md)

***

### variableEngine

`get` **variableEngine**(): [`VariableEngine`](/en/auto-docs/editor/classes/VariableEngine.md)

#### Returns

[`VariableEngine`](/en/auto-docs/editor/classes/VariableEngine.md)

***

### variableKeys

`get` **variableKeys**(): `string`\[]

Output Variable Keys

#### Returns

`string`\[]

***

### variables

`get` **variables**(): [`VariableDeclaration`](/en/auto-docs/editor/classes/VariableDeclaration.md)<`any`>\[]

Scope Output Variable Declarations

#### Returns

[`VariableDeclaration`](/en/auto-docs/editor/classes/VariableDeclaration.md)<`any`>\[]

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
| `variable` | [`VariableDeclaration`](/en/auto-docs/editor/classes/VariableDeclaration.md)<`any`> |

#### Returns

`void`

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
