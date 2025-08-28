# Class: VariableEngine

## Implements

* `Disposable`

## Table of contents

### Constructors

* [constructor](/en/auto-docs/variable-plugin/classes/VariableEngine.md#constructor)

### Properties

* [astRegisters](/en/auto-docs/variable-plugin/classes/VariableEngine.md#astregisters)
* [chain](/en/auto-docs/variable-plugin/classes/VariableEngine.md#chain)
* [globalEvent$](/en/auto-docs/variable-plugin/classes/VariableEngine.md#globalevent$)
* [globalVariableTable](/en/auto-docs/variable-plugin/classes/VariableEngine.md#globalvariabletable)
* [onScopeChange](/en/auto-docs/variable-plugin/classes/VariableEngine.md#onscopechange)

### Accessors

* [container](/en/auto-docs/variable-plugin/classes/VariableEngine.md#container)

### Methods

* [createScope](/en/auto-docs/variable-plugin/classes/VariableEngine.md#createscope)
* [dispose](/en/auto-docs/variable-plugin/classes/VariableEngine.md#dispose)
* [fireGlobalEvent](/en/auto-docs/variable-plugin/classes/VariableEngine.md#fireglobalevent)
* [getAllScopes](/en/auto-docs/variable-plugin/classes/VariableEngine.md#getallscopes)
* [getScopeById](/en/auto-docs/variable-plugin/classes/VariableEngine.md#getscopebyid)
* [onGlobalEvent](/en/auto-docs/variable-plugin/classes/VariableEngine.md#onglobalevent)
* [removeScopeById](/en/auto-docs/variable-plugin/classes/VariableEngine.md#removescopebyid)

## Constructors

### constructor

**new VariableEngine**(`chain`, `astRegisters`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chain` | [`ScopeChain`](/en/auto-docs/variable-plugin/classes/ScopeChain.md) |
| `astRegisters` | [`ASTRegisters`](/en/auto-docs/variable-plugin/classes/ASTRegisters.md) |

## Properties

### astRegisters

`Readonly` **astRegisters**: [`ASTRegisters`](/en/auto-docs/variable-plugin/classes/ASTRegisters.md)

***

### chain

`Readonly` **chain**: [`ScopeChain`](/en/auto-docs/variable-plugin/classes/ScopeChain.md)

***

### globalEvent$

**globalEvent$**: `Subject`<[`GlobalEventActionType`](/en/auto-docs/variable-plugin/interfaces/GlobalEventActionType.md)<`string`, `any`, [`ASTNode`](/en/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`>>>

***

### globalVariableTable

**globalVariableTable**: [`IVariableTable`](/en/auto-docs/variable-plugin/interfaces/IVariableTable.md)

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

**createScope**(`id`, `meta?`, `options?`): [`Scope`](/en/auto-docs/variable-plugin/classes/Scope.md)<`Record`<`string`, `any`>>

Get Scope, if Scope exists and type is same, will use it directly

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | `symbol` | scope id |
| `meta?` | `Record`<`string`, `any`> | scope meta, defined by user |
| `options?` | `Object` | - |
| `options.ScopeConstructor?` | `IScopeConstructor` | - |

#### Returns

[`Scope`](/en/auto-docs/variable-plugin/classes/Scope.md)<`Record`<`string`, `any`>>

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
| `event` | [`GlobalEventActionType`](/en/auto-docs/variable-plugin/interfaces/GlobalEventActionType.md)<`string`, `any`, [`ASTNode`](/en/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`>> |

#### Returns

`void`

***

### getAllScopes

**getAllScopes**(`«destructured»?`): [`Scope`](/en/auto-docs/variable-plugin/classes/Scope.md)<`Record`<`string`, `any`>>\[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `sort?` | `boolean` |

#### Returns

[`Scope`](/en/auto-docs/variable-plugin/classes/Scope.md)<`Record`<`string`, `any`>>\[]

***

### getScopeById

**getScopeById**(`scopeId`): `undefined` | [`Scope`](/en/auto-docs/variable-plugin/classes/Scope.md)<`Record`<`string`, `any`>>

#### Parameters

| Name | Type |
| :------ | :------ |
| `scopeId` | `string` | `symbol` |

#### Returns

`undefined` | [`Scope`](/en/auto-docs/variable-plugin/classes/Scope.md)<`Record`<`string`, `any`>>

***

### onGlobalEvent

**onGlobalEvent**<`ActionType`>(`type`, `observer`): `Disposable`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ActionType` | extends [`GlobalEventActionType`](/en/auto-docs/variable-plugin/interfaces/GlobalEventActionType.md)<`string`, `any`, [`ASTNode`](/en/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`>, `ActionType`> = [`GlobalEventActionType`](/en/auto-docs/variable-plugin/interfaces/GlobalEventActionType.md)<`string`, `any`, [`ASTNode`](/en/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`>> |

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
