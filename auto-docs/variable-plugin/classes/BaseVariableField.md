# Class: BaseVariableField\<VariableMeta>

## Type parameters

| Name | Type |
| :------ | :------ |
| `VariableMeta` | `any` |

## Hierarchy

* [`ASTNode`](/auto-docs/variable-plugin/classes/ASTNode.md)<`BaseVariableFieldJSON`<`VariableMeta`>>

  ↳ **`BaseVariableField`**

  ↳↳ [`Property`](/auto-docs/variable-plugin/classes/Property.md)

  ↳↳ [`VariableDeclaration`](/auto-docs/variable-plugin/classes/VariableDeclaration.md)

## Table of contents

### Constructors

* [constructor](/auto-docs/variable-plugin/classes/BaseVariableField.md#constructor)

### Properties

* [changeLocked](/auto-docs/variable-plugin/classes/BaseVariableField.md#changelocked)
* [flags](/auto-docs/variable-plugin/classes/BaseVariableField.md#flags)
* [key](/auto-docs/variable-plugin/classes/BaseVariableField.md#key)
* [onDispose](/auto-docs/variable-plugin/classes/BaseVariableField.md#ondispose)
* [opts](/auto-docs/variable-plugin/classes/BaseVariableField.md#opts)
* [parent](/auto-docs/variable-plugin/classes/BaseVariableField.md#parent)
* [scope](/auto-docs/variable-plugin/classes/BaseVariableField.md#scope)
* [toDispose](/auto-docs/variable-plugin/classes/BaseVariableField.md#todispose)
* [value$](/auto-docs/variable-plugin/classes/BaseVariableField.md#value$)
* [kind](/auto-docs/variable-plugin/classes/BaseVariableField.md#kind)

### Accessors

* [children](/auto-docs/variable-plugin/classes/BaseVariableField.md#children)
* [disposed](/auto-docs/variable-plugin/classes/BaseVariableField.md#disposed)
* [hash](/auto-docs/variable-plugin/classes/BaseVariableField.md#hash)
* [initializer](/auto-docs/variable-plugin/classes/BaseVariableField.md#initializer)
* [keyPath](/auto-docs/variable-plugin/classes/BaseVariableField.md#keypath)
* [kind](/auto-docs/variable-plugin/classes/BaseVariableField.md#kind-1)
* [meta](/auto-docs/variable-plugin/classes/BaseVariableField.md#meta)
* [parentFields](/auto-docs/variable-plugin/classes/BaseVariableField.md#parentfields)
* [type](/auto-docs/variable-plugin/classes/BaseVariableField.md#type)
* [version](/auto-docs/variable-plugin/classes/BaseVariableField.md#version)

### Methods

* [dispatchGlobalEvent](/auto-docs/variable-plugin/classes/BaseVariableField.md#dispatchglobalevent)
* [dispose](/auto-docs/variable-plugin/classes/BaseVariableField.md#dispose)
* [fireChange](/auto-docs/variable-plugin/classes/BaseVariableField.md#firechange)
* [fromJSON](/auto-docs/variable-plugin/classes/BaseVariableField.md#fromjson)
* [getByKeyPath](/auto-docs/variable-plugin/classes/BaseVariableField.md#getbykeypath)
* [onTypeChange](/auto-docs/variable-plugin/classes/BaseVariableField.md#ontypechange)
* [subscribe](/auto-docs/variable-plugin/classes/BaseVariableField.md#subscribe)
* [toJSON](/auto-docs/variable-plugin/classes/BaseVariableField.md#tojson)
* [updateInitializer](/auto-docs/variable-plugin/classes/BaseVariableField.md#updateinitializer)
* [updateMeta](/auto-docs/variable-plugin/classes/BaseVariableField.md#updatemeta)
* [updateType](/auto-docs/variable-plugin/classes/BaseVariableField.md#updatetype)

## Constructors

### constructor

**new BaseVariableField**<`VariableMeta`>(`createParams`, `opts?`)

构造函数

#### Type parameters

| Name | Type |
| :------ | :------ |
| `VariableMeta` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `createParams` | [`CreateASTParams`](/auto-docs/variable-plugin/interfaces/CreateASTParams.md) | 创建 ASTNode 的必要参数 |
| `opts?` | `any` | - |

#### Inherited from

[ASTNode](/auto-docs/variable-plugin/classes/ASTNode.md).[constructor](/auto-docs/variable-plugin/classes/ASTNode.md#constructor)

## Properties

### changeLocked

**changeLocked**: `boolean`

更新锁

#### Inherited from

[ASTNode](/auto-docs/variable-plugin/classes/ASTNode.md).[changeLocked](/auto-docs/variable-plugin/classes/ASTNode.md#changelocked)

***

### flags

**flags**: [`ASTNodeFlags`](/auto-docs/variable-plugin/enums/ASTNodeFlags.md)

节点 Flags，记录一些 Flag 信息

#### Overrides

[ASTNode](/auto-docs/variable-plugin/classes/ASTNode.md).[flags](/auto-docs/variable-plugin/classes/ASTNode.md#flags)

***

### key

`Readonly` **key**: `string`

节点的唯一标识符，节点不指定则默认由 nanoid 生成，不可更改

* 如需要生成新 key，则销毁当前节点并生成新的节点

#### Inherited from

[ASTNode](/auto-docs/variable-plugin/classes/ASTNode.md).[key](/auto-docs/variable-plugin/classes/ASTNode.md#key)

***

### onDispose

**onDispose**: `Event`<`void`>

销毁时触发的回调

#### Inherited from

[ASTNode](/auto-docs/variable-plugin/classes/ASTNode.md).[onDispose](/auto-docs/variable-plugin/classes/ASTNode.md#ondispose)

***

### opts

`Optional` `Readonly` **opts**: `any`

**`Deprecated`**

获取 ASTNode 注入的 opts

请使用 @injectToAst(XXXService) declare xxxService: XXXService 实现外部依赖注入

#### Inherited from

[ASTNode](/auto-docs/variable-plugin/classes/ASTNode.md).[opts](/auto-docs/variable-plugin/classes/ASTNode.md#opts)

***

### parent

`Readonly` **parent**: `undefined` | [`ASTNode`](/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`>

父节点

#### Inherited from

[ASTNode](/auto-docs/variable-plugin/classes/ASTNode.md).[parent](/auto-docs/variable-plugin/classes/ASTNode.md#parent)

***

### scope

`Readonly` **scope**: [`Scope`](/auto-docs/variable-plugin/classes/Scope.md)<`Record`<`string`, `any`>>

节点所处的作用域

#### Inherited from

[ASTNode](/auto-docs/variable-plugin/classes/ASTNode.md).[scope](/auto-docs/variable-plugin/classes/ASTNode.md#scope)

***

### toDispose

`Readonly` **toDispose**: `DisposableCollection`

删除节点处理事件列表

#### Inherited from

[ASTNode](/auto-docs/variable-plugin/classes/ASTNode.md).[toDispose](/auto-docs/variable-plugin/classes/ASTNode.md#todispose)

***

### value$

`Readonly` **value$**: `BehaviorSubject`<[`ASTNode`](/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`>>

AST 节点变化事件，基于 Rxjs 实现

* 使用了 BehaviorSubject, 在订阅时会自动触发一次事件，事件为当前值

#### Inherited from

[ASTNode](/auto-docs/variable-plugin/classes/ASTNode.md).[value$](/auto-docs/variable-plugin/classes/ASTNode.md#value$)

***

### kind

`Static` `Readonly` **kind**: `string`

节点类型

#### Inherited from

[ASTNode](/auto-docs/variable-plugin/classes/ASTNode.md).[kind](/auto-docs/variable-plugin/classes/ASTNode.md#kind)

## Accessors

### children

`get` **children**(): [`ASTNode`](/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`>\[]

获取当前节点所有子节点

#### Returns

[`ASTNode`](/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`>\[]

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

#### Overrides

ASTNode.hash

***

### initializer

`get` **initializer**(): `undefined` | [`BaseExpression`](/auto-docs/variable-plugin/classes/BaseExpression.md)<`any`, `any`>

#### Returns

`undefined` | [`BaseExpression`](/auto-docs/variable-plugin/classes/BaseExpression.md)<`any`, `any`>

***

### keyPath

`get` **keyPath**(): `string`\[]

#### Returns

`string`\[]

***

### kind

`get` **kind**(): `string`

AST 节点的类型

#### Returns

`string`

#### Inherited from

ASTNode.kind

***

### meta

`get` **meta**(): `VariableMeta`

#### Returns

`VariableMeta`

***

### parentFields

`get` **parentFields**(): [`BaseVariableField`](/auto-docs/variable-plugin/classes/BaseVariableField.md)<`any`>\[]

父变量字段，通过由近而远的方式进行排序

#### Returns

[`BaseVariableField`](/auto-docs/variable-plugin/classes/BaseVariableField.md)<`any`>\[]

***

### type

`get` **type**(): [`BaseType`](/auto-docs/variable-plugin/classes/BaseType.md)<`any`, `any`>

#### Returns

[`BaseType`](/auto-docs/variable-plugin/classes/BaseType.md)<`any`, `any`>

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
| `ActionType` | extends [`GlobalEventActionType`](/auto-docs/variable-plugin/interfaces/GlobalEventActionType.md)<`string`, `any`, [`ASTNode`](/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`>, `ActionType`> = [`GlobalEventActionType`](/auto-docs/variable-plugin/interfaces/GlobalEventActionType.md)<`string`, `any`, [`ASTNode`](/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`>> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Omit`<`ActionType`, `"ast"`> |

#### Returns

`void`

#### Inherited from

[ASTNode](/auto-docs/variable-plugin/classes/ASTNode.md).[dispatchGlobalEvent](/auto-docs/variable-plugin/classes/ASTNode.md#dispatchglobalevent)

***

### dispose

**dispose**(): `void`

销毁

#### Returns

`void`

#### Inherited from

[ASTNode](/auto-docs/variable-plugin/classes/ASTNode.md).[dispose](/auto-docs/variable-plugin/classes/ASTNode.md#dispose)

***

### fireChange

**fireChange**(): `void`

触发当前节点更新

#### Returns

`void`

#### Inherited from

[ASTNode](/auto-docs/variable-plugin/classes/ASTNode.md).[fireChange](/auto-docs/variable-plugin/classes/ASTNode.md#firechange)

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

#### Overrides

[ASTNode](/auto-docs/variable-plugin/classes/ASTNode.md).[fromJSON](/auto-docs/variable-plugin/classes/ASTNode.md#fromjson)

***

### getByKeyPath

**getByKeyPath**(`keyPath`): `undefined` | [`BaseVariableField`](/auto-docs/variable-plugin/classes/BaseVariableField.md)<`any`>

根据 keyPath 去找下钻的变量字段

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyPath` | `string`\[] |

#### Returns

`undefined` | [`BaseVariableField`](/auto-docs/variable-plugin/classes/BaseVariableField.md)<`any`>

***

### onTypeChange

**onTypeChange**(`observer`): `Disposable`

监听类型变化

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | (`type`: `undefined` | [`ASTNode`](/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`>) => `void` |

#### Returns

`Disposable`

***

### subscribe

**subscribe**<`Data`>(`observer`, `selector?`): `Disposable`

监听 AST 节点的变化

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | [`BaseVariableField`](/auto-docs/variable-plugin/classes/BaseVariableField.md)<`VariableMeta`> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `observer` | `ObserverOrNext`<`Data`> | 监听回调 |
| `selector?` | `SubscribeConfig`<[`BaseVariableField`](/auto-docs/variable-plugin/classes/BaseVariableField.md)<`VariableMeta`>, `Data`> | 监听指定数据 |

#### Returns

`Disposable`

#### Inherited from

[ASTNode](/auto-docs/variable-plugin/classes/ASTNode.md).[subscribe](/auto-docs/variable-plugin/classes/ASTNode.md#subscribe)

***

### toJSON

**toJSON**(): `BaseVariableFieldJSON`<`VariableMeta`> & { `kind`: `string`  }

转换为 JSON

#### Returns

`BaseVariableFieldJSON`<`VariableMeta`> & { `kind`: `string`  }

#### Overrides

[ASTNode](/auto-docs/variable-plugin/classes/ASTNode.md).[toJSON](/auto-docs/variable-plugin/classes/ASTNode.md#tojson)

***

### updateInitializer

**updateInitializer**(`nextInitializer?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextInitializer?` | [`ASTNodeJSON`](/auto-docs/variable-plugin/interfaces/ASTNodeJSON.md) |

#### Returns

`void`

***

### updateMeta

**updateMeta**(`nextMeta`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextMeta` | `VariableMeta` |

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
