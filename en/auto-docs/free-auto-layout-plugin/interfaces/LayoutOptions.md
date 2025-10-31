# Interface: LayoutOptions

## Table of contents

### Properties

* [animationDuration](/en/auto-docs/free-auto-layout-plugin/interfaces/LayoutOptions.md#animationduration)
* [containerNode](/en/auto-docs/free-auto-layout-plugin/interfaces/LayoutOptions.md#containernode)
* [disableFitView](/en/auto-docs/free-auto-layout-plugin/interfaces/LayoutOptions.md#disablefitview)
* [enableAnimation](/en/auto-docs/free-auto-layout-plugin/interfaces/LayoutOptions.md#enableanimation)
* [filterLine](/en/auto-docs/free-auto-layout-plugin/interfaces/LayoutOptions.md#filterline)
* [filterNode](/en/auto-docs/free-auto-layout-plugin/interfaces/LayoutOptions.md#filternode)
* [getFollowNode](/en/auto-docs/free-auto-layout-plugin/interfaces/LayoutOptions.md#getfollownode)
* [layoutConfig](/en/auto-docs/free-auto-layout-plugin/interfaces/LayoutOptions.md#layoutconfig)

## Properties

### animationDuration

`Optional` **animationDuration**: `number`

***

### containerNode

`Optional` **containerNode**: `FlowNodeEntity`

***

### disableFitView

`Optional` **disableFitView**: `boolean`

***

### enableAnimation

`Optional` **enableAnimation**: `boolean`

***

### filterLine

`Optional` **filterLine**: (`params`: { `line`: `WorkflowLineEntity`  }) => `boolean`

#### Type declaration

(`params`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.line` | `WorkflowLineEntity` |

##### Returns

`boolean`

***

### filterNode

`Optional` **filterNode**: (`params`: { `node`: `FlowNodeEntity` ; `parent?`: `FlowNodeEntity`  }) => `boolean`

#### Type declaration

(`params`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.node` | `FlowNodeEntity` |
| `params.parent?` | `FlowNodeEntity` |

##### Returns

`boolean`

***

### getFollowNode

`Optional` **getFollowNode**: [`GetFollowNode`](/en/auto-docs/free-auto-layout-plugin/types/GetFollowNode.md)

***

### layoutConfig

`Optional` **layoutConfig**: `Partial`<`LayoutConfig`>
