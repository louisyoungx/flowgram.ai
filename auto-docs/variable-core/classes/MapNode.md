# Class: MapNode

Represents a map of nodes.

## Hierarchy

* [`ASTNode`](/auto-docs/variable-core/classes/ASTNode.md)<[`MapNodeJSON`](/auto-docs/variable-core/interfaces/MapNodeJSON.md)>

  ↳ **`MapNode`**

## Table of contents

### Constructors

* [constructor](/auto-docs/variable-core/classes/MapNode.md#constructor)

### Properties

* [changeLocked](/auto-docs/variable-core/classes/MapNode.md#changelocked)
* [flags](/auto-docs/variable-core/classes/MapNode.md#flags)
* [key](/auto-docs/variable-core/classes/MapNode.md#key)
* [onDispose](/auto-docs/variable-core/classes/MapNode.md#ondispose)
* [opts](/auto-docs/variable-core/classes/MapNode.md#opts)
* [parent](/auto-docs/variable-core/classes/MapNode.md#parent)
* [scope](/auto-docs/variable-core/classes/MapNode.md#scope)
* [toDispose](/auto-docs/variable-core/classes/MapNode.md#todispose)
* [value$](/auto-docs/variable-core/classes/MapNode.md#value$)
* [kind](/auto-docs/variable-core/classes/MapNode.md#kind)

### Accessors

* [children](/auto-docs/variable-core/classes/MapNode.md#children)
* [disposed](/auto-docs/variable-core/classes/MapNode.md#disposed)
* [hash](/auto-docs/variable-core/classes/MapNode.md#hash)
* [kind](/auto-docs/variable-core/classes/MapNode.md#kind-1)
* [version](/auto-docs/variable-core/classes/MapNode.md#version)

### Methods

* [dispatchGlobalEvent](/auto-docs/variable-core/classes/MapNode.md#dispatchglobalevent)
* [dispose](/auto-docs/variable-core/classes/MapNode.md#dispose)
* [fireChange](/auto-docs/variable-core/classes/MapNode.md#firechange)
* [fromJSON](/auto-docs/variable-core/classes/MapNode.md#fromjson)
* [get](/auto-docs/variable-core/classes/MapNode.md#get)
* [remove](/auto-docs/variable-core/classes/MapNode.md#remove)
* [set](/auto-docs/variable-core/classes/MapNode.md#set)
* [subscribe](/auto-docs/variable-core/classes/MapNode.md#subscribe)
* [toJSON](/auto-docs/variable-core/classes/MapNode.md#tojson)

## Constructors

### constructor

**new MapNode**(`createParams`, `opts?`)

Constructor.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `createParams` | [`CreateASTParams`](/auto-docs/variable-core/interfaces/CreateASTParams.md) | Necessary parameters for creating an ASTNode. |
| `opts?` | `any` | - |

#### Inherited from

[ASTNode](/auto-docs/variable-core/classes/ASTNode.md).[constructor](/auto-docs/variable-core/classes/ASTNode.md#constructor)

## Properties

### changeLocked

**changeLocked**: `boolean` = `false`

Update lock.

* When set to `true`, `fireChange` will not trigger any events.
* This is useful when multiple updates are needed, and you want to avoid multiple triggers.

#### Inherited from

[ASTNode](/auto-docs/variable-core/classes/ASTNode.md).[changeLocked](/auto-docs/variable-core/classes/ASTNode.md#changelocked)

***

### flags

`Readonly` **flags**: `number` = `ASTNodeFlags.None`

Node flags, used to record some flag information.

#### Inherited from

[ASTNode](/auto-docs/variable-core/classes/ASTNode.md).[flags](/auto-docs/variable-core/classes/ASTNode.md#flags)

***

### key

`Readonly` **key**: `string`

The unique identifier of the ASTNode, which is **immutable**.

* Immutable: Once assigned, the key cannot be changed.
* Automatically generated if not specified, and cannot be changed as well.
* If a new key needs to be generated, the current ASTNode should be destroyed and a new ASTNode should be generated.

#### Inherited from

[ASTNode](/auto-docs/variable-core/classes/ASTNode.md).[key](/auto-docs/variable-core/classes/ASTNode.md#key)

***

### onDispose

**onDispose**: `Event`<`void`>

Callback triggered upon disposal.

#### Inherited from

[ASTNode](/auto-docs/variable-core/classes/ASTNode.md).[onDispose](/auto-docs/variable-core/classes/ASTNode.md#ondispose)

***

### opts

`Optional` `Readonly` **opts**: `any`

**`Deprecated`**

Get the injected options for the ASTNode.

Please use `@injectToAst(XXXService) declare xxxService: XXXService` to achieve external dependency injection.

#### Inherited from

[ASTNode](/auto-docs/variable-core/classes/ASTNode.md).[opts](/auto-docs/variable-core/classes/ASTNode.md#opts)

***

### parent

`Readonly` **parent**: `undefined` | [`ASTNode`](/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`>

The parent ASTNode.

#### Inherited from

[ASTNode](/auto-docs/variable-core/classes/ASTNode.md).[parent](/auto-docs/variable-core/classes/ASTNode.md#parent)

***

### scope

`Readonly` **scope**: [`Scope`](/auto-docs/variable-core/classes/Scope.md)<`Record`<`string`, `any`>>

The scope in which the ASTNode is located.

#### Inherited from

[ASTNode](/auto-docs/variable-core/classes/ASTNode.md).[scope](/auto-docs/variable-core/classes/ASTNode.md#scope)

***

### toDispose

`Readonly` **toDispose**: `DisposableCollection`

List of disposal handlers for the ASTNode.

#### Inherited from

[ASTNode](/auto-docs/variable-core/classes/ASTNode.md).[toDispose](/auto-docs/variable-core/classes/ASTNode.md#todispose)

***

### value$

`Readonly` **value$**: `BehaviorSubject`<[`ASTNode`](/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`>>

AST node change Observable events, implemented based on RxJS.

* Emits the current ASTNode value upon subscription.
* Emits a new value whenever `fireChange` is called.

#### Inherited from

[ASTNode](/auto-docs/variable-core/classes/ASTNode.md).[value$](/auto-docs/variable-core/classes/ASTNode.md#value$)

***

### kind

`Static` **kind**: `string` = `ASTKind.MapNode`

The kind of the ASTNode.

#### Overrides

[ASTNode](/auto-docs/variable-core/classes/ASTNode.md).[kind](/auto-docs/variable-core/classes/ASTNode.md#kind)

## Accessors

### children

`get` **children**(): [`ASTNode`](/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`>\[]

Gets all child ASTNodes of the current ASTNode.

#### Returns

[`ASTNode`](/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`>\[]

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
| `ActionType` | extends [`GlobalEventActionType`](/auto-docs/variable-core/interfaces/GlobalEventActionType.md)<`string`, `any`, [`ASTNode`](/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`>, `ActionType`> = [`GlobalEventActionType`](/auto-docs/variable-core/interfaces/GlobalEventActionType.md)<`string`, `any`, [`ASTNode`](/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`>> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `Omit`<`ActionType`, `"ast"`> | The global event. |

#### Returns

`void`

#### Inherited from

[ASTNode](/auto-docs/variable-core/classes/ASTNode.md).[dispatchGlobalEvent](/auto-docs/variable-core/classes/ASTNode.md#dispatchglobalevent)

***

### dispose

**dispose**(): `void`

Disposes the ASTNode.

#### Returns

`void`

#### Inherited from

[ASTNode](/auto-docs/variable-core/classes/ASTNode.md).[dispose](/auto-docs/variable-core/classes/ASTNode.md#dispose)

***

### fireChange

**fireChange**(): `void`

Triggers an update for the current node.

#### Returns

`void`

#### Inherited from

[ASTNode](/auto-docs/variable-core/classes/ASTNode.md).[fireChange](/auto-docs/variable-core/classes/ASTNode.md#firechange)

***

### fromJSON

**fromJSON**(`json`): `void`

Deserializes the `MapNodeJSON` to the `MapNode`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `json` | [`MapNodeJSON`](/auto-docs/variable-core/interfaces/MapNodeJSON.md) | The `MapNodeJSON` to deserialize. |

#### Returns

`void`

#### Overrides

[ASTNode](/auto-docs/variable-core/classes/ASTNode.md).[fromJSON](/auto-docs/variable-core/classes/ASTNode.md#fromjson)

***

### get

**get**<`Node`>(`key`): `undefined` | `Node`

Get a node from the map.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Node` | extends [`ASTNode`](/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`, `Node`> = [`ASTNode`](/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The key of the node. |

#### Returns

`undefined` | `Node`

The node instance if found, otherwise `undefined`.

***

### remove

**remove**(`key`): `void`

Remove a node from the map.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The key of the node. |

#### Returns

`void`

***

### set

**set**<`Node`>(`key`, `nextJSON`): `Node`

Set a node in the map.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Node` | extends [`ASTNode`](/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`, `Node`> = [`ASTNode`](/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The key of the node. |
| `nextJSON` | [`ASTNodeJSON`](/auto-docs/variable-core/interfaces/ASTNodeJSON.md) | The JSON representation of the node. |

#### Returns

`Node`

The node instance.

***

### subscribe

**subscribe**<`Data`>(`observer`, `selector?`): `Disposable`

Listens for changes to the ASTNode.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | [`MapNode`](/auto-docs/variable-core/classes/MapNode.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `observer` | `ObserverOrNext`<`Data`> | The listener callback. |
| `selector` | `SubscribeConfig`<[`MapNode`](/auto-docs/variable-core/classes/MapNode.md), `Data`> | Listens for specified data. |

#### Returns

`Disposable`

#### Inherited from

[ASTNode](/auto-docs/variable-core/classes/ASTNode.md).[subscribe](/auto-docs/variable-core/classes/ASTNode.md#subscribe)

***

### toJSON

**toJSON**(): [`ASTNodeJSON`](/auto-docs/variable-core/interfaces/ASTNodeJSON.md)

Serialize the `MapNode` to `MapNodeJSON`.

#### Returns

[`ASTNodeJSON`](/auto-docs/variable-core/interfaces/ASTNodeJSON.md)

The JSON representation of `MapNode`.

#### Overrides

[ASTNode](/auto-docs/variable-core/classes/ASTNode.md).[toJSON](/auto-docs/variable-core/classes/ASTNode.md#tojson)
