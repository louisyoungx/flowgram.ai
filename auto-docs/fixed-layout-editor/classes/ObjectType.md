# Class: ObjectType

Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
SPDX-License-Identifier: MIT

## Hierarchy

* [`BaseType`](/auto-docs/fixed-layout-editor/classes/BaseType.md)<[`ObjectJSON`](/auto-docs/fixed-layout-editor/interfaces/ObjectJSON.md)>

  ↳ **`ObjectType`**

## Table of contents

### Constructors

* [constructor](/auto-docs/fixed-layout-editor/classes/ObjectType.md#constructor)

### Properties

* [changeLocked](/auto-docs/fixed-layout-editor/classes/ObjectType.md#changelocked)
* [flags](/auto-docs/fixed-layout-editor/classes/ObjectType.md#flags)
* [key](/auto-docs/fixed-layout-editor/classes/ObjectType.md#key)
* [onDispose](/auto-docs/fixed-layout-editor/classes/ObjectType.md#ondispose)
* [opts](/auto-docs/fixed-layout-editor/classes/ObjectType.md#opts)
* [parent](/auto-docs/fixed-layout-editor/classes/ObjectType.md#parent)
* [properties](/auto-docs/fixed-layout-editor/classes/ObjectType.md#properties)
* [propertyTable](/auto-docs/fixed-layout-editor/classes/ObjectType.md#propertytable)
* [scope](/auto-docs/fixed-layout-editor/classes/ObjectType.md#scope)
* [toDispose](/auto-docs/fixed-layout-editor/classes/ObjectType.md#todispose)
* [value$](/auto-docs/fixed-layout-editor/classes/ObjectType.md#value$)
* [kind](/auto-docs/fixed-layout-editor/classes/ObjectType.md#kind)

### Accessors

* [children](/auto-docs/fixed-layout-editor/classes/ObjectType.md#children)
* [disposed](/auto-docs/fixed-layout-editor/classes/ObjectType.md#disposed)
* [hash](/auto-docs/fixed-layout-editor/classes/ObjectType.md#hash)
* [kind](/auto-docs/fixed-layout-editor/classes/ObjectType.md#kind-1)
* [version](/auto-docs/fixed-layout-editor/classes/ObjectType.md#version)

### Methods

* [dispatchGlobalEvent](/auto-docs/fixed-layout-editor/classes/ObjectType.md#dispatchglobalevent)
* [dispose](/auto-docs/fixed-layout-editor/classes/ObjectType.md#dispose)
* [fireChange](/auto-docs/fixed-layout-editor/classes/ObjectType.md#firechange)
* [fromJSON](/auto-docs/fixed-layout-editor/classes/ObjectType.md#fromjson)
* [getByKeyPath](/auto-docs/fixed-layout-editor/classes/ObjectType.md#getbykeypath)
* [isTypeEqual](/auto-docs/fixed-layout-editor/classes/ObjectType.md#istypeequal)
* [subscribe](/auto-docs/fixed-layout-editor/classes/ObjectType.md#subscribe)
* [toJSON](/auto-docs/fixed-layout-editor/classes/ObjectType.md#tojson)

## Constructors

### constructor

**new ObjectType**(`createParams`, `opts?`)

构造函数

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `createParams` | [`CreateASTParams`](/auto-docs/fixed-layout-editor/interfaces/CreateASTParams.md) | 创建 ASTNode 的必要参数 |
| `opts?` | `any` | - |

#### Inherited from

[BaseType](/auto-docs/fixed-layout-editor/classes/BaseType.md).[constructor](/auto-docs/fixed-layout-editor/classes/BaseType.md#constructor)

## Properties

### changeLocked

**changeLocked**: `boolean`

更新锁

#### Inherited from

[BaseType](/auto-docs/fixed-layout-editor/classes/BaseType.md).[changeLocked](/auto-docs/fixed-layout-editor/classes/BaseType.md#changelocked)

***

### flags

**flags**: [`ASTNodeFlags`](/auto-docs/fixed-layout-editor/enums/ASTNodeFlags.md)

节点 Flags，记录一些 Flag 信息

#### Overrides

[BaseType](/auto-docs/fixed-layout-editor/classes/BaseType.md).[flags](/auto-docs/fixed-layout-editor/classes/BaseType.md#flags)

***

### key

`Readonly` **key**: `string`

节点的唯一标识符，节点不指定则默认由 nanoid 生成，不可更改

* 如需要生成新 key，则销毁当前节点并生成新的节点

#### Inherited from

[BaseType](/auto-docs/fixed-layout-editor/classes/BaseType.md).[key](/auto-docs/fixed-layout-editor/classes/BaseType.md#key)

***

### onDispose

**onDispose**: [`Event`](/auto-docs/fixed-layout-editor/interfaces/Event-1.md)<`void`>

销毁时触发的回调

#### Inherited from

[BaseType](/auto-docs/fixed-layout-editor/classes/BaseType.md).[onDispose](/auto-docs/fixed-layout-editor/classes/BaseType.md#ondispose)

***

### opts

`Optional` `Readonly` **opts**: `any`

**`Deprecated`**

获取 ASTNode 注入的 opts

请使用 @injectToAst(XXXService) declare xxxService: XXXService 实现外部依赖注入

#### Inherited from

[BaseType](/auto-docs/fixed-layout-editor/classes/BaseType.md).[opts](/auto-docs/fixed-layout-editor/classes/BaseType.md#opts)

***

### parent

`Readonly` **parent**: `undefined` | [`ASTNode`](/auto-docs/fixed-layout-editor/classes/ASTNode.md)<`any`, `any`>

父节点

#### Inherited from

[BaseType](/auto-docs/fixed-layout-editor/classes/BaseType.md).[parent](/auto-docs/fixed-layout-editor/classes/BaseType.md#parent)

***

### properties

**properties**: [`Property`](/auto-docs/fixed-layout-editor/classes/Property.md)<`any`>\[]

***

### propertyTable

**propertyTable**: `Map`<`string`, [`Property`](/auto-docs/fixed-layout-editor/classes/Property.md)<`any`>>

***

### scope

`Readonly` **scope**: [`Scope`](/auto-docs/fixed-layout-editor/classes/Scope.md)<`Record`<`string`, `any`>>

节点所处的作用域

#### Inherited from

[BaseType](/auto-docs/fixed-layout-editor/classes/BaseType.md).[scope](/auto-docs/fixed-layout-editor/classes/BaseType.md#scope)

***

### toDispose

`Readonly` **toDispose**: [`DisposableCollection`](/auto-docs/fixed-layout-editor/classes/DisposableCollection.md)

删除节点处理事件列表

#### Inherited from

[BaseType](/auto-docs/fixed-layout-editor/classes/BaseType.md).[toDispose](/auto-docs/fixed-layout-editor/classes/BaseType.md#todispose)

***

### value$

`Readonly` **value$**: `BehaviorSubject`<[`ASTNode`](/auto-docs/fixed-layout-editor/classes/ASTNode.md)<`any`, `any`>>

AST 节点变化事件，基于 Rxjs 实现

* 使用了 BehaviorSubject, 在订阅时会自动触发一次事件，事件为当前值

#### Inherited from

[BaseType](/auto-docs/fixed-layout-editor/classes/BaseType.md).[value$](/auto-docs/fixed-layout-editor/classes/BaseType.md#value$)

***

### kind

`Static` **kind**: `string`

节点类型

#### Overrides

[BaseType](/auto-docs/fixed-layout-editor/classes/BaseType.md).[kind](/auto-docs/fixed-layout-editor/classes/BaseType.md#kind)

## Accessors

### children

`get` **children**(): [`ASTNode`](/auto-docs/fixed-layout-editor/classes/ASTNode.md)<`any`, `any`>\[]

获取当前节点所有子节点

#### Returns

[`ASTNode`](/auto-docs/fixed-layout-editor/classes/ASTNode.md)<`any`, `any`>\[]

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

节点唯一 hash 值

#### Returns

`string`

#### Inherited from

BaseType.hash

***

### kind

`get` **kind**(): `string`

AST 节点的类型

#### Returns

`string`

#### Inherited from

BaseType.kind

***

### version

`get` **version**(): `number`

节点的版本值

* 通过 NodeA === NodeB && versionA === versionB 可以比较两者是否相等

#### Returns

`number`

#### Inherited from

BaseType.version

## Methods

### dispatchGlobalEvent

**dispatchGlobalEvent**<`ActionType`>(`event`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ActionType` | extends [`GlobalEventActionType`](/auto-docs/fixed-layout-editor/interfaces/GlobalEventActionType.md)<`string`, `any`, [`ASTNode`](/auto-docs/fixed-layout-editor/classes/ASTNode.md)<`any`, `any`>, `ActionType`> = [`GlobalEventActionType`](/auto-docs/fixed-layout-editor/interfaces/GlobalEventActionType.md)<`string`, `any`, [`ASTNode`](/auto-docs/fixed-layout-editor/classes/ASTNode.md)<`any`, `any`>> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Omit`<`ActionType`, `"ast"`> |

#### Returns

`void`

#### Inherited from

[BaseType](/auto-docs/fixed-layout-editor/classes/BaseType.md).[dispatchGlobalEvent](/auto-docs/fixed-layout-editor/classes/BaseType.md#dispatchglobalevent)

***

### dispose

**dispose**(): `void`

销毁

#### Returns

`void`

#### Inherited from

[BaseType](/auto-docs/fixed-layout-editor/classes/BaseType.md).[dispose](/auto-docs/fixed-layout-editor/classes/BaseType.md#dispose)

***

### fireChange

**fireChange**(): `void`

触发当前节点更新

#### Returns

`void`

#### Inherited from

[BaseType](/auto-docs/fixed-layout-editor/classes/BaseType.md).[fireChange](/auto-docs/fixed-layout-editor/classes/BaseType.md#firechange)

***

### fromJSON

**fromJSON**(`«destructured»`): `void`

解析 AST JSON 数据

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `«destructured»` | [`ObjectJSON`](/auto-docs/fixed-layout-editor/interfaces/ObjectJSON.md)<`any`> | AST JSON 数据 |

#### Returns

`void`

#### Overrides

[BaseType](/auto-docs/fixed-layout-editor/classes/BaseType.md).[fromJSON](/auto-docs/fixed-layout-editor/classes/BaseType.md#fromjson)

***

### getByKeyPath

**getByKeyPath**(`keyPath`): `undefined` | [`Property`](/auto-docs/fixed-layout-editor/classes/Property.md)<`any`>

根据 KeyPath 找到对应的变量

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `keyPath` | `string`\[] | 变量路径 |

#### Returns

`undefined` | [`Property`](/auto-docs/fixed-layout-editor/classes/Property.md)<`any`>

#### Overrides

[BaseType](/auto-docs/fixed-layout-editor/classes/BaseType.md).[getByKeyPath](/auto-docs/fixed-layout-editor/classes/BaseType.md#getbykeypath)

***

### isTypeEqual

**isTypeEqual**(`targetTypeJSONOrKind?`): `boolean`

类型是否一致

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetTypeJSONOrKind?` | `ASTNodeJSONOrKind` |

#### Returns

`boolean`

#### Overrides

[BaseType](/auto-docs/fixed-layout-editor/classes/BaseType.md).[isTypeEqual](/auto-docs/fixed-layout-editor/classes/BaseType.md#istypeequal)

***

### subscribe

**subscribe**<`Data`>(`observer`, `selector?`): [`Disposable`](/auto-docs/fixed-layout-editor/interfaces/Disposable-1.md)

监听 AST 节点的变化

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | [`ObjectType`](/auto-docs/fixed-layout-editor/classes/ObjectType.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `observer` | `ObserverOrNext`<`Data`> | 监听回调 |
| `selector?` | `SubscribeConfig`<[`ObjectType`](/auto-docs/fixed-layout-editor/classes/ObjectType.md), `Data`> | 监听指定数据 |

#### Returns

[`Disposable`](/auto-docs/fixed-layout-editor/interfaces/Disposable-1.md)

#### Inherited from

[BaseType](/auto-docs/fixed-layout-editor/classes/BaseType.md).[subscribe](/auto-docs/fixed-layout-editor/classes/BaseType.md#subscribe)

***

### toJSON

**toJSON**(): [`ASTNodeJSON`](/auto-docs/fixed-layout-editor/interfaces/ASTNodeJSON.md)

Get AST JSON for current base type

#### Returns

[`ASTNodeJSON`](/auto-docs/fixed-layout-editor/interfaces/ASTNodeJSON.md)

#### Overrides

[BaseType](/auto-docs/fixed-layout-editor/classes/BaseType.md).[toJSON](/auto-docs/fixed-layout-editor/classes/BaseType.md#tojson)
