# Class: EnumerateExpression

遍历表达式，对列表进行遍历，获取遍历后的变量类型

## Hierarchy

* [`BaseExpression`](/en/auto-docs/editor/classes/BaseExpression.md)<[`EnumerateExpressionJSON`](/en/auto-docs/editor/interfaces/EnumerateExpressionJSON.md)>

  ↳ **`EnumerateExpression`**

## Table of contents

### Constructors

* [constructor](/en/auto-docs/editor/classes/EnumerateExpression.md#constructor)

### Properties

* [changeLocked](/en/auto-docs/editor/classes/EnumerateExpression.md#changelocked)
* [flags](/en/auto-docs/editor/classes/EnumerateExpression.md#flags)
* [key](/en/auto-docs/editor/classes/EnumerateExpression.md#key)
* [onDispose](/en/auto-docs/editor/classes/EnumerateExpression.md#ondispose)
* [opts](/en/auto-docs/editor/classes/EnumerateExpression.md#opts)
* [parent](/en/auto-docs/editor/classes/EnumerateExpression.md#parent)
* [refs$](/en/auto-docs/editor/classes/EnumerateExpression.md#refs$)
* [scope](/en/auto-docs/editor/classes/EnumerateExpression.md#scope)
* [toDispose](/en/auto-docs/editor/classes/EnumerateExpression.md#todispose)
* [value$](/en/auto-docs/editor/classes/EnumerateExpression.md#value$)
* [kind](/en/auto-docs/editor/classes/EnumerateExpression.md#kind)

### Accessors

* [children](/en/auto-docs/editor/classes/EnumerateExpression.md#children)
* [disposed](/en/auto-docs/editor/classes/EnumerateExpression.md#disposed)
* [enumerateFor](/en/auto-docs/editor/classes/EnumerateExpression.md#enumeratefor)
* [globalVariableTable](/en/auto-docs/editor/classes/EnumerateExpression.md#globalvariabletable)
* [hash](/en/auto-docs/editor/classes/EnumerateExpression.md#hash)
* [kind](/en/auto-docs/editor/classes/EnumerateExpression.md#kind-1)
* [parentFields](/en/auto-docs/editor/classes/EnumerateExpression.md#parentfields)
* [refs](/en/auto-docs/editor/classes/EnumerateExpression.md#refs)
* [returnType](/en/auto-docs/editor/classes/EnumerateExpression.md#returntype)
* [version](/en/auto-docs/editor/classes/EnumerateExpression.md#version)

### Methods

* [dispatchGlobalEvent](/en/auto-docs/editor/classes/EnumerateExpression.md#dispatchglobalevent)
* [dispose](/en/auto-docs/editor/classes/EnumerateExpression.md#dispose)
* [fireChange](/en/auto-docs/editor/classes/EnumerateExpression.md#firechange)
* [fromJSON](/en/auto-docs/editor/classes/EnumerateExpression.md#fromjson)
* [getRefFields](/en/auto-docs/editor/classes/EnumerateExpression.md#getreffields)
* [refreshRefs](/en/auto-docs/editor/classes/EnumerateExpression.md#refreshrefs)
* [subscribe](/en/auto-docs/editor/classes/EnumerateExpression.md#subscribe)
* [toJSON](/en/auto-docs/editor/classes/EnumerateExpression.md#tojson)

## Constructors

### constructor

**new EnumerateExpression**(`params`, `opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`CreateASTParams`](/en/auto-docs/editor/interfaces/CreateASTParams.md) |
| `opts?` | `any` |

#### Inherited from

[BaseExpression](/en/auto-docs/editor/classes/BaseExpression.md).[constructor](/en/auto-docs/editor/classes/BaseExpression.md#constructor)

## Properties

### changeLocked

**changeLocked**: `boolean`

更新锁

#### Inherited from

[BaseExpression](/en/auto-docs/editor/classes/BaseExpression.md).[changeLocked](/en/auto-docs/editor/classes/BaseExpression.md#changelocked)

***

### flags

**flags**: [`ASTNodeFlags`](/en/auto-docs/editor/enums/ASTNodeFlags.md)

节点 Flags，记录一些 Flag 信息

#### Inherited from

[BaseExpression](/en/auto-docs/editor/classes/BaseExpression.md).[flags](/en/auto-docs/editor/classes/BaseExpression.md#flags)

***

### key

`Readonly` **key**: `string`

节点的唯一标识符，节点不指定则默认由 nanoid 生成，不可更改

* 如需要生成新 key，则销毁当前节点并生成新的节点

#### Inherited from

[BaseExpression](/en/auto-docs/editor/classes/BaseExpression.md).[key](/en/auto-docs/editor/classes/BaseExpression.md#key)

***

### onDispose

**onDispose**: [`Event`](/en/auto-docs/editor/interfaces/Event-1.md)<`void`>

销毁时触发的回调

#### Inherited from

[BaseExpression](/en/auto-docs/editor/classes/BaseExpression.md).[onDispose](/en/auto-docs/editor/classes/BaseExpression.md#ondispose)

***

### opts

`Optional` `Readonly` **opts**: `any`

**`Deprecated`**

获取 ASTNode 注入的 opts

请使用 @injectToAst(XXXService) declare xxxService: XXXService 实现外部依赖注入

#### Inherited from

[BaseExpression](/en/auto-docs/editor/classes/BaseExpression.md).[opts](/en/auto-docs/editor/classes/BaseExpression.md#opts)

***

### parent

`Readonly` **parent**: `undefined` | [`ASTNode`](/en/auto-docs/editor/classes/ASTNode.md)<`any`, `any`>

父节点

#### Inherited from

[BaseExpression](/en/auto-docs/editor/classes/BaseExpression.md).[parent](/en/auto-docs/editor/classes/BaseExpression.md#parent)

***

### refs$

**refs$**: `Observable`<`ExpressionRefs`>

监听引用变量变化
监听 \[a.b.c] -> \[a.b]

#### Inherited from

[BaseExpression](/en/auto-docs/editor/classes/BaseExpression.md).[refs$](/en/auto-docs/editor/classes/BaseExpression.md#refs$)

***

### scope

`Readonly` **scope**: [`Scope`](/en/auto-docs/editor/classes/Scope.md)<`Record`<`string`, `any`>>

节点所处的作用域

#### Inherited from

[BaseExpression](/en/auto-docs/editor/classes/BaseExpression.md).[scope](/en/auto-docs/editor/classes/BaseExpression.md#scope)

***

### toDispose

`Readonly` **toDispose**: [`DisposableCollection`](/en/auto-docs/editor/classes/DisposableCollection.md)

删除节点处理事件列表

#### Inherited from

[BaseExpression](/en/auto-docs/editor/classes/BaseExpression.md).[toDispose](/en/auto-docs/editor/classes/BaseExpression.md#todispose)

***

### value$

`Readonly` **value$**: `BehaviorSubject`<[`ASTNode`](/en/auto-docs/editor/classes/ASTNode.md)<`any`, `any`>>

AST 节点变化事件，基于 Rxjs 实现

* 使用了 BehaviorSubject, 在订阅时会自动触发一次事件，事件为当前值

#### Inherited from

[BaseExpression](/en/auto-docs/editor/classes/BaseExpression.md).[value$](/en/auto-docs/editor/classes/BaseExpression.md#value$)

***

### kind

`Static` **kind**: `string`

节点类型

#### Overrides

[BaseExpression](/en/auto-docs/editor/classes/BaseExpression.md).[kind](/en/auto-docs/editor/classes/BaseExpression.md#kind)

## Accessors

### children

`get` **children**(): [`ASTNode`](/en/auto-docs/editor/classes/ASTNode.md)<`any`, `any`>\[]

获取当前节点所有子节点

#### Returns

[`ASTNode`](/en/auto-docs/editor/classes/ASTNode.md)<`any`, `any`>\[]

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

### enumerateFor

`get` **enumerateFor**(): `undefined` | [`BaseExpression`](/en/auto-docs/editor/classes/BaseExpression.md)<`any`, `any`>

#### Returns

`undefined` | [`BaseExpression`](/en/auto-docs/editor/classes/BaseExpression.md)<`any`, `any`>

***

### globalVariableTable

`get` **globalVariableTable**(): [`IVariableTable`](/en/auto-docs/editor/interfaces/IVariableTable.md)

获取全局变量表，方便表达式获取引用变量

#### Returns

[`IVariableTable`](/en/auto-docs/editor/interfaces/IVariableTable.md)

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

### kind

`get` **kind**(): `string`

AST 节点的类型

#### Returns

`string`

#### Inherited from

BaseExpression.kind

***

### parentFields

`get` **parentFields**(): [`BaseVariableField`](/en/auto-docs/editor/classes/BaseVariableField.md)<`any`>\[]

父变量字段，通过由近而远的方式进行排序

#### Returns

[`BaseVariableField`](/en/auto-docs/editor/classes/BaseVariableField.md)<`any`>\[]

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

`get` **returnType**(): `undefined` | [`BaseType`](/en/auto-docs/editor/classes/BaseType.md)<`any`, `any`>

表达式返回的数据类型

#### Returns

`undefined` | [`BaseType`](/en/auto-docs/editor/classes/BaseType.md)<`any`, `any`>

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
| `ActionType` | extends [`GlobalEventActionType`](/en/auto-docs/editor/interfaces/GlobalEventActionType.md)<`string`, `any`, [`ASTNode`](/en/auto-docs/editor/classes/ASTNode.md)<`any`, `any`>, `ActionType`> = [`GlobalEventActionType`](/en/auto-docs/editor/interfaces/GlobalEventActionType.md)<`string`, `any`, [`ASTNode`](/en/auto-docs/editor/classes/ASTNode.md)<`any`, `any`>> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Omit`<`ActionType`, `"ast"`> |

#### Returns

`void`

#### Inherited from

[BaseExpression](/en/auto-docs/editor/classes/BaseExpression.md).[dispatchGlobalEvent](/en/auto-docs/editor/classes/BaseExpression.md#dispatchglobalevent)

***

### dispose

**dispose**(): `void`

销毁

#### Returns

`void`

#### Inherited from

[BaseExpression](/en/auto-docs/editor/classes/BaseExpression.md).[dispose](/en/auto-docs/editor/classes/BaseExpression.md#dispose)

***

### fireChange

**fireChange**(): `void`

触发当前节点更新

#### Returns

`void`

#### Inherited from

[BaseExpression](/en/auto-docs/editor/classes/BaseExpression.md).[fireChange](/en/auto-docs/editor/classes/BaseExpression.md#firechange)

***

### fromJSON

**fromJSON**(`«destructured»`): `void`

解析 AST JSON 数据

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `«destructured»` | [`EnumerateExpressionJSON`](/en/auto-docs/editor/interfaces/EnumerateExpressionJSON.md) | AST JSON 数据 |

#### Returns

`void`

#### Overrides

[BaseExpression](/en/auto-docs/editor/classes/BaseExpression.md).[fromJSON](/en/auto-docs/editor/classes/BaseExpression.md#fromjson)

***

### getRefFields

**getRefFields**(): \[]

获取表达式引用的变量字段

* 通常是 变量 VariableDeclaration，或者 属性 Property 节点

#### Returns

\[]

#### Overrides

[BaseExpression](/en/auto-docs/editor/classes/BaseExpression.md).[getRefFields](/en/auto-docs/editor/classes/BaseExpression.md#getreffields)

***

### refreshRefs

**refreshRefs**(): `void`

刷新变量引用

#### Returns

`void`

#### Inherited from

[BaseExpression](/en/auto-docs/editor/classes/BaseExpression.md).[refreshRefs](/en/auto-docs/editor/classes/BaseExpression.md#refreshrefs)

***

### subscribe

**subscribe**<`Data`>(`observer`, `selector?`): [`Disposable`](/en/auto-docs/editor/interfaces/Disposable-1.md)

监听 AST 节点的变化

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | [`EnumerateExpression`](/en/auto-docs/editor/classes/EnumerateExpression.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `observer` | `ObserverOrNext`<`Data`> | 监听回调 |
| `selector?` | `SubscribeConfig`<[`EnumerateExpression`](/en/auto-docs/editor/classes/EnumerateExpression.md), `Data`> | 监听指定数据 |

#### Returns

[`Disposable`](/en/auto-docs/editor/interfaces/Disposable-1.md)

#### Inherited from

[BaseExpression](/en/auto-docs/editor/classes/BaseExpression.md).[subscribe](/en/auto-docs/editor/classes/BaseExpression.md#subscribe)

***

### toJSON

**toJSON**(): [`ASTNodeJSON`](/en/auto-docs/editor/interfaces/ASTNodeJSON.md)

转化为 ASTNodeJSON

#### Returns

[`ASTNodeJSON`](/en/auto-docs/editor/interfaces/ASTNodeJSON.md)

#### Overrides

[BaseExpression](/en/auto-docs/editor/classes/BaseExpression.md).[toJSON](/en/auto-docs/editor/classes/BaseExpression.md#tojson)
