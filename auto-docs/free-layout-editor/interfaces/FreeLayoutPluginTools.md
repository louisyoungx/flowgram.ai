# Interface: FreeLayoutPluginTools

## Table of contents

### Properties

* [autoLayout](/auto-docs/free-layout-editor/interfaces/FreeLayoutPluginTools.md#autolayout)
* [fitView](/auto-docs/free-layout-editor/interfaces/FreeLayoutPluginTools.md#fitview)

## Properties

### autoLayout

**autoLayout**: (`options?`: [`AutoLayoutToolOptions`](/auto-docs/free-layout-editor/types/AutoLayoutToolOptions.md)) => `Promise`<[`AutoLayoutResetFn`](/auto-docs/free-layout-editor/types/AutoLayoutResetFn.md)>

#### Type declaration

(`options?`): `Promise`<[`AutoLayoutResetFn`](/auto-docs/free-layout-editor/types/AutoLayoutResetFn.md)>

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`AutoLayoutToolOptions`](/auto-docs/free-layout-editor/types/AutoLayoutToolOptions.md) |

##### Returns

`Promise`<[`AutoLayoutResetFn`](/auto-docs/free-layout-editor/types/AutoLayoutResetFn.md)>

***

### fitView

**fitView**: (`easing?`: `boolean`) => `Promise`<`void`>

#### Type declaration

(`easing?`): `Promise`<`void`>

##### Parameters

| Name | Type |
| :------ | :------ |
| `easing?` | `boolean` |

##### Returns

`Promise`<`void`>
