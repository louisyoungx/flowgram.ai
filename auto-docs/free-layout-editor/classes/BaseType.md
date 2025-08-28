# Class: BaseType\<JSON, InjectOpts>

Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
SPDX-License-Identifier: MIT

## Type parameters

| Name | Type |
| :------ | :------ |
| `JSON` | extends [`ASTNodeJSON`](/auto-docs/free-layout-editor/interfaces/ASTNodeJSON.md) = `any` |
| `InjectOpts` | `any` |

## Hierarchy

* [`ASTNode`](/auto-docs/free-layout-editor/classes/ASTNode.md)<`JSON`, `InjectOpts`>

  ↳ **`BaseType`**

  ↳↳ [`ArrayType`](/auto-docs/free-layout-editor/classes/ArrayType.md)

  ↳↳ [`BooleanType`](/auto-docs/free-layout-editor/classes/BooleanType.md)

  ↳↳ [`CustomType`](/auto-docs/free-layout-editor/classes/CustomType.md)

  ↳↳ [`IntegerType`](/auto-docs/free-layout-editor/classes/IntegerType.md)

  ↳↳ [`MapType`](/auto-docs/free-layout-editor/classes/MapType.md)

  ↳↳ [`NumberType`](/auto-docs/free-layout-editor/classes/NumberType.md)

  ↳↳ [`ObjectType`](/auto-docs/free-layout-editor/classes/ObjectType.md)

  ↳↳ [`StringType`](/auto-docs/free-layout-editor/classes/StringType.md)

## Table of contents

### Constructors

* [constructor](/auto-docs/free-layout-editor/classes/BaseType.md#constructor)

### Properties

* [changeLocked](/auto-docs/free-layout-editor/classes/BaseType.md#changelocked)
* [flags](/auto-docs/free-layout-editor/classes/BaseType.md#flags)
* [key](/auto-docs/free-layout-editor/classes/BaseType.md#key)
* [onDispose](/auto-docs/free-layout-editor/classes/BaseType.md#ondispose)
* [opts](/auto-docs/free-layout-editor/classes/BaseType.md#opts)
* [parent](/auto-docs/free-layout-editor/classes/BaseType.md#parent)
* [scope](/auto-docs/free-layout-editor/classes/BaseType.md#scope)
* [toDispose](/auto-docs/free-layout-editor/classes/BaseType.md#todispose)
* [value$](/auto-docs/free-layout-editor/classes/BaseType.md#value$)
* [kind](/auto-docs/free-layout-editor/classes/BaseType.md#kind)

### Accessors

* [children](/auto-docs/free-layout-editor/classes/BaseType.md#children)
* [disposed](/auto-docs/free-layout-editor/classes/BaseType.md#disposed)
* [hash](/auto-docs/free-layout-editor/classes/BaseType.md#hash)
* [kind](/auto-docs/free-layout-editor/classes/BaseType.md#kind-1)
* [version](/auto-docs/free-layout-editor/classes/BaseType.md#version)

### Methods

* [dispatchGlobalEvent](/auto-docs/free-layout-editor/classes/BaseType.md#dispatchglobalevent)
* [dispose](/auto-docs/free-layout-editor/classes/BaseType.md#dispose)
* [fireChange](/auto-docs/free-layout-editor/classes/BaseType.md#firechange)
* [fromJSON](/auto-docs/free-layout-editor/classes/BaseType.md#fromjson)
* [getByKeyPath](/auto-docs/free-layout-editor/classes/BaseType.md#getbykeypath)
* [isTypeEqual](/auto-docs/free-layout-editor/classes/BaseType.md#istypeequal)
* [subscribe](/auto-docs/free-layout-editor/classes/BaseType.md#subscribe)
* [toJSON](/auto-docs/free-layout-editor/classes/BaseType.md#tojson)

## Constructors

### constructor

**new BaseType**<`JSON`, `InjectOpts`>(`createParams`, `opts?`)

构造函数

#### Type parameters

| Name | Type |
| :------ | :------ |
| `JSON` | extends [`ASTNodeJSON`](/auto-docs/free-layout-editor/interfaces/ASTNodeJSON.md) = `any` |
| `InjectOpts` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `createParams` | [`CreateASTParams`](/auto-docs/free-layout-editor/interfaces/CreateASTParams.md) | 创建 ASTNode 的必要参数 |
| `opts?` | `InjectOpts` | - |

#### Inherited from

[ASTNode](/auto-docs/free-layout-editor/classes/ASTNode.md).[constructor](/auto-docs/free-layout-editor/classes/ASTNode.md#constructor)

## Properties

### changeLocked

**changeLocked**: `boolean`

更新锁

#### Inherited from

[ASTNode](/auto-docs/free-layout-editor/classes/ASTNode.md).[changeLocked](/auto-docs/free-layout-editor/classes/ASTNode.md#changelocked)

***

### flags

**flags**: `number`

节点 Flags，记录一些 Flag 信息

#### Overrides

[ASTNode](/auto-docs/free-layout-editor/classes/ASTNode.md).[flags](/auto-docs/free-layout-editor/classes/ASTNode.md#flags)

***

### key

`Readonly` **key**: `string`

节点的唯一标识符，节点不指定则默认由 nanoid 生成，不可更改

* 如需要生成新 key，则销毁当前节点并生成新的节点

#### Inherited from

[ASTNode](/auto-docs/free-layout-editor/classes/ASTNode.md).[key](/auto-docs/free-layout-editor/classes/ASTNode.md#key)

***

### onDispose

**onDispose**: [`Event`](/auto-docs/free-layout-editor/interfaces/Event-1.md)<`void`>

销毁时触发的回调

#### Inherited from

[ASTNode](/auto-docs/free-layout-editor/classes/ASTNode.md).[onDispose](/auto-docs/free-layout-editor/classes/ASTNode.md#ondispose)

***

### opts

`Optional` `Readonly` **opts**: `InjectOpts`

**`Deprecated`**

获取 ASTNode 注入的 opts

请使用 @injectToAst(XXXService) declare xxxService: XXXService 实现外部依赖注入

#### Inherited from

[ASTNode](/auto-docs/free-layout-editor/classes/ASTNode.md).[opts](/auto-docs/free-layout-editor/classes/ASTNode.md#opts)

***

### parent

`Readonly` **parent**: `undefined` | [`ASTNode`](/auto-docs/free-layout-editor/classes/ASTNode.md)<`any`, `any`>

父节点

#### Inherited from

[ASTNode](/auto-docs/free-layout-editor/classes/ASTNode.md).[parent](/auto-docs/free-layout-editor/classes/ASTNode.md#parent)

***

### scope

`Readonly` **scope**: [`Scope`](/auto-docs/free-layout-editor/classes/Scope.md)<`Record`<`string`, `any`>>

节点所处的作用域

#### Inherited from

[ASTNode](/auto-docs/free-layout-editor/classes/ASTNode.md).[scope](/auto-docs/free-layout-editor/classes/ASTNode.md#scope)

***

### toDispose

`Readonly` **toDispose**: [`DisposableCollection`](/auto-docs/free-layout-editor/classes/DisposableCollection.md)

删除节点处理事件列表

#### Inherited from

[ASTNode](/auto-docs/free-layout-editor/classes/ASTNode.md).[toDispose](/auto-docs/free-layout-editor/classes/ASTNode.md#todispose)

***

### value$

`Readonly` **value$**: `BehaviorSubject`<[`ASTNode`](/auto-docs/free-layout-editor/classes/ASTNode.md)<`any`, `any`>>

AST 节点变化事件，基于 Rxjs 实现

* 使用了 BehaviorSubject, 在订阅时会自动触发一次事件，事件为当前值

#### Inherited from

[ASTNode](/auto-docs/free-layout-editor/classes/ASTNode.md).[value$](/auto-docs/free-layout-editor/classes/ASTNode.md#value$)

***

### kind

`Static` `Readonly` **kind**: `string`

节点类型

#### Inherited from

[ASTNode](/auto-docs/free-layout-editor/classes/ASTNode.md).[kind](/auto-docs/free-layout-editor/classes/ASTNode.md#kind)

## Accessors

### children

`get` **children**(): [`ASTNode`](/auto-docs/free-layout-editor/classes/ASTNode.md)<`any`, `any`>\[]

获取当前节点所有子节点

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
| `ActionType` | extends [`GlobalEventActionType`](/auto-docs/free-layout-editor/interfaces/GlobalEventActionType.md)<`string`, `any`, [`ASTNode`](/auto-docs/free-layout-editor/classes/ASTNode.md)<`any`, `any`>, `ActionType`> = [`GlobalEventActionType`](/auto-docs/free-layout-editor/interfaces/GlobalEventActionType.md)<`string`, `any`, [`ASTNode`](/auto-docs/free-layout-editor/classes/ASTNode.md)<`any`, `any`>> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Omit`<`ActionType`, `"ast"`> |

#### Returns

`void`

#### Inherited from

[ASTNode](/auto-docs/free-layout-editor/classes/ASTNode.md).[dispatchGlobalEvent](/auto-docs/free-layout-editor/classes/ASTNode.md#dispatchglobalevent)

***

### dispose

**dispose**(): `void`

销毁

#### Returns

`void`

#### Inherited from

[ASTNode](/auto-docs/free-layout-editor/classes/ASTNode.md).[dispose](/auto-docs/free-layout-editor/classes/ASTNode.md#dispose)

***

### fireChange

**fireChange**(): `void`

触发当前节点更新

#### Returns

`void`

#### Inherited from

[ASTNode](/auto-docs/free-layout-editor/classes/ASTNode.md).[fireChange](/auto-docs/free-layout-editor/classes/ASTNode.md#firechange)

***

### fromJSON

`Abstract` **fromJSON**(`json`): `void`

解析 AST JSON 数据

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `json` | `JSON` | AST JSON 数据 |

#### Returns

`void`

#### Inherited from

[ASTNode](/auto-docs/free-layout-editor/classes/ASTNode.md).[fromJSON](/auto-docs/free-layout-editor/classes/ASTNode.md#fromjson)

***

### getByKeyPath

**getByKeyPath**(`keyPath?`): `undefined` | [`BaseVariableField`](/auto-docs/free-layout-editor/classes/BaseVariableField.md)<`any`>

可下钻类型需实现

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyPath?` | `string`\[] |

#### Returns

`undefined` | [`BaseVariableField`](/auto-docs/free-layout-editor/classes/BaseVariableField.md)<`any`>

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

***

### subscribe

**subscribe**<`Data`>(`observer`, `selector?`): [`Disposable`](/auto-docs/free-layout-editor/interfaces/Disposable-1.md)

监听 AST 节点的变化

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | [`BaseType`](/auto-docs/free-layout-editor/classes/BaseType.md)<`JSON`, `InjectOpts`> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `observer` | `ObserverOrNext`<`Data`> | 监听回调 |
| `selector?` | `SubscribeConfig`<[`BaseType`](/auto-docs/free-layout-editor/classes/BaseType.md)<`JSON`, `InjectOpts`>, `Data`> | 监听指定数据 |

#### Returns

[`Disposable`](/auto-docs/free-layout-editor/interfaces/Disposable-1.md)

#### Inherited from

[ASTNode](/auto-docs/free-layout-editor/classes/ASTNode.md).[subscribe](/auto-docs/free-layout-editor/classes/ASTNode.md#subscribe)

***

### toJSON

**toJSON**(): [`ASTNodeJSON`](/auto-docs/free-layout-editor/interfaces/ASTNodeJSON.md)

Get AST JSON for current base type

#### Returns

[`ASTNodeJSON`](/auto-docs/free-layout-editor/interfaces/ASTNodeJSON.md)

#### Overrides

[ASTNode](/auto-docs/free-layout-editor/classes/ASTNode.md).[toJSON](/auto-docs/free-layout-editor/classes/ASTNode.md#tojson)
