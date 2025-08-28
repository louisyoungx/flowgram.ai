# Interface: FreeLayoutPluginTools

## Table of contents

### Properties

* [autoLayout](/en/auto-docs/free-layout-editor/interfaces/FreeLayoutPluginTools.md#autolayout)
* [fitView](/en/auto-docs/free-layout-editor/interfaces/FreeLayoutPluginTools.md#fitview)

## Properties

### autoLayout

**autoLayout**: (`options?`: [`AutoLayoutToolOptions`](/en/auto-docs/free-layout-editor/types/AutoLayoutToolOptions.md)) => `Promise`<[`AutoLayoutResetFn`](/en/auto-docs/free-layout-editor/types/AutoLayoutResetFn.md)>

#### Type declaration

(`options?`): `Promise`<[`AutoLayoutResetFn`](/en/auto-docs/free-layout-editor/types/AutoLayoutResetFn.md)>

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`AutoLayoutToolOptions`](/en/auto-docs/free-layout-editor/types/AutoLayoutToolOptions.md) |

##### Returns

`Promise`<[`AutoLayoutResetFn`](/en/auto-docs/free-layout-editor/types/AutoLayoutResetFn.md)>

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
