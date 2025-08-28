# Interface: LayoutNode

## Table of contents

### Properties

* [entity](/auto-docs/free-auto-layout-plugin/interfaces/LayoutNode.md#entity)
* [followTo](/auto-docs/free-auto-layout-plugin/interfaces/LayoutNode.md#followto)
* [followedBy](/auto-docs/free-auto-layout-plugin/interfaces/LayoutNode.md#followedby)
* [hasChildren](/auto-docs/free-auto-layout-plugin/interfaces/LayoutNode.md#haschildren)
* [id](/auto-docs/free-auto-layout-plugin/interfaces/LayoutNode.md#id)
* [index](/auto-docs/free-auto-layout-plugin/interfaces/LayoutNode.md#index)
* [offset](/auto-docs/free-auto-layout-plugin/interfaces/LayoutNode.md#offset)
* [order](/auto-docs/free-auto-layout-plugin/interfaces/LayoutNode.md#order)
* [position](/auto-docs/free-auto-layout-plugin/interfaces/LayoutNode.md#position)
* [rank](/auto-docs/free-auto-layout-plugin/interfaces/LayoutNode.md#rank)
* [size](/auto-docs/free-auto-layout-plugin/interfaces/LayoutNode.md#size)

## Properties

### entity

**entity**: `FlowNodeEntity`

节点实体

***

### followTo

`Optional` **followTo**: `string`

跟随节点

***

### followedBy

`Optional` **followedBy**: `string`\[]

被跟随节点

***

### hasChildren

**hasChildren**: `boolean`

是否存在子节点

***

### id

**id**: `string`

***

### index

**index**: `string`

节点索引

***

### offset

**offset**: `Object`

偏移量

#### Type declaration

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

***

### order

**order**: `number`

顺序

***

### position

**position**: `Object`

位置

#### Type declaration

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

***

### rank

**rank**: `number`

层级

***

### size

**size**: `Object`

宽高

#### Type declaration

| Name | Type |
| :------ | :------ |
| `height` | `number` |
| `width` | `number` |
