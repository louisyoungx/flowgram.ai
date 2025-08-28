# Class: Scope\<ScopeMeta>

## Type parameters

| Name | Type |
| :------ | :------ |
| `ScopeMeta` | extends `Record`<`string`, `any`> = `Record`<`string`, `any`> |

## Hierarchy

* **`Scope`**

  ↳ [`FlowNodeScope`](/en/auto-docs/fixed-layout-editor/interfaces/FlowNodeScope.md)

  ↳ [`GlobalScope`](/en/auto-docs/fixed-layout-editor/classes/GlobalScope.md)

## Table of contents

### Constructors

* [constructor](/en/auto-docs/fixed-layout-editor/classes/Scope.md#constructor)

### Properties

* [ast](/en/auto-docs/fixed-layout-editor/classes/Scope.md#ast)
* [available](/en/auto-docs/fixed-layout-editor/classes/Scope.md#available)
* [event](/en/auto-docs/fixed-layout-editor/classes/Scope.md#event)
* [id](/en/auto-docs/fixed-layout-editor/classes/Scope.md#id)
* [meta](/en/auto-docs/fixed-layout-editor/classes/Scope.md#meta)
* [onDispose](/en/auto-docs/fixed-layout-editor/classes/Scope.md#ondispose)
* [output](/en/auto-docs/fixed-layout-editor/classes/Scope.md#output)
* [toDispose](/en/auto-docs/fixed-layout-editor/classes/Scope.md#todispose)
* [variableEngine](/en/auto-docs/fixed-layout-editor/classes/Scope.md#variableengine)

### Accessors

* [coverScopes](/en/auto-docs/fixed-layout-editor/classes/Scope.md#coverscopes)
* [depScopes](/en/auto-docs/fixed-layout-editor/classes/Scope.md#depscopes)
* [disposed](/en/auto-docs/fixed-layout-editor/classes/Scope.md#disposed)

### Methods

* [clearVar](/en/auto-docs/fixed-layout-editor/classes/Scope.md#clearvar)
* [dispose](/en/auto-docs/fixed-layout-editor/classes/Scope.md#dispose)
* [getVar](/en/auto-docs/fixed-layout-editor/classes/Scope.md#getvar)
* [refreshCovers](/en/auto-docs/fixed-layout-editor/classes/Scope.md#refreshcovers)
* [refreshDeps](/en/auto-docs/fixed-layout-editor/classes/Scope.md#refreshdeps)
* [setVar](/en/auto-docs/fixed-layout-editor/classes/Scope.md#setvar)

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
| `options.variableEngine` | [`VariableEngine`](/en/auto-docs/fixed-layout-editor/classes/VariableEngine.md) |

## Properties

### ast

`Readonly` **ast**: [`MapNode`](/en/auto-docs/fixed-layout-editor/classes/MapNode.md)

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

**onDispose**: [`Event`](/en/auto-docs/fixed-layout-editor/interfaces/Event-1.md)<`void`>

***

### output

`Readonly` **output**: [`ScopeOutputData`](/en/auto-docs/fixed-layout-editor/classes/ScopeOutputData.md)

输出变量数据管理

***

### toDispose

**toDispose**: [`DisposableCollection`](/en/auto-docs/fixed-layout-editor/classes/DisposableCollection.md)

***

### variableEngine

`Readonly` **variableEngine**: [`VariableEngine`](/en/auto-docs/fixed-layout-editor/classes/VariableEngine.md)

Scope 依赖变量引擎

## Accessors

### coverScopes

`get` **coverScopes**(): [`Scope`](/en/auto-docs/fixed-layout-editor/classes/Scope.md)<`Record`<`string`, `any`>>\[]

#### Returns

[`Scope`](/en/auto-docs/fixed-layout-editor/classes/Scope.md)<`Record`<`string`, `any`>>\[]

***

### depScopes

`get` **depScopes**(): [`Scope`](/en/auto-docs/fixed-layout-editor/classes/Scope.md)<`Record`<`string`, `any`>>\[]

#### Returns

[`Scope`](/en/auto-docs/fixed-layout-editor/classes/Scope.md)<`Record`<`string`, `any`>>\[]

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

**getVar**(`key?`): `undefined` | [`ASTNode`](/en/auto-docs/fixed-layout-editor/classes/ASTNode.md)<`any`, `any`>

Retrieves a variable from the Scope by key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key?` | `string` | The key of the variable to retrieve. Defaults to 'outputs'. |

#### Returns

`undefined` | [`ASTNode`](/en/auto-docs/fixed-layout-editor/classes/ASTNode.md)<`any`, `any`>

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

**setVar**(`json`): [`ASTNode`](/en/auto-docs/fixed-layout-editor/classes/ASTNode.md)<`any`, `any`>

Sets a variable in the Scope with the default key 'outputs'.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `json` | [`ASTNodeJSON`](/en/auto-docs/fixed-layout-editor/interfaces/ASTNodeJSON.md) | The JSON value to store. |

#### Returns

[`ASTNode`](/en/auto-docs/fixed-layout-editor/classes/ASTNode.md)<`any`, `any`>

The updated AST node.

**setVar**(`key`, `json`): [`ASTNode`](/en/auto-docs/fixed-layout-editor/classes/ASTNode.md)<`any`, `any`>

Sets a variable in the Scope by key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The key of the variable to set. |
| `json` | [`ASTNodeJSON`](/en/auto-docs/fixed-layout-editor/interfaces/ASTNodeJSON.md) | The JSON value to store. |

#### Returns

[`ASTNode`](/en/auto-docs/fixed-layout-editor/classes/ASTNode.md)<`any`, `any`>

The updated AST node.
