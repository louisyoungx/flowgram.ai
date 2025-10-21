# Class: BaseExpression\<JSON, InjectOpts>

Base class for all expressions.

All other expressions should extend this class.

## Type parameters

| Name | Type |
| :------ | :------ |
| `JSON` | extends [`ASTNodeJSON`](/auto-docs/free-layout-editor/interfaces/ASTNodeJSON.md) = `any` |
| `InjectOpts` | `any` |

## Hierarchy

* [`ASTNode`](/auto-docs/free-layout-editor/classes/ASTNode.md)<`JSON`, `InjectOpts`>

  ↳ **`BaseExpression`**

  ↳↳ [`EnumerateExpression`](/auto-docs/free-layout-editor/classes/EnumerateExpression.md)

  ↳↳ [`KeyPathExpression`](/auto-docs/free-layout-editor/classes/KeyPathExpression.md)

  ↳↳ [`LegacyKeyPathExpression`](/auto-docs/free-layout-editor/classes/LegacyKeyPathExpression.md)

  ↳↳ [`WrapArrayExpression`](/auto-docs/free-layout-editor/classes/WrapArrayExpression.md)

## Table of contents

### Constructors

* [constructor](/auto-docs/free-layout-editor/classes/BaseExpression.md#constructor)

### Properties

* [changeLocked](/auto-docs/free-layout-editor/classes/BaseExpression.md#changelocked)
* [flags](/auto-docs/free-layout-editor/classes/BaseExpression.md#flags)
* [key](/auto-docs/free-layout-editor/classes/BaseExpression.md#key)
* [onDispose](/auto-docs/free-layout-editor/classes/BaseExpression.md#ondispose)
* [opts](/auto-docs/free-layout-editor/classes/BaseExpression.md#opts)
* [parent](/auto-docs/free-layout-editor/classes/BaseExpression.md#parent)
* [refs$](/auto-docs/free-layout-editor/classes/BaseExpression.md#refs$)
* [returnType](/auto-docs/free-layout-editor/classes/BaseExpression.md#returntype)
* [scope](/auto-docs/free-layout-editor/classes/BaseExpression.md#scope)
* [toDispose](/auto-docs/free-layout-editor/classes/BaseExpression.md#todispose)
* [value$](/auto-docs/free-layout-editor/classes/BaseExpression.md#value$)
* [kind](/auto-docs/free-layout-editor/classes/BaseExpression.md#kind)

### Accessors

* [children](/auto-docs/free-layout-editor/classes/BaseExpression.md#children)
* [disposed](/auto-docs/free-layout-editor/classes/BaseExpression.md#disposed)
* [globalVariableTable](/auto-docs/free-layout-editor/classes/BaseExpression.md#globalvariabletable)
* [hash](/auto-docs/free-layout-editor/classes/BaseExpression.md#hash)
* [kind](/auto-docs/free-layout-editor/classes/BaseExpression.md#kind-1)
* [parentFields](/auto-docs/free-layout-editor/classes/BaseExpression.md#parentfields)
* [refs](/auto-docs/free-layout-editor/classes/BaseExpression.md#refs)
* [version](/auto-docs/free-layout-editor/classes/BaseExpression.md#version)

### Methods

* [dispatchGlobalEvent](/auto-docs/free-layout-editor/classes/BaseExpression.md#dispatchglobalevent)
* [dispose](/auto-docs/free-layout-editor/classes/BaseExpression.md#dispose)
* [fireChange](/auto-docs/free-layout-editor/classes/BaseExpression.md#firechange)
* [fromJSON](/auto-docs/free-layout-editor/classes/BaseExpression.md#fromjson)
* [getRefFields](/auto-docs/free-layout-editor/classes/BaseExpression.md#getreffields)
* [refreshRefs](/auto-docs/free-layout-editor/classes/BaseExpression.md#refreshrefs)
* [subscribe](/auto-docs/free-layout-editor/classes/BaseExpression.md#subscribe)
* [toJSON](/auto-docs/free-layout-editor/classes/BaseExpression.md#tojson)

## Constructors

### constructor

**new BaseExpression**<`JSON`, `InjectOpts`>(`params`, `opts?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `JSON` | extends [`ASTNodeJSON`](/auto-docs/free-layout-editor/interfaces/ASTNodeJSON.md) = `any` |
| `InjectOpts` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`CreateASTParams`](/auto-docs/free-layout-editor/interfaces/CreateASTParams.md) |
| `opts?` | `InjectOpts` |

#### Overrides

[ASTNode](/auto-docs/free-layout-editor/classes/ASTNode.md).[constructor](/auto-docs/free-layout-editor/classes/ASTNode.md#constructor)

## Properties

### changeLocked

**changeLocked**: `boolean`

Update lock.

* When set to `true`, `fireChange` will not trigger any events.
* This is useful when multiple updates are needed, and you want to avoid multiple triggers.

#### Inherited from

[ASTNode](/auto-docs/free-layout-editor/classes/ASTNode.md).[changeLocked](/auto-docs/free-layout-editor/classes/ASTNode.md#changelocked)

***

### flags

**flags**: [`ASTNodeFlags`](/auto-docs/free-layout-editor/enums/ASTNodeFlags.md)

Node flags, used to record some flag information.

#### Overrides

[ASTNode](/auto-docs/free-layout-editor/classes/ASTNode.md).[flags](/auto-docs/free-layout-editor/classes/ASTNode.md#flags)

***

### key

`Readonly` **key**: `string`

The unique identifier of the ASTNode, which is **immutable**.

* Immutable: Once assigned, the key cannot be changed.
* Automatically generated if not specified, and cannot be changed as well.
* If a new key needs to be generated, the current ASTNode should be destroyed and a new ASTNode should be generated.

#### Inherited from

[ASTNode](/auto-docs/free-layout-editor/classes/ASTNode.md).[key](/auto-docs/free-layout-editor/classes/ASTNode.md#key)

***

### onDispose

**onDispose**: [`Event`](/auto-docs/free-layout-editor/interfaces/Event-1.md)<`void`>

Callback triggered upon disposal.

#### Inherited from

[ASTNode](/auto-docs/free-layout-editor/classes/ASTNode.md).[onDispose](/auto-docs/free-layout-editor/classes/ASTNode.md#ondispose)

***

### opts

`Optional` `Readonly` **opts**: `InjectOpts`

**`Deprecated`**

Get the injected options for the ASTNode.

Please use `@injectToAst(XXXService) declare xxxService: XXXService` to achieve external dependency injection.

#### Inherited from

[ASTNode](/auto-docs/free-layout-editor/classes/ASTNode.md).[opts](/auto-docs/free-layout-editor/classes/ASTNode.md#opts)

***

### parent

`Readonly` **parent**: `undefined` | [`ASTNode`](/auto-docs/free-layout-editor/classes/ASTNode.md)<`any`, `any`>

The parent ASTNode.

#### Inherited from

[ASTNode](/auto-docs/free-layout-editor/classes/ASTNode.md).[parent](/auto-docs/free-layout-editor/classes/ASTNode.md#parent)

***

### refs$

**refs$**: `Observable`<`ExpressionRefs`>

An observable that emits the referenced variable fields when they change.

***

### returnType

`Abstract` **returnType**: `undefined` | [`BaseType`](/auto-docs/free-layout-editor/classes/BaseType.md)<`any`, `any`>

The return type of the expression.

***

### scope

`Readonly` **scope**: [`Scope`](/auto-docs/free-layout-editor/classes/Scope.md)<`Record`<`string`, `any`>>

The scope in which the ASTNode is located.

#### Inherited from

[ASTNode](/auto-docs/free-layout-editor/classes/ASTNode.md).[scope](/auto-docs/free-layout-editor/classes/ASTNode.md#scope)

***

### toDispose

`Readonly` **toDispose**: [`DisposableCollection`](/auto-docs/free-layout-editor/classes/DisposableCollection.md)

List of disposal handlers for the ASTNode.

#### Inherited from

[ASTNode](/auto-docs/free-layout-editor/classes/ASTNode.md).[toDispose](/auto-docs/free-layout-editor/classes/ASTNode.md#todispose)

***

### value$

`Readonly` **value$**: `BehaviorSubject`<[`ASTNode`](/auto-docs/free-layout-editor/classes/ASTNode.md)<`any`, `any`>>

AST node change Observable events, implemented based on RxJS.

* Emits the current ASTNode value upon subscription.
* Emits a new value whenever `fireChange` is called.

#### Inherited from

[ASTNode](/auto-docs/free-layout-editor/classes/ASTNode.md).[value$](/auto-docs/free-layout-editor/classes/ASTNode.md#value$)

***

### kind

`Static` `Readonly` **kind**: `string`

The kind of the ASTNode.

#### Inherited from

[ASTNode](/auto-docs/free-layout-editor/classes/ASTNode.md).[kind](/auto-docs/free-layout-editor/classes/ASTNode.md#kind)

## Accessors

### children

`get` **children**(): [`ASTNode`](/auto-docs/free-layout-editor/classes/ASTNode.md)<`any`, `any`>\[]

Gets all child ASTNodes of the current ASTNode.

#### Returns

[`ASTNode`](/auto-docs/free-layout-editor/classes/ASTNode.md)<`any`, `any`>\[]

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

### globalVariableTable

`get` **globalVariableTable**(): [`IVariableTable`](/auto-docs/free-layout-editor/interfaces/IVariableTable.md)

Get the global variable table, which is used to access referenced variables.

#### Returns

[`IVariableTable`](/auto-docs/free-layout-editor/interfaces/IVariableTable.md)

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

### parentFields

`get` **parentFields**(): [`BaseVariableField`](/auto-docs/free-layout-editor/classes/BaseVariableField.md)<`any`>\[]

Parent variable fields, sorted from closest to farthest.

#### Returns

[`BaseVariableField`](/auto-docs/free-layout-editor/classes/BaseVariableField.md)<`any`>\[]

***

### refs

`get` **refs**(): `ExpressionRefs`

The variable fields referenced by the expression.

#### Returns

`ExpressionRefs`

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
| `ActionType` | extends [`GlobalEventActionType`](/auto-docs/free-layout-editor/interfaces/GlobalEventActionType.md)<`string`, `any`, [`ASTNode`](/auto-docs/free-layout-editor/classes/ASTNode.md)<`any`, `any`>, `ActionType`> = [`GlobalEventActionType`](/auto-docs/free-layout-editor/interfaces/GlobalEventActionType.md)<`string`, `any`, [`ASTNode`](/auto-docs/free-layout-editor/classes/ASTNode.md)<`any`, `any`>> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `Omit`<`ActionType`, `"ast"`> | The global event. |

#### Returns

`void`

#### Inherited from

[ASTNode](/auto-docs/free-layout-editor/classes/ASTNode.md).[dispatchGlobalEvent](/auto-docs/free-layout-editor/classes/ASTNode.md#dispatchglobalevent)

***

### dispose

**dispose**(): `void`

Disposes the ASTNode.

#### Returns

`void`

#### Inherited from

[ASTNode](/auto-docs/free-layout-editor/classes/ASTNode.md).[dispose](/auto-docs/free-layout-editor/classes/ASTNode.md#dispose)

***

### fireChange

**fireChange**(): `void`

Triggers an update for the current node.

#### Returns

`void`

#### Inherited from

[ASTNode](/auto-docs/free-layout-editor/classes/ASTNode.md).[fireChange](/auto-docs/free-layout-editor/classes/ASTNode.md#firechange)

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

#### Inherited from

[ASTNode](/auto-docs/free-layout-editor/classes/ASTNode.md).[fromJSON](/auto-docs/free-layout-editor/classes/ASTNode.md#fromjson)

***

### getRefFields

`Abstract` **getRefFields**(): `ExpressionRefs`

Get the variable fields referenced by the expression.

This method should be implemented by subclasses.

#### Returns

`ExpressionRefs`

An array of referenced variable fields.

***

### refreshRefs

**refreshRefs**(): `void`

Refresh the variable references.

#### Returns

`void`

***

### subscribe

**subscribe**<`Data`>(`observer`, `selector?`): [`Disposable`](/auto-docs/free-layout-editor/interfaces/Disposable-1.md)

Listens for changes to the ASTNode.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | [`BaseExpression`](/auto-docs/free-layout-editor/classes/BaseExpression.md)<`JSON`, `InjectOpts`> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `observer` | `ObserverOrNext`<`Data`> | The listener callback. |
| `selector?` | `SubscribeConfig`<[`BaseExpression`](/auto-docs/free-layout-editor/classes/BaseExpression.md)<`JSON`, `InjectOpts`>, `Data`> | Listens for specified data. |

#### Returns

[`Disposable`](/auto-docs/free-layout-editor/interfaces/Disposable-1.md)

#### Inherited from

[ASTNode](/auto-docs/free-layout-editor/classes/ASTNode.md).[subscribe](/auto-docs/free-layout-editor/classes/ASTNode.md#subscribe)

***

### toJSON

**toJSON**(): [`ASTNodeJSON`](/auto-docs/free-layout-editor/interfaces/ASTNodeJSON.md)

Serializes the current ASTNode to ASTNodeJSON.

#### Returns

[`ASTNodeJSON`](/auto-docs/free-layout-editor/interfaces/ASTNodeJSON.md)

#### Inherited from

[ASTNode](/auto-docs/free-layout-editor/classes/ASTNode.md).[toJSON](/auto-docs/free-layout-editor/classes/ASTNode.md#tojson)
