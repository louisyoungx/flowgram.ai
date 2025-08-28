# Class: FlowRendererStateEntity

渲染相关的全局状态管理

## Hierarchy

* `ConfigEntity`<`FlowRendererState`, `FlowRendererStateEntityConfig`>

  ↳ **`FlowRendererStateEntity`**

## Table of contents

### Constructors

* [constructor](/en/auto-docs/document/classes/FlowRendererStateEntity.md#constructor)

### Properties

* [\_\_opts\_type\_\_](/en/auto-docs/document/classes/FlowRendererStateEntity.md#__opts_type__)
* [entityManager](/en/auto-docs/document/classes/FlowRendererStateEntity.md#entitymanager)
* [onDataChange](/en/auto-docs/document/classes/FlowRendererStateEntity.md#ondatachange)
* [onEntityChange](/en/auto-docs/document/classes/FlowRendererStateEntity.md#onentitychange)
* [preDispose](/en/auto-docs/document/classes/FlowRendererStateEntity.md#predispose)
* [toDispose](/en/auto-docs/document/classes/FlowRendererStateEntity.md#todispose)
* [type](/en/auto-docs/document/classes/FlowRendererStateEntity.md#type)

### Accessors

* [config](/en/auto-docs/document/classes/FlowRendererStateEntity.md#config)
* [context](/en/auto-docs/document/classes/FlowRendererStateEntity.md#context)
* [disposed](/en/auto-docs/document/classes/FlowRendererStateEntity.md#disposed)
* [id](/en/auto-docs/document/classes/FlowRendererStateEntity.md#id)
* [onDispose](/en/auto-docs/document/classes/FlowRendererStateEntity.md#ondispose)
* [savedInManager](/en/auto-docs/document/classes/FlowRendererStateEntity.md#savedinmanager)
* [type](/en/auto-docs/document/classes/FlowRendererStateEntity.md#type-1)
* [version](/en/auto-docs/document/classes/FlowRendererStateEntity.md#version)

### Methods

* [addData](/en/auto-docs/document/classes/FlowRendererStateEntity.md#adddata)
* [addInitializeData](/en/auto-docs/document/classes/FlowRendererStateEntity.md#addinitializedata)
* [checkChanged](/en/auto-docs/document/classes/FlowRendererStateEntity.md#checkchanged)
* [dispose](/en/auto-docs/document/classes/FlowRendererStateEntity.md#dispose)
* [fromJSON](/en/auto-docs/document/classes/FlowRendererStateEntity.md#fromjson)
* [getData](/en/auto-docs/document/classes/FlowRendererStateEntity.md#getdata)
* [getDefaultConfig](/en/auto-docs/document/classes/FlowRendererStateEntity.md#getdefaultconfig)
* [getDefaultDataRegistries](/en/auto-docs/document/classes/FlowRendererStateEntity.md#getdefaultdataregistries)
* [getDragEntities](/en/auto-docs/document/classes/FlowRendererStateEntity.md#getdragentities)
* [getDragLabelSide](/en/auto-docs/document/classes/FlowRendererStateEntity.md#getdraglabelside)
* [getDragStartEntity](/en/auto-docs/document/classes/FlowRendererStateEntity.md#getdragstartentity)
* [getNodeDroppingId](/en/auto-docs/document/classes/FlowRendererStateEntity.md#getnodedroppingid)
* [getNodeHovered](/en/auto-docs/document/classes/FlowRendererStateEntity.md#getnodehovered)
* [getService](/en/auto-docs/document/classes/FlowRendererStateEntity.md#getservice)
* [hasData](/en/auto-docs/document/classes/FlowRendererStateEntity.md#hasdata)
* [onConfigChanged](/en/auto-docs/document/classes/FlowRendererStateEntity.md#onconfigchanged)
* [onNodeHoveredChange](/en/auto-docs/document/classes/FlowRendererStateEntity.md#onnodehoveredchange)
* [removeData](/en/auto-docs/document/classes/FlowRendererStateEntity.md#removedata)
* [reset](/en/auto-docs/document/classes/FlowRendererStateEntity.md#reset)
* [setDragEntities](/en/auto-docs/document/classes/FlowRendererStateEntity.md#setdragentities)
* [setDragLabelSide](/en/auto-docs/document/classes/FlowRendererStateEntity.md#setdraglabelside)
* [setDragStartEntity](/en/auto-docs/document/classes/FlowRendererStateEntity.md#setdragstartentity)
* [setNodeDroppingId](/en/auto-docs/document/classes/FlowRendererStateEntity.md#setnodedroppingid)
* [setNodeHovered](/en/auto-docs/document/classes/FlowRendererStateEntity.md#setnodehovered)
* [toJSON](/en/auto-docs/document/classes/FlowRendererStateEntity.md#tojson)
* [updateConfig](/en/auto-docs/document/classes/FlowRendererStateEntity.md#updateconfig)
* [updateData](/en/auto-docs/document/classes/FlowRendererStateEntity.md#updatedata)

## Constructors

### constructor

**new FlowRendererStateEntity**(`conf`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `conf` | `FlowRendererStateEntityConfig` |

#### Overrides

ConfigEntity\&lt;
FlowRendererState,
FlowRendererStateEntityConfig
\&gt;.constructor

## Properties

### \_\_opts\_type\_\_

**\_\_opts\_type\_\_**: `FlowRendererStateEntityConfig`

#### Inherited from

ConfigEntity.\_\_opts\_type\_\_

***

### entityManager

`Readonly` **entityManager**: `EntityManager`

全局的entity管理器

#### Inherited from

ConfigEntity.entityManager

***

### onDataChange

`Readonly` **onDataChange**: `Event`<`EntityDataChangedEvent`<`Entity`<`EntityOpts`>>>

数据更改事件

#### Inherited from

ConfigEntity.onDataChange

***

### onEntityChange

`Readonly` **onEntityChange**: `Event`<`Entity`<`EntityOpts`>>

修改会触发

#### Inherited from

ConfigEntity.onEntityChange

***

### preDispose

`Readonly` **preDispose**: `DisposableCollection`

销毁前事件管理

#### Inherited from

ConfigEntity.preDispose

***

### toDispose

`Readonly` **toDispose**: `DisposableCollection`

销毁事件管理

#### Inherited from

ConfigEntity.toDispose

***

### type

`Static` **type**: `string` = `'FlowRendererStateEntity'`

#### Overrides

ConfigEntity.type

## Accessors

### config

`get` **config**(): `P`

#### Returns

`P`

#### Inherited from

ConfigEntity.config

***

### context

`get` **context**(): `any`

#### Returns

`any`

#### Inherited from

ConfigEntity.context

***

### disposed

`get` **disposed**(): `boolean`

#### Returns

`boolean`

#### Inherited from

ConfigEntity.disposed

***

### id

`get` **id**(): `string`

实体 id

#### Returns

`string`

#### Inherited from

ConfigEntity.id

***

### onDispose

`get` **onDispose**(): `Event`<`void`>

销毁事件

#### Returns

`Event`<`void`>

#### Inherited from

ConfigEntity.onDispose

***

### savedInManager

`get` **savedInManager**(): `boolean`

是否存到全局 manager，默认 true

#### Returns

`boolean`

#### Inherited from

ConfigEntity.savedInManager

***

### type

`get` **type**(): `string`

实体类型

#### Returns

`string`

#### Inherited from

ConfigEntity.type

***

### version

`get` **version**(): `number`

实体的版本

#### Returns

`number`

#### Inherited from

ConfigEntity.version

## Methods

### addData

**addData**<`D`>(`Registry`, `defaultProps?`): `D`

添加数据

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends `EntityData`<`any`, {}, `D`> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `Registry` | `EntityDataRegistry`<`EntityData`<`any`, {}>> |
| `defaultProps?` | `EntityDataProps`<`D`> |

#### Returns

`D`

#### Inherited from

ConfigEntity.addData

***

### addInitializeData

**addInitializeData**(`datas`, `dataConfig?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `datas` | `EntityDataRegistry`<`EntityData`<`any`, {}>>\[] |
| `dataConfig?` | `any` |

#### Returns

`void`

#### Inherited from

ConfigEntity.addInitializeData

***

### checkChanged

**checkChanged**(`oldData`, `newData`): `boolean`

判断 config 数据是否变化

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldData` | `FlowRendererState` |
| `newData` | `Partial`<`FlowRendererState`> |

#### Returns

`boolean`

#### Inherited from

ConfigEntity.checkChanged

***

### dispose

**dispose**(): `void`

销毁实体

#### Returns

`void`

#### Inherited from

ConfigEntity.dispose

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

ConfigEntity.fromJSON

***

### getData

**getData**<`D`>(`Registry`): `D`

获取 data 数据

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends `EntityData`<`any`, {}, `D`> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `Registry` | `EntityDataRegistry`<`D`> |

#### Returns

`D`

#### Inherited from

ConfigEntity.getData

***

### getDefaultConfig

**getDefaultConfig**(): `Object`

#### Returns

`Object`

#### Overrides

ConfigEntity.getDefaultConfig

***

### getDefaultDataRegistries

**getDefaultDataRegistries**(): `EntityDataRegistry`<`EntityData`<`any`, {}>>\[]

默认初始化的 Data

#### Returns

`EntityDataRegistry`<`EntityData`<`any`, {}>>\[]

#### Inherited from

ConfigEntity.getDefaultDataRegistries

***

### getDragEntities

**getDragEntities**(): [`FlowNodeEntity`](/en/auto-docs/document/classes/FlowNodeEntity-1.md)\[]

#### Returns

[`FlowNodeEntity`](/en/auto-docs/document/classes/FlowNodeEntity-1.md)\[]

***

### getDragLabelSide

**getDragLabelSide**(): `undefined` | [`LABEL_SIDE_TYPE`](/en/auto-docs/document/enums/LABEL_SIDE_TYPE.md)

#### Returns

`undefined` | [`LABEL_SIDE_TYPE`](/en/auto-docs/document/enums/LABEL_SIDE_TYPE.md)

***

### getDragStartEntity

**getDragStartEntity**(): `undefined` | [`FlowNodeEntity`](/en/auto-docs/document/classes/FlowNodeEntity-1.md)

#### Returns

`undefined` | [`FlowNodeEntity`](/en/auto-docs/document/classes/FlowNodeEntity-1.md)

***

### getNodeDroppingId

**getNodeDroppingId**(): `undefined` | `string`

#### Returns

`undefined` | `string`

***

### getNodeHovered

**getNodeHovered**(): `undefined` | [`FlowNodeEntity`](/en/auto-docs/document/classes/FlowNodeEntity-1.md)

#### Returns

`undefined` | [`FlowNodeEntity`](/en/auto-docs/document/classes/FlowNodeEntity-1.md)

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
| `identifier` | `ServiceIdentifier`<`T`> |

#### Returns

`T`

#### Inherited from

ConfigEntity.getService

***

### hasData

**hasData**(`Registry`): `boolean`

是否有指定数据

#### Parameters

| Name | Type |
| :------ | :------ |
| `Registry` | `EntityDataRegistry`<`EntityData`<`any`, {}>> |

#### Returns

`boolean`

#### Inherited from

ConfigEntity.hasData

***

### onConfigChanged

**onConfigChanged**(`fn`): `Disposable`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`data`: `FlowRendererState`) => `void` |

#### Returns

`Disposable`

#### Inherited from

ConfigEntity.onConfigChanged

***

### onNodeHoveredChange

**onNodeHoveredChange**(`fn`, `debounceTime?`): `Disposable`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `fn` | (`hoveredNode`: `undefined` | [`FlowNodeEntity`](/en/auto-docs/document/classes/FlowNodeEntity-1.md)) => `void` | `undefined` |
| `debounceTime` | `number` | `100` |

#### Returns

`Disposable`

***

### removeData

**removeData**<`D`>(`Registry`): `void`

删除数据，初始化状态注入的数据无法被删除

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends `EntityData`<`any`, {}, `D`> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `Registry` | `EntityDataRegistry`<`D`> |

#### Returns

`void`

#### Inherited from

ConfigEntity.removeData

***

### reset

**reset**(): `void`

重制为初始化状态

#### Returns

`void`

#### Inherited from

ConfigEntity.reset

***

### setDragEntities

**setDragEntities**(`nodes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodes` | [`FlowNodeEntity`](/en/auto-docs/document/classes/FlowNodeEntity-1.md)\[] |

#### Returns

`void`

***

### setDragLabelSide

**setDragLabelSide**(`dragLabelSide?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dragLabelSide?` | [`LABEL_SIDE_TYPE`](/en/auto-docs/document/enums/LABEL_SIDE_TYPE.md) |

#### Returns

`void`

***

### setDragStartEntity

**setDragStartEntity**(`node?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node?` | [`FlowNodeEntity`](/en/auto-docs/document/classes/FlowNodeEntity-1.md) |

#### Returns

`void`

***

### setNodeDroppingId

**setNodeDroppingId**(`nodeDroppingId?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeDroppingId?` | `string` |

#### Returns

`void`

***

### setNodeHovered

**setNodeHovered**(`node`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `undefined` | [`FlowNodeEntity`](/en/auto-docs/document/classes/FlowNodeEntity-1.md) |

#### Returns

`void`

***

### toJSON

**toJSON**(): `any`

存储数据，用于持久化存储

#### Returns

`any`

#### Inherited from

ConfigEntity.toJSON

***

### updateConfig

**updateConfig**(`props`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Partial`<`FlowRendererState`> |

#### Returns

`void`

#### Inherited from

ConfigEntity.updateConfig

***

### updateData

**updateData**<`D`>(`Registry`, `props`): `void`

更新实体的数据

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends `EntityData`<`any`, {}, `D`> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `Registry` | `EntityDataRegistry`<`D`> |
| `props` | `EntityDataProps`<`D`> |

#### Returns

`void`

#### Inherited from

ConfigEntity.updateData
