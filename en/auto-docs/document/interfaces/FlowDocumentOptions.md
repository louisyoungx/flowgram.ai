# Interface: FlowDocumentOptions

流程画布配置

## Table of contents

### Properties

* [allNodesDefaultExpanded](/en/auto-docs/document/interfaces/FlowDocumentOptions.md#allnodesdefaultexpanded)
* [constants](/en/auto-docs/document/interfaces/FlowDocumentOptions.md#constants)
* [defaultLayout](/en/auto-docs/document/interfaces/FlowDocumentOptions.md#defaultlayout)
* [formatNodeLabels](/en/auto-docs/document/interfaces/FlowDocumentOptions.md#formatnodelabels)
* [formatNodeLines](/en/auto-docs/document/interfaces/FlowDocumentOptions.md#formatnodelines)
* [getNodeDefaultRegistry](/en/auto-docs/document/interfaces/FlowDocumentOptions.md#getnodedefaultregistry)

### Methods

* [fromNodeJSON](/en/auto-docs/document/interfaces/FlowDocumentOptions.md#fromnodejson)
* [toNodeJSON](/en/auto-docs/document/interfaces/FlowDocumentOptions.md#tonodejson)

## Properties

### allNodesDefaultExpanded

`Optional` **allNodesDefaultExpanded**: `boolean`

所有节点的默认展开状态

***

### constants

`Optional` **constants**: `Record`<`string`, `any`>

***

### defaultLayout

`Optional` **defaultLayout**: `string`

布局，默认 垂直布局

***

### formatNodeLabels

`Optional` **formatNodeLabels**: (`node`: [`FlowNodeEntity`](/en/auto-docs/document/classes/FlowNodeEntity-1.md), `lines`: [`FlowTransitionLabel`](/en/auto-docs/document/interfaces/FlowTransitionLabel.md)\[]) => [`FlowTransitionLabel`](/en/auto-docs/document/interfaces/FlowTransitionLabel.md)\[]

#### Type declaration

(`node`, `lines`): [`FlowTransitionLabel`](/en/auto-docs/document/interfaces/FlowTransitionLabel.md)\[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`FlowNodeEntity`](/en/auto-docs/document/classes/FlowNodeEntity-1.md) |
| `lines` | [`FlowTransitionLabel`](/en/auto-docs/document/interfaces/FlowTransitionLabel.md)\[] |

##### Returns

[`FlowTransitionLabel`](/en/auto-docs/document/interfaces/FlowTransitionLabel.md)\[]

***

### formatNodeLines

`Optional` **formatNodeLines**: (`node`: [`FlowNodeEntity`](/en/auto-docs/document/classes/FlowNodeEntity-1.md), `lines`: [`FlowTransitionLine`](/en/auto-docs/document/interfaces/FlowTransitionLine.md)\[]) => [`FlowTransitionLine`](/en/auto-docs/document/interfaces/FlowTransitionLine.md)\[]

#### Type declaration

(`node`, `lines`): [`FlowTransitionLine`](/en/auto-docs/document/interfaces/FlowTransitionLine.md)\[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`FlowNodeEntity`](/en/auto-docs/document/classes/FlowNodeEntity-1.md) |
| `lines` | [`FlowTransitionLine`](/en/auto-docs/document/interfaces/FlowTransitionLine.md)\[] |

##### Returns

[`FlowTransitionLine`](/en/auto-docs/document/interfaces/FlowTransitionLine.md)\[]

***

### getNodeDefaultRegistry

`Optional` **getNodeDefaultRegistry**: (`type`: [`FlowNodeType`](/en/auto-docs/document/types/FlowNodeType.md)) => [`FlowNodeRegistry`](/en/auto-docs/document/interfaces/FlowNodeRegistry-1.md)<[`FlowNodeMeta`](/en/auto-docs/document/interfaces/FlowNodeMeta.md)>

#### Type declaration

(`type`): [`FlowNodeRegistry`](/en/auto-docs/document/interfaces/FlowNodeRegistry-1.md)<[`FlowNodeMeta`](/en/auto-docs/document/interfaces/FlowNodeMeta.md)>

获取默认的节点配置

##### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`FlowNodeType`](/en/auto-docs/document/types/FlowNodeType.md) |

##### Returns

[`FlowNodeRegistry`](/en/auto-docs/document/interfaces/FlowNodeRegistry-1.md)<[`FlowNodeMeta`](/en/auto-docs/document/interfaces/FlowNodeMeta.md)>

## Methods

### fromNodeJSON

`Optional` **fromNodeJSON**(`node`, `json`, `isFirstCreate`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`FlowNodeEntity`](/en/auto-docs/document/classes/FlowNodeEntity-1.md) |
| `json` | [`FlowNodeJSON`](/en/auto-docs/document/interfaces/FlowNodeJSON.md) |
| `isFirstCreate` | `boolean` |

#### Returns

`void`

***

### toNodeJSON

`Optional` **toNodeJSON**(`node`): [`FlowNodeJSON`](/en/auto-docs/document/interfaces/FlowNodeJSON.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`FlowNodeEntity`](/en/auto-docs/document/classes/FlowNodeEntity-1.md) |

#### Returns

[`FlowNodeJSON`](/en/auto-docs/document/interfaces/FlowNodeJSON.md)
