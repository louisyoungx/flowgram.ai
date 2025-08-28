# Class: VariableFieldKeyRenameService

## Table of contents

### Constructors

* [constructor](/auto-docs/editor/classes/VariableFieldKeyRenameService.md#constructor)

### Properties

* [disposeInListEmitter](/auto-docs/editor/classes/VariableFieldKeyRenameService.md#disposeinlistemitter)
* [onDisposeInList](/auto-docs/editor/classes/VariableFieldKeyRenameService.md#ondisposeinlist)
* [onRename](/auto-docs/editor/classes/VariableFieldKeyRenameService.md#onrename)
* [renameEmitter](/auto-docs/editor/classes/VariableFieldKeyRenameService.md#renameemitter)
* [toDispose](/auto-docs/editor/classes/VariableFieldKeyRenameService.md#todispose)
* [variableEngine](/auto-docs/editor/classes/VariableFieldKeyRenameService.md#variableengine)

### Methods

* [dispose](/auto-docs/editor/classes/VariableFieldKeyRenameService.md#dispose)
* [handleFieldListChange](/auto-docs/editor/classes/VariableFieldKeyRenameService.md#handlefieldlistchange)
* [init](/auto-docs/editor/classes/VariableFieldKeyRenameService.md#init)
* [notifyFieldsDispose](/auto-docs/editor/classes/VariableFieldKeyRenameService.md#notifyfieldsdispose)

## Constructors

### constructor

**new VariableFieldKeyRenameService**()

## Properties

### disposeInListEmitter

**disposeInListEmitter**: [`Emitter`](/auto-docs/editor/classes/Emitter.md)<[`BaseVariableField`](/auto-docs/editor/classes/BaseVariableField.md)<`any`>>

***

### onDisposeInList

**onDisposeInList**: [`Event`](/auto-docs/editor/interfaces/Event-1.md)<[`BaseVariableField`](/auto-docs/editor/classes/BaseVariableField.md)<`any`>>

***

### onRename

**onRename**: [`Event`](/auto-docs/editor/interfaces/Event-1.md)<`RenameInfo`>

***

### renameEmitter

**renameEmitter**: [`Emitter`](/auto-docs/editor/classes/Emitter.md)<`RenameInfo`>

***

### toDispose

**toDispose**: [`DisposableCollection`](/auto-docs/editor/classes/DisposableCollection.md)

***

### variableEngine

**variableEngine**: [`VariableEngine`](/auto-docs/editor/classes/VariableEngine.md)

## Methods

### dispose

**dispose**(): `void`

#### Returns

`void`

***

### handleFieldListChange

**handleFieldListChange**(`ast?`, `prev?`, `next?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ast?` | [`ASTNode`](/auto-docs/editor/classes/ASTNode.md)<`any`, `any`> |
| `prev?` | [`BaseVariableField`](/auto-docs/editor/classes/BaseVariableField.md)<`any`>\[] |
| `next?` | [`BaseVariableField`](/auto-docs/editor/classes/BaseVariableField.md)<`any`>\[] |

#### Returns

`void`

***

### init

**init**(): `void`

#### Returns

`void`

***

### notifyFieldsDispose

**notifyFieldsDispose**(`prev?`, `next?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `prev?` | [`BaseVariableField`](/auto-docs/editor/classes/BaseVariableField.md)<`any`>\[] |
| `next?` | [`BaseVariableField`](/auto-docs/editor/classes/BaseVariableField.md)<`any`>\[] |

#### Returns

`void`
