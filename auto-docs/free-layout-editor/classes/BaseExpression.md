# Class: BaseExpression\<JSON, InjectOpts>

An object that performs a cleanup operation when `.dispose()` is called.

Some examples of how disposables are used:

* An event listener that removes itself when `.dispose()` is called.
* The return value from registering a provider. When `.dispose()` is called, the provider is unregistered.

## Type parameters

| Name | Type |
| :------ | :------ |
| `JSON` | extends [`ASTNodeJSON`](/auto-docs/free-layout-editor/interfaces/ASTNodeJSON.md) = `any` |
| `InjectOpts` | `any` |

## Hierarchy

* [`ASTNode`](/auto-docs/free-layout-editor/classes/ASTNode.md)<`JSON`, `InjectOpts`>

  ↳ **`BaseExpression`**

  ↳↳ [`EnumerateExpression`](/auto-docs/free-layout-editor/classes/EnumerateExpression.md)

  ↳↳ [`KeyPathExpression`](/auto-docs/free-layout-editor/classes/KeyPathExpression.md)

  ↳↳ [`KeyPathExpressionV2`](/auto-docs/free-layout-editor/classes/KeyPathExpressionV2.md)

  ↳↳ [`WrapArrayExpression`](/auto-docs/free-layout-editor/classes/WrapArrayExpression.md)

## Table of contents

### Constructors

* [constructor](/auto-docs/free-layout-editor/classes/BaseExpression.md#constructor)

### Properties

* [changeLocked](/auto-docs/free-layout-editor/classes/BaseExpression.md#changelocked)
* [flags](/auto-docs/free-layout-editor/classes/BaseExpression.md#flags)
* [key](/auto-docs/free-layout-editor/classes/BaseExpression.md#key)
* [onDispose](/auto-docs/free-layout-editor/classes/BaseExpression.md#ondispose)
* [opts](/auto-docs/free-layout-editor/classes/BaseExpression.md#opts)
* [parent](/auto-docs/free-layout-editor/classes/BaseExpression.md#parent)
* [refs$](/auto-docs/free-layout-editor/classes/BaseExpression.md#refs$)
* [returnType](/auto-docs/free-layout-editor/classes/BaseExpression.md#returntype)
* [scope](/auto-docs/free-layout-editor/classes/BaseExpression.md#scope)
* [toDispose](/auto-docs/free-layout-editor/classes/BaseExpression.md#todispose)
* [value$](/auto-docs/free-layout-editor/classes/BaseExpression.md#value$)
* [kind](/auto-docs/free-layout-editor/classes/BaseExpression.md#kind)

### Accessors

* [children](/auto-docs/free-layout-editor/classes/BaseExpression.md#children)
* [disposed](/auto-docs/free-layout-editor/classes/BaseExpression.md#disposed)
* [globalVariableTable](/auto-docs/free-layout-editor/classes/BaseExpression.md#globalvariabletable)
* [hash](/auto-docs/free-layout-editor/classes/BaseExpression.md#hash)
* [kind](/auto-docs/free-layout-editor/classes/BaseExpression.md#kind-1)
* [parentFields](/auto-docs/free-layout-editor/classes/BaseExpression.md#parentfields)
* [refs](/auto-docs/free-layout-editor/classes/BaseExpression.md#refs)
* [version](/auto-docs/free-layout-editor/classes/BaseExpression.md#version)

### Methods

* [dispatchGlobalEvent](/auto-docs/free-layout-editor/classes/BaseExpression.md#dispatchglobalevent)
* [dispose](/auto-docs/free-layout-editor/classes/BaseExpression.md#dispose)
* [fireChange](/auto-docs/free-layout-editor/classes/BaseExpression.md#firechange)
* [fromJSON](/auto-docs/free-layout-editor/classes/BaseExpression.md#fromjson)
* [getRefFields](/auto-docs/free-layout-editor/classes/BaseExpression.md#getreffields)
* [refreshRefs](/auto-docs/free-layout-editor/classes/BaseExpression.md#refreshrefs)
* [subscribe](/auto-docs/free-layout-editor/classes/BaseExpression.md#subscribe)
* [toJSON](/auto-docs/free-layout-editor/classes/BaseExpression.md#tojson)

## Constructors

### constructor

**new BaseExpression**<`JSON`, `InjectOpts`>(`params`, `opts?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `JSON` | extends [`ASTNodeJSON`](/auto-docs/free-layout-editor/interfaces/ASTNodeJSON.md) = `any` |
| `InjectOpts` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`CreateASTParams`](/auto-docs/free-layout-editor/interfaces/CreateASTParams.md) |
| `opts?` | `InjectOpts` |

#### Overrides

[ASTNode](/auto-docs/free-layout-editor/classes/ASTNode.md).[constructor](/auto-docs/free-layout-editor/classes/ASTNode.md#constructor)

## Properties

### changeLocked

**changeLocked**: `boolean`

更新锁

#### Inherited from

[ASTNode](/auto-docs/free-layout-editor/classes/ASTNode.md).[changeLocked](/auto-docs/free-layout-editor/classes/ASTNode.md#changelocked)

***

### flags

**flags**: [`ASTNodeFlags`](/auto-docs/free-layout-editor/enums/ASTNodeFlags.md)

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

### refs$

**refs$**: `Observable`<`ExpressionRefs`>

监听引用变量变化
监听 \[a.b.c] -> \[a.b]

***

### returnType

`Abstract` **returnType**: `undefined` | [`BaseType`](/auto-docs/free-layout-editor/classes/BaseType.md)<`any`, `any`>

表达式返回的数据类型

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

### globalVariableTable

`get` **globalVariableTable**(): [`IVariableTable`](/auto-docs/free-layout-editor/interfaces/IVariableTable.md)

获取全局变量表，方便表达式获取引用变量

#### Returns

[`IVariableTable`](/auto-docs/free-layout-editor/interfaces/IVariableTable.md)

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

`get` **parentFields**(): [`BaseVariableField`](/auto-docs/free-layout-editor/classes/BaseVariableField.md)<`any`>\[]

父变量字段，通过由近而远的方式进行排序

#### Returns

[`BaseVariableField`](/auto-docs/free-layout-editor/classes/BaseVariableField.md)<`any`>\[]

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

**subscribe**<`Data`>(`observer`, `selector?`): [`Disposable`](/auto-docs/free-layout-editor/interfaces/Disposable-1.md)

监听 AST 节点的变化

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | [`BaseExpression`](/auto-docs/free-layout-editor/classes/BaseExpression.md)<`JSON`, `InjectOpts`> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `observer` | `ObserverOrNext`<`Data`> | 监听回调 |
| `selector?` | `SubscribeConfig`<[`BaseExpression`](/auto-docs/free-layout-editor/classes/BaseExpression.md)<`JSON`, `InjectOpts`>, `Data`> | 监听指定数据 |

#### Returns

[`Disposable`](/auto-docs/free-layout-editor/interfaces/Disposable-1.md)

#### Inherited from

[ASTNode](/auto-docs/free-layout-editor/classes/ASTNode.md).[subscribe](/auto-docs/free-layout-editor/classes/ASTNode.md#subscribe)

***

### toJSON

**toJSON**(): [`ASTNodeJSON`](/auto-docs/free-layout-editor/interfaces/ASTNodeJSON.md)

转化为 ASTNodeJSON

#### Returns

[`ASTNodeJSON`](/auto-docs/free-layout-editor/interfaces/ASTNodeJSON.md)

#### Inherited from

[ASTNode](/auto-docs/free-layout-editor/classes/ASTNode.md).[toJSON](/auto-docs/free-layout-editor/classes/ASTNode.md#tojson)
