# Class: WrapArrayExpression

Represents a wrap expression, which wraps an expression with an array.

## Hierarchy

* [`BaseExpression`](/en/auto-docs/variable-core/classes/BaseExpression.md)<[`WrapArrayExpressionJSON`](/en/auto-docs/variable-core/interfaces/WrapArrayExpressionJSON.md)>

  ↳ **`WrapArrayExpression`**

## Table of contents

### Constructors

* [constructor](/en/auto-docs/variable-core/classes/WrapArrayExpression.md#constructor)

### Properties

* [changeLocked](/en/auto-docs/variable-core/classes/WrapArrayExpression.md#changelocked)
* [flags](/en/auto-docs/variable-core/classes/WrapArrayExpression.md#flags)
* [key](/en/auto-docs/variable-core/classes/WrapArrayExpression.md#key)
* [onDispose](/en/auto-docs/variable-core/classes/WrapArrayExpression.md#ondispose)
* [opts](/en/auto-docs/variable-core/classes/WrapArrayExpression.md#opts)
* [parent](/en/auto-docs/variable-core/classes/WrapArrayExpression.md#parent)
* [refs$](/en/auto-docs/variable-core/classes/WrapArrayExpression.md#refs$)
* [scope](/en/auto-docs/variable-core/classes/WrapArrayExpression.md#scope)
* [toDispose](/en/auto-docs/variable-core/classes/WrapArrayExpression.md#todispose)
* [value$](/en/auto-docs/variable-core/classes/WrapArrayExpression.md#value$)
* [kind](/en/auto-docs/variable-core/classes/WrapArrayExpression.md#kind)

### Accessors

* [children](/en/auto-docs/variable-core/classes/WrapArrayExpression.md#children)
* [disposed](/en/auto-docs/variable-core/classes/WrapArrayExpression.md#disposed)
* [globalVariableTable](/en/auto-docs/variable-core/classes/WrapArrayExpression.md#globalvariabletable)
* [hash](/en/auto-docs/variable-core/classes/WrapArrayExpression.md#hash)
* [kind](/en/auto-docs/variable-core/classes/WrapArrayExpression.md#kind-1)
* [parentFields](/en/auto-docs/variable-core/classes/WrapArrayExpression.md#parentfields)
* [refs](/en/auto-docs/variable-core/classes/WrapArrayExpression.md#refs)
* [returnType](/en/auto-docs/variable-core/classes/WrapArrayExpression.md#returntype)
* [version](/en/auto-docs/variable-core/classes/WrapArrayExpression.md#version)
* [wrapFor](/en/auto-docs/variable-core/classes/WrapArrayExpression.md#wrapfor)

### Methods

* [dispatchGlobalEvent](/en/auto-docs/variable-core/classes/WrapArrayExpression.md#dispatchglobalevent)
* [dispose](/en/auto-docs/variable-core/classes/WrapArrayExpression.md#dispose)
* [fireChange](/en/auto-docs/variable-core/classes/WrapArrayExpression.md#firechange)
* [fromJSON](/en/auto-docs/variable-core/classes/WrapArrayExpression.md#fromjson)
* [getRefFields](/en/auto-docs/variable-core/classes/WrapArrayExpression.md#getreffields)
* [refreshRefs](/en/auto-docs/variable-core/classes/WrapArrayExpression.md#refreshrefs)
* [refreshReturnType](/en/auto-docs/variable-core/classes/WrapArrayExpression.md#refreshreturntype)
* [subscribe](/en/auto-docs/variable-core/classes/WrapArrayExpression.md#subscribe)
* [toJSON](/en/auto-docs/variable-core/classes/WrapArrayExpression.md#tojson)

## Constructors

### constructor

**new WrapArrayExpression**(`params`, `opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`CreateASTParams`](/en/auto-docs/variable-core/interfaces/CreateASTParams.md) |
| `opts?` | `any` |

#### Inherited from

[BaseExpression](/en/auto-docs/variable-core/classes/BaseExpression.md).[constructor](/en/auto-docs/variable-core/classes/BaseExpression.md#constructor)

## Properties

### changeLocked

**changeLocked**: `boolean` = `false`

Update lock.

* When set to `true`, `fireChange` will not trigger any events.
* This is useful when multiple updates are needed, and you want to avoid multiple triggers.

#### Inherited from

[BaseExpression](/en/auto-docs/variable-core/classes/BaseExpression.md).[changeLocked](/en/auto-docs/variable-core/classes/BaseExpression.md#changelocked)

***

### flags

**flags**: [`ASTNodeFlags`](/en/auto-docs/variable-core/enums/ASTNodeFlags.md) = `ASTNodeFlags.Expression`

Node flags, used to record some flag information.

#### Inherited from

[BaseExpression](/en/auto-docs/variable-core/classes/BaseExpression.md).[flags](/en/auto-docs/variable-core/classes/BaseExpression.md#flags)

***

### key

`Readonly` **key**: `string`

The unique identifier of the ASTNode, which is **immutable**.

* Immutable: Once assigned, the key cannot be changed.
* Automatically generated if not specified, and cannot be changed as well.
* If a new key needs to be generated, the current ASTNode should be destroyed and a new ASTNode should be generated.

#### Inherited from

[BaseExpression](/en/auto-docs/variable-core/classes/BaseExpression.md).[key](/en/auto-docs/variable-core/classes/BaseExpression.md#key)

***

### onDispose

**onDispose**: `Event`<`void`>

Callback triggered upon disposal.

#### Inherited from

[BaseExpression](/en/auto-docs/variable-core/classes/BaseExpression.md).[onDispose](/en/auto-docs/variable-core/classes/BaseExpression.md#ondispose)

***

### opts

`Optional` `Readonly` **opts**: `any`

**`Deprecated`**

Get the injected options for the ASTNode.

Please use `@injectToAst(XXXService) declare xxxService: XXXService` to achieve external dependency injection.

#### Inherited from

[BaseExpression](/en/auto-docs/variable-core/classes/BaseExpression.md).[opts](/en/auto-docs/variable-core/classes/BaseExpression.md#opts)

***

### parent

`Readonly` **parent**: `undefined` | [`ASTNode`](/en/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`>

The parent ASTNode.

#### Inherited from

[BaseExpression](/en/auto-docs/variable-core/classes/BaseExpression.md).[parent](/en/auto-docs/variable-core/classes/BaseExpression.md#parent)

***

### refs$

**refs$**: `Observable`<`ExpressionRefs`>

An observable that emits the referenced variable fields when they change.

#### Inherited from

[BaseExpression](/en/auto-docs/variable-core/classes/BaseExpression.md).[refs$](/en/auto-docs/variable-core/classes/BaseExpression.md#refs$)

***

### scope

`Readonly` **scope**: [`Scope`](/en/auto-docs/variable-core/classes/Scope.md)<`Record`<`string`, `any`>>

The scope in which the ASTNode is located.

#### Inherited from

[BaseExpression](/en/auto-docs/variable-core/classes/BaseExpression.md).[scope](/en/auto-docs/variable-core/classes/BaseExpression.md#scope)

***

### toDispose

`Readonly` **toDispose**: `DisposableCollection`

List of disposal handlers for the ASTNode.

#### Inherited from

[BaseExpression](/en/auto-docs/variable-core/classes/BaseExpression.md).[toDispose](/en/auto-docs/variable-core/classes/BaseExpression.md#todispose)

***

### value$

`Readonly` **value$**: `BehaviorSubject`<[`ASTNode`](/en/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`>>

AST node change Observable events, implemented based on RxJS.

* Emits the current ASTNode value upon subscription.
* Emits a new value whenever `fireChange` is called.

#### Inherited from

[BaseExpression](/en/auto-docs/variable-core/classes/BaseExpression.md).[value$](/en/auto-docs/variable-core/classes/BaseExpression.md#value$)

***

### kind

`Static` **kind**: `string` = `ASTKind.WrapArrayExpression`

The kind of the ASTNode.

#### Overrides

[BaseExpression](/en/auto-docs/variable-core/classes/BaseExpression.md).[kind](/en/auto-docs/variable-core/classes/BaseExpression.md#kind)

## Accessors

### children

`get` **children**(): [`ASTNode`](/en/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`>\[]

Gets all child ASTNodes of the current ASTNode.

#### Returns

[`ASTNode`](/en/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`>\[]

#### Inherited from

BaseExpression.children

***

### disposed

`get` **disposed**(): `boolean`

#### Returns

`boolean`

#### Inherited from

BaseExpression.disposed

***

### globalVariableTable

`get` **globalVariableTable**(): [`IVariableTable`](/en/auto-docs/variable-core/interfaces/IVariableTable.md)

Get the global variable table, which is used to access referenced variables.

#### Returns

[`IVariableTable`](/en/auto-docs/variable-core/interfaces/IVariableTable.md)

#### Inherited from

BaseExpression.globalVariableTable

***

### hash

`get` **hash**(): `string`

The unique hash value of the ASTNode.

* It will update when the ASTNode is updated.
* You can used to check two ASTNode are equal.

#### Returns

`string`

#### Inherited from

BaseExpression.hash

***

### kind

`get` **kind**(): `string`

The type of the ASTNode.

#### Returns

`string`

#### Inherited from

BaseExpression.kind

***

### parentFields

`get` **parentFields**(): [`BaseVariableField`](/en/auto-docs/variable-core/classes/BaseVariableField.md)<`any`>\[]

Parent variable fields, sorted from closest to farthest.

#### Returns

[`BaseVariableField`](/en/auto-docs/variable-core/classes/BaseVariableField.md)<`any`>\[]

#### Inherited from

BaseExpression.parentFields

***

### refs

`get` **refs**(): `ExpressionRefs`

The variable fields referenced by the expression.

#### Returns

`ExpressionRefs`

#### Inherited from

BaseExpression.refs

***

### returnType

`get` **returnType**(): `undefined` | [`BaseType`](/en/auto-docs/variable-core/classes/BaseType.md)<`any`, `any`>

The return type of the expression.

#### Returns

`undefined` | [`BaseType`](/en/auto-docs/variable-core/classes/BaseType.md)<`any`, `any`>

#### Overrides

BaseExpression.returnType

***

### version

`get` **version**(): `number`

The version value of the ASTNode.

* You can used to check whether ASTNode are updated.

#### Returns

`number`

#### Inherited from

BaseExpression.version

***

### wrapFor

`get` **wrapFor**(): `undefined` | [`BaseExpression`](/en/auto-docs/variable-core/classes/BaseExpression.md)<`any`, `any`>

The expression to be wrapped.

#### Returns

`undefined` | [`BaseExpression`](/en/auto-docs/variable-core/classes/BaseExpression.md)<`any`, `any`>

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

[BaseExpression](/en/auto-docs/variable-core/classes/BaseExpression.md).[dispatchGlobalEvent](/en/auto-docs/variable-core/classes/BaseExpression.md#dispatchglobalevent)

***

### dispose

**dispose**(): `void`

Disposes the ASTNode.

#### Returns

`void`

#### Inherited from

[BaseExpression](/en/auto-docs/variable-core/classes/BaseExpression.md).[dispose](/en/auto-docs/variable-core/classes/BaseExpression.md#dispose)

***

### fireChange

**fireChange**(): `void`

Triggers an update for the current node.

#### Returns

`void`

#### Inherited from

[BaseExpression](/en/auto-docs/variable-core/classes/BaseExpression.md).[fireChange](/en/auto-docs/variable-core/classes/BaseExpression.md#firechange)

***

### fromJSON

**fromJSON**(`json`): `void`

Deserializes the `WrapArrayExpressionJSON` to the `WrapArrayExpression`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `json` | [`WrapArrayExpressionJSON`](/en/auto-docs/variable-core/interfaces/WrapArrayExpressionJSON.md) | The `WrapArrayExpressionJSON` to deserialize. |

#### Returns

`void`

#### Overrides

[BaseExpression](/en/auto-docs/variable-core/classes/BaseExpression.md).[fromJSON](/en/auto-docs/variable-core/classes/BaseExpression.md#fromjson)

***

### getRefFields

**getRefFields**(): \[]

Get the variable fields referenced by the expression.

#### Returns

\[]

An empty array, as this expression does not reference any variables.

#### Overrides

[BaseExpression](/en/auto-docs/variable-core/classes/BaseExpression.md).[getRefFields](/en/auto-docs/variable-core/classes/BaseExpression.md#getreffields)

***

### refreshRefs

**refreshRefs**(): `void`

Refresh the variable references.

#### Returns

`void`

#### Inherited from

[BaseExpression](/en/auto-docs/variable-core/classes/BaseExpression.md).[refreshRefs](/en/auto-docs/variable-core/classes/BaseExpression.md#refreshrefs)

***

### refreshReturnType

**refreshReturnType**(): `void`

Refresh the return type of the expression.

#### Returns

`void`

***

### subscribe

**subscribe**<`Data`>(`observer`, `selector?`): `Disposable`

Listens for changes to the ASTNode.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | [`WrapArrayExpression`](/en/auto-docs/variable-core/classes/WrapArrayExpression.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `observer` | `ObserverOrNext`<`Data`> | The listener callback. |
| `selector` | `SubscribeConfig`<[`WrapArrayExpression`](/en/auto-docs/variable-core/classes/WrapArrayExpression.md), `Data`> | Listens for specified data. |

#### Returns

`Disposable`

#### Inherited from

[BaseExpression](/en/auto-docs/variable-core/classes/BaseExpression.md).[subscribe](/en/auto-docs/variable-core/classes/BaseExpression.md#subscribe)

***

### toJSON

**toJSON**(): [`ASTNodeJSON`](/en/auto-docs/variable-core/interfaces/ASTNodeJSON.md)

Serialize the `WrapArrayExpression` to `WrapArrayExpressionJSON`.

#### Returns

[`ASTNodeJSON`](/en/auto-docs/variable-core/interfaces/ASTNodeJSON.md)

The JSON representation of `WrapArrayExpression`.

#### Overrides

[BaseExpression](/en/auto-docs/variable-core/classes/BaseExpression.md).[toJSON](/en/auto-docs/variable-core/classes/BaseExpression.md#tojson)
