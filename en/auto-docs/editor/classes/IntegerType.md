# Class: IntegerType

Represents an integer type.

## Hierarchy

* [`BaseType`](/en/auto-docs/editor/classes/BaseType.md)

  ↳ **`IntegerType`**

## Table of contents

### Constructors

* [constructor](/en/auto-docs/editor/classes/IntegerType.md#constructor)

### Properties

* [changeLocked](/en/auto-docs/editor/classes/IntegerType.md#changelocked)
* [flags](/en/auto-docs/editor/classes/IntegerType.md#flags)
* [key](/en/auto-docs/editor/classes/IntegerType.md#key)
* [onDispose](/en/auto-docs/editor/classes/IntegerType.md#ondispose)
* [opts](/en/auto-docs/editor/classes/IntegerType.md#opts)
* [parent](/en/auto-docs/editor/classes/IntegerType.md#parent)
* [scope](/en/auto-docs/editor/classes/IntegerType.md#scope)
* [toDispose](/en/auto-docs/editor/classes/IntegerType.md#todispose)
* [value$](/en/auto-docs/editor/classes/IntegerType.md#value$)
* [kind](/en/auto-docs/editor/classes/IntegerType.md#kind)

### Accessors

* [children](/en/auto-docs/editor/classes/IntegerType.md#children)
* [disposed](/en/auto-docs/editor/classes/IntegerType.md#disposed)
* [hash](/en/auto-docs/editor/classes/IntegerType.md#hash)
* [kind](/en/auto-docs/editor/classes/IntegerType.md#kind-1)
* [version](/en/auto-docs/editor/classes/IntegerType.md#version)

### Methods

* [dispatchGlobalEvent](/en/auto-docs/editor/classes/IntegerType.md#dispatchglobalevent)
* [dispose](/en/auto-docs/editor/classes/IntegerType.md#dispose)
* [fireChange](/en/auto-docs/editor/classes/IntegerType.md#firechange)
* [fromJSON](/en/auto-docs/editor/classes/IntegerType.md#fromjson)
* [getByKeyPath](/en/auto-docs/editor/classes/IntegerType.md#getbykeypath)
* [isTypeEqual](/en/auto-docs/editor/classes/IntegerType.md#istypeequal)
* [subscribe](/en/auto-docs/editor/classes/IntegerType.md#subscribe)
* [toJSON](/en/auto-docs/editor/classes/IntegerType.md#tojson)

## Constructors

### constructor

**new IntegerType**(`createParams`, `opts?`)

Constructor.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `createParams` | [`CreateASTParams`](/en/auto-docs/editor/interfaces/CreateASTParams.md) | Necessary parameters for creating an ASTNode. |
| `opts?` | `any` | - |

#### Inherited from

[BaseType](/en/auto-docs/editor/classes/BaseType.md).[constructor](/en/auto-docs/editor/classes/BaseType.md#constructor)

## Properties

### changeLocked

**changeLocked**: `boolean`

Update lock.

* When set to `true`, `fireChange` will not trigger any events.
* This is useful when multiple updates are needed, and you want to avoid multiple triggers.

#### Inherited from

[BaseType](/en/auto-docs/editor/classes/BaseType.md).[changeLocked](/en/auto-docs/editor/classes/BaseType.md#changelocked)

***

### flags

**flags**: [`ASTNodeFlags`](/en/auto-docs/editor/enums/ASTNodeFlags.md)

Node flags, used to record some flag information.

#### Overrides

[BaseType](/en/auto-docs/editor/classes/BaseType.md).[flags](/en/auto-docs/editor/classes/BaseType.md#flags)

***

### key

`Readonly` **key**: `string`

The unique identifier of the ASTNode, which is **immutable**.

* Immutable: Once assigned, the key cannot be changed.
* Automatically generated if not specified, and cannot be changed as well.
* If a new key needs to be generated, the current ASTNode should be destroyed and a new ASTNode should be generated.

#### Inherited from

[BaseType](/en/auto-docs/editor/classes/BaseType.md).[key](/en/auto-docs/editor/classes/BaseType.md#key)

***

### onDispose

**onDispose**: [`Event`](/en/auto-docs/editor/interfaces/Event-1.md)<`void`>

Callback triggered upon disposal.

#### Inherited from

[BaseType](/en/auto-docs/editor/classes/BaseType.md).[onDispose](/en/auto-docs/editor/classes/BaseType.md#ondispose)

***

### opts

`Optional` `Readonly` **opts**: `any`

**`Deprecated`**

Get the injected options for the ASTNode.

Please use `@injectToAst(XXXService) declare xxxService: XXXService` to achieve external dependency injection.

#### Inherited from

[BaseType](/en/auto-docs/editor/classes/BaseType.md).[opts](/en/auto-docs/editor/classes/BaseType.md#opts)

***

### parent

`Readonly` **parent**: `undefined` | [`ASTNode`](/en/auto-docs/editor/classes/ASTNode.md)<`any`, `any`>

The parent ASTNode.

#### Inherited from

[BaseType](/en/auto-docs/editor/classes/BaseType.md).[parent](/en/auto-docs/editor/classes/BaseType.md#parent)

***

### scope

`Readonly` **scope**: [`Scope`](/en/auto-docs/editor/classes/Scope.md)<`Record`<`string`, `any`>>

The scope in which the ASTNode is located.

#### Inherited from

[BaseType](/en/auto-docs/editor/classes/BaseType.md).[scope](/en/auto-docs/editor/classes/BaseType.md#scope)

***

### toDispose

`Readonly` **toDispose**: [`DisposableCollection`](/en/auto-docs/editor/classes/DisposableCollection.md)

List of disposal handlers for the ASTNode.

#### Inherited from

[BaseType](/en/auto-docs/editor/classes/BaseType.md).[toDispose](/en/auto-docs/editor/classes/BaseType.md#todispose)

***

### value$

`Readonly` **value$**: `BehaviorSubject`<[`ASTNode`](/en/auto-docs/editor/classes/ASTNode.md)<`any`, `any`>>

AST node change Observable events, implemented based on RxJS.

* Emits the current ASTNode value upon subscription.
* Emits a new value whenever `fireChange` is called.

#### Inherited from

[BaseType](/en/auto-docs/editor/classes/BaseType.md).[value$](/en/auto-docs/editor/classes/BaseType.md#value$)

***

### kind

`Static` **kind**: `string`

The kind of the ASTNode.

#### Overrides

[BaseType](/en/auto-docs/editor/classes/BaseType.md).[kind](/en/auto-docs/editor/classes/BaseType.md#kind)

## Accessors

### children

`get` **children**(): [`ASTNode`](/en/auto-docs/editor/classes/ASTNode.md)<`any`, `any`>\[]

Gets all child ASTNodes of the current ASTNode.

#### Returns

[`ASTNode`](/en/auto-docs/editor/classes/ASTNode.md)<`any`, `any`>\[]

#### Inherited from

BaseType.children

***

### disposed

`get` **disposed**(): `boolean`

#### Returns

`boolean`

#### Inherited from

BaseType.disposed

***

### hash

`get` **hash**(): `string`

The unique hash value of the ASTNode.

* It will update when the ASTNode is updated.
* You can used to check two ASTNode are equal.

#### Returns

`string`

#### Inherited from

BaseType.hash

***

### kind

`get` **kind**(): `string`

The type of the ASTNode.

#### Returns

`string`

#### Inherited from

BaseType.kind

***

### version

`get` **version**(): `number`

The version value of the ASTNode.

* You can used to check whether ASTNode are updated.

#### Returns

`number`

#### Inherited from

BaseType.version

## Methods

### dispatchGlobalEvent

**dispatchGlobalEvent**<`ActionType`>(`event`): `void`

Dispatches a global event for the current ASTNode.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ActionType` | extends [`GlobalEventActionType`](/en/auto-docs/editor/interfaces/GlobalEventActionType.md)<`string`, `any`, [`ASTNode`](/en/auto-docs/editor/classes/ASTNode.md)<`any`, `any`>, `ActionType`> = [`GlobalEventActionType`](/en/auto-docs/editor/interfaces/GlobalEventActionType.md)<`string`, `any`, [`ASTNode`](/en/auto-docs/editor/classes/ASTNode.md)<`any`, `any`>> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `Omit`<`ActionType`, `"ast"`> | The global event. |

#### Returns

`void`

#### Inherited from

[BaseType](/en/auto-docs/editor/classes/BaseType.md).[dispatchGlobalEvent](/en/auto-docs/editor/classes/BaseType.md#dispatchglobalevent)

***

### dispose

**dispose**(): `void`

Disposes the ASTNode.

#### Returns

`void`

#### Inherited from

[BaseType](/en/auto-docs/editor/classes/BaseType.md).[dispose](/en/auto-docs/editor/classes/BaseType.md#dispose)

***

### fireChange

**fireChange**(): `void`

Triggers an update for the current node.

#### Returns

`void`

#### Inherited from

[BaseType](/en/auto-docs/editor/classes/BaseType.md).[fireChange](/en/auto-docs/editor/classes/BaseType.md#firechange)

***

### fromJSON

**fromJSON**(): `void`

Deserializes the `IntegerJSON` to the `IntegerType`.

#### Returns

`void`

#### Overrides

[BaseType](/en/auto-docs/editor/classes/BaseType.md).[fromJSON](/en/auto-docs/editor/classes/BaseType.md#fromjson)

***

### getByKeyPath

**getByKeyPath**(`keyPath?`): `undefined` | [`BaseVariableField`](/en/auto-docs/editor/classes/BaseVariableField.md)<`any`>

Get a variable field by key path.

This method should be implemented by drillable types.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `keyPath?` | `string`\[] | The key path to search for. |

#### Returns

`undefined` | [`BaseVariableField`](/en/auto-docs/editor/classes/BaseVariableField.md)<`any`>

The variable field if found, otherwise `undefined`.

#### Inherited from

[BaseType](/en/auto-docs/editor/classes/BaseType.md).[getByKeyPath](/en/auto-docs/editor/classes/BaseType.md#getbykeypath)

***

### isTypeEqual

**isTypeEqual**(`targetTypeJSONOrKind?`): `boolean`

Check if the current type is equal to the target type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `targetTypeJSONOrKind?` | `ASTNodeJSONOrKind` | The type to compare with. |

#### Returns

`boolean`

`true` if the types are equal, `false` otherwise.

#### Inherited from

[BaseType](/en/auto-docs/editor/classes/BaseType.md).[isTypeEqual](/en/auto-docs/editor/classes/BaseType.md#istypeequal)

***

### subscribe

**subscribe**<`Data`>(`observer`, `selector?`): [`Disposable`](/en/auto-docs/editor/interfaces/Disposable-1.md)

Listens for changes to the ASTNode.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | [`IntegerType`](/en/auto-docs/editor/classes/IntegerType.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `observer` | `ObserverOrNext`<`Data`> | The listener callback. |
| `selector?` | `SubscribeConfig`<[`IntegerType`](/en/auto-docs/editor/classes/IntegerType.md), `Data`> | Listens for specified data. |

#### Returns

[`Disposable`](/en/auto-docs/editor/interfaces/Disposable-1.md)

#### Inherited from

[BaseType](/en/auto-docs/editor/classes/BaseType.md).[subscribe](/en/auto-docs/editor/classes/BaseType.md#subscribe)

***

### toJSON

**toJSON**(): [`ASTNodeJSON`](/en/auto-docs/editor/interfaces/ASTNodeJSON.md)

Serialize the node to a JSON object.

#### Returns

[`ASTNodeJSON`](/en/auto-docs/editor/interfaces/ASTNodeJSON.md)

The JSON representation of the node.

#### Inherited from

[BaseType](/en/auto-docs/editor/classes/BaseType.md).[toJSON](/en/auto-docs/editor/classes/BaseType.md#tojson)
