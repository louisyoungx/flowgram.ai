# Class: EnumerateExpression

遍历表达式，对列表进行遍历，获取遍历后的变量类型

## Hierarchy

* [`BaseExpression`](/auto-docs/variable-plugin/classes/BaseExpression.md)<[`EnumerateExpressionJSON`](/auto-docs/variable-plugin/interfaces/EnumerateExpressionJSON.md)>

  ↳ **`EnumerateExpression`**

## Table of contents

### Constructors

* [constructor](/auto-docs/variable-plugin/classes/EnumerateExpression.md#constructor)

### Properties

* [changeLocked](/auto-docs/variable-plugin/classes/EnumerateExpression.md#changelocked)
* [flags](/auto-docs/variable-plugin/classes/EnumerateExpression.md#flags)
* [key](/auto-docs/variable-plugin/classes/EnumerateExpression.md#key)
* [onDispose](/auto-docs/variable-plugin/classes/EnumerateExpression.md#ondispose)
* [opts](/auto-docs/variable-plugin/classes/EnumerateExpression.md#opts)
* [parent](/auto-docs/variable-plugin/classes/EnumerateExpression.md#parent)
* [refs$](/auto-docs/variable-plugin/classes/EnumerateExpression.md#refs$)
* [scope](/auto-docs/variable-plugin/classes/EnumerateExpression.md#scope)
* [toDispose](/auto-docs/variable-plugin/classes/EnumerateExpression.md#todispose)
* [value$](/auto-docs/variable-plugin/classes/EnumerateExpression.md#value$)
* [kind](/auto-docs/variable-plugin/classes/EnumerateExpression.md#kind)

### Accessors

* [children](/auto-docs/variable-plugin/classes/EnumerateExpression.md#children)
* [disposed](/auto-docs/variable-plugin/classes/EnumerateExpression.md#disposed)
* [enumerateFor](/auto-docs/variable-plugin/classes/EnumerateExpression.md#enumeratefor)
* [globalVariableTable](/auto-docs/variable-plugin/classes/EnumerateExpression.md#globalvariabletable)
* [hash](/auto-docs/variable-plugin/classes/EnumerateExpression.md#hash)
* [kind](/auto-docs/variable-plugin/classes/EnumerateExpression.md#kind-1)
* [parentFields](/auto-docs/variable-plugin/classes/EnumerateExpression.md#parentfields)
* [refs](/auto-docs/variable-plugin/classes/EnumerateExpression.md#refs)
* [returnType](/auto-docs/variable-plugin/classes/EnumerateExpression.md#returntype)
* [version](/auto-docs/variable-plugin/classes/EnumerateExpression.md#version)

### Methods

* [dispatchGlobalEvent](/auto-docs/variable-plugin/classes/EnumerateExpression.md#dispatchglobalevent)
* [dispose](/auto-docs/variable-plugin/classes/EnumerateExpression.md#dispose)
* [fireChange](/auto-docs/variable-plugin/classes/EnumerateExpression.md#firechange)
* [fromJSON](/auto-docs/variable-plugin/classes/EnumerateExpression.md#fromjson)
* [getRefFields](/auto-docs/variable-plugin/classes/EnumerateExpression.md#getreffields)
* [refreshRefs](/auto-docs/variable-plugin/classes/EnumerateExpression.md#refreshrefs)
* [subscribe](/auto-docs/variable-plugin/classes/EnumerateExpression.md#subscribe)
* [toJSON](/auto-docs/variable-plugin/classes/EnumerateExpression.md#tojson)

## Constructors

### constructor

**new EnumerateExpression**(`params`, `opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`CreateASTParams`](/auto-docs/variable-plugin/interfaces/CreateASTParams.md) |
| `opts?` | `any` |

#### Inherited from

[BaseExpression](/auto-docs/variable-plugin/classes/BaseExpression.md).[constructor](/auto-docs/variable-plugin/classes/BaseExpression.md#constructor)

## Properties

### changeLocked

**changeLocked**: `boolean`

更新锁

#### Inherited from

[BaseExpression](/auto-docs/variable-plugin/classes/BaseExpression.md).[changeLocked](/auto-docs/variable-plugin/classes/BaseExpression.md#changelocked)

***

### flags

**flags**: [`ASTNodeFlags`](/auto-docs/variable-plugin/enums/ASTNodeFlags.md)

节点 Flags，记录一些 Flag 信息

#### Inherited from

[BaseExpression](/auto-docs/variable-plugin/classes/BaseExpression.md).[flags](/auto-docs/variable-plugin/classes/BaseExpression.md#flags)

***

### key

`Readonly` **key**: `string`

节点的唯一标识符，节点不指定则默认由 nanoid 生成，不可更改

* 如需要生成新 key，则销毁当前节点并生成新的节点

#### Inherited from

[BaseExpression](/auto-docs/variable-plugin/classes/BaseExpression.md).[key](/auto-docs/variable-plugin/classes/BaseExpression.md#key)

***

### onDispose

**onDispose**: `Event`<`void`>

销毁时触发的回调

#### Inherited from

[BaseExpression](/auto-docs/variable-plugin/classes/BaseExpression.md).[onDispose](/auto-docs/variable-plugin/classes/BaseExpression.md#ondispose)

***

### opts

`Optional` `Readonly` **opts**: `any`

**`Deprecated`**

获取 ASTNode 注入的 opts

请使用 @injectToAst(XXXService) declare xxxService: XXXService 实现外部依赖注入

#### Inherited from

[BaseExpression](/auto-docs/variable-plugin/classes/BaseExpression.md).[opts](/auto-docs/variable-plugin/classes/BaseExpression.md#opts)

***

### parent

`Readonly` **parent**: `undefined` | [`ASTNode`](/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`>

父节点

#### Inherited from

[BaseExpression](/auto-docs/variable-plugin/classes/BaseExpression.md).[parent](/auto-docs/variable-plugin/classes/BaseExpression.md#parent)

***

### refs$

**refs$**: `Observable`<`ExpressionRefs`>

监听引用变量变化
监听 \[a.b.c] -> \[a.b]

#### Inherited from

[BaseExpression](/auto-docs/variable-plugin/classes/BaseExpression.md).[refs$](/auto-docs/variable-plugin/classes/BaseExpression.md#refs$)

***

### scope

`Readonly` **scope**: [`Scope`](/auto-docs/variable-plugin/classes/Scope.md)<`Record`<`string`, `any`>>

节点所处的作用域

#### Inherited from

[BaseExpression](/auto-docs/variable-plugin/classes/BaseExpression.md).[scope](/auto-docs/variable-plugin/classes/BaseExpression.md#scope)

***

### toDispose

`Readonly` **toDispose**: `DisposableCollection`

删除节点处理事件列表

#### Inherited from

[BaseExpression](/auto-docs/variable-plugin/classes/BaseExpression.md).[toDispose](/auto-docs/variable-plugin/classes/BaseExpression.md#todispose)

***

### value$

`Readonly` **value$**: `BehaviorSubject`<[`ASTNode`](/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`>>

AST 节点变化事件，基于 Rxjs 实现

* 使用了 BehaviorSubject, 在订阅时会自动触发一次事件，事件为当前值

#### Inherited from

[BaseExpression](/auto-docs/variable-plugin/classes/BaseExpression.md).[value$](/auto-docs/variable-plugin/classes/BaseExpression.md#value$)

***

### kind

`Static` **kind**: `string`

节点类型

#### Overrides

[BaseExpression](/auto-docs/variable-plugin/classes/BaseExpression.md).[kind](/auto-docs/variable-plugin/classes/BaseExpression.md#kind)

## Accessors

### children

`get` **children**(): [`ASTNode`](/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`>\[]

获取当前节点所有子节点

#### Returns

[`ASTNode`](/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`>\[]

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

`get` **enumerateFor**(): `undefined` | [`BaseExpression`](/auto-docs/variable-plugin/classes/BaseExpression.md)<`any`, `any`>

#### Returns

`undefined` | [`BaseExpression`](/auto-docs/variable-plugin/classes/BaseExpression.md)<`any`, `any`>

***

### globalVariableTable

`get` **globalVariableTable**(): [`IVariableTable`](/auto-docs/variable-plugin/interfaces/IVariableTable.md)

获取全局变量表，方便表达式获取引用变量

#### Returns

[`IVariableTable`](/auto-docs/variable-plugin/interfaces/IVariableTable.md)

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

`get` **parentFields**(): [`BaseVariableField`](/auto-docs/variable-plugin/classes/BaseVariableField.md)<`any`>\[]

父变量字段，通过由近而远的方式进行排序

#### Returns

[`BaseVariableField`](/auto-docs/variable-plugin/classes/BaseVariableField.md)<`any`>\[]

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

`get` **returnType**(): `undefined` | [`BaseType`](/auto-docs/variable-plugin/classes/BaseType.md)<`any`, `any`>

表达式返回的数据类型

#### Returns

`undefined` | [`BaseType`](/auto-docs/variable-plugin/classes/BaseType.md)<`any`, `any`>

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
| `ActionType` | extends [`GlobalEventActionType`](/auto-docs/variable-plugin/interfaces/GlobalEventActionType.md)<`string`, `any`, [`ASTNode`](/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`>, `ActionType`> = [`GlobalEventActionType`](/auto-docs/variable-plugin/interfaces/GlobalEventActionType.md)<`string`, `any`, [`ASTNode`](/auto-docs/variable-plugin/classes/ASTNode.md)<`any`, `any`>> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Omit`<`ActionType`, `"ast"`> |

#### Returns

`void`

#### Inherited from

[BaseExpression](/auto-docs/variable-plugin/classes/BaseExpression.md).[dispatchGlobalEvent](/auto-docs/variable-plugin/classes/BaseExpression.md#dispatchglobalevent)

***

### dispose

**dispose**(): `void`

销毁

#### Returns

`void`

#### Inherited from

[BaseExpression](/auto-docs/variable-plugin/classes/BaseExpression.md).[dispose](/auto-docs/variable-plugin/classes/BaseExpression.md#dispose)

***

### fireChange

**fireChange**(): `void`

触发当前节点更新

#### Returns

`void`

#### Inherited from

[BaseExpression](/auto-docs/variable-plugin/classes/BaseExpression.md).[fireChange](/auto-docs/variable-plugin/classes/BaseExpression.md#firechange)

***

### fromJSON

**fromJSON**(`«destructured»`): `void`

解析 AST JSON 数据

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `«destructured»` | [`EnumerateExpressionJSON`](/auto-docs/variable-plugin/interfaces/EnumerateExpressionJSON.md) | AST JSON 数据 |

#### Returns

`void`

#### Overrides

[BaseExpression](/auto-docs/variable-plugin/classes/BaseExpression.md).[fromJSON](/auto-docs/variable-plugin/classes/BaseExpression.md#fromjson)

***

### getRefFields

**getRefFields**(): \[]

获取表达式引用的变量字段

* 通常是 变量 VariableDeclaration，或者 属性 Property 节点

#### Returns

\[]

#### Overrides

[BaseExpression](/auto-docs/variable-plugin/classes/BaseExpression.md).[getRefFields](/auto-docs/variable-plugin/classes/BaseExpression.md#getreffields)

***

### refreshRefs

**refreshRefs**(): `void`

刷新变量引用

#### Returns

`void`

#### Inherited from

[BaseExpression](/auto-docs/variable-plugin/classes/BaseExpression.md).[refreshRefs](/auto-docs/variable-plugin/classes/BaseExpression.md#refreshrefs)

***

### subscribe

**subscribe**<`Data`>(`observer`, `selector?`): `Disposable`

监听 AST 节点的变化

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | [`EnumerateExpression`](/auto-docs/variable-plugin/classes/EnumerateExpression.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `observer` | `ObserverOrNext`<`Data`> | 监听回调 |
| `selector?` | `SubscribeConfig`<[`EnumerateExpression`](/auto-docs/variable-plugin/classes/EnumerateExpression.md), `Data`> | 监听指定数据 |

#### Returns

`Disposable`

#### Inherited from

[BaseExpression](/auto-docs/variable-plugin/classes/BaseExpression.md).[subscribe](/auto-docs/variable-plugin/classes/BaseExpression.md#subscribe)

***

### toJSON

**toJSON**(): [`ASTNodeJSON`](/auto-docs/variable-plugin/interfaces/ASTNodeJSON.md)

转化为 ASTNodeJSON

#### Returns

[`ASTNodeJSON`](/auto-docs/variable-plugin/interfaces/ASTNodeJSON.md)

#### Overrides

[BaseExpression](/auto-docs/variable-plugin/classes/BaseExpression.md).[toJSON](/auto-docs/variable-plugin/classes/BaseExpression.md#tojson)
