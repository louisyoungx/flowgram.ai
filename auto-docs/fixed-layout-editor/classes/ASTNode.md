# Class: ASTNode\<JSON, InjectOpts>

An object that performs a cleanup operation when `.dispose()` is called.

Some examples of how disposables are used:

* An event listener that removes itself when `.dispose()` is called.
* The return value from registering a provider. When `.dispose()` is called, the provider is unregistered.

## Type parameters

| Name | Type |
| :------ | :------ |
| `JSON` | extends [`ASTNodeJSON`](/auto-docs/fixed-layout-editor/interfaces/ASTNodeJSON.md) = `any` |
| `InjectOpts` | `any` |

## Hierarchy

* **`ASTNode`**

  ↳ [`BaseExpression`](/auto-docs/fixed-layout-editor/classes/BaseExpression.md)

  ↳ [`BaseType`](/auto-docs/fixed-layout-editor/classes/BaseType.md)

  ↳ [`BaseVariableField`](/auto-docs/fixed-layout-editor/classes/BaseVariableField.md)

  ↳ [`DataNode`](/auto-docs/fixed-layout-editor/classes/DataNode.md)

  ↳ [`ListNode`](/auto-docs/fixed-layout-editor/classes/ListNode.md)

  ↳ [`MapNode`](/auto-docs/fixed-layout-editor/classes/MapNode.md)

  ↳ [`VariableDeclarationList`](/auto-docs/fixed-layout-editor/classes/VariableDeclarationList.md)

## Implements

* [`Disposable`](/auto-docs/fixed-layout-editor/interfaces/Disposable-1.md)

## Indexable

▪ \[key: `string`]: `unknown`

## Table of contents

### Constructors

* [constructor](/auto-docs/fixed-layout-editor/classes/ASTNode.md#constructor)

### Properties

* [changeLocked](/auto-docs/fixed-layout-editor/classes/ASTNode.md#changelocked)
* [flags](/auto-docs/fixed-layout-editor/classes/ASTNode.md#flags)
* [key](/auto-docs/fixed-layout-editor/classes/ASTNode.md#key)
* [onDispose](/auto-docs/fixed-layout-editor/classes/ASTNode.md#ondispose)
* [opts](/auto-docs/fixed-layout-editor/classes/ASTNode.md#opts)
* [parent](/auto-docs/fixed-layout-editor/classes/ASTNode.md#parent)
* [scope](/auto-docs/fixed-layout-editor/classes/ASTNode.md#scope)
* [toDispose](/auto-docs/fixed-layout-editor/classes/ASTNode.md#todispose)
* [value$](/auto-docs/fixed-layout-editor/classes/ASTNode.md#value$)
* [kind](/auto-docs/fixed-layout-editor/classes/ASTNode.md#kind)

### Accessors

* [children](/auto-docs/fixed-layout-editor/classes/ASTNode.md#children)
* [disposed](/auto-docs/fixed-layout-editor/classes/ASTNode.md#disposed)
* [hash](/auto-docs/fixed-layout-editor/classes/ASTNode.md#hash)
* [kind](/auto-docs/fixed-layout-editor/classes/ASTNode.md#kind-1)
* [version](/auto-docs/fixed-layout-editor/classes/ASTNode.md#version)

### Methods

* [dispatchGlobalEvent](/auto-docs/fixed-layout-editor/classes/ASTNode.md#dispatchglobalevent)
* [dispose](/auto-docs/fixed-layout-editor/classes/ASTNode.md#dispose)
* [fireChange](/auto-docs/fixed-layout-editor/classes/ASTNode.md#firechange)
* [fromJSON](/auto-docs/fixed-layout-editor/classes/ASTNode.md#fromjson)
* [subscribe](/auto-docs/fixed-layout-editor/classes/ASTNode.md#subscribe)
* [toJSON](/auto-docs/fixed-layout-editor/classes/ASTNode.md#tojson)

## Constructors

### constructor

**new ASTNode**<`JSON`, `InjectOpts`>(`createParams`, `opts?`)

构造函数

#### Type parameters

| Name | Type |
| :------ | :------ |
| `JSON` | extends [`ASTNodeJSON`](/auto-docs/fixed-layout-editor/interfaces/ASTNodeJSON.md) = `any` |
| `InjectOpts` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `createParams` | [`CreateASTParams`](/auto-docs/fixed-layout-editor/interfaces/CreateASTParams.md) | 创建 ASTNode 的必要参数 |
| `opts?` | `InjectOpts` | - |

## Properties

### changeLocked

**changeLocked**: `boolean`

更新锁

***

### flags

`Readonly` **flags**: `number`

节点 Flags，记录一些 Flag 信息

***

### key

`Readonly` **key**: `string`

节点的唯一标识符，节点不指定则默认由 nanoid 生成，不可更改

* 如需要生成新 key，则销毁当前节点并生成新的节点

***

### onDispose

**onDispose**: [`Event`](/auto-docs/fixed-layout-editor/interfaces/Event-1.md)<`void`>

销毁时触发的回调

***

### opts

`Optional` `Readonly` **opts**: `InjectOpts`

**`Deprecated`**

获取 ASTNode 注入的 opts

请使用 @injectToAst(XXXService) declare xxxService: XXXService 实现外部依赖注入

***

### parent

`Readonly` **parent**: `undefined` | [`ASTNode`](/auto-docs/fixed-layout-editor/classes/ASTNode.md)<`any`, `any`>

父节点

***

### scope

`Readonly` **scope**: [`Scope`](/auto-docs/fixed-layout-editor/classes/Scope.md)<`Record`<`string`, `any`>>

节点所处的作用域

***

### toDispose

`Readonly` **toDispose**: [`DisposableCollection`](/auto-docs/fixed-layout-editor/classes/DisposableCollection.md)

删除节点处理事件列表

***

### value$

`Readonly` **value$**: `BehaviorSubject`<[`ASTNode`](/auto-docs/fixed-layout-editor/classes/ASTNode.md)<`any`, `any`>>

AST 节点变化事件，基于 Rxjs 实现

* 使用了 BehaviorSubject, 在订阅时会自动触发一次事件，事件为当前值

***

### kind

`Static` `Readonly` **kind**: `string`

节点类型

## Accessors

### children

`get` **children**(): [`ASTNode`](/auto-docs/fixed-layout-editor/classes/ASTNode.md)<`any`, `any`>\[]

获取当前节点所有子节点

#### Returns

[`ASTNode`](/auto-docs/fixed-layout-editor/classes/ASTNode.md)<`any`, `any`>\[]

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
| `ActionType` | extends [`GlobalEventActionType`](/auto-docs/fixed-layout-editor/interfaces/GlobalEventActionType.md)<`string`, `any`, [`ASTNode`](/auto-docs/fixed-layout-editor/classes/ASTNode.md)<`any`, `any`>, `ActionType`> = [`GlobalEventActionType`](/auto-docs/fixed-layout-editor/interfaces/GlobalEventActionType.md)<`string`, `any`, [`ASTNode`](/auto-docs/fixed-layout-editor/classes/ASTNode.md)<`any`, `any`>> |

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

[Disposable](/auto-docs/fixed-layout-editor/interfaces/Disposable-1.md).[dispose](/auto-docs/fixed-layout-editor/interfaces/Disposable-1.md#dispose)

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

**subscribe**<`Data`>(`observer`, `selector?`): [`Disposable`](/auto-docs/fixed-layout-editor/interfaces/Disposable-1.md)

监听 AST 节点的变化

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | [`ASTNode`](/auto-docs/fixed-layout-editor/classes/ASTNode.md)<`JSON`, `InjectOpts`> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `observer` | `ObserverOrNext`<`Data`> | 监听回调 |
| `selector?` | `SubscribeConfig`<[`ASTNode`](/auto-docs/fixed-layout-editor/classes/ASTNode.md)<`JSON`, `InjectOpts`>, `Data`> | 监听指定数据 |

#### Returns

[`Disposable`](/auto-docs/fixed-layout-editor/interfaces/Disposable-1.md)

***

### toJSON

**toJSON**(): [`ASTNodeJSON`](/auto-docs/fixed-layout-editor/interfaces/ASTNodeJSON.md)

转化为 ASTNodeJSON

#### Returns

[`ASTNodeJSON`](/auto-docs/fixed-layout-editor/interfaces/ASTNodeJSON.md)
