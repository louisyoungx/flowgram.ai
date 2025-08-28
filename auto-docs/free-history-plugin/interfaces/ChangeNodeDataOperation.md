# Interface: ChangeNodeDataOperation

操作

## Hierarchy

* [`Operation`](/auto-docs/free-history-plugin/interfaces/Operation.md)

  ↳ **`ChangeNodeDataOperation`**

## Table of contents

### Properties

* [origin](/auto-docs/free-history-plugin/interfaces/ChangeNodeDataOperation.md#origin)
* [type](/auto-docs/free-history-plugin/interfaces/ChangeNodeDataOperation.md#type)
* [uri](/auto-docs/free-history-plugin/interfaces/ChangeNodeDataOperation.md#uri)
* [value](/auto-docs/free-history-plugin/interfaces/ChangeNodeDataOperation.md#value)

## Properties

### origin

`Optional` **origin**: `string` | `Symbol`

操作触发源头

#### Inherited from

[Operation](/auto-docs/free-history-plugin/interfaces/Operation.md).[origin](/auto-docs/free-history-plugin/interfaces/Operation.md#origin)

***

### type

**type**: [`changeNodeData`](/auto-docs/free-history-plugin/enums/FreeOperationType.md#changenodedata)

操作的类型 如insert\_node, move\_node等

#### Overrides

[Operation](/auto-docs/free-history-plugin/interfaces/Operation.md).[type](/auto-docs/free-history-plugin/interfaces/Operation.md#type)

***

### uri

`Optional` **uri**: `string`

资源唯一标志

#### Inherited from

[Operation](/auto-docs/free-history-plugin/interfaces/Operation.md).[uri](/auto-docs/free-history-plugin/interfaces/Operation.md#uri)

***

### value

**value**: [`ChangeNodeDataValue`](/auto-docs/free-history-plugin/interfaces/ChangeNodeDataValue.md)

操作的值 外部自定义

#### Overrides

[Operation](/auto-docs/free-history-plugin/interfaces/Operation.md).[value](/auto-docs/free-history-plugin/interfaces/Operation.md#value)
