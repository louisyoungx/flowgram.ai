# Class: ScopeChain

作用域依赖关系管理数据结构

* ScopeOrder 可能存在多种实现方式，因此采取抽象类的方式，具体的实现由子类实现

## Table of contents

### Constructors

* [constructor](/auto-docs/variable-core/classes/ScopeChain.md#constructor)

### Properties

* [toDispose](/auto-docs/variable-core/classes/ScopeChain.md#todispose)
* [variableEngineProvider](/auto-docs/variable-core/classes/ScopeChain.md#variableengineprovider)

### Accessors

* [disposed](/auto-docs/variable-core/classes/ScopeChain.md#disposed)
* [onDispose](/auto-docs/variable-core/classes/ScopeChain.md#ondispose)
* [variableEngine](/auto-docs/variable-core/classes/ScopeChain.md#variableengine)

### Methods

* [dispose](/auto-docs/variable-core/classes/ScopeChain.md#dispose)
* [getCovers](/auto-docs/variable-core/classes/ScopeChain.md#getcovers)
* [getDeps](/auto-docs/variable-core/classes/ScopeChain.md#getdeps)
* [refreshAllChange](/auto-docs/variable-core/classes/ScopeChain.md#refreshallchange)
* [sortAll](/auto-docs/variable-core/classes/ScopeChain.md#sortall)

## Constructors

### constructor

**new ScopeChain**()

## Properties

### toDispose

`Readonly` **toDispose**: `DisposableCollection`

***

### variableEngineProvider

**variableEngineProvider**: [`VariableEngineProvider`](/auto-docs/variable-core/variables/VariableEngineProvider-1.md)

## Accessors

### disposed

`get` **disposed**(): `boolean`

#### Returns

`boolean`

***

### onDispose

`get` **onDispose**(): `Event`<`void`>

#### Returns

`Event`<`void`>

***

### variableEngine

`get` **variableEngine**(): [`VariableEngine`](/auto-docs/variable-core/classes/VariableEngine.md)

#### Returns

[`VariableEngine`](/auto-docs/variable-core/classes/VariableEngine.md)

## Methods

### dispose

**dispose**(): `void`

#### Returns

`void`

***

### getCovers

`Abstract` **getCovers**(`scope`): [`Scope`](/auto-docs/variable-core/classes/Scope.md)<`Record`<`string`, `any`>>\[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `scope` | [`Scope`](/auto-docs/variable-core/classes/Scope.md)<`Record`<`string`, `any`>> |

#### Returns

[`Scope`](/auto-docs/variable-core/classes/Scope.md)<`Record`<`string`, `any`>>\[]

***

### getDeps

`Abstract` **getDeps**(`scope`): [`Scope`](/auto-docs/variable-core/classes/Scope.md)<`Record`<`string`, `any`>>\[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `scope` | [`Scope`](/auto-docs/variable-core/classes/Scope.md)<`Record`<`string`, `any`>> |

#### Returns

[`Scope`](/auto-docs/variable-core/classes/Scope.md)<`Record`<`string`, `any`>>\[]

***

### refreshAllChange

**refreshAllChange**(): `void`

所有作用域依赖关系刷新

#### Returns

`void`

***

### sortAll

`Abstract` **sortAll**(): [`Scope`](/auto-docs/variable-core/classes/Scope.md)<`Record`<`string`, `any`>>\[]

#### Returns

[`Scope`](/auto-docs/variable-core/classes/Scope.md)<`Record`<`string`, `any`>>\[]
