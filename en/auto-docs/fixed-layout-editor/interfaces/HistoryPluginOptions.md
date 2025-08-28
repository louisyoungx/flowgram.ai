# Interface: HistoryPluginOptions\<T>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [`PluginContext`](/en/auto-docs/fixed-layout-editor/variables/PluginContext-1.md) |

## Hierarchy

* **`HistoryPluginOptions`**

  ↳ [`FixedHistoryPluginOptions`](/en/auto-docs/fixed-layout-editor/interfaces/FixedHistoryPluginOptions.md)

## Table of contents

### Properties

* [enable](/en/auto-docs/fixed-layout-editor/interfaces/HistoryPluginOptions.md#enable)
* [onApply](/en/auto-docs/fixed-layout-editor/interfaces/HistoryPluginOptions.md#onapply)

## Properties

### enable

`Optional` **enable**: `boolean`

***

### onApply

`Optional` **onApply**: (`ctx`: `T`, `operation`: [`Operation`](/en/auto-docs/fixed-layout-editor/interfaces/Operation.md)<`unknown`>) => `void`

#### Type declaration

(`ctx`, `operation`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `T` |
| `operation` | [`Operation`](/en/auto-docs/fixed-layout-editor/interfaces/Operation.md)<`unknown`> |

##### Returns

`void`
