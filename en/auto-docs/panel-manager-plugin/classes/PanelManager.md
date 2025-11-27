# Class: PanelManager

## Table of contents

### Constructors

* [constructor](/en/auto-docs/panel-manager-plugin/classes/PanelManager.md#constructor)

### Properties

* [bottom](/en/auto-docs/panel-manager-plugin/classes/PanelManager.md#bottom)
* [config](/en/auto-docs/panel-manager-plugin/classes/PanelManager.md#config)
* [panelRegistry](/en/auto-docs/panel-manager-plugin/classes/PanelManager.md#panelregistry)
* [right](/en/auto-docs/panel-manager-plugin/classes/PanelManager.md#right)

### Methods

* [close](/en/auto-docs/panel-manager-plugin/classes/PanelManager.md#close)
* [dispose](/en/auto-docs/panel-manager-plugin/classes/PanelManager.md#dispose)
* [getPanel](/en/auto-docs/panel-manager-plugin/classes/PanelManager.md#getpanel)
* [init](/en/auto-docs/panel-manager-plugin/classes/PanelManager.md#init)
* [open](/en/auto-docs/panel-manager-plugin/classes/PanelManager.md#open)
* [register](/en/auto-docs/panel-manager-plugin/classes/PanelManager.md#register)

## Constructors

### constructor

**new PanelManager**()

## Properties

### bottom

**bottom**: `FloatPanel`

***

### config

`Readonly` **config**: [`PanelManagerConfig`](/en/auto-docs/panel-manager-plugin/variables/PanelManagerConfig-1.md)

***

### panelRegistry

`Readonly` **panelRegistry**: `Map`<`string`, [`PanelFactory`](/en/auto-docs/panel-manager-plugin/interfaces/PanelFactory.md)<`any`>>

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
| `area` | [`Area`](/en/auto-docs/panel-manager-plugin/types/Area.md) |

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
| `area` | [`Area`](/en/auto-docs/panel-manager-plugin/types/Area.md) | `'right'` |
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
| `factory` | [`PanelFactory`](/en/auto-docs/panel-manager-plugin/interfaces/PanelFactory.md)<`T`> |

#### Returns

`void`
