# Class: FixedLayoutScopeChain

基于 FlowVirtualTree 的 ScopeOrder 实现

## Hierarchy

* `ScopeChain`

  ↳ **`FixedLayoutScopeChain`**

## Table of contents

### Constructors

* [constructor](/en/auto-docs/variable-layout/classes/FixedLayoutScopeChain.md#constructor)

### Properties

* [toDispose](/en/auto-docs/variable-layout/classes/FixedLayoutScopeChain.md#todispose)
* [tree](/en/auto-docs/variable-layout/classes/FixedLayoutScopeChain.md#tree)
* [variableEngineProvider](/en/auto-docs/variable-layout/classes/FixedLayoutScopeChain.md#variableengineprovider)

### Accessors

* [disposed](/en/auto-docs/variable-layout/classes/FixedLayoutScopeChain.md#disposed)
* [onDispose](/en/auto-docs/variable-layout/classes/FixedLayoutScopeChain.md#ondispose)
* [variableEngine](/en/auto-docs/variable-layout/classes/FixedLayoutScopeChain.md#variableengine)

### Methods

* [bindTree](/en/auto-docs/variable-layout/classes/FixedLayoutScopeChain.md#bindtree)
* [dispose](/en/auto-docs/variable-layout/classes/FixedLayoutScopeChain.md#dispose)
* [getCovers](/en/auto-docs/variable-layout/classes/FixedLayoutScopeChain.md#getcovers)
* [getDeps](/en/auto-docs/variable-layout/classes/FixedLayoutScopeChain.md#getdeps)
* [refreshAllChange](/en/auto-docs/variable-layout/classes/FixedLayoutScopeChain.md#refreshallchange)
* [sortAll](/en/auto-docs/variable-layout/classes/FixedLayoutScopeChain.md#sortall)

## Constructors

### constructor

**new FixedLayoutScopeChain**(`flowDocument`, `configs?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `flowDocument` | `FlowDocument`<`FlowDocumentJSON`> |
| `configs?` | [`VariableChainConfig`](/en/auto-docs/variable-layout/variables/VariableChainConfig-1.md) |

#### Overrides

ScopeChain.constructor

## Properties

### toDispose

`Readonly` **toDispose**: `DisposableCollection`

#### Inherited from

ScopeChain.toDispose

***

### tree

**tree**: `undefined` | `FlowVirtualTree`<`ScopeChainNode`>

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

### variableEngine

`get` **variableEngine**(): `VariableEngine`

#### Returns

`VariableEngine`

#### Inherited from

ScopeChain.variableEngine

## Methods

### bindTree

**bindTree**(`tree`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tree` | `FlowVirtualTree`<`ScopeChainNode`> |

#### Returns

`void`

***

### dispose

**dispose**(): `void`

#### Returns

`void`

#### Inherited from

ScopeChain.dispose

***

### getCovers

**getCovers**(`scope`): [`FlowNodeScope`](/en/auto-docs/variable-layout/interfaces/FlowNodeScope.md)\[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `scope` | [`FlowNodeScope`](/en/auto-docs/variable-layout/interfaces/FlowNodeScope.md) |

#### Returns

[`FlowNodeScope`](/en/auto-docs/variable-layout/interfaces/FlowNodeScope.md)\[]

#### Overrides

ScopeChain.getCovers

***

### getDeps

**getDeps**(`scope`): [`FlowNodeScope`](/en/auto-docs/variable-layout/interfaces/FlowNodeScope.md)\[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `scope` | [`FlowNodeScope`](/en/auto-docs/variable-layout/interfaces/FlowNodeScope.md) |

#### Returns

[`FlowNodeScope`](/en/auto-docs/variable-layout/interfaces/FlowNodeScope.md)\[]

#### Overrides

ScopeChain.getDeps

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
