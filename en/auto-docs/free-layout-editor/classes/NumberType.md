# Class: NumberType

Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
SPDX-License-Identifier: MIT

## Hierarchy

* [`BaseType`](/en/auto-docs/free-layout-editor/classes/BaseType.md)

  ↳ **`NumberType`**

## Table of contents

### Constructors

* [constructor](/en/auto-docs/free-layout-editor/classes/NumberType.md#constructor)

### Properties

* [changeLocked](/en/auto-docs/free-layout-editor/classes/NumberType.md#changelocked)
* [flags](/en/auto-docs/free-layout-editor/classes/NumberType.md#flags)
* [key](/en/auto-docs/free-layout-editor/classes/NumberType.md#key)
* [onDispose](/en/auto-docs/free-layout-editor/classes/NumberType.md#ondispose)
* [opts](/en/auto-docs/free-layout-editor/classes/NumberType.md#opts)
* [parent](/en/auto-docs/free-layout-editor/classes/NumberType.md#parent)
* [scope](/en/auto-docs/free-layout-editor/classes/NumberType.md#scope)
* [toDispose](/en/auto-docs/free-layout-editor/classes/NumberType.md#todispose)
* [value$](/en/auto-docs/free-layout-editor/classes/NumberType.md#value$)
* [kind](/en/auto-docs/free-layout-editor/classes/NumberType.md#kind)

### Accessors

* [children](/en/auto-docs/free-layout-editor/classes/NumberType.md#children)
* [disposed](/en/auto-docs/free-layout-editor/classes/NumberType.md#disposed)
* [hash](/en/auto-docs/free-layout-editor/classes/NumberType.md#hash)
* [kind](/en/auto-docs/free-layout-editor/classes/NumberType.md#kind-1)
* [version](/en/auto-docs/free-layout-editor/classes/NumberType.md#version)

### Methods

* [dispatchGlobalEvent](/en/auto-docs/free-layout-editor/classes/NumberType.md#dispatchglobalevent)
* [dispose](/en/auto-docs/free-layout-editor/classes/NumberType.md#dispose)
* [fireChange](/en/auto-docs/free-layout-editor/classes/NumberType.md#firechange)
* [fromJSON](/en/auto-docs/free-layout-editor/classes/NumberType.md#fromjson)
* [getByKeyPath](/en/auto-docs/free-layout-editor/classes/NumberType.md#getbykeypath)
* [isTypeEqual](/en/auto-docs/free-layout-editor/classes/NumberType.md#istypeequal)
* [subscribe](/en/auto-docs/free-layout-editor/classes/NumberType.md#subscribe)
* [toJSON](/en/auto-docs/free-layout-editor/classes/NumberType.md#tojson)

## Constructors

### constructor

**new NumberType**(`createParams`, `opts?`)

构造函数

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `createParams` | [`CreateASTParams`](/en/auto-docs/free-layout-editor/interfaces/CreateASTParams.md) | 创建 ASTNode 的必要参数 |
| `opts?` | `any` | - |

#### Inherited from

[BaseType](/en/auto-docs/free-layout-editor/classes/BaseType.md).[constructor](/en/auto-docs/free-layout-editor/classes/BaseType.md#constructor)

## Properties

### changeLocked

**changeLocked**: `boolean`

更新锁

#### Inherited from

[BaseType](/en/auto-docs/free-layout-editor/classes/BaseType.md).[changeLocked](/en/auto-docs/free-layout-editor/classes/BaseType.md#changelocked)

***

### flags

**flags**: `number`

节点 Flags，记录一些 Flag 信息

#### Inherited from

[BaseType](/en/auto-docs/free-layout-editor/classes/BaseType.md).[flags](/en/auto-docs/free-layout-editor/classes/BaseType.md#flags)

***

### key

`Readonly` **key**: `string`

节点的唯一标识符，节点不指定则默认由 nanoid 生成，不可更改

* 如需要生成新 key，则销毁当前节点并生成新的节点

#### Inherited from

[BaseType](/en/auto-docs/free-layout-editor/classes/BaseType.md).[key](/en/auto-docs/free-layout-editor/classes/BaseType.md#key)

***

### onDispose

**onDispose**: [`Event`](/en/auto-docs/free-layout-editor/interfaces/Event-1.md)<`void`>

销毁时触发的回调

#### Inherited from

[BaseType](/en/auto-docs/free-layout-editor/classes/BaseType.md).[onDispose](/en/auto-docs/free-layout-editor/classes/BaseType.md#ondispose)

***

### opts

`Optional` `Readonly` **opts**: `any`

**`Deprecated`**

获取 ASTNode 注入的 opts

请使用 @injectToAst(XXXService) declare xxxService: XXXService 实现外部依赖注入

#### Inherited from

[BaseType](/en/auto-docs/free-layout-editor/classes/BaseType.md).[opts](/en/auto-docs/free-layout-editor/classes/BaseType.md#opts)

***

### parent

`Readonly` **parent**: `undefined` | [`ASTNode`](/en/auto-docs/free-layout-editor/classes/ASTNode.md)<`any`, `any`>

父节点

#### Inherited from

[BaseType](/en/auto-docs/free-layout-editor/classes/BaseType.md).[parent](/en/auto-docs/free-layout-editor/classes/BaseType.md#parent)

***

### scope

`Readonly` **scope**: [`Scope`](/en/auto-docs/free-layout-editor/classes/Scope.md)<`Record`<`string`, `any`>>

节点所处的作用域

#### Inherited from

[BaseType](/en/auto-docs/free-layout-editor/classes/BaseType.md).[scope](/en/auto-docs/free-layout-editor/classes/BaseType.md#scope)

***

### toDispose

`Readonly` **toDispose**: [`DisposableCollection`](/en/auto-docs/free-layout-editor/classes/DisposableCollection.md)

删除节点处理事件列表

#### Inherited from

[BaseType](/en/auto-docs/free-layout-editor/classes/BaseType.md).[toDispose](/en/auto-docs/free-layout-editor/classes/BaseType.md#todispose)

***

### value$

`Readonly` **value$**: `BehaviorSubject`<[`ASTNode`](/en/auto-docs/free-layout-editor/classes/ASTNode.md)<`any`, `any`>>

AST 节点变化事件，基于 Rxjs 实现

* 使用了 BehaviorSubject, 在订阅时会自动触发一次事件，事件为当前值

#### Inherited from

[BaseType](/en/auto-docs/free-layout-editor/classes/BaseType.md).[value$](/en/auto-docs/free-layout-editor/classes/BaseType.md#value$)

***

### kind

`Static` **kind**: `string`

节点类型

#### Overrides

[BaseType](/en/auto-docs/free-layout-editor/classes/BaseType.md).[kind](/en/auto-docs/free-layout-editor/classes/BaseType.md#kind)

## Accessors

### children

`get` **children**(): [`ASTNode`](/en/auto-docs/free-layout-editor/classes/ASTNode.md)<`any`, `any`>\[]

获取当前节点所有子节点

#### Returns

[`ASTNode`](/en/auto-docs/free-layout-editor/classes/ASTNode.md)<`any`, `any`>\[]

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
| `ActionType` | extends [`GlobalEventActionType`](/en/auto-docs/free-layout-editor/interfaces/GlobalEventActionType.md)<`string`, `any`, [`ASTNode`](/en/auto-docs/free-layout-editor/classes/ASTNode.md)<`any`, `any`>, `ActionType`> = [`GlobalEventActionType`](/en/auto-docs/free-layout-editor/interfaces/GlobalEventActionType.md)<`string`, `any`, [`ASTNode`](/en/auto-docs/free-layout-editor/classes/ASTNode.md)<`any`, `any`>> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Omit`<`ActionType`, `"ast"`> |

#### Returns

`void`

#### Inherited from

[BaseType](/en/auto-docs/free-layout-editor/classes/BaseType.md).[dispatchGlobalEvent](/en/auto-docs/free-layout-editor/classes/BaseType.md#dispatchglobalevent)

***

### dispose

**dispose**(): `void`

销毁

#### Returns

`void`

#### Inherited from

[BaseType](/en/auto-docs/free-layout-editor/classes/BaseType.md).[dispose](/en/auto-docs/free-layout-editor/classes/BaseType.md#dispose)

***

### fireChange

**fireChange**(): `void`

触发当前节点更新

#### Returns

`void`

#### Inherited from

[BaseType](/en/auto-docs/free-layout-editor/classes/BaseType.md).[fireChange](/en/auto-docs/free-layout-editor/classes/BaseType.md#firechange)

***

### fromJSON

**fromJSON**(): `void`

解析 AST JSON 数据

#### Returns

`void`

#### Overrides

[BaseType](/en/auto-docs/free-layout-editor/classes/BaseType.md).[fromJSON](/en/auto-docs/free-layout-editor/classes/BaseType.md#fromjson)

***

### getByKeyPath

**getByKeyPath**(`keyPath?`): `undefined` | [`BaseVariableField`](/en/auto-docs/free-layout-editor/classes/BaseVariableField.md)<`any`>

可下钻类型需实现

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyPath?` | `string`\[] |

#### Returns

`undefined` | [`BaseVariableField`](/en/auto-docs/free-layout-editor/classes/BaseVariableField.md)<`any`>

#### Inherited from

[BaseType](/en/auto-docs/free-layout-editor/classes/BaseType.md).[getByKeyPath](/en/auto-docs/free-layout-editor/classes/BaseType.md#getbykeypath)

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

#### Inherited from

[BaseType](/en/auto-docs/free-layout-editor/classes/BaseType.md).[isTypeEqual](/en/auto-docs/free-layout-editor/classes/BaseType.md#istypeequal)

***

### subscribe

**subscribe**<`Data`>(`observer`, `selector?`): [`Disposable`](/en/auto-docs/free-layout-editor/interfaces/Disposable-1.md)

监听 AST 节点的变化

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | [`NumberType`](/en/auto-docs/free-layout-editor/classes/NumberType.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `observer` | `ObserverOrNext`<`Data`> | 监听回调 |
| `selector?` | `SubscribeConfig`<[`NumberType`](/en/auto-docs/free-layout-editor/classes/NumberType.md), `Data`> | 监听指定数据 |

#### Returns

[`Disposable`](/en/auto-docs/free-layout-editor/interfaces/Disposable-1.md)

#### Inherited from

[BaseType](/en/auto-docs/free-layout-editor/classes/BaseType.md).[subscribe](/en/auto-docs/free-layout-editor/classes/BaseType.md#subscribe)

***

### toJSON

**toJSON**(): [`ASTNodeJSON`](/en/auto-docs/free-layout-editor/interfaces/ASTNodeJSON.md)

Get AST JSON for current base type

#### Returns

[`ASTNodeJSON`](/en/auto-docs/free-layout-editor/interfaces/ASTNodeJSON.md)

#### Inherited from

[BaseType](/en/auto-docs/free-layout-editor/classes/BaseType.md).[toJSON](/en/auto-docs/free-layout-editor/classes/BaseType.md#tojson)
