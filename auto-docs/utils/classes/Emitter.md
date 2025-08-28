# Class: Emitter\<T>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

## Table of contents

### Constructors

* [constructor](/auto-docs/utils/classes/Emitter.md#constructor)

### Properties

* [LEAK\_WARNING\_THRESHHOLD](/auto-docs/utils/classes/Emitter.md#leak_warning_threshhold)

### Accessors

* [disposed](/auto-docs/utils/classes/Emitter.md#disposed)
* [event](/auto-docs/utils/classes/Emitter.md#event)

### Methods

* [dispose](/auto-docs/utils/classes/Emitter.md#dispose)
* [fire](/auto-docs/utils/classes/Emitter.md#fire)

## Constructors

### constructor

**new Emitter**<`T`>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

## Properties

### LEAK\_WARNING\_THRESHHOLD

`Static` **LEAK\_WARNING\_THRESHHOLD**: `number` = `175`

## Accessors

### disposed

`get` **disposed**(): `boolean`

#### Returns

`boolean`

***

### event

`get` **event**(): [`Event`](/auto-docs/utils/interfaces/Event-1.md)<`T`>

#### Returns

[`Event`](/auto-docs/utils/interfaces/Event-1.md)<`T`>

## Methods

### dispose

**dispose**(): `void`

#### Returns

`void`

***

### fire

**fire**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |

#### Returns

`void`
