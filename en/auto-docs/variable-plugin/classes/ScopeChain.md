# Class: ScopeChain

作用域依赖关系管理数据结构

* ScopeOrder 可能存在多种实现方式，因此采取抽象类的方式，具体的实现由子类实现

## Table of contents

### Constructors

* [constructor](/en/auto-docs/variable-plugin/classes/ScopeChain.md#constructor)

### Properties

* [toDispose](/en/auto-docs/variable-plugin/classes/ScopeChain.md#todispose)
* [variableEngineProvider](/en/auto-docs/variable-plugin/classes/ScopeChain.md#variableengineprovider)

### Accessors

* [disposed](/en/auto-docs/variable-plugin/classes/ScopeChain.md#disposed)
* [onDispose](/en/auto-docs/variable-plugin/classes/ScopeChain.md#ondispose)
* [variableEngine](/en/auto-docs/variable-plugin/classes/ScopeChain.md#variableengine)

### Methods

* [dispose](/en/auto-docs/variable-plugin/classes/ScopeChain.md#dispose)
* [getCovers](/en/auto-docs/variable-plugin/classes/ScopeChain.md#getcovers)
* [getDeps](/en/auto-docs/variable-plugin/classes/ScopeChain.md#getdeps)
* [refreshAllChange](/en/auto-docs/variable-plugin/classes/ScopeChain.md#refreshallchange)
* [sortAll](/en/auto-docs/variable-plugin/classes/ScopeChain.md#sortall)

## Constructors

### constructor

**new ScopeChain**()

## Properties

### toDispose

`Readonly` **toDispose**: `DisposableCollection`

***

### variableEngineProvider

**variableEngineProvider**: [`VariableEngineProvider`](/en/auto-docs/variable-plugin/variables/VariableEngineProvider-1.md)

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

`get` **variableEngine**(): [`VariableEngine`](/en/auto-docs/variable-plugin/classes/VariableEngine.md)

#### Returns

[`VariableEngine`](/en/auto-docs/variable-plugin/classes/VariableEngine.md)

## Methods

### dispose

**dispose**(): `void`

#### Returns

`void`

***

### getCovers

`Abstract` **getCovers**(`scope`): [`Scope`](/en/auto-docs/variable-plugin/classes/Scope.md)<`Record`<`string`, `any`>>\[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `scope` | [`Scope`](/en/auto-docs/variable-plugin/classes/Scope.md)<`Record`<`string`, `any`>> |

#### Returns

[`Scope`](/en/auto-docs/variable-plugin/classes/Scope.md)<`Record`<`string`, `any`>>\[]

***

### getDeps

`Abstract` **getDeps**(`scope`): [`Scope`](/en/auto-docs/variable-plugin/classes/Scope.md)<`Record`<`string`, `any`>>\[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `scope` | [`Scope`](/en/auto-docs/variable-plugin/classes/Scope.md)<`Record`<`string`, `any`>> |

#### Returns

[`Scope`](/en/auto-docs/variable-plugin/classes/Scope.md)<`Record`<`string`, `any`>>\[]

***

### refreshAllChange

**refreshAllChange**(): `void`

所有作用域依赖关系刷新

#### Returns

`void`

***

### sortAll

`Abstract` **sortAll**(): [`Scope`](/en/auto-docs/variable-plugin/classes/Scope.md)<`Record`<`string`, `any`>>\[]

#### Returns

[`Scope`](/en/auto-docs/variable-plugin/classes/Scope.md)<`Record`<`string`, `any`>>\[]
