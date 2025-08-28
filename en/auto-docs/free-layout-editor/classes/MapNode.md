# Class: MapNode

An object that performs a cleanup operation when `.dispose()` is called.

Some examples of how disposables are used:

* An event listener that removes itself when `.dispose()` is called.
* The return value from registering a provider. When `.dispose()` is called, the provider is unregistered.

## Hierarchy

* [`ASTNode`](/en/auto-docs/free-layout-editor/classes/ASTNode.md)<[`MapNodeJSON`](/en/auto-docs/free-layout-editor/interfaces/MapNodeJSON.md)>

  ↳ **`MapNode`**

## Table of contents

### Constructors

* [constructor](/en/auto-docs/free-layout-editor/classes/MapNode.md#constructor)

### Properties

* [changeLocked](/en/auto-docs/free-layout-editor/classes/MapNode.md#changelocked)
* [flags](/en/auto-docs/free-layout-editor/classes/MapNode.md#flags)
* [key](/en/auto-docs/free-layout-editor/classes/MapNode.md#key)
* [onDispose](/en/auto-docs/free-layout-editor/classes/MapNode.md#ondispose)
* [opts](/en/auto-docs/free-layout-editor/classes/MapNode.md#opts)
* [parent](/en/auto-docs/free-layout-editor/classes/MapNode.md#parent)
* [scope](/en/auto-docs/free-layout-editor/classes/MapNode.md#scope)
* [toDispose](/en/auto-docs/free-layout-editor/classes/MapNode.md#todispose)
* [value$](/en/auto-docs/free-layout-editor/classes/MapNode.md#value$)
* [kind](/en/auto-docs/free-layout-editor/classes/MapNode.md#kind)

### Accessors

* [children](/en/auto-docs/free-layout-editor/classes/MapNode.md#children)
* [disposed](/en/auto-docs/free-layout-editor/classes/MapNode.md#disposed)
* [hash](/en/auto-docs/free-layout-editor/classes/MapNode.md#hash)
* [kind](/en/auto-docs/free-layout-editor/classes/MapNode.md#kind-1)
* [version](/en/auto-docs/free-layout-editor/classes/MapNode.md#version)

### Methods

* [dispatchGlobalEvent](/en/auto-docs/free-layout-editor/classes/MapNode.md#dispatchglobalevent)
* [dispose](/en/auto-docs/free-layout-editor/classes/MapNode.md#dispose)
* [fireChange](/en/auto-docs/free-layout-editor/classes/MapNode.md#firechange)
* [fromJSON](/en/auto-docs/free-layout-editor/classes/MapNode.md#fromjson)
* [get](/en/auto-docs/free-layout-editor/classes/MapNode.md#get)
* [remove](/en/auto-docs/free-layout-editor/classes/MapNode.md#remove)
* [set](/en/auto-docs/free-layout-editor/classes/MapNode.md#set)
* [subscribe](/en/auto-docs/free-layout-editor/classes/MapNode.md#subscribe)
* [toJSON](/en/auto-docs/free-layout-editor/classes/MapNode.md#tojson)

## Constructors

### constructor

**new MapNode**(`createParams`, `opts?`)

构造函数

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `createParams` | [`CreateASTParams`](/en/auto-docs/free-layout-editor/interfaces/CreateASTParams.md) | 创建 ASTNode 的必要参数 |
| `opts?` | `any` | - |

#### Inherited from

[ASTNode](/en/auto-docs/free-layout-editor/classes/ASTNode.md).[constructor](/en/auto-docs/free-layout-editor/classes/ASTNode.md#constructor)

## Properties

### changeLocked

**changeLocked**: `boolean`

更新锁

#### Inherited from

[ASTNode](/en/auto-docs/free-layout-editor/classes/ASTNode.md).[changeLocked](/en/auto-docs/free-layout-editor/classes/ASTNode.md#changelocked)

***

### flags

`Readonly` **flags**: `number`

节点 Flags，记录一些 Flag 信息

#### Inherited from

[ASTNode](/en/auto-docs/free-layout-editor/classes/ASTNode.md).[flags](/en/auto-docs/free-layout-editor/classes/ASTNode.md#flags)

***

### key

`Readonly` **key**: `string`

节点的唯一标识符，节点不指定则默认由 nanoid 生成，不可更改

* 如需要生成新 key，则销毁当前节点并生成新的节点

#### Inherited from

[ASTNode](/en/auto-docs/free-layout-editor/classes/ASTNode.md).[key](/en/auto-docs/free-layout-editor/classes/ASTNode.md#key)

***

### onDispose

**onDispose**: [`Event`](/en/auto-docs/free-layout-editor/interfaces/Event-1.md)<`void`>

销毁时触发的回调

#### Inherited from

[ASTNode](/en/auto-docs/free-layout-editor/classes/ASTNode.md).[onDispose](/en/auto-docs/free-layout-editor/classes/ASTNode.md#ondispose)

***

### opts

`Optional` `Readonly` **opts**: `any`

**`Deprecated`**

获取 ASTNode 注入的 opts

请使用 @injectToAst(XXXService) declare xxxService: XXXService 实现外部依赖注入

#### Inherited from

[ASTNode](/en/auto-docs/free-layout-editor/classes/ASTNode.md).[opts](/en/auto-docs/free-layout-editor/classes/ASTNode.md#opts)

***

### parent

`Readonly` **parent**: `undefined` | [`ASTNode`](/en/auto-docs/free-layout-editor/classes/ASTNode.md)<`any`, `any`>

父节点

#### Inherited from

[ASTNode](/en/auto-docs/free-layout-editor/classes/ASTNode.md).[parent](/en/auto-docs/free-layout-editor/classes/ASTNode.md#parent)

***

### scope

`Readonly` **scope**: [`Scope`](/en/auto-docs/free-layout-editor/classes/Scope.md)<`Record`<`string`, `any`>>

节点所处的作用域

#### Inherited from

[ASTNode](/en/auto-docs/free-layout-editor/classes/ASTNode.md).[scope](/en/auto-docs/free-layout-editor/classes/ASTNode.md#scope)

***

### toDispose

`Readonly` **toDispose**: [`DisposableCollection`](/en/auto-docs/free-layout-editor/classes/DisposableCollection.md)

删除节点处理事件列表

#### Inherited from

[ASTNode](/en/auto-docs/free-layout-editor/classes/ASTNode.md).[toDispose](/en/auto-docs/free-layout-editor/classes/ASTNode.md#todispose)

***

### value$

`Readonly` **value$**: `BehaviorSubject`<[`ASTNode`](/en/auto-docs/free-layout-editor/classes/ASTNode.md)<`any`, `any`>>

AST 节点变化事件，基于 Rxjs 实现

* 使用了 BehaviorSubject, 在订阅时会自动触发一次事件，事件为当前值

#### Inherited from

[ASTNode](/en/auto-docs/free-layout-editor/classes/ASTNode.md).[value$](/en/auto-docs/free-layout-editor/classes/ASTNode.md#value$)

***

### kind

`Static` **kind**: `string`

节点类型

#### Overrides

[ASTNode](/en/auto-docs/free-layout-editor/classes/ASTNode.md).[kind](/en/auto-docs/free-layout-editor/classes/ASTNode.md#kind)

## Accessors

### children

`get` **children**(): [`ASTNode`](/en/auto-docs/free-layout-editor/classes/ASTNode.md)<`any`, `any`>\[]

获取当前节点所有子节点

#### Returns

[`ASTNode`](/en/auto-docs/free-layout-editor/classes/ASTNode.md)<`any`, `any`>\[]

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

节点唯一 hash 值

#### Returns

`string`

#### Inherited from

ASTNode.hash

***

### kind

`get` **kind**(): `string`

AST 节点的类型

#### Returns

`string`

#### Inherited from

ASTNode.kind

***

### version

`get` **version**(): `number`

节点的版本值

* 通过 NodeA === NodeB && versionA === versionB 可以比较两者是否相等

#### Returns

`number`

#### Inherited from

ASTNode.version

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

[ASTNode](/en/auto-docs/free-layout-editor/classes/ASTNode.md).[dispatchGlobalEvent](/en/auto-docs/free-layout-editor/classes/ASTNode.md#dispatchglobalevent)

***

### dispose

**dispose**(): `void`

销毁

#### Returns

`void`

#### Inherited from

[ASTNode](/en/auto-docs/free-layout-editor/classes/ASTNode.md).[dispose](/en/auto-docs/free-layout-editor/classes/ASTNode.md#dispose)

***

### fireChange

**fireChange**(): `void`

触发当前节点更新

#### Returns

`void`

#### Inherited from

[ASTNode](/en/auto-docs/free-layout-editor/classes/ASTNode.md).[fireChange](/en/auto-docs/free-layout-editor/classes/ASTNode.md#firechange)

***

### fromJSON

**fromJSON**(`«destructured»`): `void`

解析 AST JSON 数据

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `«destructured»` | [`MapNodeJSON`](/en/auto-docs/free-layout-editor/interfaces/MapNodeJSON.md) | AST JSON 数据 |

#### Returns

`void`

#### Overrides

[ASTNode](/en/auto-docs/free-layout-editor/classes/ASTNode.md).[fromJSON](/en/auto-docs/free-layout-editor/classes/ASTNode.md#fromjson)

***

### get

**get**(`key`): `undefined` | [`ASTNode`](/en/auto-docs/free-layout-editor/classes/ASTNode.md)<`any`, `any`>

获取 ASTNode

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`undefined` | [`ASTNode`](/en/auto-docs/free-layout-editor/classes/ASTNode.md)<`any`, `any`>

***

### remove

**remove**(`key`): `void`

移除指定 ASTNode

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`void`

***

### set

**set**<`Node`>(`key`, `nextJSON`): `Node`

往 Map 中设置 ASTNode

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Node` | extends [`ASTNode`](/en/auto-docs/free-layout-editor/classes/ASTNode.md)<`any`, `any`, `Node`> = [`ASTNode`](/en/auto-docs/free-layout-editor/classes/ASTNode.md)<`any`, `any`> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | ASTNode 的索引， |
| `nextJSON` | [`ASTNodeJSON`](/en/auto-docs/free-layout-editor/interfaces/ASTNodeJSON.md) | - |

#### Returns

`Node`

***

### subscribe

**subscribe**<`Data`>(`observer`, `selector?`): [`Disposable`](/en/auto-docs/free-layout-editor/interfaces/Disposable-1.md)

监听 AST 节点的变化

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | [`MapNode`](/en/auto-docs/free-layout-editor/classes/MapNode.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `observer` | `ObserverOrNext`<`Data`> | 监听回调 |
| `selector?` | `SubscribeConfig`<[`MapNode`](/en/auto-docs/free-layout-editor/classes/MapNode.md), `Data`> | 监听指定数据 |

#### Returns

[`Disposable`](/en/auto-docs/free-layout-editor/interfaces/Disposable-1.md)

#### Inherited from

[ASTNode](/en/auto-docs/free-layout-editor/classes/ASTNode.md).[subscribe](/en/auto-docs/free-layout-editor/classes/ASTNode.md#subscribe)

***

### toJSON

**toJSON**(): [`ASTNodeJSON`](/en/auto-docs/free-layout-editor/interfaces/ASTNodeJSON.md)

转化为 ASTNodeJSON

#### Returns

[`ASTNodeJSON`](/en/auto-docs/free-layout-editor/interfaces/ASTNodeJSON.md)

#### Overrides

[ASTNode](/en/auto-docs/free-layout-editor/classes/ASTNode.md).[toJSON](/en/auto-docs/free-layout-editor/classes/ASTNode.md#tojson)
