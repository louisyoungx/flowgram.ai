# Class: ASTNode\<JSON, InjectOpts>

## Type parameters

| Name | Type |
| :------ | :------ |
| `JSON` | extends [`ASTNodeJSON`](/en/auto-docs/variable-core/interfaces/ASTNodeJSON.md) = `any` |
| `InjectOpts` | `any` |

## Hierarchy

* **`ASTNode`**

  ↳ [`DataNode`](/en/auto-docs/variable-core/classes/DataNode.md)

  ↳ [`ListNode`](/en/auto-docs/variable-core/classes/ListNode.md)

  ↳ [`MapNode`](/en/auto-docs/variable-core/classes/MapNode.md)

  ↳ [`VariableDeclarationList`](/en/auto-docs/variable-core/classes/VariableDeclarationList.md)

  ↳ [`BaseVariableField`](/en/auto-docs/variable-core/classes/BaseVariableField.md)

  ↳ [`BaseType`](/en/auto-docs/variable-core/classes/BaseType.md)

  ↳ [`BaseExpression`](/en/auto-docs/variable-core/classes/BaseExpression.md)

## Implements

* `Disposable`

## Indexable

▪ \[key: `string`]: `unknown`

## Table of contents

### Constructors

* [constructor](/en/auto-docs/variable-core/classes/ASTNode.md#constructor)

### Properties

* [changeLocked](/en/auto-docs/variable-core/classes/ASTNode.md#changelocked)
* [flags](/en/auto-docs/variable-core/classes/ASTNode.md#flags)
* [key](/en/auto-docs/variable-core/classes/ASTNode.md#key)
* [onDispose](/en/auto-docs/variable-core/classes/ASTNode.md#ondispose)
* [opts](/en/auto-docs/variable-core/classes/ASTNode.md#opts)
* [parent](/en/auto-docs/variable-core/classes/ASTNode.md#parent)
* [scope](/en/auto-docs/variable-core/classes/ASTNode.md#scope)
* [toDispose](/en/auto-docs/variable-core/classes/ASTNode.md#todispose)
* [value$](/en/auto-docs/variable-core/classes/ASTNode.md#value$)
* [kind](/en/auto-docs/variable-core/classes/ASTNode.md#kind)

### Accessors

* [children](/en/auto-docs/variable-core/classes/ASTNode.md#children)
* [disposed](/en/auto-docs/variable-core/classes/ASTNode.md#disposed)
* [hash](/en/auto-docs/variable-core/classes/ASTNode.md#hash)
* [kind](/en/auto-docs/variable-core/classes/ASTNode.md#kind-1)
* [version](/en/auto-docs/variable-core/classes/ASTNode.md#version)

### Methods

* [dispatchGlobalEvent](/en/auto-docs/variable-core/classes/ASTNode.md#dispatchglobalevent)
* [dispose](/en/auto-docs/variable-core/classes/ASTNode.md#dispose)
* [fireChange](/en/auto-docs/variable-core/classes/ASTNode.md#firechange)
* [fromJSON](/en/auto-docs/variable-core/classes/ASTNode.md#fromjson)
* [subscribe](/en/auto-docs/variable-core/classes/ASTNode.md#subscribe)
* [toJSON](/en/auto-docs/variable-core/classes/ASTNode.md#tojson)

## Constructors

### constructor

**new ASTNode**<`JSON`, `InjectOpts`>(`createParams`, `opts?`)

构造函数

#### Type parameters

| Name | Type |
| :------ | :------ |
| `JSON` | extends [`ASTNodeJSON`](/en/auto-docs/variable-core/interfaces/ASTNodeJSON.md) = `any` |
| `InjectOpts` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `createParams` | [`CreateASTParams`](/en/auto-docs/variable-core/interfaces/CreateASTParams.md) | 创建 ASTNode 的必要参数 |
| `opts?` | `InjectOpts` | - |

## Properties

### changeLocked

**changeLocked**: `boolean` = `false`

更新锁

***

### flags

`Readonly` **flags**: `number` = `ASTNodeFlags.None`

节点 Flags，记录一些 Flag 信息

***

### key

`Readonly` **key**: `string`

节点的唯一标识符，节点不指定则默认由 nanoid 生成，不可更改

* 如需要生成新 key，则销毁当前节点并生成新的节点

***

### onDispose

**onDispose**: `Event`<`void`>

销毁时触发的回调

***

### opts

`Optional` `Readonly` **opts**: `InjectOpts`

**`Deprecated`**

获取 ASTNode 注入的 opts

请使用 @injectToAst(XXXService) declare xxxService: XXXService 实现外部依赖注入

***

### parent

`Readonly` **parent**: `undefined` | [`ASTNode`](/en/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`>

父节点

***

### scope

`Readonly` **scope**: [`Scope`](/en/auto-docs/variable-core/classes/Scope.md)<`Record`<`string`, `any`>>

节点所处的作用域

***

### toDispose

`Readonly` **toDispose**: `DisposableCollection`

删除节点处理事件列表

***

### value$

`Readonly` **value$**: `BehaviorSubject`<[`ASTNode`](/en/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`>>

AST 节点变化事件，基于 Rxjs 实现

* 使用了 BehaviorSubject, 在订阅时会自动触发一次事件，事件为当前值

***

### kind

`Static` `Readonly` **kind**: `string`

节点类型

## Accessors

### children

`get` **children**(): [`ASTNode`](/en/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`>\[]

获取当前节点所有子节点

#### Returns

[`ASTNode`](/en/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`>\[]

***

### disposed

`get` **disposed**(): `boolean`

#### Returns

`boolean`

***

### hash

`get` **hash**(): `string`

节点唯一 hash 值

#### Returns

`string`

***

### kind

`get` **kind**(): `string`

AST 节点的类型

#### Returns

`string`

***

### version

`get` **version**(): `number`

节点的版本值

* 通过 NodeA === NodeB && versionA === versionB 可以比较两者是否相等

#### Returns

`number`

## Methods

### dispatchGlobalEvent

**dispatchGlobalEvent**<`ActionType`>(`event`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ActionType` | extends [`GlobalEventActionType`](/en/auto-docs/variable-core/interfaces/GlobalEventActionType.md)<`string`, `any`, [`ASTNode`](/en/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`>, `ActionType`> = [`GlobalEventActionType`](/en/auto-docs/variable-core/interfaces/GlobalEventActionType.md)<`string`, `any`, [`ASTNode`](/en/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`>> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Omit`<`ActionType`, `"ast"`> |

#### Returns

`void`

***

### dispose

**dispose**(): `void`

销毁

#### Returns

`void`

#### Implementation of

Disposable.dispose

***

### fireChange

**fireChange**(): `void`

触发当前节点更新

#### Returns

`void`

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

***

### subscribe

**subscribe**<`Data`>(`observer`, `selector?`): `Disposable`

监听 AST 节点的变化

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | [`ASTNode`](/en/auto-docs/variable-core/classes/ASTNode.md)<`JSON`, `InjectOpts`> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `observer` | `ObserverOrNext`<`Data`> | 监听回调 |
| `selector` | `SubscribeConfig`<[`ASTNode`](/en/auto-docs/variable-core/classes/ASTNode.md)<`JSON`, `InjectOpts`>, `Data`> | 监听指定数据 |

#### Returns

`Disposable`

***

### toJSON

**toJSON**(): [`ASTNodeJSON`](/en/auto-docs/variable-core/interfaces/ASTNodeJSON.md)

转化为 ASTNodeJSON

#### Returns

[`ASTNodeJSON`](/en/auto-docs/variable-core/interfaces/ASTNodeJSON.md)
