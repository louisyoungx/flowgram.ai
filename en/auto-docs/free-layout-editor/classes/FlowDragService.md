# Class: FlowDragService

拖拽相关操作
外部实现抽象类

## Table of contents

### Constructors

* [constructor](/en/auto-docs/free-layout-editor/classes/FlowDragService.md#constructor)

### Properties

* [onDrop](/en/auto-docs/free-layout-editor/classes/FlowDragService.md#ondrop)

### Accessors

* [dragNodes](/en/auto-docs/free-layout-editor/classes/FlowDragService.md#dragnodes)
* [dragStartNode](/en/auto-docs/free-layout-editor/classes/FlowDragService.md#dragstartnode)
* [dragging](/en/auto-docs/free-layout-editor/classes/FlowDragService.md#dragging)
* [dropNodeId](/en/auto-docs/free-layout-editor/classes/FlowDragService.md#dropnodeid)
* [isDragBranch](/en/auto-docs/free-layout-editor/classes/FlowDragService.md#isdragbranch)
* [labelSide](/en/auto-docs/free-layout-editor/classes/FlowDragService.md#labelside)
* [nodeDragIdsWithChildren](/en/auto-docs/free-layout-editor/classes/FlowDragService.md#nodedragidswithchildren)
* [renderState](/en/auto-docs/free-layout-editor/classes/FlowDragService.md#renderstate)

### Methods

* [dropBranch](/en/auto-docs/free-layout-editor/classes/FlowDragService.md#dropbranch)
* [dropNode](/en/auto-docs/free-layout-editor/classes/FlowDragService.md#dropnode)
* [isDroppableBranch](/en/auto-docs/free-layout-editor/classes/FlowDragService.md#isdroppablebranch)
* [isDroppableNode](/en/auto-docs/free-layout-editor/classes/FlowDragService.md#isdroppablenode)

## Constructors

### constructor

**new FlowDragService**()

## Properties

### onDrop

`Readonly` **onDrop**: [`Event`](/en/auto-docs/free-layout-editor/interfaces/Event-1.md)<{ `dragNodes`: [`FlowNodeEntity`](/en/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md)\[] ; `dropNode`: [`FlowNodeEntity`](/en/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md)  }>

## Accessors

### dragNodes

`get` **dragNodes**(): [`FlowNodeEntity`](/en/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md)\[]

#### Returns

[`FlowNodeEntity`](/en/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md)\[]

***

### dragStartNode

`get` **dragStartNode**(): [`FlowNodeEntity`](/en/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md)

#### Returns

[`FlowNodeEntity`](/en/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md)

***

### dragging

`get` **dragging**(): `boolean`

#### Returns

`boolean`

***

### dropNodeId

`get` **dropNodeId**(): `undefined` | `string`

#### Returns

`undefined` | `string`

***

### isDragBranch

`get` **isDragBranch**(): `boolean`

#### Returns

`boolean`

***

### labelSide

`get` **labelSide**(): `undefined` | [`LABEL_SIDE_TYPE`](/en/auto-docs/free-layout-editor/enums/LABEL_SIDE_TYPE.md)

#### Returns

`undefined` | [`LABEL_SIDE_TYPE`](/en/auto-docs/free-layout-editor/enums/LABEL_SIDE_TYPE.md)

***

### nodeDragIdsWithChildren

`get` **nodeDragIdsWithChildren**(): `string`\[]

#### Returns

`string`\[]

***

### renderState

`get` **renderState**(): [`FlowRendererStateEntity`](/en/auto-docs/free-layout-editor/classes/FlowRendererStateEntity.md)

#### Returns

[`FlowRendererStateEntity`](/en/auto-docs/free-layout-editor/classes/FlowRendererStateEntity.md)

## Methods

### dropBranch

**dropBranch**(): `void`

放置到目标分支

#### Returns

`void`

***

### dropNode

**dropNode**(): `void`

移动到目标节点

#### Returns

`void`

***

### isDroppableBranch

**isDroppableBranch**(`node`, `side?`): `boolean`

拖拽分支是否可以释放在该分支

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | [`FlowNodeEntity`](/en/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md) | 拖拽的分支节点 |
| `side?` | [`LABEL_SIDE_TYPE`](/en/auto-docs/free-layout-editor/enums/LABEL_SIDE_TYPE.md) | 分支的前面还是后面 |

#### Returns

`boolean`

***

### isDroppableNode

**isDroppableNode**(`node`): `boolean`

拖拽是否可以释放在该节点后面

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`FlowNodeEntity`](/en/auto-docs/free-layout-editor/classes/FlowNodeEntity-1.md) |

#### Returns

`boolean`
