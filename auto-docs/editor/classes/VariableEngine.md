# Class: VariableEngine

An object that performs a cleanup operation when `.dispose()` is called.

Some examples of how disposables are used:

* An event listener that removes itself when `.dispose()` is called.
* The return value from registering a provider. When `.dispose()` is called, the provider is unregistered.

## Implements

* [`Disposable`](/auto-docs/editor/interfaces/Disposable-1.md)

## Table of contents

### Constructors

* [constructor](/auto-docs/editor/classes/VariableEngine.md#constructor)

### Properties

* [astRegisters](/auto-docs/editor/classes/VariableEngine.md#astregisters)
* [chain](/auto-docs/editor/classes/VariableEngine.md#chain)
* [globalEvent$](/auto-docs/editor/classes/VariableEngine.md#globalevent$)
* [globalVariableTable](/auto-docs/editor/classes/VariableEngine.md#globalvariabletable)
* [onScopeChange](/auto-docs/editor/classes/VariableEngine.md#onscopechange)

### Accessors

* [container](/auto-docs/editor/classes/VariableEngine.md#container)

### Methods

* [createScope](/auto-docs/editor/classes/VariableEngine.md#createscope)
* [dispose](/auto-docs/editor/classes/VariableEngine.md#dispose)
* [fireGlobalEvent](/auto-docs/editor/classes/VariableEngine.md#fireglobalevent)
* [getAllScopes](/auto-docs/editor/classes/VariableEngine.md#getallscopes)
* [getScopeById](/auto-docs/editor/classes/VariableEngine.md#getscopebyid)
* [onGlobalEvent](/auto-docs/editor/classes/VariableEngine.md#onglobalevent)
* [removeScopeById](/auto-docs/editor/classes/VariableEngine.md#removescopebyid)

## Constructors

### constructor

**new VariableEngine**(`chain`, `astRegisters`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chain` | [`ScopeChain`](/auto-docs/editor/classes/ScopeChain.md) |
| `astRegisters` | [`ASTRegisters`](/auto-docs/editor/classes/ASTRegisters.md) |

## Properties

### astRegisters

`Readonly` **astRegisters**: [`ASTRegisters`](/auto-docs/editor/classes/ASTRegisters.md)

***

### chain

`Readonly` **chain**: [`ScopeChain`](/auto-docs/editor/classes/ScopeChain.md)

***

### globalEvent$

**globalEvent$**: `Subject`<[`GlobalEventActionType`](/auto-docs/editor/interfaces/GlobalEventActionType.md)<`string`, `any`, [`ASTNode`](/auto-docs/editor/classes/ASTNode.md)<`any`, `any`>>>

***

### globalVariableTable

**globalVariableTable**: [`IVariableTable`](/auto-docs/editor/interfaces/IVariableTable.md)

***

### onScopeChange

**onScopeChange**: [`Event`](/auto-docs/editor/interfaces/Event-1.md)<`ScopeChangeAction`>

## Accessors

### container

`get` **container**(): [`Container`](/auto-docs/editor/interfaces/interfaces.Container.md)

#### Returns

[`Container`](/auto-docs/editor/interfaces/interfaces.Container.md)

## Methods

### createScope

**createScope**(`id`, `meta?`, `options?`): [`Scope`](/auto-docs/editor/classes/Scope.md)<`Record`<`string`, `any`>>

Get Scope, if Scope exists and type is same, will use it directly

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | `symbol` | scope id |
| `meta?` | `Record`<`string`, `any`> | scope meta, defined by user |
| `options?` | `Object` | - |
| `options.ScopeConstructor?` | `IScopeConstructor` | - |

#### Returns

[`Scope`](/auto-docs/editor/classes/Scope.md)<`Record`<`string`, `any`>>

***

### dispose

**dispose**(): `void`

#### Returns

`void`

#### Implementation of

[Disposable](/auto-docs/editor/interfaces/Disposable-1.md).[dispose](/auto-docs/editor/interfaces/Disposable-1.md#dispose)

***

### fireGlobalEvent

**fireGlobalEvent**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`GlobalEventActionType`](/auto-docs/editor/interfaces/GlobalEventActionType.md)<`string`, `any`, [`ASTNode`](/auto-docs/editor/classes/ASTNode.md)<`any`, `any`>> |

#### Returns

`void`

***

### getAllScopes

**getAllScopes**(`«destructured»?`): [`Scope`](/auto-docs/editor/classes/Scope.md)<`Record`<`string`, `any`>>\[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `sort?` | `boolean` |

#### Returns

[`Scope`](/auto-docs/editor/classes/Scope.md)<`Record`<`string`, `any`>>\[]

***

### getScopeById

**getScopeById**(`scopeId`): `undefined` | [`Scope`](/auto-docs/editor/classes/Scope.md)<`Record`<`string`, `any`>>

#### Parameters

| Name | Type |
| :------ | :------ |
| `scopeId` | `string` | `symbol` |

#### Returns

`undefined` | [`Scope`](/auto-docs/editor/classes/Scope.md)<`Record`<`string`, `any`>>

***

### onGlobalEvent

**onGlobalEvent**<`ActionType`>(`type`, `observer`): [`Disposable`](/auto-docs/editor/interfaces/Disposable-1.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ActionType` | extends [`GlobalEventActionType`](/auto-docs/editor/interfaces/GlobalEventActionType.md)<`string`, `any`, [`ASTNode`](/auto-docs/editor/classes/ASTNode.md)<`any`, `any`>, `ActionType`> = [`GlobalEventActionType`](/auto-docs/editor/interfaces/GlobalEventActionType.md)<`string`, `any`, [`ASTNode`](/auto-docs/editor/classes/ASTNode.md)<`any`, `any`>> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `ActionType`\[`"type"`] |
| `observer` | (`action`: `ActionType`) => `void` |

#### Returns

[`Disposable`](/auto-docs/editor/interfaces/Disposable-1.md)

***

### removeScopeById

**removeScopeById**(`scopeId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scopeId` | `string` | `symbol` |

#### Returns

`void`
