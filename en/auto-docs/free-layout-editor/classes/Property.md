# Class: Property\<VariableMeta>

An object that performs a cleanup operation when `.dispose()` is called.

Some examples of how disposables are used:

* An event listener that removes itself when `.dispose()` is called.
* The return value from registering a provider. When `.dispose()` is called, the provider is unregistered.

## Type parameters

| Name | Type |
| :------ | :------ |
| `VariableMeta` | `any` |

## Hierarchy

* [`BaseVariableField`](/en/auto-docs/free-layout-editor/classes/BaseVariableField.md)<`VariableMeta`>

  ↳ **`Property`**

## Table of contents

### Constructors

* [constructor](/en/auto-docs/free-layout-editor/classes/Property.md#constructor)

### Properties

* [changeLocked](/en/auto-docs/free-layout-editor/classes/Property.md#changelocked)
* [flags](/en/auto-docs/free-layout-editor/classes/Property.md#flags)
* [key](/en/auto-docs/free-layout-editor/classes/Property.md#key)
* [onDispose](/en/auto-docs/free-layout-editor/classes/Property.md#ondispose)
* [opts](/en/auto-docs/free-layout-editor/classes/Property.md#opts)
* [parent](/en/auto-docs/free-layout-editor/classes/Property.md#parent)
* [scope](/en/auto-docs/free-layout-editor/classes/Property.md#scope)
* [toDispose](/en/auto-docs/free-layout-editor/classes/Property.md#todispose)
* [value$](/en/auto-docs/free-layout-editor/classes/Property.md#value$)
* [kind](/en/auto-docs/free-layout-editor/classes/Property.md#kind)

### Accessors

* [children](/en/auto-docs/free-layout-editor/classes/Property.md#children)
* [disposed](/en/auto-docs/free-layout-editor/classes/Property.md#disposed)
* [hash](/en/auto-docs/free-layout-editor/classes/Property.md#hash)
* [initializer](/en/auto-docs/free-layout-editor/classes/Property.md#initializer)
* [keyPath](/en/auto-docs/free-layout-editor/classes/Property.md#keypath)
* [kind](/en/auto-docs/free-layout-editor/classes/Property.md#kind-1)
* [meta](/en/auto-docs/free-layout-editor/classes/Property.md#meta)
* [parentFields](/en/auto-docs/free-layout-editor/classes/Property.md#parentfields)
* [type](/en/auto-docs/free-layout-editor/classes/Property.md#type)
* [version](/en/auto-docs/free-layout-editor/classes/Property.md#version)

### Methods

* [dispatchGlobalEvent](/en/auto-docs/free-layout-editor/classes/Property.md#dispatchglobalevent)
* [dispose](/en/auto-docs/free-layout-editor/classes/Property.md#dispose)
* [fireChange](/en/auto-docs/free-layout-editor/classes/Property.md#firechange)
* [fromJSON](/en/auto-docs/free-layout-editor/classes/Property.md#fromjson)
* [getByKeyPath](/en/auto-docs/free-layout-editor/classes/Property.md#getbykeypath)
* [onTypeChange](/en/auto-docs/free-layout-editor/classes/Property.md#ontypechange)
* [subscribe](/en/auto-docs/free-layout-editor/classes/Property.md#subscribe)
* [toJSON](/en/auto-docs/free-layout-editor/classes/Property.md#tojson)
* [updateInitializer](/en/auto-docs/free-layout-editor/classes/Property.md#updateinitializer)
* [updateMeta](/en/auto-docs/free-layout-editor/classes/Property.md#updatemeta)
* [updateType](/en/auto-docs/free-layout-editor/classes/Property.md#updatetype)

## Constructors

### constructor

**new Property**<`VariableMeta`>(`createParams`, `opts?`)

构造函数

#### Type parameters

| Name | Type |
| :------ | :------ |
| `VariableMeta` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `createParams` | [`CreateASTParams`](/en/auto-docs/free-layout-editor/interfaces/CreateASTParams.md) | 创建 ASTNode 的必要参数 |
| `opts?` | `any` | - |

#### Inherited from

[BaseVariableField](/en/auto-docs/free-layout-editor/classes/BaseVariableField.md).[constructor](/en/auto-docs/free-layout-editor/classes/BaseVariableField.md#constructor)

## Properties

### changeLocked

**changeLocked**: `boolean`

更新锁

#### Inherited from

[BaseVariableField](/en/auto-docs/free-layout-editor/classes/BaseVariableField.md).[changeLocked](/en/auto-docs/free-layout-editor/classes/BaseVariableField.md#changelocked)

***

### flags

**flags**: [`ASTNodeFlags`](/en/auto-docs/free-layout-editor/enums/ASTNodeFlags.md)

节点 Flags，记录一些 Flag 信息

#### Inherited from

[BaseVariableField](/en/auto-docs/free-layout-editor/classes/BaseVariableField.md).[flags](/en/auto-docs/free-layout-editor/classes/BaseVariableField.md#flags)

***

### key

`Readonly` **key**: `string`

节点的唯一标识符，节点不指定则默认由 nanoid 生成，不可更改

* 如需要生成新 key，则销毁当前节点并生成新的节点

#### Inherited from

[BaseVariableField](/en/auto-docs/free-layout-editor/classes/BaseVariableField.md).[key](/en/auto-docs/free-layout-editor/classes/BaseVariableField.md#key)

***

### onDispose

**onDispose**: [`Event`](/en/auto-docs/free-layout-editor/interfaces/Event-1.md)<`void`>

销毁时触发的回调

#### Inherited from

[BaseVariableField](/en/auto-docs/free-layout-editor/classes/BaseVariableField.md).[onDispose](/en/auto-docs/free-layout-editor/classes/BaseVariableField.md#ondispose)

***

### opts

`Optional` `Readonly` **opts**: `any`

**`Deprecated`**

获取 ASTNode 注入的 opts

请使用 @injectToAst(XXXService) declare xxxService: XXXService 实现外部依赖注入

#### Inherited from

[BaseVariableField](/en/auto-docs/free-layout-editor/classes/BaseVariableField.md).[opts](/en/auto-docs/free-layout-editor/classes/BaseVariableField.md#opts)

***

### parent

`Readonly` **parent**: `undefined` | [`ASTNode`](/en/auto-docs/free-layout-editor/classes/ASTNode.md)<`any`, `any`>

父节点

#### Inherited from

[BaseVariableField](/en/auto-docs/free-layout-editor/classes/BaseVariableField.md).[parent](/en/auto-docs/free-layout-editor/classes/BaseVariableField.md#parent)

***

### scope

`Readonly` **scope**: [`Scope`](/en/auto-docs/free-layout-editor/classes/Scope.md)<`Record`<`string`, `any`>>

节点所处的作用域

#### Inherited from

[BaseVariableField](/en/auto-docs/free-layout-editor/classes/BaseVariableField.md).[scope](/en/auto-docs/free-layout-editor/classes/BaseVariableField.md#scope)

***

### toDispose

`Readonly` **toDispose**: [`DisposableCollection`](/en/auto-docs/free-layout-editor/classes/DisposableCollection.md)

删除节点处理事件列表

#### Inherited from

[BaseVariableField](/en/auto-docs/free-layout-editor/classes/BaseVariableField.md).[toDispose](/en/auto-docs/free-layout-editor/classes/BaseVariableField.md#todispose)

***

### value$

`Readonly` **value$**: `BehaviorSubject`<[`ASTNode`](/en/auto-docs/free-layout-editor/classes/ASTNode.md)<`any`, `any`>>

AST 节点变化事件，基于 Rxjs 实现

* 使用了 BehaviorSubject, 在订阅时会自动触发一次事件，事件为当前值

#### Inherited from

[BaseVariableField](/en/auto-docs/free-layout-editor/classes/BaseVariableField.md).[value$](/en/auto-docs/free-layout-editor/classes/BaseVariableField.md#value$)

***

### kind

`Static` **kind**: `string`

节点类型

#### Overrides

[BaseVariableField](/en/auto-docs/free-layout-editor/classes/BaseVariableField.md).[kind](/en/auto-docs/free-layout-editor/classes/BaseVariableField.md#kind)

## Accessors

### children

`get` **children**(): [`ASTNode`](/en/auto-docs/free-layout-editor/classes/ASTNode.md)<`any`, `any`>\[]

获取当前节点所有子节点

#### Returns

[`ASTNode`](/en/auto-docs/free-layout-editor/classes/ASTNode.md)<`any`, `any`>\[]

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

`get` **initializer**(): `undefined` | [`BaseExpression`](/en/auto-docs/free-layout-editor/classes/BaseExpression.md)<`any`, `any`>

#### Returns

`undefined` | [`BaseExpression`](/en/auto-docs/free-layout-editor/classes/BaseExpression.md)<`any`, `any`>

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

### parentFields

`get` **parentFields**(): [`BaseVariableField`](/en/auto-docs/free-layout-editor/classes/BaseVariableField.md)<`any`>\[]

父变量字段，通过由近而远的方式进行排序

#### Returns

[`BaseVariableField`](/en/auto-docs/free-layout-editor/classes/BaseVariableField.md)<`any`>\[]

#### Inherited from

BaseVariableField.parentFields

***

### type

`get` **type**(): [`BaseType`](/en/auto-docs/free-layout-editor/classes/BaseType.md)<`any`, `any`>

#### Returns

[`BaseType`](/en/auto-docs/free-layout-editor/classes/BaseType.md)<`any`, `any`>

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
| `ActionType` | extends [`GlobalEventActionType`](/en/auto-docs/free-layout-editor/interfaces/GlobalEventActionType.md)<`string`, `any`, [`ASTNode`](/en/auto-docs/free-layout-editor/classes/ASTNode.md)<`any`, `any`>, `ActionType`> = [`GlobalEventActionType`](/en/auto-docs/free-layout-editor/interfaces/GlobalEventActionType.md)<`string`, `any`, [`ASTNode`](/en/auto-docs/free-layout-editor/classes/ASTNode.md)<`any`, `any`>> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Omit`<`ActionType`, `"ast"`> |

#### Returns

`void`

#### Inherited from

[BaseVariableField](/en/auto-docs/free-layout-editor/classes/BaseVariableField.md).[dispatchGlobalEvent](/en/auto-docs/free-layout-editor/classes/BaseVariableField.md#dispatchglobalevent)

***

### dispose

**dispose**(): `void`

销毁

#### Returns

`void`

#### Inherited from

[BaseVariableField](/en/auto-docs/free-layout-editor/classes/BaseVariableField.md).[dispose](/en/auto-docs/free-layout-editor/classes/BaseVariableField.md#dispose)

***

### fireChange

**fireChange**(): `void`

触发当前节点更新

#### Returns

`void`

#### Inherited from

[BaseVariableField](/en/auto-docs/free-layout-editor/classes/BaseVariableField.md).[fireChange](/en/auto-docs/free-layout-editor/classes/BaseVariableField.md#firechange)

***

### fromJSON

**fromJSON**(`«destructured»`): `void`

解析 VariableDeclarationJSON 从而生成变量声明节点

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `BaseVariableFieldJSON`<`VariableMeta`> |

#### Returns

`void`

#### Inherited from

[BaseVariableField](/en/auto-docs/free-layout-editor/classes/BaseVariableField.md).[fromJSON](/en/auto-docs/free-layout-editor/classes/BaseVariableField.md#fromjson)

***

### getByKeyPath

**getByKeyPath**(`keyPath`): `undefined` | [`BaseVariableField`](/en/auto-docs/free-layout-editor/classes/BaseVariableField.md)<`any`>

根据 keyPath 去找下钻的变量字段

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyPath` | `string`\[] |

#### Returns

`undefined` | [`BaseVariableField`](/en/auto-docs/free-layout-editor/classes/BaseVariableField.md)<`any`>

#### Inherited from

[BaseVariableField](/en/auto-docs/free-layout-editor/classes/BaseVariableField.md).[getByKeyPath](/en/auto-docs/free-layout-editor/classes/BaseVariableField.md#getbykeypath)

***

### onTypeChange

**onTypeChange**(`observer`): [`Disposable`](/en/auto-docs/free-layout-editor/interfaces/Disposable-1.md)

监听类型变化

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | (`type`: `undefined` | [`ASTNode`](/en/auto-docs/free-layout-editor/classes/ASTNode.md)<`any`, `any`>) => `void` |

#### Returns

[`Disposable`](/en/auto-docs/free-layout-editor/interfaces/Disposable-1.md)

#### Inherited from

[BaseVariableField](/en/auto-docs/free-layout-editor/classes/BaseVariableField.md).[onTypeChange](/en/auto-docs/free-layout-editor/classes/BaseVariableField.md#ontypechange)

***

### subscribe

**subscribe**<`Data`>(`observer`, `selector?`): [`Disposable`](/en/auto-docs/free-layout-editor/interfaces/Disposable-1.md)

监听 AST 节点的变化

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | [`Property`](/en/auto-docs/free-layout-editor/classes/Property.md)<`VariableMeta`> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `observer` | `ObserverOrNext`<`Data`> | 监听回调 |
| `selector?` | `SubscribeConfig`<[`Property`](/en/auto-docs/free-layout-editor/classes/Property.md)<`VariableMeta`>, `Data`> | 监听指定数据 |

#### Returns

[`Disposable`](/en/auto-docs/free-layout-editor/interfaces/Disposable-1.md)

#### Inherited from

[BaseVariableField](/en/auto-docs/free-layout-editor/classes/BaseVariableField.md).[subscribe](/en/auto-docs/free-layout-editor/classes/BaseVariableField.md#subscribe)

***

### toJSON

**toJSON**(): `BaseVariableFieldJSON`<`VariableMeta`> & { `kind`: `string`  }

转换为 JSON

#### Returns

`BaseVariableFieldJSON`<`VariableMeta`> & { `kind`: `string`  }

#### Inherited from

[BaseVariableField](/en/auto-docs/free-layout-editor/classes/BaseVariableField.md).[toJSON](/en/auto-docs/free-layout-editor/classes/BaseVariableField.md#tojson)

***

### updateInitializer

**updateInitializer**(`nextInitializer?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextInitializer?` | [`ASTNodeJSON`](/en/auto-docs/free-layout-editor/interfaces/ASTNodeJSON.md) |

#### Returns

`void`

#### Inherited from

[BaseVariableField](/en/auto-docs/free-layout-editor/classes/BaseVariableField.md).[updateInitializer](/en/auto-docs/free-layout-editor/classes/BaseVariableField.md#updateinitializer)

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

[BaseVariableField](/en/auto-docs/free-layout-editor/classes/BaseVariableField.md).[updateMeta](/en/auto-docs/free-layout-editor/classes/BaseVariableField.md#updatemeta)

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

[BaseVariableField](/en/auto-docs/free-layout-editor/classes/BaseVariableField.md).[updateType](/en/auto-docs/free-layout-editor/classes/BaseVariableField.md#updatetype)
