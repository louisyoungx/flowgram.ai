# Class: Playground\<CONTEXT>

Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
SPDX-License-Identifier: MIT

## Type parameters

| Name | Type |
| :------ | :------ |
| `CONTEXT` | [`PlaygroundContext`](/auto-docs/free-layout-editor/variables/PlaygroundContext-1.md) |

## Implements

* [`Disposable`](/auto-docs/free-layout-editor/interfaces/Disposable-1.md)

## Table of contents

### Constructors

* [constructor](/auto-docs/free-layout-editor/classes/Playground.md#constructor)

### Properties

* [commandService](/auto-docs/free-layout-editor/classes/Playground.md#commandservice)
* [contextProvider](/auto-docs/free-layout-editor/classes/Playground.md#contextprovider)
* [entityManager](/auto-docs/free-layout-editor/classes/Playground.md#entitymanager)
* [node](/auto-docs/free-layout-editor/classes/Playground.md#node)
* [onBlur](/auto-docs/free-layout-editor/classes/Playground.md#onblur)
* [onFocus](/auto-docs/free-layout-editor/classes/Playground.md#onfocus)
* [onScroll](/auto-docs/free-layout-editor/classes/Playground.md#onscroll)
* [onZoom](/auto-docs/free-layout-editor/classes/Playground.md#onzoom)
* [pipelineRegistry](/auto-docs/free-layout-editor/classes/Playground.md#pipelineregistry)
* [pipelineRenderer](/auto-docs/free-layout-editor/classes/Playground.md#pipelinerenderer)
* [registry](/auto-docs/free-layout-editor/classes/Playground.md#registry)
* [selectionService](/auto-docs/free-layout-editor/classes/Playground.md#selectionservice)
* [toDispose](/auto-docs/free-layout-editor/classes/Playground.md#todispose)
* [onInstanceCreate](/auto-docs/free-layout-editor/classes/Playground.md#oninstancecreate)
* [onInstanceDispose](/auto-docs/free-layout-editor/classes/Playground.md#oninstancedispose)

### Accessors

* [config](/auto-docs/free-layout-editor/classes/Playground.md#config)
* [context](/auto-docs/free-layout-editor/classes/Playground.md#context)
* [disposed](/auto-docs/free-layout-editor/classes/Playground.md#disposed)
* [editorState](/auto-docs/free-layout-editor/classes/Playground.md#editorstate)
* [focused](/auto-docs/free-layout-editor/classes/Playground.md#focused)
* [onAllLayersRendered](/auto-docs/free-layout-editor/classes/Playground.md#onalllayersrendered)
* [pipelineNode](/auto-docs/free-layout-editor/classes/Playground.md#pipelinenode)
* [zoomEnable](/auto-docs/free-layout-editor/classes/Playground.md#zoomenable)

### Methods

* [dispose](/auto-docs/free-layout-editor/classes/Playground.md#dispose)
* [flush](/auto-docs/free-layout-editor/classes/Playground.md#flush)
* [getConfigEntity](/auto-docs/free-layout-editor/classes/Playground.md#getconfigentity)
* [getLayer](/auto-docs/free-layout-editor/classes/Playground.md#getlayer)
* [init](/auto-docs/free-layout-editor/classes/Playground.md#init)
* [ready](/auto-docs/free-layout-editor/classes/Playground.md#ready)
* [registerLayer](/auto-docs/free-layout-editor/classes/Playground.md#registerlayer)
* [registerLayers](/auto-docs/free-layout-editor/classes/Playground.md#registerlayers)
* [resize](/auto-docs/free-layout-editor/classes/Playground.md#resize)
* [scrollToView](/auto-docs/free-layout-editor/classes/Playground.md#scrolltoview)
* [setParent](/auto-docs/free-layout-editor/classes/Playground.md#setparent)
* [toReactComponent](/auto-docs/free-layout-editor/classes/Playground.md#toreactcomponent)
* [getAllInstances](/auto-docs/free-layout-editor/classes/Playground.md#getallinstances)
* [getLatest](/auto-docs/free-layout-editor/classes/Playground.md#getlatest)

## Constructors

### constructor

**new Playground**<`CONTEXT`>(`entityManager`, `registry`, `contextProvider`, `pipelineRenderer`, `pipelineRegistry`, `playgroundConfig`, `contributionProvider`, `commandService`, `selectionService`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CONTEXT` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entityManager` | [`EntityManager`](/auto-docs/free-layout-editor/classes/EntityManager.md) | - |
| `registry` | [`PlaygroundRegistry`](/auto-docs/free-layout-editor/classes/PlaygroundRegistry.md) | - |
| `contextProvider` | [`PlaygroundContextProvider`](/auto-docs/free-layout-editor/variables/PlaygroundContextProvider-1.md) | - |
| `pipelineRenderer` | [`PipelineRenderer`](/auto-docs/free-layout-editor/classes/PipelineRenderer.md) | - |
| `pipelineRegistry` | [`PipelineRegistry`](/auto-docs/free-layout-editor/classes/PipelineRegistry.md) | - |
| `playgroundConfig` | [`PlaygroundConfig`](/auto-docs/free-layout-editor/variables/PlaygroundConfig-1.md) | - |
| `contributionProvider` | [`ContributionProvider`](/auto-docs/free-layout-editor/variables/ContributionProvider-1.md)<[`PlaygroundContribution`](/auto-docs/free-layout-editor/variables/PlaygroundContribution-1.md)> | - |
| `commandService` | [`CommandService`](/auto-docs/free-layout-editor/variables/CommandService-1.md) | 用于管理画布命令 |
| `selectionService` | [`SelectionService`](/auto-docs/free-layout-editor/classes/SelectionService.md) | 用于管理画布选择 |

## Properties

### commandService

`Readonly` **commandService**: [`CommandService`](/auto-docs/free-layout-editor/variables/CommandService-1.md)

用于管理画布命令

***

### contextProvider

`Readonly` **contextProvider**: [`PlaygroundContextProvider`](/auto-docs/free-layout-editor/variables/PlaygroundContextProvider-1.md)

***

### entityManager

`Readonly` **entityManager**: [`EntityManager`](/auto-docs/free-layout-editor/classes/EntityManager.md)

***

### node

`Readonly` **node**: `HTMLElement`

***

### onBlur

`Readonly` **onBlur**: [`Event`](/auto-docs/free-layout-editor/interfaces/Event-1.md)<`void`>

***

### onFocus

`Readonly` **onFocus**: [`Event`](/auto-docs/free-layout-editor/interfaces/Event-1.md)<`void`>

***

### onScroll

`Readonly` **onScroll**: [`Event`](/auto-docs/free-layout-editor/interfaces/Event-1.md)<{ `scrollX`: `number` ; `scrollY`: `number`  }>

***

### onZoom

`Readonly` **onZoom**: [`Event`](/auto-docs/free-layout-editor/interfaces/Event-1.md)<`number`>

***

### pipelineRegistry

`Readonly` **pipelineRegistry**: [`PipelineRegistry`](/auto-docs/free-layout-editor/classes/PipelineRegistry.md)

***

### pipelineRenderer

`Readonly` **pipelineRenderer**: [`PipelineRenderer`](/auto-docs/free-layout-editor/classes/PipelineRenderer.md)

***

### registry

`Readonly` **registry**: [`PlaygroundRegistry`](/auto-docs/free-layout-editor/classes/PlaygroundRegistry.md)

***

### selectionService

`Readonly` **selectionService**: [`SelectionService`](/auto-docs/free-layout-editor/classes/SelectionService.md)

用于管理画布选择

***

### toDispose

`Readonly` **toDispose**: [`DisposableCollection`](/auto-docs/free-layout-editor/classes/DisposableCollection.md)

***

### onInstanceCreate

`Static` **onInstanceCreate**: [`Event`](/auto-docs/free-layout-editor/interfaces/Event-1.md)<[`Playground`](/auto-docs/free-layout-editor/classes/Playground.md)<`any`>>

有实例创建

***

### onInstanceDispose

`Static` **onInstanceDispose**: [`Event`](/auto-docs/free-layout-editor/interfaces/Event-1.md)<[`Playground`](/auto-docs/free-layout-editor/classes/Playground.md)<`any`>>

有实例销毁

## Accessors

### config

`get` **config**(): [`PlaygroundConfigEntity`](/auto-docs/free-layout-editor/classes/PlaygroundConfigEntity.md)

画布配置数据

#### Returns

[`PlaygroundConfigEntity`](/auto-docs/free-layout-editor/classes/PlaygroundConfigEntity.md)

***

### context

`get` **context**(): `CONTEXT`

#### Returns

`CONTEXT`

***

### disposed

`get` **disposed**(): `boolean`

#### Returns

`boolean`

***

### editorState

`get` **editorState**(): [`EditorStateConfigEntity`](/auto-docs/free-layout-editor/classes/EditorStateConfigEntity.md)

画布编辑状态管理

#### Returns

[`EditorStateConfigEntity`](/auto-docs/free-layout-editor/classes/EditorStateConfigEntity.md)

***

### focused

`get` **focused**(): `boolean`

#### Returns

`boolean`

***

### onAllLayersRendered

`get` **onAllLayersRendered**(): [`Event`](/auto-docs/free-layout-editor/interfaces/Event-1.md)<`void`>

#### Returns

[`Event`](/auto-docs/free-layout-editor/interfaces/Event-1.md)<`void`>

***

### pipelineNode

`get` **pipelineNode**(): `HTMLDivElement`

#### Returns

`HTMLDivElement`

***

### zoomEnable

`get` **zoomEnable**(): `boolean`

对应的右键菜单路径

#### Returns

`boolean`

`set` **zoomEnable**(`zoomEnable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `zoomEnable` | `boolean` |

#### Returns

`void`

## Methods

### dispose

**dispose**(): `void`

#### Returns

`void`

#### Implementation of

[Disposable](/auto-docs/free-layout-editor/interfaces/Disposable-1.md).[dispose](/auto-docs/free-layout-editor/interfaces/Disposable-1.md#dispose)

***

### flush

**flush**(): `void`

刷新所有 layer

#### Returns

`void`

***

### getConfigEntity

**getConfigEntity**<`T`>(`r`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ConfigEntity`](/auto-docs/free-layout-editor/classes/ConfigEntity.md)<[`ConfigEntityProps`](/auto-docs/free-layout-editor/interfaces/ConfigEntityProps.md), [`EntityOpts`](/auto-docs/free-layout-editor/interfaces/EntityOpts.md), `T`> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | [`EntityRegistry`](/auto-docs/free-layout-editor/interfaces/EntityRegistry.md)<`T`> |

#### Returns

`T`

***

### getLayer

**getLayer**<`T`>(`layerRegistry`): `undefined` | `T`

获取 layer

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Layer`](/auto-docs/free-layout-editor/classes/Layer.md)<`any`, `any`, `T`> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `layerRegistry` | [`LayerRegistry`](/auto-docs/free-layout-editor/interfaces/LayerRegistry.md)<`T`> |

#### Returns

`undefined` | `T`

***

### init

**init**(): `void`

#### Returns

`void`

***

### ready

**ready**(): `void`

#### Returns

`void`

***

### registerLayer

**registerLayer**<`P`>(`layerRegistry`, `layerOptions?`): `void`

注册 layer

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`Layer`](/auto-docs/free-layout-editor/classes/Layer.md)<`any`, `any`, `P`> = [`Layer`](/auto-docs/free-layout-editor/classes/Layer.md)<`any`, `any`> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `layerRegistry` | [`LayerRegistry`](/auto-docs/free-layout-editor/interfaces/LayerRegistry.md)<`P`> |
| `layerOptions?` | `P`\[`"options"`] |

#### Returns

`void`

***

### registerLayers

**registerLayers**(`...layerRegistries`): `void`

注册 多个 layer

#### Parameters

| Name | Type |
| :------ | :------ |
| `...layerRegistries` | [`LayerRegistry`](/auto-docs/free-layout-editor/interfaces/LayerRegistry.md)<[`Layer`](/auto-docs/free-layout-editor/classes/Layer.md)<`any`, `any`>>\[] |

#### Returns

`void`

***

### resize

**resize**(`msg?`, `scrollToCenter?`): `void`

这里会由 widget 透传进来

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg?` | [`PipelineDimension`](/auto-docs/free-layout-editor/interfaces/PipelineDimension.md) |
| `scrollToCenter?` | `boolean` |

#### Returns

`void`

***

### scrollToView

**scrollToView**(`opts?`): `Promise`<`void`>

按下边顺序执行

1. 指定的 entity 位置或 pos 位置
2. selection 位置
3. 初始化位置

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`PlaygroundConfigRevealOpts`](/auto-docs/free-layout-editor/interfaces/PlaygroundConfigRevealOpts.md) |

#### Returns

`Promise`<`void`>

***

### setParent

**setParent**(`parent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | `HTMLElement` |

#### Returns

`void`

***

### toReactComponent

**toReactComponent**(): `FC`<{}>

转换成 react 组件

#### Returns

`FC`<{}>

***

### getAllInstances

`Static` **getAllInstances**(): [`Playground`](/auto-docs/free-layout-editor/classes/Playground.md)<`any`>\[]

#### Returns

[`Playground`](/auto-docs/free-layout-editor/classes/Playground.md)<`any`>\[]

***

### getLatest

`Static` **getLatest**(): `undefined` | [`Playground`](/auto-docs/free-layout-editor/classes/Playground.md)<`any`>

#### Returns

`undefined` | [`Playground`](/auto-docs/free-layout-editor/classes/Playground.md)<`any`>
