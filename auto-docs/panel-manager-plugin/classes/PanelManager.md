# Class: PanelManager

## Table of contents

### Constructors

* [constructor](/auto-docs/panel-manager-plugin/classes/PanelManager.md#constructor)

### Properties

* [bottom](/auto-docs/panel-manager-plugin/classes/PanelManager.md#bottom)
* [config](/auto-docs/panel-manager-plugin/classes/PanelManager.md#config)
* [panelRegistry](/auto-docs/panel-manager-plugin/classes/PanelManager.md#panelregistry)
* [right](/auto-docs/panel-manager-plugin/classes/PanelManager.md#right)

### Methods

* [close](/auto-docs/panel-manager-plugin/classes/PanelManager.md#close)
* [dispose](/auto-docs/panel-manager-plugin/classes/PanelManager.md#dispose)
* [getPanel](/auto-docs/panel-manager-plugin/classes/PanelManager.md#getpanel)
* [init](/auto-docs/panel-manager-plugin/classes/PanelManager.md#init)
* [open](/auto-docs/panel-manager-plugin/classes/PanelManager.md#open)
* [register](/auto-docs/panel-manager-plugin/classes/PanelManager.md#register)

## Constructors

### constructor

**new PanelManager**()

## Properties

### bottom

**bottom**: `FloatPanel`

***

### config

`Readonly` **config**: `PanelManagerConfig`

***

### panelRegistry

`Readonly` **panelRegistry**: `Map`<`string`, [`PanelFactory`](/auto-docs/panel-manager-plugin/interfaces/PanelFactory.md)<`any`>>

***

### right

**right**: `FloatPanel`

## Methods

### close

**close**(`key?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key?` | `string` |

#### Returns

`void`

***

### dispose

**dispose**(): `void`

#### Returns

`void`

***

### getPanel

**getPanel**(`area`): `FloatPanel`

#### Parameters

| Name | Type |
| :------ | :------ |
| `area` | [`Area`](/auto-docs/panel-manager-plugin/types/Area.md) |

#### Returns

`FloatPanel`

***

### init

**init**(): `void`

#### Returns

`void`

***

### open

**open**(`key`, `area?`, `options?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | `string` | `undefined` |
| `area` | [`Area`](/auto-docs/panel-manager-plugin/types/Area.md) | `'right'` |
| `options?` | `any` | `undefined` |

#### Returns

`void`

***

### register

**register**<`T`>(`factory`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`PanelFactory`](/auto-docs/panel-manager-plugin/interfaces/PanelFactory.md)<`T`> |

#### Returns

`void`
