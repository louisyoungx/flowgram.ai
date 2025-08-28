# Interface: WorkflowPort

## Hierarchy

* **`WorkflowPort`**

  ↳ [`WorkflowPortEntityOpts`](/en/auto-docs/free-layout-core/interfaces/WorkflowPortEntityOpts.md)

## Table of contents

### Properties

* [disabled](/en/auto-docs/free-layout-core/interfaces/WorkflowPort.md#disabled)
* [location](/en/auto-docs/free-layout-core/interfaces/WorkflowPort.md#location)
* [offset](/en/auto-docs/free-layout-core/interfaces/WorkflowPort.md#offset)
* [portID](/en/auto-docs/free-layout-core/interfaces/WorkflowPort.md#portid)
* [size](/en/auto-docs/free-layout-core/interfaces/WorkflowPort.md#size)
* [targetElement](/en/auto-docs/free-layout-core/interfaces/WorkflowPort.md#targetelement)
* [type](/en/auto-docs/free-layout-core/interfaces/WorkflowPort.md#type)

## Properties

### disabled

`Optional` **disabled**: `boolean`

禁用端口

***

### location

`Optional` **location**: [`LinePointLocation`](/en/auto-docs/free-layout-core/types/LinePointLocation.md)

端口位置

***

### offset

`Optional` **offset**: `IPoint`

相对于 position 的偏移

***

### portID

`Optional` **portID**: `string` | `number`

没有代表 默认连接点，默认 input 类型 为最左边中心，output 类型为最右边中心

***

### size

`Optional` **size**: `Object`

端口热区大小

#### Type declaration

| Name | Type |
| :------ | :------ |
| `height` | `number` |
| `width` | `number` |

***

### targetElement

`Optional` **targetElement**: `HTMLElement`

将点位渲染到该父节点上

***

### type

**type**: [`WorkflowPortType`](/en/auto-docs/free-layout-core/types/WorkflowPortType.md)

输入或者输出点
