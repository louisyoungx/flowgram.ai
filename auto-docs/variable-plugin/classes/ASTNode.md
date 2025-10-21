# Class: ASTNode\<JSON, InjectOpts>

An `ASTNode` represents a fundamental unit of variable information within the system's Abstract Syntax Tree.
It can model various constructs, for example:

* **Declarations**: `const a = 1`
* **Expressions**: `a.b.c`
* **Types**: `number`, `string`, `boolean`

Here is some characteristic of ASTNode:

* **Tree-like Structure**: ASTNodes can be nested to form a tree, representing complex variable structures.
* **Extendable**: New features can be added by extending the base ASTNode class.
* **Reactive**: Changes in an ASTNode's value trigger events, enabling reactive programming patterns.
* **Serializable**: ASTNodes can be converted to and from a JSON format (ASTNodeJSON) for storage or transmission.

## Type parameters

| Name | Type |
| :------ | :------ |
| `JSON` | extends [`ASTNodeJSON`](/auto-docs/variable-plugin/interfaces/ASTNodeJSON.md) = `any` |
| `InjectOpts` | `any` |

## Hierarchy

* **`ASTNode`**

  ↳ [`BaseExpression`](/auto-docs/variable-plugin/classes/BaseExpression.md)

  ↳ [`BaseType`](/auto-docs/variable-plugin/classes/BaseType.md)

  ↳ [`BaseVariableField`](/auto-docs/variable-plugin/classes/BaseVariableField.md)

  ↳ [`DataNode`](/auto-docs/variable-plugin/classes/DataNode.md)

  ↳ [`ListNode`](/auto-docs/variable-plugin/classes/ListNode.md)

  ↳ [`MapNode`](/auto-docs/variable-plugin/classes/MapNode.md)

  ↳ [`VariableDeclarationList`](/auto-docs/variable-plugin/classes/VariableDeclarationList.md)

## Implements

* `Disposable`

## Indexable

▪ \[key: `string`]: `unknown`

## Table of contents

### Constructors

* [constructor](/auto-docs/variable-plugin/classes/ASTNode.md#constructor)

### Properties

* [changeLocked](/auto-docs/variable-plugin/classes/ASTNode.md#changelocked)
* [flags](/auto-docs/variable-plugin/classes/ASTNode.md#flags)
* [key](/auto-docs/variable-plugin/classes/ASTNode.md#key)
* [onDispose](/auto-docs/variable-plugin/classes/ASTNode.md#ondispose)
* [opts](/auto-docs/variable-plugin/classes/ASTNode.md#opts)
* [parent](/auto-docs/variable-plugin/classes/ASTNode.md#parent)
* [scope](/auto-docs/variable-plugin/classes/ASTNode.md#scope)
* [toDispose](/auto-docs/variable-plugin/classes/ASTNode.md#todispose)
* [value$](/auto-docs/variable-plugin/classes/ASTNode.md#value$)
* [kind](/auto-docs/variable-plugin/classes/ASTNode.md#kind)

### Accessors

* [children](/auto-docs/variable-plugin/classes/ASTNode.md#children)
* [disposed](/auto-docs/variable-plugin/classes/ASTNode.md#disposed)
* [hash](/auto-docs/variable-plugin/classes/ASTNode.md#hash)
* [kind](/auto-docs/variable-plugin/classes/ASTNode.md#kind-1)
* [version](/auto-docs/variable-plugin/classes/ASTNode.md#version)

### Methods

* [dispatchGlobalEvent](/auto-docs/variable-plugin/classes/ASTNode.md#dispatchglobalevent)
* [dispose](/auto-docs/variable-plugin/classes/ASTNode.md#dispose)
* [fireChange](/auto-docs/variable-plugin/classes/ASTNode.md#firechange)
* [fromJSON](/auto-docs/variable-plugin/classes/ASTNode.md#fromjson)
* [subscribe](/auto-docs/variable-plugin/classes/ASTNode.md#subscribe)
* [toJSON](/auto-docs/variable-plugin/classes/ASTNode.md#tojson)

## Constructors

### constructor

**new ASTNode**<`JSON`, `InjectOpts`>(`createParams`, `opts?`)

Constructor.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `JSON` | extends [`ASTNodeJSON`](/auto-docs/variable-plugin/interfaces/ASTNodeJSON.md) = `any` |
| `InjectOpts` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `createParams` | [`CreateASTParams`](/auto-docs/variable-plugin/interfaces/CreateASTParams.md) | Necessary parameters for creating an ASTNode. |
| `opts?` | `InjectOpts` | - |

## Properties

### changeLocked

**changeLocked**: `boolean`

Update lock.

* When set to `true`, `fireChange` will not trigger any events.
* This is useful when multiple updates are needed, and you want to avoid multiple triggers.

***

### flags

`Readonly` **flags**: `number`

Node flags, used to record some flag information.

***

### key

`Readonly` **key**: `string`

The unique identifier of the ASTNode, which is **immutable**.

* Immutable: Once assigned, the key cannot be changed.
* Automatically generated if not specified, and cannot be changed as well.
* If a new key needs to be generated, the current ASTNode should be destroyed and a new ASTNode should be generated.

***

### onDispose

**onDispose**: `Event`<`void`>

Callback triggered upon disposal.

***

### opts

`Optional` `Readonly` **opts**: `InjectOpts`

**`Deprecated`**

Get the injected options for the ASTNode.

Please use `@injectToAst(XXXService) declare xxxService: XXXService` to achieve external dependency injection.

***

### parent

`Readonly` **parent**: `undefined` | [`ASTNode`](/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`>

The parent ASTNode.

***

### scope

`Readonly` **scope**: [`Scope`](/auto-docs/variable-plugin/classes/Scope.md)<`Record`<`string`, `any`>>

The scope in which the ASTNode is located.

***

### toDispose

`Readonly` **toDispose**: `DisposableCollection`

List of disposal handlers for the ASTNode.

***

### value$

`Readonly` **value$**: `BehaviorSubject`<[`ASTNode`](/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`>>

AST node change Observable events, implemented based on RxJS.

* Emits the current ASTNode value upon subscription.
* Emits a new value whenever `fireChange` is called.

***

### kind

`Static` `Readonly` **kind**: `string`

The kind of the ASTNode.

## Accessors

### children

`get` **children**(): [`ASTNode`](/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`>\[]

Gets all child ASTNodes of the current ASTNode.

#### Returns

[`ASTNode`](/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`>\[]

***

### disposed

`get` **disposed**(): `boolean`

#### Returns

`boolean`

***

### hash

`get` **hash**(): `string`

The unique hash value of the ASTNode.

* It will update when the ASTNode is updated.
* You can used to check two ASTNode are equal.

#### Returns

`string`

***

### kind

`get` **kind**(): `string`

The type of the ASTNode.

#### Returns

`string`

***

### version

`get` **version**(): `number`

The version value of the ASTNode.

* You can used to check whether ASTNode are updated.

#### Returns

`number`

## Methods

### dispatchGlobalEvent

**dispatchGlobalEvent**<`ActionType`>(`event`): `void`

Dispatches a global event for the current ASTNode.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ActionType` | extends [`GlobalEventActionType`](/auto-docs/variable-plugin/interfaces/GlobalEventActionType.md)<`string`, `any`, [`ASTNode`](/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`>, `ActionType`> = [`GlobalEventActionType`](/auto-docs/variable-plugin/interfaces/GlobalEventActionType.md)<`string`, `any`, [`ASTNode`](/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`>> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `Omit`<`ActionType`, `"ast"`> | The global event. |

#### Returns

`void`

***

### dispose

**dispose**(): `void`

Disposes the ASTNode.

#### Returns

`void`

#### Implementation of

Disposable.dispose

***

### fireChange

**fireChange**(): `void`

Triggers an update for the current node.

#### Returns

`void`

***

### fromJSON

`Abstract` **fromJSON**(`json`): `void`

Parses AST JSON data.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `json` | `JSON` | AST JSON data. |

#### Returns

`void`

***

### subscribe

**subscribe**<`Data`>(`observer`, `selector?`): `Disposable`

Listens for changes to the ASTNode.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | [`ASTNode`](/auto-docs/variable-plugin/classes/ASTNode.md)<`JSON`, `InjectOpts`> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `observer` | `ObserverOrNext`<`Data`> | The listener callback. |
| `selector?` | `SubscribeConfig`<[`ASTNode`](/auto-docs/variable-plugin/classes/ASTNode.md)<`JSON`, `InjectOpts`>, `Data`> | Listens for specified data. |

#### Returns

`Disposable`

***

### toJSON

**toJSON**(): [`ASTNodeJSON`](/auto-docs/variable-plugin/interfaces/ASTNodeJSON.md)

Serializes the current ASTNode to ASTNodeJSON.

#### Returns

[`ASTNodeJSON`](/auto-docs/variable-plugin/interfaces/ASTNodeJSON.md)
