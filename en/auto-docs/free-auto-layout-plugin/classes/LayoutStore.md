# Class: LayoutStore

## Table of contents

### Constructors

* [constructor](/en/auto-docs/free-auto-layout-plugin/classes/LayoutStore.md#constructor)

### Properties

* [config](/en/auto-docs/free-auto-layout-plugin/classes/LayoutStore.md#config)
* [options](/en/auto-docs/free-auto-layout-plugin/classes/LayoutStore.md#options)

### Accessors

* [edges](/en/auto-docs/free-auto-layout-plugin/classes/LayoutStore.md#edges)
* [initialized](/en/auto-docs/free-auto-layout-plugin/classes/LayoutStore.md#initialized)
* [nodes](/en/auto-docs/free-auto-layout-plugin/classes/LayoutStore.md#nodes)

### Methods

* [create](/en/auto-docs/free-auto-layout-plugin/classes/LayoutStore.md#create)
* [getEdge](/en/auto-docs/free-auto-layout-plugin/classes/LayoutStore.md#getedge)
* [getNode](/en/auto-docs/free-auto-layout-plugin/classes/LayoutStore.md#getnode)
* [getNodeByIndex](/en/auto-docs/free-auto-layout-plugin/classes/LayoutStore.md#getnodebyindex)

## Constructors

### constructor

**new LayoutStore**(`config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `LayoutConfig` |

## Properties

### config

`Readonly` **config**: `LayoutConfig`

***

### options

**options**: [`LayoutOptions`](/en/auto-docs/free-auto-layout-plugin/interfaces/LayoutOptions.md)

## Accessors

### edges

`get` **edges**(): [`LayoutEdge`](/en/auto-docs/free-auto-layout-plugin/interfaces/LayoutEdge.md)\[]

#### Returns

[`LayoutEdge`](/en/auto-docs/free-auto-layout-plugin/interfaces/LayoutEdge.md)\[]

***

### initialized

`get` **initialized**(): `boolean`

#### Returns

`boolean`

***

### nodes

`get` **nodes**(): [`LayoutNode`](/en/auto-docs/free-auto-layout-plugin/interfaces/LayoutNode.md)\[]

#### Returns

[`LayoutNode`](/en/auto-docs/free-auto-layout-plugin/interfaces/LayoutNode.md)\[]

## Methods

### create

**create**(`params`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `LayoutParams` |
| `options` | [`LayoutOptions`](/en/auto-docs/free-auto-layout-plugin/interfaces/LayoutOptions.md) |

#### Returns

`void`

***

### getEdge

**getEdge**(`id`): `undefined` | [`LayoutEdge`](/en/auto-docs/free-auto-layout-plugin/interfaces/LayoutEdge.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`undefined` | [`LayoutEdge`](/en/auto-docs/free-auto-layout-plugin/interfaces/LayoutEdge.md)

***

### getNode

**getNode**(`id?`): `undefined` | [`LayoutNode`](/en/auto-docs/free-auto-layout-plugin/interfaces/LayoutNode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id?` | `string` |

#### Returns

`undefined` | [`LayoutNode`](/en/auto-docs/free-auto-layout-plugin/interfaces/LayoutNode.md)

***

### getNodeByIndex

**getNodeByIndex**(`index`): `undefined` | [`LayoutNode`](/en/auto-docs/free-auto-layout-plugin/interfaces/LayoutNode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `string` |

#### Returns

`undefined` | [`LayoutNode`](/en/auto-docs/free-auto-layout-plugin/interfaces/LayoutNode.md)
