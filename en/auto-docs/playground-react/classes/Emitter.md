# Class: Emitter\<T>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

## Table of contents

### Constructors

* [constructor](/en/auto-docs/playground-react/classes/Emitter.md#constructor)

### Properties

* [LEAK\_WARNING\_THRESHHOLD](/en/auto-docs/playground-react/classes/Emitter.md#leak_warning_threshhold)

### Accessors

* [disposed](/en/auto-docs/playground-react/classes/Emitter.md#disposed)
* [event](/en/auto-docs/playground-react/classes/Emitter.md#event)

### Methods

* [dispose](/en/auto-docs/playground-react/classes/Emitter.md#dispose)
* [fire](/en/auto-docs/playground-react/classes/Emitter.md#fire)

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

`get` **event**(): [`Event`](/en/auto-docs/playground-react/interfaces/Event-1.md)<`T`>

#### Returns

[`Event`](/en/auto-docs/playground-react/interfaces/Event-1.md)<`T`>

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
