# Class: FlowDragLayer

监听节点的激活状态

## Hierarchy

* [`Layer`](/auto-docs/fixed-layout-editor/classes/Layer.md)<[`FlowDragOptions`](/auto-docs/fixed-layout-editor/interfaces/FlowDragOptions.md)>

  ↳ **`FlowDragLayer`**

## Table of contents

### Constructors

* [constructor](/auto-docs/fixed-layout-editor/classes/FlowDragLayer.md#constructor)

### Properties

* [config](/auto-docs/fixed-layout-editor/classes/FlowDragLayer.md#config)
* [containerRef](/auto-docs/fixed-layout-editor/classes/FlowDragLayer.md#containerref)
* [context](/auto-docs/fixed-layout-editor/classes/FlowDragLayer.md#context)
* [document](/auto-docs/fixed-layout-editor/classes/FlowDragLayer.md#document)
* [draggingNodeMask](/auto-docs/fixed-layout-editor/classes/FlowDragLayer.md#draggingnodemask)
* [entityManager](/auto-docs/fixed-layout-editor/classes/FlowDragLayer.md#entitymanager)
* [getOtherLayer](/auto-docs/fixed-layout-editor/classes/FlowDragLayer.md#getotherlayer)
* [isFocused](/auto-docs/fixed-layout-editor/classes/FlowDragLayer.md#isfocused)
* [listenGlobalEvent](/auto-docs/fixed-layout-editor/classes/FlowDragLayer.md#listenglobalevent)
* [listenPlaygroundEvent](/auto-docs/fixed-layout-editor/classes/FlowDragLayer.md#listenplaygroundevent)
* [node](/auto-docs/fixed-layout-editor/classes/FlowDragLayer.md#node)
* [observeManager](/auto-docs/fixed-layout-editor/classes/FlowDragLayer.md#observemanager)
* [options](/auto-docs/fixed-layout-editor/classes/FlowDragLayer.md#options)
* [pipelineNode](/auto-docs/fixed-layout-editor/classes/FlowDragLayer.md#pipelinenode)
* [playgroundNode](/auto-docs/fixed-layout-editor/classes/FlowDragLayer.md#playgroundnode)
* [reloadEntities](/auto-docs/fixed-layout-editor/classes/FlowDragLayer.md#reloadentities)
* [renderWithReactMemo](/auto-docs/fixed-layout-editor/classes/FlowDragLayer.md#renderwithreactmemo)
* [rendererRegistry](/auto-docs/fixed-layout-editor/classes/FlowDragLayer.md#rendererregistry)
* [service](/auto-docs/fixed-layout-editor/classes/FlowDragLayer.md#service)
* [transforms](/auto-docs/fixed-layout-editor/classes/FlowDragLayer.md#transforms)

### Accessors

* [dragEntities](/auto-docs/fixed-layout-editor/classes/FlowDragLayer.md#dragentities)
* [dragStartEntity](/auto-docs/fixed-layout-editor/classes/FlowDragLayer.md#dragstartentity)
* [transitions](/auto-docs/fixed-layout-editor/classes/FlowDragLayer.md#transitions)

### Methods

* [autorun](/auto-docs/fixed-layout-editor/classes/FlowDragLayer.md#autorun)
* [createDOMCache](/auto-docs/fixed-layout-editor/classes/FlowDragLayer.md#createdomcache)
* [dispose](/auto-docs/fixed-layout-editor/classes/FlowDragLayer.md#dispose)
* [dragEnable](/auto-docs/fixed-layout-editor/classes/FlowDragLayer.md#dragenable)
* [getPosFromMouseEvent](/auto-docs/fixed-layout-editor/classes/FlowDragLayer.md#getposfrommouseevent)
* [handleMouseMove](/auto-docs/fixed-layout-editor/classes/FlowDragLayer.md#handlemousemove)
* [handleMouseUp](/auto-docs/fixed-layout-editor/classes/FlowDragLayer.md#handlemouseup)
* [onBlur](/auto-docs/fixed-layout-editor/classes/FlowDragLayer.md#onblur)
* [onFocus](/auto-docs/fixed-layout-editor/classes/FlowDragLayer.md#onfocus)
* [onReadonlyOrDisabledChange](/auto-docs/fixed-layout-editor/classes/FlowDragLayer.md#onreadonlyordisabledchange)
* [onReady](/auto-docs/fixed-layout-editor/classes/FlowDragLayer.md#onready)
* [onResize](/auto-docs/fixed-layout-editor/classes/FlowDragLayer.md#onresize)
* [onScroll](/auto-docs/fixed-layout-editor/classes/FlowDragLayer.md#onscroll)
* [onViewportChange](/auto-docs/fixed-layout-editor/classes/FlowDragLayer.md#onviewportchange)
* [onZoom](/auto-docs/fixed-layout-editor/classes/FlowDragLayer.md#onzoom)
* [render](/auto-docs/fixed-layout-editor/classes/FlowDragLayer.md#render)
* [setDraggingStatus](/auto-docs/fixed-layout-editor/classes/FlowDragLayer.md#setdraggingstatus)
* [startDrag](/auto-docs/fixed-layout-editor/classes/FlowDragLayer.md#startdrag)

## Constructors

### constructor

**new FlowDragLayer**()

#### Inherited from

[Layer](/auto-docs/fixed-layout-editor/classes/Layer.md).[constructor](/auto-docs/fixed-layout-editor/classes/Layer.md#constructor)

## Properties

### config

**config**: [`PlaygroundConfigEntity`](/auto-docs/fixed-layout-editor/classes/PlaygroundConfigEntity.md)

全局画布配置

#### Inherited from

[Layer](/auto-docs/fixed-layout-editor/classes/Layer.md).[config](/auto-docs/fixed-layout-editor/classes/Layer.md#config)

***

### containerRef

**containerRef**: `RefObject`<`HTMLDivElement`>

***

### context

`Readonly` **context**: `any`

#### Inherited from

[Layer](/auto-docs/fixed-layout-editor/classes/Layer.md).[context](/auto-docs/fixed-layout-editor/classes/Layer.md#context)

***

### document

`Readonly` **document**: [`FlowDocument`](/auto-docs/fixed-layout-editor/classes/FlowDocument.md)<[`FlowDocumentJSON`](/auto-docs/fixed-layout-editor/types/FlowDocumentJSON.md)>

***

### draggingNodeMask

**draggingNodeMask**: `HTMLDivElement`

***

### entityManager

`Readonly` **entityManager**: [`EntityManager`](/auto-docs/fixed-layout-editor/classes/EntityManager.md)

实体管理器

#### Inherited from

[Layer](/auto-docs/fixed-layout-editor/classes/Layer.md).[entityManager](/auto-docs/fixed-layout-editor/classes/Layer.md#entitymanager)

***

### getOtherLayer

**getOtherLayer**: \<T>(`layerRegistry`: [`LayerRegistry`](/auto-docs/fixed-layout-editor/interfaces/LayerRegistry.md)<`T`>) => `undefined` | `T`

#### Type declaration

<`T`>(`layerRegistry`): `undefined` | `T`

可以用于获取别的 layer

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Layer`](/auto-docs/fixed-layout-editor/classes/Layer.md)<`any`, `any`, `T`> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `layerRegistry` | [`LayerRegistry`](/auto-docs/fixed-layout-editor/interfaces/LayerRegistry.md)<`T`> |

##### Returns

`undefined` | `T`

#### Inherited from

[Layer](/auto-docs/fixed-layout-editor/classes/Layer.md).[getOtherLayer](/auto-docs/fixed-layout-editor/classes/Layer.md#getotherlayer)

***

### isFocused

`Readonly` **isFocused**: `boolean`

playground 是否 focused

#### Inherited from

[Layer](/auto-docs/fixed-layout-editor/classes/Layer.md).[isFocused](/auto-docs/fixed-layout-editor/classes/Layer.md#isfocused)

***

### listenGlobalEvent

**listenGlobalEvent**: (`name`: `string`, `handle`: (`event`: `any`) => `boolean` | `void`, `priority?`: `number`, `options?`: `AddEventListenerOptions`) => [`Disposable`](/auto-docs/fixed-layout-editor/interfaces/Disposable-1.md)

#### Type declaration

(`name`, `handle`, `priority?`, `options?`): [`Disposable`](/auto-docs/fixed-layout-editor/interfaces/Disposable-1.md)

监听 document 上的事件
规则：

1. 按 priority 排序，越高先执行
2. 没有提供，按 layer 的注册顺序，后注册先执行 (符合冒泡排序)
3. 执行返回 true，则阻止后续的执行

##### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `handle` | (`event`: `any`) => `boolean` | `void` |
| `priority?` | `number` |
| `options?` | `AddEventListenerOptions` |

##### Returns

[`Disposable`](/auto-docs/fixed-layout-editor/interfaces/Disposable-1.md)

#### Inherited from

[Layer](/auto-docs/fixed-layout-editor/classes/Layer.md).[listenGlobalEvent](/auto-docs/fixed-layout-editor/classes/Layer.md#listenglobalevent)

***

### listenPlaygroundEvent

**listenPlaygroundEvent**: (`name`: `string`, `handle`: (`event`: `any`) => `boolean` | `void`, `priority?`: `number`, `options?`: `AddEventListenerOptions`) => [`Disposable`](/auto-docs/fixed-layout-editor/interfaces/Disposable-1.md)

#### Type declaration

(`name`, `handle`, `priority?`, `options?`): [`Disposable`](/auto-docs/fixed-layout-editor/interfaces/Disposable-1.md)

监听 playground 上的事件
规则：

1. 按 priority 排序，越高先执行
2. 没有提供，按 layer 的注册顺序，后注册先执行 (符合冒泡排序)
3. 执行返回 true，则阻止后续的执行

##### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `handle` | (`event`: `any`) => `boolean` | `void` |
| `priority?` | `number` |
| `options?` | `AddEventListenerOptions` |

##### Returns

[`Disposable`](/auto-docs/fixed-layout-editor/interfaces/Disposable-1.md)

#### Inherited from

[Layer](/auto-docs/fixed-layout-editor/classes/Layer.md).[listenPlaygroundEvent](/auto-docs/fixed-layout-editor/classes/Layer.md#listenplaygroundevent)

***

### node

**node**: `HTMLElement`

layer 可能存在 dom 也可能没有，如果有，则会加入到 pipeline 的 dom 节点上

#### Inherited from

[Layer](/auto-docs/fixed-layout-editor/classes/Layer.md).[node](/auto-docs/fixed-layout-editor/classes/Layer.md#node)

***

### observeManager

**observeManager**: [`PipelineEntities`](/auto-docs/fixed-layout-editor/interfaces/PipelineEntities.md)

当前 layer 的所有监听的实体数据

#### Inherited from

[Layer](/auto-docs/fixed-layout-editor/classes/Layer.md).[observeManager](/auto-docs/fixed-layout-editor/classes/Layer.md#observemanager)

***

### options

**options**: [`FlowDragOptions`](/auto-docs/fixed-layout-editor/interfaces/FlowDragOptions.md)

layer 的配置, 由 registerLayer(Layer, LayerOptions) 传入

#### Inherited from

[Layer](/auto-docs/fixed-layout-editor/classes/Layer.md).[options](/auto-docs/fixed-layout-editor/classes/Layer.md#options)

***

### pipelineNode

**pipelineNode**: `HTMLElement`

父节点

#### Inherited from

[Layer](/auto-docs/fixed-layout-editor/classes/Layer.md).[pipelineNode](/auto-docs/fixed-layout-editor/classes/Layer.md#pipelinenode)

***

### playgroundNode

**playgroundNode**: `HTMLElement`

画布根节点

#### Inherited from

[Layer](/auto-docs/fixed-layout-editor/classes/Layer.md).[playgroundNode](/auto-docs/fixed-layout-editor/classes/Layer.md#playgroundnode)

***

### reloadEntities

**reloadEntities**: () => `boolean`

#### Type declaration

(): `boolean`

加载 layer 注册的实体数据，内部使用，不需要手动触发

##### Returns

`boolean`

数据是否变化

#### Inherited from

[Layer](/auto-docs/fixed-layout-editor/classes/Layer.md).[reloadEntities](/auto-docs/fixed-layout-editor/classes/Layer.md#reloadentities)

***

### renderWithReactMemo

**renderWithReactMemo**: `boolean`

默认在渲染时候都会启用 react memo 进行隔离，这种情况就需要数据驱动更新

#### Inherited from

[Layer](/auto-docs/fixed-layout-editor/classes/Layer.md).[renderWithReactMemo](/auto-docs/fixed-layout-editor/classes/Layer.md#renderwithreactmemo)

***

### rendererRegistry

`Readonly` **rendererRegistry**: [`FlowRendererRegistry`](/auto-docs/fixed-layout-editor/classes/FlowRendererRegistry.md)

***

### service

`Readonly` **service**: [`FlowDragService`](/auto-docs/fixed-layout-editor/classes/FlowDragService.md)

***

### transforms

**transforms**: [`FlowNodeTransformData`](/auto-docs/fixed-layout-editor/classes/FlowNodeTransformData.md)\[]

## Accessors

### dragEntities

`get` **dragEntities**(): [`FlowNodeEntity`](/auto-docs/fixed-layout-editor/classes/FlowNodeEntity-1.md)\[]

#### Returns

[`FlowNodeEntity`](/auto-docs/fixed-layout-editor/classes/FlowNodeEntity-1.md)\[]

`set` **dragEntities**(`entities`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `entities` | [`FlowNodeEntity`](/auto-docs/fixed-layout-editor/classes/FlowNodeEntity-1.md)\[] |

#### Returns

`void`

***

### dragStartEntity

`get` **dragStartEntity**(): `undefined` | [`FlowNodeEntity`](/auto-docs/fixed-layout-editor/classes/FlowNodeEntity-1.md)

#### Returns

`undefined` | [`FlowNodeEntity`](/auto-docs/fixed-layout-editor/classes/FlowNodeEntity-1.md)

`set` **dragStartEntity**(`entity`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `undefined` | [`FlowNodeEntity`](/auto-docs/fixed-layout-editor/classes/FlowNodeEntity-1.md) |

#### Returns

`void`

***

### transitions

`get` **transitions**(): [`FlowNodeTransitionData`](/auto-docs/fixed-layout-editor/classes/FlowNodeTransitionData.md)\[]

#### Returns

[`FlowNodeTransitionData`](/auto-docs/fixed-layout-editor/classes/FlowNodeTransitionData.md)\[]

## Methods

### autorun

`Optional` **autorun**(): `void`

自动触发更新，在不需要 react 的时候用这个方法

#### Returns

`void`

#### Inherited from

[Layer](/auto-docs/fixed-layout-editor/classes/Layer.md).[autorun](/auto-docs/fixed-layout-editor/classes/Layer.md#autorun)

***

### createDOMCache

**createDOMCache**<`T`>(`className`, `children?`): [`CacheManager`](/auto-docs/fixed-layout-editor/interfaces/CacheManager.md)<`T`, [`CacheOriginItem`](/auto-docs/fixed-layout-editor/interfaces/CacheOriginItem.md)>

创建 dom 缓冲池

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DOMCache`](/auto-docs/fixed-layout-editor/interfaces/DOMCache.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `className` | `string` | () => `HTMLElement` |
| `children?` | `string` |

#### Returns

[`CacheManager`](/auto-docs/fixed-layout-editor/interfaces/CacheManager.md)<`T`, [`CacheOriginItem`](/auto-docs/fixed-layout-editor/interfaces/CacheOriginItem.md)>

#### Inherited from

[Layer](/auto-docs/fixed-layout-editor/classes/Layer.md).[createDOMCache](/auto-docs/fixed-layout-editor/classes/Layer.md#createdomcache)

***

### dispose

**dispose**(): `void`

销毁

#### Returns

`void`

#### Inherited from

[Layer](/auto-docs/fixed-layout-editor/classes/Layer.md).[dispose](/auto-docs/fixed-layout-editor/classes/Layer.md#dispose)

***

### dragEnable

**dragEnable**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `MouseEvent` |

#### Returns

`boolean`

***

### getPosFromMouseEvent

**getPosFromMouseEvent**(`event`, `addScale?`): [`PositionSchema`](/auto-docs/fixed-layout-editor/interfaces/PositionSchema.md)

获取鼠标在 Playground 的位置

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Object` |
| `event.clientX` | `number` |
| `event.clientY` | `number` |
| `addScale?` | `boolean` |

#### Returns

[`PositionSchema`](/auto-docs/fixed-layout-editor/interfaces/PositionSchema.md)

#### Inherited from

[Layer](/auto-docs/fixed-layout-editor/classes/Layer.md).[getPosFromMouseEvent](/auto-docs/fixed-layout-editor/classes/Layer.md#getposfrommouseevent)

***

### handleMouseMove

**handleMouseMove**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent` |

#### Returns

`void`

***

### handleMouseUp

**handleMouseUp**(): `void`

#### Returns

`void`

***

### onBlur

`Optional` **onBlur**(): `void`

playground blur 时候触发

#### Returns

`void`

#### Inherited from

[Layer](/auto-docs/fixed-layout-editor/classes/Layer.md).[onBlur](/auto-docs/fixed-layout-editor/classes/Layer.md#onblur)

***

### onFocus

`Optional` **onFocus**(): `void`

playground focus 时候触发

#### Returns

`void`

#### Inherited from

[Layer](/auto-docs/fixed-layout-editor/classes/Layer.md).[onFocus](/auto-docs/fixed-layout-editor/classes/Layer.md#onfocus)

***

### onReadonlyOrDisabledChange

`Optional` **onReadonlyOrDisabledChange**(`state`): `void`

readonly 或 disable 状态变化

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `Object` |
| `state.disabled` | `boolean` |
| `state.readonly` | `boolean` |

#### Returns

`void`

#### Inherited from

[Layer](/auto-docs/fixed-layout-editor/classes/Layer.md).[onReadonlyOrDisabledChange](/auto-docs/fixed-layout-editor/classes/Layer.md#onreadonlyordisabledchange)

***

### onReady

**onReady**(): `void`

初始化时候触发

#### Returns

`void`

#### Overrides

[Layer](/auto-docs/fixed-layout-editor/classes/Layer.md).[onReady](/auto-docs/fixed-layout-editor/classes/Layer.md#onready)

***

### onResize

`Optional` **onResize**(`size`): `void`

playground 大小变化时候会触发

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | [`PipelineDimension`](/auto-docs/fixed-layout-editor/interfaces/PipelineDimension.md) |

#### Returns

`void`

#### Inherited from

[Layer](/auto-docs/fixed-layout-editor/classes/Layer.md).[onResize](/auto-docs/fixed-layout-editor/classes/Layer.md#onresize)

***

### onScroll

`Optional` **onScroll**(`scroll`): `void`

监听滚动

#### Parameters

| Name | Type |
| :------ | :------ |
| `scroll` | `Object` |
| `scroll.scrollX` | `number` |
| `scroll.scrollY` | `number` |

#### Returns

`void`

#### Inherited from

[Layer](/auto-docs/fixed-layout-editor/classes/Layer.md).[onScroll](/auto-docs/fixed-layout-editor/classes/Layer.md#onscroll)

***

### onViewportChange

`Optional` **onViewportChange**(): `void`

viewport 更新触发

#### Returns

`void`

#### Inherited from

[Layer](/auto-docs/fixed-layout-editor/classes/Layer.md).[onViewportChange](/auto-docs/fixed-layout-editor/classes/Layer.md#onviewportchange)

***

### onZoom

`Optional` **onZoom**(`zoom`): `void`

监听缩放

#### Parameters

| Name | Type |
| :------ | :------ |
| `zoom` | `number` |

#### Returns

`void`

#### Inherited from

[Layer](/auto-docs/fixed-layout-editor/classes/Layer.md).[onZoom](/auto-docs/fixed-layout-editor/classes/Layer.md#onzoom)

***

### render

**render**(): `Element`

绘制 react

#### Returns

`Element`

#### Overrides

[Layer](/auto-docs/fixed-layout-editor/classes/Layer.md).[render](/auto-docs/fixed-layout-editor/classes/Layer.md#render)

***

### setDraggingStatus

**setDraggingStatus**(`status`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | `boolean` |

#### Returns

`void`

***

### startDrag

**startDrag**(`e`, `«destructured»`, `options?`): `Promise`<`void`>

开始拖拽事件

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `Object` |
| `e.clientX` | `number` |
| `e.clientY` | `number` |
| `«destructured»` | `Object` |
| › `dragEntities?` | [`FlowNodeEntity`](/auto-docs/fixed-layout-editor/classes/FlowNodeEntity-1.md)\[] |
| › `dragStartEntity` | [`FlowNodeEntity`](/auto-docs/fixed-layout-editor/classes/FlowNodeEntity-1.md) |
| `options?` | `Object` |
| `options.dragOffsetX?` | `number` |
| `options.dragOffsetY?` | `number` |

#### Returns

`Promise`<`void`>
