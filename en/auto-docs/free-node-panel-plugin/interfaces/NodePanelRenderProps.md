# Interface: NodePanelRenderProps

## Hierarchy

* `CallNodePanelParams`

  ↳ **`NodePanelRenderProps`**

## Table of contents

### Properties

* [containerNode](/en/auto-docs/free-node-panel-plugin/interfaces/NodePanelRenderProps.md#containernode)
* [enableMultiAdd](/en/auto-docs/free-node-panel-plugin/interfaces/NodePanelRenderProps.md#enablemultiadd)
* [onClose](/en/auto-docs/free-node-panel-plugin/interfaces/NodePanelRenderProps.md#onclose)
* [onSelect](/en/auto-docs/free-node-panel-plugin/interfaces/NodePanelRenderProps.md#onselect)
* [panelProps](/en/auto-docs/free-node-panel-plugin/interfaces/NodePanelRenderProps.md#panelprops)
* [position](/en/auto-docs/free-node-panel-plugin/interfaces/NodePanelRenderProps.md#position)

## Properties

### containerNode

`Optional` **containerNode**: `FlowNodeEntity`

#### Inherited from

CallNodePanelParams.containerNode

***

### enableMultiAdd

`Optional` **enableMultiAdd**: `boolean`

#### Inherited from

CallNodePanelParams.enableMultiAdd

***

### onClose

**onClose**: () => `void`

#### Type declaration

(): `void`

##### Returns

`void`

#### Inherited from

CallNodePanelParams.onClose

***

### onSelect

**onSelect**: (`params?`: [`NodePanelResult`](/en/auto-docs/free-node-panel-plugin/types/NodePanelResult.md)) => `void`

#### Type declaration

(`params?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | [`NodePanelResult`](/en/auto-docs/free-node-panel-plugin/types/NodePanelResult.md) |

##### Returns

`void`

#### Inherited from

CallNodePanelParams.onSelect

***

### panelProps

`Optional` **panelProps**: `Record`<`string`, `any`>

#### Inherited from

CallNodePanelParams.panelProps

***

### position

**position**: `PositionSchema`

#### Inherited from

CallNodePanelParams.position
