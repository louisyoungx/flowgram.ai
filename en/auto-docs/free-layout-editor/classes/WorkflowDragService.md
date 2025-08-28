# Class: WorkflowDragService

## Table of contents

### Constructors

* [constructor](/en/auto-docs/free-layout-editor/classes/WorkflowDragService.md#constructor)

### Properties

* [isDragging](/en/auto-docs/free-layout-editor/classes/WorkflowDragService.md#isdragging)
* [onDragLineEventChange](/en/auto-docs/free-layout-editor/classes/WorkflowDragService.md#ondraglineeventchange)
* [onNodesDrag](/en/auto-docs/free-layout-editor/classes/WorkflowDragService.md#onnodesdrag)
* [options](/en/auto-docs/free-layout-editor/classes/WorkflowDragService.md#options)

### Methods

* [adjustSubNodePosition](/en/auto-docs/free-layout-editor/classes/WorkflowDragService.md#adjustsubnodeposition)
* [canDropToNode](/en/auto-docs/free-layout-editor/classes/WorkflowDragService.md#candroptonode)
* [dispose](/en/auto-docs/free-layout-editor/classes/WorkflowDragService.md#dispose)
* [dropCard](/en/auto-docs/free-layout-editor/classes/WorkflowDragService.md#dropcard)
* [init](/en/auto-docs/free-layout-editor/classes/WorkflowDragService.md#init)
* [onDragLineEnd](/en/auto-docs/free-layout-editor/classes/WorkflowDragService.md#ondraglineend)
* [registerPosAdjuster](/en/auto-docs/free-layout-editor/classes/WorkflowDragService.md#registerposadjuster)
* [resetLine](/en/auto-docs/free-layout-editor/classes/WorkflowDragService.md#resetline)
* [startDragCard](/en/auto-docs/free-layout-editor/classes/WorkflowDragService.md#startdragcard)
* [startDragSelectedNodes](/en/auto-docs/free-layout-editor/classes/WorkflowDragService.md#startdragselectednodes)
* [startDrawingLine](/en/auto-docs/free-layout-editor/classes/WorkflowDragService.md#startdrawingline)

## Constructors

### constructor

**new WorkflowDragService**()

## Properties

### isDragging

**isDragging**: `boolean`

***

### onDragLineEventChange

`Readonly` **onDragLineEventChange**: [`Event`](/en/auto-docs/free-layout-editor/interfaces/Event-1.md)<[`LineEventProps`](/en/auto-docs/free-layout-editor/interfaces/LineEventProps.md)>

***

### onNodesDrag

`Readonly` **onNodesDrag**: [`Event`](/en/auto-docs/free-layout-editor/interfaces/Event-1.md)<[`NodesDragEvent`](/en/auto-docs/free-layout-editor/types/NodesDragEvent.md)>

***

### options

`Readonly` **options**: [`WorkflowDocumentOptions`](/en/auto-docs/free-layout-editor/variables/WorkflowDocumentOptions-1.md)

## Methods

### adjustSubNodePosition

**adjustSubNodePosition**(`subNodeType?`, `containerNode?`, `mousePos?`): [`IPoint`](/en/auto-docs/free-layout-editor/interfaces/IPoint.md)

如果存在容器节点，且传入鼠标坐标，需要用容器的坐标减去传入的鼠标坐标

#### Parameters

| Name | Type |
| :------ | :------ |
| `subNodeType?` | `string` |
| `containerNode?` | [`FlowNodeEntity`](/en/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md) |
| `mousePos?` | [`IPoint`](/en/auto-docs/free-layout-editor/interfaces/IPoint.md) |

#### Returns

[`IPoint`](/en/auto-docs/free-layout-editor/interfaces/IPoint.md)

***

### canDropToNode

**canDropToNode**(`params`): `Object`

判断是否可以放置节点

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.dragNode?` | [`FlowNodeEntity`](/en/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md) |
| `params.dragNodeType?` | [`FlowNodeType`](/en/auto-docs/free-layout-editor/types/FlowNodeType.md) |
| `params.dropNode?` | [`FlowNodeEntity`](/en/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md) |
| `params.dropNodeType?` | [`FlowNodeType`](/en/auto-docs/free-layout-editor/types/FlowNodeType.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `allowDrop` | `boolean` |
| `dropNode?` | [`FlowNodeEntity`](/en/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md) |
| `message?` | `string` |

***

### dispose

**dispose**(): `void`

#### Returns

`void`

***

### dropCard

**dropCard**(`type`, `event`, `data?`, `parent?`): `Promise`<`undefined` | [`FlowNodeEntity`](/en/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md)>

通过拖入卡片添加

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` |  |
| `event` | `Object` |  |
| `event.clientX` | `number` | - |
| `event.clientY` | `number` | - |
| `data?` | `Partial`<[`WorkflowNodeJSON`](/en/auto-docs/free-layout-editor/interfaces/WorkflowNodeJSON.md)> | 节点数据 |
| `parent?` | [`FlowNodeEntity`](/en/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md) | - |

#### Returns

`Promise`<`undefined` | [`FlowNodeEntity`](/en/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md)>

***

### init

**init**(): `void`

#### Returns

`void`

***

### onDragLineEnd

**onDragLineEnd**(`callback`): [`Disposable`](/en/auto-docs/free-layout-editor/interfaces/Disposable-1.md)

线条拖拽结束

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`OnDragLineEnd`](/en/auto-docs/free-layout-editor/types/OnDragLineEnd.md) |

#### Returns

[`Disposable`](/en/auto-docs/free-layout-editor/interfaces/Disposable-1.md)

***

### registerPosAdjuster

**registerPosAdjuster**(`adjuster`): `Object`

注册位置调整

#### Parameters

| Name | Type |
| :------ | :------ |
| `adjuster` | (`params`: { `position`: [`IPoint`](/en/auto-docs/free-layout-editor/interfaces/IPoint.md) ; `selectedNodes`: [`FlowNodeEntity`](/en/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md)\[]  }) => [`IPoint`](/en/auto-docs/free-layout-editor/interfaces/IPoint.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `dispose` | () => `boolean` |

***

### resetLine

**resetLine**(`line`, `e`): `Promise`<`void`>

重新连接线条

#### Parameters

| Name | Type |
| :------ | :------ |
| `line` | [`WorkflowLineEntity`](/en/auto-docs/free-layout-editor/classes/WorkflowLineEntity.md) |
| `e` | `MouseEvent` |

#### Returns

`Promise`<`void`>

***

### startDragCard

**startDragCard**(`type`, `event`, `data`, `cloneNode?`): `Promise`<`undefined` | [`FlowNodeEntity`](/en/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md)>

拖拽卡片到画布
返回创建结果

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `event` | `MouseEvent`<`Element`, `MouseEvent`> |
| `data` | `Partial`<[`WorkflowNodeJSON`](/en/auto-docs/free-layout-editor/interfaces/WorkflowNodeJSON.md)> |
| `cloneNode?` | (`e`: [`PlaygroundDragEvent`](/en/auto-docs/free-layout-editor/interfaces/PlaygroundDragEvent.md)) => `HTMLDivElement` |

#### Returns

`Promise`<`undefined` | [`FlowNodeEntity`](/en/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md)>

***

### startDragSelectedNodes

**startDragSelectedNodes**(`triggerEvent`): `Promise`<`boolean`>

拖拽选中节点

#### Parameters

| Name | Type |
| :------ | :------ |
| `triggerEvent` | `MouseEvent` | `MouseEvent`<`Element`, `MouseEvent`> |

#### Returns

`Promise`<`boolean`>

***

### startDrawingLine

**startDrawingLine**(`fromPort`, `event`, `originLine?`): `Promise`<{ `dragSuccess?`: `boolean` ; `newLine?`: [`WorkflowLineEntity`](/en/auto-docs/free-layout-editor/classes/WorkflowLineEntity.md)  }>

绘制线条

#### Parameters

| Name | Type |
| :------ | :------ |
| `fromPort` | [`WorkflowPortEntity`](/en/auto-docs/free-layout-editor/classes/WorkflowPortEntity.md) |
| `event` | `Object` |
| `event.clientX` | `number` |
| `event.clientY` | `number` |
| `originLine?` | [`WorkflowLineEntity`](/en/auto-docs/free-layout-editor/classes/WorkflowLineEntity.md) |

#### Returns

`Promise`<{ `dragSuccess?`: `boolean` ; `newLine?`: [`WorkflowLineEntity`](/en/auto-docs/free-layout-editor/classes/WorkflowLineEntity.md)  }>
