# Class: FlowNodeEntity

An object that performs a cleanup operation when `.dispose()` is called.

Some examples of how disposables are used:

* An event listener that removes itself when `.dispose()` is called.
* The return value from registering a provider. When `.dispose()` is called, the provider is unregistered.

## Hierarchy

* [`Entity`](/auto-docs/free-layout-editor/classes/Entity-1.md)<[`FlowNodeEntityConfig`](/auto-docs/free-layout-editor/interfaces/FlowNodeEntityConfig.md)>

  ↳ **`FlowNodeEntity`**

## Table of contents

### Constructors

* [constructor](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#constructor)

### Properties

* [\_\_opts\_type\_\_](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#__opts_type__)
* [document](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#document)
* [entityManager](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#entitymanager)
* [flowNodeType](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#flownodetype)
* [index](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#index)
* [metaFromJSON](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#metafromjson)
* [onDataChange](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#ondatachange)
* [onEntityChange](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#onentitychange)
* [originParent](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#originparent)
* [preDispose](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#predispose)
* [toDispose](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#todispose)
* [type](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#type)

### Accessors

* [allChildren](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#allchildren)
* [allCollapsedChildren](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#allcollapsedchildren)
* [blocks](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#blocks)
* [bounds](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#bounds)
* [children](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#children)
* [childrenLength](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#childrenlength)
* [collapsed](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#collapsed)
* [collapsedChildren](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#collapsedchildren)
* [context](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#context)
* [disposed](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#disposed)
* [firstChild](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#firstchild)
* [hasChild](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#haschild)
* [hidden](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#hidden)
* [id](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#id)
* [isFirst](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#isfirst)
* [isInlineBlock](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#isinlineblock)
* [isInlineBlocks](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#isinlineblocks)
* [isLast](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#islast)
* [isNodeEnd](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#isnodeend)
* [isStart](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#isstart)
* [isVertical](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#isvertical)
* [lastBlock](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#lastblock)
* [lastChild](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#lastchild)
* [lastCollapsedChild](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#lastcollapsedchild)
* [next](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#next)
* [onDispose](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#ondispose)
* [onExtInfoChange](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#onextinfochange)
* [parent](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#parent)
* [pre](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#pre)
* [renderData](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#renderdata)
* [savedInManager](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#savedinmanager)
* [transform](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#transform)
* [type](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#type-1)
* [version](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#version)

### Methods

* [addChild](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#addchild)
* [addData](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#adddata)
* [addInitializeData](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#addinitializedata)
* [clearMemoGlobal](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#clearmemoglobal)
* [clearMemoLocal](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#clearmemolocal)
* [dispose](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#dispose)
* [fromJSON](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#fromjson)
* [getData](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#getdata)
* [getDefaultDataRegistries](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#getdefaultdataregistries)
* [getExtInfo](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#getextinfo)
* [getJSONData](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#getjsondata)
* [getNodeMeta](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#getnodemeta)
* [getNodeRegister](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#getnoderegister)
* [getNodeRegistry](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#getnoderegistry)
* [getService](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#getservice)
* [hasData](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#hasdata)
* [initData](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#initdata)
* [isExtend](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#isextend)
* [isTypeOrExtendType](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#istypeorextendtype)
* [memoGlobal](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#memoglobal)
* [memoLocal](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#memolocal)
* [openInsideCollapsed](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#openinsidecollapsed)
* [removeData](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#removedata)
* [reset](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#reset)
* [toJSON](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#tojson)
* [updateData](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#updatedata)
* [updateExtInfo](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md#updateextinfo)

## Constructors

### constructor

**new FlowNodeEntity**(`conf`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `conf` | [`FlowNodeEntityConfig`](/auto-docs/free-layout-editor/interfaces/FlowNodeEntityConfig.md) |

#### Overrides

[Entity](/auto-docs/free-layout-editor/classes/Entity-1.md).[constructor](/auto-docs/free-layout-editor/classes/Entity-1.md#constructor)

## Properties

### \_\_opts\_type\_\_

**\_\_opts\_type\_\_**: [`FlowNodeEntityConfig`](/auto-docs/free-layout-editor/interfaces/FlowNodeEntityConfig.md)

#### Inherited from

[Entity](/auto-docs/free-layout-editor/classes/Entity-1.md).[**opts\_type**](/auto-docs/free-layout-editor/classes/Entity-1.md#__opts_type__)

***

### document

**document**: [`FlowDocument`](/auto-docs/free-layout-editor/classes/FlowDocument.md)<[`FlowDocumentJSON`](/auto-docs/free-layout-editor/types/FlowDocumentJSON.md)>

文档引用

***

### entityManager

`Readonly` **entityManager**: [`EntityManager`](/auto-docs/free-layout-editor/classes/EntityManager.md)

全局的entity管理器

#### Inherited from

[Entity](/auto-docs/free-layout-editor/classes/Entity-1.md).[entityManager](/auto-docs/free-layout-editor/classes/Entity-1.md#entitymanager)

***

### flowNodeType

**flowNodeType**: [`FlowNodeType`](/auto-docs/free-layout-editor/types/FlowNodeType.md)

***

### index

**index**: `number`

***

### metaFromJSON

`Optional` **metaFromJSON**: [`FlowNodeMeta`](/auto-docs/free-layout-editor/interfaces/FlowNodeMeta.md)

***

### onDataChange

`Readonly` **onDataChange**: [`Event`](/auto-docs/free-layout-editor/interfaces/Event-1.md)<[`EntityDataChangedEvent`](/auto-docs/free-layout-editor/interfaces/EntityDataChangedEvent.md)<[`Entity`](/auto-docs/free-layout-editor/classes/Entity-1.md)<[`EntityOpts`](/auto-docs/free-layout-editor/interfaces/EntityOpts.md)>>>

数据更改事件

#### Inherited from

[Entity](/auto-docs/free-layout-editor/classes/Entity-1.md).[onDataChange](/auto-docs/free-layout-editor/classes/Entity-1.md#ondatachange)

***

### onEntityChange

`Readonly` **onEntityChange**: [`Event`](/auto-docs/free-layout-editor/interfaces/Event-1.md)<[`Entity`](/auto-docs/free-layout-editor/classes/Entity-1.md)<[`EntityOpts`](/auto-docs/free-layout-editor/interfaces/EntityOpts.md)>>

修改会触发

#### Inherited from

[Entity](/auto-docs/free-layout-editor/classes/Entity-1.md).[onEntityChange](/auto-docs/free-layout-editor/classes/Entity-1.md#onentitychange)

***

### originParent

`Optional` **originParent**: [`FlowNodeEntity`](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md)

真实的父节点，条件块在内部会创建一些空的块节点，这些块需要关联它真实的父亲节点

***

### preDispose

`Readonly` **preDispose**: [`DisposableCollection`](/auto-docs/free-layout-editor/classes/DisposableCollection.md)

销毁前事件管理

#### Inherited from

[Entity](/auto-docs/free-layout-editor/classes/Entity-1.md).[preDispose](/auto-docs/free-layout-editor/classes/Entity-1.md#predispose)

***

### toDispose

`Readonly` **toDispose**: [`DisposableCollection`](/auto-docs/free-layout-editor/classes/DisposableCollection.md)

销毁事件管理

#### Inherited from

[Entity](/auto-docs/free-layout-editor/classes/Entity-1.md).[toDispose](/auto-docs/free-layout-editor/classes/Entity-1.md#todispose)

***

### type

`Static` **type**: `string`

#### Overrides

[Entity](/auto-docs/free-layout-editor/classes/Entity-1.md).[type](/auto-docs/free-layout-editor/classes/Entity-1.md#type)

## Accessors

### allChildren

`get` **allChildren**(): [`FlowNodeEntity`](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md)\[]

获取所有子节点，包含 child 及其所有兄弟节点

#### Returns

[`FlowNodeEntity`](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md)\[]

***

### allCollapsedChildren

`get` **allCollapsedChildren**(): [`FlowNodeEntity`](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md)\[]

获取所有收起的子节点，包含 child 及其所有兄弟节点

#### Returns

[`FlowNodeEntity`](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md)\[]

***

### blocks

`get` **blocks**(): [`FlowNodeEntity`](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md)\[]

Get child blocks

#### Returns

[`FlowNodeEntity`](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md)\[]

***

### bounds

`get` **bounds**(): [`Rectangle`](/auto-docs/free-layout-editor/classes/Rectangle-1.md)

获取节点的位置及大小矩形

#### Returns

[`Rectangle`](/auto-docs/free-layout-editor/classes/Rectangle-1.md)

***

### children

`get` **children**(): [`FlowNodeEntity`](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md)\[]

获取子节点，如果子节点收起来，则会返回 空数组

#### Returns

[`FlowNodeEntity`](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md)\[]

***

### childrenLength

`get` **childrenLength**(): `number`

#### Returns

`number`

***

### collapsed

`get` **collapsed**(): `boolean`

#### Returns

`boolean`

`set` **collapsed**(`collapsed`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `collapsed` | `boolean` |

#### Returns

`void`

***

### collapsedChildren

`get` **collapsedChildren**(): [`FlowNodeEntity`](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md)\[]

Get child blocks

use `blocks` instead

#### Returns

[`FlowNodeEntity`](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md)\[]

**`Deprecated`**

***

### context

`get` **context**(): `any`

#### Returns

`any`

#### Inherited from

Entity.context

***

### disposed

`get` **disposed**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Entity.disposed

***

### firstChild

`get` **firstChild**(): `undefined` | [`FlowNodeEntity`](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md)

#### Returns

`undefined` | [`FlowNodeEntity`](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md)

***

### hasChild

`get` **hasChild**(): `boolean`

#### Returns

`boolean`

***

### hidden

`get` **hidden**(): `boolean`

#### Returns

`boolean`

***

### id

`get` **id**(): `string`

实体 id

#### Returns

`string`

#### Inherited from

Entity.id

***

### isFirst

`get` **isFirst**(): `boolean`

#### Returns

`boolean`

***

### isInlineBlock

`get` **isInlineBlock**(): `boolean`

水平节点

#### Returns

`boolean`

***

### isInlineBlocks

`get` **isInlineBlocks**(): `boolean`

子节点采用水平布局

#### Returns

`boolean`

***

### isLast

`get` **isLast**(): `boolean`

#### Returns

`boolean`

***

### isNodeEnd

`get` **isNodeEnd**(): `boolean`

节点结束标记

* 当前节点是结束节点
* 当前节点最后一个节点包含结束标记
* 当前节点为 inlineBlock，每一个 block 包含结束标记

由子元素确定，因此使用 memoLocal

#### Returns

`boolean`

***

### isStart

`get` **isStart**(): `boolean`

#### Returns

`boolean`

***

### isVertical

`get` **isVertical**(): `boolean`

#### Returns

`boolean`

***

### lastBlock

`get` **lastBlock**(): `undefined` | [`FlowNodeEntity`](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md)

Get last block

#### Returns

`undefined` | [`FlowNodeEntity`](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md)

***

### lastChild

`get` **lastChild**(): `undefined` | [`FlowNodeEntity`](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md)

#### Returns

`undefined` | [`FlowNodeEntity`](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md)

***

### lastCollapsedChild

`get` **lastCollapsedChild**(): `undefined` | [`FlowNodeEntity`](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md)

use `lastBlock` instead

#### Returns

`undefined` | [`FlowNodeEntity`](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md)

***

### next

`get` **next**(): `undefined` | [`FlowNodeEntity`](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md)

#### Returns

`undefined` | [`FlowNodeEntity`](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md)

***

### onDispose

`get` **onDispose**(): [`Event`](/auto-docs/free-layout-editor/interfaces/Event-1.md)<`void`>

销毁事件

#### Returns

[`Event`](/auto-docs/free-layout-editor/interfaces/Event-1.md)<`void`>

#### Inherited from

Entity.onDispose

***

### onExtInfoChange

`get` **onExtInfoChange**(): [`Event`](/auto-docs/free-layout-editor/interfaces/Event-1.md)<{ `newInfo`: `any` ; `oldInfo`: `any`  }>

#### Returns

[`Event`](/auto-docs/free-layout-editor/interfaces/Event-1.md)<{ `newInfo`: `any` ; `oldInfo`: `any`  }>

***

### parent

`get` **parent**(): `undefined` | [`FlowNodeEntity`](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md)

#### Returns

`undefined` | [`FlowNodeEntity`](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md)

***

### pre

`get` **pre**(): `undefined` | [`FlowNodeEntity`](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md)

#### Returns

`undefined` | [`FlowNodeEntity`](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md)

***

### renderData

`get` **renderData**(): [`FlowNodeRenderData`](/auto-docs/free-layout-editor/classes/FlowNodeRenderData.md)

获取渲染数据

#### Returns

[`FlowNodeRenderData`](/auto-docs/free-layout-editor/classes/FlowNodeRenderData.md)

***

### savedInManager

`get` **savedInManager**(): `boolean`

是否存到全局 manager，默认 true

#### Returns

`boolean`

#### Inherited from

Entity.savedInManager

***

### transform

`get` **transform**(): [`FlowNodeTransformData`](/auto-docs/free-layout-editor/classes/FlowNodeTransformData.md)

获取位置大小数据

#### Returns

[`FlowNodeTransformData`](/auto-docs/free-layout-editor/classes/FlowNodeTransformData.md)

***

### type

`get` **type**(): `string`

实体类型

#### Returns

`string`

#### Inherited from

Entity.type

***

### version

`get` **version**(): `number`

实体的版本

#### Returns

`number`

#### Inherited from

Entity.version

## Methods

### addChild

**addChild**(`child`, `index?`): `void`

添加 子节点

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | [`FlowNodeEntity`](/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md) | 插入节点 |
| `index?` | `number` | - |

#### Returns

`void`

***

### addData

**addData**<`D`>(`Registry`, `defaultProps?`): `D`

添加数据

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends [`EntityData`](/auto-docs/free-layout-editor/classes/EntityData.md)<`any`, {}, `D`> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `Registry` | [`EntityDataRegistry`](/auto-docs/free-layout-editor/interfaces/EntityDataRegistry.md)<[`EntityData`](/auto-docs/free-layout-editor/classes/EntityData.md)<`any`, {}>> |
| `defaultProps?` | [`EntityDataProps`](/auto-docs/free-layout-editor/types/EntityDataProps.md)<`D`> |

#### Returns

`D`

#### Inherited from

[Entity](/auto-docs/free-layout-editor/classes/Entity-1.md).[addData](/auto-docs/free-layout-editor/classes/Entity-1.md#adddata)

***

### addInitializeData

**addInitializeData**(`datas`, `dataConfig?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `datas` | [`EntityDataRegistry`](/auto-docs/free-layout-editor/interfaces/EntityDataRegistry.md)<[`EntityData`](/auto-docs/free-layout-editor/classes/EntityData.md)<`any`, {}>>\[] |
| `dataConfig?` | `any` |

#### Returns

`void`

#### Inherited from

[Entity](/auto-docs/free-layout-editor/classes/Entity-1.md).[addInitializeData](/auto-docs/free-layout-editor/classes/Entity-1.md#addinitializedata)

***

### clearMemoGlobal

**clearMemoGlobal**(): `void`

#### Returns

`void`

***

### clearMemoLocal

**clearMemoLocal**(): `void`

#### Returns

`void`

***

### dispose

**dispose**(): `void`

销毁实体

#### Returns

`void`

#### Inherited from

[Entity](/auto-docs/free-layout-editor/classes/Entity-1.md).[dispose](/auto-docs/free-layout-editor/classes/Entity-1.md#dispose)

***

### fromJSON

**fromJSON**(`data?`): `void`

还原数据

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`void`

#### Inherited from

[Entity](/auto-docs/free-layout-editor/classes/Entity-1.md).[fromJSON](/auto-docs/free-layout-editor/classes/Entity-1.md#fromjson)

***

### getData

**getData**<`D`>(`Registry`): `D`

获取 data 数据

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends [`EntityData`](/auto-docs/free-layout-editor/classes/EntityData.md)<`any`, {}, `D`> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `Registry` | [`EntityDataRegistry`](/auto-docs/free-layout-editor/interfaces/EntityDataRegistry.md)<`D`> |

#### Returns

`D`

#### Inherited from

[Entity](/auto-docs/free-layout-editor/classes/Entity-1.md).[getData](/auto-docs/free-layout-editor/classes/Entity-1.md#getdata)

***

### getDefaultDataRegistries

**getDefaultDataRegistries**(): [`EntityDataRegistry`](/auto-docs/free-layout-editor/interfaces/EntityDataRegistry.md)<[`EntityData`](/auto-docs/free-layout-editor/classes/EntityData.md)<`any`, {}>>\[]

默认初始化的 Data

#### Returns

[`EntityDataRegistry`](/auto-docs/free-layout-editor/interfaces/EntityDataRegistry.md)<[`EntityData`](/auto-docs/free-layout-editor/classes/EntityData.md)<`any`, {}>>\[]

#### Inherited from

[Entity](/auto-docs/free-layout-editor/classes/Entity-1.md).[getDefaultDataRegistries](/auto-docs/free-layout-editor/classes/Entity-1.md#getdefaultdataregistries)

***

### getExtInfo

**getExtInfo**<`T`>(): `T`

获取节点扩展信息

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`string`, `any`> = `Record`<`string`, `any`> |

#### Returns

`T`

***

### getJSONData

**getJSONData**(): `any`

可以重载

#### Returns

`any`

***

### getNodeMeta

**getNodeMeta**<`M`>(): `M` & `Required`<[`FlowNodeMeta`](/auto-docs/free-layout-editor/interfaces/FlowNodeMeta.md)>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends [`FlowNodeMeta`](/auto-docs/free-layout-editor/interfaces/FlowNodeMeta.md) = [`FlowNodeMeta`](/auto-docs/free-layout-editor/interfaces/FlowNodeMeta.md) |

#### Returns

`M` & `Required`<[`FlowNodeMeta`](/auto-docs/free-layout-editor/interfaces/FlowNodeMeta.md)>

***

### getNodeRegister

**getNodeRegister**<`M`>(): `M`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends [`FlowNodeRegistry`](/auto-docs/free-layout-editor/interfaces/FlowNodeRegistry-1.md)<[`FlowNodeMeta`](/auto-docs/free-layout-editor/interfaces/FlowNodeMeta.md), `M`> = [`FlowNodeRegistry`](/auto-docs/free-layout-editor/interfaces/FlowNodeRegistry-1.md)<[`FlowNodeMeta`](/auto-docs/free-layout-editor/interfaces/FlowNodeMeta.md)> |

#### Returns

`M`

**`Deprecated`**

use getNodeRegistry instead

***

### getNodeRegistry

**getNodeRegistry**<`M`>(): `M`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends [`FlowNodeRegistry`](/auto-docs/free-layout-editor/interfaces/FlowNodeRegistry-1.md)<[`FlowNodeMeta`](/auto-docs/free-layout-editor/interfaces/FlowNodeMeta.md), `M`> = [`FlowNodeRegistry`](/auto-docs/free-layout-editor/interfaces/FlowNodeRegistry-1.md)<[`FlowNodeMeta`](/auto-docs/free-layout-editor/interfaces/FlowNodeMeta.md)> & { `meta`: [`FlowNodeMeta`](/auto-docs/free-layout-editor/interfaces/FlowNodeMeta.md)  } |

#### Returns

`M`

***

### getService

**getService**<`T`>(`identifier`): `T`

获取 IOC 服务

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | [`ServiceIdentifier`](/auto-docs/free-layout-editor/types/interfaces.ServiceIdentifier.md)<`T`> |

#### Returns

`T`

#### Inherited from

[Entity](/auto-docs/free-layout-editor/classes/Entity-1.md).[getService](/auto-docs/free-layout-editor/classes/Entity-1.md#getservice)

***

### hasData

**hasData**(`Registry`): `boolean`

是否有指定数据

#### Parameters

| Name | Type |
| :------ | :------ |
| `Registry` | [`EntityDataRegistry`](/auto-docs/free-layout-editor/interfaces/EntityDataRegistry.md)<[`EntityData`](/auto-docs/free-layout-editor/classes/EntityData.md)<`any`, {}>> |

#### Returns

`boolean`

#### Inherited from

[Entity](/auto-docs/free-layout-editor/classes/Entity-1.md).[hasData](/auto-docs/free-layout-editor/classes/Entity-1.md#hasdata)

***

### initData

**initData**(`initConf`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `initConf` | [`FlowNodeInitData`](/auto-docs/free-layout-editor/interfaces/FlowNodeInitData.md) |

#### Returns

`void`

***

### isExtend

**isExtend**(`parentType`): `boolean`

Check node extend type

#### Parameters

| Name | Type |
| :------ | :------ |
| `parentType` | [`FlowNodeType`](/auto-docs/free-layout-editor/types/FlowNodeType.md) |

#### Returns

`boolean`

***

### isTypeOrExtendType

**isTypeOrExtendType**(`parentType`): `boolean`

Check node type

#### Parameters

| Name | Type |
| :------ | :------ |
| `parentType` | [`FlowNodeType`](/auto-docs/free-layout-editor/types/FlowNodeType.md) |

#### Returns

`boolean`

***

### memoGlobal

**memoGlobal**<`T`>(`key`, `fn`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `fn` | () => `T` |

#### Returns

`T`

***

### memoLocal

**memoLocal**<`T`>(`key`, `fn`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `fn` | () => `T` |

#### Returns

`T`

***

### openInsideCollapsed

**openInsideCollapsed**(): `void`

#### Returns

`void`

***

### removeData

**removeData**<`D`>(`Registry`): `void`

删除数据，初始化状态注入的数据无法被删除

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends [`EntityData`](/auto-docs/free-layout-editor/classes/EntityData.md)<`any`, {}, `D`> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `Registry` | [`EntityDataRegistry`](/auto-docs/free-layout-editor/interfaces/EntityDataRegistry.md)<`D`> |

#### Returns

`void`

#### Inherited from

[Entity](/auto-docs/free-layout-editor/classes/Entity-1.md).[removeData](/auto-docs/free-layout-editor/classes/Entity-1.md#removedata)

***

### reset

**reset**(): `void`

重制为初始化状态

#### Returns

`void`

#### Inherited from

[Entity](/auto-docs/free-layout-editor/classes/Entity-1.md).[reset](/auto-docs/free-layout-editor/classes/Entity-1.md#reset)

***

### toJSON

**toJSON**(): [`FlowNodeJSON`](/auto-docs/free-layout-editor/interfaces/FlowNodeJSON.md)

生成 JSON

#### Returns

[`FlowNodeJSON`](/auto-docs/free-layout-editor/interfaces/FlowNodeJSON.md)

#### Overrides

[Entity](/auto-docs/free-layout-editor/classes/Entity-1.md).[toJSON](/auto-docs/free-layout-editor/classes/Entity-1.md#tojson)

***

### updateData

**updateData**<`D`>(`Registry`, `props`): `void`

更新实体的数据

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends [`EntityData`](/auto-docs/free-layout-editor/classes/EntityData.md)<`any`, {}, `D`> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `Registry` | [`EntityDataRegistry`](/auto-docs/free-layout-editor/interfaces/EntityDataRegistry.md)<`D`> |
| `props` | [`EntityDataProps`](/auto-docs/free-layout-editor/types/EntityDataProps.md)<`D`> |

#### Returns

`void`

#### Inherited from

[Entity](/auto-docs/free-layout-editor/classes/Entity-1.md).[updateData](/auto-docs/free-layout-editor/classes/Entity-1.md#updatedata)

***

### updateExtInfo

**updateExtInfo**<`T`>(`extInfo`): `void`

修改节点扩展信息

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`string`, `any`> = `Record`<`string`, `any`> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `extInfo` | `T` |

#### Returns

`void`
