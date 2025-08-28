# Interface: AsyncContainerModule

[interfaces](/auto-docs/editor/modules/interfaces.md).AsyncContainerModule

## Hierarchy

* [`ContainerModuleBase`](/auto-docs/editor/interfaces/interfaces.ContainerModuleBase.md)

  ↳ **`AsyncContainerModule`**

## Implemented by

* [`AsyncContainerModule`](/auto-docs/editor/classes/AsyncContainerModule.md)

## Table of contents

### Properties

* [id](/auto-docs/editor/interfaces/interfaces.AsyncContainerModule.md#id)
* [registry](/auto-docs/editor/interfaces/interfaces.AsyncContainerModule.md#registry)

## Properties

### id

**id**: `number`

#### Inherited from

[ContainerModuleBase](/auto-docs/editor/interfaces/interfaces.ContainerModuleBase.md).[id](/auto-docs/editor/interfaces/interfaces.ContainerModuleBase.md#id)

***

### registry

**registry**: (...`args`: \[bind: Bind, unbind: Unbind, isBound: IsBound, rebind: Rebind, unbindAsync: UnbindAsync, onActivation: Function, onDeactivation: Function]) => `Promise`<`void`>

#### Type declaration

(`...args`): `Promise`<`void`>

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | \[bind: Bind, unbind: Unbind, isBound: IsBound, rebind: Rebind, unbindAsync: UnbindAsync, onActivation: Function, onDeactivation: Function] |

##### Returns

`Promise`<`void`>
