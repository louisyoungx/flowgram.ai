# Class: GlobalScope

Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
SPDX-License-Identifier: MIT

## Hierarchy

* [`Scope`](/auto-docs/variable-plugin/classes/Scope.md)

  ↳ **`GlobalScope`**

## Table of contents

### Constructors

* [constructor](/auto-docs/variable-plugin/classes/GlobalScope.md#constructor)

### Properties

* [ast](/auto-docs/variable-plugin/classes/GlobalScope.md#ast)
* [available](/auto-docs/variable-plugin/classes/GlobalScope.md#available)
* [event](/auto-docs/variable-plugin/classes/GlobalScope.md#event)
* [id](/auto-docs/variable-plugin/classes/GlobalScope.md#id)
* [meta](/auto-docs/variable-plugin/classes/GlobalScope.md#meta)
* [onDispose](/auto-docs/variable-plugin/classes/GlobalScope.md#ondispose)
* [output](/auto-docs/variable-plugin/classes/GlobalScope.md#output)
* [toDispose](/auto-docs/variable-plugin/classes/GlobalScope.md#todispose)
* [variableEngine](/auto-docs/variable-plugin/classes/GlobalScope.md#variableengine)
* [ID](/auto-docs/variable-plugin/classes/GlobalScope.md#id-1)

### Accessors

* [coverScopes](/auto-docs/variable-plugin/classes/GlobalScope.md#coverscopes)
* [depScopes](/auto-docs/variable-plugin/classes/GlobalScope.md#depscopes)
* [disposed](/auto-docs/variable-plugin/classes/GlobalScope.md#disposed)

### Methods

* [clearVar](/auto-docs/variable-plugin/classes/GlobalScope.md#clearvar)
* [dispose](/auto-docs/variable-plugin/classes/GlobalScope.md#dispose)
* [getVar](/auto-docs/variable-plugin/classes/GlobalScope.md#getvar)
* [refreshCovers](/auto-docs/variable-plugin/classes/GlobalScope.md#refreshcovers)
* [refreshDeps](/auto-docs/variable-plugin/classes/GlobalScope.md#refreshdeps)
* [setVar](/auto-docs/variable-plugin/classes/GlobalScope.md#setvar)
* [is](/auto-docs/variable-plugin/classes/GlobalScope.md#is)

## Constructors

### constructor

**new GlobalScope**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.id` | `string` | `symbol` |
| `options.meta?` | `Record`<`string`, `any`> |
| `options.variableEngine` | [`VariableEngine`](/auto-docs/variable-plugin/classes/VariableEngine.md) |

#### Inherited from

[Scope](/auto-docs/variable-plugin/classes/Scope.md).[constructor](/auto-docs/variable-plugin/classes/Scope.md#constructor)

## Properties

### ast

`Readonly` **ast**: [`MapNode`](/auto-docs/variable-plugin/classes/MapNode.md)

作用域 AST 根节点

* Map\<formItemKey, formItemValue>

#### Inherited from

[Scope](/auto-docs/variable-plugin/classes/Scope.md).[ast](/auto-docs/variable-plugin/classes/Scope.md#ast)

***

### available

`Readonly` **available**: `ScopeAvailableData`

可用变量数据管理

#### Inherited from

[Scope](/auto-docs/variable-plugin/classes/Scope.md).[available](/auto-docs/variable-plugin/classes/Scope.md#available)

***

### event

`Readonly` **event**: `ScopeEventData`

作用域事件管理

#### Inherited from

[Scope](/auto-docs/variable-plugin/classes/Scope.md).[event](/auto-docs/variable-plugin/classes/Scope.md#event)

***

### id

`Readonly` **id**: `string` | `symbol`

Scope 唯一索引

#### Inherited from

[Scope](/auto-docs/variable-plugin/classes/Scope.md).[id](/auto-docs/variable-plugin/classes/Scope.md#id)

***

### meta

`Readonly` **meta**: `Record`<`string`, `any`>

作用域的基本元信息，包括作用域所在节点及一些 flag 信息，上层业务可以额外扩展

#### Inherited from

[Scope](/auto-docs/variable-plugin/classes/Scope.md).[meta](/auto-docs/variable-plugin/classes/Scope.md#meta)

***

### onDispose

**onDispose**: `Event`<`void`>

#### Inherited from

[Scope](/auto-docs/variable-plugin/classes/Scope.md).[onDispose](/auto-docs/variable-plugin/classes/Scope.md#ondispose)

***

### output

`Readonly` **output**: [`ScopeOutputData`](/auto-docs/variable-plugin/classes/ScopeOutputData.md)

输出变量数据管理

#### Inherited from

[Scope](/auto-docs/variable-plugin/classes/Scope.md).[output](/auto-docs/variable-plugin/classes/Scope.md#output)

***

### toDispose

**toDispose**: `DisposableCollection`

#### Inherited from

[Scope](/auto-docs/variable-plugin/classes/Scope.md).[toDispose](/auto-docs/variable-plugin/classes/Scope.md#todispose)

***

### variableEngine

`Readonly` **variableEngine**: [`VariableEngine`](/auto-docs/variable-plugin/classes/VariableEngine.md)

Scope 依赖变量引擎

#### Inherited from

[Scope](/auto-docs/variable-plugin/classes/Scope.md).[variableEngine](/auto-docs/variable-plugin/classes/Scope.md#variableengine)

***

### ID

`Static` `Readonly` **ID**: typeof [`ID`](/auto-docs/variable-plugin/classes/GlobalScope.md#id-1)

## Accessors

### coverScopes

`get` **coverScopes**(): [`Scope`](/auto-docs/variable-plugin/classes/Scope.md)<`Record`<`string`, `any`>>\[]

#### Returns

[`Scope`](/auto-docs/variable-plugin/classes/Scope.md)<`Record`<`string`, `any`>>\[]

#### Inherited from

Scope.coverScopes

***

### depScopes

`get` **depScopes**(): [`Scope`](/auto-docs/variable-plugin/classes/Scope.md)<`Record`<`string`, `any`>>\[]

#### Returns

[`Scope`](/auto-docs/variable-plugin/classes/Scope.md)<`Record`<`string`, `any`>>\[]

#### Inherited from

Scope.depScopes

***

### disposed

`get` **disposed**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Scope.disposed

## Methods

### clearVar

**clearVar**(`key?`): `void`

Clears a variable from the Scope by key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key?` | `string` | The key of the variable to clear. Defaults to 'outputs'. |

#### Returns

`void`

The updated AST node.

#### Inherited from

[Scope](/auto-docs/variable-plugin/classes/Scope.md).[clearVar](/auto-docs/variable-plugin/classes/Scope.md#clearvar)

***

### dispose

**dispose**(): `void`

#### Returns

`void`

#### Inherited from

[Scope](/auto-docs/variable-plugin/classes/Scope.md).[dispose](/auto-docs/variable-plugin/classes/Scope.md#dispose)

***

### getVar

**getVar**(`key?`): `undefined` | [`ASTNode`](/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`>

Retrieves a variable from the Scope by key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key?` | `string` | The key of the variable to retrieve. Defaults to 'outputs'. |

#### Returns

`undefined` | [`ASTNode`](/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`>

The value of the variable, or undefined if not found.

#### Inherited from

[Scope](/auto-docs/variable-plugin/classes/Scope.md).[getVar](/auto-docs/variable-plugin/classes/Scope.md#getvar)

***

### refreshCovers

**refreshCovers**(): `void`

#### Returns

`void`

#### Inherited from

[Scope](/auto-docs/variable-plugin/classes/Scope.md).[refreshCovers](/auto-docs/variable-plugin/classes/Scope.md#refreshcovers)

***

### refreshDeps

**refreshDeps**(): `void`

#### Returns

`void`

#### Inherited from

[Scope](/auto-docs/variable-plugin/classes/Scope.md).[refreshDeps](/auto-docs/variable-plugin/classes/Scope.md#refreshdeps)

***

### setVar

**setVar**(`json`): [`ASTNode`](/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`>

Sets a variable in the Scope with the default key 'outputs'.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `json` | [`ASTNodeJSON`](/auto-docs/variable-plugin/interfaces/ASTNodeJSON.md) | The JSON value to store. |

#### Returns

[`ASTNode`](/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`>

The updated AST node.

#### Inherited from

[Scope](/auto-docs/variable-plugin/classes/Scope.md).[setVar](/auto-docs/variable-plugin/classes/Scope.md#setvar)

**setVar**(`key`, `json`): [`ASTNode`](/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`>

Sets a variable in the Scope by key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The key of the variable to set. |
| `json` | [`ASTNodeJSON`](/auto-docs/variable-plugin/interfaces/ASTNodeJSON.md) | The JSON value to store. |

#### Returns

[`ASTNode`](/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`>

The updated AST node.

#### Inherited from

[Scope](/auto-docs/variable-plugin/classes/Scope.md).[setVar](/auto-docs/variable-plugin/classes/Scope.md#setvar)

***

### is

`Static` **is**(`scope`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scope` | [`Scope`](/auto-docs/variable-plugin/classes/Scope.md)<`Record`<`string`, `any`>> |

#### Returns

`boolean`
