# Class: ListNode

Represents a list of nodes.

## Hierarchy

* [`ASTNode`](/auto-docs/fixed-layout-editor/classes/ASTNode.md)<[`ListNodeJSON`](/auto-docs/fixed-layout-editor/interfaces/ListNodeJSON.md)>

  ↳ **`ListNode`**

## Table of contents

### Constructors

* [constructor](/auto-docs/fixed-layout-editor/classes/ListNode.md#constructor)

### Properties

* [changeLocked](/auto-docs/fixed-layout-editor/classes/ListNode.md#changelocked)
* [flags](/auto-docs/fixed-layout-editor/classes/ListNode.md#flags)
* [key](/auto-docs/fixed-layout-editor/classes/ListNode.md#key)
* [onDispose](/auto-docs/fixed-layout-editor/classes/ListNode.md#ondispose)
* [opts](/auto-docs/fixed-layout-editor/classes/ListNode.md#opts)
* [parent](/auto-docs/fixed-layout-editor/classes/ListNode.md#parent)
* [scope](/auto-docs/fixed-layout-editor/classes/ListNode.md#scope)
* [toDispose](/auto-docs/fixed-layout-editor/classes/ListNode.md#todispose)
* [value$](/auto-docs/fixed-layout-editor/classes/ListNode.md#value$)
* [kind](/auto-docs/fixed-layout-editor/classes/ListNode.md#kind)

### Accessors

* [children](/auto-docs/fixed-layout-editor/classes/ListNode.md#children)
* [disposed](/auto-docs/fixed-layout-editor/classes/ListNode.md#disposed)
* [hash](/auto-docs/fixed-layout-editor/classes/ListNode.md#hash)
* [kind](/auto-docs/fixed-layout-editor/classes/ListNode.md#kind-1)
* [list](/auto-docs/fixed-layout-editor/classes/ListNode.md#list)
* [version](/auto-docs/fixed-layout-editor/classes/ListNode.md#version)

### Methods

* [dispatchGlobalEvent](/auto-docs/fixed-layout-editor/classes/ListNode.md#dispatchglobalevent)
* [dispose](/auto-docs/fixed-layout-editor/classes/ListNode.md#dispose)
* [fireChange](/auto-docs/fixed-layout-editor/classes/ListNode.md#firechange)
* [fromJSON](/auto-docs/fixed-layout-editor/classes/ListNode.md#fromjson)
* [subscribe](/auto-docs/fixed-layout-editor/classes/ListNode.md#subscribe)
* [toJSON](/auto-docs/fixed-layout-editor/classes/ListNode.md#tojson)

## Constructors

### constructor

**new ListNode**(`createParams`, `opts?`)

Constructor.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `createParams` | [`CreateASTParams`](/auto-docs/fixed-layout-editor/interfaces/CreateASTParams.md) | Necessary parameters for creating an ASTNode. |
| `opts?` | `any` | - |

#### Inherited from

[ASTNode](/auto-docs/fixed-layout-editor/classes/ASTNode.md).[constructor](/auto-docs/fixed-layout-editor/classes/ASTNode.md#constructor)

## Properties

### changeLocked

**changeLocked**: `boolean`

Update lock.

* When set to `true`, `fireChange` will not trigger any events.
* This is useful when multiple updates are needed, and you want to avoid multiple triggers.

#### Inherited from

[ASTNode](/auto-docs/fixed-layout-editor/classes/ASTNode.md).[changeLocked](/auto-docs/fixed-layout-editor/classes/ASTNode.md#changelocked)

***

### flags

`Readonly` **flags**: `number`

Node flags, used to record some flag information.

#### Inherited from

[ASTNode](/auto-docs/fixed-layout-editor/classes/ASTNode.md).[flags](/auto-docs/fixed-layout-editor/classes/ASTNode.md#flags)

***

### key

`Readonly` **key**: `string`

The unique identifier of the ASTNode, which is **immutable**.

* Immutable: Once assigned, the key cannot be changed.
* Automatically generated if not specified, and cannot be changed as well.
* If a new key needs to be generated, the current ASTNode should be destroyed and a new ASTNode should be generated.

#### Inherited from

[ASTNode](/auto-docs/fixed-layout-editor/classes/ASTNode.md).[key](/auto-docs/fixed-layout-editor/classes/ASTNode.md#key)

***

### onDispose

**onDispose**: [`Event`](/auto-docs/fixed-layout-editor/interfaces/Event-1.md)<`void`>

Callback triggered upon disposal.

#### Inherited from

[ASTNode](/auto-docs/fixed-layout-editor/classes/ASTNode.md).[onDispose](/auto-docs/fixed-layout-editor/classes/ASTNode.md#ondispose)

***

### opts

`Optional` `Readonly` **opts**: `any`

**`Deprecated`**

Get the injected options for the ASTNode.

Please use `@injectToAst(XXXService) declare xxxService: XXXService` to achieve external dependency injection.

#### Inherited from

[ASTNode](/auto-docs/fixed-layout-editor/classes/ASTNode.md).[opts](/auto-docs/fixed-layout-editor/classes/ASTNode.md#opts)

***

### parent

`Readonly` **parent**: `undefined` | [`ASTNode`](/auto-docs/fixed-layout-editor/classes/ASTNode.md)<`any`, `any`>

The parent ASTNode.

#### Inherited from

[ASTNode](/auto-docs/fixed-layout-editor/classes/ASTNode.md).[parent](/auto-docs/fixed-layout-editor/classes/ASTNode.md#parent)

***

### scope

`Readonly` **scope**: [`Scope`](/auto-docs/fixed-layout-editor/classes/Scope.md)<`Record`<`string`, `any`>>

The scope in which the ASTNode is located.

#### Inherited from

[ASTNode](/auto-docs/fixed-layout-editor/classes/ASTNode.md).[scope](/auto-docs/fixed-layout-editor/classes/ASTNode.md#scope)

***

### toDispose

`Readonly` **toDispose**: [`DisposableCollection`](/auto-docs/fixed-layout-editor/classes/DisposableCollection.md)

List of disposal handlers for the ASTNode.

#### Inherited from

[ASTNode](/auto-docs/fixed-layout-editor/classes/ASTNode.md).[toDispose](/auto-docs/fixed-layout-editor/classes/ASTNode.md#todispose)

***

### value$

`Readonly` **value$**: `BehaviorSubject`<[`ASTNode`](/auto-docs/fixed-layout-editor/classes/ASTNode.md)<`any`, `any`>>

AST node change Observable events, implemented based on RxJS.

* Emits the current ASTNode value upon subscription.
* Emits a new value whenever `fireChange` is called.

#### Inherited from

[ASTNode](/auto-docs/fixed-layout-editor/classes/ASTNode.md).[value$](/auto-docs/fixed-layout-editor/classes/ASTNode.md#value$)

***

### kind

`Static` **kind**: `string`

The kind of the ASTNode.

#### Overrides

[ASTNode](/auto-docs/fixed-layout-editor/classes/ASTNode.md).[kind](/auto-docs/fixed-layout-editor/classes/ASTNode.md#kind)

## Accessors

### children

`get` **children**(): [`ASTNode`](/auto-docs/fixed-layout-editor/classes/ASTNode.md)<`any`, `any`>\[]

Gets all child ASTNodes of the current ASTNode.

#### Returns

[`ASTNode`](/auto-docs/fixed-layout-editor/classes/ASTNode.md)<`any`, `any`>\[]

#### Inherited from

ASTNode.children

***

### disposed

`get` **disposed**(): `boolean`

#### Returns

`boolean`

#### Inherited from

ASTNode.disposed

***

### hash

`get` **hash**(): `string`

The unique hash value of the ASTNode.

* It will update when the ASTNode is updated.
* You can used to check two ASTNode are equal.

#### Returns

`string`

#### Inherited from

ASTNode.hash

***

### kind

`get` **kind**(): `string`

The type of the ASTNode.

#### Returns

`string`

#### Inherited from

ASTNode.kind

***

### list

`get` **list**(): [`ASTNode`](/auto-docs/fixed-layout-editor/classes/ASTNode.md)<`any`, `any`>\[]

The list of nodes.

#### Returns

[`ASTNode`](/auto-docs/fixed-layout-editor/classes/ASTNode.md)<`any`, `any`>\[]

***

### version

`get` **version**(): `number`

The version value of the ASTNode.

* You can used to check whether ASTNode are updated.

#### Returns

`number`

#### Inherited from

ASTNode.version

## Methods

### dispatchGlobalEvent

**dispatchGlobalEvent**<`ActionType`>(`event`): `void`

Dispatches a global event for the current ASTNode.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ActionType` | extends [`GlobalEventActionType`](/auto-docs/fixed-layout-editor/interfaces/GlobalEventActionType.md)<`string`, `any`, [`ASTNode`](/auto-docs/fixed-layout-editor/classes/ASTNode.md)<`any`, `any`>, `ActionType`> = [`GlobalEventActionType`](/auto-docs/fixed-layout-editor/interfaces/GlobalEventActionType.md)<`string`, `any`, [`ASTNode`](/auto-docs/fixed-layout-editor/classes/ASTNode.md)<`any`, `any`>> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `Omit`<`ActionType`, `"ast"`> | The global event. |

#### Returns

`void`

#### Inherited from

[ASTNode](/auto-docs/fixed-layout-editor/classes/ASTNode.md).[dispatchGlobalEvent](/auto-docs/fixed-layout-editor/classes/ASTNode.md#dispatchglobalevent)

***

### dispose

**dispose**(): `void`

Disposes the ASTNode.

#### Returns

`void`

#### Inherited from

[ASTNode](/auto-docs/fixed-layout-editor/classes/ASTNode.md).[dispose](/auto-docs/fixed-layout-editor/classes/ASTNode.md#dispose)

***

### fireChange

**fireChange**(): `void`

Triggers an update for the current node.

#### Returns

`void`

#### Inherited from

[ASTNode](/auto-docs/fixed-layout-editor/classes/ASTNode.md).[fireChange](/auto-docs/fixed-layout-editor/classes/ASTNode.md#firechange)

***

### fromJSON

**fromJSON**(`json`): `void`

Deserializes the `ListNodeJSON` to the `ListNode`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `json` | [`ListNodeJSON`](/auto-docs/fixed-layout-editor/interfaces/ListNodeJSON.md) | The `ListNodeJSON` to deserialize. |

#### Returns

`void`

#### Overrides

[ASTNode](/auto-docs/fixed-layout-editor/classes/ASTNode.md).[fromJSON](/auto-docs/fixed-layout-editor/classes/ASTNode.md#fromjson)

***

### subscribe

**subscribe**<`Data`>(`observer`, `selector?`): [`Disposable`](/auto-docs/fixed-layout-editor/interfaces/Disposable-1.md)

Listens for changes to the ASTNode.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | [`ListNode`](/auto-docs/fixed-layout-editor/classes/ListNode.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `observer` | `ObserverOrNext`<`Data`> | The listener callback. |
| `selector?` | `SubscribeConfig`<[`ListNode`](/auto-docs/fixed-layout-editor/classes/ListNode.md), `Data`> | Listens for specified data. |

#### Returns

[`Disposable`](/auto-docs/fixed-layout-editor/interfaces/Disposable-1.md)

#### Inherited from

[ASTNode](/auto-docs/fixed-layout-editor/classes/ASTNode.md).[subscribe](/auto-docs/fixed-layout-editor/classes/ASTNode.md#subscribe)

***

### toJSON

**toJSON**(): [`ASTNodeJSON`](/auto-docs/fixed-layout-editor/interfaces/ASTNodeJSON.md)

Serialize the `ListNode` to `ListNodeJSON`.

#### Returns

[`ASTNodeJSON`](/auto-docs/fixed-layout-editor/interfaces/ASTNodeJSON.md)

The JSON representation of `ListNode`.

#### Overrides

[ASTNode](/auto-docs/fixed-layout-editor/classes/ASTNode.md).[toJSON](/auto-docs/fixed-layout-editor/classes/ASTNode.md#tojson)
