# Class: MapNode

## Hierarchy

* [`ASTNode`](/auto-docs/variable-core/classes/ASTNode.md)<[`MapNodeJSON`](/auto-docs/variable-core/interfaces/MapNodeJSON.md)>

  ↳ **`MapNode`**

## Table of contents

### Constructors

* [constructor](/auto-docs/variable-core/classes/MapNode.md#constructor)

### Properties

* [changeLocked](/auto-docs/variable-core/classes/MapNode.md#changelocked)
* [flags](/auto-docs/variable-core/classes/MapNode.md#flags)
* [key](/auto-docs/variable-core/classes/MapNode.md#key)
* [onDispose](/auto-docs/variable-core/classes/MapNode.md#ondispose)
* [opts](/auto-docs/variable-core/classes/MapNode.md#opts)
* [parent](/auto-docs/variable-core/classes/MapNode.md#parent)
* [scope](/auto-docs/variable-core/classes/MapNode.md#scope)
* [toDispose](/auto-docs/variable-core/classes/MapNode.md#todispose)
* [value$](/auto-docs/variable-core/classes/MapNode.md#value$)
* [kind](/auto-docs/variable-core/classes/MapNode.md#kind)

### Accessors

* [children](/auto-docs/variable-core/classes/MapNode.md#children)
* [disposed](/auto-docs/variable-core/classes/MapNode.md#disposed)
* [hash](/auto-docs/variable-core/classes/MapNode.md#hash)
* [kind](/auto-docs/variable-core/classes/MapNode.md#kind-1)
* [version](/auto-docs/variable-core/classes/MapNode.md#version)

### Methods

* [dispatchGlobalEvent](/auto-docs/variable-core/classes/MapNode.md#dispatchglobalevent)
* [dispose](/auto-docs/variable-core/classes/MapNode.md#dispose)
* [fireChange](/auto-docs/variable-core/classes/MapNode.md#firechange)
* [fromJSON](/auto-docs/variable-core/classes/MapNode.md#fromjson)
* [get](/auto-docs/variable-core/classes/MapNode.md#get)
* [remove](/auto-docs/variable-core/classes/MapNode.md#remove)
* [set](/auto-docs/variable-core/classes/MapNode.md#set)
* [subscribe](/auto-docs/variable-core/classes/MapNode.md#subscribe)
* [toJSON](/auto-docs/variable-core/classes/MapNode.md#tojson)

## Constructors

### constructor

**new MapNode**(`createParams`, `opts?`)

构造函数

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `createParams` | [`CreateASTParams`](/auto-docs/variable-core/interfaces/CreateASTParams.md) | 创建 ASTNode 的必要参数 |
| `opts?` | `any` | - |

#### Inherited from

[ASTNode](/auto-docs/variable-core/classes/ASTNode.md).[constructor](/auto-docs/variable-core/classes/ASTNode.md#constructor)

## Properties

### changeLocked

**changeLocked**: `boolean` = `false`

更新锁

#### Inherited from

[ASTNode](/auto-docs/variable-core/classes/ASTNode.md).[changeLocked](/auto-docs/variable-core/classes/ASTNode.md#changelocked)

***

### flags

`Readonly` **flags**: `number` = `ASTNodeFlags.None`

节点 Flags，记录一些 Flag 信息

#### Inherited from

[ASTNode](/auto-docs/variable-core/classes/ASTNode.md).[flags](/auto-docs/variable-core/classes/ASTNode.md#flags)

***

### key

`Readonly` **key**: `string`

节点的唯一标识符，节点不指定则默认由 nanoid 生成，不可更改

* 如需要生成新 key，则销毁当前节点并生成新的节点

#### Inherited from

[ASTNode](/auto-docs/variable-core/classes/ASTNode.md).[key](/auto-docs/variable-core/classes/ASTNode.md#key)

***

### onDispose

**onDispose**: `Event`<`void`>

销毁时触发的回调

#### Inherited from

[ASTNode](/auto-docs/variable-core/classes/ASTNode.md).[onDispose](/auto-docs/variable-core/classes/ASTNode.md#ondispose)

***

### opts

`Optional` `Readonly` **opts**: `any`

**`Deprecated`**

获取 ASTNode 注入的 opts

请使用 @injectToAst(XXXService) declare xxxService: XXXService 实现外部依赖注入

#### Inherited from

[ASTNode](/auto-docs/variable-core/classes/ASTNode.md).[opts](/auto-docs/variable-core/classes/ASTNode.md#opts)

***

### parent

`Readonly` **parent**: `undefined` | [`ASTNode`](/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`>

父节点

#### Inherited from

[ASTNode](/auto-docs/variable-core/classes/ASTNode.md).[parent](/auto-docs/variable-core/classes/ASTNode.md#parent)

***

### scope

`Readonly` **scope**: [`Scope`](/auto-docs/variable-core/classes/Scope.md)<`Record`<`string`, `any`>>

节点所处的作用域

#### Inherited from

[ASTNode](/auto-docs/variable-core/classes/ASTNode.md).[scope](/auto-docs/variable-core/classes/ASTNode.md#scope)

***

### toDispose

`Readonly` **toDispose**: `DisposableCollection`

删除节点处理事件列表

#### Inherited from

[ASTNode](/auto-docs/variable-core/classes/ASTNode.md).[toDispose](/auto-docs/variable-core/classes/ASTNode.md#todispose)

***

### value$

`Readonly` **value$**: `BehaviorSubject`<[`ASTNode`](/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`>>

AST 节点变化事件，基于 Rxjs 实现

* 使用了 BehaviorSubject, 在订阅时会自动触发一次事件，事件为当前值

#### Inherited from

[ASTNode](/auto-docs/variable-core/classes/ASTNode.md).[value$](/auto-docs/variable-core/classes/ASTNode.md#value$)

***

### kind

`Static` **kind**: `string` = `ASTKind.MapNode`

节点类型

#### Overrides

[ASTNode](/auto-docs/variable-core/classes/ASTNode.md).[kind](/auto-docs/variable-core/classes/ASTNode.md#kind)

## Accessors

### children

`get` **children**(): [`ASTNode`](/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`>\[]

获取当前节点所有子节点

#### Returns

[`ASTNode`](/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`>\[]

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
| `ActionType` | extends [`GlobalEventActionType`](/auto-docs/variable-core/interfaces/GlobalEventActionType.md)<`string`, `any`, [`ASTNode`](/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`>, `ActionType`> = [`GlobalEventActionType`](/auto-docs/variable-core/interfaces/GlobalEventActionType.md)<`string`, `any`, [`ASTNode`](/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`>> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Omit`<`ActionType`, `"ast"`> |

#### Returns

`void`

#### Inherited from

[ASTNode](/auto-docs/variable-core/classes/ASTNode.md).[dispatchGlobalEvent](/auto-docs/variable-core/classes/ASTNode.md#dispatchglobalevent)

***

### dispose

**dispose**(): `void`

销毁

#### Returns

`void`

#### Inherited from

[ASTNode](/auto-docs/variable-core/classes/ASTNode.md).[dispose](/auto-docs/variable-core/classes/ASTNode.md#dispose)

***

### fireChange

**fireChange**(): `void`

触发当前节点更新

#### Returns

`void`

#### Inherited from

[ASTNode](/auto-docs/variable-core/classes/ASTNode.md).[fireChange](/auto-docs/variable-core/classes/ASTNode.md#firechange)

***

### fromJSON

**fromJSON**(`«destructured»`): `void`

解析 AST JSON 数据

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `«destructured»` | [`MapNodeJSON`](/auto-docs/variable-core/interfaces/MapNodeJSON.md) | AST JSON 数据 |

#### Returns

`void`

#### Overrides

[ASTNode](/auto-docs/variable-core/classes/ASTNode.md).[fromJSON](/auto-docs/variable-core/classes/ASTNode.md#fromjson)

***

### get

**get**(`key`): `undefined` | [`ASTNode`](/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`>

获取 ASTNode

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`undefined` | [`ASTNode`](/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`>

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
| `Node` | extends [`ASTNode`](/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`, `Node`> = [`ASTNode`](/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | ASTNode 的索引， |
| `nextJSON` | [`ASTNodeJSON`](/auto-docs/variable-core/interfaces/ASTNodeJSON.md) | - |

#### Returns

`Node`

***

### subscribe

**subscribe**<`Data`>(`observer`, `selector?`): `Disposable`

监听 AST 节点的变化

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | [`MapNode`](/auto-docs/variable-core/classes/MapNode.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `observer` | `ObserverOrNext`<`Data`> | 监听回调 |
| `selector` | `SubscribeConfig`<[`MapNode`](/auto-docs/variable-core/classes/MapNode.md), `Data`> | 监听指定数据 |

#### Returns

`Disposable`

#### Inherited from

[ASTNode](/auto-docs/variable-core/classes/ASTNode.md).[subscribe](/auto-docs/variable-core/classes/ASTNode.md#subscribe)

***

### toJSON

**toJSON**(): [`ASTNodeJSON`](/auto-docs/variable-core/interfaces/ASTNodeJSON.md)

转化为 ASTNodeJSON

#### Returns

[`ASTNodeJSON`](/auto-docs/variable-core/interfaces/ASTNodeJSON.md)

#### Overrides

[ASTNode](/auto-docs/variable-core/classes/ASTNode.md).[toJSON](/auto-docs/variable-core/classes/ASTNode.md#tojson)
