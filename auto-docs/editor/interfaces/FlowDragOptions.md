# Interface: FlowDragOptions

Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
SPDX-License-Identifier: MIT

## Table of contents

### Properties

* [canDrop](/auto-docs/editor/interfaces/FlowDragOptions.md#candrop)
* [onDrop](/auto-docs/editor/interfaces/FlowDragOptions.md#ondrop)

## Properties

### canDrop

`Optional` **canDrop**: (`opts`: { `dragNodes`: [`FlowNodeEntity`](/auto-docs/editor/classes/FlowNodeEntity-1.md)\[] ; `dropNode`: [`FlowNodeEntity`](/auto-docs/editor/classes/FlowNodeEntity-1.md) ; `isBranch?`: `boolean`  }) => `boolean`

#### Type declaration

(`opts`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `Object` |
| `opts.dragNodes` | [`FlowNodeEntity`](/auto-docs/editor/classes/FlowNodeEntity-1.md)\[] |
| `opts.dropNode` | [`FlowNodeEntity`](/auto-docs/editor/classes/FlowNodeEntity-1.md) |
| `opts.isBranch?` | `boolean` |

##### Returns

`boolean`

***

### onDrop

`Optional` **onDrop**: (`opts`: { `dragNodes`: [`FlowNodeEntity`](/auto-docs/editor/classes/FlowNodeEntity-1.md)\[] ; `dropNode`: [`FlowNodeEntity`](/auto-docs/editor/classes/FlowNodeEntity-1.md)  }) => `void`

#### Type declaration

(`opts`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `Object` |
| `opts.dragNodes` | [`FlowNodeEntity`](/auto-docs/editor/classes/FlowNodeEntity-1.md)\[] |
| `opts.dropNode` | [`FlowNodeEntity`](/auto-docs/editor/classes/FlowNodeEntity-1.md) |

##### Returns

`void`
