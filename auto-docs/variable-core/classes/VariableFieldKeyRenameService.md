# Class: VariableFieldKeyRenameService

## Table of contents

### Constructors

* [constructor](/auto-docs/variable-core/classes/VariableFieldKeyRenameService.md#constructor)

### Properties

* [disposeInListEmitter](/auto-docs/variable-core/classes/VariableFieldKeyRenameService.md#disposeinlistemitter)
* [onDisposeInList](/auto-docs/variable-core/classes/VariableFieldKeyRenameService.md#ondisposeinlist)
* [onRename](/auto-docs/variable-core/classes/VariableFieldKeyRenameService.md#onrename)
* [renameEmitter](/auto-docs/variable-core/classes/VariableFieldKeyRenameService.md#renameemitter)
* [toDispose](/auto-docs/variable-core/classes/VariableFieldKeyRenameService.md#todispose)
* [variableEngine](/auto-docs/variable-core/classes/VariableFieldKeyRenameService.md#variableengine)

### Methods

* [dispose](/auto-docs/variable-core/classes/VariableFieldKeyRenameService.md#dispose)
* [handleFieldListChange](/auto-docs/variable-core/classes/VariableFieldKeyRenameService.md#handlefieldlistchange)
* [init](/auto-docs/variable-core/classes/VariableFieldKeyRenameService.md#init)
* [notifyFieldsDispose](/auto-docs/variable-core/classes/VariableFieldKeyRenameService.md#notifyfieldsdispose)

## Constructors

### constructor

**new VariableFieldKeyRenameService**()

## Properties

### disposeInListEmitter

**disposeInListEmitter**: `Emitter`<[`BaseVariableField`](/auto-docs/variable-core/classes/BaseVariableField.md)<`any`>>

***

### onDisposeInList

**onDisposeInList**: `Event`<[`BaseVariableField`](/auto-docs/variable-core/classes/BaseVariableField.md)<`any`>>

***

### onRename

**onRename**: `Event`<`RenameInfo`>

***

### renameEmitter

**renameEmitter**: `Emitter`<`RenameInfo`>

***

### toDispose

**toDispose**: `DisposableCollection`

***

### variableEngine

**variableEngine**: [`VariableEngine`](/auto-docs/variable-core/classes/VariableEngine.md)

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
| `ast?` | [`ASTNode`](/auto-docs/variable-core/classes/ASTNode.md)<`any`, `any`> |
| `prev?` | [`BaseVariableField`](/auto-docs/variable-core/classes/BaseVariableField.md)<`any`>\[] |
| `next?` | [`BaseVariableField`](/auto-docs/variable-core/classes/BaseVariableField.md)<`any`>\[] |

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
| `prev?` | [`BaseVariableField`](/auto-docs/variable-core/classes/BaseVariableField.md)<`any`>\[] |
| `next?` | [`BaseVariableField`](/auto-docs/variable-core/classes/BaseVariableField.md)<`any`>\[] |

#### Returns

`void`
