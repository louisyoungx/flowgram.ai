# Class: Property\<VariableMeta>

## Type parameters

| Name | Type |
| :------ | :------ |
| `VariableMeta` | `any` |

## Hierarchy

* [`BaseVariableField`](/auto-docs/variable-core/classes/BaseVariableField.md)<`VariableMeta`>

  ↳ **`Property`**

## Table of contents

### Constructors

* [constructor](/auto-docs/variable-core/classes/Property.md#constructor)

### Properties

* [changeLocked](/auto-docs/variable-core/classes/Property.md#changelocked)
* [flags](/auto-docs/variable-core/classes/Property.md#flags)
* [key](/auto-docs/variable-core/classes/Property.md#key)
* [onDispose](/auto-docs/variable-core/classes/Property.md#ondispose)
* [opts](/auto-docs/variable-core/classes/Property.md#opts)
* [parent](/auto-docs/variable-core/classes/Property.md#parent)
* [scope](/auto-docs/variable-core/classes/Property.md#scope)
* [toDispose](/auto-docs/variable-core/classes/Property.md#todispose)
* [value$](/auto-docs/variable-core/classes/Property.md#value$)
* [kind](/auto-docs/variable-core/classes/Property.md#kind)

### Accessors

* [children](/auto-docs/variable-core/classes/Property.md#children)
* [disposed](/auto-docs/variable-core/classes/Property.md#disposed)
* [hash](/auto-docs/variable-core/classes/Property.md#hash)
* [initializer](/auto-docs/variable-core/classes/Property.md#initializer)
* [keyPath](/auto-docs/variable-core/classes/Property.md#keypath)
* [kind](/auto-docs/variable-core/classes/Property.md#kind-1)
* [meta](/auto-docs/variable-core/classes/Property.md#meta)
* [parentFields](/auto-docs/variable-core/classes/Property.md#parentfields)
* [type](/auto-docs/variable-core/classes/Property.md#type)
* [version](/auto-docs/variable-core/classes/Property.md#version)

### Methods

* [dispatchGlobalEvent](/auto-docs/variable-core/classes/Property.md#dispatchglobalevent)
* [dispose](/auto-docs/variable-core/classes/Property.md#dispose)
* [fireChange](/auto-docs/variable-core/classes/Property.md#firechange)
* [fromJSON](/auto-docs/variable-core/classes/Property.md#fromjson)
* [getByKeyPath](/auto-docs/variable-core/classes/Property.md#getbykeypath)
* [onTypeChange](/auto-docs/variable-core/classes/Property.md#ontypechange)
* [subscribe](/auto-docs/variable-core/classes/Property.md#subscribe)
* [toJSON](/auto-docs/variable-core/classes/Property.md#tojson)
* [updateInitializer](/auto-docs/variable-core/classes/Property.md#updateinitializer)
* [updateMeta](/auto-docs/variable-core/classes/Property.md#updatemeta)
* [updateType](/auto-docs/variable-core/classes/Property.md#updatetype)

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
| `createParams` | [`CreateASTParams`](/auto-docs/variable-core/interfaces/CreateASTParams.md) | 创建 ASTNode 的必要参数 |
| `opts?` | `any` | - |

#### Inherited from

[BaseVariableField](/auto-docs/variable-core/classes/BaseVariableField.md).[constructor](/auto-docs/variable-core/classes/BaseVariableField.md#constructor)

## Properties

### changeLocked

**changeLocked**: `boolean` = `false`

更新锁

#### Inherited from

[BaseVariableField](/auto-docs/variable-core/classes/BaseVariableField.md).[changeLocked](/auto-docs/variable-core/classes/BaseVariableField.md#changelocked)

***

### flags

**flags**: [`ASTNodeFlags`](/auto-docs/variable-core/enums/ASTNodeFlags.md) = `ASTNodeFlags.VariableField`

节点 Flags，记录一些 Flag 信息

#### Inherited from

[BaseVariableField](/auto-docs/variable-core/classes/BaseVariableField.md).[flags](/auto-docs/variable-core/classes/BaseVariableField.md#flags)

***

### key

`Readonly` **key**: `string`

节点的唯一标识符，节点不指定则默认由 nanoid 生成，不可更改

* 如需要生成新 key，则销毁当前节点并生成新的节点

#### Inherited from

[BaseVariableField](/auto-docs/variable-core/classes/BaseVariableField.md).[key](/auto-docs/variable-core/classes/BaseVariableField.md#key)

***

### onDispose

**onDispose**: `Event`<`void`>

销毁时触发的回调

#### Inherited from

[BaseVariableField](/auto-docs/variable-core/classes/BaseVariableField.md).[onDispose](/auto-docs/variable-core/classes/BaseVariableField.md#ondispose)

***

### opts

`Optional` `Readonly` **opts**: `any`

**`Deprecated`**

获取 ASTNode 注入的 opts

请使用 @injectToAst(XXXService) declare xxxService: XXXService 实现外部依赖注入

#### Inherited from

[BaseVariableField](/auto-docs/variable-core/classes/BaseVariableField.md).[opts](/auto-docs/variable-core/classes/BaseVariableField.md#opts)

***

### parent

`Readonly` **parent**: `undefined` | [`ASTNode`](/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`>

父节点

#### Inherited from

[BaseVariableField](/auto-docs/variable-core/classes/BaseVariableField.md).[parent](/auto-docs/variable-core/classes/BaseVariableField.md#parent)

***

### scope

`Readonly` **scope**: [`Scope`](/auto-docs/variable-core/classes/Scope.md)<`Record`<`string`, `any`>>

节点所处的作用域

#### Inherited from

[BaseVariableField](/auto-docs/variable-core/classes/BaseVariableField.md).[scope](/auto-docs/variable-core/classes/BaseVariableField.md#scope)

***

### toDispose

`Readonly` **toDispose**: `DisposableCollection`

删除节点处理事件列表

#### Inherited from

[BaseVariableField](/auto-docs/variable-core/classes/BaseVariableField.md).[toDispose](/auto-docs/variable-core/classes/BaseVariableField.md#todispose)

***

### value$

`Readonly` **value$**: `BehaviorSubject`<[`ASTNode`](/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`>>

AST 节点变化事件，基于 Rxjs 实现

* 使用了 BehaviorSubject, 在订阅时会自动触发一次事件，事件为当前值

#### Inherited from

[BaseVariableField](/auto-docs/variable-core/classes/BaseVariableField.md).[value$](/auto-docs/variable-core/classes/BaseVariableField.md#value$)

***

### kind

`Static` **kind**: `string` = `ASTKind.Property`

节点类型

#### Overrides

[BaseVariableField](/auto-docs/variable-core/classes/BaseVariableField.md).[kind](/auto-docs/variable-core/classes/BaseVariableField.md#kind)

## Accessors

### children

`get` **children**(): [`ASTNode`](/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`>\[]

获取当前节点所有子节点

#### Returns

[`ASTNode`](/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`>\[]

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

`get` **initializer**(): `undefined` | [`BaseExpression`](/auto-docs/variable-core/classes/BaseExpression.md)<`any`, `any`>

#### Returns

`undefined` | [`BaseExpression`](/auto-docs/variable-core/classes/BaseExpression.md)<`any`, `any`>

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

`get` **parentFields**(): [`BaseVariableField`](/auto-docs/variable-core/classes/BaseVariableField.md)<`any`>\[]

父变量字段，通过由近而远的方式进行排序

#### Returns

[`BaseVariableField`](/auto-docs/variable-core/classes/BaseVariableField.md)<`any`>\[]

#### Inherited from

BaseVariableField.parentFields

***

### type

`get` **type**(): [`BaseType`](/auto-docs/variable-core/classes/BaseType.md)<`any`, `any`>

#### Returns

[`BaseType`](/auto-docs/variable-core/classes/BaseType.md)<`any`, `any`>

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
| `ActionType` | extends [`GlobalEventActionType`](/auto-docs/variable-core/interfaces/GlobalEventActionType.md)<`string`, `any`, [`ASTNode`](/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`>, `ActionType`> = [`GlobalEventActionType`](/auto-docs/variable-core/interfaces/GlobalEventActionType.md)<`string`, `any`, [`ASTNode`](/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`>> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Omit`<`ActionType`, `"ast"`> |

#### Returns

`void`

#### Inherited from

[BaseVariableField](/auto-docs/variable-core/classes/BaseVariableField.md).[dispatchGlobalEvent](/auto-docs/variable-core/classes/BaseVariableField.md#dispatchglobalevent)

***

### dispose

**dispose**(): `void`

销毁

#### Returns

`void`

#### Inherited from

[BaseVariableField](/auto-docs/variable-core/classes/BaseVariableField.md).[dispose](/auto-docs/variable-core/classes/BaseVariableField.md#dispose)

***

### fireChange

**fireChange**(): `void`

触发当前节点更新

#### Returns

`void`

#### Inherited from

[BaseVariableField](/auto-docs/variable-core/classes/BaseVariableField.md).[fireChange](/auto-docs/variable-core/classes/BaseVariableField.md#firechange)

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

[BaseVariableField](/auto-docs/variable-core/classes/BaseVariableField.md).[fromJSON](/auto-docs/variable-core/classes/BaseVariableField.md#fromjson)

***

### getByKeyPath

**getByKeyPath**(`keyPath`): `undefined` | [`BaseVariableField`](/auto-docs/variable-core/classes/BaseVariableField.md)<`any`>

根据 keyPath 去找下钻的变量字段

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyPath` | `string`\[] |

#### Returns

`undefined` | [`BaseVariableField`](/auto-docs/variable-core/classes/BaseVariableField.md)<`any`>

#### Inherited from

[BaseVariableField](/auto-docs/variable-core/classes/BaseVariableField.md).[getByKeyPath](/auto-docs/variable-core/classes/BaseVariableField.md#getbykeypath)

***

### onTypeChange

**onTypeChange**(`observer`): `Disposable`

监听类型变化

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | (`type`: `undefined` | [`ASTNode`](/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`>) => `void` |

#### Returns

`Disposable`

#### Inherited from

[BaseVariableField](/auto-docs/variable-core/classes/BaseVariableField.md).[onTypeChange](/auto-docs/variable-core/classes/BaseVariableField.md#ontypechange)

***

### subscribe

**subscribe**<`Data`>(`observer`, `selector?`): `Disposable`

监听 AST 节点的变化

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | [`Property`](/auto-docs/variable-core/classes/Property.md)<`VariableMeta`> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `observer` | `ObserverOrNext`<`Data`> | 监听回调 |
| `selector` | `SubscribeConfig`<[`Property`](/auto-docs/variable-core/classes/Property.md)<`VariableMeta`>, `Data`> | 监听指定数据 |

#### Returns

`Disposable`

#### Inherited from

[BaseVariableField](/auto-docs/variable-core/classes/BaseVariableField.md).[subscribe](/auto-docs/variable-core/classes/BaseVariableField.md#subscribe)

***

### toJSON

**toJSON**(): `BaseVariableFieldJSON`<`VariableMeta`> & { `kind`: `string`  }

转换为 JSON

#### Returns

`BaseVariableFieldJSON`<`VariableMeta`> & { `kind`: `string`  }

#### Inherited from

[BaseVariableField](/auto-docs/variable-core/classes/BaseVariableField.md).[toJSON](/auto-docs/variable-core/classes/BaseVariableField.md#tojson)

***

### updateInitializer

**updateInitializer**(`nextInitializer?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextInitializer?` | [`ASTNodeJSON`](/auto-docs/variable-core/interfaces/ASTNodeJSON.md) |

#### Returns

`void`

#### Inherited from

[BaseVariableField](/auto-docs/variable-core/classes/BaseVariableField.md).[updateInitializer](/auto-docs/variable-core/classes/BaseVariableField.md#updateinitializer)

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

[BaseVariableField](/auto-docs/variable-core/classes/BaseVariableField.md).[updateMeta](/auto-docs/variable-core/classes/BaseVariableField.md#updatemeta)

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

[BaseVariableField](/auto-docs/variable-core/classes/BaseVariableField.md).[updateType](/auto-docs/variable-core/classes/BaseVariableField.md#updatetype)
