# Class: Scope\<ScopeMeta>

## Type parameters

| Name | Type |
| :------ | :------ |
| `ScopeMeta` | extends `Record`<`string`, `any`> = `Record`<`string`, `any`> |

## Hierarchy

* **`Scope`**

  ↳ [`GlobalScope`](/auto-docs/variable-plugin/classes/GlobalScope.md)

  ↳ [`FlowNodeScope`](/auto-docs/variable-plugin/interfaces/FlowNodeScope.md)

## Table of contents

### Constructors

* [constructor](/auto-docs/variable-plugin/classes/Scope.md#constructor)

### Properties

* [ast](/auto-docs/variable-plugin/classes/Scope.md#ast)
* [available](/auto-docs/variable-plugin/classes/Scope.md#available)
* [event](/auto-docs/variable-plugin/classes/Scope.md#event)
* [id](/auto-docs/variable-plugin/classes/Scope.md#id)
* [meta](/auto-docs/variable-plugin/classes/Scope.md#meta)
* [onDispose](/auto-docs/variable-plugin/classes/Scope.md#ondispose)
* [output](/auto-docs/variable-plugin/classes/Scope.md#output)
* [toDispose](/auto-docs/variable-plugin/classes/Scope.md#todispose)
* [variableEngine](/auto-docs/variable-plugin/classes/Scope.md#variableengine)

### Accessors

* [coverScopes](/auto-docs/variable-plugin/classes/Scope.md#coverscopes)
* [depScopes](/auto-docs/variable-plugin/classes/Scope.md#depscopes)
* [disposed](/auto-docs/variable-plugin/classes/Scope.md#disposed)

### Methods

* [clearVar](/auto-docs/variable-plugin/classes/Scope.md#clearvar)
* [dispose](/auto-docs/variable-plugin/classes/Scope.md#dispose)
* [getVar](/auto-docs/variable-plugin/classes/Scope.md#getvar)
* [refreshCovers](/auto-docs/variable-plugin/classes/Scope.md#refreshcovers)
* [refreshDeps](/auto-docs/variable-plugin/classes/Scope.md#refreshdeps)
* [setVar](/auto-docs/variable-plugin/classes/Scope.md#setvar)

## Constructors

### constructor

**new Scope**<`ScopeMeta`>(`options`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ScopeMeta` | extends `Record`<`string`, `any`> = `Record`<`string`, `any`> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.id` | `string` | `symbol` |
| `options.meta?` | `ScopeMeta` |
| `options.variableEngine` | [`VariableEngine`](/auto-docs/variable-plugin/classes/VariableEngine.md) |

## Properties

### ast

`Readonly` **ast**: [`MapNode`](/auto-docs/variable-plugin/classes/MapNode.md)

作用域 AST 根节点

* Map\<formItemKey, formItemValue>

***

### available

`Readonly` **available**: `ScopeAvailableData`

可用变量数据管理

***

### event

`Readonly` **event**: `ScopeEventData`

作用域事件管理

***

### id

`Readonly` **id**: `string` | `symbol`

Scope 唯一索引

***

### meta

`Readonly` **meta**: `ScopeMeta`

作用域的基本元信息，包括作用域所在节点及一些 flag 信息，上层业务可以额外扩展

***

### onDispose

**onDispose**: `Event`<`void`>

***

### output

`Readonly` **output**: [`ScopeOutputData`](/auto-docs/variable-plugin/classes/ScopeOutputData.md)

输出变量数据管理

***

### toDispose

**toDispose**: `DisposableCollection`

***

### variableEngine

`Readonly` **variableEngine**: [`VariableEngine`](/auto-docs/variable-plugin/classes/VariableEngine.md)

Scope 依赖变量引擎

## Accessors

### coverScopes

`get` **coverScopes**(): [`Scope`](/auto-docs/variable-plugin/classes/Scope.md)<`Record`<`string`, `any`>>\[]

#### Returns

[`Scope`](/auto-docs/variable-plugin/classes/Scope.md)<`Record`<`string`, `any`>>\[]

***

### depScopes

`get` **depScopes**(): [`Scope`](/auto-docs/variable-plugin/classes/Scope.md)<`Record`<`string`, `any`>>\[]

#### Returns

[`Scope`](/auto-docs/variable-plugin/classes/Scope.md)<`Record`<`string`, `any`>>\[]

***

### disposed

`get` **disposed**(): `boolean`

#### Returns

`boolean`

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

***

### dispose

**dispose**(): `void`

#### Returns

`void`

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

***

### refreshCovers

**refreshCovers**(): `void`

#### Returns

`void`

***

### refreshDeps

**refreshDeps**(): `void`

#### Returns

`void`

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
