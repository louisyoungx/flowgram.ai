# Interface: FlowNodeScope

## Hierarchy

* [`Scope`](/auto-docs/editor/classes/Scope.md)<[`FlowNodeScopeMeta`](/auto-docs/editor/interfaces/FlowNodeScopeMeta.md)>

  ↳ **`FlowNodeScope`**

## Table of contents

### Properties

* [ast](/auto-docs/editor/interfaces/FlowNodeScope.md#ast)
* [available](/auto-docs/editor/interfaces/FlowNodeScope.md#available)
* [event](/auto-docs/editor/interfaces/FlowNodeScope.md#event)
* [id](/auto-docs/editor/interfaces/FlowNodeScope.md#id)
* [meta](/auto-docs/editor/interfaces/FlowNodeScope.md#meta)
* [onDispose](/auto-docs/editor/interfaces/FlowNodeScope.md#ondispose)
* [output](/auto-docs/editor/interfaces/FlowNodeScope.md#output)
* [toDispose](/auto-docs/editor/interfaces/FlowNodeScope.md#todispose)
* [variableEngine](/auto-docs/editor/interfaces/FlowNodeScope.md#variableengine)

### Accessors

* [coverScopes](/auto-docs/editor/interfaces/FlowNodeScope.md#coverscopes)
* [depScopes](/auto-docs/editor/interfaces/FlowNodeScope.md#depscopes)
* [disposed](/auto-docs/editor/interfaces/FlowNodeScope.md#disposed)

### Methods

* [clearVar](/auto-docs/editor/interfaces/FlowNodeScope.md#clearvar)
* [dispose](/auto-docs/editor/interfaces/FlowNodeScope.md#dispose)
* [getVar](/auto-docs/editor/interfaces/FlowNodeScope.md#getvar)
* [refreshCovers](/auto-docs/editor/interfaces/FlowNodeScope.md#refreshcovers)
* [refreshDeps](/auto-docs/editor/interfaces/FlowNodeScope.md#refreshdeps)
* [setVar](/auto-docs/editor/interfaces/FlowNodeScope.md#setvar)

## Properties

### ast

`Readonly` **ast**: [`MapNode`](/auto-docs/editor/classes/MapNode.md)

作用域 AST 根节点

* Map\<formItemKey, formItemValue>

#### Inherited from

[Scope](/auto-docs/editor/classes/Scope.md).[ast](/auto-docs/editor/classes/Scope.md#ast)

***

### available

`Readonly` **available**: `ScopeAvailableData`

可用变量数据管理

#### Inherited from

[Scope](/auto-docs/editor/classes/Scope.md).[available](/auto-docs/editor/classes/Scope.md#available)

***

### event

`Readonly` **event**: `ScopeEventData`

作用域事件管理

#### Inherited from

[Scope](/auto-docs/editor/classes/Scope.md).[event](/auto-docs/editor/classes/Scope.md#event)

***

### id

`Readonly` **id**: `string` | `symbol`

Scope 唯一索引

#### Inherited from

[Scope](/auto-docs/editor/classes/Scope.md).[id](/auto-docs/editor/classes/Scope.md#id)

***

### meta

`Readonly` **meta**: [`FlowNodeScopeMeta`](/auto-docs/editor/interfaces/FlowNodeScopeMeta.md)

作用域的基本元信息，包括作用域所在节点及一些 flag 信息，上层业务可以额外扩展

#### Inherited from

[Scope](/auto-docs/editor/classes/Scope.md).[meta](/auto-docs/editor/classes/Scope.md#meta)

***

### onDispose

**onDispose**: [`Event`](/auto-docs/editor/interfaces/Event-1.md)<`void`>

#### Inherited from

[Scope](/auto-docs/editor/classes/Scope.md).[onDispose](/auto-docs/editor/classes/Scope.md#ondispose)

***

### output

`Readonly` **output**: [`ScopeOutputData`](/auto-docs/editor/classes/ScopeOutputData.md)

输出变量数据管理

#### Inherited from

[Scope](/auto-docs/editor/classes/Scope.md).[output](/auto-docs/editor/classes/Scope.md#output)

***

### toDispose

**toDispose**: [`DisposableCollection`](/auto-docs/editor/classes/DisposableCollection.md)

#### Inherited from

[Scope](/auto-docs/editor/classes/Scope.md).[toDispose](/auto-docs/editor/classes/Scope.md#todispose)

***

### variableEngine

`Readonly` **variableEngine**: [`VariableEngine`](/auto-docs/editor/classes/VariableEngine.md)

Scope 依赖变量引擎

#### Inherited from

[Scope](/auto-docs/editor/classes/Scope.md).[variableEngine](/auto-docs/editor/classes/Scope.md#variableengine)

## Accessors

### coverScopes

`get` **coverScopes**(): [`Scope`](/auto-docs/editor/classes/Scope.md)<`Record`<`string`, `any`>>\[]

#### Returns

[`Scope`](/auto-docs/editor/classes/Scope.md)<`Record`<`string`, `any`>>\[]

#### Inherited from

Scope.coverScopes

***

### depScopes

`get` **depScopes**(): [`Scope`](/auto-docs/editor/classes/Scope.md)<`Record`<`string`, `any`>>\[]

#### Returns

[`Scope`](/auto-docs/editor/classes/Scope.md)<`Record`<`string`, `any`>>\[]

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

[Scope](/auto-docs/editor/classes/Scope.md).[clearVar](/auto-docs/editor/classes/Scope.md#clearvar)

***

### dispose

**dispose**(): `void`

#### Returns

`void`

#### Inherited from

[Scope](/auto-docs/editor/classes/Scope.md).[dispose](/auto-docs/editor/classes/Scope.md#dispose)

***

### getVar

**getVar**(`key?`): `undefined` | [`ASTNode`](/auto-docs/editor/classes/ASTNode.md)<`any`, `any`>

Retrieves a variable from the Scope by key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key?` | `string` | The key of the variable to retrieve. Defaults to 'outputs'. |

#### Returns

`undefined` | [`ASTNode`](/auto-docs/editor/classes/ASTNode.md)<`any`, `any`>

The value of the variable, or undefined if not found.

#### Inherited from

[Scope](/auto-docs/editor/classes/Scope.md).[getVar](/auto-docs/editor/classes/Scope.md#getvar)

***

### refreshCovers

**refreshCovers**(): `void`

#### Returns

`void`

#### Inherited from

[Scope](/auto-docs/editor/classes/Scope.md).[refreshCovers](/auto-docs/editor/classes/Scope.md#refreshcovers)

***

### refreshDeps

**refreshDeps**(): `void`

#### Returns

`void`

#### Inherited from

[Scope](/auto-docs/editor/classes/Scope.md).[refreshDeps](/auto-docs/editor/classes/Scope.md#refreshdeps)

***

### setVar

**setVar**(`json`): [`ASTNode`](/auto-docs/editor/classes/ASTNode.md)<`any`, `any`>

Sets a variable in the Scope with the default key 'outputs'.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `json` | [`ASTNodeJSON`](/auto-docs/editor/interfaces/ASTNodeJSON.md) | The JSON value to store. |

#### Returns

[`ASTNode`](/auto-docs/editor/classes/ASTNode.md)<`any`, `any`>

The updated AST node.

#### Inherited from

[Scope](/auto-docs/editor/classes/Scope.md).[setVar](/auto-docs/editor/classes/Scope.md#setvar)

**setVar**(`key`, `json`): [`ASTNode`](/auto-docs/editor/classes/ASTNode.md)<`any`, `any`>

Sets a variable in the Scope by key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The key of the variable to set. |
| `json` | [`ASTNodeJSON`](/auto-docs/editor/interfaces/ASTNodeJSON.md) | The JSON value to store. |

#### Returns

[`ASTNode`](/auto-docs/editor/classes/ASTNode.md)<`any`, `any`>

The updated AST node.

#### Inherited from

[Scope](/auto-docs/editor/classes/Scope.md).[setVar](/auto-docs/editor/classes/Scope.md#setvar)
