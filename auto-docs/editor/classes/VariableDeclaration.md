# Class: VariableDeclaration\<VariableMeta>

An object that performs a cleanup operation when `.dispose()` is called.

Some examples of how disposables are used:

* An event listener that removes itself when `.dispose()` is called.
* The return value from registering a provider. When `.dispose()` is called, the provider is unregistered.

## Type parameters

| Name | Type |
| :------ | :------ |
| `VariableMeta` | `any` |

## Hierarchy

* [`BaseVariableField`](/auto-docs/editor/classes/BaseVariableField.md)<`VariableMeta`>

  ↳ **`VariableDeclaration`**

## Table of contents

### Constructors

* [constructor](/auto-docs/editor/classes/VariableDeclaration.md#constructor)

### Properties

* [changeLocked](/auto-docs/editor/classes/VariableDeclaration.md#changelocked)
* [flags](/auto-docs/editor/classes/VariableDeclaration.md#flags)
* [key](/auto-docs/editor/classes/VariableDeclaration.md#key)
* [onDispose](/auto-docs/editor/classes/VariableDeclaration.md#ondispose)
* [opts](/auto-docs/editor/classes/VariableDeclaration.md#opts)
* [parent](/auto-docs/editor/classes/VariableDeclaration.md#parent)
* [scope](/auto-docs/editor/classes/VariableDeclaration.md#scope)
* [toDispose](/auto-docs/editor/classes/VariableDeclaration.md#todispose)
* [value$](/auto-docs/editor/classes/VariableDeclaration.md#value$)
* [kind](/auto-docs/editor/classes/VariableDeclaration.md#kind)

### Accessors

* [children](/auto-docs/editor/classes/VariableDeclaration.md#children)
* [disposed](/auto-docs/editor/classes/VariableDeclaration.md#disposed)
* [hash](/auto-docs/editor/classes/VariableDeclaration.md#hash)
* [initializer](/auto-docs/editor/classes/VariableDeclaration.md#initializer)
* [keyPath](/auto-docs/editor/classes/VariableDeclaration.md#keypath)
* [kind](/auto-docs/editor/classes/VariableDeclaration.md#kind-1)
* [meta](/auto-docs/editor/classes/VariableDeclaration.md#meta)
* [order](/auto-docs/editor/classes/VariableDeclaration.md#order)
* [parentFields](/auto-docs/editor/classes/VariableDeclaration.md#parentfields)
* [type](/auto-docs/editor/classes/VariableDeclaration.md#type)
* [version](/auto-docs/editor/classes/VariableDeclaration.md#version)

### Methods

* [dispatchGlobalEvent](/auto-docs/editor/classes/VariableDeclaration.md#dispatchglobalevent)
* [dispose](/auto-docs/editor/classes/VariableDeclaration.md#dispose)
* [fireChange](/auto-docs/editor/classes/VariableDeclaration.md#firechange)
* [fromJSON](/auto-docs/editor/classes/VariableDeclaration.md#fromjson)
* [getByKeyPath](/auto-docs/editor/classes/VariableDeclaration.md#getbykeypath)
* [onTypeChange](/auto-docs/editor/classes/VariableDeclaration.md#ontypechange)
* [subscribe](/auto-docs/editor/classes/VariableDeclaration.md#subscribe)
* [toJSON](/auto-docs/editor/classes/VariableDeclaration.md#tojson)
* [updateInitializer](/auto-docs/editor/classes/VariableDeclaration.md#updateinitializer)
* [updateMeta](/auto-docs/editor/classes/VariableDeclaration.md#updatemeta)
* [updateOrder](/auto-docs/editor/classes/VariableDeclaration.md#updateorder)
* [updateType](/auto-docs/editor/classes/VariableDeclaration.md#updatetype)

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
| `params` | [`CreateASTParams`](/auto-docs/editor/interfaces/CreateASTParams.md) |

#### Overrides

[BaseVariableField](/auto-docs/editor/classes/BaseVariableField.md).[constructor](/auto-docs/editor/classes/BaseVariableField.md#constructor)

## Properties

### changeLocked

**changeLocked**: `boolean`

更新锁

#### Inherited from

[BaseVariableField](/auto-docs/editor/classes/BaseVariableField.md).[changeLocked](/auto-docs/editor/classes/BaseVariableField.md#changelocked)

***

### flags

**flags**: [`ASTNodeFlags`](/auto-docs/editor/enums/ASTNodeFlags.md)

节点 Flags，记录一些 Flag 信息

#### Inherited from

[BaseVariableField](/auto-docs/editor/classes/BaseVariableField.md).[flags](/auto-docs/editor/classes/BaseVariableField.md#flags)

***

### key

`Readonly` **key**: `string`

节点的唯一标识符，节点不指定则默认由 nanoid 生成，不可更改

* 如需要生成新 key，则销毁当前节点并生成新的节点

#### Inherited from

[BaseVariableField](/auto-docs/editor/classes/BaseVariableField.md).[key](/auto-docs/editor/classes/BaseVariableField.md#key)

***

### onDispose

**onDispose**: [`Event`](/auto-docs/editor/interfaces/Event-1.md)<`void`>

销毁时触发的回调

#### Inherited from

[BaseVariableField](/auto-docs/editor/classes/BaseVariableField.md).[onDispose](/auto-docs/editor/classes/BaseVariableField.md#ondispose)

***

### opts

`Optional` `Readonly` **opts**: `any`

**`Deprecated`**

获取 ASTNode 注入的 opts

请使用 @injectToAst(XXXService) declare xxxService: XXXService 实现外部依赖注入

#### Inherited from

[BaseVariableField](/auto-docs/editor/classes/BaseVariableField.md).[opts](/auto-docs/editor/classes/BaseVariableField.md#opts)

***

### parent

`Readonly` **parent**: `undefined` | [`ASTNode`](/auto-docs/editor/classes/ASTNode.md)<`any`, `any`>

父节点

#### Inherited from

[BaseVariableField](/auto-docs/editor/classes/BaseVariableField.md).[parent](/auto-docs/editor/classes/BaseVariableField.md#parent)

***

### scope

`Readonly` **scope**: [`Scope`](/auto-docs/editor/classes/Scope.md)<`Record`<`string`, `any`>>

节点所处的作用域

#### Inherited from

[BaseVariableField](/auto-docs/editor/classes/BaseVariableField.md).[scope](/auto-docs/editor/classes/BaseVariableField.md#scope)

***

### toDispose

`Readonly` **toDispose**: [`DisposableCollection`](/auto-docs/editor/classes/DisposableCollection.md)

删除节点处理事件列表

#### Inherited from

[BaseVariableField](/auto-docs/editor/classes/BaseVariableField.md).[toDispose](/auto-docs/editor/classes/BaseVariableField.md#todispose)

***

### value$

`Readonly` **value$**: `BehaviorSubject`<[`ASTNode`](/auto-docs/editor/classes/ASTNode.md)<`any`, `any`>>

AST 节点变化事件，基于 Rxjs 实现

* 使用了 BehaviorSubject, 在订阅时会自动触发一次事件，事件为当前值

#### Inherited from

[BaseVariableField](/auto-docs/editor/classes/BaseVariableField.md).[value$](/auto-docs/editor/classes/BaseVariableField.md#value$)

***

### kind

`Static` **kind**: `string`

节点类型

#### Overrides

[BaseVariableField](/auto-docs/editor/classes/BaseVariableField.md).[kind](/auto-docs/editor/classes/BaseVariableField.md#kind)

## Accessors

### children

`get` **children**(): [`ASTNode`](/auto-docs/editor/classes/ASTNode.md)<`any`, `any`>\[]

获取当前节点所有子节点

#### Returns

[`ASTNode`](/auto-docs/editor/classes/ASTNode.md)<`any`, `any`>\[]

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

节点唯一 hash 值

#### Returns

`string`

#### Inherited from

BaseVariableField.hash

***

### initializer

`get` **initializer**(): `undefined` | [`BaseExpression`](/auto-docs/editor/classes/BaseExpression.md)<`any`, `any`>

#### Returns

`undefined` | [`BaseExpression`](/auto-docs/editor/classes/BaseExpression.md)<`any`, `any`>

#### Inherited from

BaseVariableField.initializer

***

### keyPath

`get` **keyPath**(): `string`\[]

#### Returns

`string`\[]

#### Inherited from

BaseVariableField.keyPath

***

### kind

`get` **kind**(): `string`

AST 节点的类型

#### Returns

`string`

#### Inherited from

BaseVariableField.kind

***

### meta

`get` **meta**(): `VariableMeta`

#### Returns

`VariableMeta`

#### Inherited from

BaseVariableField.meta

***

### order

`get` **order**(): `number`

#### Returns

`number`

***

### parentFields

`get` **parentFields**(): [`BaseVariableField`](/auto-docs/editor/classes/BaseVariableField.md)<`any`>\[]

父变量字段，通过由近而远的方式进行排序

#### Returns

[`BaseVariableField`](/auto-docs/editor/classes/BaseVariableField.md)<`any`>\[]

#### Inherited from

BaseVariableField.parentFields

***

### type

`get` **type**(): [`BaseType`](/auto-docs/editor/classes/BaseType.md)<`any`, `any`>

#### Returns

[`BaseType`](/auto-docs/editor/classes/BaseType.md)<`any`, `any`>

#### Inherited from

BaseVariableField.type

***

### version

`get` **version**(): `number`

节点的版本值

* 通过 NodeA === NodeB && versionA === versionB 可以比较两者是否相等

#### Returns

`number`

#### Inherited from

BaseVariableField.version

## Methods

### dispatchGlobalEvent

**dispatchGlobalEvent**<`ActionType`>(`event`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ActionType` | extends [`GlobalEventActionType`](/auto-docs/editor/interfaces/GlobalEventActionType.md)<`string`, `any`, [`ASTNode`](/auto-docs/editor/classes/ASTNode.md)<`any`, `any`>, `ActionType`> = [`GlobalEventActionType`](/auto-docs/editor/interfaces/GlobalEventActionType.md)<`string`, `any`, [`ASTNode`](/auto-docs/editor/classes/ASTNode.md)<`any`, `any`>> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Omit`<`ActionType`, `"ast"`> |

#### Returns

`void`

#### Inherited from

[BaseVariableField](/auto-docs/editor/classes/BaseVariableField.md).[dispatchGlobalEvent](/auto-docs/editor/classes/BaseVariableField.md#dispatchglobalevent)

***

### dispose

**dispose**(): `void`

销毁

#### Returns

`void`

#### Inherited from

[BaseVariableField](/auto-docs/editor/classes/BaseVariableField.md).[dispose](/auto-docs/editor/classes/BaseVariableField.md#dispose)

***

### fireChange

**fireChange**(): `void`

触发当前节点更新

#### Returns

`void`

#### Inherited from

[BaseVariableField](/auto-docs/editor/classes/BaseVariableField.md).[fireChange](/auto-docs/editor/classes/BaseVariableField.md#firechange)

***

### fromJSON

**fromJSON**(`«destructured»`): `void`

解析 VariableDeclarationJSON 从而生成变量声明节点

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`VariableDeclarationJSON`](/auto-docs/editor/types/VariableDeclarationJSON.md)<`VariableMeta`> |

#### Returns

`void`

#### Overrides

[BaseVariableField](/auto-docs/editor/classes/BaseVariableField.md).[fromJSON](/auto-docs/editor/classes/BaseVariableField.md#fromjson)

***

### getByKeyPath

**getByKeyPath**(`keyPath`): `undefined` | [`BaseVariableField`](/auto-docs/editor/classes/BaseVariableField.md)<`any`>

根据 keyPath 去找下钻的变量字段

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyPath` | `string`\[] |

#### Returns

`undefined` | [`BaseVariableField`](/auto-docs/editor/classes/BaseVariableField.md)<`any`>

#### Inherited from

[BaseVariableField](/auto-docs/editor/classes/BaseVariableField.md).[getByKeyPath](/auto-docs/editor/classes/BaseVariableField.md#getbykeypath)

***

### onTypeChange

**onTypeChange**(`observer`): [`Disposable`](/auto-docs/editor/interfaces/Disposable-1.md)

监听类型变化

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | (`type`: `undefined` | [`ASTNode`](/auto-docs/editor/classes/ASTNode.md)<`any`, `any`>) => `void` |

#### Returns

[`Disposable`](/auto-docs/editor/interfaces/Disposable-1.md)

#### Overrides

[BaseVariableField](/auto-docs/editor/classes/BaseVariableField.md).[onTypeChange](/auto-docs/editor/classes/BaseVariableField.md#ontypechange)

***

### subscribe

**subscribe**<`Data`>(`observer`, `selector?`): [`Disposable`](/auto-docs/editor/interfaces/Disposable-1.md)

监听 AST 节点的变化

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | [`VariableDeclaration`](/auto-docs/editor/classes/VariableDeclaration.md)<`VariableMeta`> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `observer` | `ObserverOrNext`<`Data`> | 监听回调 |
| `selector?` | `SubscribeConfig`<[`VariableDeclaration`](/auto-docs/editor/classes/VariableDeclaration.md)<`VariableMeta`>, `Data`> | 监听指定数据 |

#### Returns

[`Disposable`](/auto-docs/editor/interfaces/Disposable-1.md)

#### Inherited from

[BaseVariableField](/auto-docs/editor/classes/BaseVariableField.md).[subscribe](/auto-docs/editor/classes/BaseVariableField.md#subscribe)

***

### toJSON

**toJSON**(): `BaseVariableFieldJSON`<`VariableMeta`> & { `kind`: `string`  }

转换为 JSON

#### Returns

`BaseVariableFieldJSON`<`VariableMeta`> & { `kind`: `string`  }

#### Inherited from

[BaseVariableField](/auto-docs/editor/classes/BaseVariableField.md).[toJSON](/auto-docs/editor/classes/BaseVariableField.md#tojson)

***

### updateInitializer

**updateInitializer**(`nextInitializer?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextInitializer?` | [`ASTNodeJSON`](/auto-docs/editor/interfaces/ASTNodeJSON.md) |

#### Returns

`void`

#### Inherited from

[BaseVariableField](/auto-docs/editor/classes/BaseVariableField.md).[updateInitializer](/auto-docs/editor/classes/BaseVariableField.md#updateinitializer)

***

### updateMeta

**updateMeta**(`nextMeta`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextMeta` | `VariableMeta` |

#### Returns

`void`

#### Inherited from

[BaseVariableField](/auto-docs/editor/classes/BaseVariableField.md).[updateMeta](/auto-docs/editor/classes/BaseVariableField.md#updatemeta)

***

### updateOrder

**updateOrder**(`order?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `order?` | `number` |

#### Returns

`void`

***

### updateType

**updateType**(`type`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `undefined` | `ASTNodeJSONOrKind` |

#### Returns

`void`

#### Inherited from

[BaseVariableField](/auto-docs/editor/classes/BaseVariableField.md).[updateType](/auto-docs/editor/classes/BaseVariableField.md#updatetype)
