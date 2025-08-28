# Interface: FlowDragOptions

## Table of contents

### Properties

* [canDrop](/en/auto-docs/renderer/interfaces/FlowDragOptions.md#candrop)
* [onDrop](/en/auto-docs/renderer/interfaces/FlowDragOptions.md#ondrop)

## Properties

### canDrop

`Optional` **canDrop**: (`opts`: { `dragNodes`: `FlowNodeEntity`\[] ; `dropNode`: `FlowNodeEntity` ; `isBranch?`: `boolean`  }) => `boolean`

#### Type declaration

(`opts`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `Object` |
| `opts.dragNodes` | `FlowNodeEntity`\[] |
| `opts.dropNode` | `FlowNodeEntity` |
| `opts.isBranch?` | `boolean` |

##### Returns

`boolean`

***

### onDrop

`Optional` **onDrop**: (`opts`: { `dragNodes`: `FlowNodeEntity`\[] ; `dropNode`: `FlowNodeEntity`  }) => `void`

#### Type declaration

(`opts`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `Object` |
| `opts.dragNodes` | `FlowNodeEntity`\[] |
| `opts.dropNode` | `FlowNodeEntity` |

##### Returns

`void`
