# Class: BaseVariableField\<VariableMeta>

Variable Field abstract class, which is the base class for `VariableDeclaration` and `Property`

* `VariableDeclaration` is used to declare a variable in a block scope.
* `Property` is used to declare a property in an object.

## Type parameters

| Name | Type |
| :------ | :------ |
| `VariableMeta` | `any` |

## Hierarchy

* [`ASTNode`](/en/auto-docs/variable-plugin/classes/ASTNode.md)<`BaseVariableFieldJSON`<`VariableMeta`>>

  ↳ **`BaseVariableField`**

  ↳↳ [`Property`](/en/auto-docs/variable-plugin/classes/Property.md)

  ↳↳ [`VariableDeclaration`](/en/auto-docs/variable-plugin/classes/VariableDeclaration.md)

## Table of contents

### Constructors

* [constructor](/en/auto-docs/variable-plugin/classes/BaseVariableField.md#constructor)

### Properties

* [changeLocked](/en/auto-docs/variable-plugin/classes/BaseVariableField.md#changelocked)
* [flags](/en/auto-docs/variable-plugin/classes/BaseVariableField.md#flags)
* [key](/en/auto-docs/variable-plugin/classes/BaseVariableField.md#key)
* [onDispose](/en/auto-docs/variable-plugin/classes/BaseVariableField.md#ondispose)
* [opts](/en/auto-docs/variable-plugin/classes/BaseVariableField.md#opts)
* [parent](/en/auto-docs/variable-plugin/classes/BaseVariableField.md#parent)
* [scope](/en/auto-docs/variable-plugin/classes/BaseVariableField.md#scope)
* [toDispose](/en/auto-docs/variable-plugin/classes/BaseVariableField.md#todispose)
* [value$](/en/auto-docs/variable-plugin/classes/BaseVariableField.md#value$)
* [kind](/en/auto-docs/variable-plugin/classes/BaseVariableField.md#kind)

### Accessors

* [children](/en/auto-docs/variable-plugin/classes/BaseVariableField.md#children)
* [disposed](/en/auto-docs/variable-plugin/classes/BaseVariableField.md#disposed)
* [hash](/en/auto-docs/variable-plugin/classes/BaseVariableField.md#hash)
* [initializer](/en/auto-docs/variable-plugin/classes/BaseVariableField.md#initializer)
* [keyPath](/en/auto-docs/variable-plugin/classes/BaseVariableField.md#keypath)
* [kind](/en/auto-docs/variable-plugin/classes/BaseVariableField.md#kind-1)
* [meta](/en/auto-docs/variable-plugin/classes/BaseVariableField.md#meta)
* [parentFields](/en/auto-docs/variable-plugin/classes/BaseVariableField.md#parentfields)
* [type](/en/auto-docs/variable-plugin/classes/BaseVariableField.md#type)
* [version](/en/auto-docs/variable-plugin/classes/BaseVariableField.md#version)

### Methods

* [dispatchGlobalEvent](/en/auto-docs/variable-plugin/classes/BaseVariableField.md#dispatchglobalevent)
* [dispose](/en/auto-docs/variable-plugin/classes/BaseVariableField.md#dispose)
* [fireChange](/en/auto-docs/variable-plugin/classes/BaseVariableField.md#firechange)
* [fromJSON](/en/auto-docs/variable-plugin/classes/BaseVariableField.md#fromjson)
* [getByKeyPath](/en/auto-docs/variable-plugin/classes/BaseVariableField.md#getbykeypath)
* [onTypeChange](/en/auto-docs/variable-plugin/classes/BaseVariableField.md#ontypechange)
* [subscribe](/en/auto-docs/variable-plugin/classes/BaseVariableField.md#subscribe)
* [toJSON](/en/auto-docs/variable-plugin/classes/BaseVariableField.md#tojson)
* [updateInitializer](/en/auto-docs/variable-plugin/classes/BaseVariableField.md#updateinitializer)
* [updateMeta](/en/auto-docs/variable-plugin/classes/BaseVariableField.md#updatemeta)
* [updateType](/en/auto-docs/variable-plugin/classes/BaseVariableField.md#updatetype)

## Constructors

### constructor

**new BaseVariableField**<`VariableMeta`>(`createParams`, `opts?`)

Constructor.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `VariableMeta` | `any` |

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

**flags**: [`ASTNodeFlags`](/en/auto-docs/variable-plugin/enums/ASTNodeFlags.md)

Node flags, used to record some flag information.

#### Overrides

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

`Static` `Readonly` **kind**: `string`

The kind of the ASTNode.

#### Inherited from

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

### disposed

`get` **disposed**(): `boolean`

#### Returns

`boolean`

#### Inherited from

ASTNode.disposed

***

### hash

`get` **hash**(): `string`

The global unique hash of the field, and will be changed when the field is updated.

#### Returns

`string`

#### Overrides

ASTNode.hash

***

### initializer

`get` **initializer**(): `undefined` | [`BaseExpression`](/en/auto-docs/variable-plugin/classes/BaseExpression.md)<`any`, `any`>

Initializer of the variable field, similar to js code:
`const v = 'hello'`

with initializer, the type of field will be inferred from the initializer.

#### Returns

`undefined` | [`BaseExpression`](/en/auto-docs/variable-plugin/classes/BaseExpression.md)<`any`, `any`>

***

### keyPath

`get` **keyPath**(): `string`\[]

KeyPath of the variable field, sorted from farthest to closest

#### Returns

`string`\[]

***

### kind

`get` **kind**(): `string`

The type of the ASTNode.

#### Returns

`string`

#### Inherited from

ASTNode.kind

***

### meta

`get` **meta**(): `VariableMeta`

Metadata of the variable field, you cans store information like `title`, `icon`, etc.

#### Returns

`VariableMeta`

***

### parentFields

`get` **parentFields**(): [`BaseVariableField`](/en/auto-docs/variable-plugin/classes/BaseVariableField.md)<`any`>\[]

Parent variable fields, sorted from closest to farthest

#### Returns

[`BaseVariableField`](/en/auto-docs/variable-plugin/classes/BaseVariableField.md)<`any`>\[]

***

### type

`get` **type**(): [`BaseType`](/en/auto-docs/variable-plugin/classes/BaseType.md)<`any`, `any`>

Type of the variable field, similar to js code:
`const v: string`

#### Returns

[`BaseType`](/en/auto-docs/variable-plugin/classes/BaseType.md)<`any`, `any`>

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

Deserialize the `BaseVariableFieldJSON` to the `BaseVariableField`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `json` | `BaseVariableFieldJSON`<`VariableMeta`> | ASTJSON representation of `BaseVariableField` |

#### Returns

`void`

#### Overrides

[ASTNode](/en/auto-docs/variable-plugin/classes/ASTNode.md).[fromJSON](/en/auto-docs/variable-plugin/classes/ASTNode.md#fromjson)

***

### getByKeyPath

**getByKeyPath**(`keyPath`): `undefined` | [`BaseVariableField`](/en/auto-docs/variable-plugin/classes/BaseVariableField.md)<`any`>

Get the variable field by keyPath, similar to js code:
`v.a.b`

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyPath` | `string`\[] |

#### Returns

`undefined` | [`BaseVariableField`](/en/auto-docs/variable-plugin/classes/BaseVariableField.md)<`any`>

***

### onTypeChange

**onTypeChange**(`observer`): `Disposable`

Subscribe to type change of the variable field

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | (`type`: `undefined` | [`ASTNode`](/en/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`>) => `void` |

#### Returns

`Disposable`

***

### subscribe

**subscribe**<`Data`>(`observer`, `selector?`): `Disposable`

Listens for changes to the ASTNode.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | [`BaseVariableField`](/en/auto-docs/variable-plugin/classes/BaseVariableField.md)<`VariableMeta`> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `observer` | `ObserverOrNext`<`Data`> | The listener callback. |
| `selector?` | `SubscribeConfig`<[`BaseVariableField`](/en/auto-docs/variable-plugin/classes/BaseVariableField.md)<`VariableMeta`>, `Data`> | Listens for specified data. |

#### Returns

`Disposable`

#### Inherited from

[ASTNode](/en/auto-docs/variable-plugin/classes/ASTNode.md).[subscribe](/en/auto-docs/variable-plugin/classes/ASTNode.md#subscribe)

***

### toJSON

**toJSON**(): `BaseVariableFieldJSON`<`VariableMeta`> & { `kind`: `string`  }

Serialize the variable field to JSON

#### Returns

`BaseVariableFieldJSON`<`VariableMeta`> & { `kind`: `string`  }

ASTNodeJSON representation of `BaseVariableField`

#### Overrides

[ASTNode](/en/auto-docs/variable-plugin/classes/ASTNode.md).[toJSON](/en/auto-docs/variable-plugin/classes/ASTNode.md#tojson)

***

### updateInitializer

**updateInitializer**(`nextInitializer?`): `void`

Update the initializer of the variable field

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nextInitializer?` | [`ASTNodeJSON`](/en/auto-docs/variable-plugin/interfaces/ASTNodeJSON.md) | initializer ASTJSON representation of Expression |

#### Returns

`void`

***

### updateMeta

**updateMeta**(`nextMeta`): `void`

Update the meta data of the variable field

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nextMeta` | `VariableMeta` | meta data of the variable field |

#### Returns

`void`

***

### updateType

**updateType**(`type`): `void`

Update the type of the variable field

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `undefined` | `ASTNodeJSONOrKind` | type ASTJSON representation of Type |

#### Returns

`void`
