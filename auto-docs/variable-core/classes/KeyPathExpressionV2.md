# Class: KeyPathExpressionV2\<CustomPathJSON>

新版 KeyPathExpressionV2，相比旧版：

* returnType 拷贝新一份，避免引用问题
* 引入成环检测

## Type parameters

| Name | Type |
| :------ | :------ |
| `CustomPathJSON` | extends [`ASTNodeJSON`](/auto-docs/variable-core/interfaces/ASTNodeJSON.md) = `KeyPathExpressionJSON` |

## Hierarchy

* [`BaseExpression`](/auto-docs/variable-core/classes/BaseExpression.md)<`CustomPathJSON`>

  ↳ **`KeyPathExpressionV2`**

## Table of contents

### Constructors

* [constructor](/auto-docs/variable-core/classes/KeyPathExpressionV2.md#constructor)

### Properties

* [\_returnType](/auto-docs/variable-core/classes/KeyPathExpressionV2.md#_returntype)
* [changeLocked](/auto-docs/variable-core/classes/KeyPathExpressionV2.md#changelocked)
* [flags](/auto-docs/variable-core/classes/KeyPathExpressionV2.md#flags)
* [key](/auto-docs/variable-core/classes/KeyPathExpressionV2.md#key)
* [onDispose](/auto-docs/variable-core/classes/KeyPathExpressionV2.md#ondispose)
* [opts](/auto-docs/variable-core/classes/KeyPathExpressionV2.md#opts)
* [parent](/auto-docs/variable-core/classes/KeyPathExpressionV2.md#parent)
* [refs$](/auto-docs/variable-core/classes/KeyPathExpressionV2.md#refs$)
* [scope](/auto-docs/variable-core/classes/KeyPathExpressionV2.md#scope)
* [toDispose](/auto-docs/variable-core/classes/KeyPathExpressionV2.md#todispose)
* [value$](/auto-docs/variable-core/classes/KeyPathExpressionV2.md#value$)
* [kind](/auto-docs/variable-core/classes/KeyPathExpressionV2.md#kind)

### Accessors

* [children](/auto-docs/variable-core/classes/KeyPathExpressionV2.md#children)
* [disposed](/auto-docs/variable-core/classes/KeyPathExpressionV2.md#disposed)
* [globalVariableTable](/auto-docs/variable-core/classes/KeyPathExpressionV2.md#globalvariabletable)
* [hash](/auto-docs/variable-core/classes/KeyPathExpressionV2.md#hash)
* [keyPath](/auto-docs/variable-core/classes/KeyPathExpressionV2.md#keypath)
* [kind](/auto-docs/variable-core/classes/KeyPathExpressionV2.md#kind-1)
* [parentFields](/auto-docs/variable-core/classes/KeyPathExpressionV2.md#parentfields)
* [refs](/auto-docs/variable-core/classes/KeyPathExpressionV2.md#refs)
* [returnType](/auto-docs/variable-core/classes/KeyPathExpressionV2.md#returntype)
* [version](/auto-docs/variable-core/classes/KeyPathExpressionV2.md#version)

### Methods

* [dispatchGlobalEvent](/auto-docs/variable-core/classes/KeyPathExpressionV2.md#dispatchglobalevent)
* [dispose](/auto-docs/variable-core/classes/KeyPathExpressionV2.md#dispose)
* [fireChange](/auto-docs/variable-core/classes/KeyPathExpressionV2.md#firechange)
* [fromJSON](/auto-docs/variable-core/classes/KeyPathExpressionV2.md#fromjson)
* [getRefFields](/auto-docs/variable-core/classes/KeyPathExpressionV2.md#getreffields)
* [getReturnTypeJSONByRef](/auto-docs/variable-core/classes/KeyPathExpressionV2.md#getreturntypejsonbyref)
* [refreshRefs](/auto-docs/variable-core/classes/KeyPathExpressionV2.md#refreshrefs)
* [subscribe](/auto-docs/variable-core/classes/KeyPathExpressionV2.md#subscribe)
* [toJSON](/auto-docs/variable-core/classes/KeyPathExpressionV2.md#tojson)

## Constructors

### constructor

**new KeyPathExpressionV2**<`CustomPathJSON`>(`params`, `opts`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CustomPathJSON` | extends [`ASTNodeJSON`](/auto-docs/variable-core/interfaces/ASTNodeJSON.md) = `KeyPathExpressionJSON` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`CreateASTParams`](/auto-docs/variable-core/interfaces/CreateASTParams.md) |
| `opts` | `any` |

#### Overrides

[BaseExpression](/auto-docs/variable-core/classes/BaseExpression.md).[constructor](/auto-docs/variable-core/classes/BaseExpression.md#constructor)

## Properties

### \_returnType

**\_returnType**: [`BaseType`](/auto-docs/variable-core/classes/BaseType.md)<`any`, `any`>

***

### changeLocked

**changeLocked**: `boolean` = `false`

更新锁

#### Inherited from

[BaseExpression](/auto-docs/variable-core/classes/BaseExpression.md).[changeLocked](/auto-docs/variable-core/classes/BaseExpression.md#changelocked)

***

### flags

**flags**: [`ASTNodeFlags`](/auto-docs/variable-core/enums/ASTNodeFlags.md) = `ASTNodeFlags.Expression`

节点 Flags，记录一些 Flag 信息

#### Inherited from

[BaseExpression](/auto-docs/variable-core/classes/BaseExpression.md).[flags](/auto-docs/variable-core/classes/BaseExpression.md#flags)

***

### key

`Readonly` **key**: `string`

节点的唯一标识符，节点不指定则默认由 nanoid 生成，不可更改

* 如需要生成新 key，则销毁当前节点并生成新的节点

#### Inherited from

[BaseExpression](/auto-docs/variable-core/classes/BaseExpression.md).[key](/auto-docs/variable-core/classes/BaseExpression.md#key)

***

### onDispose

**onDispose**: `Event`<`void`>

销毁时触发的回调

#### Inherited from

[BaseExpression](/auto-docs/variable-core/classes/BaseExpression.md).[onDispose](/auto-docs/variable-core/classes/BaseExpression.md#ondispose)

***

### opts

`Optional` `Readonly` **opts**: `any`

**`Deprecated`**

获取 ASTNode 注入的 opts

请使用 @injectToAst(XXXService) declare xxxService: XXXService 实现外部依赖注入

#### Inherited from

[BaseExpression](/auto-docs/variable-core/classes/BaseExpression.md).[opts](/auto-docs/variable-core/classes/BaseExpression.md#opts)

***

### parent

`Readonly` **parent**: `undefined` | [`ASTNode`](/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`>

父节点

#### Inherited from

[BaseExpression](/auto-docs/variable-core/classes/BaseExpression.md).[parent](/auto-docs/variable-core/classes/BaseExpression.md#parent)

***

### refs$

**refs$**: `Observable`<`ExpressionRefs`>

监听引用变量变化
监听 \[a.b.c] -> \[a.b]

#### Inherited from

[BaseExpression](/auto-docs/variable-core/classes/BaseExpression.md).[refs$](/auto-docs/variable-core/classes/BaseExpression.md#refs$)

***

### scope

`Readonly` **scope**: [`Scope`](/auto-docs/variable-core/classes/Scope.md)<`Record`<`string`, `any`>>

节点所处的作用域

#### Inherited from

[BaseExpression](/auto-docs/variable-core/classes/BaseExpression.md).[scope](/auto-docs/variable-core/classes/BaseExpression.md#scope)

***

### toDispose

`Readonly` **toDispose**: `DisposableCollection`

删除节点处理事件列表

#### Inherited from

[BaseExpression](/auto-docs/variable-core/classes/BaseExpression.md).[toDispose](/auto-docs/variable-core/classes/BaseExpression.md#todispose)

***

### value$

`Readonly` **value$**: `BehaviorSubject`<[`ASTNode`](/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`>>

AST 节点变化事件，基于 Rxjs 实现

* 使用了 BehaviorSubject, 在订阅时会自动触发一次事件，事件为当前值

#### Inherited from

[BaseExpression](/auto-docs/variable-core/classes/BaseExpression.md).[value$](/auto-docs/variable-core/classes/BaseExpression.md#value$)

***

### kind

`Static` **kind**: `string` = `ASTKind.KeyPathExpression`

节点类型

#### Overrides

[BaseExpression](/auto-docs/variable-core/classes/BaseExpression.md).[kind](/auto-docs/variable-core/classes/BaseExpression.md#kind)

## Accessors

### children

`get` **children**(): [`ASTNode`](/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`>\[]

获取当前节点所有子节点

#### Returns

[`ASTNode`](/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`>\[]

#### Inherited from

BaseExpression.children

***

### disposed

`get` **disposed**(): `boolean`

#### Returns

`boolean`

#### Inherited from

BaseExpression.disposed

***

### globalVariableTable

`get` **globalVariableTable**(): [`IVariableTable`](/auto-docs/variable-core/interfaces/IVariableTable.md)

获取全局变量表，方便表达式获取引用变量

#### Returns

[`IVariableTable`](/auto-docs/variable-core/interfaces/IVariableTable.md)

#### Inherited from

BaseExpression.globalVariableTable

***

### hash

`get` **hash**(): `string`

节点唯一 hash 值

#### Returns

`string`

#### Inherited from

BaseExpression.hash

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

BaseExpression.kind

***

### parentFields

`get` **parentFields**(): [`BaseVariableField`](/auto-docs/variable-core/classes/BaseVariableField.md)<`any`>\[]

父变量字段，通过由近而远的方式进行排序

#### Returns

[`BaseVariableField`](/auto-docs/variable-core/classes/BaseVariableField.md)<`any`>\[]

#### Inherited from

BaseExpression.parentFields

***

### refs

`get` **refs**(): `ExpressionRefs`

#### Returns

`ExpressionRefs`

#### Inherited from

BaseExpression.refs

***

### returnType

`get` **returnType**(): [`BaseType`](/auto-docs/variable-core/classes/BaseType.md)<`any`, `any`>

表达式返回的数据类型

#### Returns

[`BaseType`](/auto-docs/variable-core/classes/BaseType.md)<`any`, `any`>

#### Overrides

BaseExpression.returnType

***

### version

`get` **version**(): `number`

节点的版本值

* 通过 NodeA === NodeB && versionA === versionB 可以比较两者是否相等

#### Returns

`number`

#### Inherited from

BaseExpression.version

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

[BaseExpression](/auto-docs/variable-core/classes/BaseExpression.md).[dispatchGlobalEvent](/auto-docs/variable-core/classes/BaseExpression.md#dispatchglobalevent)

***

### dispose

**dispose**(): `void`

销毁

#### Returns

`void`

#### Inherited from

[BaseExpression](/auto-docs/variable-core/classes/BaseExpression.md).[dispose](/auto-docs/variable-core/classes/BaseExpression.md#dispose)

***

### fireChange

**fireChange**(): `void`

触发当前节点更新

#### Returns

`void`

#### Inherited from

[BaseExpression](/auto-docs/variable-core/classes/BaseExpression.md).[fireChange](/auto-docs/variable-core/classes/BaseExpression.md#firechange)

***

### fromJSON

**fromJSON**(`json`): `void`

解析 AST JSON 数据

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `json` | `CustomPathJSON` | AST JSON 数据 |

#### Returns

`void`

#### Overrides

[BaseExpression](/auto-docs/variable-core/classes/BaseExpression.md).[fromJSON](/auto-docs/variable-core/classes/BaseExpression.md#fromjson)

***

### getRefFields

**getRefFields**(): [`BaseVariableField`](/auto-docs/variable-core/classes/BaseVariableField.md)<`any`>\[]

获取表达式引用的变量字段

* 通常是 变量 VariableDeclaration，或者 属性 Property 节点

#### Returns

[`BaseVariableField`](/auto-docs/variable-core/classes/BaseVariableField.md)<`any`>\[]

#### Overrides

[BaseExpression](/auto-docs/variable-core/classes/BaseExpression.md).[getRefFields](/auto-docs/variable-core/classes/BaseExpression.md#getreffields)

***

### getReturnTypeJSONByRef

**getReturnTypeJSONByRef**(`_ref`): `undefined` | [`ASTNodeJSON`](/auto-docs/variable-core/interfaces/ASTNodeJSON.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_ref` | `undefined` | [`BaseVariableField`](/auto-docs/variable-core/classes/BaseVariableField.md)<`any`> |

#### Returns

`undefined` | [`ASTNodeJSON`](/auto-docs/variable-core/interfaces/ASTNodeJSON.md)

***

### refreshRefs

**refreshRefs**(): `void`

刷新变量引用

#### Returns

`void`

#### Inherited from

[BaseExpression](/auto-docs/variable-core/classes/BaseExpression.md).[refreshRefs](/auto-docs/variable-core/classes/BaseExpression.md#refreshrefs)

***

### subscribe

**subscribe**<`Data`>(`observer`, `selector?`): `Disposable`

监听 AST 节点的变化

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | [`KeyPathExpressionV2`](/auto-docs/variable-core/classes/KeyPathExpressionV2.md)<`CustomPathJSON`> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `observer` | `ObserverOrNext`<`Data`> | 监听回调 |
| `selector` | `SubscribeConfig`<[`KeyPathExpressionV2`](/auto-docs/variable-core/classes/KeyPathExpressionV2.md)<`CustomPathJSON`>, `Data`> | 监听指定数据 |

#### Returns

`Disposable`

#### Inherited from

[BaseExpression](/auto-docs/variable-core/classes/BaseExpression.md).[subscribe](/auto-docs/variable-core/classes/BaseExpression.md#subscribe)

***

### toJSON

**toJSON**(): [`ASTNodeJSON`](/auto-docs/variable-core/interfaces/ASTNodeJSON.md)

转化为 ASTNodeJSON

#### Returns

[`ASTNodeJSON`](/auto-docs/variable-core/interfaces/ASTNodeJSON.md)

#### Overrides

[BaseExpression](/auto-docs/variable-core/classes/BaseExpression.md).[toJSON](/auto-docs/variable-core/classes/BaseExpression.md#tojson)
