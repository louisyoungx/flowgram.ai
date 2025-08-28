# Class: VariableFieldKeyRenameService

## Table of contents

### Constructors

* [constructor](/en/auto-docs/editor/classes/VariableFieldKeyRenameService.md#constructor)

### Properties

* [disposeInListEmitter](/en/auto-docs/editor/classes/VariableFieldKeyRenameService.md#disposeinlistemitter)
* [onDisposeInList](/en/auto-docs/editor/classes/VariableFieldKeyRenameService.md#ondisposeinlist)
* [onRename](/en/auto-docs/editor/classes/VariableFieldKeyRenameService.md#onrename)
* [renameEmitter](/en/auto-docs/editor/classes/VariableFieldKeyRenameService.md#renameemitter)
* [toDispose](/en/auto-docs/editor/classes/VariableFieldKeyRenameService.md#todispose)
* [variableEngine](/en/auto-docs/editor/classes/VariableFieldKeyRenameService.md#variableengine)

### Methods

* [dispose](/en/auto-docs/editor/classes/VariableFieldKeyRenameService.md#dispose)
* [handleFieldListChange](/en/auto-docs/editor/classes/VariableFieldKeyRenameService.md#handlefieldlistchange)
* [init](/en/auto-docs/editor/classes/VariableFieldKeyRenameService.md#init)
* [notifyFieldsDispose](/en/auto-docs/editor/classes/VariableFieldKeyRenameService.md#notifyfieldsdispose)

## Constructors

### constructor

**new VariableFieldKeyRenameService**()

## Properties

### disposeInListEmitter

**disposeInListEmitter**: [`Emitter`](/en/auto-docs/editor/classes/Emitter.md)<[`BaseVariableField`](/en/auto-docs/editor/classes/BaseVariableField.md)<`any`>>

***

### onDisposeInList

**onDisposeInList**: [`Event`](/en/auto-docs/editor/interfaces/Event-1.md)<[`BaseVariableField`](/en/auto-docs/editor/classes/BaseVariableField.md)<`any`>>

***

### onRename

**onRename**: [`Event`](/en/auto-docs/editor/interfaces/Event-1.md)<`RenameInfo`>

***

### renameEmitter

**renameEmitter**: [`Emitter`](/en/auto-docs/editor/classes/Emitter.md)<`RenameInfo`>

***

### toDispose

**toDispose**: [`DisposableCollection`](/en/auto-docs/editor/classes/DisposableCollection.md)

***

### variableEngine

**variableEngine**: [`VariableEngine`](/en/auto-docs/editor/classes/VariableEngine.md)

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
| `ast?` | [`ASTNode`](/en/auto-docs/editor/classes/ASTNode.md)<`any`, `any`> |
| `prev?` | [`BaseVariableField`](/en/auto-docs/editor/classes/BaseVariableField.md)<`any`>\[] |
| `next?` | [`BaseVariableField`](/en/auto-docs/editor/classes/BaseVariableField.md)<`any`>\[] |

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
| `prev?` | [`BaseVariableField`](/en/auto-docs/editor/classes/BaseVariableField.md)<`any`>\[] |
| `next?` | [`BaseVariableField`](/en/auto-docs/editor/classes/BaseVariableField.md)<`any`>\[] |

#### Returns

`void`
