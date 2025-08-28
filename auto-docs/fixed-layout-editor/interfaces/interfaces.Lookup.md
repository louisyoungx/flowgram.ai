# Interface: Lookup\<T>

[interfaces](/auto-docs/fixed-layout-editor/modules/interfaces.md).Lookup

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

* [`Clonable`](/auto-docs/fixed-layout-editor/interfaces/interfaces.Clonable.md)<[`Lookup`](/auto-docs/fixed-layout-editor/interfaces/interfaces.Lookup.md)<`T`>>

  ↳ **`Lookup`**

## Table of contents

### Methods

* [add](/auto-docs/fixed-layout-editor/interfaces/interfaces.Lookup.md#add)
* [clone](/auto-docs/fixed-layout-editor/interfaces/interfaces.Lookup.md#clone)
* [get](/auto-docs/fixed-layout-editor/interfaces/interfaces.Lookup.md#get)
* [getMap](/auto-docs/fixed-layout-editor/interfaces/interfaces.Lookup.md#getmap)
* [hasKey](/auto-docs/fixed-layout-editor/interfaces/interfaces.Lookup.md#haskey)
* [remove](/auto-docs/fixed-layout-editor/interfaces/interfaces.Lookup.md#remove)
* [removeByCondition](/auto-docs/fixed-layout-editor/interfaces/interfaces.Lookup.md#removebycondition)
* [removeIntersection](/auto-docs/fixed-layout-editor/interfaces/interfaces.Lookup.md#removeintersection)
* [traverse](/auto-docs/fixed-layout-editor/interfaces/interfaces.Lookup.md#traverse)

## Methods

### add

**add**(`serviceIdentifier`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `serviceIdentifier` | [`ServiceIdentifier`](/auto-docs/fixed-layout-editor/types/interfaces.ServiceIdentifier.md)<`unknown`> |
| `value` | `T` |

#### Returns

`void`

***

### clone

**clone**(): [`Lookup`](/auto-docs/fixed-layout-editor/interfaces/interfaces.Lookup.md)<`T`>

#### Returns

[`Lookup`](/auto-docs/fixed-layout-editor/interfaces/interfaces.Lookup.md)<`T`>

#### Overrides

[Clonable](/auto-docs/fixed-layout-editor/interfaces/interfaces.Clonable.md).[clone](/auto-docs/fixed-layout-editor/interfaces/interfaces.Clonable.md#clone)

***

### get

**get**(`serviceIdentifier`): `T`\[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `serviceIdentifier` | [`ServiceIdentifier`](/auto-docs/fixed-layout-editor/types/interfaces.ServiceIdentifier.md)<`unknown`> |

#### Returns

`T`\[]

***

### getMap

**getMap**(): `Map`<[`ServiceIdentifier`](/auto-docs/fixed-layout-editor/types/interfaces.ServiceIdentifier.md)<`unknown`>, `T`\[]>

#### Returns

`Map`<[`ServiceIdentifier`](/auto-docs/fixed-layout-editor/types/interfaces.ServiceIdentifier.md)<`unknown`>, `T`\[]>

***

### hasKey

**hasKey**(`serviceIdentifier`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `serviceIdentifier` | [`ServiceIdentifier`](/auto-docs/fixed-layout-editor/types/interfaces.ServiceIdentifier.md)<`unknown`> |

#### Returns

`boolean`

***

### remove

**remove**(`serviceIdentifier`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `serviceIdentifier` | [`ServiceIdentifier`](/auto-docs/fixed-layout-editor/types/interfaces.ServiceIdentifier.md)<`unknown`> |

#### Returns

`void`

***

### removeByCondition

**removeByCondition**(`condition`): `T`\[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | (`item`: `T`) => `boolean` |

#### Returns

`T`\[]

***

### removeIntersection

**removeIntersection**(`lookup`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lookup` | [`Lookup`](/auto-docs/fixed-layout-editor/interfaces/interfaces.Lookup.md)<`T`> |

#### Returns

`void`

***

### traverse

**traverse**(`func`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | (`key`: [`ServiceIdentifier`](/auto-docs/fixed-layout-editor/types/interfaces.ServiceIdentifier.md)<`unknown`>, `value`: `T`\[]) => `void` |

#### Returns

`void`
