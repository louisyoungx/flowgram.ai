# Class: WorkflowLinesManager

线条管理

## Table of contents

### Constructors

* [constructor](/en/auto-docs/free-layout-core/classes/WorkflowLinesManager.md#constructor)

### Properties

* [contributionFactories](/en/auto-docs/free-layout-core/classes/WorkflowLinesManager.md#contributionfactories)
* [hoverService](/en/auto-docs/free-layout-core/classes/WorkflowLinesManager.md#hoverservice)
* [isDrawing](/en/auto-docs/free-layout-core/classes/WorkflowLinesManager.md#isdrawing)
* [onAvailableLinesChange](/en/auto-docs/free-layout-core/classes/WorkflowLinesManager.md#onavailablelineschange)
* [onForceUpdate](/en/auto-docs/free-layout-core/classes/WorkflowLinesManager.md#onforceupdate)
* [options](/en/auto-docs/free-layout-core/classes/WorkflowLinesManager.md#options)
* [selectService](/en/auto-docs/free-layout-core/classes/WorkflowLinesManager.md#selectservice)

### Accessors

* [disposed](/en/auto-docs/free-layout-core/classes/WorkflowLinesManager.md#disposed)
* [lineColor](/en/auto-docs/free-layout-core/classes/WorkflowLinesManager.md#linecolor)
* [lineType](/en/auto-docs/free-layout-core/classes/WorkflowLinesManager.md#linetype)

### Methods

* [canAddLine](/en/auto-docs/free-layout-core/classes/WorkflowLinesManager.md#canaddline)
* [canRemove](/en/auto-docs/free-layout-core/classes/WorkflowLinesManager.md#canremove)
* [canReset](/en/auto-docs/free-layout-core/classes/WorkflowLinesManager.md#canreset)
* [createLine](/en/auto-docs/free-layout-core/classes/WorkflowLinesManager.md#createline)
* [dispose](/en/auto-docs/free-layout-core/classes/WorkflowLinesManager.md#dispose)
* [forceUpdate](/en/auto-docs/free-layout-core/classes/WorkflowLinesManager.md#forceupdate)
* [getAllLines](/en/auto-docs/free-layout-core/classes/WorkflowLinesManager.md#getalllines)
* [getCloseInLineFromMousePos](/en/auto-docs/free-layout-core/classes/WorkflowLinesManager.md#getcloseinlinefrommousepos)
* [getLine](/en/auto-docs/free-layout-core/classes/WorkflowLinesManager.md#getline)
* [getLineById](/en/auto-docs/free-layout-core/classes/WorkflowLinesManager.md#getlinebyid)
* [getLineColor](/en/auto-docs/free-layout-core/classes/WorkflowLinesManager.md#getlinecolor)
* [getNodeFromMousePos](/en/auto-docs/free-layout-core/classes/WorkflowLinesManager.md#getnodefrommousepos)
* [getPortById](/en/auto-docs/free-layout-core/classes/WorkflowLinesManager.md#getportbyid)
* [getPortFromMousePos](/en/auto-docs/free-layout-core/classes/WorkflowLinesManager.md#getportfrommousepos)
* [hasLine](/en/auto-docs/free-layout-core/classes/WorkflowLinesManager.md#hasline)
* [init](/en/auto-docs/free-layout-core/classes/WorkflowLinesManager.md#init)
* [isDisabledLine](/en/auto-docs/free-layout-core/classes/WorkflowLinesManager.md#isdisabledline)
* [isErrorLine](/en/auto-docs/free-layout-core/classes/WorkflowLinesManager.md#iserrorline)
* [isFlowingLine](/en/auto-docs/free-layout-core/classes/WorkflowLinesManager.md#isflowingline)
* [isHideArrowLine](/en/auto-docs/free-layout-core/classes/WorkflowLinesManager.md#ishidearrowline)
* [isReverseLine](/en/auto-docs/free-layout-core/classes/WorkflowLinesManager.md#isreverseline)
* [registerContribution](/en/auto-docs/free-layout-core/classes/WorkflowLinesManager.md#registercontribution)
* [replaceLine](/en/auto-docs/free-layout-core/classes/WorkflowLinesManager.md#replaceline)
* [setLineClassName](/en/auto-docs/free-layout-core/classes/WorkflowLinesManager.md#setlineclassname)
* [setLineRenderType](/en/auto-docs/free-layout-core/classes/WorkflowLinesManager.md#setlinerendertype)
* [switchLineType](/en/auto-docs/free-layout-core/classes/WorkflowLinesManager.md#switchlinetype)
* [toJSON](/en/auto-docs/free-layout-core/classes/WorkflowLinesManager.md#tojson)

## Constructors

### constructor

**new WorkflowLinesManager**()

## Properties

### contributionFactories

`Readonly` **contributionFactories**: [`WorkflowLineRenderContributionFactory`](/en/auto-docs/free-layout-core/types/WorkflowLineRenderContributionFactory.md)\[] = `[]`

***

### hoverService

**hoverService**: [`WorkflowHoverService`](/en/auto-docs/free-layout-core/classes/WorkflowHoverService.md)

***

### isDrawing

**isDrawing**: `boolean` = `false`

是否在调整线条

***

### onAvailableLinesChange

`Readonly` **onAvailableLinesChange**: `Event`<[`WorkflowContentChangeEvent`](/en/auto-docs/free-layout-core/interfaces/WorkflowContentChangeEvent.md)>

有效的线条被添加或者删除时候触发，未连上的线条不算

***

### onForceUpdate

`Readonly` **onForceUpdate**: `Event`<`void`>

强制渲染 lines

***

### options

`Readonly` **options**: [`WorkflowDocumentOptions`](/en/auto-docs/free-layout-core/variables/WorkflowDocumentOptions-1.md)

***

### selectService

**selectService**: [`WorkflowSelectService`](/en/auto-docs/free-layout-core/classes/WorkflowSelectService.md)

## Accessors

### disposed

`get` **disposed**(): `boolean`

#### Returns

`boolean`

***

### lineColor

`get` **lineColor**(): [`LineColor`](/en/auto-docs/free-layout-core/interfaces/LineColor.md)

#### Returns

[`LineColor`](/en/auto-docs/free-layout-core/interfaces/LineColor.md)

***

### lineType

`get` **lineType**(): [`LineRenderType`](/en/auto-docs/free-layout-core/types/LineRenderType.md)

#### Returns

[`LineRenderType`](/en/auto-docs/free-layout-core/types/LineRenderType.md)

## Methods

### canAddLine

**canAddLine**(`fromPort`, `toPort`, `silent?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fromPort` | [`WorkflowPortEntity`](/en/auto-docs/free-layout-core/classes/WorkflowPortEntity.md) |
| `toPort` | [`WorkflowPortEntity`](/en/auto-docs/free-layout-core/classes/WorkflowPortEntity.md) |
| `silent?` | `boolean` |

#### Returns

`boolean`

***

### canRemove

**canRemove**(`line`, `newLineInfo?`, `silent?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `line` | [`WorkflowLineEntity`](/en/auto-docs/free-layout-core/classes/WorkflowLineEntity.md) |
| `newLineInfo?` | `Required`<[`WorkflowLinePortInfo`](/en/auto-docs/free-layout-core/interfaces/WorkflowLinePortInfo.md)> |
| `silent?` | `boolean` |

#### Returns

`boolean`

***

### canReset

**canReset**(`fromPort`, `oldToPort`, `newToPort`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fromPort` | [`WorkflowPortEntity`](/en/auto-docs/free-layout-core/classes/WorkflowPortEntity.md) |
| `oldToPort` | [`WorkflowPortEntity`](/en/auto-docs/free-layout-core/classes/WorkflowPortEntity.md) |
| `newToPort` | [`WorkflowPortEntity`](/en/auto-docs/free-layout-core/classes/WorkflowPortEntity.md) |

#### Returns

`boolean`

***

### createLine

**createLine**(`options`): `undefined` | [`WorkflowLineEntity`](/en/auto-docs/free-layout-core/classes/WorkflowLineEntity.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | { `drawingTo?`: [`LinePoint`](/en/auto-docs/free-layout-core/interfaces/LinePoint.md) ; `key?`: `string`  } & [`WorkflowLinePortInfo`](/en/auto-docs/free-layout-core/interfaces/WorkflowLinePortInfo.md) |

#### Returns

`undefined` | [`WorkflowLineEntity`](/en/auto-docs/free-layout-core/classes/WorkflowLineEntity.md)

***

### dispose

**dispose**(): `void`

#### Returns

`void`

***

### forceUpdate

**forceUpdate**(): `void`

#### Returns

`void`

***

### getAllLines

**getAllLines**(): [`WorkflowLineEntity`](/en/auto-docs/free-layout-core/classes/WorkflowLineEntity.md)\[]

#### Returns

[`WorkflowLineEntity`](/en/auto-docs/free-layout-core/classes/WorkflowLineEntity.md)\[]

***

### getCloseInLineFromMousePos

**getCloseInLineFromMousePos**(`mousePos`, `minDistance?`): `undefined` | [`WorkflowLineEntity`](/en/auto-docs/free-layout-core/classes/WorkflowLineEntity.md)

获取线条中距离鼠标位置最近的线条和距离

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `mousePos` | `IPoint` | `undefined` | 鼠标位置 |
| `minDistance` | `number` | `LINE_HOVER_DISTANCE` | 最小检测距离 |

#### Returns

`undefined` | [`WorkflowLineEntity`](/en/auto-docs/free-layout-core/classes/WorkflowLineEntity.md)

距离鼠标位置最近的线条 以及距离

***

### getLine

**getLine**(`portInfo`): `undefined` | [`WorkflowLineEntity`](/en/auto-docs/free-layout-core/classes/WorkflowLineEntity.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `portInfo` | [`WorkflowLinePortInfo`](/en/auto-docs/free-layout-core/interfaces/WorkflowLinePortInfo.md) |

#### Returns

`undefined` | [`WorkflowLineEntity`](/en/auto-docs/free-layout-core/classes/WorkflowLineEntity.md)

***

### getLineById

**getLineById**(`id`): `undefined` | [`WorkflowLineEntity`](/en/auto-docs/free-layout-core/classes/WorkflowLineEntity.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`undefined` | [`WorkflowLineEntity`](/en/auto-docs/free-layout-core/classes/WorkflowLineEntity.md)

***

### getLineColor

**getLineColor**(`line`): `undefined` | `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `line` | [`WorkflowLineEntity`](/en/auto-docs/free-layout-core/classes/WorkflowLineEntity.md) |

#### Returns

`undefined` | `string`

***

### getNodeFromMousePos

**getNodeFromMousePos**(`pos`): `undefined` | `FlowNodeEntity`

根据鼠标位置找到 node

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pos` | `IPoint` | 鼠标位置 |

#### Returns

`undefined` | `FlowNodeEntity`

***

### getPortById

**getPortById**(`portId`): `undefined` | [`WorkflowPortEntity`](/en/auto-docs/free-layout-core/classes/WorkflowPortEntity.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `portId` | `string` |

#### Returns

`undefined` | [`WorkflowPortEntity`](/en/auto-docs/free-layout-core/classes/WorkflowPortEntity.md)

***

### getPortFromMousePos

**getPortFromMousePos**(`pos`): `undefined` | [`WorkflowPortEntity`](/en/auto-docs/free-layout-core/classes/WorkflowPortEntity.md)

根据鼠标位置找到 port

#### Parameters

| Name | Type |
| :------ | :------ |
| `pos` | `IPoint` |

#### Returns

`undefined` | [`WorkflowPortEntity`](/en/auto-docs/free-layout-core/classes/WorkflowPortEntity.md)

***

### hasLine

**hasLine**(`portInfo`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `portInfo` | [`WorkflowLinePortInfo`](/en/auto-docs/free-layout-core/interfaces/WorkflowLinePortInfo.md) |

#### Returns

`boolean`

***

### init

**init**(`doc`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `doc` | [`WorkflowDocument`](/en/auto-docs/free-layout-core/classes/WorkflowDocument.md) |

#### Returns

`void`

***

### isDisabledLine

**isDisabledLine**(`line`, `defaultValue?`): `boolean`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `line` | [`WorkflowLineEntity`](/en/auto-docs/free-layout-core/classes/WorkflowLineEntity.md) | `undefined` |
| `defaultValue` | `boolean` | `false` |

#### Returns

`boolean`

***

### isErrorLine

**isErrorLine**(`fromPort`, `toPort?`, `defaultValue?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fromPort` | [`WorkflowPortEntity`](/en/auto-docs/free-layout-core/classes/WorkflowPortEntity.md) |
| `toPort?` | [`WorkflowPortEntity`](/en/auto-docs/free-layout-core/classes/WorkflowPortEntity.md) |
| `defaultValue?` | `boolean` |

#### Returns

`boolean`

***

### isFlowingLine

**isFlowingLine**(`line`, `defaultValue?`): `boolean`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `line` | [`WorkflowLineEntity`](/en/auto-docs/free-layout-core/classes/WorkflowLineEntity.md) | `undefined` |
| `defaultValue` | `boolean` | `false` |

#### Returns

`boolean`

***

### isHideArrowLine

**isHideArrowLine**(`line`, `defaultValue?`): `boolean`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `line` | [`WorkflowLineEntity`](/en/auto-docs/free-layout-core/classes/WorkflowLineEntity.md) | `undefined` |
| `defaultValue` | `boolean` | `false` |

#### Returns

`boolean`

***

### isReverseLine

**isReverseLine**(`line`, `defaultValue?`): `boolean`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `line` | [`WorkflowLineEntity`](/en/auto-docs/free-layout-core/classes/WorkflowLineEntity.md) | `undefined` |
| `defaultValue` | `boolean` | `false` |

#### Returns

`boolean`

***

### registerContribution

**registerContribution**(`factory`): [`WorkflowLinesManager`](/en/auto-docs/free-layout-core/classes/WorkflowLinesManager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`WorkflowLineRenderContributionFactory`](/en/auto-docs/free-layout-core/types/WorkflowLineRenderContributionFactory.md) |

#### Returns

[`WorkflowLinesManager`](/en/auto-docs/free-layout-core/classes/WorkflowLinesManager.md)

***

### replaceLine

**replaceLine**(`oldPortInfo`, `newPortInfo`): [`WorkflowLineEntity`](/en/auto-docs/free-layout-core/classes/WorkflowLineEntity.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldPortInfo` | [`WorkflowLinePortInfo`](/en/auto-docs/free-layout-core/interfaces/WorkflowLinePortInfo.md) |
| `newPortInfo` | [`WorkflowLinePortInfo`](/en/auto-docs/free-layout-core/interfaces/WorkflowLinePortInfo.md) |

#### Returns

[`WorkflowLineEntity`](/en/auto-docs/free-layout-core/classes/WorkflowLineEntity.md)

***

### setLineClassName

**setLineClassName**(`line`): `undefined` | `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `line` | [`WorkflowLineEntity`](/en/auto-docs/free-layout-core/classes/WorkflowLineEntity.md) |

#### Returns

`undefined` | `string`

***

### setLineRenderType

**setLineRenderType**(`line`): `undefined` | [`LineRenderType`](/en/auto-docs/free-layout-core/types/LineRenderType.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `line` | [`WorkflowLineEntity`](/en/auto-docs/free-layout-core/classes/WorkflowLineEntity.md) |

#### Returns

`undefined` | [`LineRenderType`](/en/auto-docs/free-layout-core/types/LineRenderType.md)

***

### switchLineType

**switchLineType**(`newType?`): [`LineRenderType`](/en/auto-docs/free-layout-core/types/LineRenderType.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `newType?` | [`LineRenderType`](/en/auto-docs/free-layout-core/types/LineRenderType.md) |

#### Returns

[`LineRenderType`](/en/auto-docs/free-layout-core/types/LineRenderType.md)

***

### toJSON

**toJSON**(): [`WorkflowEdgeJSON`](/en/auto-docs/free-layout-core/interfaces/WorkflowEdgeJSON.md)\[]

#### Returns

[`WorkflowEdgeJSON`](/en/auto-docs/free-layout-core/interfaces/WorkflowEdgeJSON.md)\[]
