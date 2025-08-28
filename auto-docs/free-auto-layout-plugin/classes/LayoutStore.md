# Class: LayoutStore

## Table of contents

### Constructors

* [constructor](/auto-docs/free-auto-layout-plugin/classes/LayoutStore.md#constructor)

### Properties

* [config](/auto-docs/free-auto-layout-plugin/classes/LayoutStore.md#config)
* [options](/auto-docs/free-auto-layout-plugin/classes/LayoutStore.md#options)

### Accessors

* [edges](/auto-docs/free-auto-layout-plugin/classes/LayoutStore.md#edges)
* [initialized](/auto-docs/free-auto-layout-plugin/classes/LayoutStore.md#initialized)
* [nodes](/auto-docs/free-auto-layout-plugin/classes/LayoutStore.md#nodes)

### Methods

* [create](/auto-docs/free-auto-layout-plugin/classes/LayoutStore.md#create)
* [getEdge](/auto-docs/free-auto-layout-plugin/classes/LayoutStore.md#getedge)
* [getNode](/auto-docs/free-auto-layout-plugin/classes/LayoutStore.md#getnode)
* [getNodeByIndex](/auto-docs/free-auto-layout-plugin/classes/LayoutStore.md#getnodebyindex)

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

**options**: [`LayoutOptions`](/auto-docs/free-auto-layout-plugin/interfaces/LayoutOptions.md)

## Accessors

### edges

`get` **edges**(): [`LayoutEdge`](/auto-docs/free-auto-layout-plugin/interfaces/LayoutEdge.md)\[]

#### Returns

[`LayoutEdge`](/auto-docs/free-auto-layout-plugin/interfaces/LayoutEdge.md)\[]

***

### initialized

`get` **initialized**(): `boolean`

#### Returns

`boolean`

***

### nodes

`get` **nodes**(): [`LayoutNode`](/auto-docs/free-auto-layout-plugin/interfaces/LayoutNode.md)\[]

#### Returns

[`LayoutNode`](/auto-docs/free-auto-layout-plugin/interfaces/LayoutNode.md)\[]

## Methods

### create

**create**(`params`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `LayoutParams` |
| `options` | [`LayoutOptions`](/auto-docs/free-auto-layout-plugin/interfaces/LayoutOptions.md) |

#### Returns

`void`

***

### getEdge

**getEdge**(`id`): `undefined` | [`LayoutEdge`](/auto-docs/free-auto-layout-plugin/interfaces/LayoutEdge.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`undefined` | [`LayoutEdge`](/auto-docs/free-auto-layout-plugin/interfaces/LayoutEdge.md)

***

### getNode

**getNode**(`id?`): `undefined` | [`LayoutNode`](/auto-docs/free-auto-layout-plugin/interfaces/LayoutNode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id?` | `string` |

#### Returns

`undefined` | [`LayoutNode`](/auto-docs/free-auto-layout-plugin/interfaces/LayoutNode.md)

***

### getNodeByIndex

**getNodeByIndex**(`index`): `undefined` | [`LayoutNode`](/auto-docs/free-auto-layout-plugin/interfaces/LayoutNode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `string` |

#### Returns

`undefined` | [`LayoutNode`](/auto-docs/free-auto-layout-plugin/interfaces/LayoutNode.md)
