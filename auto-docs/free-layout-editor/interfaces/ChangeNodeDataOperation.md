# Interface: ChangeNodeDataOperation

操作

## Hierarchy

* [`Operation`](/auto-docs/free-layout-editor/interfaces/Operation.md)

  ↳ **`ChangeNodeDataOperation`**

## Table of contents

### Properties

* [origin](/auto-docs/free-layout-editor/interfaces/ChangeNodeDataOperation.md#origin)
* [type](/auto-docs/free-layout-editor/interfaces/ChangeNodeDataOperation.md#type)
* [uri](/auto-docs/free-layout-editor/interfaces/ChangeNodeDataOperation.md#uri)
* [value](/auto-docs/free-layout-editor/interfaces/ChangeNodeDataOperation.md#value)

## Properties

### origin

`Optional` **origin**: `string` | `Symbol`

操作触发源头

#### Inherited from

[Operation](/auto-docs/free-layout-editor/interfaces/Operation.md).[origin](/auto-docs/free-layout-editor/interfaces/Operation.md#origin)

***

### type

**type**: [`changeNodeData`](/auto-docs/free-layout-editor/enums/FreeOperationType.md#changenodedata)

操作的类型 如insert\_node, move\_node等

#### Overrides

[Operation](/auto-docs/free-layout-editor/interfaces/Operation.md).[type](/auto-docs/free-layout-editor/interfaces/Operation.md#type)

***

### uri

`Optional` **uri**: `string`

资源唯一标志

#### Inherited from

[Operation](/auto-docs/free-layout-editor/interfaces/Operation.md).[uri](/auto-docs/free-layout-editor/interfaces/Operation.md#uri)

***

### value

**value**: [`ChangeNodeDataValue`](/auto-docs/free-layout-editor/interfaces/ChangeNodeDataValue.md)

操作的值 外部自定义

#### Overrides

[Operation](/auto-docs/free-layout-editor/interfaces/Operation.md).[value](/auto-docs/free-layout-editor/interfaces/Operation.md#value)
