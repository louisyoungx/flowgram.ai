# Class: GlobalScope

Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
SPDX-License-Identifier: MIT

## Hierarchy

* [`Scope`](/en/auto-docs/editor/classes/Scope.md)

  ↳ **`GlobalScope`**

## Table of contents

### Constructors

* [constructor](/en/auto-docs/editor/classes/GlobalScope.md#constructor)

### Properties

* [ast](/en/auto-docs/editor/classes/GlobalScope.md#ast)
* [available](/en/auto-docs/editor/classes/GlobalScope.md#available)
* [event](/en/auto-docs/editor/classes/GlobalScope.md#event)
* [id](/en/auto-docs/editor/classes/GlobalScope.md#id)
* [meta](/en/auto-docs/editor/classes/GlobalScope.md#meta)
* [onDispose](/en/auto-docs/editor/classes/GlobalScope.md#ondispose)
* [output](/en/auto-docs/editor/classes/GlobalScope.md#output)
* [toDispose](/en/auto-docs/editor/classes/GlobalScope.md#todispose)
* [variableEngine](/en/auto-docs/editor/classes/GlobalScope.md#variableengine)
* [ID](/en/auto-docs/editor/classes/GlobalScope.md#id-1)

### Accessors

* [coverScopes](/en/auto-docs/editor/classes/GlobalScope.md#coverscopes)
* [depScopes](/en/auto-docs/editor/classes/GlobalScope.md#depscopes)
* [disposed](/en/auto-docs/editor/classes/GlobalScope.md#disposed)

### Methods

* [clearVar](/en/auto-docs/editor/classes/GlobalScope.md#clearvar)
* [dispose](/en/auto-docs/editor/classes/GlobalScope.md#dispose)
* [getVar](/en/auto-docs/editor/classes/GlobalScope.md#getvar)
* [refreshCovers](/en/auto-docs/editor/classes/GlobalScope.md#refreshcovers)
* [refreshDeps](/en/auto-docs/editor/classes/GlobalScope.md#refreshdeps)
* [setVar](/en/auto-docs/editor/classes/GlobalScope.md#setvar)
* [is](/en/auto-docs/editor/classes/GlobalScope.md#is)

## Constructors

### constructor

**new GlobalScope**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.id` | `string` | `symbol` |
| `options.meta?` | `Record`<`string`, `any`> |
| `options.variableEngine` | [`VariableEngine`](/en/auto-docs/editor/classes/VariableEngine.md) |

#### Inherited from

[Scope](/en/auto-docs/editor/classes/Scope.md).[constructor](/en/auto-docs/editor/classes/Scope.md#constructor)

## Properties

### ast

`Readonly` **ast**: [`MapNode`](/en/auto-docs/editor/classes/MapNode.md)

作用域 AST 根节点

* Map\<formItemKey, formItemValue>

#### Inherited from

[Scope](/en/auto-docs/editor/classes/Scope.md).[ast](/en/auto-docs/editor/classes/Scope.md#ast)

***

### available

`Readonly` **available**: `ScopeAvailableData`

可用变量数据管理

#### Inherited from

[Scope](/en/auto-docs/editor/classes/Scope.md).[available](/en/auto-docs/editor/classes/Scope.md#available)

***

### event

`Readonly` **event**: `ScopeEventData`

作用域事件管理

#### Inherited from

[Scope](/en/auto-docs/editor/classes/Scope.md).[event](/en/auto-docs/editor/classes/Scope.md#event)

***

### id

`Readonly` **id**: `string` | `symbol`

Scope 唯一索引

#### Inherited from

[Scope](/en/auto-docs/editor/classes/Scope.md).[id](/en/auto-docs/editor/classes/Scope.md#id)

***

### meta

`Readonly` **meta**: `Record`<`string`, `any`>

作用域的基本元信息，包括作用域所在节点及一些 flag 信息，上层业务可以额外扩展

#### Inherited from

[Scope](/en/auto-docs/editor/classes/Scope.md).[meta](/en/auto-docs/editor/classes/Scope.md#meta)

***

### onDispose

**onDispose**: [`Event`](/en/auto-docs/editor/interfaces/Event-1.md)<`void`>

#### Inherited from

[Scope](/en/auto-docs/editor/classes/Scope.md).[onDispose](/en/auto-docs/editor/classes/Scope.md#ondispose)

***

### output

`Readonly` **output**: [`ScopeOutputData`](/en/auto-docs/editor/classes/ScopeOutputData.md)

输出变量数据管理

#### Inherited from

[Scope](/en/auto-docs/editor/classes/Scope.md).[output](/en/auto-docs/editor/classes/Scope.md#output)

***

### toDispose

**toDispose**: [`DisposableCollection`](/en/auto-docs/editor/classes/DisposableCollection.md)

#### Inherited from

[Scope](/en/auto-docs/editor/classes/Scope.md).[toDispose](/en/auto-docs/editor/classes/Scope.md#todispose)

***

### variableEngine

`Readonly` **variableEngine**: [`VariableEngine`](/en/auto-docs/editor/classes/VariableEngine.md)

Scope 依赖变量引擎

#### Inherited from

[Scope](/en/auto-docs/editor/classes/Scope.md).[variableEngine](/en/auto-docs/editor/classes/Scope.md#variableengine)

***

### ID

`Static` `Readonly` **ID**: typeof [`ID`](/en/auto-docs/editor/classes/GlobalScope.md#id-1)

## Accessors

### coverScopes

`get` **coverScopes**(): [`Scope`](/en/auto-docs/editor/classes/Scope.md)<`Record`<`string`, `any`>>\[]

#### Returns

[`Scope`](/en/auto-docs/editor/classes/Scope.md)<`Record`<`string`, `any`>>\[]

#### Inherited from

Scope.coverScopes

***

### depScopes

`get` **depScopes**(): [`Scope`](/en/auto-docs/editor/classes/Scope.md)<`Record`<`string`, `any`>>\[]

#### Returns

[`Scope`](/en/auto-docs/editor/classes/Scope.md)<`Record`<`string`, `any`>>\[]

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

[Scope](/en/auto-docs/editor/classes/Scope.md).[clearVar](/en/auto-docs/editor/classes/Scope.md#clearvar)

***

### dispose

**dispose**(): `void`

#### Returns

`void`

#### Inherited from

[Scope](/en/auto-docs/editor/classes/Scope.md).[dispose](/en/auto-docs/editor/classes/Scope.md#dispose)

***

### getVar

**getVar**(`key?`): `undefined` | [`ASTNode`](/en/auto-docs/editor/classes/ASTNode.md)<`any`, `any`>

Retrieves a variable from the Scope by key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key?` | `string` | The key of the variable to retrieve. Defaults to 'outputs'. |

#### Returns

`undefined` | [`ASTNode`](/en/auto-docs/editor/classes/ASTNode.md)<`any`, `any`>

The value of the variable, or undefined if not found.

#### Inherited from

[Scope](/en/auto-docs/editor/classes/Scope.md).[getVar](/en/auto-docs/editor/classes/Scope.md#getvar)

***

### refreshCovers

**refreshCovers**(): `void`

#### Returns

`void`

#### Inherited from

[Scope](/en/auto-docs/editor/classes/Scope.md).[refreshCovers](/en/auto-docs/editor/classes/Scope.md#refreshcovers)

***

### refreshDeps

**refreshDeps**(): `void`

#### Returns

`void`

#### Inherited from

[Scope](/en/auto-docs/editor/classes/Scope.md).[refreshDeps](/en/auto-docs/editor/classes/Scope.md#refreshdeps)

***

### setVar

**setVar**(`json`): [`ASTNode`](/en/auto-docs/editor/classes/ASTNode.md)<`any`, `any`>

Sets a variable in the Scope with the default key 'outputs'.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `json` | [`ASTNodeJSON`](/en/auto-docs/editor/interfaces/ASTNodeJSON.md) | The JSON value to store. |

#### Returns

[`ASTNode`](/en/auto-docs/editor/classes/ASTNode.md)<`any`, `any`>

The updated AST node.

#### Inherited from

[Scope](/en/auto-docs/editor/classes/Scope.md).[setVar](/en/auto-docs/editor/classes/Scope.md#setvar)

**setVar**(`key`, `json`): [`ASTNode`](/en/auto-docs/editor/classes/ASTNode.md)<`any`, `any`>

Sets a variable in the Scope by key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The key of the variable to set. |
| `json` | [`ASTNodeJSON`](/en/auto-docs/editor/interfaces/ASTNodeJSON.md) | The JSON value to store. |

#### Returns

[`ASTNode`](/en/auto-docs/editor/classes/ASTNode.md)<`any`, `any`>

The updated AST node.

#### Inherited from

[Scope](/en/auto-docs/editor/classes/Scope.md).[setVar](/en/auto-docs/editor/classes/Scope.md#setvar)

***

### is

`Static` **is**(`scope`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scope` | [`Scope`](/en/auto-docs/editor/classes/Scope.md)<`Record`<`string`, `any`>> |

#### Returns

`boolean`
