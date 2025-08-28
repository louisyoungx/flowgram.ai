# Class: GlobalScope

## Hierarchy

* `Scope`

  ↳ **`GlobalScope`**

## Table of contents

### Constructors

* [constructor](/auto-docs/variable-layout/classes/GlobalScope.md#constructor)

### Properties

* [ast](/auto-docs/variable-layout/classes/GlobalScope.md#ast)
* [available](/auto-docs/variable-layout/classes/GlobalScope.md#available)
* [event](/auto-docs/variable-layout/classes/GlobalScope.md#event)
* [id](/auto-docs/variable-layout/classes/GlobalScope.md#id)
* [meta](/auto-docs/variable-layout/classes/GlobalScope.md#meta)
* [onDispose](/auto-docs/variable-layout/classes/GlobalScope.md#ondispose)
* [output](/auto-docs/variable-layout/classes/GlobalScope.md#output)
* [toDispose](/auto-docs/variable-layout/classes/GlobalScope.md#todispose)
* [variableEngine](/auto-docs/variable-layout/classes/GlobalScope.md#variableengine)
* [ID](/auto-docs/variable-layout/classes/GlobalScope.md#id-1)

### Accessors

* [coverScopes](/auto-docs/variable-layout/classes/GlobalScope.md#coverscopes)
* [depScopes](/auto-docs/variable-layout/classes/GlobalScope.md#depscopes)
* [disposed](/auto-docs/variable-layout/classes/GlobalScope.md#disposed)

### Methods

* [clearVar](/auto-docs/variable-layout/classes/GlobalScope.md#clearvar)
* [dispose](/auto-docs/variable-layout/classes/GlobalScope.md#dispose)
* [getVar](/auto-docs/variable-layout/classes/GlobalScope.md#getvar)
* [refreshCovers](/auto-docs/variable-layout/classes/GlobalScope.md#refreshcovers)
* [refreshDeps](/auto-docs/variable-layout/classes/GlobalScope.md#refreshdeps)
* [setVar](/auto-docs/variable-layout/classes/GlobalScope.md#setvar)
* [is](/auto-docs/variable-layout/classes/GlobalScope.md#is)

## Constructors

### constructor

**new GlobalScope**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.id` | `string` | `symbol` |
| `options.meta?` | `Record`<`string`, `any`> |
| `options.variableEngine` | `VariableEngine` |

#### Inherited from

Scope.constructor

## Properties

### ast

`Readonly` **ast**: `MapNode`

作用域 AST 根节点

* Map\<formItemKey, formItemValue>

#### Inherited from

Scope.ast

***

### available

`Readonly` **available**: `ScopeAvailableData`

可用变量数据管理

#### Inherited from

Scope.available

***

### event

`Readonly` **event**: `ScopeEventData`

作用域事件管理

#### Inherited from

Scope.event

***

### id

`Readonly` **id**: `string` | `symbol`

Scope 唯一索引

#### Inherited from

Scope.id

***

### meta

`Readonly` **meta**: `Record`<`string`, `any`>

作用域的基本元信息，包括作用域所在节点及一些 flag 信息，上层业务可以额外扩展

#### Inherited from

Scope.meta

***

### onDispose

**onDispose**: `Event`<`void`>

#### Inherited from

Scope.onDispose

***

### output

`Readonly` **output**: `ScopeOutputData`

输出变量数据管理

#### Inherited from

Scope.output

***

### toDispose

**toDispose**: `DisposableCollection`

#### Inherited from

Scope.toDispose

***

### variableEngine

`Readonly` **variableEngine**: `VariableEngine`

Scope 依赖变量引擎

#### Inherited from

Scope.variableEngine

***

### ID

`Static` `Readonly` **ID**: typeof [`ID`](/auto-docs/variable-layout/classes/GlobalScope.md#id-1)

## Accessors

### coverScopes

`get` **coverScopes**(): `Scope`<`Record`<`string`, `any`>>\[]

#### Returns

`Scope`<`Record`<`string`, `any`>>\[]

#### Inherited from

Scope.coverScopes

***

### depScopes

`get` **depScopes**(): `Scope`<`Record`<`string`, `any`>>\[]

#### Returns

`Scope`<`Record`<`string`, `any`>>\[]

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

Scope.clearVar

***

### dispose

**dispose**(): `void`

#### Returns

`void`

#### Inherited from

Scope.dispose

***

### getVar

**getVar**(`key?`): `undefined` | `ASTNode`<`any`, `any`>

Retrieves a variable from the Scope by key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key?` | `string` | The key of the variable to retrieve. Defaults to 'outputs'. |

#### Returns

`undefined` | `ASTNode`<`any`, `any`>

The value of the variable, or undefined if not found.

#### Inherited from

Scope.getVar

***

### refreshCovers

**refreshCovers**(): `void`

#### Returns

`void`

#### Inherited from

Scope.refreshCovers

***

### refreshDeps

**refreshDeps**(): `void`

#### Returns

`void`

#### Inherited from

Scope.refreshDeps

***

### setVar

**setVar**(`json`): `ASTNode`<`any`, `any`>

Sets a variable in the Scope with the default key 'outputs'.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `json` | `ASTNodeJSON` | The JSON value to store. |

#### Returns

`ASTNode`<`any`, `any`>

The updated AST node.

#### Inherited from

Scope.setVar

**setVar**(`key`, `json`): `ASTNode`<`any`, `any`>

Sets a variable in the Scope by key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The key of the variable to set. |
| `json` | `ASTNodeJSON` | The JSON value to store. |

#### Returns

`ASTNode`<`any`, `any`>

The updated AST node.

#### Inherited from

Scope.setVar

***

### is

`Static` **is**(`scope`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scope` | `Scope`<`Record`<`string`, `any`>> |

#### Returns

`boolean`
