# Class: Emitter\<T>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

## Table of contents

### Constructors

* [constructor](/auto-docs/fixed-layout-editor/classes/Emitter.md#constructor)

### Properties

* [LEAK\_WARNING\_THRESHHOLD](/auto-docs/fixed-layout-editor/classes/Emitter.md#leak_warning_threshhold)

### Accessors

* [disposed](/auto-docs/fixed-layout-editor/classes/Emitter.md#disposed)
* [event](/auto-docs/fixed-layout-editor/classes/Emitter.md#event)

### Methods

* [dispose](/auto-docs/fixed-layout-editor/classes/Emitter.md#dispose)
* [fire](/auto-docs/fixed-layout-editor/classes/Emitter.md#fire)

## Constructors

### constructor

**new Emitter**<`T`>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

## Properties

### LEAK\_WARNING\_THRESHHOLD

`Static` **LEAK\_WARNING\_THRESHHOLD**: `number`

## Accessors

### disposed

`get` **disposed**(): `boolean`

#### Returns

`boolean`

***

### event

`get` **event**(): [`Event`](/auto-docs/fixed-layout-editor/interfaces/Event-1.md)<`T`>

#### Returns

[`Event`](/auto-docs/fixed-layout-editor/interfaces/Event-1.md)<`T`>

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
