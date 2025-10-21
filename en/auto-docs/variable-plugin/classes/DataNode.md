# Class: DataNode\<Data>

Represents a general data node with no child nodes.

## Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | `any` |

## Hierarchy

* [`ASTNode`](/en/auto-docs/variable-plugin/classes/ASTNode.md)

  ↳ **`DataNode`**

## Table of contents

### Constructors

* [constructor](/en/auto-docs/variable-plugin/classes/DataNode.md#constructor)

### Properties

* [changeLocked](/en/auto-docs/variable-plugin/classes/DataNode.md#changelocked)
* [flags](/en/auto-docs/variable-plugin/classes/DataNode.md#flags)
* [key](/en/auto-docs/variable-plugin/classes/DataNode.md#key)
* [onDispose](/en/auto-docs/variable-plugin/classes/DataNode.md#ondispose)
* [opts](/en/auto-docs/variable-plugin/classes/DataNode.md#opts)
* [parent](/en/auto-docs/variable-plugin/classes/DataNode.md#parent)
* [scope](/en/auto-docs/variable-plugin/classes/DataNode.md#scope)
* [toDispose](/en/auto-docs/variable-plugin/classes/DataNode.md#todispose)
* [value$](/en/auto-docs/variable-plugin/classes/DataNode.md#value$)
* [kind](/en/auto-docs/variable-plugin/classes/DataNode.md#kind)

### Accessors

* [children](/en/auto-docs/variable-plugin/classes/DataNode.md#children)
* [data](/en/auto-docs/variable-plugin/classes/DataNode.md#data)
* [disposed](/en/auto-docs/variable-plugin/classes/DataNode.md#disposed)
* [hash](/en/auto-docs/variable-plugin/classes/DataNode.md#hash)
* [kind](/en/auto-docs/variable-plugin/classes/DataNode.md#kind-1)
* [version](/en/auto-docs/variable-plugin/classes/DataNode.md#version)

### Methods

* [dispatchGlobalEvent](/en/auto-docs/variable-plugin/classes/DataNode.md#dispatchglobalevent)
* [dispose](/en/auto-docs/variable-plugin/classes/DataNode.md#dispose)
* [fireChange](/en/auto-docs/variable-plugin/classes/DataNode.md#firechange)
* [fromJSON](/en/auto-docs/variable-plugin/classes/DataNode.md#fromjson)
* [partialUpdate](/en/auto-docs/variable-plugin/classes/DataNode.md#partialupdate)
* [subscribe](/en/auto-docs/variable-plugin/classes/DataNode.md#subscribe)
* [toJSON](/en/auto-docs/variable-plugin/classes/DataNode.md#tojson)

## Constructors

### constructor

**new DataNode**<`Data`>(`createParams`, `opts?`)

Constructor.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `createParams` | [`CreateASTParams`](/en/auto-docs/variable-plugin/interfaces/CreateASTParams.md) | Necessary parameters for creating an ASTNode. |
| `opts?` | `any` | - |

#### Inherited from

[ASTNode](/en/auto-docs/variable-plugin/classes/ASTNode.md).[constructor](/en/auto-docs/variable-plugin/classes/ASTNode.md#constructor)

## Properties

### changeLocked

**changeLocked**: `boolean`

Update lock.

* When set to `true`, `fireChange` will not trigger any events.
* This is useful when multiple updates are needed, and you want to avoid multiple triggers.

#### Inherited from

[ASTNode](/en/auto-docs/variable-plugin/classes/ASTNode.md).[changeLocked](/en/auto-docs/variable-plugin/classes/ASTNode.md#changelocked)

***

### flags

`Readonly` **flags**: `number`

Node flags, used to record some flag information.

#### Inherited from

[ASTNode](/en/auto-docs/variable-plugin/classes/ASTNode.md).[flags](/en/auto-docs/variable-plugin/classes/ASTNode.md#flags)

***

### key

`Readonly` **key**: `string`

The unique identifier of the ASTNode, which is **immutable**.

* Immutable: Once assigned, the key cannot be changed.
* Automatically generated if not specified, and cannot be changed as well.
* If a new key needs to be generated, the current ASTNode should be destroyed and a new ASTNode should be generated.

#### Inherited from

[ASTNode](/en/auto-docs/variable-plugin/classes/ASTNode.md).[key](/en/auto-docs/variable-plugin/classes/ASTNode.md#key)

***

### onDispose

**onDispose**: `Event`<`void`>

Callback triggered upon disposal.

#### Inherited from

[ASTNode](/en/auto-docs/variable-plugin/classes/ASTNode.md).[onDispose](/en/auto-docs/variable-plugin/classes/ASTNode.md#ondispose)

***

### opts

`Optional` `Readonly` **opts**: `any`

**`Deprecated`**

Get the injected options for the ASTNode.

Please use `@injectToAst(XXXService) declare xxxService: XXXService` to achieve external dependency injection.

#### Inherited from

[ASTNode](/en/auto-docs/variable-plugin/classes/ASTNode.md).[opts](/en/auto-docs/variable-plugin/classes/ASTNode.md#opts)

***

### parent

`Readonly` **parent**: `undefined` | [`ASTNode`](/en/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`>

The parent ASTNode.

#### Inherited from

[ASTNode](/en/auto-docs/variable-plugin/classes/ASTNode.md).[parent](/en/auto-docs/variable-plugin/classes/ASTNode.md#parent)

***

### scope

`Readonly` **scope**: [`Scope`](/en/auto-docs/variable-plugin/classes/Scope.md)<`Record`<`string`, `any`>>

The scope in which the ASTNode is located.

#### Inherited from

[ASTNode](/en/auto-docs/variable-plugin/classes/ASTNode.md).[scope](/en/auto-docs/variable-plugin/classes/ASTNode.md#scope)

***

### toDispose

`Readonly` **toDispose**: `DisposableCollection`

List of disposal handlers for the ASTNode.

#### Inherited from

[ASTNode](/en/auto-docs/variable-plugin/classes/ASTNode.md).[toDispose](/en/auto-docs/variable-plugin/classes/ASTNode.md#todispose)

***

### value$

`Readonly` **value$**: `BehaviorSubject`<[`ASTNode`](/en/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`>>

AST node change Observable events, implemented based on RxJS.

* Emits the current ASTNode value upon subscription.
* Emits a new value whenever `fireChange` is called.

#### Inherited from

[ASTNode](/en/auto-docs/variable-plugin/classes/ASTNode.md).[value$](/en/auto-docs/variable-plugin/classes/ASTNode.md#value$)

***

### kind

`Static` **kind**: `string`

The kind of the ASTNode.

#### Overrides

[ASTNode](/en/auto-docs/variable-plugin/classes/ASTNode.md).[kind](/en/auto-docs/variable-plugin/classes/ASTNode.md#kind)

## Accessors

### children

`get` **children**(): [`ASTNode`](/en/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`>\[]

Gets all child ASTNodes of the current ASTNode.

#### Returns

[`ASTNode`](/en/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`>\[]

#### Inherited from

ASTNode.children

***

### data

`get` **data**(): `Data`

The data of the node.

#### Returns

`Data`

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
| `ActionType` | extends [`GlobalEventActionType`](/en/auto-docs/variable-plugin/interfaces/GlobalEventActionType.md)<`string`, `any`, [`ASTNode`](/en/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`>, `ActionType`> = [`GlobalEventActionType`](/en/auto-docs/variable-plugin/interfaces/GlobalEventActionType.md)<`string`, `any`, [`ASTNode`](/en/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`>> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `Omit`<`ActionType`, `"ast"`> | The global event. |

#### Returns

`void`

#### Inherited from

[ASTNode](/en/auto-docs/variable-plugin/classes/ASTNode.md).[dispatchGlobalEvent](/en/auto-docs/variable-plugin/classes/ASTNode.md#dispatchglobalevent)

***

### dispose

**dispose**(): `void`

Disposes the ASTNode.

#### Returns

`void`

#### Inherited from

[ASTNode](/en/auto-docs/variable-plugin/classes/ASTNode.md).[dispose](/en/auto-docs/variable-plugin/classes/ASTNode.md#dispose)

***

### fireChange

**fireChange**(): `void`

Triggers an update for the current node.

#### Returns

`void`

#### Inherited from

[ASTNode](/en/auto-docs/variable-plugin/classes/ASTNode.md).[fireChange](/en/auto-docs/variable-plugin/classes/ASTNode.md#firechange)

***

### fromJSON

**fromJSON**(`json`): `void`

Deserializes the `DataNodeJSON` to the `DataNode`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `json` | `Data` | The `DataNodeJSON` to deserialize. |

#### Returns

`void`

#### Overrides

[ASTNode](/en/auto-docs/variable-plugin/classes/ASTNode.md).[fromJSON](/en/auto-docs/variable-plugin/classes/ASTNode.md#fromjson)

***

### partialUpdate

**partialUpdate**(`nextData`): `void`

Partially update the data of the node.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nextData` | `Data` | The data to be updated. |

#### Returns

`void`

***

### subscribe

**subscribe**<`Data`>(`observer`, `selector?`): `Disposable`

Listens for changes to the ASTNode.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | [`DataNode`](/en/auto-docs/variable-plugin/classes/DataNode.md)<`Data`> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `observer` | `ObserverOrNext`<`Data`> | The listener callback. |
| `selector?` | `SubscribeConfig`<[`DataNode`](/en/auto-docs/variable-plugin/classes/DataNode.md)<`Data`>, `Data`> | Listens for specified data. |

#### Returns

`Disposable`

#### Inherited from

[ASTNode](/en/auto-docs/variable-plugin/classes/ASTNode.md).[subscribe](/en/auto-docs/variable-plugin/classes/ASTNode.md#subscribe)

***

### toJSON

**toJSON**(): { `kind`: [`ASTKind`](/en/auto-docs/variable-plugin/enums/ASTKind.md)  } & `Data`

Serialize the `DataNode` to `DataNodeJSON`.

#### Returns

{ `kind`: [`ASTKind`](/en/auto-docs/variable-plugin/enums/ASTKind.md)  } & `Data`

The JSON representation of `DataNode`.

#### Overrides

[ASTNode](/en/auto-docs/variable-plugin/classes/ASTNode.md).[toJSON](/en/auto-docs/variable-plugin/classes/ASTNode.md#tojson)
