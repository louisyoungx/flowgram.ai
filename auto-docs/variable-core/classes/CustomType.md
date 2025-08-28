# Class: CustomType

## Hierarchy

* [`BaseType`](/auto-docs/variable-core/classes/BaseType.md)<[`CustomTypeJSON`](/auto-docs/variable-core/interfaces/CustomTypeJSON.md)>

  ↳ **`CustomType`**

## Table of contents

### Constructors

* [constructor](/auto-docs/variable-core/classes/CustomType.md#constructor)

### Properties

* [changeLocked](/auto-docs/variable-core/classes/CustomType.md#changelocked)
* [flags](/auto-docs/variable-core/classes/CustomType.md#flags)
* [key](/auto-docs/variable-core/classes/CustomType.md#key)
* [onDispose](/auto-docs/variable-core/classes/CustomType.md#ondispose)
* [opts](/auto-docs/variable-core/classes/CustomType.md#opts)
* [parent](/auto-docs/variable-core/classes/CustomType.md#parent)
* [scope](/auto-docs/variable-core/classes/CustomType.md#scope)
* [toDispose](/auto-docs/variable-core/classes/CustomType.md#todispose)
* [value$](/auto-docs/variable-core/classes/CustomType.md#value$)
* [kind](/auto-docs/variable-core/classes/CustomType.md#kind)

### Accessors

* [children](/auto-docs/variable-core/classes/CustomType.md#children)
* [disposed](/auto-docs/variable-core/classes/CustomType.md#disposed)
* [hash](/auto-docs/variable-core/classes/CustomType.md#hash)
* [kind](/auto-docs/variable-core/classes/CustomType.md#kind-1)
* [typeName](/auto-docs/variable-core/classes/CustomType.md#typename)
* [version](/auto-docs/variable-core/classes/CustomType.md#version)

### Methods

* [dispatchGlobalEvent](/auto-docs/variable-core/classes/CustomType.md#dispatchglobalevent)
* [dispose](/auto-docs/variable-core/classes/CustomType.md#dispose)
* [fireChange](/auto-docs/variable-core/classes/CustomType.md#firechange)
* [fromJSON](/auto-docs/variable-core/classes/CustomType.md#fromjson)
* [getByKeyPath](/auto-docs/variable-core/classes/CustomType.md#getbykeypath)
* [isTypeEqual](/auto-docs/variable-core/classes/CustomType.md#istypeequal)
* [subscribe](/auto-docs/variable-core/classes/CustomType.md#subscribe)
* [toJSON](/auto-docs/variable-core/classes/CustomType.md#tojson)

## Constructors

### constructor

**new CustomType**(`createParams`, `opts?`)

构造函数

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `createParams` | [`CreateASTParams`](/auto-docs/variable-core/interfaces/CreateASTParams.md) | 创建 ASTNode 的必要参数 |
| `opts?` | `any` | - |

#### Inherited from

[BaseType](/auto-docs/variable-core/classes/BaseType.md).[constructor](/auto-docs/variable-core/classes/BaseType.md#constructor)

## Properties

### changeLocked

**changeLocked**: `boolean` = `false`

更新锁

#### Inherited from

[BaseType](/auto-docs/variable-core/classes/BaseType.md).[changeLocked](/auto-docs/variable-core/classes/BaseType.md#changelocked)

***

### flags

**flags**: `number` = `ASTNodeFlags.BasicType`

节点 Flags，记录一些 Flag 信息

#### Inherited from

[BaseType](/auto-docs/variable-core/classes/BaseType.md).[flags](/auto-docs/variable-core/classes/BaseType.md#flags)

***

### key

`Readonly` **key**: `string`

节点的唯一标识符，节点不指定则默认由 nanoid 生成，不可更改

* 如需要生成新 key，则销毁当前节点并生成新的节点

#### Inherited from

[BaseType](/auto-docs/variable-core/classes/BaseType.md).[key](/auto-docs/variable-core/classes/BaseType.md#key)

***

### onDispose

**onDispose**: `Event`<`void`>

销毁时触发的回调

#### Inherited from

[BaseType](/auto-docs/variable-core/classes/BaseType.md).[onDispose](/auto-docs/variable-core/classes/BaseType.md#ondispose)

***

### opts

`Optional` `Readonly` **opts**: `any`

**`Deprecated`**

获取 ASTNode 注入的 opts

请使用 @injectToAst(XXXService) declare xxxService: XXXService 实现外部依赖注入

#### Inherited from

[BaseType](/auto-docs/variable-core/classes/BaseType.md).[opts](/auto-docs/variable-core/classes/BaseType.md#opts)

***

### parent

`Readonly` **parent**: `undefined` | [`ASTNode`](/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`>

父节点

#### Inherited from

[BaseType](/auto-docs/variable-core/classes/BaseType.md).[parent](/auto-docs/variable-core/classes/BaseType.md#parent)

***

### scope

`Readonly` **scope**: [`Scope`](/auto-docs/variable-core/classes/Scope.md)<`Record`<`string`, `any`>>

节点所处的作用域

#### Inherited from

[BaseType](/auto-docs/variable-core/classes/BaseType.md).[scope](/auto-docs/variable-core/classes/BaseType.md#scope)

***

### toDispose

`Readonly` **toDispose**: `DisposableCollection`

删除节点处理事件列表

#### Inherited from

[BaseType](/auto-docs/variable-core/classes/BaseType.md).[toDispose](/auto-docs/variable-core/classes/BaseType.md#todispose)

***

### value$

`Readonly` **value$**: `BehaviorSubject`<[`ASTNode`](/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`>>

AST 节点变化事件，基于 Rxjs 实现

* 使用了 BehaviorSubject, 在订阅时会自动触发一次事件，事件为当前值

#### Inherited from

[BaseType](/auto-docs/variable-core/classes/BaseType.md).[value$](/auto-docs/variable-core/classes/BaseType.md#value$)

***

### kind

`Static` **kind**: `string` = `ASTKind.CustomType`

节点类型

#### Overrides

[BaseType](/auto-docs/variable-core/classes/BaseType.md).[kind](/auto-docs/variable-core/classes/BaseType.md#kind)

## Accessors

### children

`get` **children**(): [`ASTNode`](/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`>\[]

获取当前节点所有子节点

#### Returns

[`ASTNode`](/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`>\[]

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

### typeName

`get` **typeName**(): `string`

#### Returns

`string`

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
| `ActionType` | extends [`GlobalEventActionType`](/auto-docs/variable-core/interfaces/GlobalEventActionType.md)<`string`, `any`, [`ASTNode`](/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`>, `ActionType`> = [`GlobalEventActionType`](/auto-docs/variable-core/interfaces/GlobalEventActionType.md)<`string`, `any`, [`ASTNode`](/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`>> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Omit`<`ActionType`, `"ast"`> |

#### Returns

`void`

#### Inherited from

[BaseType](/auto-docs/variable-core/classes/BaseType.md).[dispatchGlobalEvent](/auto-docs/variable-core/classes/BaseType.md#dispatchglobalevent)

***

### dispose

**dispose**(): `void`

销毁

#### Returns

`void`

#### Inherited from

[BaseType](/auto-docs/variable-core/classes/BaseType.md).[dispose](/auto-docs/variable-core/classes/BaseType.md#dispose)

***

### fireChange

**fireChange**(): `void`

触发当前节点更新

#### Returns

`void`

#### Inherited from

[BaseType](/auto-docs/variable-core/classes/BaseType.md).[fireChange](/auto-docs/variable-core/classes/BaseType.md#firechange)

***

### fromJSON

**fromJSON**(`json`): `void`

解析 AST JSON 数据

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `json` | [`CustomTypeJSON`](/auto-docs/variable-core/interfaces/CustomTypeJSON.md) | AST JSON 数据 |

#### Returns

`void`

#### Overrides

[BaseType](/auto-docs/variable-core/classes/BaseType.md).[fromJSON](/auto-docs/variable-core/classes/BaseType.md#fromjson)

***

### getByKeyPath

**getByKeyPath**(`keyPath?`): `undefined` | [`BaseVariableField`](/auto-docs/variable-core/classes/BaseVariableField.md)<`any`>

可下钻类型需实现

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `keyPath` | `string`\[] | `[]` |

#### Returns

`undefined` | [`BaseVariableField`](/auto-docs/variable-core/classes/BaseVariableField.md)<`any`>

#### Inherited from

[BaseType](/auto-docs/variable-core/classes/BaseType.md).[getByKeyPath](/auto-docs/variable-core/classes/BaseType.md#getbykeypath)

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

[BaseType](/auto-docs/variable-core/classes/BaseType.md).[isTypeEqual](/auto-docs/variable-core/classes/BaseType.md#istypeequal)

***

### subscribe

**subscribe**<`Data`>(`observer`, `selector?`): `Disposable`

监听 AST 节点的变化

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | [`CustomType`](/auto-docs/variable-core/classes/CustomType.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `observer` | `ObserverOrNext`<`Data`> | 监听回调 |
| `selector` | `SubscribeConfig`<[`CustomType`](/auto-docs/variable-core/classes/CustomType.md), `Data`> | 监听指定数据 |

#### Returns

`Disposable`

#### Inherited from

[BaseType](/auto-docs/variable-core/classes/BaseType.md).[subscribe](/auto-docs/variable-core/classes/BaseType.md#subscribe)

***

### toJSON

**toJSON**(): [`ASTNodeJSON`](/auto-docs/variable-core/interfaces/ASTNodeJSON.md)

Get AST JSON for current base type

#### Returns

[`ASTNodeJSON`](/auto-docs/variable-core/interfaces/ASTNodeJSON.md)

#### Inherited from

[BaseType](/auto-docs/variable-core/classes/BaseType.md).[toJSON](/auto-docs/variable-core/classes/BaseType.md#tojson)
