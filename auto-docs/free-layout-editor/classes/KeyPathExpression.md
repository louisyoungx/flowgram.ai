# Class: KeyPathExpression\<CustomPathJSON>

An object that performs a cleanup operation when `.dispose()` is called.

Some examples of how disposables are used:

* An event listener that removes itself when `.dispose()` is called.
* The return value from registering a provider. When `.dispose()` is called, the provider is unregistered.

## Type parameters

| Name | Type |
| :------ | :------ |
| `CustomPathJSON` | extends [`ASTNodeJSON`](/auto-docs/free-layout-editor/interfaces/ASTNodeJSON.md) = [`KeyPathExpressionJSON`](/auto-docs/free-layout-editor/interfaces/KeyPathExpressionJSON.md) |

## Hierarchy

* [`BaseExpression`](/auto-docs/free-layout-editor/classes/BaseExpression.md)<`CustomPathJSON`>

  ↳ **`KeyPathExpression`**

## Table of contents

### Constructors

* [constructor](/auto-docs/free-layout-editor/classes/KeyPathExpression.md#constructor)

### Properties

* [changeLocked](/auto-docs/free-layout-editor/classes/KeyPathExpression.md#changelocked)
* [flags](/auto-docs/free-layout-editor/classes/KeyPathExpression.md#flags)
* [key](/auto-docs/free-layout-editor/classes/KeyPathExpression.md#key)
* [onDispose](/auto-docs/free-layout-editor/classes/KeyPathExpression.md#ondispose)
* [opts](/auto-docs/free-layout-editor/classes/KeyPathExpression.md#opts)
* [parent](/auto-docs/free-layout-editor/classes/KeyPathExpression.md#parent)
* [refs$](/auto-docs/free-layout-editor/classes/KeyPathExpression.md#refs$)
* [scope](/auto-docs/free-layout-editor/classes/KeyPathExpression.md#scope)
* [toDispose](/auto-docs/free-layout-editor/classes/KeyPathExpression.md#todispose)
* [value$](/auto-docs/free-layout-editor/classes/KeyPathExpression.md#value$)
* [kind](/auto-docs/free-layout-editor/classes/KeyPathExpression.md#kind)

### Accessors

* [children](/auto-docs/free-layout-editor/classes/KeyPathExpression.md#children)
* [disposed](/auto-docs/free-layout-editor/classes/KeyPathExpression.md#disposed)
* [globalVariableTable](/auto-docs/free-layout-editor/classes/KeyPathExpression.md#globalvariabletable)
* [hash](/auto-docs/free-layout-editor/classes/KeyPathExpression.md#hash)
* [keyPath](/auto-docs/free-layout-editor/classes/KeyPathExpression.md#keypath)
* [kind](/auto-docs/free-layout-editor/classes/KeyPathExpression.md#kind-1)
* [parentFields](/auto-docs/free-layout-editor/classes/KeyPathExpression.md#parentfields)
* [refs](/auto-docs/free-layout-editor/classes/KeyPathExpression.md#refs)
* [returnType](/auto-docs/free-layout-editor/classes/KeyPathExpression.md#returntype)
* [version](/auto-docs/free-layout-editor/classes/KeyPathExpression.md#version)

### Methods

* [dispatchGlobalEvent](/auto-docs/free-layout-editor/classes/KeyPathExpression.md#dispatchglobalevent)
* [dispose](/auto-docs/free-layout-editor/classes/KeyPathExpression.md#dispose)
* [fireChange](/auto-docs/free-layout-editor/classes/KeyPathExpression.md#firechange)
* [fromJSON](/auto-docs/free-layout-editor/classes/KeyPathExpression.md#fromjson)
* [getRefFields](/auto-docs/free-layout-editor/classes/KeyPathExpression.md#getreffields)
* [refreshRefs](/auto-docs/free-layout-editor/classes/KeyPathExpression.md#refreshrefs)
* [subscribe](/auto-docs/free-layout-editor/classes/KeyPathExpression.md#subscribe)
* [toJSON](/auto-docs/free-layout-editor/classes/KeyPathExpression.md#tojson)

## Constructors

### constructor

**new KeyPathExpression**<`CustomPathJSON`>(`params`, `opts`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CustomPathJSON` | extends [`ASTNodeJSON`](/auto-docs/free-layout-editor/interfaces/ASTNodeJSON.md) = [`KeyPathExpressionJSON`](/auto-docs/free-layout-editor/interfaces/KeyPathExpressionJSON.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`CreateASTParams`](/auto-docs/free-layout-editor/interfaces/CreateASTParams.md) |
| `opts` | `any` |

#### Overrides

[BaseExpression](/auto-docs/free-layout-editor/classes/BaseExpression.md).[constructor](/auto-docs/free-layout-editor/classes/BaseExpression.md#constructor)

## Properties

### changeLocked

**changeLocked**: `boolean`

更新锁

#### Inherited from

[BaseExpression](/auto-docs/free-layout-editor/classes/BaseExpression.md).[changeLocked](/auto-docs/free-layout-editor/classes/BaseExpression.md#changelocked)

***

### flags

**flags**: [`ASTNodeFlags`](/auto-docs/free-layout-editor/enums/ASTNodeFlags.md)

节点 Flags，记录一些 Flag 信息

#### Inherited from

[BaseExpression](/auto-docs/free-layout-editor/classes/BaseExpression.md).[flags](/auto-docs/free-layout-editor/classes/BaseExpression.md#flags)

***

### key

`Readonly` **key**: `string`

节点的唯一标识符，节点不指定则默认由 nanoid 生成，不可更改

* 如需要生成新 key，则销毁当前节点并生成新的节点

#### Inherited from

[BaseExpression](/auto-docs/free-layout-editor/classes/BaseExpression.md).[key](/auto-docs/free-layout-editor/classes/BaseExpression.md#key)

***

### onDispose

**onDispose**: [`Event`](/auto-docs/free-layout-editor/interfaces/Event-1.md)<`void`>

销毁时触发的回调

#### Inherited from

[BaseExpression](/auto-docs/free-layout-editor/classes/BaseExpression.md).[onDispose](/auto-docs/free-layout-editor/classes/BaseExpression.md#ondispose)

***

### opts

`Optional` `Readonly` **opts**: `any`

**`Deprecated`**

获取 ASTNode 注入的 opts

请使用 @injectToAst(XXXService) declare xxxService: XXXService 实现外部依赖注入

#### Inherited from

[BaseExpression](/auto-docs/free-layout-editor/classes/BaseExpression.md).[opts](/auto-docs/free-layout-editor/classes/BaseExpression.md#opts)

***

### parent

`Readonly` **parent**: `undefined` | [`ASTNode`](/auto-docs/free-layout-editor/classes/ASTNode.md)<`any`, `any`>

父节点

#### Inherited from

[BaseExpression](/auto-docs/free-layout-editor/classes/BaseExpression.md).[parent](/auto-docs/free-layout-editor/classes/BaseExpression.md#parent)

***

### refs$

**refs$**: `Observable`<`ExpressionRefs`>

监听引用变量变化
监听 \[a.b.c] -> \[a.b]

#### Inherited from

[BaseExpression](/auto-docs/free-layout-editor/classes/BaseExpression.md).[refs$](/auto-docs/free-layout-editor/classes/BaseExpression.md#refs$)

***

### scope

`Readonly` **scope**: [`Scope`](/auto-docs/free-layout-editor/classes/Scope.md)<`Record`<`string`, `any`>>

节点所处的作用域

#### Inherited from

[BaseExpression](/auto-docs/free-layout-editor/classes/BaseExpression.md).[scope](/auto-docs/free-layout-editor/classes/BaseExpression.md#scope)

***

### toDispose

`Readonly` **toDispose**: [`DisposableCollection`](/auto-docs/free-layout-editor/classes/DisposableCollection.md)

删除节点处理事件列表

#### Inherited from

[BaseExpression](/auto-docs/free-layout-editor/classes/BaseExpression.md).[toDispose](/auto-docs/free-layout-editor/classes/BaseExpression.md#todispose)

***

### value$

`Readonly` **value$**: `BehaviorSubject`<[`ASTNode`](/auto-docs/free-layout-editor/classes/ASTNode.md)<`any`, `any`>>

AST 节点变化事件，基于 Rxjs 实现

* 使用了 BehaviorSubject, 在订阅时会自动触发一次事件，事件为当前值

#### Inherited from

[BaseExpression](/auto-docs/free-layout-editor/classes/BaseExpression.md).[value$](/auto-docs/free-layout-editor/classes/BaseExpression.md#value$)

***

### kind

`Static` **kind**: `string`

节点类型

#### Overrides

[BaseExpression](/auto-docs/free-layout-editor/classes/BaseExpression.md).[kind](/auto-docs/free-layout-editor/classes/BaseExpression.md#kind)

## Accessors

### children

`get` **children**(): [`ASTNode`](/auto-docs/free-layout-editor/classes/ASTNode.md)<`any`, `any`>\[]

获取当前节点所有子节点

#### Returns

[`ASTNode`](/auto-docs/free-layout-editor/classes/ASTNode.md)<`any`, `any`>\[]

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

`get` **globalVariableTable**(): [`IVariableTable`](/auto-docs/free-layout-editor/interfaces/IVariableTable.md)

获取全局变量表，方便表达式获取引用变量

#### Returns

[`IVariableTable`](/auto-docs/free-layout-editor/interfaces/IVariableTable.md)

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

`get` **parentFields**(): [`BaseVariableField`](/auto-docs/free-layout-editor/classes/BaseVariableField.md)<`any`>\[]

父变量字段，通过由近而远的方式进行排序

#### Returns

[`BaseVariableField`](/auto-docs/free-layout-editor/classes/BaseVariableField.md)<`any`>\[]

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

`get` **returnType**(): `undefined` | [`BaseType`](/auto-docs/free-layout-editor/classes/BaseType.md)<`any`, `any`>

表达式返回的数据类型

#### Returns

`undefined` | [`BaseType`](/auto-docs/free-layout-editor/classes/BaseType.md)<`any`, `any`>

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
| `ActionType` | extends [`GlobalEventActionType`](/auto-docs/free-layout-editor/interfaces/GlobalEventActionType.md)<`string`, `any`, [`ASTNode`](/auto-docs/free-layout-editor/classes/ASTNode.md)<`any`, `any`>, `ActionType`> = [`GlobalEventActionType`](/auto-docs/free-layout-editor/interfaces/GlobalEventActionType.md)<`string`, `any`, [`ASTNode`](/auto-docs/free-layout-editor/classes/ASTNode.md)<`any`, `any`>> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Omit`<`ActionType`, `"ast"`> |

#### Returns

`void`

#### Inherited from

[BaseExpression](/auto-docs/free-layout-editor/classes/BaseExpression.md).[dispatchGlobalEvent](/auto-docs/free-layout-editor/classes/BaseExpression.md#dispatchglobalevent)

***

### dispose

**dispose**(): `void`

销毁

#### Returns

`void`

#### Inherited from

[BaseExpression](/auto-docs/free-layout-editor/classes/BaseExpression.md).[dispose](/auto-docs/free-layout-editor/classes/BaseExpression.md#dispose)

***

### fireChange

**fireChange**(): `void`

触发当前节点更新

#### Returns

`void`

#### Inherited from

[BaseExpression](/auto-docs/free-layout-editor/classes/BaseExpression.md).[fireChange](/auto-docs/free-layout-editor/classes/BaseExpression.md#firechange)

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

[BaseExpression](/auto-docs/free-layout-editor/classes/BaseExpression.md).[fromJSON](/auto-docs/free-layout-editor/classes/BaseExpression.md#fromjson)

***

### getRefFields

**getRefFields**(): [`BaseVariableField`](/auto-docs/free-layout-editor/classes/BaseVariableField.md)<`any`>\[]

获取表达式引用的变量字段

* 通常是 变量 VariableDeclaration，或者 属性 Property 节点

#### Returns

[`BaseVariableField`](/auto-docs/free-layout-editor/classes/BaseVariableField.md)<`any`>\[]

#### Overrides

[BaseExpression](/auto-docs/free-layout-editor/classes/BaseExpression.md).[getRefFields](/auto-docs/free-layout-editor/classes/BaseExpression.md#getreffields)

***

### refreshRefs

**refreshRefs**(): `void`

刷新变量引用

#### Returns

`void`

#### Inherited from

[BaseExpression](/auto-docs/free-layout-editor/classes/BaseExpression.md).[refreshRefs](/auto-docs/free-layout-editor/classes/BaseExpression.md#refreshrefs)

***

### subscribe

**subscribe**<`Data`>(`observer`, `selector?`): [`Disposable`](/auto-docs/free-layout-editor/interfaces/Disposable-1.md)

监听 AST 节点的变化

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | [`KeyPathExpression`](/auto-docs/free-layout-editor/classes/KeyPathExpression.md)<`CustomPathJSON`> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `observer` | `ObserverOrNext`<`Data`> | 监听回调 |
| `selector?` | `SubscribeConfig`<[`KeyPathExpression`](/auto-docs/free-layout-editor/classes/KeyPathExpression.md)<`CustomPathJSON`>, `Data`> | 监听指定数据 |

#### Returns

[`Disposable`](/auto-docs/free-layout-editor/interfaces/Disposable-1.md)

#### Inherited from

[BaseExpression](/auto-docs/free-layout-editor/classes/BaseExpression.md).[subscribe](/auto-docs/free-layout-editor/classes/BaseExpression.md#subscribe)

***

### toJSON

**toJSON**(): [`ASTNodeJSON`](/auto-docs/free-layout-editor/interfaces/ASTNodeJSON.md)

转化为 ASTNodeJSON

#### Returns

[`ASTNodeJSON`](/auto-docs/free-layout-editor/interfaces/ASTNodeJSON.md)

#### Overrides

[BaseExpression](/auto-docs/free-layout-editor/classes/BaseExpression.md).[toJSON](/auto-docs/free-layout-editor/classes/BaseExpression.md#tojson)
