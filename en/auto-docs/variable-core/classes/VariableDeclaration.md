# Class: VariableDeclaration\<VariableMeta>

`VariableDeclaration` is a variable field that represents a variable declaration.

## Type parameters

| Name | Type |
| :------ | :------ |
| `VariableMeta` | `any` |

## Hierarchy

* [`BaseVariableField`](/en/auto-docs/variable-core/classes/BaseVariableField.md)<`VariableMeta`>

  ↳ **`VariableDeclaration`**

## Table of contents

### Constructors

* [constructor](/en/auto-docs/variable-core/classes/VariableDeclaration.md#constructor)

### Properties

* [changeLocked](/en/auto-docs/variable-core/classes/VariableDeclaration.md#changelocked)
* [flags](/en/auto-docs/variable-core/classes/VariableDeclaration.md#flags)
* [key](/en/auto-docs/variable-core/classes/VariableDeclaration.md#key)
* [onDispose](/en/auto-docs/variable-core/classes/VariableDeclaration.md#ondispose)
* [opts](/en/auto-docs/variable-core/classes/VariableDeclaration.md#opts)
* [parent](/en/auto-docs/variable-core/classes/VariableDeclaration.md#parent)
* [scope](/en/auto-docs/variable-core/classes/VariableDeclaration.md#scope)
* [toDispose](/en/auto-docs/variable-core/classes/VariableDeclaration.md#todispose)
* [value$](/en/auto-docs/variable-core/classes/VariableDeclaration.md#value$)
* [kind](/en/auto-docs/variable-core/classes/VariableDeclaration.md#kind)

### Accessors

* [children](/en/auto-docs/variable-core/classes/VariableDeclaration.md#children)
* [disposed](/en/auto-docs/variable-core/classes/VariableDeclaration.md#disposed)
* [hash](/en/auto-docs/variable-core/classes/VariableDeclaration.md#hash)
* [initializer](/en/auto-docs/variable-core/classes/VariableDeclaration.md#initializer)
* [keyPath](/en/auto-docs/variable-core/classes/VariableDeclaration.md#keypath)
* [kind](/en/auto-docs/variable-core/classes/VariableDeclaration.md#kind-1)
* [meta](/en/auto-docs/variable-core/classes/VariableDeclaration.md#meta)
* [order](/en/auto-docs/variable-core/classes/VariableDeclaration.md#order)
* [parentFields](/en/auto-docs/variable-core/classes/VariableDeclaration.md#parentfields)
* [type](/en/auto-docs/variable-core/classes/VariableDeclaration.md#type)
* [version](/en/auto-docs/variable-core/classes/VariableDeclaration.md#version)

### Methods

* [dispatchGlobalEvent](/en/auto-docs/variable-core/classes/VariableDeclaration.md#dispatchglobalevent)
* [dispose](/en/auto-docs/variable-core/classes/VariableDeclaration.md#dispose)
* [fireChange](/en/auto-docs/variable-core/classes/VariableDeclaration.md#firechange)
* [fromJSON](/en/auto-docs/variable-core/classes/VariableDeclaration.md#fromjson)
* [getByKeyPath](/en/auto-docs/variable-core/classes/VariableDeclaration.md#getbykeypath)
* [onTypeChange](/en/auto-docs/variable-core/classes/VariableDeclaration.md#ontypechange)
* [subscribe](/en/auto-docs/variable-core/classes/VariableDeclaration.md#subscribe)
* [toJSON](/en/auto-docs/variable-core/classes/VariableDeclaration.md#tojson)
* [updateInitializer](/en/auto-docs/variable-core/classes/VariableDeclaration.md#updateinitializer)
* [updateMeta](/en/auto-docs/variable-core/classes/VariableDeclaration.md#updatemeta)
* [updateOrder](/en/auto-docs/variable-core/classes/VariableDeclaration.md#updateorder)
* [updateType](/en/auto-docs/variable-core/classes/VariableDeclaration.md#updatetype)

## Constructors

### constructor

**new VariableDeclaration**<`VariableMeta`>(`params`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `VariableMeta` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`CreateASTParams`](/en/auto-docs/variable-core/interfaces/CreateASTParams.md) |

#### Overrides

[BaseVariableField](/en/auto-docs/variable-core/classes/BaseVariableField.md).[constructor](/en/auto-docs/variable-core/classes/BaseVariableField.md#constructor)

## Properties

### changeLocked

**changeLocked**: `boolean` = `false`

Update lock.

* When set to `true`, `fireChange` will not trigger any events.
* This is useful when multiple updates are needed, and you want to avoid multiple triggers.

#### Inherited from

[BaseVariableField](/en/auto-docs/variable-core/classes/BaseVariableField.md).[changeLocked](/en/auto-docs/variable-core/classes/BaseVariableField.md#changelocked)

***

### flags

**flags**: [`ASTNodeFlags`](/en/auto-docs/variable-core/enums/ASTNodeFlags.md) = `ASTNodeFlags.VariableField`

Node flags, used to record some flag information.

#### Inherited from

[BaseVariableField](/en/auto-docs/variable-core/classes/BaseVariableField.md).[flags](/en/auto-docs/variable-core/classes/BaseVariableField.md#flags)

***

### key

`Readonly` **key**: `string`

The unique identifier of the ASTNode, which is **immutable**.

* Immutable: Once assigned, the key cannot be changed.
* Automatically generated if not specified, and cannot be changed as well.
* If a new key needs to be generated, the current ASTNode should be destroyed and a new ASTNode should be generated.

#### Inherited from

[BaseVariableField](/en/auto-docs/variable-core/classes/BaseVariableField.md).[key](/en/auto-docs/variable-core/classes/BaseVariableField.md#key)

***

### onDispose

**onDispose**: `Event`<`void`>

Callback triggered upon disposal.

#### Inherited from

[BaseVariableField](/en/auto-docs/variable-core/classes/BaseVariableField.md).[onDispose](/en/auto-docs/variable-core/classes/BaseVariableField.md#ondispose)

***

### opts

`Optional` `Readonly` **opts**: `any`

**`Deprecated`**

Get the injected options for the ASTNode.

Please use `@injectToAst(XXXService) declare xxxService: XXXService` to achieve external dependency injection.

#### Inherited from

[BaseVariableField](/en/auto-docs/variable-core/classes/BaseVariableField.md).[opts](/en/auto-docs/variable-core/classes/BaseVariableField.md#opts)

***

### parent

`Readonly` **parent**: `undefined` | [`ASTNode`](/en/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`>

The parent ASTNode.

#### Inherited from

[BaseVariableField](/en/auto-docs/variable-core/classes/BaseVariableField.md).[parent](/en/auto-docs/variable-core/classes/BaseVariableField.md#parent)

***

### scope

`Readonly` **scope**: [`Scope`](/en/auto-docs/variable-core/classes/Scope.md)<`Record`<`string`, `any`>>

The scope in which the ASTNode is located.

#### Inherited from

[BaseVariableField](/en/auto-docs/variable-core/classes/BaseVariableField.md).[scope](/en/auto-docs/variable-core/classes/BaseVariableField.md#scope)

***

### toDispose

`Readonly` **toDispose**: `DisposableCollection`

List of disposal handlers for the ASTNode.

#### Inherited from

[BaseVariableField](/en/auto-docs/variable-core/classes/BaseVariableField.md).[toDispose](/en/auto-docs/variable-core/classes/BaseVariableField.md#todispose)

***

### value$

`Readonly` **value$**: `BehaviorSubject`<[`ASTNode`](/en/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`>>

AST node change Observable events, implemented based on RxJS.

* Emits the current ASTNode value upon subscription.
* Emits a new value whenever `fireChange` is called.

#### Inherited from

[BaseVariableField](/en/auto-docs/variable-core/classes/BaseVariableField.md).[value$](/en/auto-docs/variable-core/classes/BaseVariableField.md#value$)

***

### kind

`Static` **kind**: `string` = `ASTKind.VariableDeclaration`

The kind of the ASTNode.

#### Overrides

[BaseVariableField](/en/auto-docs/variable-core/classes/BaseVariableField.md).[kind](/en/auto-docs/variable-core/classes/BaseVariableField.md#kind)

## Accessors

### children

`get` **children**(): [`ASTNode`](/en/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`>\[]

Gets all child ASTNodes of the current ASTNode.

#### Returns

[`ASTNode`](/en/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`>\[]

#### Inherited from

BaseVariableField.children

***

### disposed

`get` **disposed**(): `boolean`

#### Returns

`boolean`

#### Inherited from

BaseVariableField.disposed

***

### hash

`get` **hash**(): `string`

The global unique hash of the field, and will be changed when the field is updated.

#### Returns

`string`

#### Inherited from

BaseVariableField.hash

***

### initializer

`get` **initializer**(): `undefined` | [`BaseExpression`](/en/auto-docs/variable-core/classes/BaseExpression.md)<`any`, `any`>

Initializer of the variable field, similar to js code:
`const v = 'hello'`

with initializer, the type of field will be inferred from the initializer.

#### Returns

`undefined` | [`BaseExpression`](/en/auto-docs/variable-core/classes/BaseExpression.md)<`any`, `any`>

#### Inherited from

BaseVariableField.initializer

***

### keyPath

`get` **keyPath**(): `string`\[]

KeyPath of the variable field, sorted from farthest to closest

#### Returns

`string`\[]

#### Inherited from

BaseVariableField.keyPath

***

### kind

`get` **kind**(): `string`

The type of the ASTNode.

#### Returns

`string`

#### Inherited from

BaseVariableField.kind

***

### meta

`get` **meta**(): `VariableMeta`

Metadata of the variable field, you cans store information like `title`, `icon`, etc.

#### Returns

`VariableMeta`

#### Inherited from

BaseVariableField.meta

***

### order

`get` **order**(): `number`

Variable sorting order, which is used to sort variables in `scope.outputs.variables`

#### Returns

`number`

***

### parentFields

`get` **parentFields**(): [`BaseVariableField`](/en/auto-docs/variable-core/classes/BaseVariableField.md)<`any`>\[]

Parent variable fields, sorted from closest to farthest

#### Returns

[`BaseVariableField`](/en/auto-docs/variable-core/classes/BaseVariableField.md)<`any`>\[]

#### Inherited from

BaseVariableField.parentFields

***

### type

`get` **type**(): [`BaseType`](/en/auto-docs/variable-core/classes/BaseType.md)<`any`, `any`>

Type of the variable field, similar to js code:
`const v: string`

#### Returns

[`BaseType`](/en/auto-docs/variable-core/classes/BaseType.md)<`any`, `any`>

#### Inherited from

BaseVariableField.type

***

### version

`get` **version**(): `number`

The version value of the ASTNode.

* You can used to check whether ASTNode are updated.

#### Returns

`number`

#### Inherited from

BaseVariableField.version

## Methods

### dispatchGlobalEvent

**dispatchGlobalEvent**<`ActionType`>(`event`): `void`

Dispatches a global event for the current ASTNode.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ActionType` | extends [`GlobalEventActionType`](/en/auto-docs/variable-core/interfaces/GlobalEventActionType.md)<`string`, `any`, [`ASTNode`](/en/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`>, `ActionType`> = [`GlobalEventActionType`](/en/auto-docs/variable-core/interfaces/GlobalEventActionType.md)<`string`, `any`, [`ASTNode`](/en/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`>> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `Omit`<`ActionType`, `"ast"`> | The global event. |

#### Returns

`void`

#### Inherited from

[BaseVariableField](/en/auto-docs/variable-core/classes/BaseVariableField.md).[dispatchGlobalEvent](/en/auto-docs/variable-core/classes/BaseVariableField.md#dispatchglobalevent)

***

### dispose

**dispose**(): `void`

Disposes the ASTNode.

#### Returns

`void`

#### Inherited from

[BaseVariableField](/en/auto-docs/variable-core/classes/BaseVariableField.md).[dispose](/en/auto-docs/variable-core/classes/BaseVariableField.md#dispose)

***

### fireChange

**fireChange**(): `void`

Triggers an update for the current node.

#### Returns

`void`

#### Inherited from

[BaseVariableField](/en/auto-docs/variable-core/classes/BaseVariableField.md).[fireChange](/en/auto-docs/variable-core/classes/BaseVariableField.md#firechange)

***

### fromJSON

**fromJSON**(`«destructured»`): `void`

Deserialize the `VariableDeclarationJSON` to the `VariableDeclaration`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`VariableDeclarationJSON`](/en/auto-docs/variable-core/types/VariableDeclarationJSON.md)<`VariableMeta`> |

#### Returns

`void`

#### Overrides

[BaseVariableField](/en/auto-docs/variable-core/classes/BaseVariableField.md).[fromJSON](/en/auto-docs/variable-core/classes/BaseVariableField.md#fromjson)

***

### getByKeyPath

**getByKeyPath**(`keyPath`): `undefined` | [`BaseVariableField`](/en/auto-docs/variable-core/classes/BaseVariableField.md)<`any`>

Get the variable field by keyPath, similar to js code:
`v.a.b`

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyPath` | `string`\[] |

#### Returns

`undefined` | [`BaseVariableField`](/en/auto-docs/variable-core/classes/BaseVariableField.md)<`any`>

#### Inherited from

[BaseVariableField](/en/auto-docs/variable-core/classes/BaseVariableField.md).[getByKeyPath](/en/auto-docs/variable-core/classes/BaseVariableField.md#getbykeypath)

***

### onTypeChange

**onTypeChange**(`observer`): `Disposable`

Subscribe to type change of the variable field

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | (`type`: `undefined` | [`ASTNode`](/en/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`>) => `void` |

#### Returns

`Disposable`

#### Inherited from

[BaseVariableField](/en/auto-docs/variable-core/classes/BaseVariableField.md).[onTypeChange](/en/auto-docs/variable-core/classes/BaseVariableField.md#ontypechange)

***

### subscribe

**subscribe**<`Data`>(`observer`, `selector?`): `Disposable`

Listens for changes to the ASTNode.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | [`VariableDeclaration`](/en/auto-docs/variable-core/classes/VariableDeclaration.md)<`VariableMeta`> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `observer` | `ObserverOrNext`<`Data`> | The listener callback. |
| `selector` | `SubscribeConfig`<[`VariableDeclaration`](/en/auto-docs/variable-core/classes/VariableDeclaration.md)<`VariableMeta`>, `Data`> | Listens for specified data. |

#### Returns

`Disposable`

#### Inherited from

[BaseVariableField](/en/auto-docs/variable-core/classes/BaseVariableField.md).[subscribe](/en/auto-docs/variable-core/classes/BaseVariableField.md#subscribe)

***

### toJSON

**toJSON**(): `BaseVariableFieldJSON`<`VariableMeta`> & { `kind`: `string`  }

Serialize the variable field to JSON

#### Returns

`BaseVariableFieldJSON`<`VariableMeta`> & { `kind`: `string`  }

ASTNodeJSON representation of `BaseVariableField`

#### Inherited from

[BaseVariableField](/en/auto-docs/variable-core/classes/BaseVariableField.md).[toJSON](/en/auto-docs/variable-core/classes/BaseVariableField.md#tojson)

***

### updateInitializer

**updateInitializer**(`nextInitializer?`): `void`

Update the initializer of the variable field

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nextInitializer?` | [`ASTNodeJSON`](/en/auto-docs/variable-core/interfaces/ASTNodeJSON.md) | initializer ASTJSON representation of Expression |

#### Returns

`void`

#### Inherited from

[BaseVariableField](/en/auto-docs/variable-core/classes/BaseVariableField.md).[updateInitializer](/en/auto-docs/variable-core/classes/BaseVariableField.md#updateinitializer)

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

#### Inherited from

[BaseVariableField](/en/auto-docs/variable-core/classes/BaseVariableField.md).[updateMeta](/en/auto-docs/variable-core/classes/BaseVariableField.md#updatemeta)

***

### updateOrder

**updateOrder**(`order?`): `void`

Update the sorting order of the variable declaration.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `order` | `number` | `0` | Variable sorting order. Default is 0. |

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

#### Inherited from

[BaseVariableField](/en/auto-docs/variable-core/classes/BaseVariableField.md).[updateType](/en/auto-docs/variable-core/classes/BaseVariableField.md#updatetype)
