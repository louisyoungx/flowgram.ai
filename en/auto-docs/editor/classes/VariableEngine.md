# Class: VariableEngine

An object that performs a cleanup operation when `.dispose()` is called.

Some examples of how disposables are used:

* An event listener that removes itself when `.dispose()` is called.
* The return value from registering a provider. When `.dispose()` is called, the provider is unregistered.

## Implements

* [`Disposable`](/en/auto-docs/editor/interfaces/Disposable-1.md)

## Table of contents

### Constructors

* [constructor](/en/auto-docs/editor/classes/VariableEngine.md#constructor)

### Properties

* [astRegisters](/en/auto-docs/editor/classes/VariableEngine.md#astregisters)
* [chain](/en/auto-docs/editor/classes/VariableEngine.md#chain)
* [globalEvent$](/en/auto-docs/editor/classes/VariableEngine.md#globalevent$)
* [globalVariableTable](/en/auto-docs/editor/classes/VariableEngine.md#globalvariabletable)
* [onScopeChange](/en/auto-docs/editor/classes/VariableEngine.md#onscopechange)

### Accessors

* [container](/en/auto-docs/editor/classes/VariableEngine.md#container)

### Methods

* [createScope](/en/auto-docs/editor/classes/VariableEngine.md#createscope)
* [dispose](/en/auto-docs/editor/classes/VariableEngine.md#dispose)
* [fireGlobalEvent](/en/auto-docs/editor/classes/VariableEngine.md#fireglobalevent)
* [getAllScopes](/en/auto-docs/editor/classes/VariableEngine.md#getallscopes)
* [getScopeById](/en/auto-docs/editor/classes/VariableEngine.md#getscopebyid)
* [onGlobalEvent](/en/auto-docs/editor/classes/VariableEngine.md#onglobalevent)
* [removeScopeById](/en/auto-docs/editor/classes/VariableEngine.md#removescopebyid)

## Constructors

### constructor

**new VariableEngine**(`chain`, `astRegisters`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chain` | [`ScopeChain`](/en/auto-docs/editor/classes/ScopeChain.md) |
| `astRegisters` | [`ASTRegisters`](/en/auto-docs/editor/classes/ASTRegisters.md) |

## Properties

### astRegisters

`Readonly` **astRegisters**: [`ASTRegisters`](/en/auto-docs/editor/classes/ASTRegisters.md)

***

### chain

`Readonly` **chain**: [`ScopeChain`](/en/auto-docs/editor/classes/ScopeChain.md)

***

### globalEvent$

**globalEvent$**: `Subject`<[`GlobalEventActionType`](/en/auto-docs/editor/interfaces/GlobalEventActionType.md)<`string`, `any`, [`ASTNode`](/en/auto-docs/editor/classes/ASTNode.md)<`any`, `any`>>>

***

### globalVariableTable

**globalVariableTable**: [`IVariableTable`](/en/auto-docs/editor/interfaces/IVariableTable.md)

***

### onScopeChange

**onScopeChange**: [`Event`](/en/auto-docs/editor/interfaces/Event-1.md)<`ScopeChangeAction`>

## Accessors

### container

`get` **container**(): [`Container`](/en/auto-docs/editor/interfaces/interfaces.Container.md)

#### Returns

[`Container`](/en/auto-docs/editor/interfaces/interfaces.Container.md)

## Methods

### createScope

**createScope**(`id`, `meta?`, `options?`): [`Scope`](/en/auto-docs/editor/classes/Scope.md)<`Record`<`string`, `any`>>

Get Scope, if Scope exists and type is same, will use it directly

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | `symbol` | scope id |
| `meta?` | `Record`<`string`, `any`> | scope meta, defined by user |
| `options?` | `Object` | - |
| `options.ScopeConstructor?` | `IScopeConstructor` | - |

#### Returns

[`Scope`](/en/auto-docs/editor/classes/Scope.md)<`Record`<`string`, `any`>>

***

### dispose

**dispose**(): `void`

#### Returns

`void`

#### Implementation of

[Disposable](/en/auto-docs/editor/interfaces/Disposable-1.md).[dispose](/en/auto-docs/editor/interfaces/Disposable-1.md#dispose)

***

### fireGlobalEvent

**fireGlobalEvent**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`GlobalEventActionType`](/en/auto-docs/editor/interfaces/GlobalEventActionType.md)<`string`, `any`, [`ASTNode`](/en/auto-docs/editor/classes/ASTNode.md)<`any`, `any`>> |

#### Returns

`void`

***

### getAllScopes

**getAllScopes**(`«destructured»?`): [`Scope`](/en/auto-docs/editor/classes/Scope.md)<`Record`<`string`, `any`>>\[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `sort?` | `boolean` |

#### Returns

[`Scope`](/en/auto-docs/editor/classes/Scope.md)<`Record`<`string`, `any`>>\[]

***

### getScopeById

**getScopeById**(`scopeId`): `undefined` | [`Scope`](/en/auto-docs/editor/classes/Scope.md)<`Record`<`string`, `any`>>

#### Parameters

| Name | Type |
| :------ | :------ |
| `scopeId` | `string` | `symbol` |

#### Returns

`undefined` | [`Scope`](/en/auto-docs/editor/classes/Scope.md)<`Record`<`string`, `any`>>

***

### onGlobalEvent

**onGlobalEvent**<`ActionType`>(`type`, `observer`): [`Disposable`](/en/auto-docs/editor/interfaces/Disposable-1.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ActionType` | extends [`GlobalEventActionType`](/en/auto-docs/editor/interfaces/GlobalEventActionType.md)<`string`, `any`, [`ASTNode`](/en/auto-docs/editor/classes/ASTNode.md)<`any`, `any`>, `ActionType`> = [`GlobalEventActionType`](/en/auto-docs/editor/interfaces/GlobalEventActionType.md)<`string`, `any`, [`ASTNode`](/en/auto-docs/editor/classes/ASTNode.md)<`any`, `any`>> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `ActionType`\[`"type"`] |
| `observer` | (`action`: `ActionType`) => `void` |

#### Returns

[`Disposable`](/en/auto-docs/editor/interfaces/Disposable-1.md)

***

### removeScopeById

**removeScopeById**(`scopeId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scopeId` | `string` | `symbol` |

#### Returns

`void`
