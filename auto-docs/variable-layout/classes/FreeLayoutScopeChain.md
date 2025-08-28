# Class: FreeLayoutScopeChain

自由布局作用域链实现

## Hierarchy

* `ScopeChain`

  ↳ **`FreeLayoutScopeChain`**

## Table of contents

### Constructors

* [constructor](/auto-docs/variable-layout/classes/FreeLayoutScopeChain.md#constructor)

### Properties

* [entityManager](/auto-docs/variable-layout/classes/FreeLayoutScopeChain.md#entitymanager)
* [toDispose](/auto-docs/variable-layout/classes/FreeLayoutScopeChain.md#todispose)
* [variableEngineProvider](/auto-docs/variable-layout/classes/FreeLayoutScopeChain.md#variableengineprovider)

### Accessors

* [disposed](/auto-docs/variable-layout/classes/FreeLayoutScopeChain.md#disposed)
* [onDispose](/auto-docs/variable-layout/classes/FreeLayoutScopeChain.md#ondispose)
* [tree](/auto-docs/variable-layout/classes/FreeLayoutScopeChain.md#tree)
* [variableEngine](/auto-docs/variable-layout/classes/FreeLayoutScopeChain.md#variableengine)

### Methods

* [dispose](/auto-docs/variable-layout/classes/FreeLayoutScopeChain.md#dispose)
* [getAllPublicChildScopes](/auto-docs/variable-layout/classes/FreeLayoutScopeChain.md#getallpublicchildscopes)
* [getCovers](/auto-docs/variable-layout/classes/FreeLayoutScopeChain.md#getcovers)
* [getDeps](/auto-docs/variable-layout/classes/FreeLayoutScopeChain.md#getdeps)
* [getNodeChildren](/auto-docs/variable-layout/classes/FreeLayoutScopeChain.md#getnodechildren)
* [getNodeParent](/auto-docs/variable-layout/classes/FreeLayoutScopeChain.md#getnodeparent)
* [onInit](/auto-docs/variable-layout/classes/FreeLayoutScopeChain.md#oninit)
* [refreshAllChange](/auto-docs/variable-layout/classes/FreeLayoutScopeChain.md#refreshallchange)
* [sortAll](/auto-docs/variable-layout/classes/FreeLayoutScopeChain.md#sortall)

## Constructors

### constructor

**new FreeLayoutScopeChain**()

#### Inherited from

ScopeChain.constructor

## Properties

### entityManager

**entityManager**: `EntityManager`

***

### toDispose

`Readonly` **toDispose**: `DisposableCollection`

#### Inherited from

ScopeChain.toDispose

***

### variableEngineProvider

**variableEngineProvider**: `VariableEngineProvider`

#### Inherited from

ScopeChain.variableEngineProvider

## Accessors

### disposed

`get` **disposed**(): `boolean`

#### Returns

`boolean`

#### Inherited from

ScopeChain.disposed

***

### onDispose

`get` **onDispose**(): `Event`<`void`>

#### Returns

`Event`<`void`>

#### Inherited from

ScopeChain.onDispose

***

### tree

`get` **tree**(): `FlowVirtualTree`<`FlowNodeEntity`>

#### Returns

`FlowVirtualTree`<`FlowNodeEntity`>

***

### variableEngine

`get` **variableEngine**(): `VariableEngine`

#### Returns

`VariableEngine`

#### Inherited from

ScopeChain.variableEngine

## Methods

### dispose

**dispose**(): `void`

#### Returns

`void`

#### Inherited from

ScopeChain.dispose

***

### getAllPublicChildScopes

**getAllPublicChildScopes**(`node`): `Scope`<`Record`<`string`, `any`>>\[]

Get All children of nodes

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `FlowNodeEntity` |

#### Returns

`Scope`<`Record`<`string`, `any`>>\[]

***

### getCovers

**getCovers**(`scope`): [`FlowNodeScope`](/auto-docs/variable-layout/interfaces/FlowNodeScope.md)\[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `scope` | [`FlowNodeScope`](/auto-docs/variable-layout/interfaces/FlowNodeScope.md) |

#### Returns

[`FlowNodeScope`](/auto-docs/variable-layout/interfaces/FlowNodeScope.md)\[]

#### Overrides

ScopeChain.getCovers

***

### getDeps

**getDeps**(`scope`): [`FlowNodeScope`](/auto-docs/variable-layout/interfaces/FlowNodeScope.md)\[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `scope` | [`FlowNodeScope`](/auto-docs/variable-layout/interfaces/FlowNodeScope.md) |

#### Returns

[`FlowNodeScope`](/auto-docs/variable-layout/interfaces/FlowNodeScope.md)\[]

#### Overrides

ScopeChain.getDeps

***

### getNodeChildren

**getNodeChildren**(`node`): `FlowNodeEntity`\[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `FlowNodeEntity` |

#### Returns

`FlowNodeEntity`\[]

***

### getNodeParent

**getNodeParent**(`node`): `undefined` | `FlowNodeEntity`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `FlowNodeEntity` |

#### Returns

`undefined` | `FlowNodeEntity`

***

### onInit

**onInit**(): `void`

#### Returns

`void`

***

### refreshAllChange

**refreshAllChange**(): `void`

所有作用域依赖关系刷新

#### Returns

`void`

#### Inherited from

ScopeChain.refreshAllChange

***

### sortAll

**sortAll**(): `Scope`<`Record`<`string`, `any`>>\[]

#### Returns

`Scope`<`Record`<`string`, `any`>>\[]

#### Overrides

ScopeChain.sortAll
