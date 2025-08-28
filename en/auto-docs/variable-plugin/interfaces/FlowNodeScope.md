# Interface: FlowNodeScope

## Hierarchy

* [`Scope`](/en/auto-docs/variable-plugin/classes/Scope.md)<[`FlowNodeScopeMeta`](/en/auto-docs/variable-plugin/interfaces/FlowNodeScopeMeta.md)>

  ↳ **`FlowNodeScope`**

## Table of contents

### Properties

* [ast](/en/auto-docs/variable-plugin/interfaces/FlowNodeScope.md#ast)
* [available](/en/auto-docs/variable-plugin/interfaces/FlowNodeScope.md#available)
* [event](/en/auto-docs/variable-plugin/interfaces/FlowNodeScope.md#event)
* [id](/en/auto-docs/variable-plugin/interfaces/FlowNodeScope.md#id)
* [meta](/en/auto-docs/variable-plugin/interfaces/FlowNodeScope.md#meta)
* [onDispose](/en/auto-docs/variable-plugin/interfaces/FlowNodeScope.md#ondispose)
* [output](/en/auto-docs/variable-plugin/interfaces/FlowNodeScope.md#output)
* [toDispose](/en/auto-docs/variable-plugin/interfaces/FlowNodeScope.md#todispose)
* [variableEngine](/en/auto-docs/variable-plugin/interfaces/FlowNodeScope.md#variableengine)

### Accessors

* [coverScopes](/en/auto-docs/variable-plugin/interfaces/FlowNodeScope.md#coverscopes)
* [depScopes](/en/auto-docs/variable-plugin/interfaces/FlowNodeScope.md#depscopes)
* [disposed](/en/auto-docs/variable-plugin/interfaces/FlowNodeScope.md#disposed)

### Methods

* [clearVar](/en/auto-docs/variable-plugin/interfaces/FlowNodeScope.md#clearvar)
* [dispose](/en/auto-docs/variable-plugin/interfaces/FlowNodeScope.md#dispose)
* [getVar](/en/auto-docs/variable-plugin/interfaces/FlowNodeScope.md#getvar)
* [refreshCovers](/en/auto-docs/variable-plugin/interfaces/FlowNodeScope.md#refreshcovers)
* [refreshDeps](/en/auto-docs/variable-plugin/interfaces/FlowNodeScope.md#refreshdeps)
* [setVar](/en/auto-docs/variable-plugin/interfaces/FlowNodeScope.md#setvar)

## Properties

### ast

`Readonly` **ast**: [`MapNode`](/en/auto-docs/variable-plugin/classes/MapNode.md)

作用域 AST 根节点

* Map\<formItemKey, formItemValue>

#### Inherited from

[Scope](/en/auto-docs/variable-plugin/classes/Scope.md).[ast](/en/auto-docs/variable-plugin/classes/Scope.md#ast)

***

### available

`Readonly` **available**: `ScopeAvailableData`

可用变量数据管理

#### Inherited from

[Scope](/en/auto-docs/variable-plugin/classes/Scope.md).[available](/en/auto-docs/variable-plugin/classes/Scope.md#available)

***

### event

`Readonly` **event**: `ScopeEventData`

作用域事件管理

#### Inherited from

[Scope](/en/auto-docs/variable-plugin/classes/Scope.md).[event](/en/auto-docs/variable-plugin/classes/Scope.md#event)

***

### id

`Readonly` **id**: `string` | `symbol`

Scope 唯一索引

#### Inherited from

[Scope](/en/auto-docs/variable-plugin/classes/Scope.md).[id](/en/auto-docs/variable-plugin/classes/Scope.md#id)

***

### meta

`Readonly` **meta**: [`FlowNodeScopeMeta`](/en/auto-docs/variable-plugin/interfaces/FlowNodeScopeMeta.md)

作用域的基本元信息，包括作用域所在节点及一些 flag 信息，上层业务可以额外扩展

#### Inherited from

[Scope](/en/auto-docs/variable-plugin/classes/Scope.md).[meta](/en/auto-docs/variable-plugin/classes/Scope.md#meta)

***

### onDispose

**onDispose**: `Event`<`void`>

#### Inherited from

[Scope](/en/auto-docs/variable-plugin/classes/Scope.md).[onDispose](/en/auto-docs/variable-plugin/classes/Scope.md#ondispose)

***

### output

`Readonly` **output**: [`ScopeOutputData`](/en/auto-docs/variable-plugin/classes/ScopeOutputData.md)

输出变量数据管理

#### Inherited from

[Scope](/en/auto-docs/variable-plugin/classes/Scope.md).[output](/en/auto-docs/variable-plugin/classes/Scope.md#output)

***

### toDispose

**toDispose**: `DisposableCollection`

#### Inherited from

[Scope](/en/auto-docs/variable-plugin/classes/Scope.md).[toDispose](/en/auto-docs/variable-plugin/classes/Scope.md#todispose)

***

### variableEngine

`Readonly` **variableEngine**: [`VariableEngine`](/en/auto-docs/variable-plugin/classes/VariableEngine.md)

Scope 依赖变量引擎

#### Inherited from

[Scope](/en/auto-docs/variable-plugin/classes/Scope.md).[variableEngine](/en/auto-docs/variable-plugin/classes/Scope.md#variableengine)

## Accessors

### coverScopes

`get` **coverScopes**(): [`Scope`](/en/auto-docs/variable-plugin/classes/Scope.md)<`Record`<`string`, `any`>>\[]

#### Returns

[`Scope`](/en/auto-docs/variable-plugin/classes/Scope.md)<`Record`<`string`, `any`>>\[]

#### Inherited from

Scope.coverScopes

***

### depScopes

`get` **depScopes**(): [`Scope`](/en/auto-docs/variable-plugin/classes/Scope.md)<`Record`<`string`, `any`>>\[]

#### Returns

[`Scope`](/en/auto-docs/variable-plugin/classes/Scope.md)<`Record`<`string`, `any`>>\[]

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

[Scope](/en/auto-docs/variable-plugin/classes/Scope.md).[clearVar](/en/auto-docs/variable-plugin/classes/Scope.md#clearvar)

***

### dispose

**dispose**(): `void`

#### Returns

`void`

#### Inherited from

[Scope](/en/auto-docs/variable-plugin/classes/Scope.md).[dispose](/en/auto-docs/variable-plugin/classes/Scope.md#dispose)

***

### getVar

**getVar**(`key?`): `undefined` | [`ASTNode`](/en/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`>

Retrieves a variable from the Scope by key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key?` | `string` | The key of the variable to retrieve. Defaults to 'outputs'. |

#### Returns

`undefined` | [`ASTNode`](/en/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`>

The value of the variable, or undefined if not found.

#### Inherited from

[Scope](/en/auto-docs/variable-plugin/classes/Scope.md).[getVar](/en/auto-docs/variable-plugin/classes/Scope.md#getvar)

***

### refreshCovers

**refreshCovers**(): `void`

#### Returns

`void`

#### Inherited from

[Scope](/en/auto-docs/variable-plugin/classes/Scope.md).[refreshCovers](/en/auto-docs/variable-plugin/classes/Scope.md#refreshcovers)

***

### refreshDeps

**refreshDeps**(): `void`

#### Returns

`void`

#### Inherited from

[Scope](/en/auto-docs/variable-plugin/classes/Scope.md).[refreshDeps](/en/auto-docs/variable-plugin/classes/Scope.md#refreshdeps)

***

### setVar

**setVar**(`json`): [`ASTNode`](/en/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`>

Sets a variable in the Scope with the default key 'outputs'.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `json` | [`ASTNodeJSON`](/en/auto-docs/variable-plugin/interfaces/ASTNodeJSON.md) | The JSON value to store. |

#### Returns

[`ASTNode`](/en/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`>

The updated AST node.

#### Inherited from

[Scope](/en/auto-docs/variable-plugin/classes/Scope.md).[setVar](/en/auto-docs/variable-plugin/classes/Scope.md#setvar)

**setVar**(`key`, `json`): [`ASTNode`](/en/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`>

Sets a variable in the Scope by key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The key of the variable to set. |
| `json` | [`ASTNodeJSON`](/en/auto-docs/variable-plugin/interfaces/ASTNodeJSON.md) | The JSON value to store. |

#### Returns

[`ASTNode`](/en/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`>

The updated AST node.

#### Inherited from

[Scope](/en/auto-docs/variable-plugin/classes/Scope.md).[setVar](/en/auto-docs/variable-plugin/classes/Scope.md#setvar)
