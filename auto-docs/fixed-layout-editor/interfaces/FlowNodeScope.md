# Interface: FlowNodeScope

Represents a scope associated with a flow node.

## Hierarchy

* [`Scope`](/auto-docs/fixed-layout-editor/classes/Scope.md)<[`FlowNodeScopeMeta`](/auto-docs/fixed-layout-editor/interfaces/FlowNodeScopeMeta.md)>

  ↳ **`FlowNodeScope`**

## Table of contents

### Properties

* [ast](/auto-docs/fixed-layout-editor/interfaces/FlowNodeScope.md#ast)
* [available](/auto-docs/fixed-layout-editor/interfaces/FlowNodeScope.md#available)
* [event](/auto-docs/fixed-layout-editor/interfaces/FlowNodeScope.md#event)
* [id](/auto-docs/fixed-layout-editor/interfaces/FlowNodeScope.md#id)
* [meta](/auto-docs/fixed-layout-editor/interfaces/FlowNodeScope.md#meta)
* [onDispose](/auto-docs/fixed-layout-editor/interfaces/FlowNodeScope.md#ondispose)
* [output](/auto-docs/fixed-layout-editor/interfaces/FlowNodeScope.md#output)
* [toDispose](/auto-docs/fixed-layout-editor/interfaces/FlowNodeScope.md#todispose)
* [variableEngine](/auto-docs/fixed-layout-editor/interfaces/FlowNodeScope.md#variableengine)

### Accessors

* [coverScopes](/auto-docs/fixed-layout-editor/interfaces/FlowNodeScope.md#coverscopes)
* [depScopes](/auto-docs/fixed-layout-editor/interfaces/FlowNodeScope.md#depscopes)
* [disposed](/auto-docs/fixed-layout-editor/interfaces/FlowNodeScope.md#disposed)

### Methods

* [clearVar](/auto-docs/fixed-layout-editor/interfaces/FlowNodeScope.md#clearvar)
* [dispose](/auto-docs/fixed-layout-editor/interfaces/FlowNodeScope.md#dispose)
* [getVar](/auto-docs/fixed-layout-editor/interfaces/FlowNodeScope.md#getvar)
* [refreshCovers](/auto-docs/fixed-layout-editor/interfaces/FlowNodeScope.md#refreshcovers)
* [refreshDeps](/auto-docs/fixed-layout-editor/interfaces/FlowNodeScope.md#refreshdeps)
* [setVar](/auto-docs/fixed-layout-editor/interfaces/FlowNodeScope.md#setvar)

## Properties

### ast

`Readonly` **ast**: [`MapNode`](/auto-docs/fixed-layout-editor/classes/MapNode.md)

The root AST node for this scope, which is a MapNode.
It stores various data related to the scope, such as `outputs`.

#### Inherited from

[Scope](/auto-docs/fixed-layout-editor/classes/Scope.md).[ast](/auto-docs/fixed-layout-editor/classes/Scope.md#ast)

***

### available

`Readonly` **available**: `ScopeAvailableData`

Manages the available variables for this scope.

#### Inherited from

[Scope](/auto-docs/fixed-layout-editor/classes/Scope.md).[available](/auto-docs/fixed-layout-editor/classes/Scope.md#available)

***

### event

`Readonly` **event**: `ScopeEventData`

Manages event dispatching and handling for this scope.

#### Inherited from

[Scope](/auto-docs/fixed-layout-editor/classes/Scope.md).[event](/auto-docs/fixed-layout-editor/classes/Scope.md#event)

***

### id

`Readonly` **id**: `string` | `symbol`

A unique identifier for the scope.

#### Inherited from

[Scope](/auto-docs/fixed-layout-editor/classes/Scope.md).[id](/auto-docs/fixed-layout-editor/classes/Scope.md#id)

***

### meta

`Readonly` **meta**: [`FlowNodeScopeMeta`](/auto-docs/fixed-layout-editor/interfaces/FlowNodeScopeMeta.md)

Metadata associated with the scope, which can be extended by higher-level business logic.

#### Inherited from

[Scope](/auto-docs/fixed-layout-editor/classes/Scope.md).[meta](/auto-docs/fixed-layout-editor/classes/Scope.md#meta)

***

### onDispose

**onDispose**: [`Event`](/auto-docs/fixed-layout-editor/interfaces/Event-1.md)<`void`>

#### Inherited from

[Scope](/auto-docs/fixed-layout-editor/classes/Scope.md).[onDispose](/auto-docs/fixed-layout-editor/classes/Scope.md#ondispose)

***

### output

`Readonly` **output**: [`ScopeOutputData`](/auto-docs/fixed-layout-editor/classes/ScopeOutputData.md)

Manages the output variables for this scope.

#### Inherited from

[Scope](/auto-docs/fixed-layout-editor/classes/Scope.md).[output](/auto-docs/fixed-layout-editor/classes/Scope.md#output)

***

### toDispose

**toDispose**: [`DisposableCollection`](/auto-docs/fixed-layout-editor/classes/DisposableCollection.md)

#### Inherited from

[Scope](/auto-docs/fixed-layout-editor/classes/Scope.md).[toDispose](/auto-docs/fixed-layout-editor/classes/Scope.md#todispose)

***

### variableEngine

`Readonly` **variableEngine**: [`VariableEngine`](/auto-docs/fixed-layout-editor/classes/VariableEngine.md)

The variable engine instance this scope belongs to.

#### Inherited from

[Scope](/auto-docs/fixed-layout-editor/classes/Scope.md).[variableEngine](/auto-docs/fixed-layout-editor/classes/Scope.md#variableengine)

## Accessors

### coverScopes

`get` **coverScopes**(): [`Scope`](/auto-docs/fixed-layout-editor/classes/Scope.md)<`Record`<`string`, `any`>>\[]

Gets the scopes that are covered by this scope.

#### Returns

[`Scope`](/auto-docs/fixed-layout-editor/classes/Scope.md)<`Record`<`string`, `any`>>\[]

#### Inherited from

Scope.coverScopes

***

### depScopes

`get` **depScopes**(): [`Scope`](/auto-docs/fixed-layout-editor/classes/Scope.md)<`Record`<`string`, `any`>>\[]

Gets the scopes that this scope depends on.

#### Returns

[`Scope`](/auto-docs/fixed-layout-editor/classes/Scope.md)<`Record`<`string`, `any`>>\[]

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

Clears a variable from the scope by its key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key?` | `string` | The key of the variable to clear. Defaults to 'outputs'. |

#### Returns

`void`

#### Inherited from

[Scope](/auto-docs/fixed-layout-editor/classes/Scope.md).[clearVar](/auto-docs/fixed-layout-editor/classes/Scope.md#clearvar)

***

### dispose

**dispose**(): `void`

Disposes of the scope and its resources.
This will also trigger updates in dependent and covering scopes.

#### Returns

`void`

#### Inherited from

[Scope](/auto-docs/fixed-layout-editor/classes/Scope.md).[dispose](/auto-docs/fixed-layout-editor/classes/Scope.md#dispose)

***

### getVar

**getVar**<`Node`>(`key?`): `undefined` | `Node`

Retrieves a variable from the scope by its key.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Node` | extends [`ASTNode`](/auto-docs/fixed-layout-editor/classes/ASTNode.md)<`any`, `any`, `Node`> = [`ASTNode`](/auto-docs/fixed-layout-editor/classes/ASTNode.md)<`any`, `any`> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key?` | `string` | The key of the variable to retrieve. Defaults to 'outputs'. |

#### Returns

`undefined` | `Node`

The AST node for the variable, or `undefined` if not found.

#### Inherited from

[Scope](/auto-docs/fixed-layout-editor/classes/Scope.md).[getVar](/auto-docs/fixed-layout-editor/classes/Scope.md#getvar)

***

### refreshCovers

**refreshCovers**(): `void`

Refreshes the covering scopes.

#### Returns

`void`

#### Inherited from

[Scope](/auto-docs/fixed-layout-editor/classes/Scope.md).[refreshCovers](/auto-docs/fixed-layout-editor/classes/Scope.md#refreshcovers)

***

### refreshDeps

**refreshDeps**(): `void`

Refreshes the dependency scopes and the available variables.

#### Returns

`void`

#### Inherited from

[Scope](/auto-docs/fixed-layout-editor/classes/Scope.md).[refreshDeps](/auto-docs/fixed-layout-editor/classes/Scope.md#refreshdeps)

***

### setVar

**setVar**<`Node`>(`json`): `Node`

Sets a variable in the scope with the default key 'outputs'.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Node` | extends [`ASTNode`](/auto-docs/fixed-layout-editor/classes/ASTNode.md)<`any`, `any`, `Node`> = [`ASTNode`](/auto-docs/fixed-layout-editor/classes/ASTNode.md)<`any`, `any`> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `json` | [`ASTNodeJSON`](/auto-docs/fixed-layout-editor/interfaces/ASTNodeJSON.md) | The JSON representation of the AST node to set. |

#### Returns

`Node`

The created or updated AST node.

#### Inherited from

[Scope](/auto-docs/fixed-layout-editor/classes/Scope.md).[setVar](/auto-docs/fixed-layout-editor/classes/Scope.md#setvar)

**setVar**<`Node`>(`key`, `json`): `Node`

Sets a variable in the scope with a specified key.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Node` | extends [`ASTNode`](/auto-docs/fixed-layout-editor/classes/ASTNode.md)<`any`, `any`, `Node`> = [`ASTNode`](/auto-docs/fixed-layout-editor/classes/ASTNode.md)<`any`, `any`> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The key of the variable to set. |
| `json` | [`ASTNodeJSON`](/auto-docs/fixed-layout-editor/interfaces/ASTNodeJSON.md) | The JSON representation of the AST node to set. |

#### Returns

`Node`

The created or updated AST node.

#### Inherited from

[Scope](/auto-docs/fixed-layout-editor/classes/Scope.md).[setVar](/auto-docs/fixed-layout-editor/classes/Scope.md#setvar)
