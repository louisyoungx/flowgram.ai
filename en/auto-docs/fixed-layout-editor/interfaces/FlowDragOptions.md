# Interface: FlowDragOptions

Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
SPDX-License-Identifier: MIT

## Table of contents

### Properties

* [canDrop](/en/auto-docs/fixed-layout-editor/interfaces/FlowDragOptions.md#candrop)
* [onDrop](/en/auto-docs/fixed-layout-editor/interfaces/FlowDragOptions.md#ondrop)

## Properties

### canDrop

`Optional` **canDrop**: (`opts`: { `dragNodes`: [`FlowNodeEntity`](/en/auto-docs/fixed-layout-editor/classes/FlowNodeEntity-1.md)\[] ; `dropNode`: [`FlowNodeEntity`](/en/auto-docs/fixed-layout-editor/classes/FlowNodeEntity-1.md) ; `isBranch?`: `boolean`  }) => `boolean`

#### Type declaration

(`opts`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `Object` |
| `opts.dragNodes` | [`FlowNodeEntity`](/en/auto-docs/fixed-layout-editor/classes/FlowNodeEntity-1.md)\[] |
| `opts.dropNode` | [`FlowNodeEntity`](/en/auto-docs/fixed-layout-editor/classes/FlowNodeEntity-1.md) |
| `opts.isBranch?` | `boolean` |

##### Returns

`boolean`

***

### onDrop

`Optional` **onDrop**: (`opts`: { `dragNodes`: [`FlowNodeEntity`](/en/auto-docs/fixed-layout-editor/classes/FlowNodeEntity-1.md)\[] ; `dropNode`: [`FlowNodeEntity`](/en/auto-docs/fixed-layout-editor/classes/FlowNodeEntity-1.md)  }) => `void`

#### Type declaration

(`opts`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `Object` |
| `opts.dragNodes` | [`FlowNodeEntity`](/en/auto-docs/fixed-layout-editor/classes/FlowNodeEntity-1.md)\[] |
| `opts.dropNode` | [`FlowNodeEntity`](/en/auto-docs/fixed-layout-editor/classes/FlowNodeEntity-1.md) |

##### Returns

`void`
