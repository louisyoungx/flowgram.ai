# Class: FlowMinimapService

## Table of contents

### Constructors

* [constructor](/auto-docs/minimap-plugin/classes/FlowMinimapService.md#constructor)

### Properties

* [activated](/auto-docs/minimap-plugin/classes/FlowMinimapService.md#activated)
* [canvas](/auto-docs/minimap-plugin/classes/FlowMinimapService.md#canvas)
* [context2D](/auto-docs/minimap-plugin/classes/FlowMinimapService.md#context2d)

### Methods

* [dispose](/auto-docs/minimap-plugin/classes/FlowMinimapService.md#dispose)
* [init](/auto-docs/minimap-plugin/classes/FlowMinimapService.md#init)
* [onActive](/auto-docs/minimap-plugin/classes/FlowMinimapService.md#onactive)
* [setActivate](/auto-docs/minimap-plugin/classes/FlowMinimapService.md#setactivate)

## Constructors

### constructor

**new FlowMinimapService**()

## Properties

### activated

**activated**: `boolean`

***

### canvas

`Readonly` **canvas**: `HTMLCanvasElement`

***

### context2D

`Readonly` **context2D**: `CanvasRenderingContext2D`

## Methods

### dispose

**dispose**(): `void`

#### Returns

`void`

***

### init

**init**(`options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<[`MinimapServiceOptions`](/auto-docs/minimap-plugin/interfaces/MinimapServiceOptions.md)> |

#### Returns

`void`

***

### onActive

**onActive**(`callback`): `Disposable`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`activated`: `boolean`) => `void` |

#### Returns

`Disposable`

***

### setActivate

**setActivate**(`activate`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `activate` | `boolean` |

#### Returns

`void`
