# Class: LegacyKeyPathExpression\<CustomPathJSON>

**`Deprecated`**

Use `KeyPathExpression` instead.
Represents a key path expression, which is used to reference a variable by its key path.

## Type parameters

| Name | Type |
| :------ | :------ |
| `CustomPathJSON` | extends [`ASTNodeJSON`](/en/auto-docs/editor/interfaces/ASTNodeJSON.md) = `KeyPathExpressionJSON` |

## Hierarchy

* [`BaseExpression`](/en/auto-docs/editor/classes/BaseExpression.md)<`CustomPathJSON`>

  ↳ **`LegacyKeyPathExpression`**

## Table of contents

### Constructors

* [constructor](/en/auto-docs/editor/classes/LegacyKeyPathExpression.md#constructor)

### Properties

* [changeLocked](/en/auto-docs/editor/classes/LegacyKeyPathExpression.md#changelocked)
* [flags](/en/auto-docs/editor/classes/LegacyKeyPathExpression.md#flags)
* [key](/en/auto-docs/editor/classes/LegacyKeyPathExpression.md#key)
* [onDispose](/en/auto-docs/editor/classes/LegacyKeyPathExpression.md#ondispose)
* [opts](/en/auto-docs/editor/classes/LegacyKeyPathExpression.md#opts)
* [parent](/en/auto-docs/editor/classes/LegacyKeyPathExpression.md#parent)
* [refs$](/en/auto-docs/editor/classes/LegacyKeyPathExpression.md#refs$)
* [scope](/en/auto-docs/editor/classes/LegacyKeyPathExpression.md#scope)
* [toDispose](/en/auto-docs/editor/classes/LegacyKeyPathExpression.md#todispose)
* [value$](/en/auto-docs/editor/classes/LegacyKeyPathExpression.md#value$)
* [kind](/en/auto-docs/editor/classes/LegacyKeyPathExpression.md#kind)

### Accessors

* [children](/en/auto-docs/editor/classes/LegacyKeyPathExpression.md#children)
* [disposed](/en/auto-docs/editor/classes/LegacyKeyPathExpression.md#disposed)
* [globalVariableTable](/en/auto-docs/editor/classes/LegacyKeyPathExpression.md#globalvariabletable)
* [hash](/en/auto-docs/editor/classes/LegacyKeyPathExpression.md#hash)
* [keyPath](/en/auto-docs/editor/classes/LegacyKeyPathExpression.md#keypath)
* [kind](/en/auto-docs/editor/classes/LegacyKeyPathExpression.md#kind-1)
* [parentFields](/en/auto-docs/editor/classes/LegacyKeyPathExpression.md#parentfields)
* [refs](/en/auto-docs/editor/classes/LegacyKeyPathExpression.md#refs)
* [returnType](/en/auto-docs/editor/classes/LegacyKeyPathExpression.md#returntype)
* [version](/en/auto-docs/editor/classes/LegacyKeyPathExpression.md#version)

### Methods

* [dispatchGlobalEvent](/en/auto-docs/editor/classes/LegacyKeyPathExpression.md#dispatchglobalevent)
* [dispose](/en/auto-docs/editor/classes/LegacyKeyPathExpression.md#dispose)
* [fireChange](/en/auto-docs/editor/classes/LegacyKeyPathExpression.md#firechange)
* [fromJSON](/en/auto-docs/editor/classes/LegacyKeyPathExpression.md#fromjson)
* [getRefFields](/en/auto-docs/editor/classes/LegacyKeyPathExpression.md#getreffields)
* [refreshRefs](/en/auto-docs/editor/classes/LegacyKeyPathExpression.md#refreshrefs)
* [subscribe](/en/auto-docs/editor/classes/LegacyKeyPathExpression.md#subscribe)
* [toJSON](/en/auto-docs/editor/classes/LegacyKeyPathExpression.md#tojson)

## Constructors

### constructor

**new LegacyKeyPathExpression**<`CustomPathJSON`>(`params`, `opts`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CustomPathJSON` | extends [`ASTNodeJSON`](/en/auto-docs/editor/interfaces/ASTNodeJSON.md) = `KeyPathExpressionJSON` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`CreateASTParams`](/en/auto-docs/editor/interfaces/CreateASTParams.md) |
| `opts` | `any` |

#### Overrides

[BaseExpression](/en/auto-docs/editor/classes/BaseExpression.md).[constructor](/en/auto-docs/editor/classes/BaseExpression.md#constructor)

## Properties

### changeLocked

**changeLocked**: `boolean`

Update lock.

* When set to `true`, `fireChange` will not trigger any events.
* This is useful when multiple updates are needed, and you want to avoid multiple triggers.

#### Inherited from

[BaseExpression](/en/auto-docs/editor/classes/BaseExpression.md).[changeLocked](/en/auto-docs/editor/classes/BaseExpression.md#changelocked)

***

### flags

**flags**: [`ASTNodeFlags`](/en/auto-docs/editor/enums/ASTNodeFlags.md)

Node flags, used to record some flag information.

#### Inherited from

[BaseExpression](/en/auto-docs/editor/classes/BaseExpression.md).[flags](/en/auto-docs/editor/classes/BaseExpression.md#flags)

***

### key

`Readonly` **key**: `string`

The unique identifier of the ASTNode, which is **immutable**.

* Immutable: Once assigned, the key cannot be changed.
* Automatically generated if not specified, and cannot be changed as well.
* If a new key needs to be generated, the current ASTNode should be destroyed and a new ASTNode should be generated.

#### Inherited from

[BaseExpression](/en/auto-docs/editor/classes/BaseExpression.md).[key](/en/auto-docs/editor/classes/BaseExpression.md#key)

***

### onDispose

**onDispose**: [`Event`](/en/auto-docs/editor/interfaces/Event-1.md)<`void`>

Callback triggered upon disposal.

#### Inherited from

[BaseExpression](/en/auto-docs/editor/classes/BaseExpression.md).[onDispose](/en/auto-docs/editor/classes/BaseExpression.md#ondispose)

***

### opts

`Optional` `Readonly` **opts**: `any`

**`Deprecated`**

Get the injected options for the ASTNode.

Please use `@injectToAst(XXXService) declare xxxService: XXXService` to achieve external dependency injection.

#### Inherited from

[BaseExpression](/en/auto-docs/editor/classes/BaseExpression.md).[opts](/en/auto-docs/editor/classes/BaseExpression.md#opts)

***

### parent

`Readonly` **parent**: `undefined` | [`ASTNode`](/en/auto-docs/editor/classes/ASTNode.md)<`any`, `any`>

The parent ASTNode.

#### Inherited from

[BaseExpression](/en/auto-docs/editor/classes/BaseExpression.md).[parent](/en/auto-docs/editor/classes/BaseExpression.md#parent)

***

### refs$

**refs$**: `Observable`<`ExpressionRefs`>

An observable that emits the referenced variable fields when they change.

#### Inherited from

[BaseExpression](/en/auto-docs/editor/classes/BaseExpression.md).[refs$](/en/auto-docs/editor/classes/BaseExpression.md#refs$)

***

### scope

`Readonly` **scope**: [`Scope`](/en/auto-docs/editor/classes/Scope.md)<`Record`<`string`, `any`>>

The scope in which the ASTNode is located.

#### Inherited from

[BaseExpression](/en/auto-docs/editor/classes/BaseExpression.md).[scope](/en/auto-docs/editor/classes/BaseExpression.md#scope)

***

### toDispose

`Readonly` **toDispose**: [`DisposableCollection`](/en/auto-docs/editor/classes/DisposableCollection.md)

List of disposal handlers for the ASTNode.

#### Inherited from

[BaseExpression](/en/auto-docs/editor/classes/BaseExpression.md).[toDispose](/en/auto-docs/editor/classes/BaseExpression.md#todispose)

***

### value$

`Readonly` **value$**: `BehaviorSubject`<[`ASTNode`](/en/auto-docs/editor/classes/ASTNode.md)<`any`, `any`>>

AST node change Observable events, implemented based on RxJS.

* Emits the current ASTNode value upon subscription.
* Emits a new value whenever `fireChange` is called.

#### Inherited from

[BaseExpression](/en/auto-docs/editor/classes/BaseExpression.md).[value$](/en/auto-docs/editor/classes/BaseExpression.md#value$)

***

### kind

`Static` **kind**: `string`

The kind of the ASTNode.

#### Overrides

[BaseExpression](/en/auto-docs/editor/classes/BaseExpression.md).[kind](/en/auto-docs/editor/classes/BaseExpression.md#kind)

## Accessors

### children

`get` **children**(): [`ASTNode`](/en/auto-docs/editor/classes/ASTNode.md)<`any`, `any`>\[]

Gets all child ASTNodes of the current ASTNode.

#### Returns

[`ASTNode`](/en/auto-docs/editor/classes/ASTNode.md)<`any`, `any`>\[]

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

`get` **globalVariableTable**(): [`IVariableTable`](/en/auto-docs/editor/interfaces/IVariableTable.md)

Get the global variable table, which is used to access referenced variables.

#### Returns

[`IVariableTable`](/en/auto-docs/editor/interfaces/IVariableTable.md)

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

### keyPath

`get` **keyPath**(): `string`\[]

The key path of the variable.

#### Returns

`string`\[]

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

`get` **parentFields**(): [`BaseVariableField`](/en/auto-docs/editor/classes/BaseVariableField.md)<`any`>\[]

Parent variable fields, sorted from closest to farthest.

#### Returns

[`BaseVariableField`](/en/auto-docs/editor/classes/BaseVariableField.md)<`any`>\[]

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

`get` **returnType**(): `undefined` | [`BaseType`](/en/auto-docs/editor/classes/BaseType.md)<`any`, `any`>

The return type of the expression.

#### Returns

`undefined` | [`BaseType`](/en/auto-docs/editor/classes/BaseType.md)<`any`, `any`>

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

[BaseExpression](/en/auto-docs/editor/classes/BaseExpression.md).[dispatchGlobalEvent](/en/auto-docs/editor/classes/BaseExpression.md#dispatchglobalevent)

***

### dispose

**dispose**(): `void`

Disposes the ASTNode.

#### Returns

`void`

#### Inherited from

[BaseExpression](/en/auto-docs/editor/classes/BaseExpression.md).[dispose](/en/auto-docs/editor/classes/BaseExpression.md#dispose)

***

### fireChange

**fireChange**(): `void`

Triggers an update for the current node.

#### Returns

`void`

#### Inherited from

[BaseExpression](/en/auto-docs/editor/classes/BaseExpression.md).[fireChange](/en/auto-docs/editor/classes/BaseExpression.md#firechange)

***

### fromJSON

**fromJSON**(`json`): `void`

Deserializes the `KeyPathExpressionJSON` to the `KeyPathExpression`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `json` | `CustomPathJSON` | The `KeyPathExpressionJSON` to deserialize. |

#### Returns

`void`

#### Overrides

[BaseExpression](/en/auto-docs/editor/classes/BaseExpression.md).[fromJSON](/en/auto-docs/editor/classes/BaseExpression.md#fromjson)

***

### getRefFields

**getRefFields**(): [`BaseVariableField`](/en/auto-docs/editor/classes/BaseVariableField.md)<`any`>\[]

Get the variable fields referenced by the expression.

#### Returns

[`BaseVariableField`](/en/auto-docs/editor/classes/BaseVariableField.md)<`any`>\[]

An array of referenced variable fields.

#### Overrides

[BaseExpression](/en/auto-docs/editor/classes/BaseExpression.md).[getRefFields](/en/auto-docs/editor/classes/BaseExpression.md#getreffields)

***

### refreshRefs

**refreshRefs**(): `void`

Refresh the variable references.

#### Returns

`void`

#### Inherited from

[BaseExpression](/en/auto-docs/editor/classes/BaseExpression.md).[refreshRefs](/en/auto-docs/editor/classes/BaseExpression.md#refreshrefs)

***

### subscribe

**subscribe**<`Data`>(`observer`, `selector?`): [`Disposable`](/en/auto-docs/editor/interfaces/Disposable-1.md)

Listens for changes to the ASTNode.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | [`LegacyKeyPathExpression`](/en/auto-docs/editor/classes/LegacyKeyPathExpression.md)<`CustomPathJSON`> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `observer` | `ObserverOrNext`<`Data`> | The listener callback. |
| `selector?` | `SubscribeConfig`<[`LegacyKeyPathExpression`](/en/auto-docs/editor/classes/LegacyKeyPathExpression.md)<`CustomPathJSON`>, `Data`> | Listens for specified data. |

#### Returns

[`Disposable`](/en/auto-docs/editor/interfaces/Disposable-1.md)

#### Inherited from

[BaseExpression](/en/auto-docs/editor/classes/BaseExpression.md).[subscribe](/en/auto-docs/editor/classes/BaseExpression.md#subscribe)

***

### toJSON

**toJSON**(): [`ASTNodeJSON`](/en/auto-docs/editor/interfaces/ASTNodeJSON.md)

Serialize the `KeyPathExpression` to `KeyPathExpressionJSON`.

#### Returns

[`ASTNodeJSON`](/en/auto-docs/editor/interfaces/ASTNodeJSON.md)

The JSON representation of `KeyPathExpression`.

#### Overrides

[BaseExpression](/en/auto-docs/editor/classes/BaseExpression.md).[toJSON](/en/auto-docs/editor/classes/BaseExpression.md#tojson)
