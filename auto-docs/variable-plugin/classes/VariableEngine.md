# Class: VariableEngine

## Implements

* `Disposable`

## Table of contents

### Constructors

* [constructor](/auto-docs/variable-plugin/classes/VariableEngine.md#constructor)

### Properties

* [astRegisters](/auto-docs/variable-plugin/classes/VariableEngine.md#astregisters)
* [chain](/auto-docs/variable-plugin/classes/VariableEngine.md#chain)
* [globalEvent$](/auto-docs/variable-plugin/classes/VariableEngine.md#globalevent$)
* [globalVariableTable](/auto-docs/variable-plugin/classes/VariableEngine.md#globalvariabletable)
* [onScopeChange](/auto-docs/variable-plugin/classes/VariableEngine.md#onscopechange)

### Accessors

* [container](/auto-docs/variable-plugin/classes/VariableEngine.md#container)

### Methods

* [createScope](/auto-docs/variable-plugin/classes/VariableEngine.md#createscope)
* [dispose](/auto-docs/variable-plugin/classes/VariableEngine.md#dispose)
* [fireGlobalEvent](/auto-docs/variable-plugin/classes/VariableEngine.md#fireglobalevent)
* [getAllScopes](/auto-docs/variable-plugin/classes/VariableEngine.md#getallscopes)
* [getScopeById](/auto-docs/variable-plugin/classes/VariableEngine.md#getscopebyid)
* [onGlobalEvent](/auto-docs/variable-plugin/classes/VariableEngine.md#onglobalevent)
* [removeScopeById](/auto-docs/variable-plugin/classes/VariableEngine.md#removescopebyid)

## Constructors

### constructor

**new VariableEngine**(`chain`, `astRegisters`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chain` | [`ScopeChain`](/auto-docs/variable-plugin/classes/ScopeChain.md) |
| `astRegisters` | [`ASTRegisters`](/auto-docs/variable-plugin/classes/ASTRegisters.md) |

## Properties

### astRegisters

`Readonly` **astRegisters**: [`ASTRegisters`](/auto-docs/variable-plugin/classes/ASTRegisters.md)

***

### chain

`Readonly` **chain**: [`ScopeChain`](/auto-docs/variable-plugin/classes/ScopeChain.md)

***

### globalEvent$

**globalEvent$**: `Subject`<[`GlobalEventActionType`](/auto-docs/variable-plugin/interfaces/GlobalEventActionType.md)<`string`, `any`, [`ASTNode`](/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`>>>

***

### globalVariableTable

**globalVariableTable**: [`IVariableTable`](/auto-docs/variable-plugin/interfaces/IVariableTable.md)

***

### onScopeChange

**onScopeChange**: `Event`<`ScopeChangeAction`>

## Accessors

### container

`get` **container**(): `Container`

#### Returns

`Container`

## Methods

### createScope

**createScope**(`id`, `meta?`, `options?`): [`Scope`](/auto-docs/variable-plugin/classes/Scope.md)<`Record`<`string`, `any`>>

Get Scope, if Scope exists and type is same, will use it directly

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | `symbol` | scope id |
| `meta?` | `Record`<`string`, `any`> | scope meta, defined by user |
| `options?` | `Object` | - |
| `options.ScopeConstructor?` | `IScopeConstructor` | - |

#### Returns

[`Scope`](/auto-docs/variable-plugin/classes/Scope.md)<`Record`<`string`, `any`>>

***

### dispose

**dispose**(): `void`

#### Returns

`void`

#### Implementation of

Disposable.dispose

***

### fireGlobalEvent

**fireGlobalEvent**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`GlobalEventActionType`](/auto-docs/variable-plugin/interfaces/GlobalEventActionType.md)<`string`, `any`, [`ASTNode`](/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`>> |

#### Returns

`void`

***

### getAllScopes

**getAllScopes**(`«destructured»?`): [`Scope`](/auto-docs/variable-plugin/classes/Scope.md)<`Record`<`string`, `any`>>\[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `sort?` | `boolean` |

#### Returns

[`Scope`](/auto-docs/variable-plugin/classes/Scope.md)<`Record`<`string`, `any`>>\[]

***

### getScopeById

**getScopeById**(`scopeId`): `undefined` | [`Scope`](/auto-docs/variable-plugin/classes/Scope.md)<`Record`<`string`, `any`>>

#### Parameters

| Name | Type |
| :------ | :------ |
| `scopeId` | `string` | `symbol` |

#### Returns

`undefined` | [`Scope`](/auto-docs/variable-plugin/classes/Scope.md)<`Record`<`string`, `any`>>

***

### onGlobalEvent

**onGlobalEvent**<`ActionType`>(`type`, `observer`): `Disposable`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ActionType` | extends [`GlobalEventActionType`](/auto-docs/variable-plugin/interfaces/GlobalEventActionType.md)<`string`, `any`, [`ASTNode`](/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`>, `ActionType`> = [`GlobalEventActionType`](/auto-docs/variable-plugin/interfaces/GlobalEventActionType.md)<`string`, `any`, [`ASTNode`](/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`>> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `ActionType`\[`"type"`] |
| `observer` | (`action`: `ActionType`) => `void` |

#### Returns

`Disposable`

***

### removeScopeById

**removeScopeById**(`scopeId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scopeId` | `string` | `symbol` |

#### Returns

`void`
