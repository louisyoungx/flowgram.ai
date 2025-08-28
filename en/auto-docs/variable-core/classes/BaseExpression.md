# Class: BaseExpression\<JSON, InjectOpts>

## Type parameters

| Name | Type |
| :------ | :------ |
| `JSON` | extends [`ASTNodeJSON`](/en/auto-docs/variable-core/interfaces/ASTNodeJSON.md) = `any` |
| `InjectOpts` | `any` |

## Hierarchy

* [`ASTNode`](/en/auto-docs/variable-core/classes/ASTNode.md)<`JSON`, `InjectOpts`>

  ↳ **`BaseExpression`**

  ↳↳ [`KeyPathExpression`](/en/auto-docs/variable-core/classes/KeyPathExpression.md)

  ↳↳ [`EnumerateExpression`](/en/auto-docs/variable-core/classes/EnumerateExpression.md)

  ↳↳ [`KeyPathExpressionV2`](/en/auto-docs/variable-core/classes/KeyPathExpressionV2.md)

  ↳↳ [`WrapArrayExpression`](/en/auto-docs/variable-core/classes/WrapArrayExpression.md)

## Table of contents

### Constructors

* [constructor](/en/auto-docs/variable-core/classes/BaseExpression.md#constructor)

### Properties

* [changeLocked](/en/auto-docs/variable-core/classes/BaseExpression.md#changelocked)
* [flags](/en/auto-docs/variable-core/classes/BaseExpression.md#flags)
* [key](/en/auto-docs/variable-core/classes/BaseExpression.md#key)
* [onDispose](/en/auto-docs/variable-core/classes/BaseExpression.md#ondispose)
* [opts](/en/auto-docs/variable-core/classes/BaseExpression.md#opts)
* [parent](/en/auto-docs/variable-core/classes/BaseExpression.md#parent)
* [refs$](/en/auto-docs/variable-core/classes/BaseExpression.md#refs$)
* [returnType](/en/auto-docs/variable-core/classes/BaseExpression.md#returntype)
* [scope](/en/auto-docs/variable-core/classes/BaseExpression.md#scope)
* [toDispose](/en/auto-docs/variable-core/classes/BaseExpression.md#todispose)
* [value$](/en/auto-docs/variable-core/classes/BaseExpression.md#value$)
* [kind](/en/auto-docs/variable-core/classes/BaseExpression.md#kind)

### Accessors

* [children](/en/auto-docs/variable-core/classes/BaseExpression.md#children)
* [disposed](/en/auto-docs/variable-core/classes/BaseExpression.md#disposed)
* [globalVariableTable](/en/auto-docs/variable-core/classes/BaseExpression.md#globalvariabletable)
* [hash](/en/auto-docs/variable-core/classes/BaseExpression.md#hash)
* [kind](/en/auto-docs/variable-core/classes/BaseExpression.md#kind-1)
* [parentFields](/en/auto-docs/variable-core/classes/BaseExpression.md#parentfields)
* [refs](/en/auto-docs/variable-core/classes/BaseExpression.md#refs)
* [version](/en/auto-docs/variable-core/classes/BaseExpression.md#version)

### Methods

* [dispatchGlobalEvent](/en/auto-docs/variable-core/classes/BaseExpression.md#dispatchglobalevent)
* [dispose](/en/auto-docs/variable-core/classes/BaseExpression.md#dispose)
* [fireChange](/en/auto-docs/variable-core/classes/BaseExpression.md#firechange)
* [fromJSON](/en/auto-docs/variable-core/classes/BaseExpression.md#fromjson)
* [getRefFields](/en/auto-docs/variable-core/classes/BaseExpression.md#getreffields)
* [refreshRefs](/en/auto-docs/variable-core/classes/BaseExpression.md#refreshrefs)
* [subscribe](/en/auto-docs/variable-core/classes/BaseExpression.md#subscribe)
* [toJSON](/en/auto-docs/variable-core/classes/BaseExpression.md#tojson)

## Constructors

### constructor

**new BaseExpression**<`JSON`, `InjectOpts`>(`params`, `opts?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `JSON` | extends [`ASTNodeJSON`](/en/auto-docs/variable-core/interfaces/ASTNodeJSON.md) = `any` |
| `InjectOpts` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`CreateASTParams`](/en/auto-docs/variable-core/interfaces/CreateASTParams.md) |
| `opts?` | `InjectOpts` |

#### Overrides

[ASTNode](/en/auto-docs/variable-core/classes/ASTNode.md).[constructor](/en/auto-docs/variable-core/classes/ASTNode.md#constructor)

## Properties

### changeLocked

**changeLocked**: `boolean` = `false`

更新锁

#### Inherited from

[ASTNode](/en/auto-docs/variable-core/classes/ASTNode.md).[changeLocked](/en/auto-docs/variable-core/classes/ASTNode.md#changelocked)

***

### flags

**flags**: [`ASTNodeFlags`](/en/auto-docs/variable-core/enums/ASTNodeFlags.md) = `ASTNodeFlags.Expression`

节点 Flags，记录一些 Flag 信息

#### Overrides

[ASTNode](/en/auto-docs/variable-core/classes/ASTNode.md).[flags](/en/auto-docs/variable-core/classes/ASTNode.md#flags)

***

### key

`Readonly` **key**: `string`

节点的唯一标识符，节点不指定则默认由 nanoid 生成，不可更改

* 如需要生成新 key，则销毁当前节点并生成新的节点

#### Inherited from

[ASTNode](/en/auto-docs/variable-core/classes/ASTNode.md).[key](/en/auto-docs/variable-core/classes/ASTNode.md#key)

***

### onDispose

**onDispose**: `Event`<`void`>

销毁时触发的回调

#### Inherited from

[ASTNode](/en/auto-docs/variable-core/classes/ASTNode.md).[onDispose](/en/auto-docs/variable-core/classes/ASTNode.md#ondispose)

***

### opts

`Optional` `Readonly` **opts**: `InjectOpts`

**`Deprecated`**

获取 ASTNode 注入的 opts

请使用 @injectToAst(XXXService) declare xxxService: XXXService 实现外部依赖注入

#### Inherited from

[ASTNode](/en/auto-docs/variable-core/classes/ASTNode.md).[opts](/en/auto-docs/variable-core/classes/ASTNode.md#opts)

***

### parent

`Readonly` **parent**: `undefined` | [`ASTNode`](/en/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`>

父节点

#### Inherited from

[ASTNode](/en/auto-docs/variable-core/classes/ASTNode.md).[parent](/en/auto-docs/variable-core/classes/ASTNode.md#parent)

***

### refs$

**refs$**: `Observable`<`ExpressionRefs`>

监听引用变量变化
监听 \[a.b.c] -> \[a.b]

***

### returnType

`Abstract` **returnType**: `undefined` | [`BaseType`](/en/auto-docs/variable-core/classes/BaseType.md)<`any`, `any`>

表达式返回的数据类型

***

### scope

`Readonly` **scope**: [`Scope`](/en/auto-docs/variable-core/classes/Scope.md)<`Record`<`string`, `any`>>

节点所处的作用域

#### Inherited from

[ASTNode](/en/auto-docs/variable-core/classes/ASTNode.md).[scope](/en/auto-docs/variable-core/classes/ASTNode.md#scope)

***

### toDispose

`Readonly` **toDispose**: `DisposableCollection`

删除节点处理事件列表

#### Inherited from

[ASTNode](/en/auto-docs/variable-core/classes/ASTNode.md).[toDispose](/en/auto-docs/variable-core/classes/ASTNode.md#todispose)

***

### value$

`Readonly` **value$**: `BehaviorSubject`<[`ASTNode`](/en/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`>>

AST 节点变化事件，基于 Rxjs 实现

* 使用了 BehaviorSubject, 在订阅时会自动触发一次事件，事件为当前值

#### Inherited from

[ASTNode](/en/auto-docs/variable-core/classes/ASTNode.md).[value$](/en/auto-docs/variable-core/classes/ASTNode.md#value$)

***

### kind

`Static` `Readonly` **kind**: `string`

节点类型

#### Inherited from

[ASTNode](/en/auto-docs/variable-core/classes/ASTNode.md).[kind](/en/auto-docs/variable-core/classes/ASTNode.md#kind)

## Accessors

### children

`get` **children**(): [`ASTNode`](/en/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`>\[]

获取当前节点所有子节点

#### Returns

[`ASTNode`](/en/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`>\[]

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

### globalVariableTable

`get` **globalVariableTable**(): [`IVariableTable`](/en/auto-docs/variable-core/interfaces/IVariableTable.md)

获取全局变量表，方便表达式获取引用变量

#### Returns

[`IVariableTable`](/en/auto-docs/variable-core/interfaces/IVariableTable.md)

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

### parentFields

`get` **parentFields**(): [`BaseVariableField`](/en/auto-docs/variable-core/classes/BaseVariableField.md)<`any`>\[]

父变量字段，通过由近而远的方式进行排序

#### Returns

[`BaseVariableField`](/en/auto-docs/variable-core/classes/BaseVariableField.md)<`any`>\[]

***

### refs

`get` **refs**(): `ExpressionRefs`

#### Returns

`ExpressionRefs`

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
| `ActionType` | extends [`GlobalEventActionType`](/en/auto-docs/variable-core/interfaces/GlobalEventActionType.md)<`string`, `any`, [`ASTNode`](/en/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`>, `ActionType`> = [`GlobalEventActionType`](/en/auto-docs/variable-core/interfaces/GlobalEventActionType.md)<`string`, `any`, [`ASTNode`](/en/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`>> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Omit`<`ActionType`, `"ast"`> |

#### Returns

`void`

#### Inherited from

[ASTNode](/en/auto-docs/variable-core/classes/ASTNode.md).[dispatchGlobalEvent](/en/auto-docs/variable-core/classes/ASTNode.md#dispatchglobalevent)

***

### dispose

**dispose**(): `void`

销毁

#### Returns

`void`

#### Inherited from

[ASTNode](/en/auto-docs/variable-core/classes/ASTNode.md).[dispose](/en/auto-docs/variable-core/classes/ASTNode.md#dispose)

***

### fireChange

**fireChange**(): `void`

触发当前节点更新

#### Returns

`void`

#### Inherited from

[ASTNode](/en/auto-docs/variable-core/classes/ASTNode.md).[fireChange](/en/auto-docs/variable-core/classes/ASTNode.md#firechange)

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

[ASTNode](/en/auto-docs/variable-core/classes/ASTNode.md).[fromJSON](/en/auto-docs/variable-core/classes/ASTNode.md#fromjson)

***

### getRefFields

`Abstract` **getRefFields**(): `ExpressionRefs`

获取表达式引用的变量字段

* 通常是 变量 VariableDeclaration，或者 属性 Property 节点

#### Returns

`ExpressionRefs`

***

### refreshRefs

**refreshRefs**(): `void`

刷新变量引用

#### Returns

`void`

***

### subscribe

**subscribe**<`Data`>(`observer`, `selector?`): `Disposable`

监听 AST 节点的变化

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | [`BaseExpression`](/en/auto-docs/variable-core/classes/BaseExpression.md)<`JSON`, `InjectOpts`> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `observer` | `ObserverOrNext`<`Data`> | 监听回调 |
| `selector` | `SubscribeConfig`<[`BaseExpression`](/en/auto-docs/variable-core/classes/BaseExpression.md)<`JSON`, `InjectOpts`>, `Data`> | 监听指定数据 |

#### Returns

`Disposable`

#### Inherited from

[ASTNode](/en/auto-docs/variable-core/classes/ASTNode.md).[subscribe](/en/auto-docs/variable-core/classes/ASTNode.md#subscribe)

***

### toJSON

**toJSON**(): [`ASTNodeJSON`](/en/auto-docs/variable-core/interfaces/ASTNodeJSON.md)

转化为 ASTNodeJSON

#### Returns

[`ASTNodeJSON`](/en/auto-docs/variable-core/interfaces/ASTNodeJSON.md)

#### Inherited from

[ASTNode](/en/auto-docs/variable-core/classes/ASTNode.md).[toJSON](/en/auto-docs/variable-core/classes/ASTNode.md#tojson)
