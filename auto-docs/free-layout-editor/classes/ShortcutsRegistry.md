# Class: ShortcutsRegistry

## Table of contents

### Constructors

* [constructor](/auto-docs/free-layout-editor/classes/ShortcutsRegistry.md#constructor)

### Properties

* [shortcutsHandlers](/auto-docs/free-layout-editor/classes/ShortcutsRegistry.md#shortcutshandlers)

### Methods

* [addHandlers](/auto-docs/free-layout-editor/classes/ShortcutsRegistry.md#addhandlers)
* [addHandlersIfNotFound](/auto-docs/free-layout-editor/classes/ShortcutsRegistry.md#addhandlersifnotfound)
* [has](/auto-docs/free-layout-editor/classes/ShortcutsRegistry.md#has)

## Constructors

### constructor

**new ShortcutsRegistry**()

## Properties

### shortcutsHandlers

`Readonly` **shortcutsHandlers**: [`ShortcutsHandler`](/auto-docs/free-layout-editor/interfaces/ShortcutsHandler.md)\[]

## Methods

### addHandlers

**addHandlers**(`...handlers`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...handlers` | [`ShortcutsHandler`](/auto-docs/free-layout-editor/interfaces/ShortcutsHandler.md)\[] |

#### Returns

`void`

***

### addHandlersIfNotFound

**addHandlersIfNotFound**(`...handlers`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...handlers` | [`ShortcutsHandler`](/auto-docs/free-layout-editor/interfaces/ShortcutsHandler.md)\[] |

#### Returns

`void`

***

### has

**has**(`commandId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `commandId` | `string` |

#### Returns

`boolean`
